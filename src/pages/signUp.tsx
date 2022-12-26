import Head from 'next/head'
// import AnimatedElementFade from "../styles/animations/AnimatedElementFade"
import AnimatedPage from "../styles/animations/AnimatedPage"
import styles from "../styles/pages/home.module.scss"
import Form from '../components/Form/Form'

function Home({ id }: { id: number }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>NoteIn</title>
            </Head>
            <main className={styles.main}>
                <AnimatedPage>
                    <Form state={'signUp'} />
                </AnimatedPage>
            </main>
        </div>
    )
}

export default Home