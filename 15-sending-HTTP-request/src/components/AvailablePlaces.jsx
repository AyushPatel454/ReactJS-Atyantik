import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // ---> fetching data from the server
  useEffect(() => {
    // useEffect call back function can't be async so we need to create a new function and call it inside useEffect.

    // ---> fetching data from the server
    async function fetchData() {
      const response = await fetch("http://localhost:3000/places"); // <--- returns a promise
      const resData = await response.json(); // <--- returns a promise
      setAvailablePlaces(resData.places); // response data contain object with places key. (check app.js file in backend folder for more details.)
    }

    fetchData();
  }, []);
  

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
