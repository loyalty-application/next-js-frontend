import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LogoutIcon from "@mui/icons-material/Logout";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function SideNavbar() {
  return (
    <div className="shadow-2xl bg-[#191D40] h-fit">
      <Disclosure as="nav">
        <Disclosure.Button className="p-4 top-4 right-4 inline-flex items-center peer justify-center rounded-md text-gray-800 hover:bg-[#2A4390] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-whitelg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className=" text-xl text-center cursor-pointer font-bold text-[#B4A26C] border-b border-gray-100 pb-4 w-full">
              ASCLoyalty
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <Link href="/Dashboard">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#2A4390] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <DashboardIcon style={{ fill: "white" }} />
                  <h3 className="text-base text-white font-semibold ">
                    Dashboard
                  </h3>
                </div>
              </Link>
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <Link href="/Transactions">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#2A4390] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <ReceiptLongIcon style={{ fill: "white" }} />
                  <h3 className="text-base text-white font-semibold ">
                    Temporary Transactions
                  </h3>
                </div>
              </Link>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#2A4390] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MoreHorizIcon style={{ fill: "white" }} />
                <h3 className="text-base text-white font-semibold ">More</h3>
              </div>
            </div>
            {/* logout */}
            <div className="my-4">
              <Link href="/Landing">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#2A4390] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <LogoutIcon style={{ fill: "white" }} />
                  <h3 className="text-base text-white font-semibold ">
                    Logout
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
