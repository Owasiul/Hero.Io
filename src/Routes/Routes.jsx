import React from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/TrendingApps.json"),
      },{
         path: "/apps",
        Component: Apps,
        loader: () => fetch("/AllApps.json"),
      },
    ],
  },
]);
