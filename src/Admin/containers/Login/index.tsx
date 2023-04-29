import React, { useState } from "react";
import { IntlShape, injectIntl } from "react-intl";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import bcrypt from "bcryptjs";
import { useSignIn } from "react-auth-kit";

import logo from "../../../assets/images/logo.png";

import messages from "./messages";
import { loginUser } from "./calls";

function Login(props: { intl: IntlShape }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [messageBar, setMessageBar] = useState<any>({});

  const { formatMessage } = props.intl;
  const signIn = useSignIn();
  const navigate = useNavigate();

  const hashPassword = async (value: string) => {
    try {
      const hashedPassword = await bcrypt.hash(value, 10);
      return hashedPassword;
    } catch (error) {
      console.error("Unexpected error while hashing passwords");
    }
  };

  const validateForm = () => {
    let errors = {} as any;

    if (!email.length) {
      errors.emptyEmail = "This is required field";
    }

    if (!password.length) {
      errors.emptyPassword = "This is required field";
    }

    if (Object.keys(errors).length) {
      setPassword("");
      setError(true);
      setMessageBar({
        type: "ERROR",
        message:
          "The form contains errors. Please review your credentials and try again",
      });
    }

    return !Object.keys(errors).length;
  };

  const doLogin = async () => {
    const logContext = {
      component: "Admin/containers/index.doLogin",
    };

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await loginUser(email, password);

      if (!response.success) {
        throw new Error("Error while logging in the user");
      }

      console.log(response.data);

      if (response.success) {
        signIn({
          token: response.data.accessToken,
          expiresIn: 10_800,
          tokenType: "Bearer",
          authState: { email },
        });
      }

      navigate("/administration");
    } catch (error: any) {
      setLoading(false);
      setError(true);
      setMessageBar({
        type: "ERROR",
        message: error.message,
      });
      console.error("Unexpected error while trying to login the user", {
        ...logContext,
        error,
      });
    }
    setLoading(false);
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Login - Ukrainian Canadian Socical Services</title>
      </Helmet>
      <div className="w-full h-screen flex justify-center items-center login-cover object-cover">
        <div className="overlay"></div>
        <div className="flex flex-col justify-center lg:w-4/12 w-8/12 px-8 bg-white shadow rounded-xl p-5">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Ukrainian Canadian Social Services Ottawa"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {formatMessage({ ...messages.title })}
            </h2>
          </div>

          {error && messageBar && (
            <div className="text-center text-sm bg-red-300 rounded shadow-sm p-2 my-3 text-gray-50 font-medium">
              {messageBar.message}
            </div>
          )}

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  {formatMessage({ ...messages.email })}
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    {formatMessage({ ...messages.password })}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={() => doLogin()}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {formatMessage({ ...messages.title })}
                </button>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-500">
                  {formatMessage({ ...messages.memo })}{" "}
                  <a
                    href="mailto:nazar@ucssottawa.com"
                    className="text-blue-300">
                    nazar@ucssottawa.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default injectIntl(Login);
