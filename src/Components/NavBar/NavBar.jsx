import React from "react";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import "./Nav.css";
import { Github } from "lucide-react";
const NavBar = () => {
  const links = (
    <div className=" flex lg:flex-row flex-col gap-5 font-semibold text-[16px]">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Apps
      </NavLink>
      <NavLink
        to="/installation"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Installation
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-3 py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl flex items-center space-x-2">
          <img className="object-contain md:w-14 w-10" src={Logo} alt="Logo" />
          <span className="font-bold text-lg  bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/Owasiul" target="_blank" className="px-2">
          <button className="btn cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <Github className="w-5 " />{" "}
            <span className="text-lg">Contribute</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
