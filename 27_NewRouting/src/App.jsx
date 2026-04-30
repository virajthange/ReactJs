import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

function App() {
  console.log(window.history);
  const rou = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path: "/contact",
          element: <Navigate to="/home" replace/>                
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={rou} />
    </>
  );
}

export default App;
