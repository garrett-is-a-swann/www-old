webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app\">\n    <div class=\"grid-y medium grid-frame\">\n\n        <header></header>\n\n        <navigation></navigation>\n\n        <div class=\"cell medium-auto medium-cell-block-container\">\n            <router-outlet class=\"padded\"></router-outlet>\n        </div>\n        <footer></footer>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_navigation__ = __webpack_require__("../../../../../src/app/nav/navigation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__("../../../../../src/app/home/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__errorpage_errorpage__ = __webpack_require__("../../../../../src/app/errorpage/errorpage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header__ = __webpack_require__("../../../../../src/app/header/header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__("../../../../../src/app/login/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_form__ = __webpack_require__("../../../../../src/app/form/form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidebar_content_sidebar_content__ = __webpack_require__("../../../../../src/app/sidebar-content/sidebar-content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer__ = __webpack_require__("../../../../../src/app/footer/footer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import our Components









// Other's Components

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginComponent */] },
    { path: 'links', component: __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomeComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomeComponent */] },
    { path: 'about-me', component: __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__errorpage_errorpage__["a" /* ErrorComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__nav_navigation__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_8__errorpage_errorpage__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__form_form__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sidebar_content_sidebar_content__["a" /* SidebarContent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_pdf_viewer__["PdfViewerModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/errorpage/errorpage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/errorpage/errorpage.html":
/***/ (function(module, exports) {

module.exports = "<h2>Under Construction<h2>\n"

/***/ }),

/***/ "../../../../../src/app/errorpage/errorpage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'errorpage',
        template: __webpack_require__("../../../../../src/app/errorpage/errorpage.html"),
        styles: [__webpack_require__("../../../../../src/app/errorpage/errorpage.css")]
    })
], ErrorComponent);

//# sourceMappingURL=errorpage.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cell medium-cell-block-container footer\">\n    <a style=\"text-align: center;\" href=\"mailto:gswann@mail.csuchico.edu\"> <small >Contact</small> </a>\n    <small style=\"text-align: center;\">All images by Garrett Swann</small>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.css")]
    })
], FooterComponent);

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" *ngFor=\"let content of keys()\">\n    <div class=\"row\" [ngSwitch]=\"config.fields[content].type\">\n        <input  *ngSwitchCase=\"'input'\" \n                 class=\"column {{config.fields[content].style}}\" \n                 id=\"{{config.fields[content].id}}\"\n                 #config.fields[content].id\n                 name=\"config.fields[content].id\"\n                 type=\"{{config.fields[content].field}}\" \n                 placeholder=\"{{config.fields[content].placeholder}}\"\n                 [(ngModel)]=\"config.fields[content].value\"\n                 >\n        <button *ngSwitchCase=\"'button'\" \n                 class='{{config.fields[content].style}} button column' \n                 (click)=\"finish()\">{{config.fields[content].text}}</button>\n        <div *ngIf=\"config.fields[content].error != ''\"\n                 class=\"alert alert-danger\">\n            {{config.fields[content].error}}\n        </div>\n        {{config.fields[content].error}}\n        {{config.fields[content].value}}\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/form/form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent(http) {
        this.http = http;
        this.configReturn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormComponent.prototype.ngOnInit = function () {
        for (var row in this.config.fields) {
            this.config.fields[row].error = '';
        }
    };
    FormComponent.prototype.keys = function () {
        return Object.keys(this.config.fields);
    };
    FormComponent.prototype.finish = function () {
        var _this = this;
        var errors = false;
        // Note to h@xx0rz: I'm only going to do password comparison checks on the client side.
        //      If you decide to mess with the validation, I won't even bat an eye but have fun
        //      logging into my site.
        for (var validate in this.config.validation) {
            if (validate == 'equal') {
                for (var i = 0; i < this.config.validation.equal.length; i++) {
                    var comparator = this.config.validation.equal[i][0];
                    for (var j = 1; j < this.config.validation.equal[i].length; j++) {
                        if (this.config.fields[comparator].value != this.config.fields[this.config.validation.equal[i][j]].value) {
                            for (var k = 0; k < this.config.validation.equal[i].length; k++) {
                                this.config.fields[this.config.validation.equal[i][k]].error = "These don't match!";
                            }
                            errors = true;
                            break;
                        }
                    }
                }
            }
        }
        if (!errors) {
            console.log(this.config.endpoint);
            this.http.post(this.config.endpoint, this.config.fields.email ? {
                // Build POST to send
                username: this.config.fields.username.value,
                email: this.config.fields.email.value,
                password: this.config.fields.password.value
            } : {
                username: this.config.fields.username.value,
                password: this.config.fields.password.value
            })
                .subscribe(function (data) {
                console.log(errors);
                console.log(data);
                console.log(data['username']);
                _this.config.fields.username.error = data.username ? data.username : '';
                _this.config.fields.email.error = data.email ? data.email : '';
                _this.config.fields.password.error = data.password ? data.password : '';
                console.log(_this.config.fields.username.error, _this.config.fields.email.error, _this.config.fields.password.error);
            }); // Sends POST
        }
    };
    return FormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FormComponent.prototype, "config", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormComponent.prototype, "configReturn", void 0);
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'formC',
        template: __webpack_require__("../../../../../src/app/form/form.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], FormComponent);

var _a;
//# sourceMappingURL=form.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cell shrink header medium-cell-block-container\">\n\n    <div class=\"grid-x\">\n        <div class=\"small-4\">\n            <img src='/assets/images/mario_ann.png'>\n        </div>\n\n        <div class=\"small-8 cell\">\n            <h1 style=\"position: relative; top: 50%; transform: translateY(-50%);\">Garrett Swann</h1>\n        </div>\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header',
        template: __webpack_require__("../../../../../src/app/header/header.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.css")]
    })
], HeaderComponent);

