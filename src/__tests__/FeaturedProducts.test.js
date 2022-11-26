import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { FeaturedProducts } from '../components';
import { ProductsProvider } from '../context/products_context';
import { ProductsResponse } from '../utils/mockConstants';

function MockFeaturedProducts(params) {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <FeaturedProducts />
      </ProductsProvider>
    </BrowserRouter>
  );
}

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(ProductsResponse),
    })
  );
});

beforeEach(() => {
  jest.restoreAllMocks();
});

test('heading should not be there at the beginning', () => {
  render(<MockFeaturedProducts />);
  let heading =  screen.queryByRole('heading', { name: 'featured products' });
  expect(heading).toBeNull();
});

test('heading should be there after fetching products', async () => {
  render(<MockFeaturedProducts />);
  let heading = await screen.findByRole('heading', { name: 'featured products' });
  expect(heading).toBeInTheDocument();
});

test('should have three products', async () => {
  render(<MockFeaturedProducts />);
  let products = await screen.findAllByAltText(/product/);
  expect(products.length).toBe(3);
});
