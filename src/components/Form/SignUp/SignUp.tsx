// styles
import styles from "../Form.module.scss"
// icons
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
// React Hooks
import { FormEvent, InputHTMLAttributes, useEffect, useState } from "react"
// Components
import Header from "../Header/Header"
import Input from "../Input/Input"
// types
import { UserProps } from "../../../types/UserProps"
import EventEmitter from "events"

function SignUp({ setStatusLogin }) {

    const [username, setUsername] = useState<String>('')
    const [email, setEmail] = useState<String>('')
    const [pass, setPass] = useState<String>('')
    const [passConfirm, setPassConfirm] = useState<String>('')

    function validUsername(username: any) {
        var regexUsername = new RegExp('[a-zA-Z0-9]')
        return regexUsername.test(username) && username.length >= 5 ? true : false
    }

    function validEmail(email: any) {
        var regexEmail = new RegExp('[a-zA-Z0-9-_!.]+@+[a-zA-Z0-9]+[.]+[a-zA-Z0-9]')
        return regexEmail.test(email) ? true : false
    }

    function validPass(pass: any) {
        var regexPass = new RegExp('[a-zA-Z0-9]')
        return regexPass.test(pass) && pass.length >= 6 ? true : false
    }

    function validPassConfirm(passConfirm: any) {
        return passConfirm == pass ? true : false
    }

    function formValidation(username: String, email: String, pass: String, passConfirm: String) {
        return validUsername(username) &&
            validEmail(email) &&
            validPass(pass) &&
            validPassConfirm(passConfirm)
            ?
            setStatusLogin(true)
            :
            setStatusLogin(false)
    }

    useEffect(() => {
        formValidation(username, email, pass, passConfirm)
    }, [username, email, pass, passConfirm])

    return (
        <div className={styles.c_signUp}>
            <Header title={'Create your account'} description={'Create now'} />
            <div className={styles.inputs}>
                <Input
                    label={"Username"}
                    icon={<AiOutlineUser />}
                    onChange={(e: any) => setUsername(e.target.value)}
                    value={username}
                    type={"text"}
                    placeholder="Username"
                    autocomplete="nickname" />
                <Input
                    label={"Email"}
                    icon={<AiOutlineUser />}
                    onChange={(e: any) => setEmail(e.target.value)}
                    type={"text"}
                    placeholder="Email"
                    value={email}
                    autocomplete="off" />
                <Input
                    label={"Senha"}
                    icon={<RiLockPasswordLine />}
                    onChange={(e: any) => setPass(e.target.value)}
                    type={"password"}
                    placeholder="Senha"
                    value={pass}
                    autocomplete="current-password" />
                <Input
                    label={"Confirme sua senha"}
                    icon={<RiLockPasswordLine />}
                    onChange={(e: any) => setPassConfirm(e.target.value)}
                    type={"password"}
                    placeholder="Senha"
                    value={passConfirm}
                    autocomplete="off" />
            </div>
        </div>
    )
}

export default SignUp
