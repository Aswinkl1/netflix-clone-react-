import { Component } from "react";
import App from "./src/App";
import { createBrowserRouter } from "react-router";
import Login from "./src/pages/Login/Login";
import Player from "./src/pages/Player/Player";
import { ProtectedRoute } from "./src/components/protectedRoutes/protectedRoutes";
import RedirectIfLogedIn from "./src/components/protectedRoutes/RedirectIfLogedIn";

const route = [
  {
    // Component: RedirectIfLogedIn,
    // children: [
    // {
    path: "/login",
    Component: Login,
  },
  // ],
  // },

  {
    Component: ProtectedRoute,
    children: [
      {
        path: "/",
        Component: App,
      },
      {
        path: "/player/:id",
        Component: Player,
      },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;
