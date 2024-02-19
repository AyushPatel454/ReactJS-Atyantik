import { useEffect, useState } from "react";

// custom hook: this hook use for fetching data.
// fetchFn: fetch function.
// initialValue: initial value for fetch data.
// return: isFetching, fetchData, setFetchData, error.
export function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState(); // loading state.
    const [error, setError] = useState(); // error state.
    const [fetchData, setFetchData] = useState(initialValue); // fetch data state.

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const places = await fetchFn();
                setFetchData(places);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }

            setIsFetching(false);
        }

        fetchData();
    }, [fetchFn]);

    return { isFetching, fetchData, setFetchData, error };
}