"use strict";
var request = require('request');
var cheerio = require('cheerio');
class Crawler {
    constructor(url, auth) {
        this.url = url;
        if (auth)
            this.auth = auth;
    }
    getPage() {
        return new Promise((resolve, reject) => {
            if (this.pageDom) {
                return resolve(this.pageDom);
            }
            request(this.url, { headers: this.auth ? this.auth.getHeaders() : null }, (err, response, data) => {
                let $ = cheerio.load(data);
                if (err) {
                    return reject(err);
                }
                else {
                    this.pageDom = $('html');
                    return resolve(this.pageDom);
                }
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Crawler;
