import styles from "./Menu.module.css";

export default function Menu({children, isVisible}: {children: React.ReactNode, isVisible: boolean}) {
    return <ul className={`${styles.menu} ${isVisible ? styles.show : styles.hide}`}>
        {children}
    </ul>
}
