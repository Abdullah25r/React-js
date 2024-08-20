import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Shopping cart/Navbar';
import Products from './components/Shopping cart/pages/Products';
import Footer from './components/Shopping cart/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Shopping cart/pages/Cart';
const FinalApp = () => {
    return (
        <div>
            <BrowserRouter>
    
     
    <Navbar/>
    <Routes>
      <Route path='/' element={<Products></Products>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
        </div>
    );
}

export default FinalApp;
