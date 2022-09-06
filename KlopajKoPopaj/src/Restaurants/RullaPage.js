import React from "react";
import { Link } from "react-router-dom";
import classes from './RestaurantPages.module.css'
import AvaliableMeals from "../Meals/AvaliableMeals";
import Card from "../UI/Card"

const restPage= 'rulla'
const FabriquePage = () =>
{
  return(
    <React.Fragment>
      <section className={classes.restaurants}>
        <Card>
          <h1>Rulla streetfood</h1>
          <p>Vrhunska street food ponuda u centru Osijeka</p>
          <h2>Pronađite nas na</h2>
          <h3>
            <a href="https://www.google.com/maps/place/Fabrique+Grill+%26+Beer/@45.559054,18.6764155,17z/data=!3m1!4b1!4m5!3m4!1s0x475ce7a8a5e60587:0xa0fa8542c72c2678!8m2!3d45.559054!4d18.6786042">
              Prolaz Julija Benešića 1, Osijek
            </a>
          </h3>
        </Card>
      </section>
      <AvaliableMeals rest={restPage}/>
      <section className={classes.returnBtn}>
        <Card>
          <h3>
            <Link to="/">Povratak</Link>
          </h3>
        </Card>
      </section>
    </React.Fragment>
  );
}

export default FabriquePage;