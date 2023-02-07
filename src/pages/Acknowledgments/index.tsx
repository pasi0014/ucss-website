import React, { useEffect } from "react";
import { injectIntl } from "react-intl";

import dragonboat from "../../assets/images/dragonboat.jpeg";
import militaryHospital from "../../assets/images/thank-you-2.jpeg";
import thankYou from "../../assets/images/thank-you-3.jpeg";
import thankYouBD from "../../assets/images/thank-you-bd.jpeg";
import turkey from "../../assets/images/turkey.jpeg";

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
          {/* Hotties */}
          <div className="md:w-5/12 p-4">
            <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <img
                className="transform lg:h-80 md:h-56 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                src={turkey}
                alt="Turkey in a shopping cart"
              />
              <div className="p-6">
                February 7, 2023
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  Сергей Добровольский
                </h3>
                <div className="w-full mx-auto text-left mb-3 mt-3">
                  <span className="font-bold mt-3 font-italic"></span>
                  <p className="mt-2">
                    Дякуємо вашій організації та особисто Марині Попович за
                    святковий настрій !!!! 3 сім’ї з України на святковому столі
                    отримали смачну запечену індичку!!!)))) Смакували не тільки
                    діти а й гості!!!
                  </p>
                  {/* <a
                    href="https://www.facebook.com/100048307747259/videos/576476517676123/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 font-bold"
                  >
                    Побачити більше
                  </a>{" "} */}
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
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Ливень 27, 2022
                </h2> */}
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  Подяка банку Будучність за підтримку табору "Соняшник"
                </h3>
                <div className="w-full mx-auto text-left mb-3 mt-3">
                  <p className="mt-2">
                    Суспільна Служба виявляє величезне вдячність банку{" "}
                    <a
                      href="https://bcufinancial.com/uk/home-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      "Будучність"
                    </a>{" "}
                    за надані рюкзаки, які ми мали нагоду подарувати прекрасним
                    дітям у таборі Соняшник.
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
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Серпень 27, 2022
                </h2>
                <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                  Sincere thank you to{" "}
                  <a
                    href="https://www.rideaucanoeclub.ca/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-underline"
                  >
                    Rideau Canoe Club
                  </a>
                </h3>
                <p className="leading-relaxed mb-3">
                  <p className="mt-2">
                    Ukrainian Canadian Social Services, Ottawa branch are
                    enormously thankful for your most generous contribution to
                    the displaced children's summer camp "Soniashnyk".
                    <br />
                    <br />
                    We highly value your humanitarian support that able us ti
                    provide recreational activities for the childre effected by
                    this unjustifiable, destructive, genocidal war of russian
                    tyranny against the people of Ukraine.
                    <br />
                    <br />
                    You have offered to those children an unforgettable Canadian
                    summer experience, helping them to recover from stress of
                    relocation and uncertainty.
                    <br />
                    <br />
                    We sincerely thank you, each and every member of your Club,
                    for genuine care, and love making a difference in the
                    innocent life of a child.
                    <br />
                    <br />
                    Despite of the variety of offered activities most of our
                    children admitted that the canoe experience was favoured and
                    loved immensely. Please, accept our kindliest appreciation,
                    <br />
                    <br />
                    Cordially,
                    <br />
                    <br />
                    Maryna Popovych, Mike Ryndzak, Nazar Pasika, on behalf of
                    UCSS Ottawa
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
