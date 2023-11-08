"use client";
import { Provider } from 'react-redux';

import store from '@/util/store';
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Textbox from '@/components/Textbox/Textbox'
import Toolbar from '@/components/Toolbar/Toolbar'
import Footer from '@/components/Footer/Footer'
import Debug from '@/components/Debug/Debug';
import Cards from '@/components/Cards/Cards';


export default function Home() {
    return <Provider store={store}>
        <Header/>
        <main className={styles.main}>
            <Debug />
            <div className={styles.content_container}>
                <Toolbar/>
                <Textbox />
                <Cards />
            </div>
        </main> 
        <Footer/>
    </Provider>
}

store.subscribe(Home);
