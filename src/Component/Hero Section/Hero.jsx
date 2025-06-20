import React from "react";
import "./Hero.css";
import shoeImg from '../../assets/shoe.png'
const Hero = () => {
  return (
    <div className="container-fluid hero">
      <div className="row d-flex justify-content-between flex-wrap">
        <div className="col-lg-6 col-12 imgCont1">
          <h1 className="hero-heading text-center text-lg-start"><span className="text-white">MEN'S</span> <br />Shoe Collections</h1>
        </div>
        <div className="col-lg-6 col-s12 imgCont">
            <img src={shoeImg} className="img img-fluid" alt="Shoes Image"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
