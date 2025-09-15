import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/components/header";
import Home from "./Pages/Home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import "./css/index.css"



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />} />
      <Route
          path="/about"
          element={<About />} />
                <Route
          path="/contact"
          element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;