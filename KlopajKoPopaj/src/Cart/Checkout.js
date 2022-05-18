import { useRef,useState } from 'react';
import classes from './Checkout.module.css'



const isEmpty = value => value.trim() === '';
const isRealNumber = value => value.trim().length <= 10 && value.trim().length >= 6;

const Checkout = (props) => {

    const [formInputValidity,setFormInputValidity]=useState({
        name: true,
        street: true,
        city:true ,
        telNumber:true
    });

    const nameInputRef = useRef();
    const streetAddressInputRef = useRef();
    const cityInputRef = useRef();
    const telNumberInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreetAddress = streetAddressInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredTelNumber = telNumberInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetAddressIsValid = !isEmpty(enteredStreetAddress);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredTelNumberIsValid = isRealNumber(enteredTelNumber);

        setFormInputValidity({
            name:enteredNameIsValid,
            street:enteredStreetAddressIsValid,
            city:enteredCityIsValid,
            telNumber:enteredTelNumberIsValid
        });

        const formIsValid = enteredNameIsValid && 
                            enteredStreetAddressIsValid && 
                            enteredCityIsValid && 
                            enteredTelNumberIsValid;

        console.log(formInputValidity.telNumber);
        
        if(!formIsValid)
        {
            return;
        }
    };

    const nameControlCLasses=`${classes.control} ${formInputValidity.name ?'':classes.invalid}`;
    const streetControlCLasses=`${classes.control} ${formInputValidity.street ?'':classes.invalid}`;
    const cityControlCLasses=`${classes.control} ${formInputValidity.city ?'':classes.invalid}`;
    const telNumberControlCLasses=`${classes.control} ${formInputValidity.telNumber ?'':classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlCLasses}>
                <label htmlFor="name">Vaše ime</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputValidity.name && <p>Unesite vaše ime!</p>}
            </div>
            <div className={streetControlCLasses}>
                <label htmlFor="street">Adresa dostave</label>
                <input type='text' id='street' ref={streetAddressInputRef} />
                {!formInputValidity.street && <p>Unesite adresu dostave!</p>}
            </div>
            <div className={cityControlCLasses}>
                <label htmlFor="city">Grad</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputValidity.city && <p>Unesite grad !</p>}
            </div>
            <div className={telNumberControlCLasses}>
                <label htmlFor="telNumber">Telefonski broj</label>
                <input type='text' id='telNumber' ref={telNumberInputRef} />
                {!formInputValidity.telNumber && <p>Unesite vaš telefonski broj!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Odustani</button>
                <button className={classes.submit}>Potvrdi</button>
            </div>


        </form>
    )

}



export default Checkout;