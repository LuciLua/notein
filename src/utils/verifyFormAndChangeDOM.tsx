function verifyFormAndChangeDOMButtons(state: String,
    c_btn: any, c_btn_createOrLogin: any,
    allowLoginOrCreate: Boolean,
    styles: any) {

    if (state == 'signUp') {
        c_btn.current.innerText = 'Create now'
        c_btn_createOrLogin.current.innerText = 'Login here'
    } else {
        c_btn.current.innerText = 'Login'
        c_btn_createOrLogin.current.innerText = 'Create your account here'
    }

    if (allowLoginOrCreate) {
        c_btn.current.classList = `${styles.c_btn} ${styles.active}`
    } else {
        c_btn.current.classList = `${styles.c_btn}`
        c_btn.current.disable
    }
}

function verifyFormAndChangeDOMHeader(
    state: String,
    h1_title: any,
    h2_description: any) {

    if (state == 'signUp') {
        h1_title.current.innerText = 'Create your account'
        h2_description.current.innerText = 'Create now'
    } else {
        h1_title.current.innerText = 'Sign In'
        h2_description.current.innerText = 'Access your account now'
    }
}


export { verifyFormAndChangeDOMButtons, verifyFormAndChangeDOMHeader }