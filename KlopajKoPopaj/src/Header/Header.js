import React, {Fragment} from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../Assets/meals.jpg'


const Header = (props) => {


    return (
        <Fragment>
            <header className={classes.header}>
                <h2>Klopaj ko Popaj</h2>
               <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Meal'/> 
            </div>
        </Fragment>
    );
};

export default Header;