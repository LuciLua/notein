import Head from 'next/head'
import Image from 'next/image'
import AnimatedElementFade from "../styles/animations/AnimatedElementFade"
import AnimatedPage from "../styles/animations/AnimatedPage"
import styles from "../styles/pages/home.module.scss"

import { BiDownArrow, BiRightArrow } from 'react-icons/bi'
import Link from 'next/link'
import AnimatedToDown from '../styles/animations/AnimatedToDown'

function Home() {
    return (
        <>
            <Head>
                <title>HOME | LUCULUA</title>
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <AnimatedPage>
                        <div className={styles.containerText}>
                            <h1>HOME</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam hic adipisci amet possimus doloribus minus culpa ullam cum exercitationem atque excepturi, iure distinctio aut eaque, assumenda laborum deleniti aspernatur!</p>
                            <AnimatedToDown delay={0.5} duration={0.3}>
                                <p className={styles.scrollTXT}>Scroll</p>
                            </AnimatedToDown>
                        </div>
                        <AnimatedElementFade>
                            <div className={styles.containerBtn}>
                                <span>
                                    See a bit more about me
                                </span>
                                <button>
                                    <Link href={"/about"}>
                                        <BiRightArrow />
                                    </Link>
                                </button>
                            </div>
                        </AnimatedElementFade>
                    </AnimatedPage>
                </main>
                <div className={styles.section}>
                    <h1>Projects</h1>
                    CARDS
                    CARDS
                    CARDS
                </div>
            </div>
        </>
    )
}

export default Home