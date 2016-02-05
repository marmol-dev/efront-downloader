"use strict";
var crawler_1 = require('./crawler');
var request = require('request');
var auth_1 = require('./auth');
var AuthFetcher = (function () {
    function AuthFetcher(baseUrl, username, password) {
        this.baseUrl = baseUrl;
        this.username = username;
        this.password = password;
        this.url = baseUrl + 'index.php?ctg=login';
        this.crawler = new crawler_1.default(this.url);
    }
    AuthFetcher.prototype.fetchAuth = function () {
        var _this = this;
        if (this.auth)
            return Promise.resolve(this.auth);
        return this.crawler.getPage().then(function (pageDom) {
            return pageDom.find('input[name="qfS_csrf"]').val();
        })
            .then(function (csrf) {
            var body = {
                login: _this.username,
                password: _this.password,
                _qf__login_form: '',
                qfS_csrf: csrf,
                submit_login: 'Entrar'
            };
            return new Promise(function (resolve, reject) {
                request(_this.url, { method: 'POST', formData: body }, function (err, response, data) {
                    if (err) {
                        return reject(err);
                    }
                    else {
                        return resolve(response.headers);
                    }
                });
            })
                .then(function (headers) {
                _this.auth = new auth_1.default(headers);
                return _this.auth;
            });
        });
    };
    return AuthFetcher;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthFetcher;
