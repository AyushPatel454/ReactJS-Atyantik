import { createSlice } from "@reduxjs/toolkit";

const initialNotificationState = {
    status: null,
    title: null,
    message: null,
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialNotificationState,
    reducers: {
        showNotification(state, action) {
            state.status = action.payload.status;
            state.title = action.payload.title;
            state.message = action.payload.message;
        },
        hideNotification(state) {
            state.status = null;
        }
    }
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;