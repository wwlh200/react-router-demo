import Layout from "../pages/Layout";
import asyncComponent from "../utils/utils";
const RouteConfig = [
  {
    path: "/basic",
    component: Layout,
    children: [
      {
        path: "/basic/page1",
        component: asyncComponent(() => import("../pages/Page1")),
      },
      {
        path: "/basic/page2",
        component: asyncComponent(() => import("../pages/Page2")),
      },
      {
        path: "/basic/page3",
        component: asyncComponent(() => import("../pages/Page3")),
      },
      { path: "/basic", redirect: "/basic/page1" },
    ],
  },
  // {
  //   path: "/login",
  //   component: asyncComponent(() => import("../pages/Login")),
  // },
  {
    path: "/",
    redirect: "/basic",
  },
];

export default RouteConfig;
