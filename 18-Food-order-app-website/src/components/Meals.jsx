import useHttp from "../hooks/useHttp.js";
import MealItem from "./MealItem.jsx";

const requestConfig = {}

export default function Meals() {
    // get meals from server
    const {data:loadedMeals, isLoading, error} = useHttp("http://localhost:3000/meals",requestConfig,[]);

    if(isLoading) {
        return <p>Fetching Meals...</p>
    }

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