import React from "react";
import { useSearch } from "../../contexts/SearchContext";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { setSearchQuery } = useSearch();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex md:w-[350px] lg:w-[450px] items-center gap-2 w-full max-w-xl border border-gray-500 rounded-lg p-1 px-2">
      <div className="w-full relative">
        <input
          type="text"
          name="query"
          placeholder="Search..."
          onChange={handleChange}
          className="w-full px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 text-gray-900 "
        />
      </div>
      <div className="text-gray-900  p-2 rounded-lg">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
