const redux = require('redux'); // node js syntax for importing a 3rd party package. (module)

/* Reducers are functions that take in the current state and an action, and return a new state.
   Reducers are pure functions. They only return the new state, and do not modify the old state.
   Reducers are called by the store.dispatch() method.
   Reducers are used to manage the state of the application.
   Reducers are used to update the state based on the action.
   Reducers are used to handle the asynchronous actions. */

//    take initial value of state ---> state = {counter: 0}
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        }
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        }
    }

    return state;
}

// create a store and pass the reducer to the store.
const store = redux.createStore(counterReducer);

// for subscribing to the store. so that we can listen to the changes in the store.
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

// subscribe to the store.
store.subscribe(counterSubscriber);

// dispatch an action to the store. (means changing the state of the store)
store.dispatch({ type: 'increment' }); // {counter: 1}
store.dispatch({ type: 'decrement'}); // {counter: 0}