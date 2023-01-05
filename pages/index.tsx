import styles from "../styles/home.module.css";
import Header from "../components/Header";
import { useAppSelector } from "../util/hooks";
import Prompt from "../components/Prompt";
import Results from "../components/Results";

const Home = () => {
  const {hasStarted, time} = useAppSelector(state => state.duck.time);

  return <main className={styles.container}>
    <span className={styles.menu}>
      <Header/>
    </span>
    <Results/>
    <p className={styles.time} style={{opacity: hasStarted ? 100 : 0}}>{time}</p>
    <Prompt/> 
  </main>
}

export default Home;