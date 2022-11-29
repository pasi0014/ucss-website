import React, { useEffect } from "react";
import { injectIntl } from "react-intl";

import dragonboat from "../../assets/images/dragonboat.jpeg";
import militaryHospital from "../../assets/images/thank-you-2.jpeg";
import thankYou from "../../assets/images/thank-you-3.jpeg";

import messages from "./messages";

const Acknowledgments = (props: any) => {
  const { formatMessage } = props.intl;

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
          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <img
                className="transform lg:h-80 md:h-56 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                src={dragonboat}
                alt="Members of UCSS and children during dragonboat event"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Серпень 27, 2022
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  Прогулянка на dragonboat для дітей
                </h3>
                <p className="leading-relaxed mb-3">
                  <p className="mt-2">
                    Суспільна Служба Українсців Канади з колоборацією з{" "}
                    <a
                      href="https://www.rideaucanoeclub.ca/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-underline"
                    >
                      Rideau Canoe Club
                    </a>{" "}
                    організувала для дітей прогулянку на dragonboat
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Ливень 27, 2022
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  Подяка від військових
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
                  Квітень 29, 2022
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  Подяка від Одеського Військового госпіталю
                </h3>
                <p className="leading-relaxed mb-3">
                  <p className="mt-2">
                    ВИСЛОВЛЮЄМО НАЙЩИРІШУ ПОДЯКУ від усіх поранених бійців,
                    медиків та волонтерів одеського Військово Медичного
                    Клінічного Центру Південного Регіону (ВМКЦ ПР) - Отавському
                    Осередку Української Канадської Суспільної Служби, зокрема
                    голові Отавського осередку МАРИНІ ПОПОВИЧ за нещодавно
                    надіслані нам 9 коробів різних медичних витратників-
                    пристосувань для реанімації та оперблоку ,;тощо. Щодня ми
                    різне необхідне комплектуємо та передаємо не тільки нашому
                    шпиталю а й моб. шпиталям та підрозділам , діючим на різних
                    гарячих ділянках фронту . Поранених зустрічаємо.../
                    відвідуємо .../ психологічно працюємо.../випроваджуємо ...
                    Наразі "простими штуками" ми гарно забезпечені, а от цінні
                    замінники до VAC апаратів , оптика до лапароскопічного
                    приладу та інші "непрості штуки" ,:виявилися особливо
                    необхідними і дуууже порадували лікарів. ВЕЛИКЕ ВАМ СПАСИБІ
                    !! ДЯКУЄМО за ваші невтомні душі, серця , руки і значні
                    кошти, за ДІЄВУ ЛЮБОВ до нашої Батьківщини ! РАЗОМ - МИ
                    ПЕРЕМОЖЕМО І ВІДБУДУЄМО НАШУ УКРАЇНУ! РАЗОМ МИ - СИЛА!
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
                  Жовтень 18, 2022
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  Подяка від Українських військових
                </h3>
                <p className="leading-relaxed mb-3">
                  <p className="mt-2">
                    100 комплектів термобілизни для наших хлопців, що боронять
                    рідну неньку - DONE! Дякую Ukrainian Canadian Social
                    Services (UCSS) - Ottawa Branch за фінансування цієї
                    ініціативи! Хлопці, що першими міряли термо, не хотіли вже
                    її знімати, бо тепло і зроблено з любов'ю. Все буде Україна!
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
