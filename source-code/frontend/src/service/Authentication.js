export class Authentication {

    static setAuthData(userid, token, type) {
        localStorage.setItem('userId', userid);
        localStorage.setItem('token', token);
        localStorage.setItem('accountType',type);
    }
}