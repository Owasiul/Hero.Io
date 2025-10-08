import React from "react";
import Hero from "../../Components/Hero/Hero";
import Downloads from "../../Components/Downloads/Downloads";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";


const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Downloads></Downloads>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
