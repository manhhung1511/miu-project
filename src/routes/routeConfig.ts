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
  history: "/history",
  news: "/news",
  introduce: "/introduce",
  contact: "/contact",
  detailNews: "/news/detail",
  search: "/search",
  //access denied
  AccessDenied: "/access-denied",

  //mobile
  accountMobile: "/account/mobile",
  accountOrder: "/account/order",
  detailAccount: "/chi-tiet-tai-khoan",

  //admin

  loginAdmin: "/admin/login",
  dashboard: "/admin",
};
