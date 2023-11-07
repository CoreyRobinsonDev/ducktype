"use client";
import { Provider } from 'react-redux';

import store from '@/util/store';
import styles from './page.module.css'
import Card from '@/components/Card/Card'
import Header from '@/components/Header/Header'
import Textbox from '@/components/Textbox/Textbox'
import Toolbar from '@/components/Toolbar/Toolbar'
import Footer from '@/components/Footer/Footer'
import Debug from '@/components/Debug/Debug';


export default function Home() {
    return <Provider store={store}>
        <Header/>
        <main className={styles.main}>
            <Debug />
            <div className={styles.content_container}>
                <Toolbar/>
                <Textbox />
                <div className={styles.card_container}>
                    <Card>Info1</Card>
                    <Card>Info2</Card>
                    <Card>Info3</Card>
                    <Card>Info4</Card>
                </div>
            </div>
        </main> 
        <Footer/>
    </Provider>
}

store.subscribe(Home);
