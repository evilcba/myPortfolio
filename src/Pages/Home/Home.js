import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css"
import Services from "../../Components/Services/Services";
import Aboutus from "../../Components/Aboutus/Aboutus";
import ServiceCards from "../../Components/ServicesCards/ServiceCards";
const Home = () => {
  return (
    <>
     <div className="main-div">
      <Navbar />
      <Aboutus/>
      <Services/>
      <ServiceCards/>
    </div>
    </>
   
  );
};

export default Home;
