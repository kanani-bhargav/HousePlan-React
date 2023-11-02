import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Footer from "./Footer";
import Banner from "./Banner";
import PlanCollection from "./PlanCollection";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div className="home-body">
     <Navbar container="container p-0"/>
     <div className="container">
      <Banner />
      <PlanCollection/>
      <WhyChoose/>
     </div>
      <Footer container="container"/>
    </div>
  );
};

export default Home;
