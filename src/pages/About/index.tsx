import React, { useEffect, useState, useContext } from "react";
import { useIntl } from "react-intl";

import aboutImage from "../../assets/images/aboutImg.jpg";
import profilePicture from "../../assets/images/profilePicture.jpg";
import { Context } from "../../components/Wrappper/index";

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
      <div className="container w-full bg-yellow-100 rounded-xl mt-5 sm:mb-1">
        <figure className="md:flex rounded-xl sm:p-8 py-4 md:p-0 md:place-items-center">
          <img
            className="sm:w-34 md:w-72 md:h-52 lg:w-4/12 lg:h-auto w-40 h-32 md:rounded-xl rounded-full mx-auto"
            src={aboutImage}
            alt="Flags waving in the wind"
          />
          <div className="pt-6 md:p-8 text-left space-y-4">
            <blockquote className="bg-gray-100 border-l-6 border-yellow-300 rounded-lg lg:p-5">
              <p className="text-lg">
                <span className="font-medium">
                  {formatMessage({ ...messages.aboutUsParagraphTitle })}
                </span>{" "}
                {formatMessage({ ...messages.aboutUsParagraph })}
                <p className="font-medium">
                  {formatMessage({ ...messages.aboutUsExtra })}
                </p>
              </p>
            </blockquote>
          </div>
        </figure>
      </div>

      <div className="bg-blue-200 font-sans h-screen w-full flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-white shadow-xl rounded-lg">
          <img
            className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
            src={profilePicture}
            alt=""
          />
          <div className="text-center mt-2 text-3xl font-medium">
            {formatMessage({ ...messages.presidentName })}
          </div>
          <div className="text-center mt-2 text-sm">
            <a href="tel:6134134159">613-413-4159</a>
          </div>
          <div className="text-center font-normal text-sm mt-2">
            <a href="mailto:maryna@uscssottawa.com">maryna@ucssottawa.com</a>
          </div>
          <div className="px-6 text-center mt-2 font-base text-sm">
            <p>{formatMessage({ ...messages.presidentTitle })}</p>
          </div>
          <hr className="mt-8" />
        </div>
      </div>

      {/* <div
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
        {/* <span className="absolute inset-x-0 bottom-0 flex justify-center mb-5">
          <button
            // onClick={() => {
            //   handleScroll(3);
            // }}
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
      </div> */}
      {/* <div
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
        {/* <span className="absolute inset-x-0 bottom-5 flex justify-center mb-5">
          <button
            // onClick={() => {
            //   handleScroll(1);
            // }}
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
        </span> *
      </div> */}
    </section>
  );
};

export default About;
