import { createSlice } from "@reduxjs/toolkit";

const initialVisibilityState = {
    isVisible: false,
}

const visibilitySlice = createSlice({
    name: 'visibility',
    initialState: initialVisibilityState,
    reducers: {
        toggleVisibility(state) {
            state.isVisible = !state.isVisible;
        }
    }
});

export const visibilityActions = visibilitySlice.actions;
export default visibilitySlice.reducer;