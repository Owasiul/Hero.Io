import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import App from "./App";
import appError from "../../assets/App-Error.png";
const Apps = () => {
  const allApps = useLoaderData();
  const [findApp, setFindApp] = useState("");
  const handleFind = (event) => {
    setFindApp(event.target.value);
  };
  const filtedSearch = allApps.filter((app) =>
    app.title.toLowerCase().includes(findApp.toLowerCase())
  );

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-[90%] mx-auto px-4">
        {/* top bar */}
        <div className="top-bar">
          <h1 className="text-center font-bold md:text-5xl text-3xl py-5">
            Our All Applications
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#001931] font-medium">
              ({allApps.length}) Apps Found
            </p>
            {/* search bar */}
            <label className="input w-full md:w-auto flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="text"
                value={findApp}
                placeholder="Search"
                onChange={handleFind}
                className="flex-1 bg-transparent outline-none"
              />
            </label>
          </div>
        </div>
        <div>
          {filtedSearch.length > 0 ? (
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 lg:gap-10 py-5">
              {filtedSearch.map((app) => (
                // console.log(app),
                <App key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <div className="h-screen flex flex-col items-center justify-center">
              <img src={appError} alt="" />{" "}
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="my-5 text-[#001931] text-5xl ">
                  OPPS!! APP NOT FOUND
                </h2>
                <p className=" text-[#627382] text-sm">
                  The App you are requesting is not found on our system. please
                  try another apps
                </p>
                <Link to="/apps">
                  <button className="btn mt-4 cursor-pointer px-4 py-3 flex mx-auto justify-center md:w-40 w-fit bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
