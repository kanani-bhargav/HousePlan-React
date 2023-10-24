import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Footer from "./Footer";
import FormFilter from "./FormFilter";
import Banner from "./Banner";
import CollectionCard from "./CollectionCard";

const Home = () => {
  return (
    <div className="home-body">
      <Navbar />
      <Banner />
      <CollectionCard/>
      <Footer />
    </div>
  );
};

export default Home;
