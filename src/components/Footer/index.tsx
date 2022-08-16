import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useIntl } from "react-intl";
import { Context } from "../Wrappper";
import messages from "./messages";

export default function Footer() {
  const context = useContext(Context);
  const { formatMessage } = useIntl();
  return (
    <>
      <footer className="font-montserrat bg-gray-700 pt-8 pb-6 text-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4 py-5">
              <h4 className="text-3xl font-semibold">
                {formatMessage({ ...messages.footerTitle })}
              </h4>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto mt-5">
                  <span className="block uppercase text-gray-100 text-lg font-semibold mb-2">
                    {formatMessage({ ...messages.contactInfo })}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <span className="text-gray-100 hover:text-gray-400 font-semibold block pb-2 text-sm">
                        <a
                          href="tel:6134134159"
                          className="hover:text-gray-100"
                        >
                          {formatMessage({ ...messages.maryna })} - 613-413-4159
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-100 hover:text-gray-400 font-semibold block pb-2 text-sm">
                        <a
                          href="tel:6137248206"
                          className="hover:text-gray-100"
                        >
                          {formatMessage({ ...messages.michael })} -
                          613-724-8206
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-100 hover:text-gray-400 font-semibold block pb-2 text-sm">
                        <a
                          href="tel:6135583893"
                          className="hover:text-gray-100"
                        >
                          {formatMessage({ ...messages.nazar })} - 613-558-3893
                        </a>
                      </span>
                    </li>
                    <li>
                      <NavLink to="/contact">
                        <button className="text-gray-100 hover:text-gray-400 font-semibold block pb-2 text-sm">
                          {formatMessage({ ...messages.contactUs })}
                        </button>
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
                Services Ottawa
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
