

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Shop from './pages/shop/Shop';
import Header from './components/header';
import Cart from './pages/cart/Cart';
import Footer from './components/footer';
import { ShopContextProvider } from './components/context/shopcontext';


function App() {
  return (
    <div className='flex flex-col min-h-screen'>
    <BrowserRouter >
    <ShopContextProvider>
    <Header />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
     <Footer />
     </ShopContextProvider>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
