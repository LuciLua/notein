import Head from 'next/head'
import AnimatedElementFade from "../styles/animations/AnimatedElementFade"
import AnimatedPage from "../styles/animations/AnimatedPage"
import styles from "../styles/pages/home.module.scss"
import Link from 'next/link'
import Login from '../components/Login/Login'

function Home({ id }: { id: number }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>NoteIn</title>
            </Head>
            <main className={styles.main}>
                <AnimatedPage>
                    <Login />
                </AnimatedPage>
            </main>
        </div>
    )
}

export default Home