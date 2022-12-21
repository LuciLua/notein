import Link from 'next/link'
import styles from './Menu.module.scss'
import { BiExit } from 'react-icons/bi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { TbNotes } from "react-icons/tb"
import AnimatedElementFromLeft from '../../styles/animations/AnimatedElementFromLeft'

function Menu() {
    return (
            <div className={styles.container}>
                <ul>
                    <li>
                        <Link href={'/logged/notes'}><TbNotes /></Link>
                    </li>
                    <li>
                        <Link href={'/logged/config'}><MdOutlineManageAccounts /></Link>
                    </li>
                    <li>
                        <Link href={'/'}><BiExit /></Link>
                    </li>
                </ul>
            </div>
    )
}

export default Menu