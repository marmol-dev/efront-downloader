import Auth from './auth';
import * as request from 'request';
import * as cheerio from 'cheerio';

export interface JQ extends Cheerio {

}

export default class Crawler {
  private pageDom : JQ;
  public auth: Auth;
  constructor(public url: string, auth?: Auth){
    if (auth) this.auth = auth;
  }

  public getPage() : Promise<JQ>{
    return new Promise<JQ>((resolve, reject) => {
      if (this.pageDom) {
        return resolve(this.pageDom);
      }

      request(this.url, {headers: this.auth ? this.auth.getHeaders() : null}, (err, response, data) => {
        let $ = cheerio.load(data);
        if (err) {
          return reject(err);
        } else {
          this.pageDom = $('html');
          return resolve(this.pageDom);
        }
      });
    });
  }
}
