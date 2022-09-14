import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  let { filteredProducts: products, layout } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (layout === 'list-view') {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
