import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "dark",
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
        toggleDebug: (state) => {
            state.showDebug = !state.showDebug;
        },
        load_cache_to_client: (state) => {
            try {
                const saved = window.localStorage.getItem("app_config");
                if (saved !== null) { 
                    const cache = JSON.parse(saved) as typeof initialState;
                    state.theme = cache.theme;
                    state.showDebug = cache.showDebug;
                };
            } catch { }
        },
        save_client_to_cache: (state) => {
            window.localStorage.setItem("app_config", JSON.stringify(state));
        },
    }
})

export const configReducer = configSlice.reducer;
export const {
    toggleTheme,
    toggleDebug,
    load_cache_to_client,
    save_client_to_cache,
} = configSlice.actions;
