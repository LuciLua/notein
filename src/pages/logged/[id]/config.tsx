// styles
import styles from "../../../styles/pages/notes.module.scss"
// next components
import Head from 'next/head'
// animations
import AnimatedPage from "../../../styles/animations/AnimatedPage"
// components
import Menu from '../../../components/Menu/Menu'

import { UserContext } from "../../../contexts/UserContext"
import { useContext } from "react"

function Config() {

    const [dataForContext, setDataForContext] = useContext(UserContext)
    console.log('in cofnig:', dataForContext)

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