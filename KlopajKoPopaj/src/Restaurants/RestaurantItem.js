import classes from './RestaurantItem.module.css'


const RestaurantItem = (props) => {

    return (
        <li className={classes.restaurant}>
            <div>
               <h2>{props.name}</h2>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.location}>
                    {props.location}    
                </div> 
            </div>            
        </li>
    );
}


export default RestaurantItem;