import { AccessDenied } from 'core/app/components/AccessDenied';
export const routeConfig = {
  home: "/",
  login: "/login",
  signUp: "/register",
  category: "/category",
  detail: "/detail/:id",
  buy: "/buy",
  cart: "/cart",
  like: "/like",
  account: "/account",
  news: "/news",
  introduce: "/introduce",
  contact: "/contact",
  //access denied
  AccessDenied: "/access-denied",

  //mobile
  accountMobile: "/account/mobile",
  accountOrder: "/account/order",

  //admin

  loginAdmin: "/admin/login",
  dashboard: "/admin",
};
