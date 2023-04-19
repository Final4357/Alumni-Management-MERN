let EmailRegx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let PassRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

class fromHelper{
    IsEmpty(value) {
        return value.length === 0;
    }
    IsEmail(value) {
        return !EmailRegx.test(value);
    }
    IsPassword(value) {
        return !PassRegx.test(value);
    }
}

export const { IsEmpty, IsEmail, IsPassword } = new fromHelper()