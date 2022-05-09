
import React,{useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
const Cart=(props)=>
{

    const cartCtx=useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}Kn`;
    const hasItems=cartCtx.items.length >0;

    const cartItemRemoveHandler=id=>{
        cartCtx.removeItem(id);
    };
       
    const cartItemAddHandler=item=>{
        cartCtx.addItem({...item,amount:1});
    };


    const cartItems=(
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item)=>(
                <CartItem 
                key={item.id} 
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                onAdd={cartItemAddHandler.bind(null,item)}/>
            ))}
        </ul>
    );

    return(
        <Modal onClose={props.onHideCart}>
             {cartItems}
        {
            hasItems ? <div className={classes.total}>
                            <span>Ukupno</span>
                            <span>{totalAmount}</span>
                        </div>:
                        <div className={classes.total}>
                            <span>Košarica je prazna</span>
                        </div>
                        
        }
        
        
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Zatvori</button>
            {hasItems && <button className={classes.button}>Naruči</button>}
        </div>
        </Modal>
    );
};

export default Cart; 