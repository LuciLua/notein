import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BiLeftArrow } from 'react-icons/bi'
import AnimatedElementFade from '../styles/animations/AnimatedElementFade'
import AnimatedPage from "../styles/animations/AnimatedPage"
import styles from "../styles/pages/about.module.scss"

function About() {
    return (
        <>
            <Head>
                <title>ABOUT | LUCULUA</title>
            </Head>
            <div className={styles.container}>
                <AnimatedPage>
                    <div className={styles.containerText}>
                        <h1>ABOUT</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam hic adipisci amet possimus doloribus minus culpa ullam cum exercitationem atque excepturi, iure distinctio aut eaque, assumenda laborum deleniti aspernatur!</p>
                    </div>
                    <AnimatedElementFade>
                        <div className={styles.containerBtn}>
                            <span>
                                to back
                            </span>
                            <button>
                                <Link href={"/"}>
                                    <BiLeftArrow />
                                </Link>
                            </button>
                        </div>
                    </AnimatedElementFade>
                </AnimatedPage>
            </div>
        </>
    )
}

export default About