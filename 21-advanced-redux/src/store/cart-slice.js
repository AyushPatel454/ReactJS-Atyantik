import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from './notification-slice.js';

const initialCartState = {
    quantity: 0,
    items: [],
    price: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.quantity = action.payload.quantity;
            state.items = action.payload.items;
            state.price = action.payload.price;
        },
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
            if (state.items[index].quantity === 0) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
        },
    }
});


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            notificationActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        // send the cart data to the server
        const sendRequest = async () => {
            const response = await fetch('https://redux-practice-d7720-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        }

        // call the sendRequest function.
        try {
            await sendRequest();

            dispatch(
                notificationActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
    
            // hide the notification after 3 seconds
            setTimeout(() => {
                dispatch(notificationActions.hideNotification());
            }, 3000);

        } catch (error) {
            dispatch(
                notificationActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            );

            // hide the notification after 3 seconds
            setTimeout(() => {
                dispatch(notificationActions.hideNotification());
            }, 3000);
        }

        
    }
}


export default cartSlice.reducer;
export const cartActions = cartSlice.actions;