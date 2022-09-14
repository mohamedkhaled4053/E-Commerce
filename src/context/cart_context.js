import React, { useEffect, useContext, useReducer, useState } from 'react';
import reducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  // helper funtions
  function addToCart(id, amount, color, product) {
    let { name, price, images, stock } = product;

    let finded = cart.find((item) => item.id === id + color);
    let newCart;

    if (finded) {
      let index = cart.indexOf(finded);
      newCart = [...cart];
      newCart[index].amount += amount;
    } else {
      let newItem = {
        id: id + color,
        sku: id,
        amount,
        color,
        name,
        price,
        image: images[0].url,
        max: stock,
      };
      newCart = [...cart, newItem];
    }

    setCart(newCart);
  }

  function deleteItem(id) {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function toggleAmount(type, id) {
    // find target item then increase or decrease it
    let  newCart = cart.map((item) => {
        if (item.id === id) {
          if (type === 'increase') {
            if (item.amount >= item.max) {
              return { ...item, amount: item.max };
            }
            return { ...item, amount: item.amount + 1 };
          } else {
            // prevent amount to be less than 1
            if (item.amount <= 1) {
              return { ...item, amount: 1 };
            }
            return { ...item, amount: item.amount - 1 };
          }
        } else {
          return item;
        }
      });
      setCart(newCart)
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteItem, clearCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
