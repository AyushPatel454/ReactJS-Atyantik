import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // ---> fetching data from the server
  useEffect(() => {
    // useEffect call back function can't be async so we need to create a new function and call it inside useEffect.

    // ---> fetching data from the server
    async function fetchData() {
      setIsFetching(true); // for display loading text.
      const response = await fetch("http://localhost:3000/places"); // <--- returns a promise
      const resData = await response.json(); // <--- returns a promise
      setAvailablePlaces(resData.places); // response data contain object with places key. (check app.js file in backend folder for more details.)
      setIsFetching(false); // for hide loading text & display places (data).
    }

    fetchData();
  }, []);
  

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
