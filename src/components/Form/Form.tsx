// styles
import styles from "./Form.module.scss"
// react hooks
import { useCallback, useContext, useEffect, useState } from "react"
// components
import Buttons from "./Buttons/Buttons"
import Footer from "./Footer/Footer"

import { verifyIfCanSubmit } from "../../utils/verifyIfCanSubmitForm"
import CallSignInOrSignUp from "../../utils/callSignInOrSignUp"
import Header from "./Header/Header"
// Context
import { UserContext } from "../../contexts/UserContext"
// access
import axios from "axios"

function Form({ state, setState }) {
    const [allowLoginOrCreate, setAllowLoginOrCreate] = useState<Boolean>(false)
    const [data, setData] = useState({})
    const [path, setPath] = useState<String>('/')

    const [dataForContext, setDataForContext] = useContext<any>(UserContext);


    async function user() {
        const response = await axios.post('/api/utils/getUser', { data: data })
        const responseD = await response.data
        window.location.pathname = `/logged/${responseD._id}`
        setDataForContext(responseD)

    }

    useEffect(() => {
        if (path == `logged`) {
            user()
        }
    }, [path])

    return (
        <form
            className={styles.container}
            onSubmit={(e) =>
                verifyIfCanSubmit(e, allowLoginOrCreate, state, setState, data, setPath)}
            action={`${path}`}>
            <div className={styles.tick} />
            <Header state={state} />
            <CallSignInOrSignUp
                state={state}
                setData={setData}
                setAllowLoginOrCreate={setAllowLoginOrCreate} />
            <Buttons
                setState={setState}
                state={state}
                allowLoginOrCreate={allowLoginOrCreate}
            />
            <Footer />
        </form>
    )
}

export default Form 