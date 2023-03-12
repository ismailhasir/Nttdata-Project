import { useContext } from "react";
import { ProductContext } from "../contexts/ProductsContext";

const useProduct = () => useContext(ProductContext);

export default useProduct;