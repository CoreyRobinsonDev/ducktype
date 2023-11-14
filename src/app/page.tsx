"use client";
import { Provider } from 'react-redux';

import store from '@/util/store';
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Debug from '@/components/Debug/Debug';
import Cards from '@/components/Cards/Cards';
import Card from '@/components/Misc/Card/Card';
import RefProvider from '@/components/RefProvider/RefProvider';


export default function Home() {
    return <Provider store={store}>
        <Header/>
        <main className={styles.main}>
            <div className={styles.content_container}>
                <RefProvider />
                <Cards />
            </div>
            <Card>Leaderboard</Card>
            <Debug />
        </main> 
        <Footer/>
    </Provider>
}
store.subscribe(Home);
