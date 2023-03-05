import React from "react";

const Card = () =>  {

  return (
    <div class="flex flex-row w-full justify-between p-5">
      <div class="flex flex-col app-bg-gradient-blue w-1/5 h-36 p-4 m-4 rounded-xl app-box-shadow-blue">
        <span class="text-white font-bold mb-auto">Platinum Miles</span>
        <span class="text-white text-xl font-semibold">SCIS Bank</span>
        <span class="text-white text-xs">**** **** **** 4558</span>
      </div>
      <div class="flex flex-col app-bg-gradient-red w-1/5 h-36 p-4 m-4 rounded-xl app-box-shadow-red">
        <span class="text-white font-bold mb-auto">Premium Miles</span>
        <span class="text-white text-xl font-semibold">SCIS Bank</span>
        <span class="text-white text-xs">**** **** **** 4558</span>
      </div>
      <div class="flex flex-col app-bg-gradient-green w-1/5 h-36 p-4 m-4 rounded-xl app-box-shadow-green">
        <span class="text-white font-bold mb-auto">Freedom</span>
        <span class="text-white text-xl font-semibold">SCIS Bank</span>
        <span class="text-white text-xs">**** **** **** 4558</span>
      </div>
      <div class="flex flex-col app-bg-gradient-yellow w-1/5 h-36 p-4 m-4 rounded-xl app-box-shadow-yellow">
        <span class="text-white font-bold mb-auto">Shopping</span>
        <span class="text-white text-xl font-semibold">SCIS Bank</span>
        <span class="text-white text-xs">**** **** **** 4558</span>
      </div>
    </div>
  );
};

export default Card;
