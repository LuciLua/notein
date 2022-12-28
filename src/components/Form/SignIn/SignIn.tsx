// styles
import styles from "../Form.module.scss"
// icons
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
// react hooks
import React, { useEffect, useState } from "react"
// components
import Header from "../Header/Header"
import Input from "../Input/Input"
// types
import { UserProps } from "../../../types/UserProps"

function SignIn({ setStatusLogin }) {


    const [email, setEmail] = useState<String>('')
    const [pass, setPass] = useState<String>('')

    function validEmail(email: any) {
        var regexEmail = new RegExp('[a-zA-Z0-9-_!.]+@+[a-zA-Z0-9]+[.]+[a-zA-Z0-9]')
        return regexEmail.test(email) ? true : false
    }

    function validPass(pass: any) {
        var regexPass = new RegExp('[a-zA-Z0-9]')
        return regexPass.test(pass) && pass.length >= 6 ? true : false
    }

    function formValidation(email: String, pass: String) {
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
        <div className={styles.c_signIn}>
            <Header title={'Login'} description={'Access your account now'} />
            <div className={styles.inputs}>
                <Input
                    label={"Email"}
                    icon={<AiOutlineUser />}
                    onInput={(e: any) => setEmail(e.target.value)}
                    type={"text"}
                    placeholder="Email"
                    title={"Email"}
                    autocomplete="email" />
                <Input
                    label={"Senha"}
                    icon={<RiLockPasswordLine />}
                    onInput={(e: any) => setPass(e.target.value)}
                    type={"password"}
                    placeholder="Senha"
                    title={"Senha"}
                    autocomplete="off" />
            </div>
        </div>
    )
}

export default SignIn
