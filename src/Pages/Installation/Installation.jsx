import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../../Untillities/AddToLDB";
import InstallledAppList from "./InstallledAppList";

const Installation = () => {
  const Alldata = useLoaderData();
  const [appList, setApplist] = useState([]);
  const [sort, setSort] = useState("");
  const [installed, setInstalled] = useState(Alldata);
  const handleUnInstall = (id) => {
    const updatedApps = installed.filter((remove) => remove.id !== id);
    setInstalled(updatedApps);
  };

  const handleSort = (type) => {
    setSort(type);
    if (type === "LowSize") {
      const sortPage = [...appList].sort(
        (a, b) => parseFloat(a.size) - parseFloat(b.size)
      );
      setApplist(sortPage);
    }
    if (type === "HighSize") {
      const sortPage = [...appList].sort(
        (a, b) => parseFloat(b.size) - parseFloat(a.size)
      );
      setApplist(sortPage);
    }
  };
  useEffect(() => {
    const AppData = getInstalledApp();
    const convertedAppData = AppData.map((data) => parseInt(data));
    const listedApps = Alldata.filter((Applist) =>
      convertedAppData.includes(Applist.id)
    );
    setApplist(listedApps);
  }, [Alldata]);
  return (
    <div className="bg-[#f5f5f5] overflow-x-hidden">
      <div className="top-text text-center py-5">
        <h1 className="text-[#001931] font-bold text-5xl mb-2">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] text-lg ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="middle w-[95%] mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-[#001931] text-2xl ">
            {appList.length} Apps Found
          </h3>
        </div>
        <div>
          <details className="dropdown">
            <summary className="btn m-1">Sort By: {sort ? sort : ""} </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a onClick={() => handleSort("LowSize")}>Low to High</a>
              </li>
              <li>
                <a onClick={() => handleSort("HighSize")}>High to Low</a>
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
            handleUnInstall={handleUnInstall}
          ></InstallledAppList>
        ))}
      </div>
    </div>
  );
};

export default Installation;
