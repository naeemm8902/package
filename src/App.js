import React from 'react';
// import ClassC from './Components/ClassC';
import Home from './Components/home/home';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Login from './Components/login/login';
import Signup from './Components/signup/Signup';
import { RouterProvider } from 'react-router-dom';
import myRoutes from './navigation/MyRoutes';

export default function App() {
  return (
      <RouterProvider router={myRoutes} />
  );
}
