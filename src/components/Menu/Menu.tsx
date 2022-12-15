import Link from 'next/link'
import styles from './Menu.module.scss'

function Menu() {
    return (
        <div className={styles.container}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
        </div>
    )
}

export default Menu