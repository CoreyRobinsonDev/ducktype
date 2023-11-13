"use client"
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/util/store";
import styles from "./Timer.module.css";
import {
    add_prompt,
    decrement_time,
    save_client_to_cache,
} from "@/util/slices/appSlice";
import Number from "./Number";

export default function Timer({children}: {children: React.ReactNode}) {
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

    useEffect(() => {
        if (time === 0)
            dispatch(save_client_to_cache());
    }, [time])

    return <span className={styles.section}>
        {children}
        <p className={styles.number_container}>
            <Number className={styles.num_1} number={Math.floor(time / 100)} />
            <Number className={styles.num_2} number={Math.floor(time / 10) % 10} />
            <Number className={styles.num_3} number={time % 10} />
        </p>
    </span>
}
