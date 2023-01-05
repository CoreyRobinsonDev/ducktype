import { useState, useEffect } from "react";

import styles from "../styles/prompt.module.css";
import { useFocus } from "../util/hooks";
import { useAppSelector, useAppDispatch } from "../util/hooks";
import { getRandomPrompt } from "../util/helper";
import {
  switchPrompt,
  setTime,
  reset,
  decrement,
  startTimer,
  stopTimer,
  calculateAccuracy,
  calculateRawWPM,
  calculateWPM,
  addCharacter,
  deleteCharacter,
  keypress,
  correctKeyPressed,
  finishReset
} from "../lib/features/duckSlice";

export default function Prompt() {
  const dispatch = useAppDispatch();
  const { hasStarted, initialTime, time } = useAppSelector(state => state.duck.time); 
  const { substring, originalPrompt, prompt, value } = useAppSelector(state => state.duck.text);
  const hasReset = useAppSelector(state => state.duck.hasReset);
  const [animation, setAnimation] = useState("running");
  const [isFinished, setIsFinished] = useState(false);
  const [inputRef, setInputFocus] = useFocus();

  // Prompt switcher
  useEffect(() => {
    if (!hasStarted && initialTime === 0) {
      dispatch(switchPrompt(getRandomPrompt()));
      dispatch(setTime(60));
      // gives "This expression is not callable." error for what should be a callable expression
      // @ts-ignore
      setInputFocus();
    }

    if (substring.length === originalPrompt.length && hasStarted) {
      dispatch(switchPrompt(getRandomPrompt()));
    }
  },[substring, originalPrompt, hasStarted, initialTime, setInputFocus, dispatch])

  // Clock
  useEffect(() => {
    let interval: NodeJS.Timer;

    if (hasStarted) {
      interval = setInterval(() => dispatch(decrement()), 1000);
    } 

    if (time <= 0) {
      dispatch(stopTimer());
      dispatch(calculateAccuracy());
      dispatch(calculateRawWPM(initialTime));
      dispatch(calculateWPM());
      setIsFinished(true);
    }
      
    return () => clearInterval(interval);
  }, [time, hasStarted, initialTime, dispatch])

  // Handle reset event
  useEffect(() => {
    if (hasReset) {
      setIsFinished(false);
      dispatch(finishReset())
      // @ts-ignore
      setInputFocus();
    }
  }, [hasReset, dispatch, setInputFocus])

  const handleKeyDown = (e: any) => {
    switch (e.key) {
      case "ArrowUp": 
      case "ArrowRight": 
      case "ArrowDown": 
      case "ArrowLeft": 
      case "F5":
      case "F11":
      case "Alt":
      case "Control":
      case "Escape":
      case "Shift": return
      case "Backspace":
      case "Delete":
        dispatch(deleteCharacter());
        dispatch(calculateAccuracy());
        dispatch(calculateRawWPM(initialTime - time));
        break;
      case "Tab":
        e.preventDefault();
        e.key = " ";
        dispatch(addCharacter(e.key));
      case "Enter":
        e.key = " ";
      default:
        dispatch(addCharacter(e.key));
        dispatch(keypress())
        dispatch(calculateRawWPM(initialTime - time));
        dispatch(calculateWPM());
        if (e.key === originalPrompt[substring.length]) dispatch(correctKeyPressed());
        dispatch(calculateAccuracy());

        if (!hasStarted) dispatch(startTimer());
    }
  }

  return <section className={styles.section} data-isfinished={isFinished}>
      <input className={styles.input} type="text"
        ref={inputRef}
        onChange={(e) => e.target.value = ""}
        onKeyDown={(e) => handleKeyDown(e)}
        onFocus={() => setAnimation("none")}
        onBlur={() => setAnimation("running")}
        disabled={time === 0}
        autoFocus />

      <pre className={styles.substring}>{
        substring
            .split("")
            .map((letter, index) => <span key={index} className={`${styles.substring__letter} ${value[index] !== originalPrompt[index] ? styles.error : ""}`}>{letter}</span>)
      }</pre>
      <pre className={styles.prompt} data-animation={animation}>{ prompt }</pre>
    </section>
}