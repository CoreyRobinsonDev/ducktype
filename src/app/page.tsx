"use client";
import { useReducer } from 'react';

import { initialState, reducer, AppState, AppDispatch } from '@/helpers/Context';
import styles from './page.module.css'
import Card from '@/components/Card/Card'
import Header from '@/components/Header/Header'
import Textbox from '@/components/Textbox/Textbox'
import Toolbar from '@/components/Toolbar/Toolbar'
import Footer from '@/components/Footer/Footer'
import Debug from '@/components/Debug/Debug';


export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppState.Provider value={state}>
        <AppDispatch.Provider value={dispatch}>
            <Header/>
            <main className={styles.main}>
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
        </AppDispatch.Provider>
    </AppState.Provider>
}
