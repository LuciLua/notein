// styles
import styles from "./Header.module.scss"

function Header({ title, description }) {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default Header