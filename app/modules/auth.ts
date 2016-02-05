export default class Auth {
  constructor(public headers: HEADERS){

  }

  getHeaders() {
    let t = {'Cookie': this.headers['set-cookie'].slice(1).join(';') };
    return t;
  }
}

export interface HEADERS {
  PHPSESSID : string;
}
