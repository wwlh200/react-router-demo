import Layout from "../pages/Layout";
import { lazy } from "react";
const RouteConfig = [
  {
    path: "/basic",
    component: Layout,
    children: [
      {
        path: "/basic/page1",
        component: lazy(() => import("../pages/Page1")),
      },
      {
        path: "/basic/page2",
        component: lazy(() => import("../pages/Page2")),
      },
      {
        path: "/basic/page3",
        component: lazy(() => import("../pages/Page3")),
      },
      { path: "/basic", redirect: "/basic/page1" },
    ],
  },
  // {
  //   path: "/login",
  //   component: lazy(() => import("../pages/Login")),
  // },
  {
    path: "/",
    redirect: "/basic",
  },
];

export default RouteConfig;
