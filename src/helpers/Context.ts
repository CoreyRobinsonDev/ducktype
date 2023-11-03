import { createContext } from "react";
import type { Dispatch } from "react";

import { text } from "./text";

type Actions = "swap_language" | 
    "decrease_time";

export const initialState = {
    timeLimit: 60,
    time: 0,
    charactersTyped: 0,
    charactersSent: 0,
    language: "typescript",
    idx: Math.floor(Math.random())
}

export const reducer = (
    state: typeof initialState,
    action: {type: Actions, payload: any}
): typeof initialState => {
    switch(action.type) {
        case "swap_language": return {...state, language: action.payload}
        default: return state
    }
}

export const AppState = createContext(initialState);
export const AppDispatch = createContext<Dispatch<{type: Actions, payload: any}>>(() => ({type: "", payload: ""}));


