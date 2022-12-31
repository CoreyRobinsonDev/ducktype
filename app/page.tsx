"use client"
import { useState, useEffect, useReducer } from "react";
import { BiTimeFive } from "react-icons/bi";

import styles from "./home.module.css";
import Header from "./(components)/(header)/Header";
import type { TypeState, TimeState, TextState, Action } from "../util/types";

const typeState: TypeState = {
  keysPressed: 0,
  correctKeysPress: 0,
  wpm: 0
}

const timeState: TimeState = {
  initialTime: 60,
  time: 60,
  hasStarted: false
}

const textState: TextState = {
  value: "",
  substring: "",
  originalPrompt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat tortor, accumsan eu nibh quis, tempus pellentesque justo. Donec sed nibh tortor. Nulla rutrum dui lectus, id tempor dui posuere pellentesque. Cras quis aliquet lorem. Integer accumsan augue a tellus condimentum tristique. Aenean sed laoreet turpis. Proin vitae quam porttitor, rhoncus massa eget, condimentum ipsum.",
  prompt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat tortor, accumsan eu nibh quis, tempus pellentesque justo. Donec sed nibh tortor. Nulla rutrum dui lectus, id tempor dui posuere pellentesque. Cras quis aliquet lorem. Integer accumsan augue a tellus condimentum tristique. Aenean sed laoreet turpis. Proin vitae quam porttitor, rhoncus massa eget, condimentum ipsum."
}

const typeReducer = (state: TypeState, {type, payload}: Action): TypeState => {
  switch (type) {
    default: return state;
  }
}

const timeReducer = (state: TimeState, {type, payload}: Action): TimeState => {
  switch (type) {
    case "start timer": return { ...state, hasStarted: true };
    case "stop timer": return { ...state, hasStarted: false };
    case "decrement": return { ...state, time: state.time-- };
    case "set time": return { ...state, time: payload, initialTime: payload };
    default: return state;
  } 
}

const textReducer = (state: TextState, { type, payload }: Action): TextState => {
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
    default: return state
  }
}

const Home = () => {
  const [{keysPressed, correctKeysPress, wpm}, typeDispatch] = useReducer(typeReducer, typeState);
  const [{initialTime, time, hasStarted}, timeDispatch] = useReducer(timeReducer, timeState)
  const [{ value, substring, originalPrompt, prompt }, textDispatch] = useReducer(textReducer, textState);
  const [animation, setAnimation] = useState("running");

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (hasStarted) {
      interval = setInterval(() => timeDispatch({type: "decrement"}), 1000);
    } 
    if (time <= 0) {
      timeDispatch({type: "stop timer"});
    }
      
    return () => clearInterval(interval);
  }, [time, hasStarted])

  const handleKeyDown = (e: any) => {
    const key = e.key;

    switch (key) {
      case "F5":
      case "F11":
      case "Alt":
      case "Control":
      case "Escape":
      case "Shift": return
      case "Backspace":
      case "Delete":
        textDispatch({ type: "delete character" });
        break;
      default:
        textDispatch({ type: "add character", payload: key });

        if (!hasStarted) timeDispatch({ type: "start timer" });
    }
  }


  return <main className={styles.container}>
    <span className={styles.menu}>
      <Header/>
      <ul className={styles.time_list}>
        <li className={styles.time_list__icon}><BiTimeFive/></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 15 && styles.selected}`} onClick={() => timeDispatch({type: "set time", payload: 15})}>15</button></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 30 && styles.selected}`} onClick={() => timeDispatch({type: "set time", payload: 30})}>30</button></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 60 && styles.selected}`} onClick={() => timeDispatch({type: "set time", payload: 60})}>60</button></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 120 && styles.selected}`} onClick={() => timeDispatch({type: "set time", payload: 120})}>120</button></li>
      </ul>
    </span>
    <p className={styles.time} style={{opacity: hasStarted ? 100 : 0}}>{time}</p>
    <section className={styles.section}>
      <input className={styles.input} type="text"
        onChange={(e) => e.target.value = ""}
        onKeyDown={(e) => handleKeyDown(e)}
        onFocus={() => setAnimation("none")}
        onBlur={() => setAnimation("running")}
        disabled={time === 0}
        autoFocus />

      <span className={styles.substring} data-animation={animation}>{
        substring
            .split("")
            .map((letter, index) => <span key={index} className={`${styles.substring__letter} ${value[index] !== originalPrompt[index] ? styles.error : ""}`}>{letter}</span>)
      }</span>
      <span className={styles.prompt}>{ prompt }</span>
    </section>
  </main>
}

export default Home;