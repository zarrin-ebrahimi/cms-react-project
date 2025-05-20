import { useParams } from 'react-router-dom';
import {React, useEffect} from 'react';
import ProductForm from './ProductForm'
import { useProduct } from '../../Contexts/ProductContext';
import { Link } from 'react-router-dom'
import { HiMiniStop } from "react-icons/hi2";

export default function EditProduct() {
  const {id} = useParams()
  const {allProducts} = useProduct() 
  const mainProduct = allProducts.find((p) => p.id === Number(id))
  if(!mainProduct) return <p>Product not found</p>

useEffect(()=>{
  console.log('Heelo000000000000000000000000000000000000 Product', mainProduct);
})
  
  return (
    <div className=" mb-20 ">
      <h2 className="font-bold text-xl tracking-wide md:text-2xl mb-2">
        Edit product
      </h2>
      <div className="flex items-center text-gray-600 gap-x-4 ">
        <Link to={"/"}>Dashbord</Link>
        <HiMiniStop size={6} />
        <Link to={"/prodcut"}>Product</Link>
      </div>
        <ProductForm 
        mode='update' 
        product={mainProduct}
        />
    </div>
  )
}
