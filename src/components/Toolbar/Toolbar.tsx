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
import styles from "./Toolbar.module.css";
import { set_time } from "@/util/appSlice";


export default function Toolbar() {
    const time = useAppSelector(state => state.app.time);
    const dispatch = useAppDispatch();
    const [parent] = useAutoAnimate();

    return <section ref={parent} className={styles.section}>
        <ul className={styles.times}>
            <li onClick={() => dispatch(set_time(10))}>10</li>
            <li onClick={() => dispatch(set_time(30))}>30</li>
            <li onClick={() => dispatch(set_time(60))}>60</li>
            <li onClick={() => dispatch(set_time(120))}>120</li>
        </ul>
        {time === 0
        && <button className={styles.restart_btn}>Restart</button>}
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
