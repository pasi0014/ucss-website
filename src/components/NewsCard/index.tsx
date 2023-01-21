import React, { useEffect, useState } from "react";
import { injectIntl } from "react-intl";

function NewsCard(props: any) {
  const [state, setState] = useState({});

  const { formatMessage } = props.intl;

  useEffect(() => {
    console.log({ props });
  }, []);
  return (
    <div className="p-4 md:w-5/12">
      <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
        Hello From NewsCard
      </div>
    </div>
  );
}

export default injectIntl(NewsCard);
