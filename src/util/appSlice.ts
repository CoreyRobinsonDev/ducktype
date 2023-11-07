import { createSlice } from "@reduxjs/toolkit";


import { prompts } from "./prompts";

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
    averageCharacterPerWord: 0
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
            const cpw = calcAverageCharPerWord(state.promptsTotal);
            const wpm = state.cpm / cpw;
            state.averageCharacterPerWord = cpw; 
            state.wpm = wpm; 
            state.inaccurateWpm = state.inaccurateCpm / cpw;
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
            state.prompt = prompts[initialState.language as PromptsKey][Math.floor(Math.random() * prompts[initialState.language as PromptsKey].length)];
            state.time = state.initialTime;
            state.charactersTyped = 0;
            state.charactersCorrect = 0;
            state.accuracy = 0;
            state.cpm = 0;
            state.wpm = 0;
            state.inaccurateCpm = 0;
            state.inaccurateWpm = 0;
            state.averageCharacterPerWord = 0;
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
        }
    }
})

function calcAverageCharPerWord(text: string[]): number {
    const words = text
        .join(" ")
        .replaceAll("\t", " ")
        .replaceAll("\n", " ")
        .replaceAll(".", " ")
        .split(" ")
        .filter((word) => word !== "");

    return words.join("").length / words.length;
}

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
} = appSlice.actions;

