import { useState } from "react"

import styles from "./Form.module.scss"
import Footer from "./Footer/Footer"
import Buttons from "./Buttons/Buttons"

import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"

function Form({ state }) {
    const [statusLogin, setStatusLogin] = useState<Boolean>(false)

    return (
        <div className={styles.container}>
            <div className={styles.tick} />
            {state == 'signIn' ? <SignIn setStatusLogin={setStatusLogin} /> : <SignUp setStatusLogin={setStatusLogin} />}
            <Buttons statusLogin={statusLogin} />
            <Footer />
        </div>
    )
}

export default Form