// styles
import styles from "../../../styles/pages/notes.module.scss"
// next compoents
import Head from "next/head"
// animations
import AnimatedPage from "../../../styles/animations/AnimatedPage"
// components
import Menu from "../../../components/Menu/Menu"
import MyNotes from "../../../components/MyNotes/MyNotes"

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