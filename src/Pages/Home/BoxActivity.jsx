import React from "react";
import { FcLineChart } from "react-icons/fc";
import { IoStatsChart } from "react-icons/io5";
export default function ({title, number, percent}) {
  return (
    <div className="p-5 shadow flex items-center justify-between rounded-2xl">
      <div>
        <span>{title}</span>
        <h2 className="text-3xl text-gray-900 my-3  font-bold">{number}</h2>
        <div className="flex items-center gap-x-1">
          <FcLineChart size={20} />
          <span className="font-bold text-gray-900">{percent}</span>
          <span className="text-gray-600">last 7 days</span>
        </div>
      </div>
      <div  className="flex">
        <IoStatsChart size={50} color="green" />
      </div>
    </div>
  );
}
