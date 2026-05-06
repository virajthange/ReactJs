import React from "react";
import MyStore from "../data";

const Navbar = () => {
  const { name } = MyStore();

  return (
    <div style={{ color: "bisque" }}>
      Navbar <p>Name: {name}</p>
    </div>
  );
};

export default Navbar;
