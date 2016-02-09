"use strict";
var auth_fetcher_1 = require('./auth-fetcher');
var units_crawler_1 = require('./units-crawler');
var pdf_1 = require('./pdf');
var path = require('path');
class App {
    constructor(baseUrl, username, password, course, startUnit, endUnit, outDirectory, fileName) {
        this.baseUrl = baseUrl;
        this.username = username;
        this.password = password;
        this.course = course;
        this.startUnit = startUnit;
        this.endUnit = endUnit;
        this.outDirectory = outDirectory;
        this.authFetcher = new auth_fetcher_1.default(baseUrl, username, password);
        if (fileName) {
            this.fileName = fileName;
        }
        else {
            this.fileName = this.startUnit + '-' + this.endUnit;
        }
    }
    run() {
        console.log('Downloading units from ' + this.startUnit + ' to ' + this.endUnit + ' for page ' + this.baseUrl);
        return this.authFetcher.fetchAuth().then(auth => {
            this.unitsCrawler = new units_crawler_1.default(this.baseUrl, this.course, auth);
            return this.unitsCrawler.getUnitsFromRange(this.startUnit, this.endUnit);
        })
            .then(units => {
            console.log('Fetched ' + units.length + ' units');
            this.units = units;
            console.log('Downloading ' + units.length + ' units');
            return Promise.all(units.map(unit => unit.downloadPDF()));
        })
            .then(paths => {
            let outPath = path.join(this.outDirectory, this.fileName + '.pdf');
            console.log('Joining ' + paths.length + ' documents in one:' + outPath);
            this.pdf = new pdf_1.default(paths);
            return this.pdf.join(outPath);
        })
            .then(out => {
            console.log('Done. Path:', out);
            return out;
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
