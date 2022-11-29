import React, { useEffect, useContext, useState } from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  //states
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  let [alertId, setAlertId] = useState(null);

  // helper funtions
  function addToCart(id, amount, color, product) {
    let { name, price, images, stock } = product;
    // check if we have the same item with the same color in the cart before
    let finded = cart.find((item) => item.id === id + color);
    let newCart;

    // if we have it before just increase its amount
    if (finded) {
      let index = cart.indexOf(finded);
      newCart = [...cart];
      newCart[index].amount += amount;

      // if we don't have it add it
    } else {
      let newItem = {
        id: id + color,
        sku: id,
        amount,
        color,
        name,
        price,
        image: images[0].url,
        stock,
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

  function toggleAmount(type, id, sku) {
    // find target item then increase or decrease it
    let newCart = cart.map((item) => {
      if (item.id === id) {
        if (type === 'increase') {
          // compute the total amount of item we have for the same product
          let totalAmountOfKind = cart.reduce((total, item) => {
            if (item.sku === sku) {
              total += item.amount;
            }
            return total;
          }, 0);

          // check if we still have items in stock to add to cart for this kind
          // if we don't have we won't increase the amount and we will have red lighting as alert
          let allowedIncrease = item.stock - totalAmountOfKind;
          if (allowedIncrease <= 0) {
            setAlertId(id)
            return item;
          }
          // if we still have items in stock we can increase the amount
          return { ...item, amount: item.amount + 1 };

          // decreasing case
        } else {
          // prevent amount to be less than 1 and fire alert red lighting
          if (item.amount <= 1) {
            setAlertId(id)
            return { ...item, amount: 1 };
          }
          // or decrease the amount
          return { ...item, amount: item.amount - 1 };
        }
      } else {
        return item;
      }
    });
    setCart(newCart);
  }

  // effects
  // store cart in local storage when changing
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // cancel alert directly after being fired
  useEffect(() => {
    setAlertId(null)
  }, [alertId]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteItem, clearCart, toggleAmount,setAlertId, alertId }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
