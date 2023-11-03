import { useState, useEffect, useContext } from "react";

import styles from "./Textbox.module.css";
import { text } from "@/helpers/text";
import { AppState, AppDispatch } from "@/helpers/Context";

export default function Textbox() {
    const state = useContext(AppState);
    const dispatch = useContext(AppDispatch);
    const [input, setInput] = useState("");
    const [idx, setIdx] = useState(Math.floor(Math.random() * textTS.length));
    const [typedCh, setTypedCh] = useState(0);
    const [hasStart, setHasStart] = useState(false);
    const [maxTime, setMaxTime] = useState(60);
    const [time, setTime] = useState(maxTime);


    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
            switch (e.key) {
                case "Tab": {
                    e.preventDefault();
                    dispatch({type:"swap_language", payload: "java"})
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
                    } else if (e.key !== " " && e.key !== "Backspace" && time > 0) {
                        setTypedCh(ch => ch += 1);
                    }
                }
            }
        }
        document.addEventListener("keydown", keyDownHandler);

        return () => document.removeEventListener("keydown", keyDownHandler);
    }, [input, idx])

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (hasStart && time > 0)
                setTime(t => t -= 1);
        }, 1000)

        return () => clearInterval(intervalID);
    }, [hasStart, time])


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
        {state.language}
        <div className={styles.side}></div>
        <span className={styles.time}>{time}</span>
    </section>
}
