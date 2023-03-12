import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const ProductContext = createContext();



const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await axios.get(
              "https://honey-badgers-ecommerce.glitch.me/products"
            );
            console.log(response);
            setProducts(response.data);
          } catch (error) {}
    }
    useEffect(() => {
     getProducts()
    },[])

  return (
    <ProductContext.Provider
      value={{
      products
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

