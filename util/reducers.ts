import type { TypeState, TimeState, TextState, Action } from "../util/types";


export const typeState: TypeState = {
  keysPressed: 0,
  correctKeysPressed: 0,
  wpm: 0,
  rawWPM: 0,
  accuracy: 0,
}

export const timeState: TimeState = {
  initialTime: 0,
  time: 60,
  hasStarted: false
}

export const textState: TextState = {
  value: "",
  substring: "",
  originalPrompt: "",
  prompt: "",
}

export const typeReducer = (state: TypeState, { type, payload }: Action): TypeState => {
  const wordLength = 5;
  const minute = 60;
  const seconds = payload;

  switch (type) {
    case "keypress": return { ...state, keysPressed: state.keysPressed + 1 };
    case "correct keypress": return { ...state, correctKeysPressed: state.correctKeysPressed + 1 };
    case "calculate accuracy": return { ...state, accuracy: state.correctKeysPressed / state.keysPressed };
    case "calculate raw wpm":
      if (((state.keysPressed / wordLength) / (seconds / minute)) === Infinity) return state;
      return { ...state, rawWPM: (state.keysPressed / wordLength) / (seconds / minute) };
    case "calculate wpm": return { ...state, wpm: state.rawWPM * state.accuracy };
    case "reset": return { ...typeState };
    default: return state;
  }
}

export const timeReducer = (state: TimeState, {type, payload}: Action): TimeState => {
  switch (type) {
    case "start timer": return { ...state, hasStarted: true };
    case "stop timer": return { ...state, hasStarted: false };
    case "decrement": return { ...state, time: state.time - 1 };
    case "set time": return { ...state, time: payload, initialTime: payload };
    case "reset": return {...timeState};
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
    case "switch prompt": return {
      ...state,
      originalPrompt: payload,
      prompt: payload
    }
    case "reset": return {...textState};
    default: return state;
  }
}