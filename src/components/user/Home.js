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
      <Navbar />
      <Banner />
      <PlanCollection/>
      <WhyChoose/>
      <Footer />
    </div>
  );
};

export default Home;
