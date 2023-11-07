import { useContext, useEffect, useState } from "react";

import { AppState, AppDispatch } from "@/helpers/Context";
import styles from "./Timer.module.css";

export default function Timer({hasStart}: {hasStart: boolean}) {
    const state = useContext(AppState);
    const dispatch = useContext(AppDispatch);
    const [time, setTime] = useState(state.initialTime);

    useEffect(() => {
        if (hasStart) {
            if (time === state.initialTime) {
                dispatch({type: "add_prompt"});
            }
            const intervalID = setInterval(() => {
                if (time > 0) {
                    setTime(t => t -= 1);
                    console.log(time);
                    // dispatch({type: "decrement_time"})
                }
            }, 1000)
            return () => clearInterval(intervalID);
        }
    }, [hasStart, time])

    return <span className={styles.time}>
        {time}
    </span>
}
