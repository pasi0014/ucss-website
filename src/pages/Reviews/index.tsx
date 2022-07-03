import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";

import bazarMain from "../../assets/images/bazar-main.jpg";
import embassyMain from "../../assets/images/poland-embassy-1.jpg";
import oselyaPic from "../../assets/images/oselya-pic.jpg";
import localBenefit from "../../assets/images/local-concert.jpg";
import fundraiserMain from "../../assets/images/fundraized-event-1.jpg";
import groupPhoto from "../../assets/images/group-photo.jpeg";

import messages from "./messages";

function Reviews(props: any) {
  const { formatMessage } = props.intl;
  return (
    <React.Fragment>
      <Helmet>
        <title>
          News - Ukrainian Canadian Social Services Ottawa (UCSS Ottawa)
        </title>
        <meta
          name="description"
          content="The Ukrainian Canadian Social Services Ottawa (UCSS Ottawa) is raising money to organize a summer camp for children who have been displaced by war in Ukraine. The goal of the camp is to provide a safe environment for children to play, learn and socialize with other children from Ottawa."
        />
        <meta
          name="keywords"
          content="donate camp, ukrainian charitable organization, ucss camp, ucss ottawa news"
        />
      </Helmet>
      <section className="text-gray-600 body-font">
        <div className="container sm:px-5 py-20 mx-auto">
          <div className="flex justify-center mb-5">
            <h1>{formatMessage({ ...messages.title })}</h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Bazar */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src={bazarMain}
                  alt="Ukrainian Easter Bazar at the St. John the Baptist Ukrainian Catholic Shrine"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_bazar })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.title_bazar })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.content_bazar })}
                  </p>
                </div>
              </div>
            </div>
            {/* Embassy of Poland */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src={embassyMain}
                  alt="Thank You from Ukrainian Community in Canada to Polish people"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_embassy })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.title_embassy })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.content_embassy })}
                    <span className="italic text-cyan-500 font-semibold">
                      #thankful
                    </span>
                  </p>
                  <div className="flex items-center w-full text-center mt-5">
                    <a
                      href="https://www.cbc.ca/news/canada/ottawa/ukrainians-thank-poland-for-support-1.6421428"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg"
                    >
                      {formatMessage({ ...messages.readMore })}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Summer Camp */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={oselyaPic}
                  alt="Summer camp for displaced Ukrainian children"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.upcomingEvents })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.summerCampTitle })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.summerCampContent })}
                  </p>
                  <Link to="/camp">
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Fundraiser event blog */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-100 transition-all duration-700"
                  src={fundraiserMain}
                  alt="Fundraizer event at Buzzing Carnaval"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_fundraizer })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.fundraizerTitle })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.fundraizerText })}
                  </p>
                  {/* <Link to="/camp">
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>

            {/* Lions club event */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={groupPhoto}
                  alt="Fundraizer event at Buzzing Carnaval"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_lions })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.lionsTitle })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.lionsTextBlurb })}
                  </p>
                  <div>

                  </div>
                  <Link to="/news/continental-marathon">
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          {/* Local Benefit Concert  */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl cursor-pointer shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden" onClick={() => window.open('https://ottawa.ctvnews.ca/video?cid=sm%3Atrueanthem%3Actvottawa%3Atwitterpost&clipId=2437050&taid=62770f1241582d0001992ce5&utm_campaign=trueAnthem%3A%20Trending%20Content&utm_medium=trueAnthem&utm_source=twitter')}>
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={localBenefit}
                  alt="Local Benefit Concert to Support Ukraine"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {/* {formatMessage({ ...messages.upcomingEvents })} */}
                  </h2>
                  <h2 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {/* {formatMessage({ ...messages.summerCampTitle })} */}
                    Local benefit concert for Ukraine
                  </h2>
                  <p className="leading-relaxed mb-3">
                    CTV's Jackie Perez with the Ukrainian Canadians making
                    harmonious efforts to raise funds with a concert at
                    Lansdowne Park.
                  </p>

                  <div className="flex items-center w-full text-center mt-5">
                    <a
                      href="https://ottawa.ctvnews.ca/video?cid=sm%3Atrueanthem%3Actvottawa%3Atwitterpost&clipId=2437050&taid=62770f1241582d0001992ce5&utm_campaign=trueAnthem%3A%20Trending%20Content&utm_medium=trueAnthem&utm_source=twitter"
                      target="_blank"
                      className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
                      rel="noreferrer"
                    >
                      {formatMessage({ ...messages.readMore })}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default injectIntl(Reviews);
