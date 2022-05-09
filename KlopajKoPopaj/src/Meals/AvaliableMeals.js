import React from "react";
import classes from "./AvaliableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Burger Osijek',
    description: 'Brioche pecivo, juneća pljeskavica...',
    price: 42,
  },
  {
    id: 'm2',
    name: 'Cripy Chicken salata',
    description: 'Salata s nekoliko vrsta svježeg povrća, hrskava piletina...',
    price: 40,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'Brioche pecivo, juneća pljeskavica...',
    price: 42,
  },
  {
    id: 'm4',
    name: 'Crispy Chicken wrap',
    description: 'Svježe pečeno domaće tijesto, 100% juneće meso, prilozi...',
    price: 35,
  },
  {
    id: 'm5',
    name: 'Kebab Fries',
    description: 'Fry & dip pommes frites, hrskava piletina, salata',
    price: 35,
  },{
    id: 'm6',
    name: 'Burger Osijek',
    description: 'Brioche pecivo, juneća pljeskavica...',
    price: 42,
  },
  {
    id: 'm7',
    name: 'Cripy Chicken salata',
    description: 'Salata s nekoliko vrsta svježeg povrća, hrskava piletina...',
    price: 40,
  },
  {
    id: 'm8',
    name: 'Barbecue Burger',
    description: 'Brioche pecivo, juneća pljeskavica...',
    price: 42,
  },
  {
    id: 'm9',
    name: 'Crispy Chicken wrap',
    description: 'Svježe pečeno domaće tijesto, 100% juneće meso, prilozi...',
    price: 35,
  },
  {
    id: 'm10',
    name: 'Kebab Fries',
    description: 'Fry & dip pommes frites, hrskava piletina, salata',
    price: 35,
  },
];



const AvaliableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) =>
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