// styles
import styles from "../Form.module.scss"
// icons
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
// React Hooks
import { useEffect, useState } from "react"
// Components
import Header from "../Header/Header"
import Input from "../Input/Input"
// types
import { UserProps } from "../../../types/UserProps"

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
        <div className={styles.c_signUp}>
            <Header title={'Create your account'} description={'Create now'} />
            <div className={styles.inputs}>
                <Input
                    label={"Username"}
                    icon={<AiOutlineUser />}
                    onInput={(e: any) => setUsername(e.target.value)}
                    type={"text"}
                    placeholder="Username"
                    title={"Username"}
                    autocomplete="off" />
                <Input
                    label={"Email"}
                    icon={<AiOutlineUser />}
                    onInput={(e: any) => setEmail(e.target.value)}
                    type={"text"}
                    placeholder="Email"
                    title={"Email"}
                    autocomplete="off" />
                <Input
                    label={"Senha"}
                    icon={<RiLockPasswordLine />}
                    onInput={(e: any) => setPass(e.target.value)}
                    type={"password"}
                    placeholder="Senha"
                    title={"Senha"}
                    autocomplete="off" />
                <Input
                    label={"Confirme sua senha"}
                    icon={<RiLockPasswordLine />}
                    onInput={(e: any) => setPassConfirm(e.target.value)}
                    type={"password"}
                    placeholder="Senha"
                    title={"Senha"}
                    autocomplete="off" />
            </div>
        </div>
    )
}

export default SignUp