//# sourceMappingURL=header.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.html":
/***/ (function(module, exports) {

module.exports = "<sidebar-content *ngIf=\"path == '/'\" [config]='homeConfig'>hello</sidebar-content>\n<div *ngIf='path == \"/links\"' class=\"grid-x grid-padding-x\">\n    <div class=\"cell medium-6 \">\n        <h3 style=\"text-align: center;\">Professional Links</h3>\n        <ul>\n            <li><a href=\"https://github.com/garrett-is-a-swann\">Github</a></li>\n            <li><a href=\"https://www.linkedin.com/in/garrett-swann-bb324710a\">Linkedin</a></li>\n            <li><a href=\"http://www.build.com/\">Build</a></li>\n        </ul>\n    </div>\n    <div class=\"cell medium-6 \">\n        <h3 style=\"text-align: center;\">Personal Links</h3>\n        <ul>\n            <li><a href=\"https://www.twitch.tv/chrynde\">Twitch</a> - I stream my Mario AI here</li>\n            <li><a href=\"https://www.twitch.tv/videos/109799417\">mArIo</a> - Evolving past the 1-1 Goomba Pit</li>\n            <li><a href=\"https://sanctum.geek.nz/arabesque/vim-koans/\">Vim Koans</a></li>\n            <li><a href=\"https://learnxinyminutes.com/\">LearnXinY</a></li>\n        </ul>\n    </div>\n</div>\n<sidebar-content *ngIf=\"path == '/about-me'\" [config]='aboutConfig'>hello</sidebar-content>\n\n<div *ngIf=\"path == '/resume'\" class=\"grid-x grid-padding-x\">\n    <!-- Sidebar -->\n    <div class=\"cell medium-6 \">\n        <a href=\"assets/2017.pdf\" style=\"text-align: center;\">Resume as pdf</a>\n    </div>\n    <div class=\"cell medium-6 \">\n        <a style=\"text-align: center;\" href=\"assets/2017.docx\">Resume as doc</a>\n    </div>\n    <div class=\"cell auto medium-cell-block-y callout\" >\n        <pdf-viewer *ngIf=\"path == '/resume'\" [src]=\"'assets/2017.pdf'\" [render-text]=\"true\" [show-all]=\"true\" >hello</pdf-viewer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.path = '';
        this.homeConfig = {
            Sidebar: [
                { type: 'img',
                    src: 'assets/images/mustachioed_man.png',
                    alt: 'Garrett Swann with a curly mustache and beard.'
                }
            ],
            Content: [
                { type: 'p',
                    content: "This is the beginning's of my site. " +
                        "I plan to host a blog, and other code projects written by me here. " },
                { type: 'p',
                    content: "Stay tuned for hopefully cool things!" }
            ]
        };
        this.linksConfig = {};
        this.aboutConfig = {
            Sidebar: [
                { type: 'img',
                    src: 'assets/images/garrettAngelIsland.png',
                    alt: 'Garrett Swann on Angel Island in San Francisco, California.'
                }
            ],
            Content: [
                { type: 'h3',
                    content: "About Me" }
            ]
        };
        this.resumeConfig = {};
        this.path = router.url;
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}\n\n.column {\n  background: $secondary-color;\n  border: 5px solid black;\n  \n  span {\n    background: $primary-color;\n    display: block;\n    text-align: center;\n    width: 100%;\n  }\n}\n\nhtml, body, .off-canvas-wrapper\n{\n  height: 120%;\n}\n\n.position-right {\n  z-index: 1;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translatex(100%);\n          transform: translatex(100%);\n}\n\n\n.position-right.is-open {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n\n.position-right.is-open ~ .off-canvas-content {\n  -webkit-transform: translatex(-50%);\n          transform: translatex(-50%);\n}\n\n.position-right.is-transition-push::after {\n  top: 0;\n  width: 1px;\n  height: 100%;\n  box-shadow: 0 0 10px rgba(10, 10, 10, 0.7);\n  content: \" \";\n}\n\n.position-right.is-transition-overlap.is-open ~ .off-canvas-content {\n  -webkit-transform: none;\n          transform: none;\n}\n\n.position-right-inner {\n  padding: 1rem;\n  text-align: center;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-x grid-padding-x\">\n    <div class=\"medium-6 cell\">\n        <h3> Login </h3>\n        <formC [(config)]='loginConfig'></formC>\n    </div>\n    <div class=\"medium-6 cell\">\n        <div class=\"off-canvas-wrapper\">\n            <div class=\"off-canvas-absolute position-right\" style=\"min-height: 300px;\" id=\"RightSplit\" data-off-canvas>\n                <!-- Your menu or Off-canvas content goes here -->\n                <button class=\"button\" data-toggle=\"RightSplit\">x</button>\n                <formC [(config)]='registerConfig'></formC>\n            </div>\n            <div class=\"off-canvas-content\" style=\"min-height: 300px;\" data-off-canvas-content>\n                <button type=\"button\" class=\"button\" data-toggle=\"RightSplit\">Register</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = (function () {
    function LoginComponent() {
        this.loginConfig = {
            endpoint: 'api/login',
            fields: {
                username: { type: 'input', field: 'text', placeholder: 'Username', id: 'username', value: '' },
                password: { type: 'input', field: 'password', placeholder: 'Password', id: 'password', value: '' },
                submit: { type: 'button', text: 'Login', style: 'success' }
            },
            validation: {}
        };
        this.registerConfig = {
            endpoint: 'api/register',
            fields: {
                username: { type: 'input', field: 'text', placeholder: 'Username', id: 'username', value: '' },
                email: { type: 'input', field: 'text', placeholder: 'Email', id: 'email', value: '' },
                password: { type: 'input', field: 'password', placeholder: 'Password', id: 'password', value: '' },
                confirm_password: { type: 'input', field: 'password', placeholder: 'Confirm Password', id: 'confirm_password', value: '' },
                submit: { type: 'button', text: 'Submit', style: 'success' },
            },
            validation: { equal: [['password', 'confirm_password']], valid_email: ['email'], not_taken: [{ type: 'username', id: 'username' }, { type: 'email', id: 'email' }] }
        };
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login/login.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.css")]
    })
], LoginComponent);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ "../../../../../src/app/nav/navigation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/navigation.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-x shrink cell small-12 top-bar\">\n    <div class=\"top-bar-left grid-padding-y\">\n        <nav>\n            <ul class=\"dropdown menu\" data-dropdown-menu>\n                <li class=\"menu-text\"></li>\n                <li><a (click)=\"setTitle('Garrett Swann | Home')\" routerLink=\"/\" routerLinkActivate=\"active\">Home</a></li>\n                <li><a (click)=\"setTitle('Garrett Swann | Blog')\" routerLink=\"/blog\" routerLinkActivate=\"active\">Blog</a></li>\n                <li><a (click)=\"setTitle('Garrett Swann | Links')\" routerLink=\"/links\" routerLinkActivate=\"active\">Links</a></li>\n                <li><a (click)=\"setTitle('Garrett Swann | About Me')\" routerLink=\"/about-me\" routerLinkActivate=\"active\">About Me</a></li>\n                <li><a (click)=\"setTitle('Garrett Swann | Resume')\" routerLink=\"/resume\" routerLinkActivate=\"active\">Resume</a></li>\n                <li><a (click)=\"setTitle('Garrett Swann | Login')\" routerLink=\"/login\" routerLinkActivate=\"active\">Login</a></li>\n            </ul>\n        </nav>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nav/navigation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(titleService) {
        this.titleService = titleService;
        this.title = 'app';
        this.config = {
            Sidebar: [
                { type: 'img',
                    src: 'assets/images/mustachioed_man.png',
                    alt: 'Garrett Swann with a curly mustache and beard.'
                }
            ],
            Content: [
                { type: 'p',
                    content: "This is the beginning's of my site. " +
                        "I plan to host a blog, and other code projects written by me here. " },
                { type: 'p',
                    content: "Stay tuned for hopefully cool things!" }
            ]
        };
        this.titleService.setTitle('Garrett Swann | Home');
    }
    NavComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navigation',
        template: __webpack_require__("../../../../../src/app/nav/navigation.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/navigation.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-content/sidebar-content.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-content/sidebar-content.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-x grid-padding-x\">\n    <!-- Sidebar -->\n    <div class=\"cell medium-3 medium-cell-block-y\">\n        <div *ngFor=\"let content of config.Sidebar\">\n            <div [ngSwitch]=\"content.type\">\n                <img *ngSwitchCase=\"'img'\" alt=\"{{content.alt}}\" src=\"{{content.src}}\">\n                <div *ngSwitchDefault>{{content.type}} not found </div>\n                <p *ngSwitchCase=\"'p'\">{{content.content}}</p>\n            </div>\n        </div>\n    </div>\n    <!-- Content -->\n    <div class=\"medium-9 medium-cell-block-y\">\n        <div *ngFor=\"let content of config.Content\">\n            <div [ngSwitch]=\"content.type\">\n                <h3 *ngSwitchCase=\"'h3'\" style=\"text-align: center;\">{{content.content}}</h3>\n                <img *ngSwitchCase=\"'img'\" alt=\"{{content.alt}}\" src=\"{{content.src}}\">\n                <p *ngSwitchCase=\"'p'\">{{content.content}}</p>\n                <div *ngSwitchDefault>{{content.type}} not found </div>\n            </div>\n        </div>\n        <div *ngIf='path == \"/about-me\"'>\n            <p>I am a 4th year Computer Science Student at California State University, Chico.</p>\n            <p>I'm an avid learner in all things CS-related. My interests in Computer Science include AI and Machine Learning, data-driven pipelining, data science, and software engineering.</p>\n            <p>My favorite languages are C++ and Python, although I've touched many others including: Lua, Javascript, Java, Clojure, Hy, sql languages, bash, etc.</p>\n            <p>I'm hoping to fill this portfolio website with many of my creations, including my neuroevolution Mario Artificial Intelligence, so stay tuned!\n            </p>\n        </div>\n        <div *ngIf='path == \"/links\"' class=\"grid-x grid-padding-x\">\n            <div class=\"cell medium-6 \">\n                sadf\n            </div>\n            <div class=\"cell medium-6 \">\n                sadf\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/sidebar-content/sidebar-content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarContent = (function () {
    function SidebarContent(router) {
        this.path = '';
        this.path = router.url;
    }
    return SidebarContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('config'),
    __metadata("design:type", Object)
], SidebarContent.prototype, "config", void 0);
SidebarContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar-content',
        template: __webpack_require__("../../../../../src/app/sidebar-content/sidebar-content.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar-content/sidebar-content.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SidebarContent);

var _a;
//# sourceMappingURL=sidebar-content.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map