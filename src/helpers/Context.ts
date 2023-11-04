import { createContext } from "react";
import type { Dispatch } from "react";

import { prompts } from "./prompts";
import calcAverageCharPerWord from "./calcAverageCharPerWord";


type PromptsKey = keyof typeof prompts;
type Actions = "swap_language" | 
    "decrement_time" |
    "gen_prompt" |
    "calc_wpm" |
    "calc_cpm" |
    "set_time" |
    "type_character" |
    "send_correct_character" |
    "add_prompt" |
    "calc_accuracy"

export const initialState = {
    time: 30,
    initialTime: 30,
    charactersTyped: 0,
    charactersCorrect: 0,
    accuracy: 0,
    language: "typescript",
    prompt: "",
    promptsTotal: [] as string[],
    cpm: 0,
    wpm: 0,
    averageCpm: 0,
    averageWpm: 0,
    bestWpm: 0,
    averageCharacterPerWord: 0
}

initialState.prompt = prompts[initialState.language as PromptsKey][0];

export const reducer = (
    state: typeof initialState,
    action: {type: Actions, payload?: any}
): typeof initialState => {
    switch(action.type) {
        case "swap_language": return {...state, language: action.payload, prompt: prompts[action.payload as PromptsKey][Math.floor(Math.random() * prompts[state.language as PromptsKey].length)]};
        case "decrement_time": return {...state, time: state.time--};
        case "set_time": return {...state, time: action.payload, initialTime: action.payload};
        case "type_character": return {...state, charactersTyped: state.charactersTyped++}
        case "send_correct_character": return {...state, charactersCorrect: state.charactersCorrect++};
        case "gen_prompt": {
            return {
                ...state, 
                prompt: prompts[state.language as PromptsKey][Math.floor(Math.random() * prompts[state.language as PromptsKey].length)]
            }
        }
        case "add_prompt": return {...state, promptsTotal: [...state.promptsTotal, state.prompt]};
        case "calc_cpm": {
            const minuteRatio = 60 / state.initialTime;
            const cpm = state.charactersCorrect * minuteRatio;
            const averageCpm = state.charactersTyped * minuteRatio;
            return {...state, cpm, averageCpm};
        }
        case "calc_wpm": {
            const cpw = calcAverageCharPerWord(state.promptsTotal);
            const wpm = state.cpm / cpw;
            return {...state, 
                averageCharacterPerWord: cpw, 
                wpm, 
                averageWpm: state.averageCpm / cpw,
                bestWpm: wpm > state.bestWpm ? wpm : state.bestWpm
            };
        }
        case "calc_accuracy": return {...state, accuracy: state.charactersCorrect / state.charactersTyped};

        default: return state
    }
}

export const AppState = createContext(initialState);
export const AppDispatch = createContext<Dispatch<{type: Actions, payload?: any}>>(() => ({type: "", payload: ""}));


