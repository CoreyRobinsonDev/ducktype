import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { appReducer } from "./slices/appSlice";
import { configReducer } from "./slices/configSlice";

const store = configureStore({
    reducer: {
        app: appReducer,
        config: configReducer
    }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
