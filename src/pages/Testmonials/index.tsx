import React, { useEffect } from "react";
import { injectIntl, FormattedMessage } from "react-intl";

import dragonboat from "../../assets/images/dragonboat.jpeg";
import militaryHospital from "../../assets/images/thank-you-2.jpeg";
import thankYou from "../../assets/images/thank-you-3.jpeg";
import thankYouBD from "../../assets/images/thank-you-bd.jpeg";
import turkey from "../../assets/images/turkey.jpeg";

import messages from "./messages";
import { Helmet } from "react-helmet";

const Testimonials = (props: any) => {
  const { formatMessage } = props.intl;
  const sanitizedValues = {
    br: <br />,
  };

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Testimonials - Ukrainian Canadian Social Services</title>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0"
          nonce="3gk0Bi40"></script>
      </Helmet>
      <section className="w-full h-full bg-blue-100 text-gray-600 font-montserrat">
        <div className="py-20 mx-auto">
          <div className="flex justify-center mb-5">
            <h1>{formatMessage({ ...messages.header })}</h1>
          </div>

          <div className="flex flex-wrap -m-4 justify-center">
            {/* 1 */}
            <div className="md:w-5/12 p-4">
              <div className="flex justify-center h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <div
                  className="fb-post"
                  data-href="https://www.facebook.com/viktoriavarvinskaa/posts/pfbid02kTA24E4GrFHbb24UWWa7QDrWQ1D2mkSzNSb47y8qk4NQyjHiABp8Z3EyNaUDQnWsl"
                  data-show-text="true">
                  <blockquote
                    cite="https://www.facebook.com/viktoriavarvinskaa/posts/720718652881720"
                    className="fb-xfbml-parse-ignore">
                    <p>
                      І ЗНОВУ ПОДЯКА Maryna Popovych та всім хто допомогає нашим
                      ЗСУ💪🇺🇦💋 Дякую за грілки(дуже багато) Дякую за мякі
                      іграшки, Дякую за термокружки Дякую за гіг.помади 💙💛
                      💙💛💙💛💛💙💙💛💛💙💙💛💛💙💙
                    </p>
                    Posted by{" "}
                    <a href="https://www.facebook.com/viktoriavarvinskaa">
                      Виктория Варвинская
                    </a>{" "}
                    on&nbsp;
                    <a href="https://www.facebook.com/viktoriavarvinskaa/posts/720718652881720">
                      Monday, March 13, 2023
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="md:w-5/12 p-4">
              <div className="flex justify-center h-auto rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <div
                  className="fb-post"
                  data-href="https://www.facebook.com/viktoriavarvinskaa/posts/pfbid0JUbyjePTReQgNie8fZsYoiBjfGGdQVA9vfeVyx4yDkVNwNLnuRvECzPLybQm2sAul"
                  data-show-text="true">
                  <blockquote
                    cite="https://www.facebook.com/viktoriavarvinskaa/posts/715413763412209"
                    className="fb-xfbml-parse-ignore">
                    <p>
                      Фотозвіт по берцам,43р. Нарешті наш Герой зміг забрати!!!
                      Подяка ВАМ ,друзі ,за взуття!! А також подяка за грілки
                      Maryna Popovych та всій її команді!!!🙏🙏🙏🙏🇺🇦
                    </p>
                    Posted by{" "}
                    <a href="https://www.facebook.com/viktoriavarvinskaa">
                      Виктория Варвинская
                    </a>{" "}
                    on&nbsp;
                    <a href="https://www.facebook.com/viktoriavarvinskaa/posts/715413763412209">
                      Friday, March 3, 2023
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="md:w-5/12 p-4">
              <div className="flex justify-center h-auto rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <div
                  className="fb-post"
                  data-href="https://www.facebook.com/745041384/videos/744868523502528/"
                  data-show-text="true">
                  <blockquote
                    cite="https://www.facebook.com/maryna.popovych/posts/10160709934261385"
                    className="fb-xfbml-parse-ignore">
                    <p>
                      Військовий волонтер з Одеси ІГОР ЗЮБІН ! Дякуємо тобі і
                      Лілечки за ваш такий труд!!!! Хай ангели завжди будуть
                      поруч з вами!!!! Слава Україні!!!! Дякую всім моїм друзям
                      і знайомим,хто долучився до збірки!!!!
                    </p>
                    Posted by{" "}
                    <a href="https://www.facebook.com/maryna.popovych">
                      Maryna Popovych
                    </a>{" "}
                    on&nbsp;
                    <a href="https://www.facebook.com/maryna.popovych/posts/10160709934261385">
                      Friday, February 3, 2023
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="md:w-5/12 p-4">
              <div className="flex justify-center h-auto rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden"></div>
              <div
                className="fb-post"
                data-href="https://www.facebook.com/viktoriavarvinskaa/posts/pfbid02YTvZgomu1f9ukGyZTwLoo7x9HoTYLVn8HeHksa2RCw7mjf8X5Z7GDaRDxEgSNgTMl"
                data-width="590"
                data-show-text="true">
                <blockquote
                  cite="https://www.facebook.com/viktoriavarvinskaa/posts/702134521406800"
                  className="fb-xfbml-parse-ignore">
                  <p>
                    Фотозвіт ще від однієї 103 бригади,)🤝🇺🇦👍 Оля Давиденко
                    Гриненко подяка Вам за мівіну, Тетяна Васильків подяка вам(
                    за...
                  </p>
                  Posted by{" "}
                  <a href="https://www.facebook.com/viktoriavarvinskaa">
                    Виктория Варвинская
                  </a>{" "}
                  on&nbsp;
                  <a href="https://www.facebook.com/viktoriavarvinskaa/posts/702134521406800">
                    Thursday, February 9, 2023
                  </a>
                </blockquote>
              </div>
            </div>

            {/* Hotties */}
            <div className="md:w-5/12 p-4">
              <div className="h-auto rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-80 md:h-56 w-full object-cover object-center transition-all duration-700 hover:scale-100"
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
              <div className="h-auto rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
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
                      Дуже дякую всій моїй каманді і всім хто нас підтримує!!!!
                      Ми сила!!! Скільки зможемо стільки і будемо допомогати!!!
                      Ми незламні!!! Слава Україні!!!!
                    </p>
                    <a
                      href="https://www.facebook.com/100048307747259/videos/576476517676123/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 font-bold">
                      Побачити більше
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>

            {/* Bydychnist */}
            <div className="md:w-5/12 p-4">
              <div className="h-auto rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
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
              <div className="h-auto rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
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
                            className="text-underline">
                            {str}
                          </a>
                        ),
                      }
                    )}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    <span className="mt-2">
                      <FormattedMessage
                        {...messages.rideauText}
                        values={sanitizedValues}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-5/12 p-4">
              <div className="h-auto rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
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
                  className="transform lg:h-80 md:h-56 w-full object-cover object-center transition-all duration-700"
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
                    <span className="mt-2">
                      {formatMessage({ ...messages.hospitalText })}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-5/12 p-4">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform h-96 w-full object-cover object-top scale-110 transition-all duration-700 hover:scale-100 mb-2"
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
                    <span className="mt-2">
                      {formatMessage({ ...messages.thankyouText })}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default injectIntl(Testimonials);
