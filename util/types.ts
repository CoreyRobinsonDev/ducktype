
export type TypeState = {
  keysPressed: number,
  correctKeysPress: number,
  wpm: number
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
  substring: string
}

export type Action = {
  type: string,
  payload?: any
}