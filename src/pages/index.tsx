import Head from 'next/head'
import Image from 'next/image'
import AnimatedElementFade from "../styles/animations/AnimatedElementFade"
import AnimatedPage from "../styles/animations/AnimatedPage"
import styles from "../styles/pages/home.module.scss"

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

import { BiDownArrow, BiRightArrow } from 'react-icons/bi'
import Link from 'next/link'
import AnimatedToDown from '../styles/animations/AnimatedToDown'
import { useEffect } from 'react'

// import  from 'react-scroll'

function Home({ id }: { id: number }) {

    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 2], [-distance, distance]);
    }

    function onScroll() {
        const mainContent = document.querySelector('main')
        const mainContentPositionTop = mainContent.getBoundingClientRect().top


        if (mainContentPositionTop < -200) {
            mainContent.style.top = '100px'
            mainContent.style.opacity = '0%'
            mainContent.style.transition = '0.3s'

        } else {
            mainContent.style.top = '0px'
            mainContent.style.opacity = '100%'
            mainContent.style.transition = '0.3s'
        }
    }

    useEffect(() => {
        addEventListener('scroll', onScroll)

    })

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 100);


    // https://www.framer.com/docs/scroll-animations/

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
                    {/* <motion.h2 style={{ y }}>{`Pokedex`}</motion.h2> */}
                    <div className={styles.containerAnimated}>
                        <motion.div id='c1' style={{ y }} className={styles.items}>
                        </motion.div>
                        <motion.div id='c2' style={{ y }} className={styles.items}>
                        </motion.div>
                        <motion.div id='c3' style={{ y }} className={styles.items}>
                        </motion.div>
                        <motion.div id='c4' style={{ y }} className={styles.items}>
                        </motion.div>
                        <motion.div id='c5' style={{ y }} className={styles.items}>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home