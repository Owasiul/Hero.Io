import React from "react";

const Downloads = () => {
  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] lg:p-12 p-6 text-center">
      <h1 className="text-white font-bold md:text-5xl text-2xl">
        Trusted by Millions, Built for You
      </h1>
      <div className="downloads mt-10 grid md:grid-cols-3 grid-cols-1">
        {/* box-1 */}
        <div className="text-white flex flex-col justify-center items-center">
          <h4 className="text-[16px] opacity-80 ">Total Downloads</h4>
          <h1 className="my-4 font-extrabold text-6xl">29.6M</h1>
          <h4 className="text-[16px] opacity-80 ">21% more than last month</h4>
        </div>
        {/* box-2 */}
        <div className="text-white flex flex-col justify-center items-center">
          <h4 className="text-[16px] opacity-80 ">Total Reviews</h4>
          <h1 className="my-4 font-extrabold text-6xl">906K</h1>
          <h4 className="text-[16px] opacity-80 ">46% more than last month</h4>
        </div>
        {/* box-3 */}
        <div className="text-white flex flex-col justify-center items-center">
          <h4 className="text-[16px] opacity-80 ">Active Apps</h4>
          <h1 className="my-4 font-extrabold text-6xl">132+</h1>
          <h4 className="text-[16px] opacity-80 ">31 more will Launch</h4>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
