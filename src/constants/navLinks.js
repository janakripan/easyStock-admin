import { MdCategory } from "react-icons/md";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BsFillTruckFrontFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

export const sidebarNav = [
  {

    title: "items",
    icon: FaList,
    id:"items",
    subItems: [
      { label: "All items", path: "/admin" },
      { label: "Add Items", path: "items/create" },
    ],
  },
  {
    title: "category",
    icon: MdCategory,
    id:"category",
    subItems: [
      { label: "All category", path: "category" },
      { label: "Add category", path: "category/create" },
    ],
  },
  {
    title: "UOM",
    icon: FaScaleBalanced,
    id:"uom",
    subItems: [
      { label: "All units", path: "uom" },
      { label: "Add unit", path: "uom/create" },
    ],
  },
  {
    title: "users",
    icon: FaUsers,
   id:"users",
    subItems: [
      { label: "All users", path: "users" },
      { label: "Add users", path: "users/create" },
    ],
  },
  {
    title: "vehicles",
    icon: BsFillTruckFrontFill,
    id:"vehicle",
    subItems: [
      { label: "All vehicle", path: "vehicles" },
      { label: "Add vehicle", path: "vehicles/create" },
    ],
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
];
