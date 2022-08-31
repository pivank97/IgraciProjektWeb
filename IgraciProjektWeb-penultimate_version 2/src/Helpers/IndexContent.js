import React, {useState} from 'react';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';

import Meals from '../Meals/Meals'
import AvaliableRestaurants from '../Restaurants/AvaliableRestaurants'



function IndexContent() {
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
    <React.Fragment>
        <Meals/>
        <AvaliableRestaurants/>
    </React.Fragment>
  );
}

export default IndexContent;
