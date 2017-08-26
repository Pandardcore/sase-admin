"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_ckeditor_1 = require("ng2-ckeditor");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var books_component_1 = require("./books.component");
var book_details_component_1 = require("./book-details.component");
var book_add_component_1 = require("./book-add.component");
var chapter_add_component_1 = require("./chapter-add.component");
var characters_component_1 = require("./characters.component");
var characters_search_component_1 = require("./characters-search.component");
var bonus_component_1 = require("./bonus.component");
var characters_service_1 = require("./characters.service");
var books_service_1 = require("./books.service");
var chapters_service_1 = require("./chapters.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            ng2_ckeditor_1.CKEditorModule
        ],
        declarations: [
            app_component_1.AppComponent,
            books_component_1.BooksComponent,
            book_details_component_1.BookDetailsComponent,
            book_add_component_1.BookAddComponent,
            chapter_add_component_1.ChapterAddComponent,
            characters_component_1.CharactersComponent,
            characters_search_component_1.CharactersSearchComponent,
            bonus_component_1.BonusComponent
        ],
        providers: [
            characters_service_1.CharactersService,
            books_service_1.BooksService,
            chapters_service_1.ChaptersService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map