
export type TypeState = {
  keysPressed: number,
  correctKeysPressed: number,
  wpm: number,
  rawWPM: number,
  accuracy: number,
  highestWPM: number,
  highestRawWPM: number
}

export type TimeState = {
  initialTime: number,
  time: number,
  hasStarted: boolean
}

export type TextState = {
  value: string,
  originalPrompt: string,
  prompt: string,
  substring: string,
}

export type Action = {
  type: string,
  payload?: any
}