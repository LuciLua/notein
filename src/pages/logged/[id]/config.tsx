// styles
import styles from "../../../styles/pages/notes.module.scss"
// next components
import Head from 'next/head'
// animations
import AnimatedPage from "../../../styles/animations/AnimatedPage"
// components
import Menu from '../../../components/Menu/Menu'

function Config() {
    return (
        <div className={styles.container}>
            <Head>
                <title>NoteIn | Config </title>
            </Head>
            <main>
                <Menu />
                <AnimatedPage>
                    <div className={styles.containerText}>
                        <h1>Config</h1>
                        <p>Config about your account</p>
                    </div>
                </AnimatedPage>
            </main>
        </div>
    )
}

export default Config