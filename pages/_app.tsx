import { AppProps } from "next/app";
import { Provider } from "react-redux";
import {useState, useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

import "../styles/global.css";
import { store } from "../lib/store";
import Layout from "../components/Layout";

const firebaseConfig = {
  apiKey: "AIzaSyA883jywesfl-t-k94jHY2VpEK2_wSvDKo",
  authDomain: "ducktype-8eee1.firebaseapp.com",
  projectId: "ducktype-8eee1",
  storageBucket: "ducktype-8eee1.appspot.com",
  messagingSenderId: "1024079624414",
  appId: "1:1024079624414:web:57debf933e0e29aea06a4f",
  measurementId: "G-TKZG2DJZWY",
  databaseURL: "https://ducktype-8eee1-default-rtdb.firebaseio.com/" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

get(child(dbRef, "prompts")).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val())
  } else {
    console.log("lol")
  }
}).catch((err) => {
  console.error(err)
})


function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState<boolean>()

  // skipping hydration step to aviod hydration failed error
  useEffect(() => {
    setShowChild(true)
  },[])

  if (!showChild) return null;
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider >
  }
}

export default App;