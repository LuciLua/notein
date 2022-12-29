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
    const [data, setData] = useState({})
    const [path, setPath] = useState<String>('/')

    useEffect(() => {
        if (path == '/logged/') {
            window.location.pathname = `/logged/`
        }
    }, [path])

    async function verifyIfCanSubmit(e: FormEvent) {
        e.preventDefault()
        if (statusLogin) {
            if (state == 'signIn') {
                let verifyInMongo = await axios.post("/api/access", { data: data })
                    .then(resp => {
                        console.log(resp.data)
                        return resp.data
                    })
                    .catch(err => console.log(err))

                if (verifyInMongo == "OK") {
                    console.log("You have a account");
                    setPath('/logged/')
                    // e.stopPropagation()
                } else {
                    alert('create your accont before')
                    setPath('/')
                    setState('signUp')
                }

            } else {
                axios.post("/api/submit", data)
                setState('signIn')
            }
        } else {
            console.log('Not yet')
        }
    }

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