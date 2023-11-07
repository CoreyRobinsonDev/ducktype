import { useState, useEffect, useContext } from "react";

import styles from "./Textbox.module.css";
import { AppState, AppDispatch } from "@/helpers/Context";
import Timer from "./Timer";

export default function Textbox() {
    const state = useContext(AppState);
    const dispatch = useContext(AppDispatch);
    const [input, setInput] = useState("");
    const [hasStart, setHasStart] = useState(false);


    // process typing
    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
        if (hasStart)
            switch (e.key) {
                case "Tab": {
                    e.preventDefault();
                    if (state.prompt[input.length] === "\t")
                        setInput(i => i + "\t");
                    break;
                }
                case "Enter": {
                    e.preventDefault();
                    if (state.prompt[input.length] === "\n")
                        setInput(i => i + "\n");
                    break;
                }
                default: {
                    if (((state.prompt[input.length] === "\n" || 
                        state.prompt[input.length] === "\t") && 
                        e.key !== "Backspace") ||
                        state.time < 0) {
                        e.preventDefault();
                    } else if (e.key !== " " && e.key !== "Backspace" && e.key !== "Shift" && state.time > 0) {
                        if (state.prompt[input.length] === e.key)
                            dispatch({type: "send_correct_character"});
                        dispatch({type: "type_character"});
                        dispatch({type: "calc_accuracy"});
                        dispatch({type: "calc_cpm"});
                        dispatch({type: "calc_wpm"});
                    }
                }
            }
        }
        document.addEventListener("keydown", keyDownHandler);

        return () => document.removeEventListener("keydown", keyDownHandler);
    }, [input, hasStart])

    // generate new prompt
    useEffect(() => {
        if (input.length === state.prompt.length) {
            setInput("");
            dispatch({type: "gen_prompt"});
            dispatch({type: "add_prompt"});
        }
    }, [input])


    return <section className={styles.section}>
        <div>
            { state.prompt.split("").map((letter: string, i: number) => {
                return <span key={`letter-${i}`} className={`
                    ${state.prompt[i] === input[i]
                    ? styles.letter_correct
                    : input[i] === undefined ? styles.letter : styles.letter_error} 
                    ${state.prompt[i] === " " && input[i] !== " " && input[i] !== undefined
                    ? styles.space_error
                    : ""} 
                `}>{letter}</span>})
            }
        </div>
        <textarea 
        name="input"
        spellCheck={false} 
        onFocus={() => setHasStart(true)}
        onBlur={() => setHasStart(false)}
        onChange={(e) => setInput(e.target.value)} 
        value={input} />
        <div className={styles.side}></div>
        <Timer hasStart={hasStart} />
    </section>
}
