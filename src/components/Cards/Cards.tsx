import styles from "./Cards.module.css";
import { useAppSelector } from "@/util/store";

export default function Cards() {
    const wpm = useAppSelector(state => state.app.wpm);
    const bestWpm = useAppSelector(state => state.app.bestWpm);
    const inaccurateWpm = useAppSelector(state => state.app.inaccurateWpm);
    const cpm = useAppSelector(state => state.app.cpm);
    const inaccurateCpm = useAppSelector(state => state.app.inaccurateCpm);
    const accuracy = useAppSelector(state => state.app.accuracy);
    const language = useAppSelector(state => state.app.language);
    const initialTime = useAppSelector(state => state.app.initialTime);
    const charactersTyped = useAppSelector(state => state.app.charactersTyped);
    const charactersCorrect = useAppSelector(state => state.app.charactersCorrect);
    const characters = useAppSelector(state => state.app.characters).length;
    const totalCharacters = useAppSelector(state => state.app.promptsTotal).join("").length;

    return <section className={styles.section}>
        <div className={styles.card}>
            <h2 title="words per minute">wpm</h2>
            <span className={styles.wpm_container}>
                <p className={styles.data}>{Math.round(wpm)}</p>
                <p className={`${styles.data} ${styles.inaccurate_wpm}`}>{Math.round(inaccurateWpm)}</p>
            </span>
            <h2 title="percent of correct characters typed">accuracy</h2>
            <p className={styles.data}>{Math.round(accuracy * 100)}%</p>
        </div>
        <div className={styles.card}>
            <h2 title="highest words per minute">best</h2>
            <p className={styles.data}>{Math.round(bestWpm)}</p>
            <h2 title="characters typed this prompt / total correct characters typed / total characters typed / total characters sent">characters</h2>
            <p className={styles.data_small}>{characters}/{charactersCorrect}/{charactersTyped}/{totalCharacters}</p>
        </div>
        <div className={styles.card}>
            <h2 title="characters per minute">cpm</h2>
            <span className={styles.wpm_container}>
                <p className={styles.data}>{Math.round(cpm)}</p>
                <p className={`${styles.data} ${styles.inaccurate_cpm}`}>{Math.round(inaccurateCpm)}</p>
            </span>
            <h2 title="session time in seconds">time</h2>
            <p className={styles.data_small}>{initialTime}sec</p>
            <h2 title="prompt language">language</h2>
            <p className={styles.data_small}>{language}</p>
        </div>
    </section>
}
