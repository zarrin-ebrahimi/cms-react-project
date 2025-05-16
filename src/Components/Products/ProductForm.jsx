import { useState, useEffect } from "react";
import Editore from "../TextEditore/Editore";

export default function ProductForm({ product = {}, onSubmit, mode = "" }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setPrice(product.price || "");
      setImage(product.image || "");
      setDescription(product.description || "");
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, image, description });
  };

  return (
    <div className=" mb-20 ">
      <div className=" items-center flex flex-col  ">
        <form
          onSubmit={handleSubmit}
          className="   max-w-3xl flex  w-full flex-col  mt-4 "
        >
          <div className=" shadow-lg rounded-2xl ">
            {/* Form Header */}
            <div className=" border-b-1 border-gray-200 gap-y-2 flex flex-col p-5">
              <span className="fonr-bold md:text-xl">Details</span>
              <span className="text-gray-400  text-[14px]">
                Title, short description, image...
              </span>
            </div>
            <div className="p-4 flex flex-col gap-y-6">
              {/* Product Name */}
              <div className="w-full  flex-col flex  relative">
                <input
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  type="text"
                  placeholder=" "
                  className="input-form p-4 border w-full rounded-md border-gray-200"
                />
                <label className="label-input-form px-px">Product Name</label>
              </div>

              {/*  Product  Description */}
              <div className="w-full  flex-col flex  relative">
                <textarea
                  // value={description}
                  // onChange={(e)=> setDescription(e.target.value)}
                  type="text"
                  placeholder=" "
                  className="input-form p-4 border w-full resize-none h-36 rounded-md border-gray-200"
                />
                <label className="label-input-form px-px">
                  Sub description
                </label>
              </div>

              <div className="w-full max-w-full ">
                <Editore value={description} onChange={setDescription} />
              </div>

              {/* Drop Image Product */}
              <div className="flex flex-col">
                <span>Images</span>
                <label
                  className="relative h-72 cursor-pointer
               bg-gray-100 border w-full mt-2 border-gray-200 rounded-md  "
                >
                  <input
                   onChange={(e)=> setImage(e.target.files[0])}
                   type="file" 
                   className=" hidden" />
                  <div className="absolute items-center top-1/5 flex flex-col text-center  left-1/2 transform -translate-x-1/2">
                    <img src="/drop-img.png" alt="" className="w-23" />
                    <span className="font-bold">Drop or select file</span>
                    <span className="text-gray-600">
                      Drop files here or click to browser through your machine
                    </span>
                  </div>
                </label>
              </div>
            </div>
            {/* Form Header */}
            <div className=" border-b-1 border-gray-200 gap-y-2 flex flex-col p-5">
              <span className="fonr-bold md:text-xl">Properties</span>
              <span className="text-gray-400  text-[14px]">
                Additional functions and attributes...
              </span>
            </div>
            {/* Adotional attibutes */}
            <div className="p-4  w-full my-5 ">
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5  gap-3">
                <div className="w-full  flex-col flex  relative">
                  <input
                  placeholder=" "
                    type="text"
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Color</label>
                </div>
                <div className="w-full  flex-col flex  relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Product Code</label>
                </div>
                <div className="w-full md:col-span-2  col-span-1 flex-col flex  relative">
                  <input
                    placeholder=" "
                    type="text"
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Product Name</label>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 flex justify-end w-full  mt-5">
            <button
              type="submit"
              className="p-2  rounded-md text-white  tracking-wide
             bg-gray-800 flex cursor-pointer w-32"
            >
              {mode === "update" ? "Update Product" : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
