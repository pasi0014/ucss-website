// import { useState } from "react";
// import Anime from "react-anime";
// import { IntlShape, injectIntl } from "react-intl";

// import { BLOCKS, INLINES } from "@contentful/rich-text-types";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// interface IEventCard {
//   asset: any;
//   intl: IntlShape;
// }

// function EventCard({
//   title,
//   date,
//   image,
//   content,
//   intl,
//   isLink,
//   reactPageLink,
// }: any) {
//   const [error, setError] = useState(false);

//   const { formatMessage } = intl;

//   const options = {
//     renderNode: {
//       [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
//         const { title, description, file } = node.data.target.fields;
//         const mimeType = file.contentType;
//         const src = `https:${file.url}`;
//         const alt = title || description;

//         return <img src={src} alt={alt} />;
//       },
//       [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
//         <p className="my-4">{children}</p>
//       ),
//       [INLINES.HYPERLINK]: (node: any, children: any) => (
//         <a href={node.data.uri} target="_blank" rel="noreferrer">
//           {children}
//         </a>
//       ),
//     },
//   };

//   return (
//     <div className="p-4 md:w-5/12">
//       <Anime
//         translateY={[100, 0]}
//         easing={"easeOutSine"}
//         opacity={[0, 1]}
//         duration={1000}>
//         <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
//           {image && (
//             <img
//               className="transform lg:h-92 md:h-80 w-full object-cover object-center scale-100 transition-all duration-700 hover:scale-110"
//               src={`https:${image.file.url}`}
//               alt={image.title}
//             />
//           )}

//           <div className="p-6">
//             <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2 mt-2">
//               {date}
//             </h2>
//             <h1 className="title-font text-lg font-bold text-gray-600 mb-3">
//               {title}
//             </h1>

//             <p className="leading-relaxed mb-3">
//               {documentToReactComponents(content)}
//               {/* <RichTextContent content={content} /> */}
//               {/* {pageLink && pageLink.length && (
//                 <Link to={pageLink}>
//                   <button className="w-full my-3 bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
//                     {formatMessage({ ...messages.readMore })}
//                   </button>
//                 </Link>
//               )} */}
//               {isLink && (
//                 <a
//                   href="https://www.facebook.com/groups/3189837834631563/?multi_permalinks=3434297586852252&ref=share"
//                   target="_blank"
//                   rel="noreferrer">
//                   <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium px-4 py-1 rounded-lg mt-3">
//                     {/* {formatMessage({ ...messages.readMore })} */}
//                   </button>
//                 </a>
//               )}
//             </p>
//           </div>
//         </div>
//       </Anime>
//     </div>
//   );
// }

// export default injectIntl(EventCard);

import React, { useState } from "react";
import classNames from "classnames";

const Card = ({ imageSrc, title, date, content }: any) => {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  const cardClasses = classNames(
    "bg-white rounded-lg shadow-md overflow-hidden",
    { "h-full": showContent }
  );

  const imageClasses = classNames("h-48 w-full object-cover", {
    "opacity-50": showContent,
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-450">
      <div className="flex">
        <img src={imageSrc} alt={title} className="h-48 w-64 object-cover" />
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-500">{date}</p>
          </div>
          <div className="mt-6 relative">
            <p className="text-gray-700">{content}</p>
            <div className="absolute inset-0 bg-gray-500 opacity-0 pointer-events-none transition-opacity duration-500 z-10 after:h-full after:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
