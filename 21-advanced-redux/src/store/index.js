import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice.js';
import notificationReducer from './notification-slice.js';
import visibilityCartReducer from './visiblity-cart.js';

const store = configureStore({
    reducer: { cart: cartReducer, notification: notificationReducer, visibility_cart: visibilityCartReducer}
});

export default store;
