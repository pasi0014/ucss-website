import React, { useState } from "react";
import { useIntl } from "react-intl";
import paskaAd from '../../assets/images/paska-ad.jpg';

import messages from "./messages";

function Events() {
  const { formatMessage } = useIntl();
  return (
    <div className="lg:w-full w-full bg-gray-100 rounded-xl shadow-md mx-auto my-3 sm:p-16 py-5 lg:p-16">
      <h1 className="font-medium mb-5 text-center w-full">
        {formatMessage({ ...messages.eventsTitle })}
      </h1>
      <img alt="Ad for masterclass" src={paskaAd} className="w-8/12 mx-auto" />
    </div>
  );
}

export default Events;
