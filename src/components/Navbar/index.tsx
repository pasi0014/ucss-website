import React, { ReactNode, useContext } from "react";
import { useIntl } from "react-intl";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Context } from "../Wrappper";
import { LOCALES } from "../../i18n/locales";

import logo from "../../assets/images/logo.png";
import NavbarLinks from "../../NavbarLinks";
import CustomLink from "../CustomLink";

import "../../index.css";

interface NavbarProps {
  animateNavbar: boolean;
}
const Navbar = (props: NavbarProps) => {
  const context = useContext(Context);
  const { formatMessage } = useIntl();
  const activeLink: any = NavbarLinks.GetNavigationLinks();

  const navBarChunk = (
    <Disclosure as="nav" className="font-montserrat bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
            <div className="flex items-center md:justify-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <NavLink to="/">
                    <img className="h-8 w-8" src={logo} alt="UcssLogo" />
                  </NavLink>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 navLinks">
                    {activeLink.map((item: any, index: number) => (
                      <Fragment key={formatMessage({ ...item.title })}>
                        <CustomLink to={item.link}>
                          <button
                            key={index}
                            className="btn text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
                            {formatMessage({ ...item.title })}
                          </button>
                        </CustomLink>
                      </Fragment>
                    ))}
                    <select
                      value={context.locale}
                      onChange={context.selectLanguage}
                      className="text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      <option value={LOCALES.ENGLISH}>English</option>
                      <option value={LOCALES.UKRAINIAN}>Українська</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Transition
                      show={true}
                      enter="transform transition ease-in-out duration-800"
                      enterFrom="opacity-0 rotate-0"
                      enterTo="opacity-100 rotate-180"
                      leave="transform transition ease-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    </Transition>
                  ) : (
                    <Transition
                      show={true}
                      enter="transform transition ease-in duration-400"
                      enterFrom="opacity-0 rotate-0"
                      enterTo="opacity-100 -rotate-180"
                      leave="transform transition ease-out duration-400"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-80">
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    </Transition>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            enter="transform translate transition duration-900 linear"
            enterFrom="opacity-0 -translate-y-24 scale-50"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transform translate transition duration-400 ease"
            leaveFrom="opacity-100 translate-y-0 scale-100 "
            leaveTo="opacity-0 -translate-y-24 scale-50 ">
            <Disclosure.Panel static className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 navLinks">
                {activeLink.map((item: any) => (
                  <Fragment key={formatMessage({ ...item.title })}>
                    <CustomLink to={item.link}>
                      <span
                        key={formatMessage({ ...item.title })}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:no-underline">
                        {formatMessage({ ...item.title })}
                      </span>
                    </CustomLink>
                  </Fragment>
                ))}
                <select
                  value={context.locale}
                  onChange={context.selectLanguage}
                  className="text-gray-300 w-full bg-gray-700 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <option value={LOCALES.ENGLISH}>English</option>
                  <option value={LOCALES.UKRAINIAN}>Українська</option>
                </select>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );

  return navBarChunk;
};
export default Navbar;
