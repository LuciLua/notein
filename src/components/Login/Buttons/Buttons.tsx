import Link from "next/link"
import styles from "./Buttons.module.scss"

function Buttons() {
    return (
        <div className={styles.c_buttons}>
            <button className={styles.c_btn}>
                <Link href={'/logged'}>
                    Login
                </Link>
            </button>
            <div className={styles.c_btn_create}>
                <span>
                    <Link href={'#'}>
                        Crie uma conta aqui
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Buttons