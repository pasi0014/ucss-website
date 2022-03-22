import React, { useEffect, useContext } from "react";
import { useIntl } from "react-intl";
import { Context } from "../../components/Wrappper/index";
import { Link } from "react-router-dom";

import messages from "./messages";

const Home = () => {
  const context = useContext(Context);
  const { formatMessage } = useIntl();

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto">
      <div className="lg:flex lg:mx-auto w-full lg:w-10/12 mb-4 mt-4 justify-center lg:space-x-3 p-3">
        <div className="flex flex-col lg:w-10/12 sm:w-12/12 bg-gray-200 rounded-lg shadow-md p-5">
          {/* <div className="lg:w-full bg-gray-200 rounded-lg shadow-sm mx-auto my-3 p-16"> */}
          <Link to="/donate">
            <h2 className="w-full mx-auto mt-4 p-1 sm:text-3xl text-center rounded-lg text-2xl font-medium title-fontbg-clip-text bg-gradient-to-r from-blue-400 via-yellow-200 to-yellow-400 text-white-800 mb-4 cursor-pointer">
              #StandWithUkraine
            </h2>
          </Link>
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
        {/* </div> */}
      </div>
    </main>
  );
};

export default Home;
