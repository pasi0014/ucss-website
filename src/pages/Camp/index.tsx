import React, { useEffect } from "react";
import { injectIntl } from "react-intl";

import oselyaPic from "../../assets/images/oselya-pic.jpg";
import messages from "./messages";

function Camp(props: any) {
  const { formatMessage } = props.intl;
  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container sm:px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="p-4 md:w-12/12">
            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
              <img
                className="transform lg:h-80 md:h-36 w-full object-cover object-center scale-100 transition-all duration-400 hover:scale-110"
                src={oselyaPic}
                alt="Lake on the camp"
              />
              <div className="p-6">
                <h1 className="title-font text-xl font-medium text-gray-600 mb-3">
                  {formatMessage({ ...messages.title })}
                </h1>
                <p className="leading-relaxed mb-3">
                  {formatMessage({ ...messages.content })}
                </p>
                <div className="rounded-xl mt-3">
                  <h3>{formatMessage({ ...messages.bulletPointsTitle })}</h3>
                  <ul className="list-disc sm:px-5 px-4 mt-3 mb-3">
                    <li>{formatMessage({ ...messages.bulletPoints_1 })}</li>
                    <li>{formatMessage({ ...messages.bulletPoints_2 })}</li>
                    <li>{formatMessage({ ...messages.bulletPoints_3 })}</li>
                    <li>{formatMessage({ ...messages.bulletPoints_4 })}</li>
                    <li>{formatMessage({ ...messages.bulletPoints_5 })}</li>
                    <li>{formatMessage({ ...messages.bulletPoints_6 })}</li>
                    <li>{formatMessage({ ...messages.bulletPoints_7 })}</li>
                  </ul>
                  {formatMessage({ ...messages.placeAndLocation })}
                  <a
                    href="https://www.stjbshrine.ca/camp/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-500"
                  >
                    {formatMessage({ ...messages.campName })}
                  </a>
                </div>
                <div className="mt-4">
                  <h3>{formatMessage({ ...messages.help })}</h3>

                  <p className="mt-2">
                    <span>
                      {formatMessage({ ...messages.help_needed })}
                      <br />
                      {formatMessage({ ...messages.certificates })} <br />
                      <span className="font-medium text-red-500">*</span>
                      {formatMessage({ ...messages.required })}
                    </span>
                  </p>
                  <p className="py-3">
                    {formatMessage({ ...messages.contact })}
                    <br />
                    <a
                      href="mailto:info@ucssottawa.com"
                      className="text-indigo-500"
                    >
                      info@ucssottawa.com
                    </a>
                    <br />
                    <a href="tel:6134139227" className="text-indigo-500">
                      Natasha - 613-413-9227
                    </a>
                  </p>
                </div>
                <div className="mt-3">
                  <h3>{formatMessage({ ...messages.locationTitle })}</h3>
                  <div className="mt-2 sm:w-4/12 w-full">
                    21 Chemin Newcombe Val-des-Monts, Quebec J8N 1A9
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default injectIntl(Camp);
