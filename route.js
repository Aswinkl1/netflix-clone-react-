import { Component } from "react";
import App from "./src/App";
import { createBrowserRouter } from "react-router";
import Login from "./src/pages/Login/Login";
const route = [{
  path:"/",
  Component:App
},
{
  path:"/login",
  Component:Login
}]


const router = createBrowserRouter(route)

export default router