import React, { useState } from "react";

interface CollapseProps {
  title: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="rounded-lg shadow-md">
      <div
        className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-lg cursor-pointer select-none"
        onClick={handleToggle}>
        <h2 className="font-semibold">{title}</h2>
        <svg
          className={`transition-transform transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          width="24"
          height="24">
          <path
            fillRule="evenodd"
            d="M6.29289 8.29289C6.65338 7.93241 7.22061 7.90468 7.6129 8.2097L7.70711 8.29289L10 10.585L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0676 8.65338 14.0953 9.22061 13.7903 9.6129L13.7071 9.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`transition-all duration-300 ${
          isExpanded ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}>
        <div className="p-4 bg-white rounded-b-lg">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
