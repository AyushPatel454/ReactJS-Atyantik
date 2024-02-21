import { createStore } from 'redux';

// create a reducer
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

// create a store
const store = createStore(counterReducer);

export default store;