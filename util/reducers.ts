import type { TypeState, TimeState, TextState, Action } from "../util/types";

export const typeState: TypeState = {
  keysPressed: 0,
  correctKeysPressed: 0,
  wpm: 0,
  rawWPM: 0,
  accuracy: 0,
  highestWPM: typeof window !== "undefined" ? localStorage.getItem("wpm") ? JSON.parse(localStorage.getItem("wpm") ?? "") : 0 : 0,
  highestRawWPM: typeof window !== "undefined" ? localStorage.getItem("rawWPM") ? JSON.parse(localStorage.getItem("rawWPM") ?? "") : 0 : 0,
  highestAccuracy: typeof window !== "undefined" ? localStorage.getItem("accuracy") ? JSON.parse(localStorage.getItem("accuracy") ?? "") : 0 : 0
}

export const timeState: TimeState = {
  initialTime: 60,
  time: 60,
  hasStarted: false
}

export const textState: TextState = {
  value: "",
  substring: "",
  originalPrompt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat tortor, accumsan eu nibh quis, tempus pellentesque justo. Donec sed nibh tortor. Nulla rutrum dui lectus, id tempor dui posuere pellentesque. Cras quis aliquet lorem. Integer accumsan augue a tellus condimentum tristique. Aenean sed laoreet turpis. Proin vitae quam porttitor, rhoncus massa eget, condimentum ipsum.",
  prompt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat tortor, accumsan eu nibh quis, tempus pellentesque justo. Donec sed nibh tortor. Nulla rutrum dui lectus, id tempor dui posuere pellentesque. Cras quis aliquet lorem. Integer accumsan augue a tellus condimentum tristique. Aenean sed laoreet turpis. Proin vitae quam porttitor, rhoncus massa eget, condimentum ipsum."
}

export const typeReducer = (state: TypeState, {type, payload}: Action): TypeState => {
  switch (type) {
    case "keypress": return { ...state, keysPressed: state.keysPressed++ };
    case "correct keypress": return { ...state, correctKeysPressed: state.correctKeysPressed++ };
    case "calculate accuracy": return { ...state, accuracy: state.correctKeysPressed / state.keysPressed };
    case "calculate raw wpm": return { ...state, rawWPM: (state.keysPressed / 5) / (payload / 60) };
    case "calculate wpm": return { ...state, wpm: state.rawWPM * state.accuracy };
    case "reset": 
      if (state.wpm > state.highestWPM) localStorage.setItem("wpm", JSON.stringify(state.wpm));
      if (state.rawWPM > state.highestRawWPM) localStorage.setItem("rawWPM", JSON.stringify(state.rawWPM));
      if (state.accuracy > state.highestAccuracy) localStorage.setItem("accuracy", JSON.stringify(state.accuracy));

      return {...typeState}
    default: return state;
  }
}

export const timeReducer = (state: TimeState, {type, payload}: Action): TimeState => {
  switch (type) {
    case "start timer": return { ...state, hasStarted: true };
    case "stop timer": return { ...state, hasStarted: false };
    case "decrement": return { ...state, time: state.time-- };
    case "set time": return { ...state, time: payload, initialTime: payload };
    case "reset": return timeState;
    default: return state;
  } 
}

export const textReducer = (state: TextState, { type, payload }: Action): TextState => {
  switch (type) {
    case "add character": return {
      ...state,
      value: state.value + payload,
      substring: state.substring + state.originalPrompt[state.substring.length],
      prompt: state.prompt.slice(1)
    }
    case "delete character": return {
      ...state,
      value: state.value.slice(0, state.value.length - 1),
      substring: state.substring.slice(0, state.substring.length - 1),
      prompt: state.originalPrompt.slice(state.substring.length - 1)
    }
    case "reset": return textState;
    default: return state;
  }
}