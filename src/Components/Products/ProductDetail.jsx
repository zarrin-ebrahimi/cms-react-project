import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
// import 'react-inner-image-zoom/style.css';
export default function ProductDetail() {
  const { state } = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(state?.product || null);
  const [mainImg, setMainImg] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (product) {
      setMainImg(`/images/Products/product-${product.id}.webp`);
    }

    fetch("http://localhost:3000/api/products/")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, [product]);

  useEffect(() => {
    if (!state) {
      fetch(`http://localhost:3000/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const selectedProductInfo = data.find((p) => p.id === parseInt(id));
          setProduct(selectedProductInfo);
        });
    }
  }, [state, id]);

  if (!product) {
    return <p>Product Not Found...</p>;
  }

  return (
    <div className="md:max-w-5/6 m-auto  ">
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
      {/* Product And Description */}
      <div className=" grid grid-cols-1 xl:grid-cols-2  my-5 items-start gap-x-16   px-4 ">
        {/* Product Images*/}
        <div className="flex flex-col gap-y-3 md:gap-y-4  w-full ">
          <div className=" h-[400px] md:h-[450px]  w-full mx-auto rounded-2xl overflow-hidden relative">
            <InnerImageZoom
              src={mainImg}
              zoomType="hover"
              zoomScale={1.3}
              hideHint={true}
              zoomPreload={true}
              fullscreenOnMobile={true}
              moveType="pan"
              // className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-2 justify-center px-10">
            {allProducts.map((product) => {
              const imgSrc = `/images/Products/product-${product.id}.webp`;
              const isSelected = mainImg === imgSrc;

              return (
                <div
                  key={product.id}
                  className="relative cursor-pointer"
                  onClick={() => setMainImg(imgSrc)}
                >
                  <img
                    src={imgSrc}
                    alt="Product"
                    className={`rounded-xl border-2 transition-all duration-300 ${
                      isSelected ? "border-green-700" : "border-transparent"
                    }`}
                  />

                  {!isSelected && (
                    <div className="absolute bg-white/50 inset-0 w-full h-full z-10 rounded-xl"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Description */}
        <div className=" flex flex-col gap-y-4 mt-5  w-full">
          <span className=" bg-blue-400/40 w-10 text-blue-950 text-sm text-center rounded p-px">
            NEW
          </span>
          <span className="text-orange-600 text-sm font-bold">
            OUT OF STOCK
          </span>
          <span className="font-bold text-xl">{product.title}</span>
          {/* Stars */}
          <div className="flex  items-center">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <span className="text-gray-400 ml-2">
              ({product.popularity}k reviews)
            </span>
          </div>
          <span className="font-bold text-2xl  text-gray-900">
            ${product.price}
          </span>
          <p className="text-gray-600">{product.productDesc}</p>
          <div className="border-gray-200 py-10  border-y my-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 gap-x-2 w-full  justify-stretch   ">
              <button className="bg-gray-300  flex   items-center justify-center gap-x-3  px-10 py-3 rounded-md text-gray-500">
                <FaCartPlus />
                Add to cart
              </button>
              <button className="bg-gray-300 px-10 py-3 rounded-md  flex items-center justify-center gap-x-3 text-gray-500">
                <FaCartPlus />
                Add to cart
              </button>
            </div>
            {/* Actions */}
            <div className="flex justify-center gap-x-6 mt-5">
              <div className="flex items-center gap-x-2 text-gray-700">
                <FaPlus />
                Compare
              </div>
              <div className="flex items-center gap-x-2 text-gray-700">
                <FaHeart />
                Favorite
              </div>
              <div className="flex items-center gap-x-2 text-gray-700">
                <IoMdShare />
                Share
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
