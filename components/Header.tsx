import { GiDuck } from "react-icons/gi";

import styles from "../styles/header.module.css";
import Languages from "./Languages";
import Times from "./Times";

const Header = () => {
  return <header className={styles.container}>
    <span className={styles.title}>
      <h1>Ducktype</h1>
      <span className={styles.duck}><GiDuck/></span>
    </span>
    <Languages/>
    <Times/>
  </header>
}

export default Header;