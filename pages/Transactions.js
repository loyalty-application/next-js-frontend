import React from "react";
import CollapsibleTable from "./components/CollapsibleTable";
import SideNavbar from "./components/SideNavbar";


const Transactions = () => {
  return (
    <div>
      <div className="h-screen md:flex ">
        <div>
          <SideNavbar />
        </div>
        <div className="w-full md:w-auto md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="p-4">
            <p className="font-bold text-2xl pt-10 pl-8">
              {" "}
              Transactions
            </p>
          </div>
          <div className="p-10">  <CollapsibleTable /></div>
        
        </div>
      </div>
    </div>
  );
};

export default Transactions;
