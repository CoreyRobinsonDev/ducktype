import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { RefObject } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMoreVert, MdRestartAlt } from "react-icons/md";

import { useAppSelector, useAppDispatch } from "@/util/store";

import styles from "./Toolbar.module.css";
import { 
    set_time,
    restart,
    swap_language,
    gen_prompt,
    save_client_to_cache
    } from "@/util/slices/appSlice";


export default function Toolbar({textboxRef}: {textboxRef: RefObject<HTMLTextAreaElement>}) {
    const time = useAppSelector(state => state.app.time);
    const dispatch = useAppDispatch();
    const [parent] = useAutoAnimate();

    const handleRestart = () => {
        dispatch(restart());
        dispatch(save_client_to_cache());
        textboxRef?.current?.focus();
    }

    const handleTime = (time: number) => {
        dispatch(set_time(time));
        dispatch(restart());
        dispatch(save_client_to_cache());
        textboxRef?.current?.focus();
    }

    const handleLanguage = (lang: string) => {
        dispatch(swap_language(lang));
        dispatch(restart());
        dispatch(gen_prompt());
        dispatch(save_client_to_cache());
        textboxRef?.current?.focus();
    }

    return <section ref={parent} className={styles.section}>
        <ul className={styles.times}>
            <li onClick={() => handleTime(10)}>10</li>
            <li onClick={() => handleTime(30)}>30</li>
            <li onClick={() => handleTime(60)}>60</li>
            <li onClick={() => handleTime(120)}>120</li>
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
            <MdMoreVert />
        </ul>
        <ul className={styles.mobile_list}>
            <GiHamburgerMenu/>
        </ul>
    </section>
}
