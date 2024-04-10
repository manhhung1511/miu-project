import { memo } from "react";

import NoAuthLayout from "core/app/layouts/NoAuthLayout/index";
import { LoginPage } from "core/app/pages/LoginPage/index";

import { routeConfig } from "./routeConfig";
import { PublicRoutes } from "./type";
import { RegisterPage } from "core/app/pages/RegisterPage";
import { HomePage } from "core/app/pages/HomePage";

import AccessDenied from "core/app/components/AccessDenied";
import CategoryPage from "core/app/pages/CategoryPage";
import DetailPage from "core/app/pages/DetailPage";
import BuyPage from "core/app/pages/BuyPage";
import CartPage from "core/app/pages/CartPage";
import LikePage from "core/app/pages/LikePage";
import AccountPage from "core/app/pages/AccountPage";
import ContactPage from "core/app/pages/ContactPage";
import NewsPage from "core/app/pages/NewsPage";
import IntroducePage from "core/app/pages/IntroducePage";
import LoginPageAdmin from "core/app/pages/admin/LoginPage";
import DashboardPage from "core/app/pages/admin/DashboardPage";
import Account2Page from "core/app/pages/Account2Page";
import Account1Page from "core/app/pages/Account1Page ";


const publicRoutes: PublicRoutes[] = [
  {
    path: routeConfig.login,
    component: memo(LoginPage),
  },
  {
    path: routeConfig.signUp,
    component: memo(RegisterPage),
  },
  {
    path: routeConfig.home,
    component: memo(HomePage),
  },
  {
    path: routeConfig.AccessDenied,
    component: memo(AccessDenied),
  },
  {
    path: routeConfig.category,
    component: memo(CategoryPage),
  },
  {
    path: routeConfig.detail,
    component: memo(DetailPage),
  },
  {
    path: routeConfig.buy,
    component: memo(BuyPage),
  },
  {
    path: routeConfig.cart,
    component: memo(CartPage),
  },
  {
    path: routeConfig.like,
    component: memo(LikePage),
  },
  {
    path: routeConfig.account,
    component: memo(AccountPage),
  },
  {
    path: routeConfig.contact,
    component: memo(ContactPage),
  },
  {
    path: routeConfig.news,
    component: memo(NewsPage),
  },
  {
    path: routeConfig.introduce,
    component: memo(IntroducePage),
  },
  {
    path: routeConfig.loginAdmin,
    component: memo(LoginPageAdmin),
    layout: NoAuthLayout
  },
  {
    path: routeConfig.dashboard,
    component: memo(DashboardPage),
    layout: NoAuthLayout
  },
  {
    path: routeConfig.accountMobile,
    component: memo(Account1Page),
  },
  {
    path: routeConfig.accountOrder,
    component: memo(Account2Page),
  },
];

export { publicRoutes };
