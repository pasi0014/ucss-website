import React from "react";
import { useIntl } from "react-intl";
import { Context } from "../Wrappper";
import messages from "./messages";

function ContactInfo() {
  const { formatMessage } = useIntl();
  return (
    <div className="w-full sm:p-24 bg-orange-100">
      <h2 className="font-bold text-center text-4xl mb-5 pb-5 pt-5">
        {formatMessage({ ...messages.contactInfo })}
      </h2>
      <div className="w-full flex lg:flex-row flex-col justify-center lg:space-x-5 space-y-5 lg:space-y-0">
        {/* 1 */}
        <div className="p-3 rounded-lg shadow-sm bg-white">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.presidentName })}
          </h5>
          <p className="text-gray-700 text-base mb-4 mt-3">
            {formatMessage({ ...messages.presidentTitle })}
          </p>
          <span className="flex flex-col">
            <a href="tel:6134134159">613-413-4159</a>
            <a href="mailto:ucss@xata.ca">ucss@xata.ca</a>
          </span>
        </div>
        {/* 2 */}
        <div className="p-3 rounded-lg shadow-sm bg-white">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.vpName })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.vpTitle })}
          </p>
          <span className="flex flex-col">
            <a href="tel:6137248206">613-724-8206</a>
            <a href="mailto:mandry9999@gmail.com">mandry9999@gmail.com</a>
          </span>
        </div>
        {/* 3 */}
        <div className="p-3 rounded-lg shadow-sm bg-white">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.coordinatorName })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.coordinatorTitle })}
          </p>
          <span className="flex flex-col">
            <a href="tel:6135583893">613-558-3893</a>
            <a href="mailto:nazar@ucssottawa.com">nazar@ucssottawa.com</a>
          </span>
        </div>
        {/* 4 */}
        <div className="p-3 rounded-lg shadow-sm bg-white">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.artashes })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.lvivVP })}
          </p>
          <span className="flex flex-col">
            <a href="tel:380974710045">+380 97 471 0045</a>
            <a href="mailto:bolzen777@gmail.com">bolzen777@gmail.com</a>
          </span>
        </div>
        {/* 5 */}
        <div className="p-3 rounded-lg shadow-sm bg-white">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.lvivGanna })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.volonteersTitle })}
          </p>
          <span className="flex flex-col">
            <a href="tel:380672557073">+380 67 255 7073</a>
            <a href="mailto:a.nadtochii@gmail.com">a.nadtochii@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
