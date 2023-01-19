import { createSlice } from "@reduxjs/toolkit";
import type { TypeState, TimeState, TextState } from "../../util/types";

type InitialState = {
  type: TypeState,
  text: TextState,
  time: TimeState
  hasReset: boolean
}

let initialState: InitialState;

if (typeof window !== "undefined") {
  initialState = {
    type: {
      keysPressed: 0,
      correctKeysPressed: 0,
      wpm: 0,
      rawWPM: 0,
      accuracy: 0,
      highestWPM: localStorage?.getItem("highestWPM") ? JSON.parse(localStorage.getItem("highestWPM") ? localStorage.getItem("highestWPM")! : "0") : 0 ,
      highestRawWPM: localStorage?.getItem("highestRawWPM") ? JSON.parse(localStorage.getItem("highestRawWPM") ? localStorage.getItem("highestRawWPM")! : "0") : 0
    },
    time: {
      initialTime: 0,
      time: 60,
      hasStarted: false
    },
    text: {
      value: "",
      substring: "",
      originalPrompt: "",
      prompt: "",
    },
    hasReset: false
  }
} else {
  initialState = {
    type: {
      keysPressed: 0,
      correctKeysPressed: 0,
      wpm: 0,
      rawWPM: 0,
      accuracy: 0,
      highestWPM: 0,
      highestRawWPM: 0
    },
    time: {
      initialTime: 0,
      time: 60,
      hasStarted: false
    },
    text: {
      value: "",
      substring: "",
      originalPrompt: "",
      prompt: "",
    },
    hasReset: false
  }
}

const duckSlice = createSlice({
  name: "duckSlice",
  initialState,
  reducers: {
    keypress: (state) => {
      state.type.keysPressed++;
    },
    correctKeyPressed: (state) => {
      state.type.correctKeysPressed++;
    },
    calculateAccuracy: (state) => {
      state.type.accuracy = state.type.correctKeysPressed / state.type.keysPressed;
    },
    calculateRawWPM: (state, {payload}) => {
      const wordLength = 5;
      const minute = 60;
      const seconds = payload;
      if (((state.type.keysPressed / wordLength) / (seconds / minute)) === Infinity) return;
      state.type.rawWPM = (state.type.keysPressed / wordLength) / (seconds / minute);
      if (state.type.rawWPM > state.type.highestRawWPM) {
        localStorage?.setItem("highestRawWPM", JSON.stringify(state.type.rawWPM));
      };
    },
    calculateWPM: (state) => {
      state.type.wpm = state.type.rawWPM * state.type.accuracy;
      if (state.type.wpm > state.type.highestWPM) {
        localStorage?.setItem("highestWPM", JSON.stringify(state.type.wpm));
      }
    },
    startTimer: (state) => {
      state.time.hasStarted = true;
    },
    stopTimer: (state) => {
      state.time.hasStarted = false;
    },
    decrement: (state) => {
      state.time.time--;
    },
    setTime: (state, {payload}) => {
      state.time.time = payload;
      state.time.initialTime = payload;
      state.type.keysPressed = 0;
      state.type.correctKeysPressed = 0;
      state.type.accuracy = 0;
      state.type.wpm = 0;
      state.type.rawWPM = 0;
      state.hasReset = true;
    },
    addCharacter: (state, { payload }) => {
      state.text.value = state.text.value + payload;
      state.text.substring = state.text.substring + state.text.originalPrompt[state.text.substring.length];
      state.text.prompt = state.text.prompt.slice(1);
    },
    deleteCharacter: (state) => {
      const valueArr = state.text.value.split("");
      const substringArr = state.text.substring.split("");

      valueArr.pop();
      substringArr.pop();
      state.text.value = valueArr.join("");
      state.text.substring = substringArr.join("");
      state.text.prompt = state.text.originalPrompt.slice(state.text.substring.length);
    },
    switchPrompt: (state, { payload }) => {
      state.text.originalPrompt = payload;
      state.text.prompt = payload;
      state.text.substring = "";
      state.text.value = "";
      state.hasReset = true;
    },  
    reset: (state) => {
      state.text.substring = "";
      state.text.prompt = "";
      state.text.originalPrompt = "";
      state.text.value = "";
      state.time.time = 0;
      state.time.initialTime = 0;
      state.time.hasStarted = false;
      state.hasReset = true;
    },
    finishReset: (state) => {
      state.hasReset = false;
    }
  }
})

export const duckReducer = duckSlice.reducer;
export const {
  keypress,
  correctKeyPressed,
  calculateAccuracy,
  calculateRawWPM,
  calculateWPM,
  startTimer,
  stopTimer,
  decrement,
  setTime,
  addCharacter,
  deleteCharacter,
  switchPrompt,
  reset,
  finishReset
} = duckSlice.actions