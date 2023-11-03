import { createContext } from "react";
import type { Dispatch } from "react";

import { prompts } from "./prompts";

type Actions = "swap_language" | 
    "decrement_time" |
    "gen_prompt" |
    "calc_wpm" |
    "set_time" |
    "type_character"

export const initialState = {
    time: 20,
    charactersTyped: 0,
    charactersSent: 0,
    language: "typescript",
    prompt: prompts.typescript[0],
}

export const reducer = (
    state: typeof initialState,
    action: {type: Actions, payload?: any}
): typeof initialState => {
    switch(action.type) {
        case "swap_language": return {...state, language: action.payload};
        case "decrement_time": return {...state, time: state.time--};
        case "set_time": return {...state, time: action.payload};
        case "type_character": return {...state, charactersTyped: state.charactersTyped++}
        case "gen_prompt": {
            type PromptsKey = keyof typeof prompts;
            return {
                ...state, 
                prompt: prompts[state.language as PromptsKey][Math.floor(Math.random() * prompts[state.language as PromptsKey].length)]
            }
        }
        default: return state
    }
}

export const AppState = createContext(initialState);
export const AppDispatch = createContext<Dispatch<{type: Actions, payload?: any}>>(() => ({type: "", payload: ""}));


