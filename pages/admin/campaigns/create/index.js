import React from "react";
import campaign from "../../../../public/images/campaign.png";
import {
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import AdminLayout from "../../../../layouts/AdminLayout";
import { CARD_TYPE } from "../../../../config/CardTypes";
import api from "../../../../config/Api";
// import DateField from "./BasicDateField";
import { v4 as uuidv4 } from "uuid";

const AdminCampaignPage = () => {
  const [cardType, setCardType] = useState("");
  const [minSpend, setMinSpend] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const campaignId = uuidv4();

  const handleSubmit = () => {
    createCampaign();
  };

  //   const createCampaign = async () => {
  //     try {
  //       console.log(
  //         campaignId,
  //         cardType,
  //         minSpend,
  //         merchantName,
  //         description,

  //         startDateFormatted,

  //         endDateFormatted,
  //         campaigns
  //       );

  //       const res = await api.post(`/api/v1/campaign`, {
  //         campaigns: [
  //           {
  //             campaign_id: campaignId,
  //             card_type: cardType,
  //             min_spend: minSpend,
  //             description: description,
  //             end_date: endDateFormatted,
  //             merchant: merchantName,
  //             start_date: startDateFormatted,
  //           },
  //         ],
  //       });
  //       console.log(res.data);
  //       console.log(res);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  const [campaigns, setCampaigns] = useState([]);

  const createCampaign = async () => {
    try {
      const campaign = {
        campaign_id: campaignId,
        min_spend: parseFloat(minSpend),
        card_type: cardType,
        description: description,
        end_date: endDateFormatted,
        merchant: merchantName,
        start_date: startDateFormatted,
      };

      const campaigns = [campaign];

      const res = await api.post("/api/v1/campaign", { campaigns });

      setCampaigns([...campaigns, campaign]);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const startDateFormatted = startDate
    ? new Date(startDate).toISOString().slice(0, 16).replace("T", " ")
    : "";
  const endDateFormatted = endDate
    ? new Date(endDate).toISOString().slice(0, 16).replace("T", " ")
    : "";

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
                  <h3 className="text-2xl font-semibold text-black">
                    Campaign
                  </h3>

                  <form action="#" method="POST" className="mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                      <div>
                        <label
                          htmlFor="cardType"
                          className="text-base font-medium text-gray-900"
                        >
                          Card Type
                        </label>
                        <div className="mt-2.5 relative">
                          <FormControl
                            id="cardType"
                            name="cardType"
                            className="w-full"
                          >
                            <Select
                              value={cardType}
                              onChange={(e) => setCardType(e.target.value)}
                            >
                              {Object.keys(CARD_TYPE).map((k) => {
                                return (
                                  <MenuItem key={k} value={k}>
                                    {CARD_TYPE[k]}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="merchantName"
                          className="text-base font-medium text-gray-900"
                        >
                          Merchant
                        </label>
                        <div className="mt-2.5 relative">
                          <TextField
                            fullWidth
                            value={merchantName}
                            onChange={(e) => setMerchantName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          Minimum spend amount
                        </label>
                        <div className="mt-2.5 relative">
                          <TextField
                            fullWidth
                            type="number"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  $
                                </InputAdornment>
                              ),
                            }}
                            value={minSpend}
                            onChange={(e) => setMinSpend(e.target.value)}
                          />
                        </div>
                      </div>
                      <br></br>
                      <div>
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          Start Date
                        </label>
                        <div className="mt-2.5 relative">
                          <TextField
                            fullWidth
                            type="datetime-local"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          End Date
                        </label>
                        <div className="mt-2.5 relative">
                          <TextField
                            fullWidth
                            type="datetime-local"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid col-span-2">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-2.5 relative">
                          <TextField
                            fullWidth
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-500 bg-[#183483] border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                          }}
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
                    <Image
                      alt="campaign"
                      className="p-16"
                      src={campaign}
                    ></Image>
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

AdminCampaignPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminCampaignPage;
