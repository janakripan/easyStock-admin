import React from "react";
import { useSidebar } from "../../contexts/SidebarContext";
import logo from "../../assets/images/app_logo.svg";
import { HiChevronDoubleRight } from "react-icons/hi";
import { sidebarNav } from "../../constants/navLinks";
import { NavLink } from "react-router";
import { MdOutlineSettings } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";


const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();

  const handleLogout = () =>{
    console.log("Logout clicked")
  }


  return (
    <div
      className={`h-screen z-20  fixed overflow-hidden top-0 left-0 bg-gradient-to-r from-base-200  via-base-100 to-base-200  flex flex-col justify-between transition-all duration-300  ${
        isOpen ? "w-[280px]" : "w-[60px] md:w-[80px] "
      } `}
    >
      
      <div className=" w-full h-full flex flex-col justify-between transition-all duration-300 relative ">

        {/* sidebar button and logo */}
      <div className="w-full h-[80px] mt-4 px-3">
        <div
          className={`w-full h-full  flex flex-row items-center  ${
            isOpen ? "justify-between px-4" : " justify-center px-0"
          }`}
        >
          {isOpen ? (
            <img
              src={logo}
              className={`h-36 transition-all duration-500 ${
                isOpen ? "w-[120px] opacity-100 " : "w-0 opacity-0 "
              } `}
              alt="sidebar logo"
            />
          ) : (
            ""
          )}
          <div className="border border-white/5 bg-black/10  backdrop-blur-sm shadow-lg shadow-black/10   rounded-lg">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={` cursor-pointer text-base text-secondary-content/80 hover:bg-secondary-content/15 hover:scale-105 flex items-center rounded-lg justify-center p-2 transition-all duration-300 ${
                isOpen ? "-rotate-180" : "rotate-0"
              }  `}
            >
              <HiChevronDoubleRight />
            </button>
          </div>
        </div>
        <hr className="text-white/10 " />
      </div>

      {/* sidebar navigation */}
      <ul className="w-full h-fit flex flex-col items-center gap-y-4">
        {sidebarNav.map((item, idx) => (
          <li
            key={idx}
            className="h-fit w-full px-2 hover:text-shadow-sm group text-shadow-black/20 hover:-translate-y-2 flex items-center justify-center transition-all duration-300"
          >
            <NavLink
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `w-full flex flex-row items-center  gap-x-2 md:text-lg text-base   border p-3 md:px-4 md:pl-5 rounded-xl  group-hover:bg-base-100 backdrop-blur-lg shadow-lg shadow-black/15 overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "  bg-gradient-to-b from-primary/40 via-primary/15 to-primary/40 border-primary/10 "
                    : " bg-base-100/10 border-base-100"
                } `
              }
            >
              <div>
                <item.icon />
              </div>{" "}
              <span
                className={`capitalize tracking-wide transition-all duration-300 ${
                  isOpen
                    ? "w-fit opacity-100 justify-start"
                    : "w-0 opacity-0 justify-center"
                }`}
              >
                {item.title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* logout and settings buttons */}
      <div>
        <ul className="w-full h-fit flex flex-col items-center gap-y-4 mb-12">
          <li className="h-fit w-full px-2 hover:text-shadow-sm group text-shadow-black/20 hover:-translate-y-2 flex items-center justify-center transition-all duration-500">
            <NavLink
              to={"settings"}
              className={({ isActive }) =>
                 `w-full flex flex-row items-center  gap-x-2 md:text-lg text-base   border p-3 md:px-4 md:pl-5 rounded-xl  group-hover:bg-base-100 backdrop-blur-lg shadow-lg shadow-black/15 overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "  bg-gradient-to-b from-primary/40 via-primary/15 to-primary/40 border-primary/10 "
                    : " bg-base-100/10 border-base-100"
                } `
              }
            >
              <div>
                <MdOutlineSettings />
              </div>{" "}
              <span
                className={`capitalize tracking-wide transition-all duration-300 ${
                  isOpen
                    ? "w-fit opacity-100"
                    : "w-0 opacity-0 "
                }`}
              >
                Settings
              </span>
            </NavLink>
          </li>
          <li className="h-fit w-full px-2 hover:text-shadow-sm group text-shadow-black/20 hover:-translate-y-2 flex items-center justify-center transition-all duration-300">
            <button
              onClick={()=>handleLogout()}
              className={
                `w-full flex flex-row items-center  gap-2 md:text-lg text-base   border p-3 md:px-4 md:pl-5 rounded-xl  group-hover:bg-base-100 backdrop-blur-lg shadow-lg shadow-black/15 overflow-hidden transition-all duration-300  bg-base-100/10 border-base-100 `
              }
            >
              <div>
                <LuLogOut />
              </div>{" "}
              <span
                className={`capitalize tracking-wide transition-all duration-300 ${
                  isOpen
                    ? "w-fit opacity-100 justify-start"
                    : "w-0 opacity-0 justify-center"
                }`}
              >
                Logout
              </span>
            </button>

          </li>
        </ul>
      </div>

      {/* mobile screen background cover */}
      <div className=" absolute inset-0 -z-50 bg-bgPrimary"></div>

      </div>
    </div>
  );
};

export default Sidebar;
