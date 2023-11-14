import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "dark",
    showDebug: true
}

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme === "dark"
            ? state.theme = "light"
            : state.theme = "dark"
        },
        toggleDebug: (state) => {
            state.showDebug = !state.showDebug;
        }
    }
})

export const configReducer = configSlice.reducer;
export const {
    toggleTheme,
    toggleDebug
} = configSlice.actions;
