import React from "react";
import Slider from "./Slider";
import BoxActivity from "./BoxActivity";
import DonutChart from "./Charts/DonutChart";
import StackedBarChart from "./Charts/StackedBarChart";
import Invoice from "./Invoice";
export default function Home() {
  return (
    <div className="mt-3">
      {/* Info Cards */}
      <div className="flex flex-col lg:flex-row  gap-5 ">
        {/* Left Card */}
        <div className="card-info-bg w-full lg:w-2/3 h-[250px] md:h-[300px]  flex justify-between rounded-2xl p-8 md:p-16">
          <div className="">
            <h2 className="text-white  font-bold text-xl md:text-3xl">
              Welcom back
            </h2>
            <h2 className="text-white  font-bold text-xl md:text-3xl">
              Zarrin Ebrahimi
            </h2>
            <span className="text-gray-200 md:w-[500px] my-3 block md:text-base text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque, culpa?
            </span>
            <button
              type="botton"
              className="bg-green-700  rounded-md font-bold my-2 px-2 p-1.5 text-white"
            >
              Go now
            </button>
          </div>
          <div>
            <img
              src="./images/character-present.webp"
              alt=""
              className="w-30"
            />
          </div>
        </div>
        {/* Right Card */}
        <div className=" w-full lg:w-1/3">
          <Slider />
        </div>
      </div>
      {/* Box Activity User */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        <BoxActivity
          title={"Total active users"}
          number={"18,765"}
          percent={"+2.6%"}
        />
        <BoxActivity
          title={"Total installed"}
          number={"1,765"}
          percent={"+1.3%"}
        />
        <BoxActivity
          title={"Total downloads"}
          number={"10,760"}
          percent={"+10.3%"}
        />
      </div>
      {/* Dounut Chart */}
      <div className=" mb-6  gap-5  flex flex-col lg:flex-row ">
        <div className="shadow p-3 w-full lg:w-1/3 rounded-2xl flex flex-col items-center lg:items-start ">
          <span className="font-bold tracking-wide text-gray-900">
            Current download
          </span>
          <p className="text-sm text-gray-400">
            Downloaded by operating system
          </p>
          <DonutChart />
        </div>
        <div className="shadow p-3  w-full lg:2/3 rounded-2xl flex flex-col items-center lg:items-start ">
          <div className="mb-3">
            <span className="font-bold tracking-wide text-gray-900">
              Area installed
            </span>
            <p className="text-sm text-gray-400">(+43%) than last year</p>
          </div>
          <StackedBarChart />
        </div>
      </div>
      {/* Invoice Component */}
      <div className="flex flex-col lg:flex-row gap-5 mb-12">
        <div className="w-full lg:w-2/3">
          <Invoice />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-y-2">
          <div className="bg-green-200/20 p-3 rounded-xl shadow flex items-center gap-5">
            <div>
              <img src="/images/icon-chart-2.png" alt="" className="w-23   h-20" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">2345,678</span>
              <span className="text-gray-800">Conversion</span>
            </div>
          </div>
          <div className="bg-green-200/20 p-3 rounded-xl shadow flex items-center gap-5">
            <div>
              <img src="/images/icon-chart-1.png" alt="" className="w-26  h-20" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">2345,678</span>
              <span className="text-gray-800">Conversion</span>
            </div>
          </div>
          <div className="bg-green-200/20 p-3 rounded-xl shadow flex items-center gap-5">
            <div>
              <img src="/images/icon-chart-3.png" alt="" className="w-26  h-20" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">2345,678</span>
              <span className="text-gray-800">Conversion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
