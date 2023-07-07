import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage, injectIntl } from "react-intl";

import campPicture from "../../assets/images/flyer.png";
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
                {/* Warning messages */}
                {/* <div className="w-full rounded-lg shadow-md bg-orange-200 p-5 text-center flex flex-col">
                  <span className="text-xl font-medium text-orange-700">
                    {formatMessage({ ...messages.warning })}
                  </span>
                  <span className="text-xl font-medium text-orange-700">
                    {formatMessage(
                      { ...messages.warning_1 },
                      {
                        email: (
                          <a href="mailto:camp@ucssottawa.com">
                            camp@ucssottawa.com
                          </a>
                        ),
                      }
                    )}
                  </span>
                </div> */}
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
                  <div className="rounded-xl mt-5 text-blue-400"></div>
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

                  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center lg:mb-12">
                      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-400">
                        {formatMessage({ ...messages.registration })}
                      </h2>
                    </div>
                    <div className="mx-auto rounded-xl flex">
                      <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-justify">
                          <FormattedMessage
                            {...messages.registrationContent}
                            values={{
                              email: (
                                <a
                                  href="mailto:camp@ucssottawa.com"
                                  className="text-blue-300">
                                  camp@ucssottawa.com
                                </a>
                              ),
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-400">
                        {formatMessage({ ...messages.campDetails })}
                      </h2>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 rounded-xl">
                      <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold text-blue-400">
                          {formatMessage({ ...messages.when })}
                        </h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                          {formatMessage({ ...messages.whenContent })}
                        </p>
                      </div>
                      <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h2 className="mb-4 text-2xl font-semibold text-blue-400">
                          {formatMessage({ ...messages.where })}
                        </h2>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                          <FormattedMessage
                            {...messages.whereContent}
                            values={{
                              link: (
                                <a
                                  href="https://www.google.com/maps/place/21+Chem.+Newcombe,+Val-des-Monts,+QC+J8N+1A9/@45.7064719,-75.7814431,17z/data=!3m1!4b1!4m5!3m4!1s0x4cd1d935d065d57f:0x6508e46255959626!8m2!3d45.7064719!4d-75.7814431"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-indigo-500">
                                  St. John’s Ukrainian Camp
                                </a>
                              ),
                            }}
                          />
                        </p>
                      </div>
                      <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h2 className="mb-4 text-2xl font-semibold text-blue-400">
                          {formatMessage({ ...messages.cost })}
                        </h2>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                          {formatMessage({ ...messages.costContent })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-blue-400">
                      {formatMessage({ ...messages.programming })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.programmingContent })}
                    </p>
                    <span className="leading-relaxed mt-2">
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
                    </span>
                  </div>

                  {/* <div className="mt-3">
                    <h3 className="text-gray-500">
                      {formatMessage({ ...messages.finalDayAtCamp })}
                    </h3>
                    <p className="leading-relaxed mt-3">
                      {formatMessage({ ...messages.finalDayAtCampContent })}
                    </p>
                  </div> */}

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
