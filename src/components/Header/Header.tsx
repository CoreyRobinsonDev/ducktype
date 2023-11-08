import {GiDuck} from "react-icons/gi";
import styles from "./Header.module.css";

export default function Header() {
    return <header className={styles.header}>
            <div className={styles.inner_header}>
                <GiDuck/>
                <h1>Ducktype</h1>
            </div>
    </header>
}
