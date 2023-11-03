import { useContext } from "react";

import { AppDispatch } from "@/helpers/Context";
import { MdMoreVert } from "react-icons/md";
import { 
    TbFileTypeHtml, 
    TbFileTypeJs, 
    TbFileTypeCss, 
    TbFileTypeTs, 
    TbFileTypeSql,
    } from "react-icons/tb";

import styles from "./Toolbar.module.css";


export default function Toolbar() {
    const dispatch = useContext(AppDispatch);

    return <section className={styles.section}>
        <ul className={styles.list}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQL</li>
        </ul>
        <ul className={styles.mobile_list}>
            <TbFileTypeHtml title="HTML" />
            <TbFileTypeCss title="CSS" />
            <TbFileTypeJs title="JavaScript" />
            <TbFileTypeTs title="TypeScript" />
            <TbFileTypeSql title="SQL" />
        </ul>
        <MdMoreVert />
    </section>
}
