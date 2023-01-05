import { switchPrompt } from "../lib/features/duckSlice";
import { getRandomPrompt } from "../util/helper";
import { useAppDispatch } from "../util/hooks";

export default function Languages() {
  const dispatch = useAppDispatch();

  return <ul>
    <li><button onClick={() => dispatch(switchPrompt(getRandomPrompt("html")))}>HTML</button></li>
  </ul>
}