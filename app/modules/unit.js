"use strict";
var page_downloader_1 = require('./page-downloader');
class Unit {
    constructor(code, baseUrl, auth) {
        this.code = code;
        this.url = baseUrl + 'student.php?view_unit=' + code + '&popup=1', auth;
        this.pageDownloader = new page_downloader_1.default(this.url, '/tmp/' + Math.floor(Math.random() * (Math.pow(9, 9))), 'unit-' + code, auth);
    }
    downloadPage() {
        return this.pageDownloader.download();
    }
    downloadPDF() {
        return this.pageDownloader.downloadPDF();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Unit;
