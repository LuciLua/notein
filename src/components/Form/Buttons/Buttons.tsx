// styles
import styles from "./Buttons.module.scss"
// react hooks
import { useEffect, useRef } from "react"
import { verifyFormAndChangeDOMButtons } from "../../../utils/verifyFormAndChangeDOM"

function Buttons({ allowLoginOrCreate, state, setState }) {

    const c_btn = useRef<any>(null)
    const c_btn_createOrLogin = useRef<any>(null)
    const c_btn_remeberme = useRef<any>(null)

    useEffect(() => {
        verifyFormAndChangeDOMButtons(state, c_btn, c_btn_createOrLogin, allowLoginOrCreate, styles, c_btn_remeberme)
    })

    return (
        <div className={styles.c_buttons}>
            <button
                ref={c_btn}
                className={`${styles.c_btn}`}
                disabled={!allowLoginOrCreate}
                type="submit">
            </button>
            <button
                ref={c_btn_remeberme}
                className={styles.c_btn_remeberme}
                onClick={(e) => {e.preventDefault(); alert('ops...')}}
                type="button">
            </button>
            <button
                ref={c_btn_createOrLogin}
                className={styles.c_btn_createOrLogin}
                onClick={() => state == 'signIn' ? setState('signUp') : setState('signIn')}
                type="button">
            </button>
        </div>
    )
}

export default Buttons