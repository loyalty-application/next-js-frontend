import React from "react";
import Card from "./Card";
import RightBar from "./RightBar";
import Table from "./Table";

const Container = () => {
  return (
    <div className="h-fit bg-gradient-to-r from-gray-100 to-gray-50">
      <div className="p-4">
        <p className="font-bold text-2xl pt-10 px-5">Wallet</p>
      </div>
      <div className="flex flex-row justify-between">
        <Card />
      </div>
      <div className="flex m-4 space-x-6">
        <RightBar />
        <Table />
      </div>
    </div>
  );
};

export default Container;
