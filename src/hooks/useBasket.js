import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";

const useBasket = () => useContext(BasketContext);

export default useBasket;