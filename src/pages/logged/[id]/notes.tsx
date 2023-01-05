// styles
import styles from "../../../styles/pages/notes.module.scss"
// next compoents
import Head from "next/head"
// animations
import AnimatedPage from "../../../styles/animations/AnimatedPage"
// components
import Menu from "../../../components/Menu/Menu"
import MyNotes from "../../../components/MyNotes/MyNotes"
import { useContext, useEffect } from "react"
import { UserContext } from "../../../contexts/UserContext"
import axios from "axios"

function Notes() {

    const [dataForContext, setDataForContext] = useContext<any>(UserContext);

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