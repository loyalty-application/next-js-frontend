import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Home/Card";


const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="w-full h-screen md:w-auto md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="p-4">
            <p className="font-bold text-2xl pt-10 px-5">
              {" "}
              Good to see you here, username!
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <Card />
          </div>
          <div className="flex m-4 space-x-6">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
