import * as scraper from 'website-scraper';
import * as path from 'path';
import Auth from './auth';
import * as phantom from 'phantom';

export default class PageDownloader {
  private htmlPath : string;
  private pdfPath : string;
  constructor(protected url : string, private downloadDirectory : string, private defaultFilename : string, private auth?: Auth){
    this.htmlPath = path.join(this.downloadDirectory, this.defaultFilename + '.html');
    this.pdfPath = path.join(this.downloadDirectory, this.defaultFilename + '.pdf');
  }

  private getHeaders() {
    return Object.assign(
      {},
      this.auth ? this.auth.getHeaders() : null,
      {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
      }
    );
  }

  downloadPDF() : Promise<any> {
    return new Promise((resolve, reject) => {
      let options = <phantom.ICreateOptions> { 'web-security': 'no' };
      phantom.create( options,
      (ph) => {
        ph.createPage((page) => {
          page.setHeaders(this.getHeaders());
          page.setViewportSize(1024, 1000);
          page.set('onError', () => {});
          page.open(this.url, (status) => {
            if (status == 'success'){
              page.render(this.pdfPath, () => {
                ph.exit();
                return resolve(this.pdfPath);
              });
            } else {
              ph.exit();
              return reject(new Error('Invalid status: ' + status));
            }
          })
        });
      });
    });
  }

  download() : Promise<any> {
    return new Promise((resolve, reject) => {
      scraper.scrape({
        urls: [this.url],
        directory: this.downloadDirectory,
        defaultFilename: this.defaultFilename + '.html',
        request: {
          headers: this.getHeaders()
        }
      }, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(path.join(this.downloadDirectory, res[0].filename));
        }
      })
    });
  }
}
