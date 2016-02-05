import AuthFetcher from './auth-fetcher';
import UnitsCrawler from './units-crawler';
import Auth from './auth';
import Unit from './unit';
import * as fs from 'fs';
import PDF from './pdf';
import * as path from 'path';

export default class App {
  private authFetcher : AuthFetcher;
  private unitsCrawler : UnitsCrawler;
  private auth: Auth;
  private units: Unit[];
  private pdf : PDF;
  constructor(private baseUrl: string,
    private username: string,
    private password: string,
    private course: number,
    private startUnit: number,
    private endUnit: number,
    private outDirectory : string
  ){
      this.authFetcher = new AuthFetcher(baseUrl, username, password);
  }

  run() {
    console.log('Downloading units from ' + this.startUnit + ' to ' +  this.endUnit + ' for page ' + this.baseUrl);
    return this.authFetcher.fetchAuth().then(auth => {
      this.unitsCrawler = new UnitsCrawler(this.baseUrl, this.course, auth);
      return this.unitsCrawler.getUnitsFromRange(this.startUnit, this.endUnit);
    })
    .then(units => {
      console.log('Fetched ' + units.length + ' units');
      this.units = units;
      console.log('Downloading ' + units.length + ' units');
      return Promise.all(
        units.map(
          unit => unit.downloadPDF()
        )
      );
    })
    .then(paths => {
      console.log('Joining ' + paths.length + ' documents in one');
      this.pdf = new PDF(paths);
      return this.pdf.join(path.join(this.outDirectory, this.startUnit + '-' + this.endUnit + '.pdf'));
    })
    .then(out => {
      console.log('Done. Path:', out);
    });
  }
}
