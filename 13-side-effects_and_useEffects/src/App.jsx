import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

// ---> Load the selected places from local storage.
// why this write outside App() ? Because it is not related to the rendering of the component.
// It is synchronous operation.
// No need to execute again and again. (It execute when the component is mounted.)
const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const selectedPlaces = storeIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pickedPlaces, setPickedPlaces] = useState(selectedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // ---> useEffect is a hook that allows you to perform side effects in function components.
  // take 2 arguments: a callback function and an array of dependencies.
  // the callback function is called after the component is rendered.
  // the array of dependencies is used to determine when the callback function is called.
  useEffect(() => {
    // ---> Fetch the user's location and sort the places by distance.
    // it is side effect. Why ? Because it is not directly related to the rendering of the component.
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces); // set the sorted places
    });
  }, []); // empty array means that the effect will only run once, after the first render // call dependency array

  function handleStartRemovePlace(id) {
    setModalIsOpen(true); // open the modal
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false); // close the modal
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // ---> Save the selected place to local storage.
    // (it also side effect because it is not directly related to the rendering of the component.)
    // But there is no need to use useEffect here because it is not related to the rendering of the component.
    const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []; // if there is no selectedPlaces, it will return an empty array
    if (storeIds.indexOf(id) === -1) {
      localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storeIds]));
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false); // close the modal

    // ---> Remove the selected place from local storage.s
    const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storeIds.filter((id) => id !== selectedPlace.current))
    );
  }, []);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
