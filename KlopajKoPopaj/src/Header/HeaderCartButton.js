import { useContext,useEffect,useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";



const HeaderCartButton=(props)=>
{
    const[btnBump, setBtnBump]=useState(false);
    const cartCtx= useContext(CartContext);

    const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
        return curNumber+ item.amount;
    },0);

    const btnClasses=`${classes.button} ${btnBump ? classes.bump:''}`

    const {items}=cartCtx;
    useEffect(()=>{
        if(items.length===0)
            {
                return;
            }
        setBtnBump(true);

        const timer =setTimeout(()=>{
            setBtnBump(false);
        },300);

        return()=>clearTimeout(timer);
    },[items]);
    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Košarica
            </span>
            <span className={classes.badge}>
               {numberOfCartItems}
            </span>
        
        </button>
    );
};



export default HeaderCartButton;