import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../../Untillities/AddToLDB";
import InstallledAppList from "./InstallledAppList";

const Installation = () => {
  const Alldata = useLoaderData();
  const [appList, setApplist] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const AppData = getInstalledApp();
    const convertedAppData = AppData.map((data) => parseInt(data));
    const listedApps = Alldata.filter((Applist) =>
      convertedAppData.includes(Applist.id)
    );
    setApplist(listedApps);
  }, []);
  return (
    <div className="bg-[#f5f5f5]">
      <div className="top-text text-center py-5">
        <h1 className="text-[#001931] font-bold text-5xl mb-2">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] text-lg ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="middle w-[95%] mx-auto flex items-center jsutify-between">
        <div>
          <h3 className="text-[#001931] text-2xl ">
            {appList.length} Apps Found
          </h3>
        </div>
        <div>
          <details className="dropdown">
            <summary className="btn m-1">open or close</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>{" "}
        </div>
      </div>
      <div className="px-3 py-5  space-y-4">
        {appList.map((installedApps) => (
          <InstallledAppList
            key={installedApps.id}
            installedApps={installedApps}
          ></InstallledAppList>
        ))}
      </div>
    </div>
  );
};

export default Installation;
