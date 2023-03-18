import React from "react";
import SideNavbar from "./components/SideNavbar";
import Card from "./components/Card";
import RightBar from "./components/Redeem";

const Dashboard = () => {
  return (
    <div className="min-h-screen md:flex ">
      <div className="h-fit">
        <SideNavbar />
      </div>
      <div className="w-full md:w-auto h-max md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="h-fit bg-gradient-to-r from-gray-100 to-gray-50">
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
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
