import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  let {filteredProducts :products, layout} = useFilterContext()
  if(layout === 'list-view'){
    return <ListView products={products} />
  }
  return (
    <GridView products={products}/>
  );
};

export default ProductList;
