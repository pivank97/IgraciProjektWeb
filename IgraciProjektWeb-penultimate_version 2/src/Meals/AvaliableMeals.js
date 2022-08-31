import React, { useEffect, useState } from "react";
import classes from "./AvaliableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem";

const AvaliableMeals = (props) => {
  const [avaliableMealsList, setAvaliableMealsList] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [httpError,setHttpError]=useState();


  useEffect(() => {
    const fetchAvaliableMeals = async () => {

      setIsLoading(true);
      const response =  await fetch('https://klopaj-ko-popaj-default-rtdb.europe-west1.firebasedatabase.app/Avaliable%20Meals.json');
      const responseData =  await response.json();

      if(!response.ok)
      {
        throw new Error('Something went wrong!');
      }


      const loadedMeals = [];

      if(props.rest){
        for (const key in responseData) {
          if(props.rest===responseData[key].rest)
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      }else {
        for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
    }
      
      setAvaliableMealsList(loadedMeals);
      setIsLoading(false);
    };

    
       fetchAvaliableMeals().catch((error)=>
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

  const mealList = avaliableMealsList.map((meal) =>
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description} />
  );

  return (
    <section className={classes.meals}>
      <Card>
        <h2>Hrana</h2>
        <ul>{mealList}</ul>
      </Card>
    </section>
  )
};

export default AvaliableMeals;