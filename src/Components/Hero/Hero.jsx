import React from "react";
import PlayStore from "../../assets/playstore.png";
import AppStore from "../../assets/app-store.png";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    // hero
    <div className="mt-5 px-5 pt-5 flex flex-col justify-center items-center">
      {/* hero top  */}
      <div className="hero-top text-center">
        <h1 className="lg:w-[597px] w-full mx-auto md:text-7xl text-5xl font-bold text-black">
          We Build{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="mt-4 text-[#627382] md:text-lg text-sm lg:w-2/3 w-full mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="mt-5 flex gap-5 items-center justify-center">
          <button className="btn font-semibold text-lg text-[#001931] rounded lg:px-8 lg:py-4 px-4 py-2 space-x-1.5 ">
            <img className="w-5" src={PlayStore} alt="" /> Play Store
          </button>
          <button className="btn font-semibold text-lg text-[#001931] rounded lg:px-8 lg:py-4 px-4 py-2 space-x-1.5 ">
            <img className="w-5" src={AppStore} alt="" /> App Store
          </button>
        </div>
      </div>
      {/* hero bottom */}
      <div className="hero-bottom mt-7">
        <img className="object-contain w-4/5 mx-auto " src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
