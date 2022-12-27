import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import styles from "./Buttons.module.scss"

function Buttons({ statusLogin }) {

    const c_btn = useRef<any>(null)

    const c_btn_span = useRef<any>(null)
    const c_btn_create_span = useRef<any>(null)

    const [hrefLinkByStateLogin, setHrefLinkByStateLogin] = useState<string>('/')

    useEffect(() => {
        changeBtn()
        verifyLoginStateByPathname()
    })


    function verifyLoginStateByPathname() {
        const pathname = window.location.pathname
        if (pathname == '/signUp') {
            c_btn_span.current.innerText = 'Create now'
            c_btn_create_span.current.innerText = 'Login here'
            setHrefLinkByStateLogin('/')
        } else {
            c_btn_span.current.innerText = 'Login'
            c_btn_create_span.current.innerText = 'Create your account here'
            setHrefLinkByStateLogin('/signUp')
        }
    }

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
                    <span ref={c_btn_span} />
                </Link>
            </button>
            <button className={styles.c_btn_create}>
                <span>
                    <Link href={hrefLinkByStateLogin}>
                        <span ref={c_btn_create_span} />
                    </Link>
                </span>
            </button>
        </div>
    )
}

export default Buttons