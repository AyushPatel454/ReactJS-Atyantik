import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice.js';
import authReducer from './auth-slice.js';

// create a store 
// configureStore: use for creating a store with a reducer function
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer, }, // merging all the reducers together.
});

// export the store
export default store;