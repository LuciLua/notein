import styles from "../Inputs.module.scss"
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { useEffect, useState } from "react"
import Header from "../Header/Header"

function SignUp({ setStatusLogin }) {


    const [username, setUsername] = useState<String>('')
    const [email, setEmail] = useState<String>('')
    const [pass, setPass] = useState<String>('')
    const [passConfirm, setPassConfirm] = useState<String>('')


    function validUsername(username: any) {
        var regexObj = new RegExp('user+_+[a-zA-Z0-9]+_+[0-9]')
        if (regexObj.test(username) && username.length >= 5) {
            return true
        } else return false
    }

    function validEmail(email: any) {
        var regexObj = new RegExp('[a-zA-Z0-9-_!.]+@+[a-zA-Z0-9]+[.]+[a-zA-Z0-9]')
        if (regexObj.test(email)) return true
        else return false
    }

    function validPass(pass: any) {
        var regexObj = new RegExp('[a-zA-Z0-9]')
        if (regexObj.test(pass) && pass.length >= 6) {
            return true
        } else {
            return false
        }
    }

    function validPassConfirm(passConfirm: any) {
        if (passConfirm == pass) return true
        else return false
    }


    function formValidation(username: any, email: any, pass: any, passConfirm: any) {
        if (validUsername(username) &&
            validEmail(email) &&
            validPass(pass) &&
            validPassConfirm(passConfirm)) {
            setStatusLogin(true)
        } else {
            setStatusLogin(false)
        }
    }

    useEffect(() => {
        formValidation(username, email, pass, passConfirm)
    }, [username, email, pass, passConfirm])

    return (
        <>
            <Header title={'Create your account'} description={'Create now'} />
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <label htmlFor="username">Username</label>
                    <div className={styles.icon}>
                        <AiOutlineUser />
                    </div>
                    <input
                        autoComplete="off"
                        onInput={(e: any) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        placeholder="Username"
                        alt="user_username_favNumber | ex.: user_luci_01"
                        title="user_username_favNumber | ex.: user_luci_01"
                    />
                </div>
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
                <div className={styles.input}>
                    <label htmlFor="passConfirm">Confirme sua senha</label>
                    <div className={styles.icon}>
                        <RiLockPasswordLine />
                    </div>
                    <input
                        id="passConfirm"
                        type="password"
                        placeholder="Senha"
                        onInput={(e: any) => setPassConfirm(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default SignUp
