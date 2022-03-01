import React, { useEffect, useContext } from "react";
import { useIntl } from "react-intl";
import { Context } from "../../components/Wrappper/index";

import { DonatePopUp } from "./DonatePopUp";

import messages from "./messages";

export const Donate = () => {
  const [donatePopUp, setDonatePopUp] = React.useState(false);
  const context = useContext(Context);
  const { formatMessage } = useIntl();

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);
  const displayDonatePopUp = () => {
    if (donatePopUp) {
      setDonatePopUp(false);
    } else {
      setDonatePopUp(true);
    }
  };

  return (
    <>
      <section className="text-gray-400 bg-yellow-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20 border-red-600 bg-red-400 p-5 rounded-lg">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-800 mb-4">
              {formatMessage({ ...messages.title })}
            </h1>
            <p className="text-base leading-relaxed font-medium xl:w-2/4 lg:w-3/4 mx-auto text-gray-900 text-opacity-100">
            Відкритий воєнний напад Росії на Україну, розпочатий 24 лютого 2022 року.
            За кілька хвилин після оголошення війни пролунали вибухи в Києві, Харкові, Одесі та на Донбасі. Росія запустила крилаті та балістичні ракети по аеродромах, військових штабах і військових складах у Києві, Харкові та Дніпрі.
            Сотні цивільних людей загинули, тисячі поранених. Тисячі людей знаходяться в укриттях і бояться за своє життя. Серед загиблих є ДІТИ!!!
            </p>
            <h2 className="w-80 mx-auto mt-4 p-1 sm:text-3xl rounded-lg text-2xl font-medium title-fontbg-clip-text bg-gradient-to-r from-blue-400 via-yellow-200 to-yellow-400 text-gray-800 mb-4">
              #StandWithUkraine
            </h2>
            <div className="flex mt-6 justify-center">
              {/* <div className="w-16 h-1 rounded-full bg-gray-200 inline-flex"></div> */}
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-600 text-lg title-font font-medium mb-3">
                  Медичні засоби
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <a
                  href="#s"
                  className="mt-3 text-indigo-400 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-600 text-lg title-font font-medium mb-3">
                  Допомога воїнам ЗСУ
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <a
                  href="#s"
                  className="mt-3 text-indigo-400 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-400 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-600 text-lg title-font font-medium mb-3">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <a
                  href="#p"
                  className="mt-3 text-indigo-400 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
      {/* <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font mb-4 font-medium text-white">Donate</h1>
            <h4 className="text-left mb-3">
              During this pandemic, we need and appreciate your financial
              support now more than ever.
            </h4>
            <p className="mb-8 leading-relaxed text-left">
              Ukrainian Canadian Social Services (Ottawa) Inc. is a non-profit
              charitable organization serving the Ukrainian ethno-cultural.
              Guided by the needs of individuals and families of Ukrainian
              ethno-cultural back-ground in the community, who experience
              language and cultural barriers, we provide a range of social
              services and support programs.
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-indigo-500
                           font-medium border-0 py-2 px-6
                           focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={displayDonatePopUp}
              >
                <svg
                  className="animate-bounce text-white w-6 h-6 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffff"
                >
                  <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
                </svg>
                Donate
              </button>
            </div>
          </div>
          {donatePopUp && <DonatePopUp />}
          <div className="lg:max-w-lg md:w-1/2 w-5/6 sm:w-full rounded-lg">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://media.istockphoto.com/photos/barley-fields-picture-id539016698?k=6&m=539016698&s=612x612&w=0&h=_cDNnNU61z34JDLGfCl7Fw4WNCv3hQibI0v9Sb4Nspk="
            />
          </div>
        </div>
      </section> */}
    </>
  );
};
