import React, { useEffect, useState, useContext } from "react";
import { useIntl } from "react-intl";

import aboutImage from "../../assets/images/aboutImg.jpg";
import profilePicture from "../../assets/images/profilePicture.jpg";
import { Context } from "../../components/Wrappper/index";

import logo from "../../assets/images/logo.png";
// import { Link } from "react-router-dom";

import messages from "./messages";

const About = () => {
  const context = useContext(Context);
  const { formatMessage } = useIntl();
  /**
   * UseEffect to scroll to the top of the page
   */
  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  // const thirdSection = document.getElementById("third-section");
  // const secondSection = document.getElementById("second-section");

  // const handleScroll = (sectionNumber: number) => {
  //   if (sectionNumber === 3) {
  //     thirdSection?.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (sectionNumber === 2) {
  //     secondSection?.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (sectionNumber === 1) {
  //     window.scrollTo({ top: 500, behavior: "smooth" });
  //   }
  // };

  return (
    <section className="body-font overflow-hidden">
      <div className="w-full h-full bg-yellow-100">
        <div className="md:flex mx-auto mt-auto rounded-xl sm:p-8 py-5 md:p-5 md:place-items-center bg-blue-300 sm:h-full h-screen">
          <img
            className="sm:w-34 md:w-72 md:h-52 lg:w-4/12 lg:h-auto w-40 h-32 md:rounded-xl rounded-full mx-auto"
            src={aboutImage}
            alt="Flags waving in the wind"
          />
          <div className="pt-6 md:p-8 text-left space-y-4">
            <h1 className="sm:p-2 p-3 text-gray-600">
              {formatMessage({ ...messages.aboutUsParagraphTitle })}
            </h1>
            <blockquote className="bg-gray-100 border-l-6 border-yellow-300 rounded-lg lg:p-5">
              <p className="text-lg">
                {formatMessage({ ...messages.aboutUsParagraph })}
              </p>
            </blockquote>
          </div>
        </div>
        <div className="font-sans sm:h-screen sm:py-0 py-5 h-full w-full flex sm:flex-row sm:space-y-0 space-y-24 flex-col justify-center items-center">
          <div className="card w-96 mx-auto bg-white shadow-xl rounded-lg sm:mt-0 mt-20">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src={logo}
              alt="Ukrainian Social Services Ottawa Branch logo"
            />
            <div className="text-center mt-2 text-3xl font-medium">
              {formatMessage({ ...messages.presidentName })}
            </div>
            <div className="text-center mt-2 text-sm">
              <a href="tel:6134134159">613-413-4159</a>
            </div>
            <div className="text-center font-normal text-sm mt-2">
              <a href="mailto:ucss@xata.ca">ucss@xata.ca</a>
            </div>
            <div className="px-6 text-center mt-2 font-base text-sm">
              <p>{formatMessage({ ...messages.presidentTitle })}</p>
            </div>
            <hr className="mt-8" />
          </div>

          <div className="card w-96 mx-auto bg-white shadow-xl rounded-lg">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src={logo}
              alt="Ukrainian Social Services Ottawa Branch logo"
            />
            <div className="text-center mt-2 text-3xl font-medium">
              {formatMessage({ ...messages.vpName })}
            </div>
            <div className="text-center mt-2 text-sm">
              <a href="tel:6137248206">613-724-8206</a>
            </div>
            <div className="text-center font-normal text-sm mt-4"> </div>
            <div className="px-6 text-center mt-2 font-base text-sm">
              <p>{formatMessage({ ...messages.vpTitle })}</p>
            </div>
            <hr className="mt-8" />
          </div>

          <div className="card w-96 mx-auto bg-white shadow-xl rounded-lg mb-14">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src={logo}
              alt="Ukrainian Social Services Ottawa Branch logo"
            />
            <div className="text-center mt-2 text-3xl font-medium">
              {formatMessage({ ...messages.coordinatorName })}
            </div>
            <div className="text-center mt-2 text-sm">
              <a href="tel:6135583893">613-558-3893</a>
            </div>
            <div className="text-center font-normal text-sm mt-2">
              <a href="mailto:nazar@ucssottawa.com">nazar@ucssottawa.com</a>
            </div>
            <div className="px-6 text-center mt-2 font-base text-sm">
              <p>{formatMessage({ ...messages.coordinatorTitle })}</p>
            </div>
            <hr className="mt-8" />
          </div>
        </div>
        <h2 className="text-center mb-5">
          {formatMessage({ ...messages.lvivTitle })}
        </h2>
        <div className="font-sans sm:py-0 py-5 w-full flex sm:flex-row sm:space-y-0 space-y-24 flex-col justify-center items-center">
          <div className="card w-96 mx-auto bg-white shadow-xl rounded-lg sm:mt-0 mt-20">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src={logo}
              alt="Ukrainian Social Services Ottawa Branch logo"
            />
            <div className="text-center mt-2 text-3xl font-medium">
              {formatMessage({ ...messages.artashes })}
            </div>
            <div className="text-center mt-2 text-sm">
              <a href="tel:380974710045">+380 97 471 0045</a>
            </div>
            <div className="text-center font-normal text-sm mt-2">
              <a href="mailto:bolzen777@gmail.com">bolzen777@gmail.com</a>
            </div>
            <div className="px-6 text-center mt-2 font-base text-sm">
              <p>{formatMessage({ ...messages.lvivVP })}</p>
            </div>
            <hr className="mt-8" />
          </div>

          <div className="card w-96 mx-auto bg-white shadow-xl rounded-lg">
            <img
              className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
              src={logo}
              alt="Ukrainian Social Services Ottawa Branch logo"
            />
            <div className="text-center mt-2 text-3xl font-medium">
              {formatMessage({ ...messages.lvivGanna })}
            </div>
            <div className="text-center mt-2 text-sm">
              <a href="tel:6137248206">+380 67 255 7073</a>
            </div>
            <div className="text-center font-normal text-sm mt-2">
              <a href="mailto:a.nadtochii@gmail.com">a.nadtochii@gmail.com</a>
            </div>
            <hr className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
