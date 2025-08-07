import React from "react";
import { useSidebar } from "../../contexts/SidebarContext";
import { HiChevronDoubleRight } from "react-icons/hi";
const Header = ({ pageName }) => {
  const { isOpen, setIsOpen } = useSidebar();
  return (
    <div className="w-full bg-white  mx-auto h-fit flex flex-row items-center justify-between   relative px-8 p-3 ">
      {/* page name */}
      <div className="w-fit h-fit flex items-center gap-4 ">
        <div className={`border border-white/5 bg-black/10  backdrop-blur-sm shadow-lg shadow-black/10   rounded-lg ${
          isOpen ?"hidden":"block"
        }`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={` cursor-pointer text-base text-gray-800 hover:bg-secondary-content/15 hover:scale-105 flex items-center rounded-lg justify-center p-1 transition-all duration-300 ${
              isOpen ? "-rotate-180" : "rotate-0"
            }  `}
          >
            <HiChevronDoubleRight />
          </button>
        </div>
        <h1 className="text-2xl text-gray-600 capitalize font-semibold tracking-wider font-roboto ">
          {pageName}
        </h1>
      </div>

      <div className="w-fit h-full flex flex-row items-center gap-2 p-1">
        <div className=" h-10 aspect-square rounded-full bg-amber flex items-center justify-center border-green-300 border-2 overflow-hidden">
          <img
            className="object-cover  object-center"
            src="https://i.pravatar.cc/150?img=3"
            alt=" user img"
          />
        </div>
        <div className=" flex h-fit flex-col  justify-between gap-0.5  ">
          <h6 className="font-medium text-sm capitalize font-roboto tracking-wider text-gray-900">
            Admin
          </h6>

          <span className="font-normal text-gray-600 text-sm capitalize  tracking-wider font-roboto ">
            Editor
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
