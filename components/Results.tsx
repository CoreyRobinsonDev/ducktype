import { useState, useEffect } from "react";

import { useAppSelector } from "../util/hooks";
import styles from "../styles/results.module.css";

export default function Results() {
  const { wpm, rawWPM, accuracy, correctKeysPressed, keysPressed } = useAppSelector(state => state.duck.type);
  const initialTime = useAppSelector(state => state.duck.time.initialTime);
  const originalPrompt = useAppSelector(state => state.duck.text.originalPrompt);
  const hasReset = useAppSelector(state => state.duck);
  const [totalPromptLength, setTotalPromptLength] = useState(originalPrompt.length);

  useEffect(() => {
    setTotalPromptLength(t => t + originalPrompt.length);
  },[originalPrompt])

  useEffect(() => {
    if (hasReset) setTotalPromptLength(0);
  },[hasReset])

  return <section className={styles.results_section}>
      <div className={styles.results__main}>
        <span className={styles.results__result}>
          <p className={styles.results__title}>wpm</p>
          <p className={styles.results__data}>{Math.floor(wpm)}</p>
        </span>
        <span className={styles.results__result}>
          <p className={styles.results__title}>acc</p>
          <p className={styles.results__data}>{Math.floor(accuracy * 100)}%</p>
        </span>
      </div>
      <div className={styles.results__secondary}>
        <span className={styles.results__result}>
          <p className={styles.results__title}>raw</p>
          <p className={styles.results__data}>{Math.floor(rawWPM)}</p>
        </span>
        <span className={styles.results__result}>
          <p className={styles.results__title}>characters</p>
          <p className={styles.results__data}>{correctKeysPressed} / {keysPressed} / {totalPromptLength}</p>
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
}