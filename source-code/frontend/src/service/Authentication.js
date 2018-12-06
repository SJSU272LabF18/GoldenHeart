export class Authentication {

    static setAuthData(userid, token, type, email) {
        localStorage.setItem('userId', userid);
        localStorage.setItem('token', token);
        localStorage.setItem('role', type);
        localStorage.setItem('email', email);
    }

    static get email() {
        return localStorage.getItem('email') ? localStorage.getItem('email') : 'Saket Thakare';
    }
}