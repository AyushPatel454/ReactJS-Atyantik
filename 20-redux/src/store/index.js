import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// create a store 
// configureStore: use for creating a store with a reducer function
const store = configureStore({
    reducer: counterSlice.reducer,
});
 
export const counterActions = counterSlice.actions;
export default store;