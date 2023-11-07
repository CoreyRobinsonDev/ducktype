import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/util/store";
import {
    type_character,
    calc_accuracy,
    calc_cpm,
    calc_wpm,
    send_correct_character,
    gen_prompt,
    add_prompt,
    start,
    stop
} from "@/util/appSlice";
import styles from "./Textbox.module.css";
import Timer from "./Timer";

export default function Textbox() {
    const prompt = useAppSelector(state => state.app.prompt);
    const time = useAppSelector(state => state.app.time);
    const hasStart = useAppSelector(state => state.app.hasStart);
    const dispatch = useAppDispatch();
    const [input, setInput] = useState("");

    // process typing
    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
        if (hasStart)
            switch (e.key) {
                case "Tab": {
                    e.preventDefault();
                    if (prompt[input.length] === "\t")
                        setInput(i => i + "\t");
                    break;
                }
                case "Enter": {
                    e.preventDefault();
                    if (prompt[input.length] === "\n")
                        setInput(i => i + "\n");
                    break;
                }
                default: {
                    if (((prompt[input.length] === "\n" || 
                        prompt[input.length] === "\t") && 
                        e.key !== "Backspace") ||
                        time === 0) {
                        e.preventDefault();
                    } else if (e.key !== " " && e.key !== "Backspace" && e.key !== "Shift" && time > 0) {
                        if (prompt[input.length] === e.key)
                            dispatch(send_correct_character());
                        dispatch(type_character());
                        dispatch(calc_accuracy());
                        dispatch(calc_cpm());
                        dispatch(calc_wpm());
                    }
                }
            }
        }
        document.addEventListener("keydown", keyDownHandler);

        return () => document.removeEventListener("keydown", keyDownHandler);
    }, [input])

    // generate new prompt
    useEffect(() => {
        if (input.length === prompt.length) {
            setInput("");
            dispatch(gen_prompt());
            dispatch(add_prompt());
        }
    }, [input])


    return <section className={styles.section}>
        <div className={styles.prompt}>
            { prompt.split("").map((letter: string, i: number) => {
                if (letter === "\n") return <br key={`letter-${i}`}/>
                if (letter === "\t") return <span key={`letter-${i}`} className={styles.letter_tab}></span>
                return <span key={`letter-${i}`} className={`
                    ${prompt[i] === input[i]
                    ? styles.letter_correct
                    : input[i] === undefined ? styles.letter : styles.letter_error} 
                    ${prompt[i] === " " && input[i] !== " " && input[i] !== undefined
                    ? styles.space_error
                    : ""} 
                `}>{letter}</span>})
            }
        </div>
        <textarea 
        name="input"
        spellCheck={false} 
        onFocus={() => dispatch(start())}
        onBlur={() => dispatch(stop())}
        onChange={(e) => setInput(e.target.value)} 
        value={input} />
        <div className={styles.side}></div>
        <Timer  />
    </section>
}
