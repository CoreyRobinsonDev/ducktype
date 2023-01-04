import { GiDuck } from "react-icons/gi";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return <footer className={styles.container}>
    <span className={styles.duck}><GiDuck/></span>
    <small className={styles.text}>Inpired by <a href="https://monkeytype.com/" target="_blank" rel="noreferrer">Monkeytype.</a></small>
    <small className={styles.text}>Prompts grabbed from <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer">W3schools.</a></small>
    <small className={styles.text}><a href="https://github.com/CoreyRobinsonDev/ducktype" target="_blank" rel="noreferrer">{"<View Code>"}</a></small>
  </footer>
}

export default Footer;