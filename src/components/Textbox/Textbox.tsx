"use client";
import { useState, useEffect } from "react";

import styles from "./Textbox.module.css";
import { textTS } from "./text";

export default function Textbox({idx}: {idx:number}) {
    const [input, setInput] = useState("");

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
                        textTS[idx][input.length] === "\t") && e.key !== "Backspace")
                        e.preventDefault();
                }
            }
        }

        document.addEventListener("keydown", keyDownHandler);

        return () => document.removeEventListener("keydown", keyDownHandler);
    }, [input, idx])

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
        <textarea spellCheck={false} onChange={(e) => setInput(e.target.value)} value={input} />
        <div className={styles.side}></div>
    </section>
}
