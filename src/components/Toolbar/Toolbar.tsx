import { MdMoreVert } from "react-icons/md";
import { 
    TbFileTypeHtml, 
    TbFileTypeJs, 
    TbFileTypeCss, 
    TbFileTypeTs, 
    TbFileTypeSql,
    TbFileTypeJsx,
    TbFileTypeTsx
    } from "react-icons/tb";

import styles from "./Toolbar.module.css";


export default function Toolbar() {
    return <section className={styles.section}>
        <TbFileTypeHtml title="HTML" />
        <TbFileTypeCss title="CSS" />
        <TbFileTypeJs title="Javascript" />
        <TbFileTypeTs title="Typescript" />
        <TbFileTypeJsx title="jsx" />
        <TbFileTypeTsx title="tsx" />
        <TbFileTypeSql title="SQL" />
        <MdMoreVert />
    </section>
}
