import React from "react";
import { injectIntl } from "react-intl";

import messages from "./messages";

function Loading(props: any) {
  const { formatMessage } = props.intl;
  return (
    <div className="flex justify-center flex-col items-center mx-auto">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
      <div className="text-center mt-2">
        {formatMessage({ ...messages.loading })}
      </div>
    </div>
  );
}

export default injectIntl(Loading);
