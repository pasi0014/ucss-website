import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import campPic from "../../assets/images/flyer.png";

import messages from "./messages";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import { Helmet } from "react-helmet";

function Events() {
  const { formatMessage } = useIntl();

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Events - Ukrainian Canadian Social Services</title>
      </Helmet>
      <section className="w-full h-full body-font font-montserrat">
        <div className="sm:px-5 py-20 mx-auto">
          <div className="flex justify-center mb-5 text-gray-700">
            <h1>{formatMessage({ ...messages.eventsTitle })}</h1>
          </div>

          {/* Event Container */}
          <div className="flex flex-nowrap w-full lg:flex-row flex-col p-3">
            {/* Event Card */}
            <div className="lg:w-8/12 w-full mx-auto">
              <div className="shadow lg:w-8/12 w-full rounded-xl mx-auto">
                <img
                  className="w-full h-90 object-cover rounded-t-xl"
                  src={campPic}
                  alt="Sunflower camp"
                />
                <div className="w-full px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {formatMessage({ ...messages.campTitle })}
                  </div>
                  <p className="text-base mb-2 py-1 text-gray-400">
                    {formatMessage({ ...messages.campDate_2023 })}
                  </p>
                  <p className="text-gray-700 text-base py-2">
                    {formatMessage(
                      { ...messages.campText },
                      {
                        br: (
                          <>
                            <br /> <br />
                          </>
                        ),
                      }
                    )}
                  </p>
                  <div className="mx-auto flex flex-col my-5">
                    {/* TODO: Finish camp page - NP */}
                    <Link to="/events/camp" className="w-8/12 mx-auto mb-3">
                      <button className="transition duration-200 ease hover:shadow-lg w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-white font-medium px-5 py-2 rounded-xl">
                        {formatMessage({ ...messages.learnMore })}
                      </button>
                    </Link>
                    <Link to="/donate" className="text-center">
                      <button className="transform transition-all duration-200 ease hover:shadow-lg  w-8/12 bg-gradient-to-r from-red-400 to-yellow-400 text-white font-medium px-5 py-2 rounded-xl mx-auto">
                        {formatMessage({ ...messages.donate })}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Events;
