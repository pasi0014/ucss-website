import React from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

import messages from "./messages";

const NotFound = () => {
  const { formatMessage } = useIntl();
  return (
    <div
      className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-l
    from-indigo-200
    to-blue-300
  "
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">
              {formatMessage({ ...messages.title })}
            </span>
            {formatMessage({ ...messages.pageNotFound })}
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            {formatMessage({ ...messages.pageNotFoundDescription })}
          </p>
          <Link to="/">
            <button className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
              {formatMessage({ ...messages.backToHome })}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
