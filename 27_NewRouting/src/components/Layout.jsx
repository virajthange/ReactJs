import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>Layout</div>
      <Navbar />
      <h3>This is layout page</h3>
      <Outlet />
    </>
  );
};

export default Layout;
