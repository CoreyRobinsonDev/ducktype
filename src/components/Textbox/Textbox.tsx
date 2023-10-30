import styles from "./Textbox.module.css";

export default function Textbox() {
    return <section className={styles.section}>
        <pre>
            {`
                function getTime(): number {
                    return new Date().getTime();
                }
            `}
        </pre>
        <textarea/>
    </section>
}
