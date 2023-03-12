import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { ProductProvider } from "./ProductsContext";

const BASKET_KEY = 'basket';

const BasketContext = createContext();

const getInitialBasket = () => {
  const defaultBasket = localStorage.getItem(BASKET_KEY);
  if (!defaultBasket) {
    return [];
  }

  return JSON.parse(defaultBasket);
}

const BasketProvider = (props) => {
  const { children } = props;
  const [basket, setBasket] = useState(getInitialBasket());

  const changeBasket = (newBasket) => {
    localStorage.setItem(BASKET_KEY, JSON.stringify(newBasket));
    setBasket(newBasket);
  }

  const hasAddedItem = (item) => {
    return basket.findIndex((bItem) => bItem.id === item.id) > -1;
  };

  const addItem = (item) => {
    if (hasAddedItem(item)) {
      return;
    };
    changeBasket([...basket, item]);
  };

  const removeItem = (item) => {
    if (!hasAddedItem(item)) {
      return;
    };
    changeBasket([...basket].filter((bItem) => bItem.id !== item.id));
  };

  const toggleItem = (item) => {
    if (hasAddedItem(item)) {
      removeItem(item);
    } else {
      addItem(item);
    }
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        hasAddedItem,
        addItem,
        removeItem,
        toggleItem,
      }}
    >
      <ProductProvider>{children}</ProductProvider>
    </BasketContext.Provider>
  );
};

export { BasketContext, BasketProvider };

BasketProvider.propTypes = {
  children: PropTypes.any,
};