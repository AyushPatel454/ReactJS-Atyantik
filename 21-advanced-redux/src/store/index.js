import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice.js';
import notificationReducer from './notification-slice.js';

const store = configureStore({
    reducer: { cart: cartReducer, notification: notificationReducer,}
});

export default store;
