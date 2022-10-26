import React, { useState, useEffect } from "react";
import { send } from "emailjs-com";
import validator from "validator";
import { injectIntl, useIntl } from "react-intl";

import Carousel from "react-bootstrap/Carousel";

import campPic from "../../assets/images/IMG_3184.JPG";
import backpacks from "../../assets/images/backpack-1.jpeg";
import supplies from "../../assets/images/supplies-1.jpeg";
import messages from "./messages";

interface IValidationErrors {
  fullNameError: String;
  ageError: String;
  emailError: String;
  messageError: String;
}

function WaitingList() {
  const [trigger, setTrigger] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);
  const [requestError, setRequestError] = useState<boolean>(false);
  const [errors, setErrors] = useState<IValidationErrors>(
    {} as IValidationErrors
  );

  const [index, setIndex] = useState(0);

  const [emailInfo, setEmailInfo] = useState({
    from_name: "",
    message: "",
    age: "",
    reply_to: "",
  });

  const { formatMessage } = useIntl();

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  const validate = () => {
    let validationErrors = {} as IValidationErrors;
    if (emailInfo.from_name.length === 0 || emailInfo.from_name.length < 3) {
      validationErrors.fullNameError = formatMessage({ ...messages.errorName });
    }
    if (emailInfo.reply_to.length === 0) {
      validationErrors.emailError = formatMessage({ ...messages.emptyEmail });
    }
    if (
      !validator.isEmail(emailInfo.reply_to) &&
      emailInfo.reply_to.length > 0
    ) {
      validationErrors.emailError = formatMessage({ ...messages.invalidEmail });
    }
    if (emailInfo.message.length === 0) {
      validationErrors.messageError = formatMessage({
        ...messages.errorMessage,
      });
    }
    if (emailInfo.age.length === 0) {
      validationErrors.ageError = formatMessage({ ...messages.errorAge });
    }

    setErrors(validationErrors);
    return !Object.keys(validationErrors).length;
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (validate()) {
        const response = await send(
          process.env.REACT_APP_WAITING_LIST_SERVICE_ID as string,
          process.env.REACT_APP_WAITING_LIST_TEMPLATE_ID as string,
          emailInfo,
          process.env.REACT_APP_EMAIL_USER_ID as string
        );

        setLoading(false);
        
        if (response.status === 200) {
          console.info(`Email has been sent successfully`, {
            component: `components/WaitingList/index.onSubmit`,
            params: emailInfo,
            response: response,
          });

          setSuccess(true);
          setRequestError(false);
          setEmailInfo({ from_name: "", message: "", reply_to: "", age: "" });
        } else {
          setSuccess(false);
          setRequestError(true);
          console.error(`Unexpected Error : Could not send email`, {
            component: `WaitingList/index.onSubmit`,
            params: emailInfo,
            response: response,
          });
        }
      } else {
        setInterval(() => {
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.error(`Unexpected Error : Could not send email`, {
        component: `WaitingList/index.onSubmit`,
        params: emailInfo,
        error: error,
      });
      setRequestError(true);
    }
  };

  const handleChange = (e: any) => {
    setEmailInfo({ ...emailInfo, [e.target.name]: e.target.value });
  };

  const onReset = () => {
    setRequestError(false);
    setErrors({
      fullNameError: "",
      ageError: "",
      emailError: "",
      messageError: "",
    });
    setEmailInfo({ from_name: "", message: "", reply_to: "", age: "" });
  };

  /**
   * Show success message for 5 seconds
   */
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }, [success]);

  /**
   * DropDown for GiftCertificateForm
   */
  useEffect(() => {
    if (trigger) {
      document
        .getElementById("contentToShow")
        ?.scrollIntoView({ behavior: "smooth" });
      document.getElementById("nameFocus")?.focus({ preventScroll: true });
    }
  }, [trigger]);

  return (
    <div id="waitingList">
      <div className="h-full font-montserrat rounded-xl shadow-cla-pink sm:p-24 flex lg:flex-row flex-col-reverse justify-start">
        <div className="p-6 flex flex-col lg:w-8/12 w-full">
          <h3 className="title-font text-3xl font-bold text-gray-600 mb-3 mt-5 px-3">
            {formatMessage({ ...messages.title })}
          </h3>
          <hr className="border-4 border-orange-300 my-3 mx-3 w-2/12" />
          <span className="leading-relaxed mb-3 p-3 lg:w-10/12 w-full">
            {formatMessage({ ...messages.details })}
          </span>
          <div className="flex justify-start mx-3">
            <button
              className="lg:w-6/12 md:w-4/12 w-full bg-blue-500 p-3 rounded-xl text-white font-medium transition-all hover:bg-blue-400 hover:shadow-md duration-300"
              onClick={() => {
                setTrigger(true);
                document
                  .getElementById("contentToShow")
                  ?.scrollIntoView({ behavior: "smooth" });
                document
                  .getElementById("nameFocus")
                  ?.focus({ preventScroll: true });
              }}
            >
              {formatMessage({ ...messages.ctaButton })}
            </button>
          </div>
        </div>
        <div className="bg-blue-300 rounded-xl p-10 lg:w-9/12 w-full">
          <img
            className="transform lg:h-82 w-full object-cover object-center scale-100 transition-all duration-700 hover:scale-110"
            src={campPic}
            alt="Children dancing next to the fireplace"
          />
        </div>
      </div>

      {/* <div className="w-full h-full sm:p-24 bg-yellow-100 font-montserrat">
        <div className="text-center mb-10 p-6">
          <h3 className="text-3xl">
            {formatMessage({ ...messages.backcpacksTitle })}
          </h3>
        </div>
        <div className="flex lg:flex-row flex-col justify-center mt-7 p-6">
          <div className="lg:w-8/12 w-full mx-auto sm:mt-7">
            <p className="text-lg leading-relaxed mb-3 p-3 lg:w-10/12 w-full">
              {formatMessage({ ...messages.backpack_1 })}
              <br /> <br />
              {formatMessage({ ...messages.backpack_2 })}
            </p>
            <div className="flex justify-start mx-3">
              <button
                className="lg:w-6/12 md:w-4/12 w-full bg-blue-500 p-3 rounded-xl text-white font-medium transition-all hover:bg-blue-400 hover:shadow-md duration-300"
                onClick={() => {
                  setTrigger(true);
                  document
                    .getElementById("contentToShow")
                    ?.scrollIntoView({ behavior: "smooth" });
                  document
                    .getElementById("nameFocus")
                    ?.focus({ preventScroll: true });
                }}
              >
                {formatMessage({ ...messages.ctaButton })}
              </button>
            </div>
          </div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            as="div"
            className="lg:w-8/12 w-full p-5 bg-blue-200 mx-auto rounded-xl shadow-lg mt-10"
          >
            <Carousel.Item as="div">
              <img
                src={backpacks}
                alt="Event"
                className="w-96 mx-auto rounded-xl"
              />
            </Carousel.Item>
            <Carousel.Item as="div">
              <img
                src={supplies}
                alt="Event"
                className="w-96 mx-auto rounded-xl"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div> */}
      {/* Registration Block */}
      <div
        id="contentToShow"
        className={
          !trigger
            ? "hidden"
            : "sm:p-10 md:p-20 bg-orange-300 transition-all duration-200 ease font-montserrat"
        }
      >
        <div className="h-full rounded-xl shadow-cla-pink sm:p-15 flex lg:flex-row flex-col justify-start">
          <div className="p-6 lg:w-8/12 w-full">
            <h3 className="title-font text-2xl font-bold text-gray-700 mb-3 mt-5 px-3">
              {formatMessage({ ...messages.waitingListTitle })}
            </h3>
          </div>
          {/* Waiting list Form */}
          <form
            className="bg-gray-100 lg:shadow-sm shadow-lg rounded-xl p-10 lg:w-9/12 w-full space-y-5"
            onSubmit={onSubmit}
          >
            <div className="w-full">
              <input
                id="nameFocus"
                type="text"
                name="from_name"
                value={emailInfo.from_name}
                onChange={handleChange}
                placeholder={formatMessage({ ...messages.namePlaceholder })}
                className="w-full px-4 py-2 border-b-2 border-gray-400 outline-none focus:border-blue-400 transition-all duration-200 ease"
              />
              {errors.fullNameError && (
                <span className="text-red-500 font-medium text-sm text-opacity-75">
                  {errors.fullNameError}
                </span>
              )}
            </div>
            <div className="w-full">
              <input
                type="number"
                name="age"
                value={emailInfo.age}
                onChange={handleChange}
                placeholder={formatMessage({ ...messages.agePlaceholder })}
                className="w-full px-4 py-2 border-b-2 border-gray-400 outline-none focus:border-blue-400 transition-all duration-200 ease"
              />
              {errors.ageError && (
                <span className="text-red-500 font-medium text-sm text-opacity-75">
                  {errors.ageError}
                </span>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="reply_to"
                value={emailInfo.reply_to}
                onChange={handleChange}
                placeholder={formatMessage({ ...messages.emailPlaceholder })}
                className="w-full px-4 py-2 border-b-2 border-gray-400 outline-none focus:border-blue-400 transition-all duration-200 ease"
              />
              {errors.emailError && (
                <span className="text-red-500 font-medium text-sm text-opacity-75">
                  {errors.emailError}
                </span>
              )}
            </div>

            <div className="w-full">
              <textarea
                name="message"
                placeholder={formatMessage({ ...messages.messagePlaceholder })}
                value={emailInfo.message}
                onChange={handleChange}
                className="w-full h-24 px-4 py-2 border-b-2 resize-none border-gray-400 outline-none focus:border-blue-400 transition-all duration-200 ease"
              />
              {errors.messageError && (
                <span className="text-red-500 font-medium text-sm text-opacity-75">
                  {errors.messageError}
                </span>
              )}
            </div>

            <div className="flex sm:flex-row flex-col sm:space-x-5 lg:justify-start justify-center">
              <button
                type="submit"
                className="sm:w-4/12 w-full bg-blue-500 p-2 sm:mb-0 mb-3 rounded-xl text-white font-medium transition-all hover:bg-blue-400 hover:shadow-md duration-300"
              >
                {formatMessage({ ...messages.submit })}
              </button>
              <button
                className="sm:w-4/12 w-full bg-red-500 p-2 sm:mb-0 mb-3 rounded-xl text-white font-medium transition-all hover:bg-red-400 hover:shadow-md duration-300"
                type="reset"
                onClick={onReset}
              >
                {formatMessage({ ...messages.reset })}
              </button>
            </div>

            {/* Error */}
            {requestError && (
              <div
                id="toast-danger"
                className="flex items-center p-4 mb-4 mx-auto w-full max-w-lg text-gray-500 bg-red-100 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Error icon</span>
                </div>
                <div className="ml-3 text-sm font-normal">
                  {formatMessage({ ...messages.error })}
                </div>
              </div>
            )}

            {success && (
              <div
                id="toast-simple"
                className="flex items-center p-4 space-x-4 w-full mx-auto max-w-lg text-gray-500 bg-green-100 rounded-lg divide-x divide-gray-200 shadow space-x transition-all duration-200 ease"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-blue-600 dark:text-blue-500"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="paper-plane"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
                  ></path>
                </svg>
                <div className="pl-4 text-sm font-normal">
                  {formatMessage({ ...messages.success })}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(WaitingList);
