import React, { useRef } from "react";

import logo from "../../../assets/images/logo.png";

import { IconType } from "react-icons";
import { HiOutlineHome } from "react-icons/hi";
import { FaDonate, FaUsers, FaIdCard, FaChartBar } from "react-icons/fa";
import { FiHome, FiCalendar } from "react-icons/fi";

import { Link } from "react-router-dom";

import { injectIntl } from "react-intl";

interface LinkItemProps {
  name: string;
  icon: IconType;
  url?: String;
}
// TODO: find out how to render the Navitems
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, url: "/dashboard" },
  { name: "Statistics", icon: FaChartBar, url: "/login" },
  { name: "Donors", icon: FaUsers, url: "/donors" },
  { name: "Donations", icon: FaDonate, url: "/donations" },
  { name: "Events", icon: FiCalendar, url: "/events" },
  { name: "Reservations", icon: FaIdCard, url: "/reservations" },
];

const NavItem = ({ icon, url, children, name }: any) => {
  return (
    <li>
      <Link
        to={url}
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          {icon && icon}
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">{name}</span>
      </Link>
    </li>
  );
};

const SideBar = ({ children }: any) => {
  return (
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
      <aside className="sidebar w-1/6 -translate-x-full transform bg-white transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
        <div className="flex items-center justify-center h-14 border-b">
          <div className="flex items-center">
            <img src={logo} className="w-8 h-8 mr-2" />
            <span>CRM</span>
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <HiOutlineHome className="w-5 h-5" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <Link
                to=""
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaIdCard className="w-5 h-5" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Reservations
                </span>
                {/* TODO: could we display count of new donors potentially? - NP */}
                {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                  15
                </span> */}
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Donors
                </span>
                {/* TODO: could we display new donors potentially? - NP */}
                {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                  15
                </span> */}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Profile
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
        <span className="absolute bottom-8 w-full flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          <span
            className="ml-2 text-sm tracking-wide truncate text-center flex flex-row items-center cursor-pointer"
            onClick={() => console.log("UserProfile")}
          >
            User Pofile
          </span>
        </span>
      </aside>
      <main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
        {children}
      </main>
    </div>
  );
};

export default injectIntl(SideBar);
