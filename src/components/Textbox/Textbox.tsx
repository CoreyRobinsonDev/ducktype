"use client";
import { useState, useEffect } from "react";

import styles from "./Textbox.module.css";
import { textTS } from "./text";

export default function Textbox() {
    const [input, setInput] = useState("");
    const [idx, setIdx] = useState(Math.floor(Math.random() * textTS.length));
    const [totalCh, setTotalCh] = useState(0);
    const [hasStart, setHasStart] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
            switch (e.key) {
                case "Tab": {
                    e.preventDefault();
                    if (textTS[idx][input.length] === "\t")
                        setInput(i => i + "\t");
                    break;
                }
                case "Enter": {
                    e.preventDefault();
                    if (textTS[idx][input.length] === "\n")
                        setInput(i => i + "\n");
                    break;
                }
                default: {
                    if ((textTS[idx].length === input.length || 
                        textTS[idx][input.length] === "\n" || 
                        textTS[idx][input.length] === "\t") && e.key !== "Backspace") {
                        e.preventDefault();
                    } else if (e.key !== " " && e.key !== "Backspace") {
                        setTotalCh(ch => ch += 1);
                    }
                }
            }
        }
        document.addEventListener("keydown", keyDownHandler);

        return () => document.removeEventListener("keydown", keyDownHandler);
    }, [input, idx])

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (hasStart)
                setTime(t => t += 1);
        }, 1000)

        return () => clearInterval(intervalID);
    }, [hasStart])

    return <section className={styles.section}>
        <pre>
            { textTS[idx].split("").map((letter: string, i: number) => {
                return <span className={`
                    ${textTS[idx][i] === input[i]
                    ? styles.letter_correct
                    : input[i] === undefined ? styles.letter : styles.letter_error} 
                    ${textTS[idx][i] === " " && input[i] !== " " && input[i] !== undefined
                    ? styles.space_error
                    : ""} 
                `}>{letter}</span>})
            }
        </pre>
        <textarea 
        spellCheck={false} 
        onFocus={() => setHasStart(true)}
        onBlur={() => setHasStart(false)}
        onChange={(e) => setInput(e.target.value)} 
        value={input} />
        {hasStart ? "true" : "false"}
        {time}
        <div className={styles.side}></div>
    </section>
}
