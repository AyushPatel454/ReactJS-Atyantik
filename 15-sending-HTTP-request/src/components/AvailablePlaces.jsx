import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // ---> fetching data from the server
  useEffect(() => {
    fetch("http://localhost:3000/places")
    .then((response) => {
      return response.json(); // <--- returns a promise
    })
    .then((resData) => {
      setAvailablePlaces(resData.places); // response data contain object with places key. (check app.js file in backend folder for more details.)
    });
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
