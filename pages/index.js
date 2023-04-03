import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import cards from "../public/images/card.png";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from "../contexts/AuthContext";
import { Router } from "next/router";
import Skeleton from "react-loading-skeleton";

export default function Home() {
    const { user, loading, logout } = useAuth()

    const handleLogOut = () => {
        logout()
    }

    return (
        <div className="bg-gradient-to-b from-[#191D40] relative to-[#08201D]">
            <header className="absolute inset-x-0 top-0 z-10 w-full">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <h1 className="text-white text-2xl font-bold">ASCLoyalty</h1>
                            </a>
                        </div>

                        <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
                            {user ? <Link
                                href="/dashboard"
                                title=""
                                className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white "
                                role="button"
                            >
                                Home
                            </Link> : null}
                            {

                                user ? <button
                                    title=""
                                    className="btn hover:btn:hover"
                                    role="button"
                                    onClick={e => { e.preventDefault(); handleLogOut() }
                                    }
                                >
                                    Log Out
                                </button> :
                                    <Link
                                        href="/login"
                                        title=""
                                        className="btn hover:btn:hover"
                                        role="button"
                                    >
                                        Log In
                                    </Link>

                            }
                        </div>

                        <button
                            type="button"
                            className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
                        >
                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>

                            <svg
                                className="hidden w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <section className="relative w-full lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="text-4xl font-bold sm:text-6xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white">
                                {" "}
                                Transaction processing made easy.{" "}
                            </span>
                        </h1>
                        <p className="mt-5 text-base text-white sm:text-xl">
                            Process millions of data, launch and manage campaigns.
                        </p>

                        <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
                            <div className="flex items-center">
                                <ElectricBoltIcon style={{ fill: "gold" }} />
                                <p className="ml-3 text-sm text-white">Performant</p>
                            </div>

                            <div className="flex items-center">
                                <QueryBuilderIcon style={{ fill: "gold" }} />
                                <p className="ml-3 text-sm text-white">Highly available</p>
                            </div>

                            <div className="flex items-center">
                                <LockIcon style={{ fill: "gold" }} />
                                <p className="ml-3 text-sm text-white">Secured & safe</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-10 px-40">
                    <Image
                        alt="cards"
                        src={cards}
                        className=" object-scale-down flex justify-center items-center p-2 scale-75 hover:scale-90 duration-1000 opacity-[80%] hover:opacity-100"
                    />
                </div>
            </section>
        </div>
    );
};

