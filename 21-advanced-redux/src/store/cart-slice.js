import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    quantity: 0,
    price: 6,
    isVisible: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart(state) {
            state.quantity++;
        },
        incrementQuantity(state) {
            state.quantity++;
        },
        decrementQuantity(state) {
            state.quantity--;
        },
        toggleVisibility(state) {
            state.isVisible = !state.isVisible;
        }
    }
})
export default cartSlice.reducer;
export const cartActions = cartSlice.actions;