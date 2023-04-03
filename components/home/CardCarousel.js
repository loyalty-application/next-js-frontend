import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const cardInfo = [['SCIS Freedom','**** **** **** 5678','SCIS Bank','Fabiana','03/23'],
//                   ['SCIS Shopping','**** **** **** 1234','SCIS Bank','Fabiana','05/27'],
//                   ['SCIS PlatinumMiles','**** **** **** 1234','SCIS Bank','Fabiana','03/25'],
//                   ['SCIS PremiumMiles','**** **** **** 6878','SCIS Bank','Fabiana','03/22'],
//                 ];

export default function CardCarousel({user}) {
  let settings = {dot: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, cssEase:"linear"};
  return(
    <Slider{...settings}>
    <div className="card-wrapper">
      <div className="card">
        <div className="card-image">
          </div>
          </div>
    </div>
    </Slider>
  );
}