import { Link } from "react-router-dom";
import { HiMiniStop } from "react-icons/hi2";
import { useState } from "react";
import Editore from "../TextEditore/Editore";
// import ProductForm from "./ProductForm";
// import Modal from "../Modal/Modal";

export default function AddNewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [colors, setColors] = useState("");
  const [count, setCount] = useState("");
  const [sale, setSale] = useState("");
  const [popularity, setPopularity] = useState("");
  const [productDesc, setProductDesc] = useState("");

  const productData = {
    title,
    price,
    count,
    img,
    popularity,
    sale,
    colors,
    productDesc,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className=" mb-20 ">
      <h2 className="font-bold text-xl tracking-wide md:text-2xl mb-2">
        Create a new product
      </h2>
      <div className="flex items-center text-gray-600 gap-x-4 ">
        <Link to={"/"}>Dashbord</Link>
        <HiMiniStop size={6} />
        <Link to={"/prodcut"}>Product</Link>
      </div>
      {/* <ProductForm onSubmit={handleSubmit} mode="create" /> */}

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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder=" "
                    className="input-form p-4 border w-full rounded-md border-gray-200"
                  />
                  <label className="label-input-form px-px">Product Name</label>
                </div>

                {/*  Product  Description */}
                {/* <div className="w-full  flex-col flex  relative">
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
              </div> */}

                <div className="w-full max-w-full ">
                  <Editore value={productDesc} onChange={setProductDesc} />
                </div>

                {/* Drop Image Product */}
                {/* <div className="flex flex-col">
                <span>Images</span>
                <label
                  className="relative h-[450px] cursor-pointer
               bg-gray-100 border w-full mt-2 border-gray-200 rounded-md  "
                >
                  <input
                    // onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    className=" hidden"
                  />
                  {mode === "update" && product.id ? (
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={`/images/Products/product-${product.id}.webp`}
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                  ) : (
                    <div className="absolute items-center top-1/5   left-1/2 transform -translate-x-1/2">
                      <div className="flex flex-col text-center items-center">
                        <img src="/drop-img.png" alt="" className="w-23" />
                        <span className="font-bold">Drop or select file</span>
                        <span className="text-gray-600">
                          Drop files here or click to browser through your
                          machine
                        </span>
                      </div>
                    </div>
                  )}
                </label>
              </div> */}
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
                      value={colors}
                      onChange={(e) => setColors(e.target.value)}
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
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                      className="input-form p-4 border w-full rounded-md border-gray-200"
                    />
                    <label className="label-input-form px-px">
                      Product Count
                    </label>
                  </div>
                  <div className="w-full md:col-span-2  col-span-1 flex-col flex  relative">
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder=" "
                      type="text"
                      className="input-form p-4 border w-full rounded-md border-gray-200"
                    />
                    <label className="label-input-form px-px">
                      Product Price
                    </label>
                  </div>
                  {/* Product Image Name */}
                  <div className="w-full  flex-col flex  relative">
                    <input
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                      type="text"
                      placeholder=" "
                      className="input-form p-4 border w-full rounded-md border-gray-200"
                    />
                    <label className="label-input-form px-px">
                      Product Image Name
                    </label>
                  </div>
                  {/* Product Image Name */}
                  <div className="w-full  flex-col flex  relative">
                    <input
                      value={popularity}
                      onChange={(e) => setPopularity(e.target.value)}
                      type="text"
                      placeholder=" "
                      className="input-form p-4 border w-full rounded-md border-gray-200"
                    />
                    <label className="label-input-form px-px">
                      Product Popularity
                    </label>
                  </div>
                  {/* Product Sale */}
                  <div className="w-full  flex-col flex  relative">
                    <input
                      value={sale}
                      onChange={(e) => setSale(e.target.value)}
                      type="text"
                      placeholder=" "
                      className="input-form p-4 border w-full rounded-md border-gray-200"
                    />
                    <label className="label-input-form px-px">
                      Product Sale
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-end w-full  mt-5">
              <button
                onChange={handleSubmit}
                type="submit"
                className="p-2  rounded-md text-white  text-center   tracking-wide
             bg-gray-800 flex justify-center cursor-pointer w-36"
              >
                {/* {mode === "update" ? "Update Product" : " Create Product"} */}
                add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
