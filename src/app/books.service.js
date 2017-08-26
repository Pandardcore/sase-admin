"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.booksUrl = 'http://localhost:8080/books'; // URL to web api
    }
    BooksService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BooksService.prototype.getBook = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BooksService.prototype.create = function (book) {
        return this.http
            .post(this.booksUrl, JSON.stringify(book), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BooksService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return BooksService;
}());
BooksService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map