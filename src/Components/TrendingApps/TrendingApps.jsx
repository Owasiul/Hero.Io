import React from "react";
import { Link, useLoaderData } from "react-router";
import TrendingApp from "./TrendingApp";
const TrendingApps = () => {
  const apps = useLoaderData();
  // console.log(apps)

return (
    <div className=" bg-[#F5F5F5]">
        <div className="w-[90%] mx-auto pt-7">
            {/* top text */}
            <div className="top-txt text-center">
                <h1 className="text-[#001931] font-bold md:text-5xl text-3xl">
                    Trending Apps
                </h1>
                <p className="mt-3 text-[#627382] text-lg ">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            {/*Apps card */}
            <div className="grid w-full lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center lg:gap-10 gap-5 mt-5 ">
                {apps.map((app) => (
                    <TrendingApp key={app.id} app={app}></TrendingApp>
                ))}
            </div>
        </div>
        <div className="mt-7 py-5">
            <Link to='/apps' >
            <button className="btn cursor-pointer px-4 py-3 flex mx-auto justify-center md:w-40 w-fit bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                Show All
            </button>
            </Link>
        </div>
    </div>
);
};

export default TrendingApps;
