import React, { useState } from "react";

interface FilterProps {
  onFilter?: (filters: Filters) => void;
}

interface Filters {
  datePosted: string;
  articleSort: "ASC" | "DESC";
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [datePosted, setDatePosted] = useState("");
  const [articleSort, setArticleSort] = useState<"ASC" | "DESC">("ASC");

  const handleDatePostedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDatePosted(event.target.value);
  };

  const handleArticleSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setArticleSort(event.target.value as "ASC" | "DESC");
  };

  const handleFilter = () => {
    // onFilter({
    //   datePosted,
    //   articleSort,
    // });
    console.log("handle filter");
  };

  return (
    <div className="w-full h-full bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <label htmlFor="datePosted" className="mr-4 font-semibold">
          Date Posted:
        </label>
        <input
          id="datePosted"
          type="date"
          value={datePosted}
          onChange={handleDatePostedChange}
          className="px-2 py-1 border rounded-lg"
        />
      </div>
      <div className="flex items-center mb-4">
        <label htmlFor="articleSort" className="mr-4 font-semibold">
          Article Sort:
        </label>
        <select
          id="articleSort"
          value={articleSort}
          onChange={handleArticleSortChange}
          className="px-2 py-1 border rounded-lg">
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
      <button
        onClick={handleFilter}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
        Filter
      </button>
    </div>
  );
};

export default Filter;
