export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places"); // <--- returns a promise
    const resData = await response.json(); // <--- returns a promise

    if (!response.ok) {
      // if response status is not ok (200-299) then throw an error.
      throw new Error("Failed to fetch places.");
    }

    return resData.places;
}