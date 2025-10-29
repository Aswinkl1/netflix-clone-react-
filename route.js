import { Component } from "react";
import App from "./src/App";
import { createBrowserRouter } from "react-router";
import Login from "./src/pages/Login/Login";
import Player from "./src/pages/Player/Player";
const route = [{
  path:"/",
  Component:App
},
{
  path:"/login",
  Component:Login
},
{
  path:"/player/:id",
  Component:Player
}]

const router = createBrowserRouter(route);

export default router;
