import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    quantity: 0,
    items: [],
    price: 0,
    isVisible: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart(state, action) {
            state.quantity++;
            // check if the item is already in the cart.
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index >= 0) {
                state.items[index].quantity++;
                state.price += action.payload.price;
                return;
            }

            // if the item is not in the cart.
            const item = {
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: 1,
            };
            state.items.push(item);
            state.price += item.price;
        },
        incrementQuantity(state, action) {
            state.quantity++;
            // find id of the item.
            const index = state.items.findIndex(item => item.id === action.payload.id);
            state.items[index].quantity++;
            state.price += state.items[index].price;
        },
        decrementQuantity(state, action) {
            state.quantity--;
            // find the id of the item.
            const index = state.items.findIndex(item => item.id === action.payload.id);
            state.items[index].quantity--;
            state.price -= state.items[index].price;

            // remove the item if the quantity of item is 0.
            if(state.items[index].quantity === 0) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
        toggleVisibility(state) {
            state.isVisible = !state.isVisible;
        }
    }
})
export default cartSlice.reducer;
export const cartActions = cartSlice.actions;