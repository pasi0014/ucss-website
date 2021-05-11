import React from "react";
import aboutImage from "../assets/images/aboutImg.jpg";
import { useState } from "react";
import svgFile from "../assets/static/document.svg";

export const About = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered(!hovered);
  };
  const handleScroll = () => {
    window.scrollTo({ top: 1547, left: 0, behavior: "smooth" });
  };
  // window.scrollTo({ top: 80, left: 0, behavior: "smooth" });
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
        <div className="w-screen lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:mx-auto md:text-left items-center text-center shadow p-4 m-3 rounded-2xl">
          <h1 className="title-font mb-4 font-medium">About Us</h1>
          <p className="mb-8 leading-relaxed text-lg text-left">
            <span className="font-medium">
              Ukrainian Canadian Social Services (Ottawa)
            </span>{" "}
            is a non-profit charitable organization serving the Ukrainian
            ethno-cultural. Guided by the needs of individuals and families of
            Ukrainian ethno-cultural back-ground in the community, who
            experience language and cultural barriers, we provide a range of
            social services and support programs.
          </p>
        </div>
        <span className="absolute inset-x-0 bottom-0 flex justify-center mb-5">
          <button onClick={handleScroll}>
            <svg
              className="animate-bounce text-white w-6 h-6 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
            </svg>
          </button>
        </span>
      </div>

      <div className="h-screen w-screen bg-blue-300 flex flex-wrap md:flex-nowrap justify-center items-center">
        <div
          className={
            hovered
              ? "transition filter blur duration-400 ease-in flex flex-col lg:w-5/12 p-3 md:w-8/12 lg:mx-auto w-full items-center md:items-center lg:items-start p-3 md:w-screen md:mx-auto sm:w-6/12 sm:mx-auto sm:w-screen"
              : "transition duration-300 ease-out flex flex-col lg:w-5/12 lg:mx-auto p-3 md:w-screen md:mx-auto items-center md:items-center lg:items-start sm:w-6/12 sm:mx-auto sm:w-screen"
          }
        >
          <h1 className="text-yellow-300 leading-relaxed tracking-wider xl:text-left text-5xl">
            What we do?
          </h1>
          <h3 className="text-gray-500 xl:text-left">
            UCSS helps people who need help both in Canada and abroad
          </h3>
          <div className="flex flex-col items-start space-y-2 mt-5 w-12/12 sm:w-12/12 md:w-8/12 xl:w-6/12">
            <button className="btn px-4 py-2 font-semibold text-gray-100 shadow-sm bg-green-600 transition hover:text-white hover:bg-green-500 w-full">
              Find out how we can help you
            </button>
            <button className="btn px-4 py-2 font-semibold text-gray-100 shadow-sm bg-blue-600 transition hover:text-white hover:bg-blue-500 w-full">
              Contact us now
            </button>
          </div>
        </div>
        <div className="m-3 flex items-center justify-center items-center rounded-lg p-0">
          <img
            src={svgFile}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            alt="Document"
            className="bg-white rounded-lg transform shadow-sm transition hover:scale-110 hover:shadow-lg w-11/12 lg:w-9/12 md:w-9/12 sm:w-9/12 sm:mt-7 lg:mt-0"
          />
        </div>
      </div>
      <div className="h-screen bg-yellow-200 flex flex-wrap md:flex-nowrap justify-center items-center">
        <div className="text-center">
          <h1 className="text-blue-300 leading-relaxed tracking-wide font-extrabold text-5xl">
            We Help People
          </h1>
        </div>
        <div className="w-4/12 m-3 text-center justify-center items-center rounded-lg p-0 ">
          <div className="bg-gray-100 text-left p-5 rounded-lg shadow-sm">
            <h2>Review</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              unde inventore a ratione maxime amet aut facilis mollitia beatae
              facere ad perferendis molestiae saepe dicta dolores cupiditate,
              qui laudantium esse?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
