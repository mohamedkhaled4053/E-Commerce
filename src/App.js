import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/porducts/:id' element={<SingleProduct />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
