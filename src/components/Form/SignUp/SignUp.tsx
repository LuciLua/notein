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
// utils
import { FormValidation } from "../../../utils/formValidation"

function SignUp({ setAllowLoginOrCreate, setData }) {

    const [username, setUsername] = useState<String>('')
    const [email, setEmail] = useState<String>('')
    const [pass, setPass] = useState<String>('')
    const [passConfirm, setPassConfirm] = useState<String>('')

    useEffect(() => {
        if (FormValidation('SignUp', email, pass, username, passConfirm)) {
            setAllowLoginOrCreate(true)
            setData({ username, email, pass })
        } else setAllowLoginOrCreate(false)
    }, [email, pass, username, passConfirm])

    return (
        <div className={styles.c_signUp}>
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
