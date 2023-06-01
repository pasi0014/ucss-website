// Reference for the card --> https://codepen.io/steainsworth/full/PoJWXzr
// <!-- Container -->
// <div class="container mt-32 mx-auto p-4 md:p-0">

//   <!-- Card wrapper -->
//   <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">

//     <!-- Card image -->
//     <div class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative" style="background-image:url('https://images7.alphacoders.com/347/347549.jpg')">
//       <div class="absolute text-xl">
//         <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
//       </div>
//     </div>
//     <!-- ./Card image -->

//     <!-- Card body -->
//     <div class="bg-white w-full md:w-2/3">
//       <!-- Card body - outer wrapper -->
//       <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
//         <!-- Card body - inner wrapper -->
//         <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
//           <!-- Card title and subtitle -->
//           <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
//             <h3>Saint Basil's Cathedral</h3>
//             <p class="mb-0 mt-3 text-grey-dark text-sm italic">Moscow - Russia</p>
//             <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden">
//           </div>
//           <!-- ./Card title and subtitle -->

//           <!-- Card description -->
//           <div class="w-full lg:w-3/5 lg:px-3">
//             <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
//             The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, Sobor Vasiliya Blazhennogo), commonly known as Saint Basil's Cathedral, is a church in Red Square in Moscow, Russia. The building, now a museum, is officially known as the Cathedral of the Intercession of the Most Holy Theotokos on the Moat (Russian: Собор Покрова Пресвятой Богородицы, что на Рву, Sobor Pokrova Presvyatoy Bogoroditsy, chto na Rvu) or Pokrovsky Cathedral (Russian: Покровский собор).[5] It was built from 1555–1561 on orders from Ivan the Terrible and commemorates the capture of Kazan and Astrakhan.
//             </p>
//           </div>
//           <!-- ./Card description -->

//           <!-- Call to action button -->
//           <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
//             <button class="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">Visit now</button>
//           </div>
//           <!-- ./Call to action button -->
//         </div>
//         <!-- ./Card body - inner wrapper -->
//       </div>
//       <!-- ./Card body - outer wrapper -->
//     </div>
//     <!-- ./Card body -->
//   </div>
//   <!-- ./Card wrapper -->
// </div>
// <!-- ./Container -->

/* TODO make it as a drawer witht he full article in the format below */

/*            <div className="bg-white w-full md:w-2/3">
                <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                  <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-col items-center">
                    <div className="w-full lg:border-right lg:border-solid text-center md:text-left">
                      <h3>
                        "Thank You" from Ukrainian Community in Canada to the
                        people of Poland
                      </h3>
                      <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                        {formatMessage({ ...messages.date_hotties })}
                      </p>
                    </div>

                    <div className="w-full lg:w-3/5 lg:px-3">
                      <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                        The Ottawa community celebrated the Festival of Carols
                        and Shchedrivkas this Christmas with great pomp and
                        grandeur. Various choirs and a children's group led by
                        Mr. Oleksiy Fischuk greeted guests in the packed hall of
                        the Ukrainian Orthodox Church.
                        <br />
                        <br /> However, it was the powerful performance by the
                        student choir of the University of Ottawa under the
                        direction of Maestro Laurentiy Ivashka that left the
                        most profound impression on everyone What made their
                        efforts truly remarkable was the fact that not a single
                        performer of these famous Ukrainian carols spoke the
                        Ukrainian language in their daily life. Rather, they
                        were inspired by the enchanting melodies of the music
                        they performed, and the audience was captivated by the
                        sincere and genuine tone of their flawless performance.
                        <br />
                        <br /> The volunteers of the Ukrainian Social Services
                        in our city treated guests to incredibly delicious
                        treats, making the festival an even more memorable
                        experience. Grateful thanks were extended to everyone
                        who contributed to the organization and execution of
                        this highly anticipated carol festival, especially to
                        the esteemed Ms. Jane Colby. Our culture is rich and
                        vibrant, and we are delighted to enrich the community in
                        which we live with it.
                        <br /> <br /> We are also thankful to Rogers TV, who
                        broadcasted the entire event on channel 22, allowing
                        even more people to enjoy this wonderful celebration of
                        music and culture.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                      <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                        Visit now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedDate, IntlShape, injectIntl } from 'react-intl';

import slugify from 'slugify';

import RichTextContent from '../RichText';
import messages from './messages';

export interface INewsCardProps {
  id: string;
  title: string;
  date: Date;
  image: any;
  content: Object;
  intl: IntlShape;
  isLink: boolean;
  reactPageLink: string;
  onOpen: (args: string) => void;
}

function NewsCard({ id, title, date, image, content, intl, isLink, reactPageLink, onOpen }: INewsCardProps) {
  const [slug, setSlug] = useState('');
  const { formatMessage } = intl;
  useEffect(() => {
    if (title) setSlug(slugify(title.toLowerCase()));
  }, [title]);

  return (
    <div className="w-full lg:w-9/12 lg:h-96 md:h-auto flex md:flex-row flex-col justify-end mx-auto overflow-hidden shadow rounded-xl my-5">
      <div className="md:w-6/12 w-full">
        {image && (
          <img
            className="transform lg:h-96 md:h-full w-full object-cover object-center scale-100 transition-all duration-700"
            src={`https:${image.file.url}`}
            alt={image.title}
          />
        )}
      </div>
      <div className="w-full">
        <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6">
          <div className="lg:h-full md:h-96 p-6 -mt-6 md:mt-0 mb-4 md:mb-0 flex flex-col items-center">
            <div className="w-full lg:border-right lg:border-solid text-left md:text-center mb-4 px-3">
              <h3 className="mt-3 sm:text-2xl text-xl">{title}</h3>
              <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                <FormattedDate value={date} year="numeric" month="long" day="numeric" />
              </p>
            </div>
            {/* Content */}
            <div className="w-full lg:px-3 overflow-hidden mb-0 relative">
              <div className="text-md lg:mt-0 text-justify md:text-left text-sm">
                <RichTextContent content={content} />
              </div>
              <div className="absolute -bottom-1.5 w-full h-16 bg-gradient-to-t from-white via-white to-transparent"></div>
            </div>
            <div className="w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
              <button className="bg-white hover:text-gray-500 border border-solid border-grey w-1/3 lg:w-full py-2 rounded-xl" onClick={() => onOpen(id)}>
                {formatMessage({ ...messages.readMore })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(NewsCard);
