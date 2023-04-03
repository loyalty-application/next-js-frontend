import React from "react";
import CollapsibleTable from "../components/CollapsibleTable";
import Navbar from "../components/Navbar";

const Transactions = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="p-10 pb-5 text-center font-bold text-2xl">
                Transactions
            </div>
            <div className="p-20 pt-5">
                <CollapsibleTable />
            </div>
        </div>
    );
};

export default Transactions;
