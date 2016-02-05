import {default as Crawler, JQ} from './crawler';

import Auth from './auth';
export default class UnitCrawler extends Crawler {
  private content : JQ;
  constructor(url: string, auth: Auth){
    super(url, auth);
  }

  getContent() : Promise<JQ> {
    if (this.content) return Promise.resolve(this.content);
    return this.getPage().then(($el) => {
      this.content = $el;//.find('.block > .blockContents');
      return this.content;
    });
  }

}
