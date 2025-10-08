import React from "react";
import { useLoaderData } from "react-router";
import App from "./App";

const Apps = () => {
  const allApps = useLoaderData();

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
                            type="search"
                            placeholder="Search"
                            className="flex-1 bg-transparent outline-none"
                        />
                    </label>
                </div>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 lg:gap-10 py-5">
                {allApps.map((app) => (
                    <App key={app.id} app={app} />
                ))}
            </div>
        </div>
    </div>
);
};

export default Apps;
