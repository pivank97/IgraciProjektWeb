import React, { useEffect, useState } from "react";
import classes from "./AvaliableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem";

const AvaliableMeals = () => {
  const [avaliableMealsList, setAvaliableMealsList] = useState([]);

  useEffect(() => {
    const fetchAvaliableMeals = async () => {

      const response =  await fetch('https://klopaj-ko-popaj-default-rtdb.europe-west1.firebasedatabase.app/Avaliable%20Meals.json');
      const responseData =  await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      setAvaliableMealsList(loadedMeals);
    };

    fetchAvaliableMeals();
  }, [])



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
      <Card><ul>{mealList}</ul></Card>

    </section>
  )
};

export default AvaliableMeals;