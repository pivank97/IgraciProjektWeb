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
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="navbar-brand">
                              <div className={classes.logo}>
                              <span><img src={logo}></img></span>
                              <span >Klopaj Ko Popaj</span>
                              </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className={classes.dropdown}>
                              <DropdownMenu/>
                        </div>
                            
                        </div>
                        <div className="col">
                          <div className={classes.cart}>
                            <HeaderCartButton onClick={props.onShowCart}/>
                          </div>
                        </div>
                        
                    </div>
                </div>
          </header>
          <div className={classes['main-image']}>
              <img src={mealsImage} alt='Meal'/> 
          </div>
      </Fragment>
    );
};

export default Header;