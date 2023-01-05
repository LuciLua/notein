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
import { UserContext } from "../../../contexts/UserContext"
import { useContext, useEffect } from "react"
import getUserById from "../../api/utils/getUserById"
import axios from "axios"

function Logged() {
    const [dataForContext, setDataForContext] = useContext<any>(UserContext)

    useEffect(() => {

        setDataForContext(
            {
                userId: window.location.href.split('/logged/')[1],
                others: 'aaa'
            },
        )

        async function geet() {
        }

        geet()

    }, [])

    console.log('in logged:', dataForContext)

    return (
        <div className={styles.container}>
            <Head>
                <title>NoteIn |  </title>
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