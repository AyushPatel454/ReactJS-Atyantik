import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    // get meals from server
    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals');

            if(!response.ok) {
              // ... handle error.
            }

            const resData = await response.json();

            setLoadedMeals(resData);
            console.log(resData);
        }
        fetchMeals();
    },[]);

    return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return (
           <MealItem key={meal.id} meal={meal} />
        );
      })}
    </ul>
  );
}