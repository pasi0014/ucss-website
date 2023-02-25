import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import about from "../../assets/images/about.JPG";
// import campPic from "../../assets/images/IMG_3184.JPG";
import groupPhoto from "../../assets/images/group-photo.jpeg";
import mykolay from "../../assets/images/mykolay-ad.jpeg";
import vyshyvanka from "../../assets/images/vyshyvanka-logo.jpeg";
import previewToys from "../../assets/images/preview-toys.jpeg";
import messages from "./messages";
import ContactInfo from "../../components/ContactInfo";
// import ControlledCarousel from "../../components/ControlledCarousel";
import ContactForm from "../../components/ContactForm";
import WaitingList from "../../components/WaitingList";

import ucu from "../../assets/images/ucu.png";
import bcu from "../../assets/images/bcu.jpeg";
import ucc from "../../assets/images/ucc.png";
import embassy from "../../assets/images/eouic.png";
import gramota1 from "../../assets/images/gramota-1.jpg";
import gramota2 from "../../assets/images/gramota-2.jpg";

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
          <div className="flex flex-col sm:flex-row flex-nowrap sm:flex-wrap">
            <div className="w-8/12 flex justify-center">
              <img src={ucu} alt="UCU" className="h-16" />
            </div>
            <div className="w-8/12 flex justify-center">
              <img src={bcu} alt="BCU" className="h-16" />
            </div>
            <div className="w-8/12 flex justify-center">
              <img src={embassy} alt="Embassy" className="h-16" />
            </div>
            <div className="w-8/12 flex justify-center">
              <img src={ucc} alt="UCC" className="h-16" />
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
        {/* <div className="lg:flex lg:mx-auto w-full lg:w-10/12 mb-4 mt-4 justify-center lg:space-x-3 p-3">
          <div className="flex flex-col lg:w-10/12 sm:w-12/12">
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
          </div>
        </div> */}

        {/* UPCOMING EVENTS HERE */}

        {/* <div className="w-full">
          <h2 className="text-center mt-5">
            {formatMessage({ ...messages.upcomingEvents })}
          </h2>
          <div className="container flex flex-col sm:w-7/12 w-full justify-center mx-auto my-5">
            <img
              src={mykolay}
              alt="Vyshyvanka Event"
              className="rounded-xl shadow-md"
            />
            <div className="rounded-xl bg-white p-4 mt-3 flex flex-col shadow-sm">
              <p>{formatMessage({ ...messages.mykolay })}</p>
              <a
                href="https://www.eventbrite.com/e/st-nicholas-kids-show-tickets-471969331977"
                target="_blank"
                className="mx-auto text-center mt-3 sm:w-4/12 w-full bg-blue-500 p-3 rounded-xl text-white font-medium transition-all hover:bg-blue-400 hover:shadow-md duration-300"
                rel="noreferrer"
              >
                Register
              </a>
            </div>

            <div className="conteiner w-full p-3 flex">
              <div className="w-12/12 shadow-md mx-auto">
                <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                  <img
                    className="transform lg:h-80 md:h-80 w-full object-cover object-center scale-100 transition-all duration-700 hover:scale-110"
                    src={previewToys}
                    alt="Children sitting in front of the fireplace"
                  />
                  <div className="p-6">
                    <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                      Toys for Ukrainian refugee kids
                    </h3>
                    <p className="leading-relaxed mb-3">
                      Toy Mountain supports families who have fled the war in
                      Ukraine. CTV's Dave Charbonneau reports.
                    </p>
                    <a
                      href="https://ottawa.ctvnews.ca/video?clipId=2585411"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg">
                        {formatMessage({ ...messages.readMore })}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-sky-200">
          <div className="container">
            {/* Latest News */}
            <div className="p-3">
              <h2 className="text-center mb-4 text-4xl p-5">
                {formatMessage({ ...messages.recentNewsTitle })}
              </h2>
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
                        <p className="mt-2">
                          {formatMessage({ ...messages.campText2 })}
                        </p>
                      </p>
                      <a
                        href="https://ottawacitizen.com/news/local-news/an-unbelievable-experience-community-support-bolsters-outaouais-summer-camp-for-displaced-ukrainian-children?fbclid=IwAR261wEFwDaNGvZKRfSy8INfY5uS99JZMmBRFKBQq7BRMPCtoKCJzIbdCTU"
                        target="_blank"
                        rel="noreferrer"
                      >
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

                {/* Gratidute from hospital */}
                {/* <div className="md:w-8/12 shadow-md">
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
                      {formatMessage({
                        ...messages.hospitalGratiduteTextBlurb,
                      })}
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
