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
// utils
import { FormValidation } from "../../../utils/formValidation"

function SignIn({ setAllowLoginOrCreate, setData }) {

    const [email, setEmail] = useState<String>('')
    const [pass, setPass] = useState<String>('')

    useEffect(() => {
        if (FormValidation('SignIn', email, pass)) {
            setAllowLoginOrCreate(true)
            setData({ email, pass })
        } else setAllowLoginOrCreate(false)
    }, [email, pass])

    return (
        <div className={styles.c_signIn}>
            <div className={styles.inputs}>
                <Input
                    label={"Email"}
                    icon={<AiOutlineUser />}
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                    type={"text"}
                    placeholder="Email"
                    autocomplete="email" />
                <Input
                    label={"Senha"}
                    icon={<RiLockPasswordLine />}
                    onChange={(e: any) => setPass(e.target.value)}
                    value={pass}
                    type={"password"}
                    placeholder="Senha"
                    autocomplete="off" />
            </div>
        </div>
    )
}

export default SignIn
