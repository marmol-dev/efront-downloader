import {default as Crawler, JQ} from './crawler';
import * as url from 'url';
import {default as Unit} from './unit';
import Auth from './auth';

export default class UnitsCrawler extends Crawler{
  constructor(protected baseUrl: string, course : number, auth: Auth){
    super(baseUrl + 'student.php?lessons_ID=' + course, auth);
  }

  public getUnitsNumberFromRange(start: number, end: number): Promise<number[]>{
    return this.getPage().then(($el) => {
      let units : number[] = [];
      let $l = $el.find('a.treeLink');
      let $e : JQ;

      let toret = $l.each((i, e) => {
        $e = $l.eq(i);
        let tree_url = $e.attr('href');
        let urlParts = url.parse(tree_url, true);
        let unit = parseInt(urlParts.query['view_unit']);
        units.push(unit);
      }).toArray();

      return units.slice(units.lastIndexOf(start), units.lastIndexOf(end) + 1);;
    });
  }

  public getUnits(units : number[]) : Unit[] {
    return units.map(
      code => new Unit(code, this.baseUrl, this.auth)
    );
  }

  public getUnitsFromRange(start: number, end: number): Promise<Unit[]>{
    return this.getUnitsNumberFromRange(start, end).then(numbers => {
      return this.getUnits(numbers);
    })
  }

}
