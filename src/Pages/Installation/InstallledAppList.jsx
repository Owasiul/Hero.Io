import { Download, Star } from "lucide-react";
import React from "react";

const InstallledAppList = ({ installedApps }) => {
  const { image, title, size, downloads, ratingAvg } = installedApps;
  return (
    <div>
      <div class="card card-side shadow-md flex items-center justify-between w-full h-fit border p-2 bg-white ">
        <div className="flex flex-row space-x-3 items-center">
          <figure class="p-4 bg-gray-200 rounded-xl">
            <img src={image} alt="Book Cover" class="w-32 rounded-md" />
          </figure>
          <div className="flex flex-col space-y-2">
            <h3 className="text-[#001931] font-medium text-xl ">{title} </h3>
            <div className="flex flex-row items-center space-x-3">
              <div className="flex flex-row items-center space-x-2 text-green-700">
                <Download className=""></Download>
                <span className="text-sm">{downloads} </span>
              </div>
              <div className="flex flex-row items-center space-x-2 text-orange-600">
                <Star></Star>
                <span className="text-sm">{ratingAvg} </span>
              </div>
              <div className="flex flex-row items-center space-x-2 text-neutral-600">
                <span className="text-sm">{size} </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn bg-green-600 text-white">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default InstallledAppList;
