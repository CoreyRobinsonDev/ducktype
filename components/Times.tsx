import { BiTimeFive } from "react-icons/bi";

import styles from "../styles/times.module.css";
import { useAppDispatch, useAppSelector } from "../util/hooks";
import { reset, setTime } from "../lib/features/duckSlice";

export default function Times() {
  const dispatch = useAppDispatch();
  const initialTime = useAppSelector(state => state.duck.time.initialTime);

  return <ul className={styles.time_list}>
    <li className={styles.time_list__icon}><BiTimeFive/></li>
    <li><button className={`${styles.time_list_item} ${initialTime === 15 && styles.selected}`} onClick={() => dispatch(setTime(15))}>15</button></li>
    <li><button className={`${styles.time_list_item} ${initialTime === 30 && styles.selected}`} onClick={() => dispatch(setTime(30))}>30</button></li>
    <li><button className={`${styles.time_list_item} ${initialTime === 60 && styles.selected}`} onClick={() => dispatch(setTime(60))}>60</button></li>
    <li><button className={`${styles.time_list_item} ${initialTime === 120 && styles.selected}`} onClick={() => dispatch(setTime(120))}>120</button></li>
  </ul> 
}