import React from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import ErrorPage from "../Components/Error/ErrorPage";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/TrendingApps.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("/AllApps.json"),
      },
      {
        path: "/appdetails/:id",
        Component: AppDetails,
        loader: () => fetch("/AllApps.json"),
      },
      {
        path: "/installation",
        Component: Installation
      }
    ],
  },
]);
