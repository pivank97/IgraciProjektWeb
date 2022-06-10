import React, { useEffect, useState } from "react";
import classes from "./AvaliableRestaurants.module.css"
import Card from "../UI/Card"
import RestaurantItem from "./RestaurantItem";


const AvaliableRestaurants =()=>
{
   
        const [avaliableRestaurantList, setAvaliableRestaurantList] = useState([]);
        const [isLoading,setIsLoading]=useState(true);
        const [httpError,setHttpError]=useState();
        
      
        useEffect(() => {
          const fetchRestaurants = async () => {
      
            setIsLoading(true);
            const response =  await fetch('https://klopaj-ko-popaj-restaurants-default-rtdb.europe-west1.firebasedatabase.app/avaliableRestaurants.json');
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
            <section className={classes.MealsLoading}>
              <p>LOADING...</p>
            </section> 
            );
        }
      
        if(httpError)
        {
          return(
            <section className={classes.MealsError}>
              <p>{httpError}</p>
            </section>
          )
        }
      
        const restaurantList = avaliableRestaurantList.map((restaurant) =>
          <RestaurantItem
            id={restaurant.id}
            key={restaurant.id}
            name={restaurant.name}
            description={restaurant.description}
            location={restaurant.location} />
        );
      
        return (
          <section className={classes.restaurants}>
            <Card>
              <h2>Restorani</h2>
              <ul>{restaurantList}</ul>
            </Card>
          </section>
        )
      };
      

export default AvaliableRestaurants;