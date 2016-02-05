import {default as UnitCrawler} from './unit-crawler';
import Auth from './auth';
import PageDownloader from './page-downloader';

export default class Unit {
  private url : string;
  private pageDownloader : PageDownloader;
  constructor(private code: number, baseUrl: string, auth: Auth){
    this.url = baseUrl + 'student.php?view_unit=' + code + '&popup=1', auth;
    this.pageDownloader = new PageDownloader(this.url, '/tmp/' + Math.floor( Math.random() * (9**9) ) , 'unit-' + code, auth);
  }

  downloadPage() : Promise<any> {
    return this.pageDownloader.download();
  }

  downloadPDF() : Promise<any> {
    return this.pageDownloader.downloadPDF();
  }
}
