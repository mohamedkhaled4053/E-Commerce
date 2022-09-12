import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  let {products, layout} = useFilterContext()
  if(layout === 'list-view'){
    return <ListView />
  }
  return (
    <GridView products={products}/>
  );
};

export default ProductList;
