// styles
import styles from "./Buttons.module.scss"
// react hooks
import { useEffect, useRef, useState } from "react"
// next components
import Link from "next/link"

function Buttons({ statusLogin, typeForm, setTypeForm }) {

    const c_btn = useRef<any>(null)

    const c_btn_span = useRef<any>(null)
    const c_btn_create_span = useRef<any>(null)

    const [hrefLinkByStateLogin, setHrefLinkByStateLogin] = useState<string>('/')


    useEffect(() => {
        changeBtn()
        verifyLoginStateByPathname()
    })

    console.log(typeForm)

    function verifyLoginStateByPathname() {
        const pathname = window.location.pathname
        if (pathname == '/signUp') {
            c_btn_span.current.innerText = 'Create now'
            c_btn_create_span.current.innerText = 'Login here'
            setHrefLinkByStateLogin('/')
            setTypeForm('signUp')
        } else {
            c_btn_span.current.innerText = 'Login'
            c_btn_create_span.current.innerText = 'Create your account here'
            setHrefLinkByStateLogin('/signUp')
            setTypeForm('/signIn')

            if (statusLogin) {
            } else {
                c_btn.current.disable
            }
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

            <button
                ref={c_btn}
                className={`${styles.c_btn}`}
                disabled={!statusLogin}>
                <span ref={c_btn_span} />
            </button>

            <button className={styles.c_btn_create} disabled>
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