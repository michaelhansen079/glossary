(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _glossary_list_glossary_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glossary-list/glossary-list.component */ "./src/app/glossary-list/glossary-list.component.ts");
/* harmony import */ var _glossary_form_glossary_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glossary-form/glossary-form.component */ "./src/app/glossary-form/glossary-form.component.ts");
/* harmony import */ var _glossary_detail_glossary_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glossary-detail/glossary-detail.component */ "./src/app/glossary-detail/glossary-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _glossary_list_glossary_list_component__WEBPACK_IMPORTED_MODULE_1__["GlossaryListComponent"] },
    { path: 'glossary-list', component: _glossary_list_glossary_list_component__WEBPACK_IMPORTED_MODULE_1__["GlossaryListComponent"] },
    { path: 'glossary-form', component: _glossary_form_glossary_form_component__WEBPACK_IMPORTED_MODULE_2__["GlossaryFormComponent"] },
    { path: 'glossary-detail/:id', component: _glossary_detail_glossary_detail_component__WEBPACK_IMPORTED_MODULE_3__["GlossaryDetailComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/glossary-list']\">{{title}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item mr-1\">\n        <a [routerLink]=\"['/glossary-list']\">List</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/glossary-form']\">Create</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Glossary';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _glossary_list_glossary_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glossary-list/glossary-list.component */ "./src/app/glossary-list/glossary-list.component.ts");
/* harmony import */ var _glossary_detail_glossary_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./glossary-detail/glossary-detail.component */ "./src/app/glossary-detail/glossary-detail.component.ts");
/* harmony import */ var _glossary_form_glossary_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glossary-form/glossary-form.component */ "./src/app/glossary-form/glossary-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _glossary_list_glossary_list_component__WEBPACK_IMPORTED_MODULE_6__["GlossaryListComponent"],
                _glossary_detail_glossary_detail_component__WEBPACK_IMPORTED_MODULE_7__["GlossaryDetailComponent"],
                _glossary_form_glossary_form_component__WEBPACK_IMPORTED_MODULE_8__["GlossaryFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/glossary-detail/glossary-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/glossary-detail/glossary-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Detail of a glossary\n</h2>\n<form (ngSubmit)=\"delete()\">\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">English</label>\n    <input class=\"form-control col-10\" type=\"text\" value=\"{{glossary.english}}\" name=\"english\" readonly>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Bosnian</label>\n    <input class=\"form-control col-10\" type=\"text\" value=\"{{glossary.bosnian}}\" name=\"bosnian\" readonly>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">ImageUrl</label>\n    <input class=\"form-control col-10\" type=\"text\" value=\"{{glossary.imageUrl}}\" name=\"imageUrl\" readonly>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary mr-1\">Delete</button>\n  <a class=\"btn btn-secondary\" role=\"button\" [routerLink]=\"['/glossary-list']\">Back</a>\n</form>\n"

/***/ }),

/***/ "./src/app/glossary-detail/glossary-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/glossary-detail/glossary-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: GlossaryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlossaryDetailComponent", function() { return GlossaryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlossaryDetailComponent = /** @class */ (function () {
    function GlossaryDetailComponent(router) {
        this.router = router;
        this.glossary = {
            id: 1,
            english: "money",
            bosnian: "novac",
            imageUrl: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/money.png"
        };
    }
    GlossaryDetailComponent.prototype.ngOnInit = function () {
    };
    GlossaryDetailComponent.prototype.delete = function () {
        // call backend - DELETE
        this.router.navigate(['/glossary-list']);
    };
    GlossaryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-glossary-detail',
            template: __webpack_require__(/*! ./glossary-detail.component.html */ "./src/app/glossary-detail/glossary-detail.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GlossaryDetailComponent);
    return GlossaryDetailComponent;
}());



/***/ }),

