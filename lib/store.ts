import { configureStore } from "@reduxjs/toolkit";

import { duckReducer } from "./features/duckSlice";

export const store = configureStore({
  reducer: {
    duck: duckReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;