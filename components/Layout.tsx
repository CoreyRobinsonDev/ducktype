import Head from "next/head";

import Footer from "../components/Footer";

export default function Layout({children}: {children: JSX.Element}) {
  return <>
    <Head>
      <meta name="copyright" content="All rights reserved"/>
		  <meta name="description" content="Practice typing in modern programming languages."/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <title>Ducktype</title>
    </Head>
    {children}
    <Footer/>
  </>
}