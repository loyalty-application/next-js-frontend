import React from "react";
import Card from "./Home/Card";
import Rewards from "./Rewards";

const Container = () => {
  return (
    <div className="h-fit bg-gradient-to-r from-gray-100 to-gray-50">
      <div className="p-4">
        <p className="font-bold text-2xl pt-10 px-5"> Good to see you here, user!</p>
      </div>
      <div className="flex flex-row justify-between">
        <Card />
      </div>
      <div className="flex m-4 space-x-6">
        <Rewards />
      </div>
    </div>
  );
};

export default Container;
