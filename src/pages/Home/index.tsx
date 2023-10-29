import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import about from "../../assets/images/about.JPG";
import groupPhoto from "../../assets/images/group-photo.jpeg";
import vyshyvanka from "../../assets/images/vyshyvanka-logo.jpeg";
import messages from "./messages";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";
import WaitingList from "../../components/WaitingList";

import ucu from "../../assets/images/ucu.png";
import bcu from "../../assets/images/bcu.jpeg";
import ucc from "../../assets/images/ucc.png";
import unf from "../../assets/images/unf.png";
import embassy from "../../assets/images/eouic.png";
import gramota1 from "../../assets/images/gramota-1.jpg";
import gramota2 from "../../assets/images/gramota-2.jpg";

import vyshyvankaPic from "../../assets/images/main.jpeg";
import campPic from "../../assets/images/flyer.png";

// TODO: add our vision and values to the website

const Home = () => {
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
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0"
          nonce="3gk0Bi40"></script>
      </Helmet>
      <main className="font-montserrat flex-1 overflow-x-hidden overflow-y-auto bg-yellow-100">
        {/* About Section */}
        <div className="w-full bg-sky-300 md:p-24 p-10 flex lg:flex-row flex-col-reverse lg:space-x-7 justify-center">
          <div className="flex flex-col w-full lg:w-4/12">
            <h1 className="font-bold sm:text-4xl text-xl ">
              {formatMessage({ ...messages.aboutUsParagraphTitle })}
            </h1>
            <hr className="border-4 border-orange-300 my-3 w-2/12" />
            <p className="text-lg text-gray-700">
              {formatMessage({ ...messages.aboutUsParagraph })}
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-5/12 mb-5 lg:mb-0">
            <img
              src={about}
              alt="Kids drawing on paper"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        <div className="w-full">
          <ContactInfo />
        </div>
        {/* Sponsors */}
        <div className="container bg-white shadow-xl rounded-xl mb-5 mt-5 p-5">
          <h2 className="text-center m-3 pb-5">
            {formatMessage({ ...messages.sponsors })}
          </h2>
          <div className="flex flex-col md:flex-row flex-nowrap sm:flex-wrap">
            <div className="w-8/12 flex justify-center mx-auto md:mt-0 mt-5">
              <img src={ucu} alt="UCU" className="h-16" />
            </div>
            <div className="w-8/12 flex justify-center mx-auto mt-5">
              <img src={bcu} alt="BCU" className="h-16" />
            </div>
            <div className="w-8/12 flex justify-center mx-auto mt-5">
              <img src={embassy} alt="Embassy" className="h-16" />
            </div>
            <div className="w-8/12 flex justify-center mx-auto mt-5">
              <img src={ucc} alt="UCC" className="h-16" />
            </div>
            <div className="w-8/12 flex justify-center mx-auto mt-5">
              <img src={unf} alt="UNF Foundation" className="h-16" />
            </div>
          </div>
        </div>
        {/* Special Thanks */}
        <div className="container bg-white shadow-lg mx-auto my-5 rounded-lg p-5 text-center">
          <h2>{formatMessage({ ...messages.achievements })}</h2>
          <div className="flex md:flex-row flex-col mt-4">
            <div className="w-full p-2 flex justify-center">
              <img
                src={gramota1}
                className="transform w-10/12 h-full space-y-5 object-cover object-center scale-100 transition-all duration-700 hover:scale-110 rounded-xl shadow-sm cursor-pointer"
                alt="Gramota"
              />
            </div>
            <div className="w-full flex justify-center p-2">
              <img
                src={gramota2}
                className="transform w-10/12 h-full space-y-5 object-cover object-center scale-100 transition-all duration-700 hover:scale-110 rounded-xl shadow-sm cursor-pointer"
                alt="Gramota"
              />
            </div>
          </div>
        </div>
        {/* Waiting List Feature */}
        {/* <div className="w-full shadow-md bg-gray-100">
          <WaitingList />
        </div> */}
        {/* Main Content */}

        <div className="bg-sky-200">
          <div className="container">
            {/* Latest News */}
            <div className="p-3">
              <h2 className="text-center mb-4 text-4xl p-5">
                {formatMessage({ ...messages.recentNewsTitle })}
              </h2>

              <div className="md:w-7/12 p-4 mx-auto mb-4">
                <div className="flex flex-col justify-center h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <div
                    className="fb-video"
                    data-href="https://www.facebook.com/oksana.melnyktv/posts/646577273468498/?vh=e&amp;extid=MSG-UNK-UNK-UNK-AN_GK0T-GK1C"
                    data-width="1200"
                    data-show-text="true"></div>
                </div>
              </div>

              {/* Video */}
              <div className="md:w-7/12 p-4 mx-auto mb-4">
                <div className="flex flex-col justify-center h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <div
                    className="fb-video"
                    data-width="1200"
                    data-href="https://www.facebook.com/watch/?v=793415402177023"
                    data-show-text="false">
                    <blockquote
                      cite="https://www.facebook.com/yvanbaker/videos/793415402177023/"
                      className="fb-xfbml-parse-ignore">
                      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                      <a
                        href="https://www.facebook.com/yvanbaker/videos/793415402177023/"
                        target="_blank"
                        rel="noreferrer"
                      />
                      <p>
                        Canada will stand with the Ukrainian people until they
                        win. Slava Ukraini!
                      </p>
                      Posted by{" "}
                      <a href="https://www.facebook.com/yvanbaker">
                        Yvan Baker, MP
                      </a>{" "}
                      on Thursday, May 18, 2023
                    </blockquote>
                  </div>
                  <div className="flex flex-col mx-auto p-3">
                    <span className="text-center text-medium">
                      Canada will stand with the Ukrainian people until they
                      win. Slava Ukraini!
                    </span>
                    <a
                      href="https://www.facebook.com/yvanbaker"
                      className="text-center"
                      target="_blank"
                      rel="noreferrer">
                      Yvan Baker, MP
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row sm:space-y-0 space-y-16 lg:space-x-16 justify-center rounded-xl">
                {/* Camp report */}
                <div className="md:w-7/12 shadow-md">
                  <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                    <img
                      className="transform lg:h-80 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                      src="https://smartcdn.gprod.postmedia.digital/ottawacitizen/wp-content/uploads/2022/08/ukrainian-camp1_271763994-w.jpg?quality=90&strip=all&w=1128&h=846&type=webp"
                      alt="Children sitting in front of the fireplace"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3 mt-3">
                        August 2, 2022
                      </h2>
                      <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                        {formatMessage({ ...messages.campTitle })}
                      </h3>
                      <p className="leading-relaxed mb-3">
                        {/* {formatMessage({ ...messages.lionsTextBlurb })} */}
                        <span className="italic font-medium leading-relaxed">
                          {formatMessage({ ...messages.campText1 })}
                        </span>
                        <span className="mt-2">
                          {formatMessage({ ...messages.campText2 })}
                        </span>
                      </p>
                      <a
                        href="https://ottawacitizen.com/news/local-news/an-unbelievable-experience-community-support-bolsters-outaouais-summer-camp-for-displaced-ukrainian-children?fbclid=IwAR261wEFwDaNGvZKRfSy8INfY5uS99JZMmBRFKBQq7BRMPCtoKCJzIbdCTU"
                        target="_blank"
                        rel="noreferrer">
                        <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg">
                          {formatMessage({ ...messages.readMore })}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Lions club event */}
                <div className="md:w-7/12 shadow-md">
                  <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                    <img
                      className="transform lg:h-80 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                      src={groupPhoto}
                      alt="Members of UCSS and Lions Club"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3 mt-3">
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
              </div>
              {/* Vyshyvanka */}
              <div className="md:w-7/12 shadow-md mx-auto mt-5">
                <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <img
                    className="transform lg:h-80 md:h-36 w-full object-cover object-center scale-100 transition-all duration-700 hover:scale-110"
                    src={vyshyvanka}
                    alt="Embroidery Event"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-3 mt-3">
                      {formatMessage({ ...messages.date_vyshyvanka })}
                    </h2>
                    <h3 className="title-font text-lg font-bold text-gray-600 mb-3">
                      {formatMessage({ ...messages.vyshyvankaTitle })}
                    </h3>
                    <p className="leading-relaxed mb-3">
                      {formatMessage({ ...messages.vyshyvankaTextBlurb })}
                    </p>
                    <Link to="/news/vyshyvanka-vechir">
                      <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg">
                        {formatMessage({ ...messages.readMore })}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mx-auto text-center mt-5 mb-5 sm:w-5/12 w-full">
                <Link to="/news">
                  <button className="sm:w-8/12 w-full bg-blue-500 p-3 rounded-xl text-white font-medium transition-all hover:bg-blue-400 hover:shadow-md duration-300">
                    {formatMessage({ ...messages.loadMore })}
                  </button>
                </Link>
              </div>
            </div>

            {/* Picture Carousel */}
            {/* <div className="flex flex-col md:flex-row md:space-x-2 justify-center rounded-xl sm:w-8/12 w-full mx-auto mb-5">
              <div className="w-full mx-auto bg-blue-300 rounded-xl shadow-md sm:p-10">
                <h2 className="text-center py-5 text-yellow-200">
                  {formatMessage({ ...messages.donationWeReceived })}
                </h2>
                <ControlledCarousel />
              </div>
            </div> */}
          </div>
        </div>
        <div id="contact-form">
          <ContactForm scrollFlag />
        </div>
      </main>
    </React.Fragment>
  );
};

export default injectIntl(Home);
