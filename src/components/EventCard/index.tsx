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
