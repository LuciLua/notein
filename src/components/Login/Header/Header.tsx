import styles from "./Header.module.scss"

function Header(){
    return(
        <div className={styles.header}> 
            <h1>Welcome to NoteIn!</h1>
            <h2>Access your notin personal page</h2>
        </div>
    )
}

export default Header