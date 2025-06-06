import React, { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";

export default function AddUser() {
  const [username, setUsername] = useState("");
  const [firsname, setFirsname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [score, setScore] = useState("");
  const [buy, setBuy] = useState("");

  return (
    <div className="md:max-w-5/6 m-auto">
      {/* Header Container */}
      <div className="flex items-center justify-between mt-3  ">
        <div className="flex items-center gap-x-1.5  font-bold">
          <GoChevronLeft size={20} />
          Back
        </div>
        <div className="flex  items-center gap-x-3.5">
          <FaHeart size={25} className="text-gray-500" />
          <MdEdit size={25} className="text-gray-500" />
          <span className="cursor-pointer bg-gray-950 text-white py-1.5 px-3 tracking-wide rounded-md">
            Published
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-gray-900 font-bold  my-5">
          Create a new user
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-5 w-full">
        <div className="bg-white shadow-md lg:w-1/3  rounded-2xl flex items-center justify-center w-full  ">
          {/* Drop Image Product */}
          <div className="flex flex-col items-center  ">
            <label
              className="relative h-[120px]  cursor-pointer rounded-full
               bg-gray-100 border w-[120px]  mt-2 border-gray-200   "
            >
              <input type="file" className=" hidden" />
              <div className="absolute items-center inset-0 top-1/3">
                <div className="flex flex-col text-center items-center">
                  <BsCameraFill size={30} className="text-gray-400" />
                  <span className="text-gray-400  text-xs">Upload Photo</span>
                </div>
              </div>
            </label>
            <span className="text-xs max-w-36 text-center text-gray-400  mt-5">
              Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb
            </span>
          </div>
        </div>
        {/* Form */}
        <form className=" flex items-center justify-center w-full lg:w-2/3 ">
          <div className="bg-white  p-5 w-full  rounded-2xl shadow-md ">
            <div className=" flex gap-4  w-full ">
              {/* Left Inputs */}
              <div className="flex flex-col w-full gap-y-5">
                {/* Username Input */}
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Usesrname</label>
                </div>
                {/* fristname Input */}
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={firsname}
                    onChange={(e) => setFirsname(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Fristname</label>
                </div>
                {/* Lastname Input */}
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Lastname</label>
                </div>
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">City</label>
                </div>
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Address</label>
                </div>
              </div>
              {/* right Inputs */}
              <div className=" gap-y-5 flex w-full flex-col">
                {/* Password Input */}
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Password</label>
                </div>
                {/* Phone Input */}
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Phone</label>
                </div>
                {/* Username Input */}
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Email</label>
                </div>
                {/* Score Input */}
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Score</label>
                </div>
                {/* Buy Input */}
                <div className="w-full  flex-col flex  relative">
                  <input
                    value={buy}
                    onChange={(e) => setBuy(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Buy</label>
                </div>
              </div>
            </div>
            <div className="  flex justify-end mt-6 gap-x-3">
              <button
                type="button"
                className="bg-gray-800 text-white px-4 py-1 rounded w-23 tracking-wide  cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
