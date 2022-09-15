import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Loading ,Error} from './components';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  ErrorPage,
  About,
  Products,
  PrivateRoute,
} from './pages';

function App() {
  let {isLoading, error} = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
