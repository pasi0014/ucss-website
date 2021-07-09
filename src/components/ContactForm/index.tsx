import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { send } from "emailjs-com";
import validator from "validator";
import LoadingOverlay from "react-loading-overlay-ts";

interface IValidationErrors {
  fullNameError: string;
  emailError: string;
  messageError: string;
}

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<IValidationErrors>(
    {} as IValidationErrors
  );
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (doValidateForm()) {
      const response = await send(
        "service_jrt4xk3",
        "template_e7yormj",
        toSend,
        "user_AbY04H1SQlHJDuvIm4DQh"
      );
      setIsLoading(false);
      if (response.status === 200) {
        console.info(`Email has been sent successfully`, {
          component: `ContactForm/index.tsx`,
          params: toSend,
          response: response,
        });
        setSuccess(true);
        setToSend({ from_name: "", message: "", reply_to: "" });
      } else {
        setSuccess(false);
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
  }

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
    <section className="text-gray-600 body-font relative bg-gray-200">
      <LoadingOverlay active={isLoading} spinner text="Loading...">
        <div className="container px-5 py-24 w-10/12 mx-auto rounded-lg shadow-lg bg-white">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We will be glad to hear from you!
            </p>
          </div>

          <form onSubmit={onSubmit}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm font-medium text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
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
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm font-medium text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="reply_to"
                      placeholder="Your email"
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
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm font-medium text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
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
                  <div className="p-2 w-full mx-auto text-center">
                    <span className="text-green-500 font-medium">
                      Message was sent successfully
                    </span>
                  </div>
                )}
                <div className="p-2 w-full flex flex-row items-center justify-center space-x-4">
                  <button
                    type="submit"
                    className="text-white btn bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                  >
                    Send
                  </button>
                  <button
                    type="reset"
                    onClick={onReset}
                    className="text-white btn bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                  >
                    Clear
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a
                    href="mailto:ucssottawa@gmail.com"
                    className="text-blue-500"
                  >
                    ucssottawa@gmail.com
                  </a>
                  <p className="leading-normal my-5">
                    49 Smith St. Saint Cloud, MN 56301
                  </p>
                  <span className="inline-flex">
                    <a href="#s" className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#s" className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="#s" className="ml-4 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a href="#s" className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </LoadingOverlay>
    </section>
  );
};

export default ContactForm;
