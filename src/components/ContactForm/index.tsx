import React, { useState, useEffect } from "react";
import { send } from "emailjs-com";
import validator from "validator";
import LoadingOverlay from "react-loading-overlay-ts";
import { injectIntl } from "react-intl";
import messages from "./messages";
import { Helmet } from "react-helmet";

interface IValidationErrors {
  fullNameError: string;
  emailError: string;
  messageError: string;
}

export const ContactForm = (props: any) => {
  const { scrollFlag, intl } = props;
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<boolean>(false);
  const [errors, setErrors] = useState<IValidationErrors>(
    {} as IValidationErrors
  );
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });



  useEffect(() => {
    if (!scrollFlag) {
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  }, [scrollFlag]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 7000);
    }
  }, [success]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (doValidateForm()) {
      const response = await send(
        process.env.REACT_APP_EMAIL_SERVICE_ID as string,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
        toSend,
        process.env.REACT_APP_EMAIL_USER_ID as string
      );
      setIsLoading(false);
      if (response.status === 200) {
        console.info(`Email has been sent successfully`, {
          component: `ContactForm/index.tsx`,
          params: toSend,
          response: response,
        });
        setSuccess(true);
        setRequestError(false);
        setToSend({ from_name: "", message: "", reply_to: "" });
      } else {
        setSuccess(false);
        setRequestError(true);
        console.error(`Unexpected Error : Could not send email`, {
          component: `ContactForm/index.tsx`,
          params: toSend,
          response: response,
        });
      }
    } else {
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onReset = () => {
    setToSend({ from_name: "", message: "", reply_to: "" });
    setErrors({ fullNameError: "", emailError: "", messageError: "" });
  };

  const doValidateForm = () => {
    let validationErrors = {} as IValidationErrors;
    if (toSend.from_name.length === 0 || toSend.from_name.length < 3) {
      validationErrors.fullNameError = "Please enter your full name";
    }
    if (toSend.reply_to.length === 0) {
      validationErrors.emailError = "Please enter your email";
    }
    if (!validator.isEmail(toSend.reply_to) && toSend.reply_to.length > 0) {
      validationErrors.emailError =
        "Entered email is invalid, please try again";
    }
    if (toSend.message.length === 0) {
      validationErrors.messageError = "Please enter your message";
    }

    setErrors(validationErrors);
    return !Object.keys(validationErrors).length;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Contact Form - Ukrainian Canadian Social Services Ottawa (UCSS Ottawa)
        </title>
        <meta
          name="description"
          content="Ukrainian Canadian Social Services - Ottawa Branch is a non-profit charitable organization serving the Ukrainian community in Ottawa. Guided by the needs of individuals and families of Ukrainian community, who experience language and cultural barriers. We provide a range of support services."
        />
        <meta
          name="keywords"
          content="contact ucss ottawa, ukrainian charitable organization, ukrainian social services contact"
        />
      </Helmet>
      <section className="text-gray-600 body-font font-montserrat relative bg-gray-200">
        <LoadingOverlay active={isLoading} spinner text="Loading...">
          <div className="container px-5 py-24 lg:w-8/12 mx-auto rounded-lg shadow-lg bg-white">
            <div className="flex flex-col text-center w-full mb-12 border-red-300">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                {intl.formatMessage({ ...messages.contactUs })}
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {intl.formatMessage({ ...messages.contactUsSubtitle })}
              </p>
            </div>

            <form onSubmit={onSubmit}>
              <div className="md:w-2/3 mx-auto sm:w-100">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm font-medium text-gray-600"
                    >
                      {intl.formatMessage({ ...messages.nameLabel })}
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder={intl.formatMessage({
                        ...messages.namePlaceholder,
                      })}
                      name="from_name"
                      value={toSend.from_name}
                      onChange={handleChange}
                      className={
                        "w-full bg-gray-100 bg-opacity-50 rounded border " +
                        (errors.fullNameError
                          ? "border-red-500 focus:border-red:300 bg-red-300"
                          : "border-gray-300 focus:border-blue-500") +
                        " focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      }
                    />
                    {errors.fullNameError && (
                      <span className="text-red-500 font-medium text-sm text-opacity-75">
                        {errors.fullNameError}
                      </span>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm font-medium text-gray-600"
                    >
                      {intl.formatMessage({ ...messages.emailLabel })}
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="reply_to"
                      placeholder={intl.formatMessage({
                        ...messages.emailPlaceholder,
                      })}
                      value={toSend.reply_to}
                      onChange={handleChange}
                      className={
                        "w-full bg-gray-100 bg-opacity-50 rounded border " +
                        (errors.emailError
                          ? "border-red-500 focus:border-red:300 bg-red-300 placeholder-white::placeholder"
                          : "border-gray-300 focus:border-blue-500") +
                        " focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      }
                    />
                    {errors.emailError && (
                      <span className="text-red-500 font-medium text-sm text-opacity-75">
                        {errors.emailError}
                      </span>
                    )}
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm font-medium text-gray-600"
                      >
                        {intl.formatMessage({ ...messages.messageLabel })}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder={intl.formatMessage({
                          ...messages.messagePlaceholder,
                        })}
                        value={toSend.message}
                        onChange={handleChange}
                        className={
                          "w-full bg-gray-100 bg-opacity-50 rounded border " +
                          (errors.messageError
                            ? "border-red-500 focus:border-red:300 bg-red-300 placeholder-white::placeholder"
                            : "border-gray-300 focus:border-blue-500") +
                          "focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        }
                      ></textarea>
                      {errors.messageError && (
                        <span className="text-red-500 font-medium text-sm text-opacity-75">
                          {errors.messageError}
                        </span>
                      )}
                    </div>
                  </div>
                  {success && (
                    <div
                      className="mx-auto w-90 py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200"
                      role="alert"
                    >
                      {intl.formatMessage({ ...messages.success })}
                    </div>
                  )}
                  {requestError && (
                    <div
                      className="py-3 px-5 mb-4 bg-red-100 text-red-900 text-sm rounded-md border border-red-200"
                      role="alert"
                    >
                      {intl.formatMessage({ ...messages.error })}
                    </div>
                  )}
                  <div className="p-2 w-full flex flex-row items-center justify-center space-x-4">
                    <button
                      type="submit"
                      className="text-white btn bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                    >
                      {intl.formatMessage({ ...messages.send })}
                    </button>
                    <button
                      type="reset"
                      onClick={onReset}
                      className="text-white btn bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                    >
                      {intl.formatMessage({ ...messages.clear })}
                    </button>
                  </div>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a
                      href="mailto:info@ucssottawa.com"
                      className="text-blue-500"
                    >
                      info@ucssottawa.com
                    </a>
                    <p className="leading-normal my-5">
                      37 Ridgefield Crescent, Ottawa, ON K2H 6S3
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </LoadingOverlay>
      </section>
    </React.Fragment>
  );
};

export default injectIntl(ContactForm);
