import { Link } from "react-router-dom";
import { HiMiniStop } from "react-icons/hi2";
// import { useState } from "react";
import ProductForm from "./ProductForm";
import Modal from "../Modal/Modal";

export default function AddNewProduct() {

  const handleSubmit = (productData) => {
  
    console.log(productData);
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
      <ProductForm onSubmit={handleSubmit} mode="create" />
    </div>
  );
}
