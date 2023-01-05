// styles
import styles from "../../../styles/pages/notes.module.scss"
// next compoents
import Head from "next/head"
// animations
import AnimatedElementFromLeft from "../../../styles/animations/AnimatedElementFromLeft"
import AnimatedPage from "../../../styles/animations/AnimatedPage"
// components
import Menu from "../../../components/Menu/Menu"
import MyNotes from "../../../components/MyNotes/MyNotes"
import { useContext, useEffect } from "react"
import { UserContext } from "../../../contexts/UserContext"

function Logged() {
    const [dataForContext, setDataForContext] = useContext<any>(UserContext);
    return (
        <div className={styles.container}>
            <Head>
                <title>NoteIn | Name </title>
            </Head>
            <main>
                <AnimatedElementFromLeft>
                    <Menu />
                </AnimatedElementFromLeft>
                <AnimatedPage delay={1}>
                    <MyNotes />
                </AnimatedPage>
            </main>
        </div>
    )
}

export default Logged