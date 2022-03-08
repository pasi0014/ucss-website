import React, { useState, useEffect, useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Context } from "../../components/Wrappper/index";

import messages from "./messages";
import DonateDrawer from "../../components/DonateDrawer/index";
import useModal from "../../utils/useModal";

import interacLogo from "../../assets/images/interac.svg";

export const Donate = () => {
  const { formatMessage } = useIntl();
  const [classTrigger, setClassTrigger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const context = useContext(Context);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const coppyToClipboard = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText("ucss@xata.com");
    setIsCopied(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (classTrigger) {
      setTimeout(() => {
        setClassTrigger(false);
      }, 1000);
    }

    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [classTrigger, isCopied]);

  return (
    <section className="text-gray-400 bg-yellow-100 body-font">
      <div className="mx-auto text-center mb-20 border-red-600 bg-red-400 p-5 rounded-lg">
        <h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-800 mb-4">
          {formatMessage({ ...messages.title })}
        </h1>
        <p
          className="text-2xl leading-relaxed font-bold font-sans xl:w-2/4 lg:w-3/4 mx-auto text-gray-900 text-opacity-100 cursor-pointer"
          onClick={() => {
            document
              .getElementById("donate-info")
              ?.scrollIntoView({ behavior: "smooth" });
            setClassTrigger(true);
          }}
        >
          #HelpUkraineNow {formatMessage({ ...messages.helpNow })}
        </p>
        {/* <h2 className="w-80 mx-auto mt-4 p-1 sm:text-3xl rounded-lg text-2xl font-medium title-fontbg-clip-text bg-gradient-to-r from-blue-400 via-yellow-200 to-yellow-400 text-gray-800 mb-4">
            #StandWithUkraine
          </h2> */}
        <div className="flex mt-6 justify-center"></div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 bg-blue-400 rounded-lg p-5">
          <div className="container mx-auto mb-5">
            <h3 className="text-center text-yellow-300">
              {formatMessage({ ...messages.moneyTo })}
            </h3>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-yellow-300 sm:text-xl text-lg title-font font-medium mb-3">
                {formatMessage({ ...messages.medical })}
              </h2>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-yellow-300  sm:text-xl text-lg title-font font-medium mb-3">
                {formatMessage({ ...messages.refugee })}
              </h2>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-yellow-300  sm:text-xl text-lg title-font font-medium mb-3">
                {formatMessage({ ...messages.helpInCanada })}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap text-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 bg-yellow-300 rounded-lg p-5 mt-3">
          <div className="container mx-auto mb-5 text">
            <h3 className="text-center text-blue-400">
              {formatMessage({ ...messages.helpUs })}
            </h3>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center justify-center items-center">
            <div className="flex-grow">
              <h2
                className="text-blue-400 sm:text-xl text-lg title-font text-center font-medium mb-3 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("donate-info")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setClassTrigger(true);
                }}
              >
                {formatMessage({ ...messages.donateMoney })}
              </h2>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-blue-400 sm:text-xl text-lg title-font font-medium mb-3">
                {formatMessage({ ...messages.donateHumanitarian })}
              </h2>
              <p className="text-blue-500">
                <FormattedMessage
                  {...messages.donateAddress}
                  values={{
                    address: (
                      <a
                        href="https://www.google.com/maps/place/37+Ridgefield+Crescent,+Ottawa,+ON+K2H+6S3/@45.320697,-75.8220538,17z/data=!3m1!4b1!4m5!3m4!1s0x4ccdfe1e5f73feaf:0x5b4b83f7d30eed73!8m2!3d45.3206932!4d-75.8198651"
                        target="_blank"
                        rel="noreferrer"
                      >
                        37 Ridgefield Crescent, Ottawa, ON, K2H 6S3
                      </a>
                    ),
                  }}
                />
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-blue-400 sm:text-xl text-lg title-font font-medium mb-3">
                {formatMessage({ ...messages.translator })}
              </h2>
            </div>
          </div>
        </div>
        {/* <button
          className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={toggleMenu}
        >
          Donate
        </button> */}
      </div>
      <div
        className={
          "text-center mt-5 w-full rounded-xl transition-all duration-500 shadow-xl" +
          (classTrigger
            ? "transition-all duration-100 bg-yellow-500"
            : "transition-all duration-500 bg-white")
        }
        id="donate-info"
      >
        <h2 className="py-5">
          {formatMessage({ ...messages.donationInfoTitle })}
        </h2>
        <p className="text-lg leading-relaxed font-medium font-sans xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 py-5">
          <FormattedMessage
            {...messages.donationInfoText}
            values={{
              email: (
                <button
                  onClick={coppyToClipboard}
                  className="text-indigo-500 hover:text-indigo-700 font-medium"
                >
                  ucss@xata.com
                </button>
              ),
            }}
          />
          <img src={interacLogo} alt="interac" className="w-40 mx-auto" />
          {isCopied && (
            <div
              className="py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200 transition-all duration-500"
              role="alert"
            >
              {formatMessage({ ...messages.emailCopied })}
            </div>
          )}
        </p>
      </div>
      {/* {isOpen && (
        <main
          className={
            " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
            (isOpen
              ? " transition-opacity opacity-100 duration-500 translate-x-0  "
              : " transition-all delay-500 opacity-0 translate-x-full  ")
          }
        >
          <section
            className={
              "w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
              (isOpen ? " translate-x-0 " : " translate-x-full ")
            }
          >
            <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
              <div className="flex justify-between">
                <h2 className="p-4 font-bold text-lg text-center mt-3">
                  Donate
                </h2>
                <button
                  className="p-4 font-bold text-lg text-center mt-3"
                  onClick={toggleMenu}
                >
                  X
                </button>
              </div>
              <DonateDrawer isOpen={isOpen} />
            </article>
          </section>
          <section
            className=" w-screen h-full cursor-pointer "
            onClick={() => {
              setIsOpen(false);
            }}
          ></section>
        </main>
      )} */}
    </section>
  );
};
