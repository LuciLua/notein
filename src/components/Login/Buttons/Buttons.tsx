import Link from "next/link"
import styles from "./Buttons.module.scss"

function Buttons() {
    return (
        <div className={styles.buttons}>
            <button>
                <Link href={'/logged'}>
                    Login
                </Link>
            </button>
            <div className={styles.create}>
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