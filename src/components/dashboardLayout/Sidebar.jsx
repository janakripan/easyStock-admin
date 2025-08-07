import React, { useState } from "react";
import { useSidebar } from "../../contexts/SidebarContext";
import logo from "../../assets/images/app_logo.svg";
import { HiChevronDoubleRight } from "react-icons/hi";
import { sidebarNav } from "../../constants/navLinks";
import { Link, NavLink, useLocation } from "react-router";
import { MdOutlineSettings } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div
      className={`h-screen z-20  fixed overflow-hidden top-0 left-0 bg-white  flex flex-col justify-between transition-all duration-300  px-2 ${
        isOpen ? "w-[250px]  opacity-100" : "w-0 opacity-0 "
      } `}
    >
      <div className=" w-full h-full flex flex-col  justify-between transition-all duration-300 relative ">
        {/* sidebar button and logo */}
        <div className="w-full h-[80px] mt-1 px-3">
          <div
            className={`w-full h-full  flex flex-row items-center  ${
              isOpen ? "justify-between px-4" : " justify-center px-0"
            }`}
          >
            {isOpen ? (
              <img
                src={logo}
                className={`h-28 transition-all duration-500 ${
                  isOpen ? "w-[100px] opacity-100 " : "w-0 opacity-0 "
                } `}
                alt="sidebar logo"
              />
            ) : (
              ""
            )}
            <div className="border border-white/5 bg-black/10  backdrop-blur-sm shadow-lg shadow-black/10   rounded-lg">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={` cursor-pointer text-base text-gray-800 hover:bg-secondary-content/15 hover:scale-105 flex items-center rounded-lg justify-center p-1 transition-all duration-300 ${
                  isOpen ? "-rotate-180" : "rotate-0"
                }  `}
              >
                <HiChevronDoubleRight />
              </button>
            </div>
          </div>
          <hr className="text-white/10 " />
        </div>

        {/* nav items */}
        <nav className="w-full h-full overflow-hidden overflow-y-scroll pt-2 hide-scrollbar flex flex-col justify-between">
          {/* sidebar navigation */}
          <ul className="w-full h-fit flex flex-col items-center gap-y-4">
            {sidebarNav.map((item) => {
              const isActive = item.subItems?.some((sub) => {
                const fullPath = `/admin/${sub.path}`;

                // Special case: if sub.path is "/admin", match exactly
                const isIndex =
                  sub.path === "/admin" && location.pathname === "/admin";

                return isIndex || location.pathname === fullPath;
              });

              return (
                <div key={item.id} className="w-full h-fit">
                  <button
                    onClick={() => {
                      toggleMenu(item.id);
                    }}
                    className={`w-full h-fit  p-3 font-semibold font-roboto  flex justify-between rounded-lg hover:bg-gray-200 group transition-all duration-300 ${
                      isActive ? "bg-gray-100 text-primary text-shadow-xs text-shadow-black/20" : " text-gray-800"
                    } `}
                  >
                    <div className="w-full h-fit flex items-center gap-x-2.5  ">
                      <div className="text-xl">
                        <item.icon />
                      </div>
                      <span className="group-hover:text-primary transition-all duration-300">
                        {item.title}
                      </span>
                    </div>
                    <span>
                      {openMenus[item.id] ? <FaCaretUp /> : <FaCaretDown />}
                    </span>
                  </button>
                  {openMenus[item.id] && (
                    <ul className="pl-8 mt-1 space-y-1">
                      {item.subItems.map((sub) => (
                        <li
                          key={sub.path}
                          className={` delay-100 list-disc  transition-all duration-300 ${
                            openMenus[item.id]
                              ? "scale-100 translate-y-0"
                              : " scale-0 -translate-y-10"
                          }`}
                        >
                          <Link
                            to={sub.path}
                            className={`block px-2 py-1 rounded hover:text-shadow-xs ${
                              location.pathname.endsWith(sub.path)
                                ? "text-primary"
                                : " text-gray-800"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </ul>

          {/* logout and settings buttons */}
          <div>
            <ul className="w-full h-fit flex flex-col items-center gap-y-4 mb-12">
              <li className="h-fit w-full px-2 hover:text-shadow-xs group   flex items-center justify-center transition-all duration-500">
                <NavLink
                  to={"settings"}
                  className={({ isActive }) =>
                    `w-full h-fit p-2 py-3 font-semibold font-roboto  flex items-center  gap-x-2 rounded-lg hover:bg-gray-200 group transition-all duration-300 ${
                      isActive ? "bg-gray-300 text-primary text-shadow-xs text-shadow-black/20" : " text-gray-800"
                    } `
                  }
                >
                  <div className="text-xl">
                    <MdOutlineSettings />
                  </div>{" "}
                  <span
                    className={`capitalize tracking-wide transition-all duration-300 hover:text-primary ${
                      isOpen ? "w-fit opacity-100" : "w-0 opacity-0 "
                    }`}
                  >
                    Settings
                  </span>
                </NavLink>
              </li>
              <li className="h-fit w-full px-2 hover:text-shadow-sm group text-shadow-black/20 flex items-center justify-center transition-all duration-300">
                <button
                  onClick={() => handleLogout()}
                  className={`w-full h-fit p-2 py-3 font-semibold font-roboto text-gray-800  flex items-center gap-x-2 rounded-lg hover:bg-gray-200 group transition-all duration-300  `}
                >
                  <div className="text-xl">
                    <LuLogOut />
                  </div>{" "}
                  <span
                    className={`capitalize tracking-wide transition-all duration-300 hover:text-primary ${
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
          <div className=" absolute inset-0 -z-50 bg-white"></div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
