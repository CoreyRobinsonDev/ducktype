import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "dark",
    isCache: true,
    showDebug: false
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
        toggleCache: (state) => {
            state.isCache = !state.isCache;
        },
        toggleDebug: (state) => {
            state.showDebug = !state.showDebug;
        }
    }
})

export const configReducer = configSlice.reducer;
export const {
    toggleTheme,
    toggleCache,
    toggleDebug
} = configSlice.actions;
