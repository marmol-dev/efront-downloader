import Crawler from './crawler';
import * as request from 'request';
import {default as Auth, HEADERS} from './auth';

export default class AuthFetcher {
  private crawler : Crawler;
  private url : string;
  private auth: Auth;
  constructor(private baseUrl : string, private username: string, private password: string){
    this.url = baseUrl + 'index.php?ctg=login';
    this.crawler = new Crawler(this.url);
  }

  fetchAuth() : Promise<Auth> {
    if (this.auth) return Promise.resolve(this.auth);
    //First we get the csrf
    return this.crawler.getPage().then(pageDom => {
      return <string> pageDom.find('input[name="qfS_csrf"]').val();
    })
    .then(csrf => {
      let body = {
        login: this.username,
        password: this.password,
        _qf__login_form: '',
        qfS_csrf: csrf,
        submit_login: 'Entrar'
      };

      return new Promise((resolve, reject) => {
        request(this.url, {method: 'POST', formData: body}, (err, response, data) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(response.headers)
          }
        })
      })
      .then(headers => {
        this.auth =  new Auth(<HEADERS> headers);        
        return this.auth;
      });
    });
  }
}
