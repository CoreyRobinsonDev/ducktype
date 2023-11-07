
import styles from "./Debug.module.css";
import { useAppSelector } from "@/util/store";

export default function Debug() {
    const state = useAppSelector(state => state.app);

    return <aside className={styles.aside}>
        <section className={styles.state_container}>
            {Object.entries(state).map((entry, i) => <p key={`state-${i}`} className={styles.state}>
                <span className={styles.state_key}>&gt; {entry[0]}</span>: <span className={styles.state_value}>{entry[1]}</span>
            </p>)}
        </section>
        <h3>Debug</h3>
    </aside>
}
