"use strict";
class Auth {
    constructor(headers) {
        this.headers = headers;
    }
    getHeaders() {
        let t = { 'Cookie': this.headers['set-cookie'].slice(1).join(';') };
        return t;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Auth;
