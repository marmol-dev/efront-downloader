"use strict";
var crawler_1 = require('./crawler');
var url = require('url');
var unit_1 = require('./unit');
class UnitsCrawler extends crawler_1.default {
    constructor(baseUrl, course, auth) {
        super(baseUrl + 'student.php?lessons_ID=' + course, auth);
        this.baseUrl = baseUrl;
    }
    getUnitsNumberFromRange(start, end) {
        return this.getPage().then(($el) => {
            let units = [];
            let $l = $el.find('a.treeLink');
            let $e;
            let toret = $l.each((i, e) => {
                $e = $l.eq(i);
                let tree_url = $e.attr('href');
                let urlParts = url.parse(tree_url, true);
                let unit = parseInt(urlParts.query['view_unit']);
                units.push(unit);
            }).toArray();
            return units.slice(units.lastIndexOf(start), units.lastIndexOf(end) + 1);
            ;
        });
    }
    getUnits(units) {
        return units.map(code => new unit_1.default(code, this.baseUrl, this.auth));
    }
    getUnitsFromRange(start, end) {
        return this.getUnitsNumberFromRange(start, end).then(numbers => {
            return this.getUnits(numbers);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UnitsCrawler;
