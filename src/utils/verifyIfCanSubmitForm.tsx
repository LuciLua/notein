import axios from "axios"
import { FormEvent } from "react"

async function verifyIfCanSubmit(
    e: FormEvent,
    allowLoginOrCreate: Boolean,
    state: String, setState: any,
    data: any,
    setPath: any) {

    e.preventDefault()
    const api_base_path = '/api/utils/'

    async function ifAllowLoginOrCreate() {
        const verify = await verifyInMongoIfAccountExists()
        state == 'signIn' ? ifSignIn(verify) : ifSignUp(verify)
    }

    function ifNotAllowLoginOrCreate() {
        console.log('[FAIL] Not yet.. you do not fill all areas')
    }

    async function ifSignIn(verify: String) {
        if (verify == "AccountExists") {

            console.log('[OK] Login successful')
            await setPath('logged')

        } else {
            console.log('[FAIL] Login fail. incorrect data or not exists this account.')
            setPath('/')
            setState('signUp');
        }
    }

    async function ifSignUp(verify: String) {
        if (verify == "AccountExists") {
            console.log('[FAIL] E-mail already registred.')
            console.log(data)
        } else {
            console.log('[OK] SignUp successful')
            axios.post(`${api_base_path}submit`, data)
            setState('signIn')
        }
    }

    async function verifyInMongoIfAccountExists() {
        return await axios.post(`${api_base_path}access`, { data: data })
            .then(resp => resp.data)
            .catch(err => console.log(err))
    }

    allowLoginOrCreate ? ifAllowLoginOrCreate() : ifNotAllowLoginOrCreate()
}

export { verifyIfCanSubmit }