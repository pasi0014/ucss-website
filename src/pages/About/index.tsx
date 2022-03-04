import React, { useEffect, useState, useContext } from "react";
import { useIntl } from "react-intl";

import aboutImage from "../../assets/images/aboutImg.jpg";
import { Context } from "../../components/Wrappper/index";

import { Link } from "react-router-dom";

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

  const thirdSection = document.getElementById("third-section");
  const secondSection = document.getElementById("second-section");

  const handleScroll = (sectionNumber: number) => {
    if (sectionNumber === 3) {
      thirdSection?.scrollIntoView({ behavior: "smooth" });
    }
    if (sectionNumber === 2) {
      secondSection?.scrollIntoView({ behavior: "smooth" });
    }
    if (sectionNumber === 1) {
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="relative container h-screen mx-auto flex px-5 py-24 flex flex-wrap md:flex-nowrap lg:items-center">
        <div className="hidden sm:block flex flex-col mx-auto lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:w-10/12 md:mb-0">
          <img
            className="object-cover object-center rounded-lg shadow-sm lg:justify-center mx-auto"
            alt="hero"
            src={aboutImage}
          />
        </div>
        <div
          className="w-screen lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-16
          flex flex-col md:items-start md:mx-auto md:text-left
          items-center text-center shadow p-4 m-3 rounded-2xl"
        >
          <h1 className="title-font mb-4 font-medium">
            {formatMessage({ ...messages.aboutUsTitle })}
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-left">
            <span className="font-medium">
              Ukrainian Canadian Social Services in Ottawa
            </span>{" "}
            is a non-profit charitable organization serving the Ukrainian
            ethno-cultural. Guided by the needs of individuals and families of
            Ukrainian ethno-cultural back-ground in the community, who
            experience language and cultural barriers.
            <p className="font-medium">
              At this challenging time for Ukraine, we are committed to the
              humanitarian help.
            </p>
          </p>
        </div>
        <span className="absolute inset-x-0 bottom-5 flex justify-center mb-5">
          <button
            onClick={() => {
              handleScroll(2);
            }}
            className="p-1"
          >
            <svg
              className="animate-bounce text-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
            </svg>
          </button>
        </span>
      </div>

      <div
        className="relative h-screen w-screen bg-blue-300 flex flex-col lg:flex-row justify-center items-center"
        id="second-section"
      >
        <div className="transition duration-300 ease-out flex flex-col lg:w-5/12 lg:mx-auto p-3 md:w-screen md:mx-auto items-center md:items-center lg:items-start sm:w-6/12 sm:mx-auto sm:w-screen">
          <h1 className="text-yellow-300 leading-relaxed tracking-wider xl:text-left text-5xl">
            What we do?
          </h1>
          <h3 className="text-gray-500 text-xl md:text-left">
            Ukrainian Canadian Social Services helps people who need help both
            in Canada and abroad
          </h3>
          <div className="flex flex-col items-start space-y-2 mt-5 w-12/12 sm:w-12/12 md:w-7/12 lg:w-10/12 xl:w-7/12">
            <Link to="/" className="w-100">
              <button
                className="btn px-4 py-2 font-semibold text-gray-100
             shadow-sm bg-green-600 transition hover:text-white 
             hover:bg-green-500 w-full"
              >
                Find out how we can help you
              </button>
            </Link>
            <Link to="/contact" className="w-100">
              <button
                className="btn px-4 py-2 font-semibold text-gray-100
             shadow-sm bg-blue-600 transition hover:text-white
              hover:bg-blue-500 w-full"
              >
                Contact us now
              </button>
            </Link>
          </div>
        </div>
        {/* TODO: Look into this part later, to see if we even need this - NP */}
        {/* <div className="m-3 flex items-center justify-center items-center rounded-lg p-0">
          <img
            src={svgFile}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            alt="Document"
            className="bg-white rounded-lg transform shadow-sm transition
            hover:scale-110 hover:shadow-lg
            w-9/12  lg:w-9/12 md:w-7/12 sm:w-8/12 sm:mt-7 lg:mt-0"
          />
        </div> */}
        <span className="absolute inset-x-0 bottom-0 flex justify-center mb-5">
          <button
            onClick={() => {
              handleScroll(3);
            }}
            className="p-1"
          >
            <svg
              className="animate-bounce text-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
            </svg>
          </button>
        </span>
      </div>
      <div
        className="relative h-screen bg-yellow-200 flex flex-col lg:flex-row justify-center items-center"
        id="third-section"
      >
        <div className="text-center">
          <h1 className="text-blue-300 mb-4 leading-relaxed tracking-wide font-extrabold text-5xl">
            We Help People
          </h1>
        </div>
        <div className="w-full px-2 lg:w-5/12 md:w-10/12 sm:w-full m-3 text-center justify-center items-center rounded-lg p-0 ">
          <div className="bg-gray-100 text-left p-5 rounded-xl shadow transition transform">
            <h2>Our Reviews</h2>
            <blockquote>
              <p className="text-lg mt-3 leading-relaxed tracking-wide review">
                <cite>
                  Я не можу словами передати свою безмежну вдячність за це. Але
                  Бог все бачить! І Він сторицею віддячить їм, а також їхнім
                  родинам за їх допомогу. Я зустріла добрих, щирих чуйних людей,
                  які стали мені як сім’я. Ця організація, а точніше люди, які
                  там працюють, вони рятують життя. Ще раз дякую за все!!!
                </cite>
              </p>
            </blockquote>

            <Link to="/stories">
              <button className="btn px-3 py-2 bg-blue-300 text-white font-semibold mt-3 transition hover:bg-blue-200">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <span className="absolute inset-x-0 bottom-5 flex justify-center mb-5">
          <button
            onClick={() => {
              handleScroll(1);
            }}
            className="p-1"
          >
            <svg
              className="animate-bounce text-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" />
            </svg>
          </button>
        </span>
      </div>
    </section>
  );
};

export default About;
