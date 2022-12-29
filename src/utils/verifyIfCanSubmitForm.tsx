
import axios from "axios"
import { FormEvent } from "react"


async function verifyIfCanSubmit(
    e: FormEvent,
    allowLoginOrCreate: Boolean,
    state: String, setState: any,
    data: any,
    setPath: any) {

    e.preventDefault()

    if (allowLoginOrCreate) {
        if (state == 'signIn') {
            let verifyInMongo = await axios.post("/api/access", { data: data })
                .then(resp => {
                    console.log(resp.data)
                    return resp.data
                })
                .catch(err => console.log(err))

            if (verifyInMongo == "OK") {
                console.log("You have a account");
                setPath('/logged/')
            } else {
                console.log("You don't have a account");
                setPath('/')
                setState('signUp')
            }

        } else {
            axios.post("/api/submit", data)
            setState('signIn')
        }
    } else {
        console.log('Not yet')
    }
}

export { verifyIfCanSubmit }