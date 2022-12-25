import Link from "next/link"
import { AnchorHTMLAttributes, ButtonHTMLAttributes, useEffect, useRef } from "react"
import styles from "./Buttons.module.scss"

function Buttons({ statusLogin }) {

    const c_btn = useRef<any>(null)

    useEffect(() => {
        changeBtn()
    })

    function changeBtn() {
        if (statusLogin) {
            c_btn.current.classList = `${styles.c_btn} ${styles.active}`
        } else {
            c_btn.current.classList = `${styles.c_btn}`
        }
    }

    return (
        <div className={styles.c_buttons}>
            <button className={`${styles.c_btn}`} ref={c_btn}>
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