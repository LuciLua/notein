import styles from "./Login.module.scss"
import Footer from "./Footer/Footer"
import Inputs from "./Inputs/Inputs"
import Header from "./Header/Header"
import Buttons from "./Buttons/Buttons"

function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.tick} />
            <Header />
            <Inputs />
            <Buttons />
            <Footer />
        </div>
    )
}

export default Login