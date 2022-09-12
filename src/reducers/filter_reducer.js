import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice
    if(action.payload.length > 0){
       maxPrice = action.payload.reduce((max, product)=>{
        if(product > max){
          return product
        }
        return max
      })
    }

    return {
      ...state,
      products: action.payload,
      filteredProducts: [...action.payload],
      maxPrice
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, layout: 'grid-view' };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, layout: 'list-view' };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    let newProducts = [...state.filteredProducts];
    if (state.sort === 'price-lowest') {
      newProducts.sort((a, b) => a.price - b.price);
    }
    if (state.sort === 'price-highest') {
      newProducts.sort((a, b) => b.price - a.price);
    }
    if (state.sort === 'name-a') {
      newProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (state.sort === 'name-z') {
      newProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filteredProducts: newProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    let {name ,value} = action.payload
    return { ...state, filters: {...state.filters, [name]: value} };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
