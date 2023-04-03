import React from "react";
import campaign from "../../public/images/campaign.png";
import {
    TextField,
    Button,
    Paper,
    Grid,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    InputAdornment,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import CustomerLayout from "../../components/layouts/CustomerLayout"
// import DateField from "./BasicDateField";

const CampaignPage = () => {
    const [value, setValue] = useState("");
    const [rewardType, setRewardType] = useState("");
    const [minSpend, setMinSpend] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleRewardTypeChange = (event) => {
        setRewardType(event.target.value);
    };

    const handleMinSpendChange = (event) => {
        setMinSpend(event.target.value);
    };

    return (
        <div>
            <section className="py-10 bg-[#F5F6F7] sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            Create a new Campaign
                        </h2>
                        <p className="max-w-xl mt-10 mx-auto text-base leading-relaxed">
                            Swipe your way to savings with our campaign credit card today!
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
                        <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
                            <div className="lg:col-span-3">
                                <div className="p-6 sm:p-10">
                                    <h3 className="text-2xl font-semibold text-black">Campaign</h3>

                                    <form action="#" method="POST" class="mt-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                            <div>
                                                <label
                                                    for=""
                                                    className="text-base font-medium text-gray-900"
                                                >
                                                    {" "}
                                                    Card Type{" "}
                                                </label>
                                                <div className="mt-2.5 relative">
                                                    <FormControl className="w-full">
                                                        <InputLabel>Choose a card type</InputLabel>
                                                        <Select value={value} onChange={handleChange}>
                                                            <MenuItem value={"scis_freedom"}>
                                                                SCIS Freedom
                                                            </MenuItem>
                                                            <MenuItem value={"scis_platinummiles"}>
                                                                SCIS PlatinumMiles
                                                            </MenuItem>
                                                            <MenuItem value={"scis_premiummiles"}>
                                                                SCIS PremiumMiles
                                                            </MenuItem>
                                                            <MenuItem value={"scis_shopping"}>
                                                                SCIS Shopping
                                                            </MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    for=""
                                                    className="text-base font-medium text-gray-900"
                                                >
                                                    {" "}
                                                    Merchant{" "}
                                                </label>
                                                <div className="mt-2.5 relative">
                                                    <input
                                                        type="text"
                                                        name=""
                                                        id=""
                                                        placeholder="Merchant name"
                                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    for=""
                                                    className="text-base font-medium text-gray-900"
                                                >
                                                    {" "}
                                                    Rewards{" "}
                                                </label>
                                                <div className="mt-2.5 relative">
                                                    <FormControl className="w-full">
                                                        <InputLabel>Choose a reward type</InputLabel>
                                                        <Select value={value} onChange={handleChange}>
                                                            <MenuItem value={"cashback"}>Cashback</MenuItem>
                                                            <MenuItem value={"miles"}>Miles</MenuItem>
                                                            <MenuItem value={"points"}>Points</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    for=""
                                                    className="text-base font-medium text-gray-900"
                                                >
                                                    {" "}
                                                    Minimum spend amount{" "}
                                                </label>
                                                <div className="mt-2.5 relative">
                                                    <TextField
                                                        type="number"
                                                        name=""
                                                        id=""
                                                        placeholder="Minimum spend amount"
                                                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    $
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        value={minSpend}
                                                        onChange={handleMinSpendChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-500 bg-[#183483] border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                                >
                                                    Create Campaign
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="bg-gray-100 lg:col-span-2">
                                <div className="h-full p-6 sm:p-10">
                                    <div className="flex flex-col justify-center h-full bg-[#F5F6F7]">
                                        <Image className="p-16" src={campaign}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

CampaignPage.getLayout = function getLayout(page) {
    return (
        <CustomerLayout>
            {page}
        </CustomerLayout>
    )
}

export default CampaignPage;
