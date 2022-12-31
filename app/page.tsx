"use client"
import { useState } from "react";

import styles from "./home.module.css";
import Header from "./(components)/(header)/Header";

const Home = () => {
  const [value, setValue] = useState("");
  const [substring, setSubstring] = useState("");
  const [originalPrompt] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat tortor, accumsan eu nibh quis, tempus pellentesque justo. Donec sed nibh tortor. Nulla rutrum dui lectus, id tempor dui posuere pellentesque. Cras quis aliquet lorem. Integer accumsan augue a tellus condimentum tristique. Aenean sed laoreet turpis. Proin vitae quam porttitor, rhoncus massa eget, condimentum ipsum.")
  const [prompt, setPrompt] = useState(originalPrompt);
  const [animation, setAnimation] = useState("running");

  const handleKeyDown = (e: any) => {
    const key = e.key;

    switch (key) {
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
    }
  }


  return <>
    <Header/>
    <main className={styles.container}>
      <section className={styles.section}>
        <input className={styles.input} type="text"
          onChange={(e) => e.target.value = ""}
          onKeyDown={(e) => handleKeyDown(e)}
          onFocus={() => setAnimation("none")}
          onBlur={() => setAnimation("running")}
          autoFocus />
        <span className={styles.substring} data-animation={animation}>{
          substring
              .split("")
              .map((letter, index) => <span key={index} className={`${styles.substring__letter} ${value[index] !== originalPrompt[index] ? styles.error : ""}`}>{letter}</span>)
        }</span>
        <span className={styles.prompt}>{ prompt }</span>
      </section>
    </main>
  </>
}

export default Home;