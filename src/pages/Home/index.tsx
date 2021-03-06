import React, { useEffect, useContext } from "react";
import { useIntl } from "react-intl";
import { Context } from "../../components/Wrappper/index";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/aboutImg.jpg";
import paskaAd from '../../assets/images/paska-ad.jpg';
// TODO: enable this when we have a camp text
// import oselyaPic from "../../assets/images/oselya-pic.jpg";

import messages from "./messages";
import ContactInfo from "../../components/ContactInfo";
import ControlledCarousel from "../../components/ControlledCarousel";


const Home = () => {
  const context = useContext(Context);
  const { formatMessage } = useIntl();

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-yellow-100">
      <div className="lg:flex lg:mx-auto w-full lg:w-10/12 mb-4 mt-4 justify-center lg:space-x-3 p-3">
        <div className="flex flex-col lg:w-10/12 sm:w-12/12">
          <div className="lg:w-full bg-blue-300 shadow-sm rounded-lg text-gray-200 text-base mx-auto my-3 sm:p-12 md:p-2 lg:p-5">
            <h1 className="font-medium text-center sm:text-3xl text-xl text-gray-700">
              {formatMessage({ ...messages.aboutUsParagraphTitle })}
            </h1>
            <div className="md:flex mx-auto rounded-xl md:place-items-center sm:h-full">
              <img
                className="sm:w-34 md:w-72 md:h-52 lg:w-4/12 lg:h-auto w-40 h-32 md:rounded-xl rounded-full mx-auto"
                src={aboutImage}
                alt="Flags waving in the wind"
              />
              <div className="text-left space-y-4">
                <blockquote className="bg-gray-100 border-l-6 border-yellow-300 rounded-lg lg:p-5">
                  <p className="text-lg text-gray-600">
                    {formatMessage({ ...messages.aboutUsParagraph })}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="lg:w-full w-full bg-gray-100 rounded-xl shadow-md mx-auto my-3 sm:p-16 py-5 lg:p-16">
            <h1 className="font-medium mb-2 text-center w-full">
              {formatMessage({ ...messages.howYouCanHelp })}
            </h1>
            <div className="container mx-auto text-center flex justify-center">
              <a
                href={
                  context.locale === "en"
                    ? "https://forms.gle/GKWiFwgi13p6aHhx5"
                    : "https://forms.gle/42rwjQ5zABN7TEga8"
                }
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  {formatMessage({ ...messages.googleForm })}
                </button>
              </a>
            </div>
          </div>

          <div className="lg:w-full w-full bg-gray-100 rounded-xl shadow-md mx-auto my-3 sm:p-16 py-5 lg:p-16">
            <h1 className="font-medium mb-5 text-center w-full">
              {formatMessage({ ...messages.eventsTitle })}
            </h1>
            <img alt="Ad for masterclass" src={paskaAd} className="w-8/12 mx-auto"/>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-2 justify-center rounded-xl">
            <div className="w-full mx-auto bg-blue-300 rounded-xl shadow-md sm:p-10">
              <h2 className="text-center py-5 text-yellow-200">
                {formatMessage({ ...messages.donationWeReceived })}
              </h2>
              <ControlledCarousel />
            </div>
            {/* TODO: To be enabled when we have text for camp ad */}
            {/* <div className="w-full bg-gray-100 rounded-lg shadow-sm mt-1">
              <img alt="camp ambience" src={oselyaPic} className="sm:w-8/12 w-full mx-auto"/>
              <h2 className="text-center font-medium mt-5 mb-2">
                Camp for displaced Ukrainian children
              </h2>
              <p className="p-4">
                This summer UCSS will organize a camp for displaced children from the Ukraine. 
              </p>
            </div> */}

            {/* <div className="w-full bg-yellow-400 shadow-sm rounded-lg mt-1">
              <h1 className="text-2xl text-center font-medium mb-2 p-10">
                Recent Headlines
              </h1>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                ipsa neque ea quia? Accusantium molestiae quo excepturi quod
                esse perspiciatis, corrupti officiis amet sunt asperiores beatae
                est blanditiis in perferendis.
              </p>
            </div>

            <div className="w-full bg-green-300 shadow-sm rounded-lg mt-1">
              <h1 className="text-2xl text-center font-medium mb-2 p-10">
                Recent Headlines
              </h1>
              <p className="p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                cum iste corrupti amet officia. Corrupti aperiam laborum animi
                ullam totam molestias doloribus expedita, modi exercitationem
                quis laboriosam quae, enim dolor!
              </p>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col w-full h-full lg:w-5/12">
          <ContactInfo />
        </div>
      </div>
    </main>
  );
};

export default Home;
