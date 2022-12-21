import styles from "./Inputs.module.scss"
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"

function Inputs() {
    return (
        <div className={styles.inputs}>
            <div className={styles.input}>
                <label htmlFor="login">Login</label>
                <div className={styles.icon}>
                    <AiOutlineUser />
                </div>
                <input id="login" type="text" placeholder="Login" />
            </div>
            <div className={styles.input}>
                <label htmlFor="pass">Senha</label>
                <div className={styles.icon}>
                    <RiLockPasswordLine />
                </div>
                <input id="pass" type="password" placeholder="Senha" />
            </div>
        </div>
    )
}

export default Inputs