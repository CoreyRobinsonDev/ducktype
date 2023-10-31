import styles from './page.module.css'
import Card from '@/components/Card/Card'
import Header from '@/components/Header/Header'
import Textbox from '@/components/Textbox/Textbox'


export default function Home() {
    return <>
        <Header/>
        <main className={styles.main}>
            <Textbox/>
            <div className={styles.card_container}>
                <Card>Info1</Card>
                <Card>Info2</Card>
                <Card>Info3</Card>
                <Card>Info4</Card>
            </div>
        </main> 
    </>
}
