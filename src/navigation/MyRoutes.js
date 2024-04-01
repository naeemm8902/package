import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Components/home/home";
import Login from "../Components/login/login";
import ErrorPage from "../Components/errorPage/errorPage";
import Signup from "../Components/signup/Signup";
import Shop from "../Components/shop/Shop";
import Blog from "../Components/blog/Blog";
import Contact from "../Components/contact/Contact";
import About from "../Components/about/About";
import Data from "../Components/data/Data";
// import Fetch from "../Components/fetch/Fetch";
import FetchScreen from "../Components/fetch/FetchScreen";


const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/shop",
        element: <Shop />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/blog",
        element: <Blog/>,
        errorElement: <ErrorPage />,

      },
      {
        path: "/about",
        element: <About/>,
        errorElement: <ErrorPage />,

      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/data",
        element: <Data />,
        errorElement: <ErrorPage />,

      },
      {
        path: "/fetch",
        element: <FetchScreen/>,
        errorElement: <ErrorPage />,

      },
    
 
  ]);
  

  export default myRoutes;