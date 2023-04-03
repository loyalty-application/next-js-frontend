import Link from "next/link";
import { Router } from "next/router";
import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useAuth } from "../../contexts/AuthContext";


const Navbar = () => {
    const { user, loading, logout } = useAuth()
    const handleLogout = () => {
        logout()
    }

    useEffect(() => {
        if (!user) {
            Router.replace('/login');
        }
        if (!loading) { }
    }, [user, loading])

    return (
        <div className="w-screen h-20 shadow-xl z-[100] sticky top-0 bg-gradient-to-r from-gray-100 to-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center max-w-full h-full px-2 2xl:px-16">
                <div className="h-auto w-auto pl-5">
                    <Link href="/" className="text-2xl text-base font-bold text-[#183483]">ASCLoyalty</Link>
                </div>
                <div>
                    <ul className="hidden sm:flex sticky top-0">
                        <Link href="#home">
                            <li className="mx-5 hover:underline text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Home
                            </li>
                        </Link>
                        <button
                            onClick={(e) => { e.preventDefault(); handleLogout() }}
                        >
                            <li className="mx-5 hover:underline text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                {user ? "Log Out" : "Log In"}
                            </li>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

{ /* <header class="bg-white lg:py-8">
<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <!-- lg+ -->
    <nav class="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-24 lg:px-8 lg:py-6">
        <div class="flex-shrink-0">
            <a href="#" title="" class="flex">
                <img class="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
            </a>
        </div>

        <button type="button" class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>

            <!-- <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg> -->
        </button>

        <div class="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
        </div>

        <div class="hidden lg:flex lg:items-center lg:space-x-10">
            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign up </a>

            <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sign in </a>
        </div>
    </nav>

    <!-- xs to lg -->
    <nav class="flex flex-col py-4 space-y-2 lg:hidden">
        <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Features </a>

        <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Solutions </a>

        <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Resources </a>

        <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Pricing </a>
    </nav>
</div>
</header>
*/ }

