import { useState } from "react";
import { useIntl } from "react-intl";
import messages from "./messages";

function ContactInfo() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  const { formatMessage } = useIntl();
  return (
    <div className="w-full sm:p-24 bg-orange-100">
      <h2 className="font-bold text-center text-4xl mb-5 pb-5 pt-5">
        {formatMessage({ ...messages.contactInfo })}
      </h2>
      <div className="w-full px-4 md:px-0 flex lg:flex-row flex-col justify-center lg:space-x-5 space-y-5 lg:space-y-0">
        {/* 1 */}
        <div className="p-3 rounded-xl shadow-sm bg-white lg:w-4/12 w-full">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.presidentName })}
          </h5>
          <p className="text-gray-700 text-base mb-4 mt-3">
            {formatMessage({ ...messages.presidentTitle })}
          </p>
          <span className="flex flex-col">
            <a href="tel:6134134159">613-413-4159</a>
          </span>
        </div>
        {/* 2 */}
        <div className="p-3 rounded-xl shadow-sm bg-white lg:w-4/12 w-full">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.vpName })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.vpTitle })}
          </p>
          <span className="flex flex-col">
            <a href="tel:6137248206">613-724-8206</a>
          </span>
        </div>
        {/* 3 */}
        <div className="p-3 rounded-xl shadow-sm bg-white lg:w-4/12 w-full">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.coordinatorName })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.coordinatorTitle })}
          </p>
          <span className="flex flex-col">
            <a href="tel:6135583893">613-558-3893</a>
          </span>
        </div>
      </div>
      {/* Next line */}
      <div className="w-full px-4 md:px-0 flex lg:flex-row flex-col justify-center lg:space-x-5 space-y-5 lg:space-y-0 mt-4">
        {/* 1 */}
        <div className="p-3 rounded-xl shadow-sm bg-white lg:w-4/12 w-full">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.financeName })}
          </h5>
          <p className="text-gray-700 text-base mb-4 mt-3">
            {formatMessage({ ...messages.financeTitle })}
          </p>
          <span className="flex flex-col">
            <a href="tel:6132227373">613-222-7373</a>
          </span>
        </div>
        {/* 2 */}
        <div className="p-3 rounded-xl shadow-sm bg-white lg:w-4/12 w-full">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.volunteerName })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.volunteerTitle })}
          </p>
        </div>
        {/* 3 */}
        <div className="p-3 rounded-xl shadow-sm bg-white lg:w-4/12 w-full">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.fundraiserName })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.fundraiserTitle })}
          </p>
        </div>
      </div>

      <div className="w-full px-4 md:px-0 flex lg:flex-row flex-col justify-center lg:space-x-5 space-y-5 lg:space-y-0 mt-4">
        {/* 1 */}
        <div className="p-3 rounded-xl shadow-sm bg-white lg:w-4/12 w-full">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.volunteerName1 })}
          </h5>
          <p className="text-gray-700 text-base mb-4 mt-3">
            {formatMessage({ ...messages.volunteerTitle })}
          </p>
        </div>
        {/* 2 */}
        <div className="p-3 rounded-xl shadow-sm bg-white lg:w-4/12 w-full">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.volunteerName2 })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.volunteerTitle })}
          </p>
        </div>
        {/* 3 */}
        <div className="p-3 rounded-xl shadow-sm bg-white lg:w-4/12 w-full">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {formatMessage({ ...messages.volunteerName3 })}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {formatMessage({ ...messages.volunteerTitle })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
