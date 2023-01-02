// styles
import { useEffect, useRef } from "react"
import { verifyFormAndChangeDOMHeader } from "../../../utils/verifyFormAndChangeDOM"
import styles from "./Header.module.scss"

function Header({ state }) {

    const h1_title = useRef<any>(null)
    const h2_description = useRef<any>(null)

    useEffect(() => {
        verifyFormAndChangeDOMHeader(state, h1_title, h2_description)
    })

    return (
        <div className={styles.header}>
            <h1 ref={h1_title} />
            <h2 ref={h2_description} />
        </div>
    )
}

export default Header