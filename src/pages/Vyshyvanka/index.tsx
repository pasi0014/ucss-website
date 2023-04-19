import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "react-intl";

import vyshyvanka1 from "../../assets/images/vyshyvanka-1.jpeg";
import vyshyvanka2 from "../../assets/images/vyshyvanka-2.jpeg";
import vyshyvanka3 from "../../assets/images/vyshyvanka-3.jpeg";
import vyshyvanka4 from "../../assets/images/vyshyvanka-4.jpeg";
import vyshyvanka5 from "../../assets/images/vyshyvanka-5.jpeg";
import svitanok1 from "../../assets/images/svitanok-1.jpeg";

import messages from "./messages";

// import messages from "./messages";
function Vyshyvanka(props: any) {
  const { formatMessage } = props.intl;
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
          <div className="flex flex-col w-full sm:mt-4 mt-0 mb-4">
            <h1 className="text-3xl text-relaxed w-full sm:w-10/12">
              {formatMessage({ ...messages.heading })}
            </h1>
            <small className="mt-3 font-medium leading-loose">
              {formatMessage({ ...messages.date })}
            </small>
            <div className="flex flex-col md:w-6/12 w-full text-center mx-auto">
              <img
                src={vyshyvanka5}
                alt="test"
                className="w-full mx-auto rounded-xl sm:shadow-lg shadow-md"
              />
            </div>

            <p className="text-lg leading-relaxed mt-3 p-1 w-12/12 md:w-full lg:w-11/12">
              {formatMessage({ ...messages.text })}
            </p>
          </div>
        </div>

        <div className="container flex flex-col mx-auto md:space-y-1 space-y-2 mt-5">
          <h3 className="text-center text-3xl mb-5">
            {formatMessage({ ...messages.morePicture })}
          </h3>
          <div className="flex md:flex-row flex-col w-full md:space-x-1 md:space-y-0 space-x-0 space-y-2">
            <div className="p-2 w-full rounded-lg">
              <img
                src={vyshyvanka1}
                alt="Event"
                className="mx-auto rounded-xl"
              />
            </div>
            <div className="p-2 w-full rounded-lg">
              <img
                src={vyshyvanka2}
                alt="test"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full md:space-x-1 md:space-y-0 space-x-0 space-y-2">
            <div className="p-2 w-full rounded-lg">
              <img
                src={vyshyvanka3}
                alt="test"
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="p-2 w-full">
              <img
                src={vyshyvanka4}
                alt="test"
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="p-2 w-full rounded-lg">
              <img
                src={svitanok1}
                alt="test"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex">
          <a
            href="https://photos.google.com/share/AF1QipNyK03W2Gq9uydweDGmnmBlTpay2JFhzAzUjlBfBdEwqeKbl4FkYAHyYKcHxThjxw?key=dE5MRE5rWHN1ODZySTBJNjM4aUFSWE9SS2VBTDln"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white p-3 rounded-xl mx-auto mt-5 transition-all duration-200 ease-in-out hover:bg-blue-400 text-decoration-none"
          >
            {formatMessage({ ...messages.loadPictures })}
          </a>
        </div>
      </article>
    </Fragment>
  );
}

export default injectIntl(Vyshyvanka);
