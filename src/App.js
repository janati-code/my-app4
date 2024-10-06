

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
// import Shop from './pages/shop/Shop';
// import Header from './components/header';
// import Cart from './pages/cart/Cart';
// import Footer from './components/footer';
// import { ShopContextProvider } from './components/context/shopcontext';
// import SingleProduct from './pages/single/SingleProduct';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
    <div dir='rtl' className='flex flex-col min-h-screen'>
      <Dashboard />

      
    {/* <BrowserRouter >
    <ShopContextProvider>
    <Header />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path={"/single/:id"} element={<SingleProduct />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
     <Footer />
     </ShopContextProvider>
    </BrowserRouter> */}
    </div>
   
  );
}

export default App;
