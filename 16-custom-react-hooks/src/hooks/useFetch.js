import { useEffect } from "react";

function useFetch() {
    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
          try {
            const places = await fetchUserPlaces();
            setUserPlaces(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch user places.' });
          }
    
          setIsFetching(false);
        }
    
        fetchPlaces();
      }, []);
}