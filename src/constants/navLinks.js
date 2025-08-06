import { MdCategory } from "react-icons/md";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BsFillTruckFrontFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";



export const sidebarNav = [
  {
    title: "items",
    icon: FaList,
    path: "/admin",
  },
  {
    title: "category",
    icon: MdCategory,
    path: "category",
  },
  {
    title: "UOM",
    icon: FaScaleBalanced,
    path: "uom",
  },
  {
    title: "users",
    icon: FaUsers,
    path: "users",
  },
  {
    title: "vehicle",
    icon: BsFillTruckFrontFill,
    path: "vehicles",
  },
];


export const sidebarNav2 = [
  {
    title: "settings",
    icon: BsFillTruckFrontFill,
    path: "settings",
  },
   {
    title: "vehicle",
    icon: BsFillTruckFrontFill,
    path: "vehicles",
  },
]