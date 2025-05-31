import { useParams, useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import ProductForm from "./ProductForm";
import { useProduct } from "../../Contexts/ProductContext";
import { Link } from "react-router-dom";
import { HiMiniStop } from "react-icons/hi2";

export default function EditProduct() {

  const navigate = useNavigate()
  const { id } = useParams();
  const { allProducts, editProduct } = useProduct();
  const mainProduct = allProducts.find((p) => p.id === Number(id));
  if (!mainProduct) return <p>Product not found</p>;


  useEffect(() => {
    console.log("Product", mainProduct);
  }, [mainProduct]);


  const handleEditProduct = async (updatedProduct) => {
        try {
          await editProduct(mainProduct.id,updatedProduct)
          console.log('ProductUpdated (:');
          navigate('/product/list')
        } catch(err) {
          console.error(err);
        }
  }


  return (
    <div className=" mb-20 ">
      <h2 className="font-bold text-xl tracking-wide md:text-2xl mb-2">
        Edit product
      </h2>
      <div className="flex items-center text-gray-600 gap-x-4 ">
        <Link to={"/"}>Dashbord</Link>
        <HiMiniStop size={6} />
        <Link to={"/prodcut/list"}>Product</Link>
      </div>
      <ProductForm
        mode="update"
        product={mainProduct}
        onSubmit={handleEditProduct}
      />
    </div>
  );
}
