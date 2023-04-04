import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";


const Navbar = () => {
    const { user, loading, logout } = useAuth()
    const router = useRouter();

    const handleLogout = () => {
        logout()
    }

    useEffect(() => {
        if (!user) {
            router.replace('/admin/login');
        }
        if (!loading) {

        }
    }, [user, loading])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="w-screen h-20 shadow-xl z-[100] sticky top-0 bg-gradient-to-r from-gray-100 to-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center max-w-full h-full px-2 2xl:px-16">
                <div className="h-auto w-auto pl-5">
                    <Link href="/admin" className="text-2xl text-base font-bold text-[#183483]">ASCLoyalty</Link>
                </div>
                <div>
                    <ul className="hidden sm:flex sticky top-0">
                        <Link href="/admin">
                            <li className="mx-5 hover:underline text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Transactions
                            </li>
                        </Link>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link href="/admin/campaigns" >
                                    View Campaigns
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="/admin/campaigns/create" >
                                    Create Campaigns
                                </Link>
                            </MenuItem>
                        </Menu>
                        <Link
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="mx-5 hover:underline text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            href={"#"}
                        >
                            <li className="mx-5 hover:underline text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                Campaigns
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
        </div >
    );
};

export default Navbar;
