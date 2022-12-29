// styles
import styles from "./Form.module.scss"
// react hooks
import { FormEvent, useEffect, useState } from "react"
// axios
import axios from "axios"
// components
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import Buttons from "./Buttons/Buttons"
import Footer from "./Footer/Footer"

function Form({ state, setState }) {
    const [statusLogin, setStatusLogin] = useState<Boolean>(false)
    const [path, setPath] = useState<String>('/')
    const [data, setData] = useState({})

    function verifyIfCanSubmit(e: FormEvent) {
        // se dados estiverem ok
        if (statusLogin) {

            // let responseFromAxios = axios.get("/api/submit")
            //     .then(resp => resp.data)
            //     .then(resp => JSON.stringify(resp))
            //     .catch(err => console.log("err: ", err))

            if (state == 'signUp') {
                // se o formulario for do tipo cadastro, va para o login
                axios.post("/api/submit", data)
                setPath('/')
            } else {
                // se o formulario for do tipo login, va para home
                axios.post("/api/submit", data)
                setPath('/logged/')
            }
        } else {
            console.log('Not yet')
            e.preventDefault()
        }
    }

    // useEffect(() => {
    //     let responseFromAxios = axios.get("/api/submit")
    //         .then(resp => resp.data)
    //         .then(resp => resp.message)
    //     console.log(responseFromAxios)
    // })

    return (
        <form
            className={styles.container}
            onSubmit={(e) => verifyIfCanSubmit(e)}
            action={`${path}`}>
            <div className={styles.tick} />
            {state == 'signIn' ?
                <SignIn setData={setData} setStatusLogin={setStatusLogin} />
                :
                <SignUp setData={setData} setStatusLogin={setStatusLogin} />}
            <Buttons setState={setState} state={state} statusLogin={statusLogin} />
            <Footer />
        </form>
    )
}

export default Form 