import styles from "./Header.module.css";

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.inner_header}>
            <h1>Ducktype</h1>
        </div>
    </header>
}
