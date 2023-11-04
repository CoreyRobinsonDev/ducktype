import { useContext } from "react";

import styles from "./Debug.module.css";
import { AppState } from "@/helpers/Context";

export default function Debug() {
    const state = useContext(AppState);

    return <aside className={styles.aside}>
        <section className={styles.state_container}>
            {Object.entries(state).map((entry, i) => <p className={styles.state}>
                <span className={styles.state_key}>&gt; {entry[0]}</span>: <span className={styles.state_value}>{entry[1]}</span>
            </p>)}
        </section>
        <h3>Debug</h3>
    </aside>
}
