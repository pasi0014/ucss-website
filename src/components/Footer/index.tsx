import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-700 pt-8 pb-6 text-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Ukrainian Canadian Social Servises Ottawa
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-100">
                Developed by Nazar Pasika
              </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto sm:mt-5">
                  <span className="block uppercase text-gray-100 text-lg font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <NavLink to="/about">
                        <span className="text-gray-100 hover:text-gray-400 font-semibold block pb-2 text-sm">
                          About
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <a
                        className="text-gray-100 hover:text-gray-400 font-semibold block pb-2 text-sm"
                        href="https://github.com/pasi0014/Track-your-bus"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <NavLink to="/contact">
                        <span className="text-gray-100 hover:text-gray-400 font-semibold block pb-2 text-sm">
                          Contact Us
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 font-semibold py-1">
                &copy; {new Date().getFullYear()} Ukrainian Canadian Social
                Servises Ottawa
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}