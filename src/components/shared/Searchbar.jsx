import React from "react";
import { useSearch } from "../../contexts/SearchContext";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const { setSearchQuery } = useSearch();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex lg:w-[400px] items-center gap-2 w-full max-w-xl border border-secondary-content/15 bg-secondary-content/15 rounded-lg p-1 px-2">
      <div className="w-full relative">
        <input
          type="text"
          name="query"
          placeholder="Search..."
          onChange={handleChange}
          className="w-full px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/60 text-white bg-transparent"
        />
      </div>
      <div className="bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60  p-2 rounded-lg">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
