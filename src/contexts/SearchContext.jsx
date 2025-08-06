import { createContext, useContext, useState } from "react";

// Create context
const SearchContext = createContext();

// Provider
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook
export const useSearch = () => useContext(SearchContext);
