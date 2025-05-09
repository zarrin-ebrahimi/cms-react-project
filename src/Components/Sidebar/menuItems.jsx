import { FaShop } from "react-icons/fa6";
import { MdComment } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { FaTachometerAlt } from "react-icons/fa";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { MdShoppingCart } from "react-icons/md";


export const menuItems = [
  {
    id: "app",
    label: "App",
    path: '/',
    icon:(className) => <FaTachometerAlt className={className}/>
  },
  {
    id: "product",
    label: "Product",
    path: '/produt',
    icon:(className) => <FaShop className={className}/> ,
    submenu: [
      { id: "add", label: "Add", path: "/product/add"},
      { id: "edite", label: "Edite", path: '/product/edite' },
      { id: "detail", label: "Detail", path: '/product/detaile' },
      { id: "list", label: "List", path: '/product/list' },
    ],
  },
  {
    id: "user",
    label: "User",
    path: '/users',
    icon:(className) => <PiUserSwitchDuotone className={className}/> ,
    submenu: [
      { id: "add", label: "Add", path: "/user/add" },
      { id: "edite", label: "Edite", path: "/user/add" },
      { id: "list", label: "List", path: "/user/add" },
    ],
  },
  {
    icon:(className) => <MdShoppingCart className={className}/> ,
    id: "order",
    label: "Order",
    path: '/orders',
    submenu: [
      { id: "add", label: "Add" },
      { id: "edite", label: "Edite" },
    ],
  },
  {
    icon:(className) => <MdComment className={className}/> ,
    id: "comments",
    label: "Comments",
    path: '/comments',
    submenu: [
      { id: "add", label: "Add" },
      { id: "delete", label: "Delete" },
      { id: "detail", label: "Detail" },
      { id: "list", label: "List" },
    ],
  },
  {
    icon:(className) => <MdDiscount className={className}/> ,
    id: "discount",
    label: "Discount",
    path: '/offs',
  
  },
];
