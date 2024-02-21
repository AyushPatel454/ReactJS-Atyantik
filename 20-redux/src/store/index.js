import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

const initialAuthState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})



// create a store 
// configureStore: use for creating a store with a reducer function
const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer, }, // merging all the reducers together.
});

// for dispatch
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// export the store
export default store;