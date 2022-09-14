import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
  products: [],
  filteredProducts: [],
  layout: 'grid-view',
  sort: 'price-lowest',
  minPrice: 0,
  maxPrice: 0,
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  let { products } = useProductsContext();
  let [state, dispatch] = useReducer(reducer, initialState);

  // helper funtions
  function setGridView() {
    dispatch({ type: SET_GRIDVIEW });
  }
  function setListView() {
    dispatch({ type: SET_LISTVIEW });
  }
  function updateSort(sort) {
    dispatch({ type: UPDATE_SORT, payload: sort });
  }
  function updateFilters(name, value) {
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  }
  function clearFilters(name, value) {
    dispatch({ type: CLEAR_FILTERS });
  }

  // effects
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
