import Link from 'next/link'
import styles from './Menu.module.scss'
import {AiTwotoneHome, AiTwotoneProfile} from 'react-icons/ai'

function Menu() {
    return (
        <div className={styles.container}>
            <Link href={'/'}><AiTwotoneHome/></Link>
            <Link href={'/about'}><AiTwotoneProfile/></Link>
        </div>
    )
}

export default Menu