import React, {useState} from 'react';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';

import Meals from '../Meals/Meals'
import AvaliableRestaurants from '../Restaurants/AvaliableRestaurants'



function IndexContent() {

  return (
    <React.Fragment>
        <Meals/>
        <AvaliableRestaurants/>
    </React.Fragment>
  );
}

export default IndexContent;
