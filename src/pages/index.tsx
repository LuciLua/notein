// styles
import styles from "../styles/pages/home.module.scss"
// animations
import AnimatedPage from "../styles/animations/AnimatedPage"
// components
import Form from '../components/Form/Form'
// next components
import Head from 'next/head'
// react hooks
import { useState } from "react"

function Home() {
    const [state, setState] = useState('signIn')

    return (
        <div className={styles.container}>
            <Head>
                <title>NoteIn</title>
            </Head>
            <main className={styles.main}>
                <AnimatedPage>
                    <Form state={state} setState={setState} />
                </AnimatedPage>
            </main>
        </div>
    )
}

export default Home