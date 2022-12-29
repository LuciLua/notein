// styles
import styles from "./Buttons.module.scss"
// react hooks
import { useEffect, useRef, useState } from "react"
// next components
import Link from "next/link"

function Buttons({ statusLogin, state, setState }) {

    const c_btn = useRef<any>(null)
    const c_btn_span = useRef<any>(null)
    const c_btn_create_span = useRef<any>(null)

    useEffect(() => {
        changeBtn()
        verifyLoginState()
    })

    function verifyLoginState() {
        if (state == 'signUp') {
            c_btn_span.current.innerText = 'Create now'
            c_btn_create_span.current.innerText = 'Login here'
        } else {
            c_btn_span.current.innerText = 'Login'
            c_btn_create_span.current.innerText = 'Create your account here'

            return !statusLogin ? c_btn.current.disable : null
        }
    }

    function changeBtn() {
        if (statusLogin) {
            c_btn.current.classList = `${styles.c_btn} ${styles.active}`
        } else {
            c_btn.current.classList = `${styles.c_btn}`
        }
    }

    function changeState() {
        state == 'signIn' ? setState('signUp') : setState('signIn')
    }

    return (
        <div className={styles.c_buttons}>
            <button
                ref={c_btn}
                className={`${styles.c_btn}`}
                disabled={!statusLogin}
                type="submit">
                <span ref={c_btn_span} />
            </button>
            <button
                className={styles.c_btn_create}
                onClick={changeState}
                type="button">
                <span ref={c_btn_create_span} />
            </button>
        </div>
    )
}

export default Buttons