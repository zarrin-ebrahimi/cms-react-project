import React from "react";
import Slider from "./Slider";
export default function Home() {
  return (
    <div  className="mt-3">
      {/* Info Cards */}
      <div className="flex gap-x-5 ">
        {/* Left Card */}
        <div className="card-info-bg w-2/3 h-[300px]  flex justify-between rounded-2xl p-16">
          <div className="">
            <h2 className="text-white  font-bold text-3xl">Welcom back</h2>
            <h2 className="text-white  font-bold text-3xl">Zarrin Ebrahimi</h2>
            <span className="text-gray-200 w-[500px] my-3 block">
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
        <div  className="w-1/3">
            <Slider/>
        </div>
      </div>
    </div>
  );
}
