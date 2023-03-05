import React from "react";

import Card from "./Card";
// import Middle from './Middle'
import RightBar from "./RightBar";

const Container = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-50">
      <div className=" p-4">
        <p className="font-bold text-2xl px-4">Wallet</p>
      </div>
      <div className="flex flex-row justify-between">
        <Card />
      </div>
      <div className="flex m-4 space-x-6">
        {/* <Middle /> */}
        <RightBar />
      </div>
    </div>
  );
};

export default Container;
