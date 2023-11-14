import { createSlice } from "@reduxjs/toolkit";

import { prompts } from "../prompts";

type PromptsKey = keyof typeof prompts;
const initialState = {
    time: 30,
    initialTime: 30,
    hasStart: false,
    characters: "",
    charactersTyped: 0,
    charactersCorrect: 0,
    accuracy: 0,
    language: "typescript",
    prompt: "",
    promptsTotal: [] as string[],
    cpm: 0,
    wpm: 0,
    inaccurateCpm: 0,
    inaccurateWpm: 0,
    bestWpm: 0,
}

initialState.prompt = prompts[initialState.language as PromptsKey][0];

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        swap_language: (state, action) => {
            state.language = action.payload;
            state.prompt = prompts[action.payload as PromptsKey][Math.floor(Math.random() * prompts[state.language as PromptsKey].length)];
        },          
        decrement_time: (state) => {
            state.time--;
        },
        set_time: (state, action) => {
            state.time = action.payload;
            state.initialTime = action.payload;
        },
        type_character: (state) => {
            state.charactersTyped++;
        },
        send_correct_character: (state) => {
            state.charactersCorrect++;
        },
        gen_prompt: (state) => {
            state.prompt = prompts[state.language as PromptsKey][Math.floor(Math.random() * prompts[state.language as PromptsKey].length)];
        },
        add_prompt: (state) => {
            state.promptsTotal.push(state.prompt); 
        },
        calc_cpm: (state) => {
            const minuteRatio = 60 / state.initialTime;
            const cpm = state.charactersCorrect * minuteRatio;
            const averageCpm = state.charactersTyped * minuteRatio;
            state.cpm = cpm 
            state.inaccurateCpm = averageCpm;
        },
        calc_wpm: (state) => {
            const charactersPerWord = 4.5;
            const wpm = state.cpm / charactersPerWord;
            state.wpm = wpm; 
            state.inaccurateWpm = state.inaccurateCpm / charactersPerWord;
            state.bestWpm = wpm > state.bestWpm ? wpm : state.bestWpm;
        },
        calc_accuracy: (state) => {
            state.accuracy = state.charactersCorrect / state.charactersTyped;
        },
        start: (state) => {
            state.hasStart = true;
        },
        stop: (state) => {
            state.hasStart = false;
        },
        restart: (state) => {
            state.hasStart = false;
            state.promptsTotal = [];
            state.prompt = prompts[state.language as PromptsKey][Math.floor(Math.random() * prompts[state.language as PromptsKey].length)];
            state.time = state.initialTime;
            state.charactersTyped = 0;
            state.charactersCorrect = 0;
            state.accuracy = 0;
            state.cpm = 0;
            state.wpm = 0;
            state.inaccurateCpm = 0;
            state.inaccurateWpm = 0;
            state.characters = "";
        },
        add_character: (state, action) => {
            state.characters += action.payload;
        },
        remove_character: (state) => {
            state.characters = state.characters.slice(0, state.characters.length - 1);
        },
        clear_characters: (state) => {
            state.characters = "";
        },
        load_cache_to_client: (state) => {
            try {
                const saved = window.localStorage.getItem("app_state");
                if (saved !== null) { 
                    const cache = JSON.parse(saved) as typeof initialState;
                    state.initialTime = cache.initialTime;
                    state.time = cache.initialTime;
                    state.bestWpm = cache.bestWpm;
                    state.language = cache.language;
                    state.prompt = prompts[cache.language as PromptsKey][Math.floor(Math.random() * prompts[cache.language as PromptsKey].length)];
                };
            } catch { }
        },
        save_client_to_cache: (state) => {
            window.localStorage.setItem("app_state", JSON.stringify(state));
        },
        clearCache: (state) => {
            window.localStorage.clear();
            for (let entry of Object.entries(initialState)) {
                //@ts-ignore
                state[entry[0] as PromptsKey] = entry[1];
            }
        }
    }
})


export const appReducer = appSlice.reducer;
export const {
    swap_language,
    decrement_time,
    set_time,
    type_character,
    send_correct_character,
    gen_prompt,
    add_prompt,
    calc_cpm,
    calc_wpm,
    calc_accuracy,
    start,
    stop,
    restart,
    add_character,
    clear_characters,
    remove_character,
    load_cache_to_client,
    save_client_to_cache,
    clearCache
} = appSlice.actions;

