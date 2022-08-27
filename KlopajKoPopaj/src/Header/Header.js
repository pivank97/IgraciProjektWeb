import React, {Fragment} from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../Assets/meals.jpg'
import logo from '../Assets/popeye.png'
import DropdownMenu from '../UI/DropdownMenu';

const Header = (props) => {


    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>
                  <img  src={logo} alt=''></img>
                  <h2>Klopaj ko Popaj</h2>
                </div>
                <div className={classes.dropdown}>
                  <DropdownMenu/>
                </div>
                <div className={classes.cart}>
                  <HeaderCartButton onClick={props.onShowCart}/>
                </div>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Meal'/> 
            </div>
        </Fragment>
    );
};

export default Header;