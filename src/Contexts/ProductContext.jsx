import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/products/");
      const products = await res.json();
      console.log(res);
      setAllProducts(products);
    } catch (error) {
      console.error("Error Fetching Allproducts", error);
    }
  };

  {/* Delete Product */}  
  const deleteProduct = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok){
       setAllProducts((prev)=>prev.filter(product => product.id !== id))
      } else {
        console.error("Error deleting product:", res.statusText);
      }
    } catch (err) {
        console.error("Error deleting product:", err);
      
    }
  };



  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ allProducts, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);


