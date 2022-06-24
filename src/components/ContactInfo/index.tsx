import React from "react";
import { useIntl } from "react-intl";
import { Context } from "../Wrappper";
import messages from "./messages";

function ContactInfo() {
  const { formatMessage } = useIntl();
  return (
    <div className="w-full rounded-lg bg-gray-700 text-yellow-200 shadow-md mt-3 mb-3 lg:mb-2 sm:p-15 p-10 h-100">
      <h2 className="text-white font-medium mb-2 text-center">
        {formatMessage({ ...messages.contactInfo })}
      </h2>
      <div className="flex flex-col w-full">
        <div className="flex flex-col mx-auto m-3 p-3 bg-blue-400 rounded-lg shadow-md w-full ">
          <span className="flex flex-col">
            <span className="font-bold">
              {formatMessage({ ...messages.presidentName })}
            </span>
            <span className="text-sm">
              {formatMessage({ ...messages.presidentTitle })}
            </span>
          </span>
          <a href="tel:6134134159">613-413-4159</a>
          <a href="mailto:ucss@xata.ca">ucss@xata.ca</a>
        </div>

        <div className="flex flex-col mx-auto m-3 p-3 bg-blue-400 rounded-lg shadow-md w-full">
          <span className="flex flex-col">
            <span className="font-bold">
              {formatMessage({ ...messages.vpName })}
            </span>
            <span className="text-sm">
              {formatMessage({ ...messages.vpTitle })}
            </span>
          </span>
          <a href="tel:6137248206">613-724-8206</a>
          <a href="mailto:mandry9999@gmail.com">mandry9999@gmail.com</a>
        </div>

        <div className="flex flex-col mx-auto m-3 p-3 bg-blue-400 rounded-lg shadow-md w-full">
          <span className="flex flex-col">
            <span className="font-bold">
              {formatMessage({ ...messages.coordinatorName })}
            </span>
            <span className="text-sm">
              {formatMessage({ ...messages.coordinatorTitle })}
            </span>
          </span>
          <a href="tel:6135583893">613-558-3893</a>
          <a href="mailto:nazar@ucssottawa.com">nazar@ucssottawa.com</a>
        </div>

        <div className="flex flex-col mx-auto m-3 p-3 bg-blue-400 rounded-lg shadow-md w-full">
          <span className="flex flex-col">
            <span className="font-bold">
              {formatMessage({ ...messages.artashes })}
            </span>
            <span className="text-sm">
              {formatMessage({ ...messages.lvivVP })}
            </span>
          </span>
          <a href="tel:380974710045">+380 97 471 0045</a>
          <a href="mailto:bolzen777@gmail.com">bolzen777@gmail.com</a>
        </div>

        <div className="flex flex-col mx-auto m-3 p-3 bg-blue-400 rounded-lg shadow-md w-full">
          <span className="flex flex-col">
            <span className="font-bold">
              {formatMessage({ ...messages.lvivGanna })}
            </span>
            <span className="text-sm">
              {formatMessage({ ...messages.volonteersTitle })}
            </span>
          </span>
          <a href="tel:380672557073">+380 67 255 7073</a>
          <a href="mailto:a.nadtochii@gmail.com">a.nadtochii@gmail.com</a>
        </div>
        <a
          href="https://www.facebook.com/groups/3189837834631563"
          target="_blank"
          rel="noreferrer"
          className="mx-auto rounded-xl bg-yellow-200 px-5 py-2 flex flex-col w-full"
        >
          <h4 className="text-blue-500 text-center mb-2">
            {formatMessage({ ...messages.facebookTitle })}
          </h4>

          <svg
            className="w-6 h-6 text-blue-600 fill-current mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
