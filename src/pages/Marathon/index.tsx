import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "react-intl";

import embassadors from "../../assets/images/embassadors.jpeg";
import lionsClub from "../../assets/images/lions-club.jpeg";
import lionsMarathon from "../../assets/images/lions-marathon.jpeg";
import warMemorial from "../../assets/images/war-memorial-2.jpeg";
import warMemorial1 from "../../assets/images/war-memorial-1.jpeg";
import ucss from "../../assets/images/ucss.jpeg";
import ukraineEmbassador from "../../assets/images/ukraine-embassador.jpeg";
import polandEmbassador from "../../assets/images/polish-embassador.jpeg";
import groupPhoto from "../../assets/images/group-photo.jpeg";

import messages from "./messages";

function Marathon(props: any) {
  const { formatMessage } = props.intl;

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>{formatMessage({ ...messages.heading })}</title>
        <meta
          name="description"
          content="The Ukrainian Canadian Social Services Ottawa (UCSS Ottawa) is raising money to organize a summer camp for children who have been displaced by war in Ukraine. The goal of the camp is to provide a safe environment for children to play, learn and socialize with other children from Ottawa."
        />
        <meta
          name="keywords"
          content="summer camp, camp, camp for ukrainian children, ucss camp"
        />
      </Helmet>
      <article className="container font-montserrat  py-12 mt-4 mb-4 bg-gray-100 rounded-xl shadow-lg w-full">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-6/12 w-full sm:mt-4 mt-0 mb-4">
            <h1 className="text-3xl text-relaxed w-full sm:w-10/12">
              {formatMessage({ ...messages.heading })}
            </h1>
            <small className="mt-3 font-medium leading-loose">
              {formatMessage({ ...messages.date })}
            </small>
            <p className="text-lg leading-relaxed mt-3 p-1 w-12/12 md:w-full lg:w-11/12">
              {formatMessage(
                { ...messages.article },
                {
                  value: (
                    <>
                      <br /> <br />
                    </>
                  ),
                }
              )}
            </p>
          </div>
          <div className="flex flex-col md:w-6/12 w-full text-center mx-auto">
            <img
              src={lionsMarathon}
              alt="test"
              className="sm:w-9/12 w-full mx-auto rounded-xl sm:shadow-lg shadow-md"
            />
          </div>
        </div>

        <div className="container flex flex-col mx-auto md:space-y-1 space-y-2 mt-5">
          <h3 className="text-center text-3xl mb-5">
            {formatMessage({...messages.morePicture})}
          </h3>
          <div className="flex md:flex-row flex-col w-full md:space-x-1 md:space-y-0 space-x-0 space-y-2">
            <div className="p-2 w-full rounded-lg">
              <img
                src={groupPhoto}
                alt="Event"
                className="mx-auto rounded-xl"
              />
            </div>
            <div className="p-2 w-full rounded-lg">
              <img
                src={embassadors}
                alt="test"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full md:space-x-1 md:space-y-0 space-x-0 space-y-2">
            <div className="p-2 w-full rounded-lg">
              <img
                src={ukraineEmbassador}
                alt="test"
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="p-2 w-full">
              <img
                src={polandEmbassador}
                alt="test"
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="p-2 w-full rounded-lg">
              <img
                src={lionsClub}
                alt="test"
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="p-2 w-full rounded-lg">
              <img
                src={warMemorial}
                alt="test"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full md:space-x-1 md:space-y-0 space-x-0 space-y-2">
            <div className="p-2 w-full rounded-lg">
              <img
                src={warMemorial1}
                alt="test"
                className="rounded-xl shadow-md mx-auto"
              />
            </div>
            <div className="p-2 w-full rounded-lg">
              <img
                src={ucss}
                alt="test"
                className="rounded-xl shadow-md mx-auto"
              />
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
}

export default injectIntl(Marathon);
