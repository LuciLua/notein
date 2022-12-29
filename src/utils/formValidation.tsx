function FormValidation(
    typeForm: String,
    email: String, pass: String,
    username?: String, passConfirm?: String) {

    function validUsername(username: any) {
        var regexUsername = new RegExp('[a-zA-Z0-9]')
        return regexUsername.test(username) && username.length >= 5 ? true : false
    }

    function validEmail(email: any) {
        var regexEmail = new RegExp('[a-zA-Z0-9-_!.]+@+[a-zA-Z0-9]+[.]+[a-zA-Z0-9]')
        return regexEmail.test(email) ? true : false
    }

    function validPass(pass: any) {
        var regexPass = new RegExp('[a-zA-Z0-9]')
        return regexPass.test(pass) && pass.length >= 6 ? true : false
    }

    function validPassConfirm(pass: any, passConfirm: any) {
        return passConfirm == pass ? true : false
    }

    if (typeForm === 'SignUp') {
        return validEmail(email) &&
            validPass(pass) &&
            validUsername(username) &&
            validPassConfirm(pass, passConfirm) ? true : false
    }

    else if (typeForm === 'SignIn') {
        return validEmail(email) && validPass(pass) ? true : false
    }
}

export { FormValidation } 