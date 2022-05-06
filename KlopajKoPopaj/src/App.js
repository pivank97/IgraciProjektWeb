import React, {useState} from 'react';
import  './App.module.css';
import Header from './Header/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';



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
      <Meals/>
    </CartProvider>
  );
}

export default App;
