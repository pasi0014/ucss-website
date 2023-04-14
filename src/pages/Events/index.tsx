import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import campPic from "../../assets/images/IMG_3184.JPG";
import vyshyvankaPic from "../../assets/images/main.jpeg";

import messages from "./messages";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import Collapse from "../../components/Collapse";
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

          {/* TODO: Review this later - NP */}
          {/* <div className="container w-6/12">
          <Collapse title="Filters" children={<Filter />} />
        </div> */}

          {/* TEST */}
          {/* <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Shooting Stars
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-yellow-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div> */}

          {/* Event Container */}
          <div className="flex flex-nowrap w-full lg:flex-row flex-col p-3">
            {/* Event Card */}
            <div className="lg:w-8/12 w-full">
              <div className="shadow lg:w-8/12 w-full rounded-xl mx-auto">
                <img
                  className="w-full h-64 object-cover rounded-t-xl"
                  src={campPic}
                  alt="Sunflower camp"
                />
                <div className="w-full px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {formatMessage({ ...messages.campTitle })}
                  </div>
                  <p className="text-base mb-2 py-1 text-gray-400">
                    {formatMessage({ ...messages.upcomingEvent })} 2023
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
                    {/* Our summer camp is dedicated to providing a safe and welcoming
                space for Ukrainian children affected by the war in Ukraine. We
                understand that these children have been through unimaginable
                hardships, and we want to provide them with an opportunity to
                heal, grow, and thrive.
                <br /> To ensure that we can continue to provide our campers
                with the best possible experience, we rely on the support of
                generous donors like you. Your contribution will help us cover
                the costs of food, transportation, equipment, and activities
                that make "Sonyashnyk" summer camp so special. At "Sonyashnyk"
                summer camp, we believe that every child deserves to experience
                the joy of childhood, regardless of their circumstances. By
                donating to our summer camp, you can help us make this dream a
                reality for Ukrainian children who have been displaced by war.
                With your help, we can provide our campers with a safe and
                fun-filled summer that they will remember for years to come.
                Your donation, no matter how small, can make a big difference in
                the lives of these children. So please, donate today and help us
                give Ukrainian children a summer they will never forget. */}
                  </p>
                  <div className="mx-auto flex flex-col my-5">
                    {/* TODO: Finish camp page - NP */}
                    {/* <Link
                    to="/events/sunflower-camp"
                    className="w-8/12 mx-auto mb-3">
                    <button className="transition duration-200 ease hover:shadow-lg w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-white font-medium px-5 py-2 rounded-xl">
                      {formatMessage({ ...messages.learnMore })}
                    </button>
                  </Link> */}
                    <Link to="/donate" className="text-center">
                      <button className="transform transition-all duration-200 ease hover:shadow-lg  w-8/12 bg-gradient-to-r from-red-400 to-yellow-400 text-white font-medium px-5 py-2 rounded-xl mx-auto">
                        {formatMessage({ ...messages.donate })}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Vyshyvanks 2.0 */}
            <div className="lg:w-8/12 w-full lg:mt-0 mt-6">
              <div className="lg:w-8/12 w-full rounded-xl shadow mx-auto hover:shadow-xl">
                <img
                  className="w-full lg:h-72 h-auto object-cover rounded-t-xl"
                  src={vyshyvankaPic}
                  alt="Event"
                />
                <div className="w-full px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {formatMessage({ ...messages.embroideryTitle })}
                  </div>
                  <p className="text-gray-400 text-base mb-2">
                    {formatMessage({ ...messages.embroideryDate })}
                  </p>
                  <p className="text-gray-700 text-base">
                    {formatMessage(
                      { ...messages.embroideryText },
                      {
                        br: (
                          <>
                            <br />
                            <br />
                          </>
                        ),
                      }
                    )}
                  </p>
                  <div className="mx-auto flex flex-col my-5">
                    <a
                      href="https://www.eventbrite.com/e/ukrainian-cultural-embroidery-event-tickets-597322466577"
                      className="w-8/12 mx-auto mb-3"
                      target="_blank">
                      <button className="transition duration-200 ease hover:shadow-lg w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-white font-medium px-5 py-2 rounded-xl">
                        {formatMessage({ ...messages.learnMore })}
                      </button>
                    </a>
                    <Link to="/donate" className="text-center">
                      <button className="transform transition-all duration-200 ease hover:shadow-lg w-8/12 bg-gradient-to-r from-red-400 to-yellow-400 text-white font-medium px-5 py-2 rounded-xl mx-auto">
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
