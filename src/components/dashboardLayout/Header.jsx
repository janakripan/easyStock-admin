import React from "react";
import SearchBar from "../shared/Searchbar";
import { MdOutlineAdd } from "react-icons/md";
import { useTheme } from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
const Header = ({ pageName, onAddClick }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-full max-w-screen-2xl mx-auto h-fit flex flex-row items-center lg:justify-between justify-center bg-base-100 relative p-4 ">
      {/* page name */}
      <div className="w-fit h-fit ">
        <h1 className="text-3xl capitalize font-semibold tracking-wider font-roboto ">
          {pageName}
        </h1>
      </div>

      {/* searchbar and right side buttons  */}
      <div className="hidden lg:flex flex-row items-center gap-x-4 w-fit">
        <SearchBar />

        <button
          onClick={() => onAddClick(true)}
          className=" cursor-pointer w-fit bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 backdrop-blur-lg shadow-black/10  hover:bg-primary/50  active:bg-primary/30 active:scale-100 hover:scale-105 transition-all duration-300 px-5 p-3 rounded-lg border border-primary/30 text-base flex flex-row items-center whitespace-nowrap font-roboto font-semibold"
        >
          <span className="w-fit text-lg p-0 mr-1">
            <MdOutlineAdd />{" "}
          </span>{" "}
          <span>Add {pageName}</span>
        </button>

        
      </div>
      <button className={`w-10 h-5 flex items-center rounded-full bg-base-200 border-base-300/20 border-2 transition-all duration-300 absolute right-2 lg:relative`} onClick={toggleTheme}>
          <div className={`flex flex-col absolute items-center justify-center w-5 h-5 rounded-full shadow-black/30 shadow transition-all duration-300 ${theme === "halloween" ?"text-purple-600 bg-white left-0" : "text-primary bg-blue-400 right-0" } `}>{
            theme === "halloween" ?(<FaMoon/>) :(<FaSun/>)
          }</div>
        </button>
    </div>
  );
};

export default Header;
