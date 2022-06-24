import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

import DonateDrawer from "../../components/DonateDrawer/index";
import { Context } from "../../components/Wrappper/index";
import { images } from "../../utils/importImages";

import messages from "./messages";

export const Donate = () => {
  const { formatMessage } = useIntl();
  const [classTrigger, setClassTrigger] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const context = useContext(Context);


  const coppyToClipboard = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText("ucss@xata.ca");
    setIsCopied(true);
  };

  // useEffect(() => {
  //   window.scrollTo({ top: 500, behavior: "smooth" });
  // }, []);

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
    <React.Fragment>
      <Helmet>
        <title>
          Donate to Ukrainian Canadian Social Services Ottawa (UCSS Ottawa)
        </title>
        <meta
          name="description"
          content="The Ukrainian Canadian Social Services Ottawa (UCSS Ottawa) is raising money to organize a summer camp for children who have been displaced by war in Ukraine. The goal of the camp is to provide a safe environment for children to play, learn and socialize with other children from Ottawa."
        />
        <meta
          name="keywords"
          content="donate camp, ukrainian charitable organization, ucss camp"
        />
      </Helmet>
      <section className="text-gray-400 bg-yellow-100 body-font">
        <div className="mx-auto text-center border-red-600 bg-red-400 p-5 rounded-lg">
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
          <div className="flex mt-6 justify-center"></div>
        </div>

        <div className="container mt-20 mx-auto shadow-md bg-orange-300 h-full rounded-lg px-5 py-24 text-gray-600 text-xl text-center leading-loose">
          <p className="p-10">
            {formatMessage({ ...messages.campAd_1 })}
            <Link to="/camp">
              <span className="text-indigo-500 font-bold">
                {formatMessage({ ...messages.campLink })}
              </span>
            </Link>
            {formatMessage({ ...messages.campAd_2 })}
          </p>
          <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              document
                .getElementById("donate-info")
                ?.scrollIntoView({ behavior: "smooth" });
              setClassTrigger(true);
            }}
          >
            {formatMessage({ ...messages.donateNow })}
          </button>
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
          <div className="flex flex-col justify-center">
            <h2 className="pt-5">{formatMessage({ ...messages.subtitle })}</h2>
            <DonateDrawer />
          </div>

          <div className="mt-12">
            <h2 className="">
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
                      ucss@xata.ca
                    </button>
                  ),
                }}
              />
              <img
                src={images.interacLogo}
                alt="interac"
                className="w-40 mx-auto"
              />
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
        </div>
      </section>
    </React.Fragment>
  );
};
