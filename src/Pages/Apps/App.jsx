import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const App = ({ app }) => {
//   console.log(app);
  const { image, title, reviews, downloads, id } = app;
  return (
    <Link to={`/appdetails/${id}`}>
      <div className="card hover:scale-105 bg-base-100 md:w-80 md:h-80 w-full h-full shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl object-contain my-5"
          />
        </figure>
        <div className="card-body flex flex-col text-center">
          <h2 className="font-bold text-xl text-nowrap text-center">{title}</h2>
          <div className="flex justify-between my-2">
            <span className="badge rounded bg-gray-100 font-medium text-green-500 px-1.5 py-2">
              <Download className="w-5"></Download>
              {downloads}{" "}
            </span>
            <span className="badge rounded bg-amber-100 font-medium text-[#FF8811] px-1.5 py-2">
              <Star className="w-5"></Star> {reviews}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
