import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { RefObject } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMoreVert, MdRestartAlt } from "react-icons/md";

import { useAppSelector, useAppDispatch } from "@/util/store";
import styles from "./Toolbar.module.css";
import { 
    set_time,
    restart,
    swap_language,
    gen_prompt,
    clearCache,
    save_client_to_cache
} from "@/util/slices/appSlice";
import {
    toggleDebug,
    toggleTheme
} from "@/util/slices/configSlice";
import Menu from "@/components/Misc/Menu/Menu";


export default function Toolbar({textboxRef}: {textboxRef: RefObject<HTMLTextAreaElement>}) {
    const time = useAppSelector(state => state.app.time);
    const initialTime = useAppSelector(state => state.app.initialTime);
    const language = useAppSelector(state => state.app.language);
    const showDebug = useAppSelector(state => state.config.showDebug);
    const theme = useAppSelector(state => state.config.theme);
    const dispatch = useAppDispatch();
    const [parent] = useAutoAnimate();
    const [showMobile, setShowMobile] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const handleRestart = () => {
        dispatch(restart());
        dispatch(save_client_to_cache());
        textboxRef?.current?.focus();
        setShowMobile(false);
        setShowSettings(false);
    }

    const handleTime = (time: number) => {
        dispatch(set_time(time));
        dispatch(restart());
        dispatch(save_client_to_cache());
        textboxRef?.current?.focus();
        setShowMobile(false);
        setShowSettings(false);
    }

    const handleLanguage = (lang: string) => {
        dispatch(swap_language(lang));
        dispatch(restart());
        dispatch(gen_prompt());
        dispatch(save_client_to_cache());
        textboxRef?.current?.focus();
        setShowMobile(false);
        setShowSettings(false);
    }

    const handleDebug = () => {
        dispatch(toggleDebug());
        setShowMobile(false);
        setShowSettings(false);
    }

    const handleCache = () => {
        dispatch(clearCache());
        setShowMobile(false);
        setShowSettings(false);
    }

    return <section ref={parent} className={styles.section}>
        <ul className={styles.times}>
            <li 
                className={initialTime === 10 ? styles.focus : ""} 
                onClick={() => handleTime(10)}>10</li>
            <li 
                className={initialTime === 30 ? styles.focus : ""} 
                onClick={() => handleTime(30)}>30</li>
            <li 
                className={initialTime === 60 ? styles.focus : ""} 
                onClick={() => handleTime(60)}>60</li>
            <li 
                className={initialTime === 120 ? styles.focus : ""} 
                onClick={() => handleTime(120)}>120</li>
        </ul>
        { time === 0
            && <><button 
                className={styles.restart_btn} 
                onClick={handleRestart}>Restart</button>
                <MdRestartAlt
                size={"2rem"}
                className={styles.mobile_restart_btn} 
                onClick={handleRestart} />
                </>
        }
        <ul className={styles.list}>
            <li 
                className={language === "html" ? styles.focus : ""} 
                onClick={() => handleLanguage("html")}>HTML</li>
            <li 
                className={language === "css" ? styles.focus : ""} 
                onClick={() => handleLanguage("css")}>CSS</li>
            <li 
                className={language === "javascript" ? styles.focus : ""} 
                onClick={() => handleLanguage("javascript")}>JavaScript</li>
            <li 
                className={language === "typescript" ? styles.focus : ""} 
                onClick={() => handleLanguage("typescript")}>TypeScript</li>
            <li
                className={language === "sql" ? styles.focus : ""} 
                onClick={() => handleLanguage("sql")}>SQL</li>
            <li 
                className={language === "python" ? styles.focus : ""} 
                onClick={() => handleLanguage("python")}>Python</li>
            <li 
                className={language === "java" ? styles.focus : ""} 
                onClick={() => handleLanguage("java")}>Java</li>
            <li 
                className={language === "go" ? styles.focus : ""} 
                onClick={() => handleLanguage("go")}>Go</li>
            <li 
                className={language === "rust" ? styles.focus : ""} 
                onClick={() => handleLanguage("rust")}>Rust</li>
            <li 
                className={language === "c" ? styles.focus : ""} 
                onClick={() => handleLanguage("c")}>C</li>
            <li 
                className={language === "csharp" ? styles.focus : ""} 
                onClick={() => handleLanguage("csharp")}>C#</li>
            <li 
                className={language === "cpp" ? styles.focus : ""} 
                onClick={() => handleLanguage("cpp")}>C++</li>
            <MdMoreVert 
            className={styles.dot_menu}
            onClick={() => setShowSettings(!showSettings)} />
        </ul>
        <Menu isVisible={showSettings}>
            <li onClick={handleDebug}>{showDebug ? "Disable Debug Window" : "Enable Debug Window"}</li>
            <li onClick={handleCache}>Clear Cache</li>
        </Menu>
        <GiHamburgerMenu 
            className={styles.hamburger_menu} 
            onClick={() => setShowMobile(!showMobile)} />
        <Menu isVisible={showMobile}>
            <li onClick={() => handleLanguage("html")}>HTML</li>
            <li onClick={() => handleLanguage("css")}>CSS</li>
            <li onClick={() => handleLanguage("javascript")}>JavaScript</li>
            <li onClick={() => handleLanguage("typescript")}>TypeScript</li>
            <li onClick={() => handleLanguage("sql")}>SQL</li>
            <li onClick={() => handleLanguage("python")}>Python</li>
            <li onClick={() => handleLanguage("java")}>Java</li>
            <li onClick={() => handleLanguage("go")}>Go</li>
            <li onClick={() => handleLanguage("rust")}>Rust</li>
            <li onClick={() => handleLanguage("c")}>C</li>
            <li onClick={() => handleLanguage("csharp")}>C#</li>
            <li onClick={() => handleLanguage("cpp")}>C++</li>
        </Menu>
    </section>
}
