import { GiDuck } from "react-icons/gi";

import styles from "./header.module.css";

const Header = () => {
  return <header className={styles.container}>
    <span className={styles.title}>
      <h1>Ducktype</h1>
      <span className={styles.duck}><GiDuck/></span>
    </span>
  </header>
}

export default Header;