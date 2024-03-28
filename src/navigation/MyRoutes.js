import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Components/home/home";
import Login from "../Components/login/login";
import ErrorPage from "../Components/errorPage/errorPage";


const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/login",
        element: <Login />,
      },
  ]);
  

  export default myRoutes;