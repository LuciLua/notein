// components
import SignIn from "../components/Form/SignIn/SignIn"
import SignUp from "../components/Form/SignUp/SignUp"

function CallSignInOrSignUp({ state, setData, setAllowLoginOrCreate }) {
    if (state == 'signIn') return <SignIn setData={setData} setAllowLoginOrCreate={setAllowLoginOrCreate} />
    else if (state == 'signUp') return <SignUp setData={setData} setAllowLoginOrCreate={setAllowLoginOrCreate} />
}

export default CallSignInOrSignUp