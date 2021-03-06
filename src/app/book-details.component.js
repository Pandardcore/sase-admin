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
var router_2 = require("@angular/router");
var common_1 = require("@angular/common");
var books_service_1 = require("./books.service");
require("rxjs/add/operator/switchMap");
var BookDetailsComponent = (function () {
    function BookDetailsComponent(booksService, route, location, router) {
        this.booksService = booksService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.newBook = false;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.booksService.getBook(+params['id']).then(function (book) { return _this.book = book; });
        });
    };
    BookDetailsComponent.prototype.newChapter = function () {
        this.router.navigate(['/books', this.book.id, 'newChapter']);
    };
    return BookDetailsComponent;
}());
BookDetailsComponent = __decorate([
    core_1.Component({
        selector: 'book-details',
        templateUrl: './book-details.component.html',
        styleUrls: ['./book-details.component.css']
    }),
    __metadata("design:paramtypes", [books_service_1.BooksService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_2.Router])
], BookDetailsComponent);
exports.BookDetailsComponent = BookDetailsComponent;
//# sourceMappingURL=book-details.component.js.map