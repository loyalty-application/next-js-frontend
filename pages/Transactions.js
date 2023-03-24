import React from "react";
import CollapsibleTable from "./components/CollapsibleTable";
import Navbar from "./components/Navbar";

const Transactions = () => {
  return (
    <div>
      <div className="md:flex ">
        <div className="md:w-fit fixed md:h-full z-10">
          <Navbar/>
        </div>
        <div className="w-full md:pl-56 h-fit md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="p-4">
            <p className="font-bold text-2xl pt-10 pl-8">Transactions</p>
          </div>
          <div className="px-10 pb-10">
            <CollapsibleTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
