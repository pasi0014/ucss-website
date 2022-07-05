import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";
import { Context } from "../../components/Wrappper/index";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/aboutImg.jpg";
// import oselyaPic from "../../assets/images/oselya-pic.jpg";
import campPic from "../../assets/images/camp.png";
import groupPhoto from "../../assets/images/group-photo.jpeg";

import messages from "./messages";
import ContactInfo from "../../components/ContactInfo";
import ControlledCarousel from "../../components/ControlledCarousel";

const Home = () => {
  const context = useContext(Context);
  const { formatMessage } = useIntl();

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Home - Ukrainian Canadian Social Services Ottawa (UCSS Ottawa)
        </title>
        <meta
          name="description"
          content="Ukrainian Canadian Social Services - Ottawa Branch is a non-profit charitable organization serving the Ukrainian community in Ottawa. Guided by the needs of individuals and families of Ukrainian community, who experience language and cultural barriers. We provide a range of support services."
        />
        <meta
          name="keywords"
          content="donate camp, ukrainian charitable organization, ucss camp, ucss ottawa news"
        />
      </Helmet>
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
              <h2 className="font-medium text-4xl mb-2 text-center w-full">
                {formatMessage({ ...messages.howYouCanHelp })}
              </h2>
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

            {/* TODO: To be enabled when we have text for camp ad */}
            <div className="w-full mb-3 shadow-md">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform w-full object-cover object-center scale-90 transition-all duration-700 hover:scale-100"
                  src={campPic}
                  alt="Summer camp for displaced Ukrainian children"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.eventsTitle })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.summerCampTitle })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.summerCampText })}
                  </p>
                  <Link to="/camp">
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.learnMore })}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-full lg:w-5/12">
            <ContactInfo />
          </div>
        </div>

        <div className="container">
          {/* Latest News */}
          <div className="mt-5 mb-5 p-3">
            <h2 className="text-center mb-4 text-4xl">{formatMessage({...messages.recentNewsTitle})}</h2>
            <div className="flex flex-col md:flex-row md:space-x-2 justify-center rounded-xl">
              {/* Lions club event */}
              <div className="md:w-8/12 shadow-md">
                <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <img
                    className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                    src={groupPhoto}
                    alt="Members of UCSS and Lions Club"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {formatMessage({ ...messages.date_lions })}
                    </h2>
                    <h3 className="title-font text-lg font-bold text-gray-600 mb-3">
                      {formatMessage({ ...messages.lionsTitle })}
                    </h3>
                    <p className="leading-relaxed mb-3">
                      {formatMessage({ ...messages.lionsTextBlurb })}
                    </p>
                    <Link to="/news/continental-marathon">
                      <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg">
                        {formatMessage({ ...messages.readMore })}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Gratidute from hospital */}
              {/* <div className="md:w-11/12 shadow-md">
                <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <img
                    className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                    src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/278893210_2825694661068056_3343143635443493953_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=k2hUe9xvK2kAX-6_sWS&_nc_ht=scontent-yyz1-1.xx&oh=00_AT_cCguWxyWEuifxEL_Sg5vJyjNRcxa4XOyFGRLSbFobvw&oe=62C7F102"
                    alt="Members of UCSS and Lions Club"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {formatMessage({ ...messages.date_lions })}
                    </h2>
                    <h3 className="title-font text-lg font-bold text-gray-600 mb-3">
                      {formatMessage({ ...messages.hospitalGratiduteTitle })}
                    </h3>
                    <p className="leading-relaxed mb-3">
                      {formatMessage({ ...messages.hospitalGratiduteTextBlurb })}
                    </p>
                    <Link to="/news/gratidute-from-hospital">
                      <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg">
                        {formatMessage({ ...messages.readMore })}
                      </button>
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="mx-auto text-center mt-5 mb-5 sm:w-5/12 w-full">
              <Link to="/news">
                <button className="sm:w-8/12 w-full bg-blue-500 p-3 rounded-xl text-white font-medium transition-all hover:bg-blue-400 hover:shadow-md duration-300">
                  {formatMessage({...messages.loadMore})}
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-2 justify-center rounded-xl sm:w-8/12 w-full mx-auto mb-5">
            <div className="w-full mx-auto bg-blue-300 rounded-xl shadow-md sm:p-10">
              <h2 className="text-center py-5 text-yellow-200">
                {formatMessage({ ...messages.donationWeReceived })}
              </h2>
              <ControlledCarousel />
            </div>
          </div>

        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
