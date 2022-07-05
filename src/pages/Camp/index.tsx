import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage, injectIntl } from "react-intl";

import campPicture from "../../assets/images/camp.png";
import messages from "./messages";

function Camp(props: any) {
  const { formatMessage } = props.intl;
  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Camp - Ukrainian Canadian Social Services organizes camp for displaced
          children from Ukraine
        </title>
        <meta
          name="description"
          content="The Ukrainian Canadian Social Services Ottawa (UCSS Ottawa) is raising money to organize a summer camp for children who have been displaced by war in Ukraine. The goal of the camp is to provide a safe environment for children to play, learn and socialize with other children from Ottawa."
        />
        <meta
          name="keywords"
          content="summer camp, camp, camp for ukrainian children, ucss camp"
        />
      </Helmet>
      <div className="w-full sm:hidden block">
        <img
          className="w-full object-cover object-center"
          src={campPicture}
          alt="Lake on the camp"
        />
      </div>
      <article className="text-gray-600 body-font">
        <div className="container sm:mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="p-4 md:w-12/12">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <div className="w-full rounded-lg shadow-md bg-orange-200 p-5 text-center flex flex-col">
                  <span className="text-xl font-medium text-orange-700">{formatMessage({ ...messages.warning })}</span>
                </div>
                <img
                  className="sm:block hidden transform w-full object-cover object-center scale-90"
                  src={campPicture}
                  alt="Lake on the camp"
                />
                <div className="p-6">
                  <h1 className="title-font text-3xl font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.title })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.content })}
                  </p>
                  <div className="rounded-xl mt-5 text-blue-400">
                    <h2>{formatMessage({ ...messages.campDetails })}</h2>
                  </div>
                  {/* <div className="mt-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 ">
                    <h3 className="text-gray-500">
                      {formatMessage({ ...messages.who })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      <FormattedMessage
                        {...messages.whoContent}
                        values={{
                          tag: (
                            <>
                              <br />
                              <br />
                            </>
                          ),
                        }}
                      />
                    </p>
                  </div> */}

                  <div className="mt-3">
                    <h3 className="text-gray-500">
                      {formatMessage({ ...messages.when })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.whenContent })}
                      <br />
                      {formatMessage({ ...messages.whenContentDropOff })}
                      <br />
                      {formatMessage({ ...messages.whenContentPickUp })}
                    </p>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-gray-500">
                      {formatMessage({ ...messages.where })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      <FormattedMessage
                        {...messages.whereContent}
                        values={{
                          link: (
                            <a
                              href="https://www.google.com/maps/place/21+Chem.+Newcombe,+Val-des-Monts,+QC+J8N+1A9/@45.7064719,-75.7814431,17z/data=!3m1!4b1!4m5!3m4!1s0x4cd1d935d065d57f:0x6508e46255959626!8m2!3d45.7064719!4d-75.7814431"
                              target="_blank"
                              rel="noreferrer"
                              className="text-indigo-500"
                            >
                              St. John’s Ukrainian Camp
                            </a>
                          ),
                        }}
                      />
                    </p>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-gray-500">
                      {formatMessage({ ...messages.cost })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      <FormattedMessage {...messages.costContent} />
                    </p>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-blue-400">
                      {formatMessage({ ...messages.programming })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.programmingContent })}
                    </p>
                    <p className="leading-relaxed mt-2">
                      {formatMessage({ ...messages.campActivitiesTitle })}
                      <ul className="list-disc sm:px-5 px-4 mt-3 mb-3">
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_1,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_2,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_3,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_4,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_5,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_6,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_7,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_8,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_9,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_10,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_11,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.campActivitiesContent_12,
                          })}
                        </li>
                      </ul>
                    </p>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-gray-500">
                      {formatMessage({ ...messages.finalDayAtCamp })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.finalDayAtCampContent })}
                    </p>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-blue-400">
                      {formatMessage({ ...messages.foodAndAccommodation })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      <FormattedMessage
                        {...messages.foodAndAccommodationContent}
                        values={{
                          tag: (
                            <>
                              <br />
                              <br />
                            </>
                          ),
                        }}
                      />
                    </p>
                  </div>
                  
                  {/* Registration Info */}
                  {/* <div className="mt-3">
                    <h3 className="text-blue-400">
                      {formatMessage({ ...messages.registration })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      <span>{formatMessage({...messages.warning})}</span>
                      <FormattedMessage
                        {...messages.registrationContent}
                        values={{
                          email: (
                            <a
                              href="mailto:camp@ucssottawa.com"
                              className="text-indigo-500"
                            >
                              camp@ucssottawa.com
                            </a>
                          ),
                        }}
                      />
                    </p>
                  </div> */}

                  {/* <div className="mt-3">
                    <h3 className="text-blue-400">
                      {formatMessage({ ...messages.callForVolunteers })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.callForVolunteersContent })}
                    </p>
                  </div> */}

                  {/* <div className="mt-3">
                    <h3 className="text-gray-500 text-xl">
                      {formatMessage({ ...messages.volunteers })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.volunteersContent })}
                    </p>
                  </div> */}

                  {/* <div className="mt-3">
                    <h3 className="text-gray-500 text-xl">
                      {formatMessage({ ...messages.duties })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.dutiesContent })}
                    </p>
                  </div> */}

                  {/* <div className="mt-3">
                    <h3 className="text-gray-500 text-xl">
                      {formatMessage({ ...messages.becomeAVolunteer })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      <FormattedMessage
                        {...messages.becomeAVolunteerContent}
                        values={{
                          link: (
                            <a
                              href="mailto:camp@ucssottawa.com"
                              className="text-indigo-500"
                            >
                              camp@ucssottawa.com
                            </a>
                          ),
                        }}
                      />
                    </p>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.becomeAVolunteerNote })}
                    </p>
                  </div> */}

                  {/* <div className="mt-3">
                    <h3 className="text-gray-500 text-xl">
                      {formatMessage({ ...messages.volunteerCounselor })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.volunteerCounselorContent })}
                    </p>
                  </div> */}

                  {/* <div className="mt-3">
                    <h3 className="text-gray-500 text-xl">
                      {formatMessage({ ...messages.positionRequirements })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      <ul className="list-disc sm:px-5 px-4 mt-3 mb-3">
                        <li>
                          {formatMessage({
                            ...messages.positionRequirements_1,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.positionRequirements_2,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.positionRequirements_3,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.positionRequirements_4,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.positionRequirements_5,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.positionRequirements_6,
                          })}
                        </li>
                        <li>
                          {formatMessage({
                            ...messages.positionRequirements_7,
                          })}
                        </li>
                      </ul>
                    </p>
                  </div> */}

                  {/* <div className="mt-3">
                    <h3 className="text-gray-500 text-xl">
                      {formatMessage({ ...messages.apply })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      <FormattedMessage
                        {...messages.applyContent}
                        values={{
                          email: (
                            <a
                              href="mailto:camp@ucssottawa.com"
                              className="text-indigo-500"
                            >
                              camp@ucssottawa.com
                            </a>
                          ),
                        }}
                      />
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}

export default injectIntl(Camp);
