function verifyFormAndChangeDOM(
    state: String,
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

export { verifyFormAndChangeDOM }