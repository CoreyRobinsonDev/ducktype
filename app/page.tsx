"use client"
import { useState, useEffect, useReducer } from "react";
import { BiTimeFive } from "react-icons/bi";

import styles from "./home.module.css";
import Header from "./(components)/(header)/Header";
import { typeState, timeState, textState, typeReducer, timeReducer, textReducer } from "../util/reducers";

const Home = () => {
  const [{keysPressed, correctKeysPressed, wpm, rawWPM, accuracy}, typeDispatch] = useReducer(typeReducer, typeState);
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
      typeDispatch({type: "calculate accuracy"})
      typeDispatch({type: "calculate wpm", payload: initialTime})
    }
      
    return () => clearInterval(interval);
  }, [time, hasStarted, initialTime])

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
        typeDispatch({type: "keypress"})
        if (key === originalPrompt[substring.length]) typeDispatch({ type: "correct keypress" });
        

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
    <ul>
      <li>WPM: { wpm }</li>
      <li>Raw WPM: { rawWPM }</li>
      <li>Accuracy: { Math.floor(accuracy * 100) }%</li>
    </ul>
  </main>
}

export default Home;