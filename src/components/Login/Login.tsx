import styles from "./Login.module.scss"
import Footer from "./Footer/Footer"
import Inputs from "./Inputs/Inputs"
import Header from "./Header/Header"
import Buttons from "./Buttons/Buttons"
import { useState } from "react"

function Login() {
    const [statusLogin, setStatusLogin] = useState<Boolean>(false)

    return (
        <div className={styles.container}>
            <div className={styles.tick} />
            <Header />
            <Inputs setStatusLogin={setStatusLogin} />
            <Buttons statusLogin={statusLogin} />
            <Footer />
        </div>
    )
}

export default Login