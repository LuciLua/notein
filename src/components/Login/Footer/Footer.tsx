import styles from "./Footer.module.scss"
import { AiFillGithub } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { SiNextdotjs, SiTypescript } from "react-icons/si"
import Link from "next/link"

function Footer(){
    return(
        <footer className={styles.footer}>
        <ul>
            <li><FaReact /></li>
            <li><SiNextdotjs /></li>
            <li><SiTypescript /></li>
        </ul>
        <ul>
            <li>
                <Link href={'https://github.com/LuciLua/newthreejsport'}>
                    <AiFillGithub />
                </Link>
            </li>
        </ul>
    </footer>
    )
}

export default Footer