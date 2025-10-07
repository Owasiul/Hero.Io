import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Outlet } from "react-router";
import "./Roots.css";

const Roots = () => {
  return (
    <div className="inter">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
