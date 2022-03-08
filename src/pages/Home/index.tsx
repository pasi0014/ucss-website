import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  });

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
        </div>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Home;
