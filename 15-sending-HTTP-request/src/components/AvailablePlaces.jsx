import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false); // loading state.
  const [availablePlaces, setAvailablePlaces] = useState([]); // fetching data state.
  const [error, setError] = useState(); // error state.

  // ---> fetching data from the server
  useEffect(() => {
    // useEffect call back function can't be async so we need to create a new function and call it inside useEffect.

    // ---> fetching data from the server
    async function fetchData() {
      setIsFetching(true); // for display loading text.
      try {
        const response = await fetch("http://localhost:3000/placesss"); // <--- returns a promise
        const resData = await response.json(); // <--- returns a promise

        if (!response.ok) {
          // if response status is not ok (200-299) then throw an error.
          throw new Error('Failed to fetch places.');
        }

        setAvailablePlaces(resData.places); // response data contain object with places key. (check app.js file in backend folder for more details.)
      } catch (err) {
        setError({ message: err.message || "Could not fetch places, Please try again later." });
      }
      
      setIsFetching(false); // for hide loading text & display places (data).
    }

    fetchData();
  }, []);

  if (error) {
    return (<Error
      title="Error Occurred!"
      message={error.message}
      onConfirm={() => {}}
    />);
  }

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
