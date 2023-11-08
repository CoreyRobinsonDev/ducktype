"use client"
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/util/store";
import styles from "./Timer.module.css";
import {
    add_prompt,
    decrement_time
} from "@/util/appSlice";

export default function Timer() {
    const time = useAppSelector(state => state.app.time);
    const initialTime = useAppSelector(state => state.app.initialTime);
    const hasStart = useAppSelector(state => state.app.hasStart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (hasStart) {
            if (time === initialTime) {
                dispatch(add_prompt());
            }
            const intervalID = setInterval(() => {
                if (time > 0) {
                    dispatch(decrement_time());
                }
            }, 1000)
            return () => clearInterval(intervalID);
        }
    }, [hasStart, time])

    return <span className={styles.time}>
        {time}
    </span>
}
