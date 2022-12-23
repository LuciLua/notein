import Head from 'next/head'
import Menu from '../../components/Menu/Menu'
import MyNotes from '../../components/MyNotes/MyNotes'
import AnimatedPage from "../../styles/animations/AnimatedPage"
import styles from "../../styles/pages/notes.module.scss"

function Notes() {
    return (
        <div className={styles.container}>
            <Head>
                <title>NoteIn | Name </title>
            </Head>
            <main>
                <Menu />
                <AnimatedPage>
                    <MyNotes />
                </AnimatedPage>
            </main>
        </div>
    )
}

export default Notes