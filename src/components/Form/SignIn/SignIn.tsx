import styles from "../Inputs.module.scss"
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { useEffect, useState } from "react"
import Header from "../Header/Header"

function SignIn({ setStatusLogin }) {


    const [email, setEmail] = useState<String>('')
    const [pass, setPass] = useState<String>('')


    function validEmail(email: any) {
        // var valid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
        // var valid = /\S+@\S+\.\S+/

        // var regexObj = new RegExp('[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[a-zA-Z0-9]')
        var regexObj = new RegExp('[a-zA-Z0-9-_!.]+@+[a-zA-Z0-9]+[.]+[a-zA-Z0-9]')
        if (regexObj.test(email)) {
            return true
        } else {
            return false
        }
    }

    function validPass(pass: any) {

        var regexObj = new RegExp('[a-zA-Z0-9]')
        if (regexObj.test(pass) && pass.length >= 6) {
            return true
        } else {
            return false
        }
    }

    function formValidation(email, pass) {
        if (validEmail(email) && validPass(pass)) {
            setStatusLogin(true)
        } else {
            setStatusLogin(false)
        }
    }

    useEffect(() => {
        formValidation(email, pass)
    }, [email, pass])

    return (
        <>
            <Header title={'Login'} description={'Access your account now'} />
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <label htmlFor="email">Email</label>
                    <div className={styles.icon}>
                        <AiOutlineUser />
                    </div>
                    <input
                        autoComplete="off"
                        onInput={(e: any) => setEmail(e.target.value)}
                        id="email"
                        type="text"
                        placeholder="Email" />
                </div>
                <div className={styles.input}>
                    <label htmlFor="pass">Senha</label>
                    <div className={styles.icon}>
                        <RiLockPasswordLine />
                    </div>
                    <input
                        id="pass"
                        type="password"
                        placeholder="Senha"
                        onInput={(e: any) => setPass(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default SignIn
