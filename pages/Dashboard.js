import React from "react";
import Navbar from "./components/Navbar";
// import Card from "./components/Home/Card";
// import CardCarousel from "./components/Home/CardCarousel"
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Slider from "react-slick";

const Dashboard = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <Slider {...settings}>
        <div>
          <Cards
            cvc="123"
            expiry="07/26"
            name="BERNICE TEO"
            number="4534 5678 9012 3456"
          />
          <Cards
            cvc="212"
            expiry="07/26"
            name="BERNICE TEO"
            number="2334 5678 9012 3456"
          />
          <Cards
            cvc="123"
            expiry="07/26"
            name="BERNICE TEO"
            number="6234 5678 9012 3456"
          />
        </div>
      </Slider> */}
      <div className="w-full h-screen md:w-auto md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="p-4">
            <p className="font-bold text-2xl pt-10 px-5">
              {" "}
              Good to see you here, username!
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <Cards
              cvc="123"
              expiry="07/26"
              name="BERNICE TEO"
              number="4534 5678 9012 3456"
            />
            <Cards
              cvc="212"
              expiry="07/26"
              name="BERNICE TEO"
              number="2334 5678 9012 3456"
            />
            <Cards
              cvc="123"
              expiry="07/26"
              name="BERNICE TEO"
              number="6234 5678 9012 3456"
            />
          </div>
          
          <div className="flex m-4 space-x-6">{/* <CardCarousel/>   */}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
