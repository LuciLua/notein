// styles
import styles from "./Form.module.scss"
// react hooks
import { FormEvent, useState } from "react"

// components
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import Buttons from "./Buttons/Buttons"
import Footer from "./Footer/Footer"

function Form({ state, setState }) {
    const [statusLogin, setStatusLogin] = useState<Boolean>(false)
    const [path, setPath] = useState<String>('/')

    function verifyIfCanSubmit(e: FormEvent) {
        // se dados estiverem ok
        if (statusLogin) {
            if (state == 'signUp') {
                // se o formulario for do tipo cadastro, va para o login
                setPath('/')
            } else {
                // se o formulario for do tipo login, va para home
                setPath('/logged')
            }
        } else {
            console.log('Not yet')
            e.preventDefault()
        }
    }


    return (
        <form
            className={styles.container}
            onSubmit={(e) => verifyIfCanSubmit(e)}
            action={`${path}`}>
            <div className={styles.tick} />
            {state == 'signIn' ?
                <SignIn setStatusLogin={setStatusLogin} />
                :
                <SignUp setStatusLogin={setStatusLogin} />}
            <Buttons setState={setState} state={state} statusLogin={statusLogin} />
            <Footer />
        </form>
    )
}

export default Form 