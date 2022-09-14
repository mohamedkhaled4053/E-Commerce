import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    let {
      id,
      amount,
      color,
      product: { name, price, images, stock },
    } = action.payload;

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


    return {...state, cart:[...state.cart, newItem]};
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
