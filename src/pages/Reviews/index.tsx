import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { client } from "../../utils/Contentful";

import bazarMain from "../../assets/images/bazar-main.jpg";
import embassyMain from "../../assets/images/poland-embassy-1.jpg";
import localBenefit from "../../assets/images/local-concert.jpg";
import fundraiserMain from "../../assets/images/fundraized-event-1.jpg";
import groupPhoto from "../../assets/images/group-photo.jpeg";
import volunteers from "../../assets/images/volunteers.jpeg";
import backpack from "../../assets/images/backpack.jpeg";
import dragonboat from "../../assets/images/dragonboat.jpeg";
import vyshyvanka from "../../assets/images/vyshyvanka-logo.jpeg";
import previewToys from "../../assets/images/preview-toys.jpeg";
import madame from "../../assets/images/news-1.jpeg";
import mykolay from "../../assets/images/news-2.jpeg";
import vip from "../../assets/images/news-3.jpeg";
import hotties from "../../assets/images/hotties-1.jpeg";

import NewsCard from "../../components/NewsCard";
import Loading from "../../components/Loading";
import Drawer from "../../components/Drawer";
import DrawerContent from "../../components/DrawerContent";

import messages from "./messages";

function Reviews(props: any) {
  const { formatMessage } = props.intl;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [entries, setEntries] = useState<any>();
  const [entryId, setEntryId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const doFetchEntries = async () => {
    setLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "post",
        include: 10,
      });
      setEntries(response.items);
    } catch (error) {
      setError(true);
      console.error("Unexpected error while trying to fetch the Entries");
    }
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    doFetchEntries();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{formatMessage({ ...messages.metaTitle })}</title>
        <meta
          name="description"
          content="The Ukrainian Canadian Social Services Ottawa (UCSS Ottawa) is raising money to organize a summer camp for children who have been displaced by war in Ukraine. The goal of the camp is to provide a safe environment for children to play, learn and socialize with other children from Ottawa."
        />
        <meta
          name="keywords"
          content="donate camp, ukrainian charitable organization, ucss camp, ucss ottawa news"
        />
      </Helmet>
      <section className="text-gray-600 body-font font-montserrat">
        <div className="container lg:block py-20 mx-auto">
          <div className="flex justify-center mb-5">
            <h1>{formatMessage({ ...messages.title })}</h1>
          </div>

          {error && (
            <div className="container w-8/12 flex flex-col justify-center mx-auto bg-red-100 p-10 rounded-xl shadow-md my-5">
              <div>
                <p className="text-center">
                  Oops. There was an error while trying to get posts
                </p>
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-300 p-2 text-white font-bold rounded-xl w-2/12 mt-3"
                  onClick={() => doFetchEntries()}
                >
                  Refresh
                </button>
              </div>
            </div>
          )}

          {loading && <Loading />}

          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <DrawerContent
              onClose={() => {
                setIsOpen(false);
                setEntryId("");
              }}
              entryId={entryId}
              post={selectedPost}
            />
          </Drawer>

          {/* TEMP CARD */}
          {/* <div className="w-full lg:w-9/12 lg:h-96 md:h-auto flex md:flex-row flex-col justify-end mx-auto overflow-hidden shadow rounded-xl">
            <div className="md:w-6/12 w-full">
              <img
                className="transform lg:h-96 md:h-full w-full object-cover object-center scale-100 transition-all duration-700"
                src={embassyMain}
                alt="Ukrainian Easter Bazar at the St. John the Baptist Ukrainian Catholic Shrine"
              />
            </div>

            <div className="w-full">
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6">
                <div className="lg:h-full md:h-96 p-6 -mt-6 md:mt-0 mb-4 md:mb-0 flex flex-col items-center">
                  <div className="w-full lg:border-right lg:border-solid text-left md:text-center mb-4 sm:px-3">
                    <h3 className="mt-3">
                      "Thank You" from Ukrainian Community in Canada to the
                      people of Poland
                    </h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      {formatMessage({ ...messages.date_hotties })}
                    </p>
                  </div>

                  <div className="w-full lg:px-3 overflow-hidden mb-3 relative">
                    <p className="text-md lg:mt-0 text-justify md:text-left text-sm">
                      The Ottawa community celebrated the Festival of Carols and
                      Shchedrivkas this Christmas with great pomp and grandeur.
                      Various choirs and a children's group led by Mr. Oleksiy
                      Fischuk greeted guests in the packed hall of the Ukrainian
                      Orthodox Church.
                      <br /> However, it was the powerful performance by the
                      student choir of the University of Ottawa under the
                      direction of Maestro Laurentiy Ivashka that left the most
                      profound impression on everyone What made their efforts
                      truly remarkable was the fact that not a single performer
                      of these famous Ukrainian carols spoke the Ukrainian
                      language in their daily life. Rather, they were inspired
                      by the enchanting melodies of the music they performed,
                      and the audience was captivated by the sincere and genuine
                      tone of their flawless performance.
                      <br />
                    </p>
                    <div className="absolute -bottom-1.5 w-full h-16 bg-gradient-to-t from-white via-white to-transparent"></div>
                  </div>
                  <div className="w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <button
                      className="bg-white hover:text-gray-500 border border-solid border-grey w-1/3 lg:w-full py-2 rounded-xl"
                      onClick={() => setIsOpen(!isOpen)}>
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {entries &&
            entries.length &&
            !loading &&
            entries.map((iPost: any) => {
              return (
                <NewsCard
                  key={iPost.sys.id}
                  id={iPost.sys.id}
                  title={
                    iPost.fields[
                      `title${props.intl.locale
                        .slice(0, 2)
                        .toString()
                        .toUpperCase()}`
                    ]
                  }
                  image={iPost.fields.postImage?.fields}
                  content={
                    iPost.fields[
                      `content${props.intl.locale
                        .slice(0, 2)
                        .toString()
                        .toUpperCase()}`
                    ]
                  }
                  date={iPost.fields.date}
                  isLink={iPost.fields?.isPage}
                  reactPageLink={iPost.fields?.reactPageLink}
                  onOpen={(entryId) => {
                    setIsOpen(true);
                    setEntryId(entryId);
                    setSelectedPost(
                      entries.find((iEntry: any) => iEntry.sys.id === entryId)
                    );
                  }}
                />
              );
            })}

          <div className="flex flex-wrap -m-4 justify-center">
            {/* Hotties */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="transform lg:h-92 md:h-80 w-full object-cover object-center scale-100 transition-all duration-700 hover:scale-110"
                  src={hotties}
                  alt="Ukrainian Easter Bazar at the St. John the Baptist Ukrainian Catholic Shrine"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                    {formatMessage({ ...messages.date_hotties })}
                  </h2>
                  <h3 className="title-font text-lg font-bold text-gray-600 mb-3">
                    {formatMessage({ ...messages.hottiesTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.hottiesBody })}
                    <a
                      href="https://www.facebook.com/groups/3189837834631563/?multi_permalinks=3434297586852252&ref=share"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg mt-3">
                        {formatMessage({ ...messages.readMore })}
                      </button>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* VIP Учасники Української Суспільної Служби в Оттаві подарували відомому гурту  VIP Тернопіль фудболку нашого товариства розписану гаслами перемоги і побажаннями миру Україні. Принагідно усі фонди зібрані від донатів з концерту Украінськоі Школи Танців, у сумі 500$, було передано у фонд підтримки наших дорогих гостей. */}
            {/* <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="transform lg:h-72 md:h-48 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={vip}
                  alt="Ukrainian Easter Bazar at the St. John the Baptist Ukrainian Catholic Shrine"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                    {formatMessage({ ...messages.date_vip })}
                  </h2>
                  <h3 className="title-font text-lg font-bold text-gray-600 mb-3">
                    {formatMessage({ ...messages.vipTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.vipText })}
                  </p>
                  <a
                    href="https://www.facebook.com/maryna.popovych/posts/pfbid026qcuq6n8h71vkjRmKrdw3ZRvrom7LhPL4bab8Yo8bDtMT1duCfGhYAEQyhNzFhrYl"
                    target="_blank"
                    rel="noreferrer">
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </a>
                </div>
              </div>
            </div> */}
            {/* Mykolay */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="transform lg:h-72 md:h-48 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={mykolay}
                  alt="Ukrainian Easter Bazar at the St. John the Baptist Ukrainian Catholic Shrine"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                    {formatMessage({ ...messages.date_mykolay })}
                  </h2>
                  <h3 className="title-font text-lg font-bold text-gray-600 mb-3">
                    {formatMessage({ ...messages.mykolayTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.mykolayText })}
                  </p>
                  <a
                    href="https://www.facebook.com/maryna.popovych/posts/pfbid02xGbyDY5eFYaBjjsSNes4hzfHKLwhTW9q2aovusb7WZfkzwPFPSJyzr1qjEUYanFQl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* News */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="transform lg:h-72 md:h-48 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={madame}
                  alt="Ukrainian Easter Bazar at the St. John the Baptist Ukrainian Catholic Shrine"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                    {formatMessage({ ...messages.date_miracleWorker })}
                  </h2>
                  <h3 className="title-font text-lg font-bold text-gray-600 mb-3">
                    {formatMessage({ ...messages.miracleWorkerTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.miracleWorkerText })}
                  </p>
                </div>
              </div>
            </div>

            {/* REPORT */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-80 md:h-80 w-full object-cover object-center scale-100 transition-all duration-700 hover:scale-110"
                  src={previewToys}
                  alt="Children sitting in front of the fireplace"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                    {formatMessage({ ...messages.date_toysForKids })}
                  </h2>
                  <h3 className="title-font text-lg font-bold text-gray-600 mb-3">
                    {formatMessage({ ...messages.toysForKidsTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.toysForKidsText })}
                  </p>
                  <a
                    href="https://ottawa.ctvnews.ca/video?clipId=2585411"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Vushyvanka */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="transform lg:h-72 md:h-48 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={vyshyvanka}
                  alt="Ukrainian Easter Bazar at the St. John the Baptist Ukrainian Catholic Shrine"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                    {formatMessage({ ...messages.date_vyshyvanka })}
                  </h2>
                  <h3 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.vyshyvankaTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.vyshyvankaTextBlurb })}
                  </p>
                  <Link to="/news/vyshyvanka-vechir">
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-5/12 p-4">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-72 md:h-48 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={dragonboat}
                  alt="Members of UCSS and Lions Club"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
                    {formatMessage({ ...messages.date_dragonboat })}
                  </h2>
                  <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                    {formatMessage({ ...messages.dragonboatTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    <span className="mt-2">
                      {formatMessage({ ...messages.dragonboatText })}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-5/12 p-4">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={backpack}
                  alt="Members of UCSS and Lions Club"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_school })}
                  </h2>
                  <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                    {formatMessage({ ...messages.schoolTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    <span className="mt-2">
                      {formatMessage({ ...messages.schoolText })}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-5/12 p-4">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={volunteers}
                  alt="Members of UCSS and Lions Club"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_campThanks })}
                  </h2>
                  <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                    {formatMessage({ ...messages.campThanksTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    <span className="mt-2">
                      {formatMessage({ ...messages.campThanksText })}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Camp report */}
            <div className="md:w-5/12 p-4">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src="https://smartcdn.gprod.postmedia.digital/ottawacitizen/wp-content/uploads/2022/08/ukrainian-camp1_271763994-w.jpg?quality=90&strip=all&w=1128&h=846&type=webp"
                  alt="Members of UCSS and Lions Club"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_campReport })}
                  </h2>
                  <h3 className="title-font text-lg font-bold text-gray-600 mb-2">
                    {formatMessage({ ...messages.campReportTitle })}
                  </h3>
                  <p className="leading-relaxed mb-3">
                    <span className="italic font-medium leading-relaxed">
                      {formatMessage({ ...messages.campReportSubTitle })}
                    </span>
                    <p className="mt-2">
                      {formatMessage({ ...messages.campReportText })}
                    </p>
                  </p>
                  <a
                    href="https://ottawacitizen.com/news/local-news/an-unbelievable-experience-community-support-bolsters-outaouais-summer-camp-for-displaced-ukrainian-children?fbclid=IwAR261wEFwDaNGvZKRfSy8INfY5uS99JZMmBRFKBQq7BRMPCtoKCJzIbdCTU"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Bazar */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src={bazarMain}
                  alt="Ukrainian Easter Bazar at the St. John the Baptist Ukrainian Catholic Shrine"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_bazar })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.title_bazar })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.content_bazar })}
                  </p>
                </div>
              </div>
            </div>
            {/* Summer Camp */}
            {/* <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={oselyaPic}
                  alt="Summer camp for displaced Ukrainian children"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.upcomingEvents })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.summerCampTitle })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.summerCampContent })}
                  </p>
                  <Link to="/camp">
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </Link>
                </div>
              </div>
            </div> */}

            {/* Fundraiser event blog */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-100 transition-all duration-700"
                  src={fundraiserMain}
                  alt="Fundraizer event at Buzzing Carnaval"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_fundraizer })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.fundraizerTitle })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.fundraizerText })}
                  </p>
                  {/* <Link to="/camp">
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>

            {/* Lions club event */}
            <div className="p-4 md:w-5/12">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={groupPhoto}
                  alt="Fundraizer event at Buzzing Carnaval"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_lions })}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.lionsTitle })}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.lionsTextBlurb })}
                  </p>
                  <Link to="/news/continental-marathon">
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      {formatMessage({ ...messages.readMore })}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Local Benefit Concert  */}
            <div className="p-4 md:w-5/12">
              <div
                className="h-full rounded-xl cursor-pointer shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden"
                onClick={() =>
                  window.open(
                    "https://ottawa.ctvnews.ca/video?cid=sm%3Atrueanthem%3Actvottawa%3Atwitterpost&clipId=2437050&taid=62770f1241582d0001992ce5&utm_campaign=trueAnthem%3A%20Trending%20Content&utm_medium=trueAnthem&utm_source=twitter"
                  )
                }
              >
                <img
                  className="transform lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-700 hover:scale-100"
                  src={localBenefit}
                  alt="Local Benefit Concert to Support Ukraine"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {formatMessage({ ...messages.date_localConcert })}
                  </h2>
                  <h2 className="title-font text-lg font-medium text-gray-600 mb-3">
                    {formatMessage({ ...messages.localConcertTitle })}
                  </h2>
                  <p className="leading-relaxed mb-3">
                    {formatMessage({ ...messages.localConcertText })}
                  </p>

                  <div className="flex items-center w-full text-center mt-5">
                    <a
                      href="https://ottawa.ctvnews.ca/video?cid=sm%3Atrueanthem%3Actvottawa%3Atwitterpost&clipId=2437050&taid=62770f1241582d0001992ce5&utm_campaign=trueAnthem%3A%20Trending%20Content&utm_medium=trueAnthem&utm_source=twitter"
                      target="_blank"
                      className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
                      rel="noreferrer"
                    >
                      {formatMessage({ ...messages.readMore })}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default injectIntl(Reviews);
