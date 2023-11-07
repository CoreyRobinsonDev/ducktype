import { useContext, useEffect } from "react";

import { AppState, AppDispatch } from "@/helpers/Context";
import styles from "./Timer.module.css";

export default function Timer({hasStart}: {hasStart: boolean}) {
    const state = useContext(AppState);
    const dispatch = useContext(AppDispatch);

    useEffect(() => {
        if (hasStart) {
            if (state.time === state.initialTime) {
                dispatch({type: "add_prompt"});
            }
            const intervalID = setInterval(() => {
                if (state.time > 0)
                    dispatch({type: "decrement_time"})
            }, 1000)
            return () => clearInterval(intervalID);
        }
    }, [hasStart, state.time])

    return <span className={styles.time}>
        {state.time}
    </span>
}
