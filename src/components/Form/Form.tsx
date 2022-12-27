import { useState } from "react"

import styles from "./Form.module.scss"
import Footer from "./Footer/Footer"
import Buttons from "./Buttons/Buttons"

import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"

function Form({ state }) {
    const [statusLogin, setStatusLogin] = useState<Boolean>(false)
    const [path, setPath] = useState<String>('/')

    function verifyIfCanSubmit(e){
        if(statusLogin){
            setPath('/logged')
        }
        else {
            setPath('/')
            e.preventDefault()
        }
    }


    return (
        <form className={styles.container} onSubmit={e => verifyIfCanSubmit(e)} action={`${path}`}>
            <div className={styles.tick} />
            {state == 'signIn' ?
                <SignIn setStatusLogin={setStatusLogin} />
                :
                <SignUp setStatusLogin={setStatusLogin} />}
            <Buttons statusLogin={statusLogin} />
            <Footer />
        </form>
    )
}

export default Form 