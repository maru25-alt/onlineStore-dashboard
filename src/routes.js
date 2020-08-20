
import Dashboard from "views/Dashboard.js";
import Products from './views/Products';
import Settings  from './views/Settings';
import Messages from './views/Messages';
import Orders from './views/Orders';
import Categories from './views/Categories';
import Promotions from './views/Promotions';


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-bars",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "fas fa-bullseye",
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: "fab fa-product-hunt",
    component: Products,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders and Payments",
    icon: "fas fa-comment-dollar",
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/messages",
    name: "Messages",
    icon: "fas fa-envelope",
    component: Messages,
    layout: "/admin"
  },
  {
    path: "/promotions",
    name: "Promotions",
    icon: "fas fa-chess-queen",
    component: Promotions,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "fas fa-cog",
    component: Settings,
    layout: "/admin"
  },

  
  
];
export default routes;
