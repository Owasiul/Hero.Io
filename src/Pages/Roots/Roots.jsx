import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Outlet } from "react-router";
import "./Roots.css";
import Footer from "../../Components/Footer/Footer";

const Roots = () => {
  return (
    <div className="inter">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
