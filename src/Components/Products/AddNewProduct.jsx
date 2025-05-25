import { Link } from "react-router-dom";
import { HiMiniStop } from "react-icons/hi2";
import ProductForm from "./ProductForm";
// import Modal from "../Modal/Modal";

export default function AddNewProduct() {


  const handleSubmit = async (productData) => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    console.log("res.ok:", res.ok);
    console.log("res.status:", res.status);

    const text = await res.text();
    console.log("Response text:", text);

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = text ? JSON.parse(text) : {};
    console.log("Parsed response:", data);
  } catch (err) {
    console.error("Error during submit:", err.message);
  }
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
