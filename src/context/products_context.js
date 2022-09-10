import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { products_url as url } from '../utils/constants';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
  showSidebar: false,
  products: [],
  loading: false,
  error: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialState);

  // helper functions
  function openSidebar() {
    dispatch({ type: SIDEBAR_OPEN });
  }

  function closeSidebar() {
    dispatch({ type: SIDEBAR_CLOSE });
  }

  // fetch functions
  function fetchProducts() {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    fetch(url)
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res }))
      .catch((err) => dispatch({ type: GET_PRODUCTS_ERROR }));
  }

  // effects
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
