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
var router_1 = require("@angular/router");
var books_service_1 = require("./books.service");
var BooksComponent = (function () {
    function BooksComponent(booksService, router) {
        this.booksService = booksService;
        this.router = router;
    }
    BooksComponent.prototype.getBooks = function () {
        var _this = this;
        this.booksService
            .getBooks()
            .then(function (books) { return _this.books = books; });
    };
    BooksComponent.prototype.deleteBook = function (id) {
        console.log("deleting book : " + id);
    };
    BooksComponent.prototype.showBook = function (id) {
        this.router.navigate(['/books', id]);
    };
    BooksComponent.prototype.newBook = function () {
        this.router.navigate(['/books/new']);
    };
    BooksComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    core_1.Component({
        selector: 'my-books',
        templateUrl: './books.component.html',
        styleUrls: ['./books.component.css']
    }),
    __metadata("design:paramtypes", [books_service_1.BooksService,
        router_1.Router])
], BooksComponent);
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map