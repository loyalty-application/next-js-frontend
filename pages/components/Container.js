import React from "react";

import Card from "./Card";
// import Middle from './Middle'
import RightBar from "./RightBar";

const Container = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-50">
      <div className=" p-4">
        <p className="text-gray-500 text-lg">Elrond</p>
        <p className="font-bold text-2xl transform -translate-y-2">Hei!</p>
      </div>
      <div className="flex flex-row justify-between">
        <Card />
      </div>
      <div className="flex  ml-3 mt-6 space-x-6  mr-4">
        {/* <Middle /> */}
        <RightBar />
      </div>
    </div>
  );
};

export default Container;
