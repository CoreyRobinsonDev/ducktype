"use client";
import { ChangeEvent, useState } from "react";
import styles from "./Textbox.module.css";
import { text } from "./text";

export default function Textbox() {
    const [input, changeInput] = useState("");
    const [letterClass, changeLetterClass] = useState(styles.letter); 
    const randNum = Math.floor(Math.random() * text.length);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        changeInput(e.target.value);
    }

    return <section className={styles.section}>
        <pre>
        {text[randNum].split("").map((letter) => <span className={letterClass}>{letter}</span>)}
        </pre>
        <textarea onChange={(e) => handleChange(e)} value={input} />
    </section>
}
