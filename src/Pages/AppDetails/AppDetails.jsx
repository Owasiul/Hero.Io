import { Download, Star, ThumbsUp } from "lucide-react";
import { ToastContainer, Bounce, toast } from "react-toastify";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { addToStoredLDB } from "../../Untillities/AddToLDB";

const AppDetails = () => {
  const { id } = useParams();
  const convertId = parseInt(id);
  const appData = useLoaderData();
  const [installed, setInstalled] = useState(false);
  const handleInstall = (id) => {
    setInstalled(true);
    addToStoredLDB(id)
    toast.success("App Installed Successfully!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const singleApp = appData.find((application) => application.id == convertId);
  const {
    image,
    title,
    companyName,
    description,
    reviews,
    ratingAvg,
    downloads,
    size,
    ratings,
  } = singleApp;
  const renderBarChart = (
    <BarChart layout="vertical" width={1000} height={500} data={ratings}>
      <XAxis />
      <YAxis dataKey="name" stroke="#FF8811" type="category" />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="count" fill="#FF8811" barSize={30} />
    </BarChart>
  );
  return (
    <div className="overflow-x-hidden bg-[#f5f5ff]">
      <div className="card-side border-b w-full flex lg:flex-row flex-col lg:space-x-5 space-y-4 lg:space-y-0 items-center my-5 pb-3 mx-5">
        <div>
          <img
            className="w-[250px] object-contain rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <div className="txt">
          {/* top text */}
          <div className="">
            <h1 className="font-bold text-3xl text-[#001931] ">{title}</h1>
            <p className="text-lg border-b w-full pb-5">
              Developed by{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
                {companyName}
              </span>
            </p>
          </div>
          {/* middle text */}
          <div className="flex flex-col">
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 py-4">
              <div className="download space-y-1.5 flex flex-col items-center">
                <Download />
                <span>Downloads</span>
                <p className="font-bold text-5xl">{downloads} </p>
              </div>
              <div className="ratings space-y-1.5 flex flex-col items-center">
                <Star className="text-orange-700" />
                <span>Average Ratings</span>
                <p className="font-bold text-5xl">{ratingAvg}</p>
              </div>
              <div className="like space-y-1.5 flex flex-col items-center">
                <ThumbsUp />
                <span>Total Reviews</span>
                <p className="font-bold text-5xl">{reviews}</p>
              </div>
            </div>
          </div>
          <div className="install w-full mx-10 my-3">
            <button
              onClick={() => handleInstall(id)}
              className={`btn flex items-center ${installed? "bg-gray-500" : "bg-[#00D390]"} rounded text-white`}
            >
              {installed ? <p>Installed</p> : <p>Install now ({size})</p>}
            </button>
          </div>
        </div>
      </div>
      {/* middile chart */}
      <div className="flex justify-center lg:my-8 md:my-4 my-2">
        {renderBarChart}
      </div>
      {/* description */}
      <div className="border-t w-full p-5">
        <p>{description}</p>
      </div>
      <ToastContainer
        position="bottom-left, Top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default AppDetails;
