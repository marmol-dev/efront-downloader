"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var crawler_1 = require('./crawler');
var UnitCrawler = (function (_super) {
    __extends(UnitCrawler, _super);
    function UnitCrawler(url, auth) {
        _super.call(this, url, auth);
    }
    UnitCrawler.prototype.getContent = function () {
        var _this = this;
        if (this.content)
            return Promise.resolve(this.content);
        return this.getPage().then(function ($el) {
            _this.content = $el;
            return _this.content;
        });
    };
    return UnitCrawler;
}(crawler_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UnitCrawler;
