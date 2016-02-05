"use strict";
var PDFMerge = require('pdf-merge');
class PDF {
    constructor(paths) {
        this.paths = paths;
        this.pdfMerge = new PDFMerge(paths, '/usr/bin/pdftk');
    }
    join(out) {
        return this.pdfMerge.asNewFile(out).promise();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PDF;
