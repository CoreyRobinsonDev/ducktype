import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useAppSelector, useAppDispatch } from "@/util/store";
import { MdMoreVert } from "react-icons/md";
import { 
    TbFileTypeHtml, 
    TbFileTypeJs, 
    TbFileTypeCss, 
    TbFileTypeTs, 
    TbFileTypeSql,
    } from "react-icons/tb";
import type { RefObject } from "react";

import styles from "./Toolbar.module.css";
import { 
    set_time,
    restart,
    } from "@/util/slices/appSlice";


export default function Toolbar({textboxRef}: {textboxRef: RefObject<HTMLTextAreaElement>}) {
    const time = useAppSelector(state => state.app.time);
    const dispatch = useAppDispatch();
    const [parent] = useAutoAnimate();

    const handleRestart = () => {
        dispatch(restart());
        textboxRef?.current?.focus();
    }

    const handleTime = (time: number) => {
        dispatch(set_time(time));
        dispatch(restart());
        textboxRef?.current?.focus();
    }

    return <section ref={parent} className={styles.section}>
        <ul className={styles.times}>
            <li onClick={() => handleTime(10)}>10</li>
            <li onClick={() => handleTime(30)}>30</li>
            <li onClick={() => handleTime(60)}>60</li>
            <li onClick={() => handleTime(120)}>120</li>
        </ul>
        {time === 0
        && <button 
            className={styles.restart_btn} 
            onClick={handleRestart}>Restart</button>}
        <ul className={styles.list}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <MdMoreVert />
        </ul>
        <ul className={styles.mobile_list}>
            <TbFileTypeHtml title="HTML" />
            <TbFileTypeCss title="CSS" />
            <TbFileTypeJs title="JavaScript" />
            <TbFileTypeTs title="TypeScript" />
            <TbFileTypeSql title="SQL" />
            <MdMoreVert />
        </ul>
    </section>
}