/***/ "./src/app/glossary-form/glossary-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/glossary-form/glossary-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create new Glossary</h2>\n\n<form (ngSubmit)=\"create()\">\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">English</label>\n    <input class=\"form-control col-10\" type=\"text\" [(ngModel)]=\"glossary.english\" name=\"english\">\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">Bosnian</label>\n    <input class=\"form-control col-10\" type=\"text\" [(ngModel)]=\"glossary.bosnian\"  name=\"bosnian\">\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-2 col-form-label\">ImageUrl</label>\n    <input class=\"form-control col-10\" type=\"text\" [(ngModel)]=\"glossary.imageUrl\"  name=\"imageUrl\">\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary mr-1\">Delete</button>\n  <a class=\"btn btn-secondary\" role=\"button\" [routerLink]=\"['/glossary-list']\">Back</a>\n</form>\n"

/***/ }),

/***/ "./src/app/glossary-form/glossary-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/glossary-form/glossary-form.component.ts ***!
  \**********************************************************/
/*! exports provided: GlossaryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlossaryFormComponent", function() { return GlossaryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlossaryFormComponent = /** @class */ (function () {
    function GlossaryFormComponent(router) {
        this.router = router;
        this.glossary = {
            english: "",
            bosnian: "",
            imageUrl: ""
        };
    }
    GlossaryFormComponent.prototype.ngOnInit = function () {
    };
    GlossaryFormComponent.prototype.create = function () {
        //call backend - POST
        this.router.navigate(['/glossary-list']);
    };
    GlossaryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-glossary-form',
            template: __webpack_require__(/*! ./glossary-form.component.html */ "./src/app/glossary-form/glossary-form.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GlossaryFormComponent);
    return GlossaryFormComponent;
}());



/***/ }),

/***/ "./src/app/glossary-list/glossary-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/glossary-list/glossary-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  List all the glossaries - {{nrGlossaries}}\n</h1>\n<ul class=\"list-unstyled\">\n  <li class=\"media my-4\" *ngFor=\"let glossary of glossaries\">\n    <img class=\"d-flex mr-3 img-thumbnail\" src=\"{{glossary.imageUrl}}\"/>\n    <a [routerLink]=\"['/glossary-detail/glossary.id']\">\n      <span class=\"mt-0 mb-1\">\n        <h5>{{glossary.english}}</h5>\n        <h5>{{glossary.bosnian}}</h5>\n      </span>\n    </a>\n\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/glossary-list/glossary-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/glossary-list/glossary-list.component.ts ***!
  \**********************************************************/
/*! exports provided: GlossaryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlossaryListComponent", function() { return GlossaryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _glossary_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glossary.service */ "./src/app/glossary.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlossaryListComponent = /** @class */ (function () {
    function GlossaryListComponent(glossaryService) {
        this.glossaryService = glossaryService;
        this.glossaries = [
            {
                id: 1,
                english: 'apple',
                bosnian: 'jabuka',
                imageUrl: 'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/apple.png'
            },
            {
                id: 2,
                english: 'banana',
                bosnian: 'banana',
                imageUrl: 'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/banana.png'
            }
        ];
    }
    GlossaryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.glossaryService.countGlossaries().subscribe(function (nr) { return _this.nrGlossaries = nr; });
    };
    GlossaryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-glossary-list',
            template: __webpack_require__(/*! ./glossary-list.component.html */ "./src/app/glossary-list/glossary-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_glossary_service__WEBPACK_IMPORTED_MODULE_1__["GlossaryService"]])
    ], GlossaryListComponent);
    return GlossaryListComponent;
}());



/***/ }),

/***/ "./src/app/glossary.service.ts":
/*!*************************************!*\
  !*** ./src/app/glossary.service.ts ***!
  \*************************************/
/*! exports provided: GlossaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlossaryService", function() { return GlossaryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlossaryService = /** @class */ (function () {
    function GlossaryService(http) {
        this.http = http;
    }
    GlossaryService.prototype.countGlossaries = function () {
        return this.http.get('/glossaries/count');
    };
    GlossaryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GlossaryService);
    return GlossaryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/IdeaProjects/glossary/glossary-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map