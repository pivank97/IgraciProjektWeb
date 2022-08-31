import React, {useState} from 'react';
import  './App.module.css';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';
import FabriquePage from './Restaurants/FabriquePage';
import HokusOkusPage from './Restaurants/HokusOkusPage';
import RullaPage from './Restaurants/RullaPage';
import Meals from './Meals/Meals'
import AvaliableRestaurants from './Restaurants/AvaliableRestaurants'
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import IndexContent from './Helpers/IndexContent';

function App() {
  const [cartVisibility,setCartVisibility]=useState(false);
  
const showCartHandler=(event)=>
{
  setCartVisibility(true); 
}

const hideCartHandler=(event)=>
{
  setCartVisibility(false); 
}


  return (
      <CartProvider>
        {cartVisibility && <Cart onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
          <Routes>
            <Route path="/" element={ <IndexContent/>}/>
            <Route path="/Restaurants/Fabrique" element={ <FabriquePage/>}/>
            <Route path="/Restaurants/Rulla" element={ <RullaPage/>}/>
            <Route path="/Restaurants/HokusOkus" element={ <HokusOkusPage/>}/>
          </Routes>
        <Outlet/>
      </CartProvider>
  );
}

export default App;
