import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import DetailedContact from "./components/DetailedContact";

function App() {
  return (
    <>
      <h1>React Routing</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:contactid" element={<DetailedContact />} />
        {/* Dynamic Routing  */}
      </Routes>
    </>
  );
}

export default App;
