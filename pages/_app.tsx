import { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../styles/global.css";
import { store } from "../lib/store";
import Layout from "../components/Layout";

const App = ({Component, pageProps}: AppProps) => {
  return <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
}

export default App;