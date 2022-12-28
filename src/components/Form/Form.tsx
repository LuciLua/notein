// styles
import styles from "./Form.module.scss"
// react hooks
import { useState } from "react"

// components
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import Buttons from "./Buttons/Buttons"
import Footer from "./Footer/Footer"

function Form({ state }) {
    const [statusLogin, setStatusLogin] = useState<Boolean>(false)
    const [path, setPath] = useState<String>('/')
    const [typeForm, setTypeForm] = useState<String>('/')

    console.log(typeForm)

    function verifyIfCanSubmit(e: any) {
        // se dados estiverem ok
        if (statusLogin) {
            console.log('ok')
            if (typeForm == 'signUp') {
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
        <form className={styles.container} onSubmit={e => verifyIfCanSubmit(e)} action={`${path}`}>
            <div className={styles.tick} />
            {state == 'signIn' ?
                <SignIn setStatusLogin={setStatusLogin} />
                :
                <SignUp setStatusLogin={setStatusLogin} />}
            <Buttons statusLogin={statusLogin} typeForm={typeForm} setTypeForm={setTypeForm} />
            <Footer />
        </form>
    )
}

export default Form 