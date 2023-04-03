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
