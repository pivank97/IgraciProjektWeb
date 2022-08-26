import {useState,useEffect} from "react";
import CartProvider from '../store/CartProvider';
import Card from "../UI/Card"
import classes from './RestaurantItem.module.css'
import RestaurantItem from "./RestaurantItem";
import { Collapse } from 'antd';
import MealItem from "../Meals/MealItem";

const { Panel } = Collapse;
const FabriquePage = () =>
{
  const [avaliableRestaurantList, setAvaliableRestaurantList] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [httpError,setHttpError]=useState();
  

  useEffect(() => {
    const fetchRestaurants = async () => {

      setIsLoading(true);
      const response =  await fetch('https://klopaj-ko-popaj-default-rtdb.europe-west1.firebasedatabase.app/avaliableRestaurants.json');
      const responseData =  await response.json();

      if(!response.ok)
      {
        throw new Error('Nešto je pošlo po zlu!');
      }


      const loadedRestaurants = [];

      for (const key in responseData) {
        loadedRestaurants.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          location: responseData[key].location
        });
      }
      setAvaliableRestaurantList(loadedRestaurants);
      setIsLoading(false);
    };

    
       fetchRestaurants().catch((error)=>
       {
         setIsLoading(false);
      setHttpError(error.message);
       });

  }, [])

  if (isLoading)
  {
    return (
      <section className={classes.RestaurantsLoading}>
        <p>LOADING...</p>
      </section> 
      );
  }

  if(httpError)
  {
    return(
      <section className={classes.RestaurantsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const restaurantList = avaliableRestaurantList.map((restaurant) =>
  <Collapse accordion>
    <RestaurantItem
      id={restaurant.id}
      key={restaurant.id}
      name={restaurant.name}
      description={restaurant.description}
      location={restaurant.location} />
  <Panel>
    <p>paštašuta</p>
  </Panel>
  </Collapse>
);


return (
  <section className={classes.restaurants}>
    <Card>
      <h1>Restorani</h1>
      <ul>{restaurantList}</ul>
    </Card>
  </section>
)
}

export default FabriquePage;