import React from "react";
import CollapsibleTable from "./components/CollapsibleTable";
import SideNavbar from "./components/SideNavbar";

const Transactions = () => {
  return (
    <div>
      <div className="min-h-screen md:flex ">
      <div className='h-fit'>
        <SideNavbar />
      </div>
      <div className="w-full md:w-auto h-max md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
        <CollapsibleTable />
      </div>
    </div>    
    </div>
  );
};

export default Transactions;
