// styles
import styles from "../Form.module.scss"
// icons
import { RiLockPasswordLine } from "react-icons/ri"
import { MdOutlineEmail } from "react-icons/md"
// react hooks
import React, { useContext, useEffect, useState } from "react"
// components
import Input from "../Input/Input"
// utils
import { FormValidation } from "../../../utils/formValidation"
import { UserContext } from "../../../contexts/UserContext"

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
                    icon={<MdOutlineEmail />}
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
