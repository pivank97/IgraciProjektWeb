
import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}Kn`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://klopaj-ko-popaj-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items,
            }),
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };


    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
        </ul>
    );

    const modalButtonActions = (
        <div className={classes.actions}>
            <button
                className={classes['button--alt']}
                onClick={props.onHideCart}>Zatvori
            </button>
            {hasItems &&
                <button className={classes.button} onClick={orderHandler}>
                    Naruči
                </button>}
        </div>);

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Ukupno</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />
            )}
            {!isCheckout && modalButtonActions}
        </React.Fragment>
    );

    const isSubmittingModalContent = <p>Narudžba se obrađuje...</p>;

    const didSubmitModalContent = (
        <React.Fragment>
            <p>Vaša narudžba je uspješna!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onHideCart}>
                    Zatvori
                </button>
            </div>
        </React.Fragment>
    );

    return (
        <Modal onClose={props.onHideCart}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart; 