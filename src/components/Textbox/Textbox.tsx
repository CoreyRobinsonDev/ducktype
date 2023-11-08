"use client"
import type { RefObject } from "react";
import { useEffect } from "react";

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
    stop,
    add_character,
    clear_characters,
    remove_character,
} from "@/util/appSlice";
import styles from "./Textbox.module.css";
import Timer from "./Timer";

export default function Textbox({textboxRef}: {textboxRef: RefObject<HTMLTextAreaElement>}) {
    const prompt = useAppSelector(state => state.app.prompt);
    const time = useAppSelector(state => state.app.time);
    const hasStart = useAppSelector(state => state.app.hasStart);
    const characters = useAppSelector(state => state.app.characters);
    const dispatch = useAppDispatch();


    // process typing
    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
        if (hasStart)
            switch (e.key) {
                case "Tab": {
                    e.preventDefault();
                    if (prompt[characters.length] === "\t")
                        dispatch(add_character("\t"));
                    break;
                }
                case "Enter": {
                    e.preventDefault();
                    if (prompt[characters.length] === "\n")
                        dispatch(add_character("\n"));
                    break;
                }
                default: {
                    if (((prompt[characters.length] === "\n" || 
                        prompt[characters.length] === "\t") && 
                        e.key !== "Backspace") ||
                        time === 0) {
                        e.preventDefault();
                    } else if (e.key !== " " && e.key !== "Backspace" && e.key !== "Shift" && time > 0) {
                        if (prompt[characters.length] === e.key)
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
    }, [characters])

    // generate new prompt
    useEffect(() => {
        if (characters.length === prompt.length) {
            dispatch(clear_characters());
            dispatch(gen_prompt());
            dispatch(add_prompt());
        }
    }, [characters])


    return <Timer> 
        <section className={styles.section}>
            <div className={styles.prompt}>
                { prompt.split("").map((letter: string, i: number) => {
                    const cursor = i === characters.length ? styles.cursor : "";
                    if (letter === "\n") return <span key={`newLine-container-${i}`}><span key={`newLine-${i}`} className={`${styles.letter_newLine} ${cursor}`}>x</span><br key={`letterBreak-${i}`} /></span>
                    if (letter === "\t") return <span key={`tab-${i}`} className={`${styles.letter_tab} ${cursor}`}></span>
                    return <span key={`${letter}-${i}`} className={`
                        ${cursor} 
                        ${prompt[i] === characters[i]
                        ? styles.letter_correct
                        : characters[i] === undefined ? styles.letter : styles.letter_error} 
                        ${prompt[i] === " " && characters[i] !== " " && characters[i] !== undefined
                        ? styles.letter_space_error
                        : ""} 
                    `}>{letter}</span>})
                }
            </div>
            <textarea 
            ref={textboxRef}
            name="characters"
            spellCheck={false} 
            onFocus={() => dispatch(start())}
            onBlur={() => dispatch(stop())}
            onChange={(e) => {
                if (e.target.value.length > characters.length) {
                    dispatch(add_character(e.target.value[e.target.value.length - 1])); 
                } else {
                    dispatch(remove_character());
                }
            }}
            value={characters} />
            <div className={styles.side}></div>
        </section>
    </Timer>
}
