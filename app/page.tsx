"use client"
import { useState, useEffect} from "react";
import { BiTimeFive } from "react-icons/bi";

import styles from "./home.module.css";
import Header from "./(components)/(header)/Header";

const Home = () => {
  const [value, setValue] = useState("");
  const [substring, setSubstring] = useState("");
  const [originalPrompt] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat tortor, accumsan eu nibh quis, tempus pellentesque justo. Donec sed nibh tortor. Nulla rutrum dui lectus, id tempor dui posuere pellentesque. Cras quis aliquet lorem. Integer accumsan augue a tellus condimentum tristique. Aenean sed laoreet turpis. Proin vitae quam porttitor, rhoncus massa eget, condimentum ipsum.")
  const [prompt, setPrompt] = useState(originalPrompt);
  const [animation, setAnimation] = useState("running");
  const [startTimer, setStartTimer] = useState(false);
  const [initialTime, setInitialTime] = useState(60);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (startTimer) {
      interval = setInterval(() => setTime(time - 1), 1000);
    } 

    if (time <= 0) {
      setStartTimer(false);
    }
      
    return () => clearInterval(interval);
  }, [time, startTimer])

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
        setValue(value.slice(0, value.length-1));
        setSubstring(substring.slice(0, substring.length-1))
        setPrompt(originalPrompt.slice(substring.length-1));
        break;
      default:
        setValue(value + key);
        setSubstring(substring + originalPrompt[substring.length]);
        setPrompt(prompt.slice(1))

        if (!startTimer) {
          setStartTimer(true)
        }
    }
  }


  return <main className={styles.container}>
    <span className={styles.menu}>
      <Header/>
      <ul className={styles.time_list}>
        <li className={styles.time_list__icon}><BiTimeFive/></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 15 && styles.selected}`} onClick={() => { setTime(15); setInitialTime(15) }}>15</button></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 30 && styles.selected}`} onClick={() => {setTime(30);setInitialTime(30)}}>30</button></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 60 && styles.selected}`} onClick={() => {setTime(60);setInitialTime(60)}}>60</button></li>
        <li><button className={`${styles.time_list_item} ${initialTime === 120 && styles.selected}`} onClick={() => {setTime(120);setInitialTime(120)}}>120</button></li>
      </ul>
    </span>
    <p className={styles.time} style={{opacity: startTimer ? 100 : 0}}>{time}</p>
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