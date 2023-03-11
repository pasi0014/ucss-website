import React, { useEffect } from "react";
import { injectIntl, FormattedMessage } from "react-intl";

import dragonboat from "../../assets/images/dragonboat.jpeg";
import militaryHospital from "../../assets/images/thank-you-2.jpeg";
import thankYou from "../../assets/images/thank-you-3.jpeg";
import thankYouBD from "../../assets/images/thank-you-bd.jpeg";
import turkey from "../../assets/images/turkey.jpeg";

import messages from "./messages";

const Acknowledgments = (props: any) => {
  const { formatMessage } = props.intl;
  const sanitizedValues = {
    br: <br />,
  };

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full h-full bg-blue-100 text-gray-600 font-montserrat">
      <div className="container sm:px-5 py-20 mx-auto">
        <div className="flex justify-center mb-5">
          <h1>{formatMessage({ ...messages.header })}</h1>
        </div>

        <div className="flex flex-wrap -m-4 justify-center">
          {/* Hotties */}
          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <img
                className="transform lg:h-80 md:h-56 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                src={turkey}
                alt="Turkey in a shopping cart"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                  {formatMessage({ ...messages.date_turkey })}
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  {formatMessage({ ...messages.turkeyTitle })}
                </h3>
                <div className="w-full mx-auto text-left mb-3 mt-3">
                  <span className="font-bold mt-3 font-italic"></span>
                  <p className="mt-2">
                    {formatMessage({ ...messages.turkeyText })}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Hotties */}
          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              {/* <img
                className="transform lg:h-80 md:h-56 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                src={thankYouBD}
                alt="Members of UCSS collecting backpacks provided by Bydychnist bank"
              /> */}
              <div className="p-6">
                February 7, 2023
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  Дяка за підтримку
                </h3>
                <div className="w-full mx-auto text-left mb-3 mt-3">
                  <span className="font-bold mt-3 font-italic">
                    Марина Попович
                  </span>
                  <p className="mt-2">
                    Дуже дякую всій моїй каманді і всім хто нас підтримує!!!! Ми
                    сила!!! Скільки зможемо стільки і будемо допомогати!!! Ми
                    незламні!!! Слава Україні!!!!
                  </p>
                  <a
                    href="https://www.facebook.com/100048307747259/videos/576476517676123/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 font-bold"
                  >
                    Побачити більше
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* Bydychnist */}
          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <img
                className="transform lg:h-80 md:h-56 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                src={thankYouBD}
                alt="Members of UCSS collecting backpacks provided by Bydychnist bank"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                  {formatMessage({ ...messages.date_bcu })}
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  {formatMessage({ ...messages.bcuTitle })}
                </h3>
                <div className="w-full mx-auto text-left mb-3 mt-3">
                  <p className="mt-2">
                    {formatMessage({ ...messages.bcuText })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <img
                className="transform lg:h-80 md:h-56 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                src={dragonboat}
                alt="Members of UCSS and children during dragonboat event"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                  {formatMessage({ ...messages.date_rideau })}
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  {formatMessage(
                    { ...messages.rideauTitle },
                    {
                      a: (str: string) => (
                        <a
                          href="https://www.rideaucanoeclub.ca/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-underline"
                        >
                          {str}
                        </a>
                      ),
                    }
                  )}
                </h3>
                <p className="leading-relaxed mb-3">
                  <p className="mt-2">
                    <FormattedMessage
                      {...messages.rideauText}
                      values={sanitizedValues}
                    />
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {formatMessage({ ...messages.date_militaryThank })}
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  {formatMessage({ ...messages.militaryThankTitle })}
                </h3>
                <div className="w-full mx-auto text-center mb-3 mt-3">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Folga.sadanenko%2Fvideos%2F2388828017921798%2F%3Fidorvanity%3D3189837834631563&show_text=false&width=267&t=0"
                    width="267"
                    height="476"
                    className="mx-auto"
                    style={{ border: "none", overflow: "hidden" }}
                    title="Thank you"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <img
                className="transform lg:h-80 md:h-56 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                src={militaryHospital}
                alt="Members of UCSS and Lions Club"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {formatMessage({ ...messages.date_hospital })}
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  {formatMessage({ ...messages.hospitalTitle })}
                </h3>
                <p className="leading-relaxed mb-3">
                  <p className="mt-2">
                    {formatMessage({ ...messages.hospitalText })}
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <img
                className="transform lg:h-80 md:h-56 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100 mb-2"
                src={thankYou}
                alt="Members of UCSS and Lions Club"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {formatMessage({ ...messages.date_thankyou })}
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  {formatMessage({ ...messages.thankyouTitle })}
                </h3>
                <p className="leading-relaxed mb-3">
                  <p className="mt-2">
                    {formatMessage({ ...messages.thankyouText })}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default injectIntl(Acknowledgments);
