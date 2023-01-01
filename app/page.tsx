"use client"
import { useState, useEffect, useReducer } from "react";
import { BiTimeFive } from "react-icons/bi";
import { RiVipCrownFill } from "react-icons/ri";

import styles from "./home.module.css";
import Header from "./(components)/(header)/Header";
import { typeState, timeState, textState, typeReducer, timeReducer, textReducer } from "../util/reducers";

const Home = () => {
  const [{keysPressed, correctKeysPressed, wpm, rawWPM, accuracy}, typeDispatch] = useReducer(typeReducer, typeState);
  const [{initialTime, time, hasStarted}, timeDispatch] = useReducer(timeReducer, timeState)
  const [{ value, substring, originalPrompt, prompt }, textDispatch] = useReducer(textReducer, textState);
  const [animation, setAnimation] = useState("running");
  const highestWPM = localStorage.getItem("wpm") ? JSON.parse(localStorage.getItem("wpm") ?? "") : 0;
  const highestRawWPM = localStorage.getItem("rawWPM") ? JSON.parse(localStorage.getItem("rawWPM") ?? "") : 0;
  const highestAccuracy = localStorage.getItem("accuracy") ? JSON.parse(localStorage.getItem("accuracy") ?? "") : 0;

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (hasStarted) {
      interval = setInterval(() => timeDispatch({type: "decrement"}), 1000);
    } 
    if (time <= 0) {
      timeDispatch({type: "stop timer"});
      typeDispatch({type: "calculate accuracy"})
      typeDispatch({type: "calculate raw wpm", payload: initialTime})
      typeDispatch({type: "calculate wpm" })
    }
      
    return () => clearInterval(interval);
  }, [time, hasStarted, initialTime])

  const handleKeyDown = (e: any) => {
    const key = e.key;

    switch (key) {
      case "F5":
      case "F11":
      case "Tab":
      case "Alt":
      case "Control":
      case "Escape":
      case "Shift": return
      case "Backspace":
      case "Delete":
        textDispatch({ type: "delete character" });
        typeDispatch({type: "calculate accuracy"})
        typeDispatch({type: "calculate raw wpm", payload: initialTime - time})
        break;
      default:
        textDispatch({ type: "add character", payload: key });
        typeDispatch({type: "keypress"})
        typeDispatch({type: "calculate raw wpm", payload: initialTime - time})
        typeDispatch({ type: "calculate wpm" })
        if (key === originalPrompt[substring.length]) typeDispatch({ type: "correct keypress" });
        typeDispatch({type: "calculate accuracy"})
        

        if (!hasStarted) timeDispatch({ type: "start timer" });
    }
  }
   
  const reset = () => {
    textDispatch({ type: "reset" });
    timeDispatch({ type: "reset" });
    typeDispatch({ type: "reset" });
    setAnimation("running");
  }


  return <main className={styles.container}>
    <span className={styles.menu}>
      <Header/>
      <ul className={styles.time_list}>
        <li className={styles.time_list__icon}><BiTimeFive/></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 15 && styles.selected}`} onClick={() => {reset();timeDispatch({type: "set time", payload: 15}) } }>15</button></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 30 && styles.selected}`} onClick={() => {reset();timeDispatch({type: "set time", payload: 30}) } }>30</button></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 60 && styles.selected}`} onClick={() => {reset();timeDispatch({type: "set time", payload: 60}) } }>60</button></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 120 && styles.selected}`} onClick={() => {reset();timeDispatch({type: "set time", payload: 120}) } }>120</button></li>
      </ul>
    </span>
    <section className={styles.results_section}>
      <div className={styles.results__main}>
        <span className={styles.results__result}>
          <p className={styles.results__title}>wpm { wpm > highestWPM && <span className={styles.crown}><RiVipCrownFill/></span>}</p>
          <p className={styles.results__data}>{Math.floor(wpm)}</p>
        </span>
        <span className={styles.results__result}>
          <p className={styles.results__title}>acc { accuracy > highestAccuracy && <span className={styles.crown}><RiVipCrownFill/></span>}</p>
          <p className={styles.results__data}>{Math.floor(accuracy * 100)}%</p>
        </span>
      </div>
      <div className={styles.results__secondary}>
        <span className={styles.results__result}>
          <p className={styles.results__title}>raw { rawWPM > highestRawWPM && <span className={styles.crown}><RiVipCrownFill/></span>}</p>
          <p className={styles.results__data}>{Math.floor(rawWPM)}</p>
        </span>
        <span className={styles.results__result}>
          <p className={styles.results__title}>characters</p>
          <p className={styles.results__data}>{correctKeysPressed} / {keysPressed} / { originalPrompt.length }</p>
        </span>
        <span className={styles.results__result}>
          <p className={styles.results__title}>consistency</p>
          <p className={styles.results__data}>0%</p>
        </span>
        <span className={styles.results__result}>
          <p className={styles.results__title}>time</p>
          <p className={styles.results__data}>{initialTime}</p>
        </span>
      </div>
    </section>
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