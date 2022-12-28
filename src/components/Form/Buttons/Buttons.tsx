// styles
import styles from "./Buttons.module.scss"
// react hooks
import { useEffect, useRef, useState } from "react"
// next components
import Link from "next/link"

function Buttons({ statusLogin, typeForm, setTypeForm, state, setState }) {

    const c_btn = useRef<any>(null)
    const c_btn_span = useRef<any>(null)
    const c_btn_create_span = useRef<any>(null)

    useEffect(() => {
        changeBtn()
        verifyLoginStateByPathname()
    })

    console.log(typeForm)

    function verifyLoginStateByPathname() {
        if (state == 'signUp') {
            c_btn_span.current.innerText = 'Create now'
            c_btn_create_span.current.innerText = 'Login here'
            setTypeForm('signUp')
        } else {
            c_btn_span.current.innerText = 'Login'
            c_btn_create_span.current.innerText = 'Create your account here'
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

    function changeState() {
        state == 'signIn' ? setState('signUp') : setState('signIn')
    }

    return (
        <div className={styles.c_buttons}>
            <button
                ref={c_btn}
                className={`${styles.c_btn}`}
                disabled={!statusLogin}>
                <span ref={c_btn_span} />
            </button>
            <button className={styles.c_btn_create} onClick={() => changeState()}>
                <span ref={c_btn_create_span} />
            </button>
        </div>
    )
}

export default Buttons