import styles from "./Footer.module.css";

export default function Footer() {
    return <footer className={styles.footer}>
        <small>© ducktype, All Rights Reserved.  
        <a href="https://github.com/CoreyRobinsonDev/ducktype" target="_blank" className={styles.link}> &lt;View Code&gt;</a></small>
    </footer>
}
