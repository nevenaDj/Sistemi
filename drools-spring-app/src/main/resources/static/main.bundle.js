webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-patient/add-patient.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-horizontal{\r\n    width: 100%; \r\n}\r\n\r\n.leg{\r\n    margin: auto;\r\n    width: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-patient/add-patient.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br><br>\n<form class=\"form-horizontal\" name=\"form\" (ngSubmit)=\"save()\">\n  <fieldset>\n  \n  <!-- Form Name -->\n  <legend class=\"leg\">Dodavanje pacijenta</legend>\n  <br>\n  <!-- Text input-->\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Ime</label>  \n    <div class=\"col-md-4\">\n    <input type=\"text\" class=\"form-control input-md\" name=\"firstName\" [(ngModel)]=\"patient.firstName\" placeholder=\"Ime pacijenta\" autofocus>\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Prezime</label>\n    <div class=\"col-md-4\">\n      <input type=\"text\" class=\"form-control input-md\" name=\"lastName\" [(ngModel)]=\"patient.lastName\" placeholder=\"Prezime pacijenta\">\n    </div>\n  </div>  \n  \n  <!-- Button -->\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\" for=\"btn_continuar\"></label>\n    <div class=\"col-md-4\">\n      <button type=\"submit\" name=\"btn_continuar\" class=\"btn btn-primary right\">Dodaj</button>\n    </div>\n  </div>\n  \n  </fieldset>\n  </form>"

/***/ }),

/***/ "../../../../../src/app/add-patient/add-patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_service__ = __webpack_require__("../../../../../src/app/add-patient/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPatientComponent = /** @class */ (function () {
    function AddPatientComponent(patientService, router) {
        this.patientService = patientService;
        this.router = router;
        this.patient = {
            id: null,
            firstName: '',
            lastName: ''
        };
    }
    AddPatientComponent.prototype.ngOnInit = function () {
    };
    AddPatientComponent.prototype.save = function () {
        var _this = this;
        this.patientService.addPatient(this.patient)
            .then(function (res) { return _this.router.navigate(['home']); });
    };
    AddPatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-patient',
            template: __webpack_require__("../../../../../src/app/add-patient/add-patient.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-patient/add-patient.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AddPatientComponent);
    return AddPatientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-patient/patient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientService = /** @class */ (function () {
    function PatientService(http) {
        this.http = http;
    }
    PatientService.prototype.addPatient = function (patient) {
        var url = '/api/patient';
        return this.http
            .post(url, patient)
            .toPromise()
            .catch(this.handleError);
    };
    PatientService.prototype.handleError = function (error) {
        console.error("Error... ", error);
        return Promise.reject(error.message || error);
    };
    PatientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "../../../../../src/app/add-user/add-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-horizontal{\r\n    width: 100%; \r\n}\r\n\r\n.leg{\r\n    margin: auto;\r\n    width: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br><br>\n<form class=\"form-horizontal\" name=\"form\" (ngSubmit)=\"save()\">\n  <fieldset>\n  \n  <!-- Form Name -->\n  <legend class=\"leg\">Dodvanje doktora</legend>\n  <br>\n  <!-- Text input-->\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Ime</label>  \n    <div class=\"col-md-4\">\n    <input type=\"text\" class=\"form-control input-md\" name=\"firstName\" [(ngModel)]=\"user.firstName\" placeholder=\"Ime doktora\" autofocus>\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Prezime</label>\n    <div class=\"col-md-4\">\n      <input type=\"text\" class=\"form-control input-md\" name=\"lastName\" [(ngModel)]=\"user.lastName\" placeholder=\"Prezime doktora\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Korisnicko ime</label>\n    <div class=\"col-md-4\">\n      <input type=\"text\" class=\"form-control input-md\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Korisnicko ime\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Ekspertiza</label>\n    <div class=\"col-md-4\">\n      <input type=\"text\" class=\"form-control input-md\" name=\"expertise\" [(ngModel)]=\"user.expertise\" placeholder=\"Ekspertiza doktora\">\n    </div>\n  </div>\n  \n  \n  <!-- Button -->\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\" for=\"btn_continuar\"></label>\n    <div class=\"col-md-4\">\n      <button type=\"submit\" name=\"btn_continuar\" class=\"btn btn-primary right\">Posalji</button>\n    </div>\n  </div>\n  \n  </fieldset>\n  </form>"

/***/ }),

/***/ "../../../../../src/app/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/add-user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {
            username: '',
            firstName: '',
            lastName: '',
            expertise: '',
            roles: null
        };
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.save = function () {
        var _this = this;
        this.userService.addUser(this.user)
            .then(function (res) { return _this.router.navigate(['admin']); });
    };
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__("../../../../../src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.addUser = function (user) {
        var url = '/api/user';
        return this.http
            .post(url, user)
            .toPromise()
            .catch(this.handleError);
    };
    UserService.prototype.changePassword = function (user) {
        return this.http
            .post('/api/password', user)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error("Error... ", error);
        return Promise.reject(error.message || error);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_admin_home_admin_component__ = __webpack_require__("../../../../../src/app/home-admin/home-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_user_add_user_component__ = __webpack_require__("../../../../../src/app/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_patient_add_patient_component__ = __webpack_require__("../../../../../src/app/add-patient/add-patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: [
            {
                path: 'patient',
                component: __WEBPACK_IMPORTED_MODULE_6__add_patient_add_patient_component__["a" /* AddPatientComponent */]
            },
            {
                path: 'password',
                component: __WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__["a" /* ChangePasswordComponent */]
            }
        ]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_4__home_admin_home_admin_component__["a" /* HomeAdminComponent */],
        children: [
            {
                path: 'user',
                component: __WEBPACK_IMPORTED_MODULE_5__add_user_add_user_component__["a" /* AddUserComponent */]
            },
            {
                path: 'password',
                component: __WEBPACK_IMPORTED_MODULE_7__change_password_change_password_component__["a" /* ChangePasswordComponent */]
            }
        ]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_dropdown__ = __webpack_require__("../../../../ngx-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_patient_patient_service__ = __webpack_require__("../../../../../src/app/add-patient/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_user_user_service__ = __webpack_require__("../../../../../src/app/add-user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__token_interceptor_service__ = __webpack_require__("../../../../../src/app/token-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_admin_home_admin_component__ = __webpack_require__("../../../../../src/app/home-admin/home-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_user_add_user_component__ = __webpack_require__("../../../../../src/app/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__add_patient_add_patient_component__ = __webpack_require__("../../../../../src/app/add-patient/add-patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__change_password_equal_validator_directive__ = __webpack_require__("../../../../../src/app/change-password/equal-validator.directive.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastOptions"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_admin_home_admin_component__["a" /* HomeAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_16__add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__add_patient_add_patient_component__["a" /* AddPatientComponent */],
                __WEBPACK_IMPORTED_MODULE_18__change_password_change_password_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_19__change_password_equal_validator_directive__["a" /* EqualValidator */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__login_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__add_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__add_patient_patient_service__["a" /* PatientService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_11__token_interceptor_service__["a" /* TokenInterceptorService */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-horizontal{\r\n    width: 100%; \r\n}\r\n\r\n.leg{\r\n    margin: auto;\r\n    width: 50%;\r\n}\r\n\r\n.right{\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br><br>\n<form class=\"form-horizontal\" name=\"form\" #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\n  <legend class=\"leg\">Promena lozinke</legend>\n  <br>\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Trenutna lozinka</label>\n    <div class=\"col-md-4\">\n      <input type=\"password\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.currentPassword\" \n            required #username=\"ngModel\" autofocus>\n      <small [hidden]=\"username.valid || (username.pristine && !f.submitted)\" class=\"text-danger\">\n        Lozinka je obavezna.\n      </small>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Nova lozinka</label>\n    <div class=\"col-md-4\">\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.newPassword\" \n        required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\" minlength=\"6\">\n      <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n        Lozinka je obavezna (minimum 6 karaktera).\n      </small>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Ponovi lozinku</label>\n    <div class=\"col-md-4\">\n      <input type=\"password\" class=\"form-control\" name=\"confirmPassword\"[(ngModel)]=\"user.checkPassword\" \n        required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\n      <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">\n        Lozinke nisu iste\n      </small>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\" for=\"btn_continuar\"></label>\n    <div class=\"col-md-4\">\n      <button type=\"submit\" class=\"btn btn-primary right\" [disabled]=\"!f.valid\">Promeni lozinku</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_user_user_service__ = __webpack_require__("../../../../../src/app/add-user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(userService, location, router, toastr, vcr) {
        this.userService = userService;
        this.location = location;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
        this.user = {
            currentPassword: '',
            newPassword: '',
            checkPassword: ''
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        // if (localStorage.getItem('token') == null){
        //   this.router.navigate(['login']);
        // }
    };
    ChangePasswordComponent.prototype.save = function (model, isValid) {
        var _this = this;
        console.log(this.user);
        console.log(model);
        if (isValid) {
            this.userService.changePassword(this.user)
                .then(function (res) { return _this.location.back(); })
                .catch(function (res) { return _this.toastr.error('An error occurred while changing the password.'); });
        }
    };
    ChangePasswordComponent.prototype.cancel = function () {
        this.location.back();
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__add_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/change-password/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "../../../../../src/app/home-admin/home-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.dropdown-button{\r\n    background: #fff;\r\n}\r\n\r\n.dropdown-menu.extended {\r\n    max-width: 300px !important;\r\n    min-width: 160px !important;\r\n    top: 42px;\r\n    width: 235px !important;\r\n    padding: 0;\r\n    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.176) !important;\r\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.176) !important;\r\n    border: none !important;\r\n    border-radius: 4px;\r\n    -webkit-border-radius: 4px;\r\n}\r\n\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n    /* Safari and Chrome */\r\n    .dropdown-menu.extended  {\r\n        -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.176) !important;\r\n                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.176) !important;\r\n    };\r\n    }\r\n\r\n.dropdown-menu.extended li p {\r\n    background-color: #fff;\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 10px;\r\n    border-radius: 4px 4px 0px 0px;\r\n    -webkit-border-radius: 4px 4px 0px 0px;\r\n}\r\n\r\n.dropdown-menu.extended li p.green {\r\n    background-color: #68dff0;\r\n    color: #fff;\r\n}\r\n\r\n.dropdown-menu.extended li p.yellow {\r\n    background-color: #fcb322;\r\n    color: #fff;\r\n}\r\n\r\n.dropdown-menu.extended li a {\r\n    border-bottom: 1px solid #EBEBEB !important;\r\n    font-size: 12px;\r\n    list-style: none;\r\n}\r\n\r\n.dropdown-menu.extended li a {\r\n    padding: 15px 10px !important;\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-menu.extended li a:hover {\r\n    background-color: #F7F8F9 !important;\r\n    color: #fff;\r\n}\r\n\r\n.dropdown-menu.tasks-bar .task-info .desc {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n}\r\n\r\n.dropdown-menu.tasks-bar .task-info .percent {\r\n    display: inline-block;\r\n    float: right;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    padding-left: 10px;\r\n    margin-top: -4px;\r\n}\r\n\r\n.dropdown-menu.extended .progress {\r\n    margin-bottom: 0 !important;\r\n    height: 10px;\r\n}\r\n\r\n.dropdown-menu.inbox li a .photo img {\r\n    border-radius: 2px 2px 2px 2px;\r\n    float: right;\r\n    height: 40px;\r\n    margin-right: 4px;\r\n    width: 40px;\r\n}\r\n\r\n.dropdown-menu.inbox li a .subject {\r\n    display: block;\r\n}\r\n\r\n.dropdown-menu.inbox li a .subject .from {\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n}\r\n\r\n.dropdown-menu.inbox li a .subject .time {\r\n    font-size: 11px;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    right: 5px;\r\n}\r\n\r\n.dropdown-menu.inbox li a .message {\r\n    display: block !important;\r\n    font-size: 11px;\r\n}\r\n\r\n.top-nav  {\r\n    margin-top: 7px;\r\n}\r\n\r\n.top-nav ul.top-menu > li .dropdown-menu.logout {\r\n    width: 268px !important;\r\n\r\n}\r\n\r\n.top-nav li.dropdown .dropdown-menu {\r\n    float: left;\r\n    right: 0;\r\n    left: auto;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li {\r\n    float: left;\r\n    text-align: center;\r\n    width: 33.3%;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li:last-child {\r\n    float: left;\r\n    text-align: center;\r\n    width: 100%;\r\n    background: #a9d96c;\r\n    border-radius: 0 0 3px 3px;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li:last-child > a, .dropdown-menu.extended.logout > li:last-child > a:hover {\r\n    color: #fff;\r\n    border-bottom: none !important;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li:last-child > a:hover > i{\r\n    color: #fff;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a {\r\n    color: #fff;\r\n    border-bottom: none !important;\r\n}\r\n\r\n.full-width .dropdown-menu.extended.logout > li > a:hover {\r\n    background: none !important;\r\n    color: #50c8ea !important;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a:hover {\r\n    background: none !important;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a:hover i {\r\n    color: #50c8ea;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a i {\r\n    font-size: 17px;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a > i {\r\n    display: block;\r\n}\r\n\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n    /* Safari and Chrome */\r\n    .dropdown-menu.extended  {\r\n        -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.176) !important;\r\n                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.176) !important;\r\n    };\r\n    }\r\n\r\n.dropdown-menu.extended li p {\r\n    background-color: #F1F2F7;\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 10px;\r\n    border-radius: 4px 4px 0px 0px;\r\n    -webkit-border-radius: 4px 4px 0px 0px;\r\n}\r\n\r\n.dropdown-menu.extended li p.green {\r\n    background-color: #68dff0;\r\n    color: #fff;\r\n}\r\n\r\n.dropdown-menu.extended li p.yellow {\r\n    background-color: #fcb322;\r\n    color: #fff;\r\n}\r\n\r\n.dropdown-menu.extended li a {\r\n    border-bottom: 1px solid #fff !important;\r\n    font-size: 12px;\r\n    list-style: none;\r\n}\r\n\r\n.dropdown-menu.extended li a {\r\n    padding: 15px 10px !important;\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-menu.extended li a:hover {\r\n    background-color: #F7F8F9 !important;\r\n    color: #2E2E2E;\r\n}\r\n\r\n.dropdown-menu.tasks-bar .task-info .desc {\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n}\r\n\r\n.dropdown-menu.tasks-bar .task-info .percent {\r\n    display: inline-block;\r\n    float: right;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    padding-left: 10px;\r\n    margin-top: -4px;\r\n}\r\n\r\n.dropdown-menu.extended .progress {\r\n    margin-bottom: 0 !important;\r\n    height: 10px;\r\n}\r\n\r\n.dropdown-menu.inbox li a .photo img {\r\n    border-radius: 2px 2px 2px 2px;\r\n    float: right;\r\n    height: 40px;\r\n    margin-right: 4px;\r\n    width: 40px;\r\n}\r\n\r\n.dropdown-menu.inbox li a .subject {\r\n    display: block;\r\n}\r\n\r\n.dropdown-menu.inbox li a .subject .from {\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n}\r\n\r\n.dropdown-menu.inbox li a .subject .time {\r\n    font-size: 11px;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    right: 5px;\r\n}\r\n\r\n.dropdown-menu.inbox li a .message {\r\n    display: block !important;\r\n    font-size: 11px;\r\n}\r\n\r\n.top-nav  {\r\n    margin-top: 7px;\r\n}\r\n\r\n.top-nav ul.top-menu > li .dropdown-menu.logout {\r\n    width: 268px !important;\r\n\r\n}\r\n\r\n.top-nav li.dropdown .dropdown-menu {\r\n    float: left;\r\n    right: 0;\r\n    left: auto;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li {\r\n    float: left;\r\n    text-align: center;\r\n    width: 33.3%;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li:last-child {\r\n    float: left;\r\n    text-align: center;\r\n    width: 100%;\r\n    background: #a9d96c;\r\n    border-radius: 0 0 3px 3px;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li:last-child > a, .dropdown-menu.extended.logout > li:last-child > a:hover {\r\n    color: #fff;\r\n    border-bottom: none !important;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li:last-child > a:hover > i{\r\n    color: #fff;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a {\r\n    color: #a4abbb;\r\n    border-bottom: none !important;\r\n}\r\n\r\n.full-width .dropdown-menu.extended.logout > li > a:hover {\r\n    background: none !important;\r\n    color: #50c8ea !important;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a:hover {\r\n    background: none !important;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a:hover i {\r\n    color: #50c8ea;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a i {\r\n    font-size: 17px;\r\n}\r\n\r\n.dropdown-menu.extended.logout > li > a > i {\r\n    display: block;\r\n}\r\n\r\n.top-nav .dropdown-menu.extended.logout {\r\n    top: 50px;\r\n}\r\n\r\n.f{\r\n  float: right;\r\n  margin-right: 0px;\r\n}\r\n\r\n.q {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\n.logo{\r\n    margin-right: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-admin/home-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Start Header Area -->\n<header class=\"default-header\">\n  <div class=\"container\">\n    <div class=\"header-wrap\">\n      <div class=\"header-top d-flex justify-content-between align-items-center q\">\n        <div class=\"logo\">\n          <a><img src=\"../../assets/logo.png\" alt=\"\"></a>\n        </div>\n        <div class=\"main-menubar d-flex align-items-center\">\n          <nav>\n            <ul class=\"nav navbar-nav f\">\n            <li class=\"dropdown\" dropdown [dropdownToggle]=\"true\" >\n              <a  class=\"btn btn-secondary dropdown-toggle\"  dropdown-open> Dodaj <span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\" >\n                  <li cclass=\"dropdown-item\"><a [routerLink]=\"['/admin/user']\">Doktora</a></li>\n                  <li class=\"dropdown-item\"><a [routerLink]=\"['/admin']\">Bolest</a></li>\n              </ul>\n            </li>\n            <li class=\"dropdown\" dropdown [dropdownToggle]=\"true\" >\n                <a  class=\"btn btn-secondary dropdown-toggle\"  dropdown-open> Pretrazi <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu dropdown-button\" >\n                    <li class=\"dropdown-button\"><a [routerLink]=\"['/admin']\">Doktore</a></li>\n                    <li class=\"dropdown-button\"><a [routerLink]=\"['/admin']\">Bolesti</a></li>\n                </ul>\n              </li>\n              <li><a [routerLink]=\"['/admin/password']\">Promeni lozinku</a></li>\n              <li><a (click) =\"logout()\">Odjavi se</a></li>\n            </ul>\n          </nav>\n          \n          <div class=\"menu-bar\"><span class=\"lnr lnr-menu\"></span></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<router-outlet></router-outlet>\n<!-- End Header Area -->"

/***/ }),

/***/ "../../../../../src/app/home-admin/home-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeAdminComponent = /** @class */ (function () {
    function HomeAdminComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HomeAdminComponent.prototype.ngOnInit = function () {
        // this.auth.redirect(); 
    };
    HomeAdminComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HomeAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-admin',
            template: __webpack_require__("../../../../../src/app/home-admin/home-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-admin/home-admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeAdminComponent);
    return HomeAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".f{\r\n    float: right;\r\n    margin-right: 0px;\r\n  }\r\n  \r\n  .q {\r\n      display: -webkit-inline-box;\r\n      display: -ms-inline-flexbox;\r\n      display: inline-flex;\r\n  }\r\n  \r\n  .logo{\r\n      margin-right: 300px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Start Header Area -->\n<header class=\"default-header\">\n  <div class=\"container\">\n    <div class=\"header-wrap\">\n      <div class=\"header-top d-flex justify-content-between align-items-center q\">\n        <div class=\"logo\">\n          <a><img src=\"../../assets/logo.png\" alt=\"\"></a>\n        </div>\n        <div class=\"main-menubar d-flex align-items-center\">\n          <nav>\n            <ul class=\"nav navbar-nav f\">\n            <li class=\"dropdown\" dropdown [dropdownToggle]=\"true\" >\n              <a  class=\"btn btn-secondary dropdown-toggle\"  dropdown-open> Dodaj <span class=\"caret\"></span></a>\n              <ul class=\"dropdown-menu\" >\n                  <li cclass=\"dropdown-item\"><a [routerLink]=\"['/home/patient']\">Pacijenta</a></li>\n                  <li class=\"dropdown-item\"><a [routerLink]=\"['/home']\">Bolest</a></li>\n              </ul>\n            </li>\n            <li class=\"dropdown\" dropdown [dropdownToggle]=\"true\" >\n                <a  class=\"btn btn-secondary dropdown-toggle\"  dropdown-open> Pretrazi <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu dropdown-button\" >\n                    <li class=\"dropdown-button\"><a [routerLink]=\"['/home']\">Pacijente</a></li>\n                    <li class=\"dropdown-button\"><a [routerLink]=\"['/home']\">Bolesti</a></li>\n                </ul>\n              </li>\n              <li><a [routerLink]=\"['/home/password']\">Promeni lozinku</a></li>\n              <li><a (click) =\"logout()\">Odjavi se</a></li>\n            </ul>\n          </nav>\n          \n          <div class=\"menu-bar\"><span class=\"lnr lnr-menu\"></span></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<router-outlet></router-outlet>\n<!-- End Header Area -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.auth.redirect(); 
    };
    HomeComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (username, password) {
        return this.http
            .post('/api/login', { username: username, password: password }, { responseType: 'text' })
            .toPromise()
            .then(function (res) { return localStorage.setItem('token', res); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    };
    AuthService.prototype.redirect = function () {
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['home']);
        }
    };
    AuthService.prototype.me = function () {
        return this.http
            .get('/api/me')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*//////////////////////////////////////////////////////////////////\r\n[ FONT ]*/\r\n\r\n@font-face {\r\n    font-family: Poppins-Regular;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Regular.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-Medium;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Medium.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-Bold;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Bold.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-SemiBold;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-SemiBold.ttf")) + "); \r\n  }\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ RESTYLE TAG ]*/\r\n\r\n* {\r\n\tmargin: 0px; \r\n\tpadding: 0px; \r\n\t-webkit-box-sizing: border-box; \r\n\t        box-sizing: border-box;\r\n}\r\n\r\nbody, html {\r\n\theight: 100%;\r\n\tfont-family: Poppins-Regular, sans-serif;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\na {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n\ttransition: all 0.4s;\r\n\t-webkit-transition: all 0.4s;\r\n  -o-transition: all 0.4s;\r\n  -moz-transition: all 0.4s;\r\n}\r\n\r\na:focus {\r\n\toutline: none !important;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nh1,h2,h3,h4,h5,h6 {\r\n\tmargin: 0px;\r\n}\r\n\r\np {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n}\r\n\r\nul, li {\r\n\tmargin: 0px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\ninput {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\n\r\ntextarea {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ntextarea:focus, input:focus {\r\n  border-color: transparent !important;\r\n}\r\n\r\ninput:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ninput:focus:-moz-placeholder { color:transparent; }\r\n\r\ninput:focus::-moz-placeholder { color:transparent; }\r\n\r\ninput:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ninput::-webkit-input-placeholder { color: #fff;}\r\n\r\ninput:-moz-placeholder { color: #fff;}\r\n\r\ninput::-moz-placeholder { color: #fff;}\r\n\r\ninput:-ms-input-placeholder { color: #fff;}\r\n\r\ntextarea::-webkit-input-placeholder { color: #fff;}\r\n\r\ntextarea:-moz-placeholder { color: #fff;}\r\n\r\ntextarea::-moz-placeholder { color: #fff;}\r\n\r\ntextarea:-ms-input-placeholder { color: #fff;}\r\n\r\nlabel {\r\n  margin: 0;\r\n  display: block;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nbutton {\r\n\toutline: none !important;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\n\r\nbutton:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\niframe {\r\n\tborder: none !important;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ Utility ]*/\r\n\r\n.txt1 {\r\n  font-family: Poppins-Regular;\r\n  font-size: 13px;\r\n  color: #e5e5e5;\r\n  line-height: 1.5;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ login ]*/\r\n\r\n.limiter {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.container-login100 {\r\n    width: 100%;  \r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 15px;\r\n  \r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 1;  \r\n  }\r\n\r\n.container-login100::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(255,255,255,0.9);\r\n  }\r\n\r\n.wrap-login100 {\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    padding: 55px 55px 37px 55px;\r\n  \r\n    background: #9152f8;\r\n    background:  -webkit-gradient(linear,left top, left bottom,from(#060238), to(#2578bb86));\r\n    background:  linear-gradient(top,#060238, #2578bb86);\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Form ]*/\r\n\r\n.login100-form {\r\n    width: 100%;\r\n  }\r\n\r\n.login100-form-logo {\r\n    font-size: 60px; \r\n    color: #333333;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.login100-form-title {\r\n    font-family: Poppins-Medium;\r\n    font-size: 30px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n  \r\n    display: block;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Input ]*/\r\n\r\n.wrap-input100 {\r\n    width: 100%;\r\n    position: relative;\r\n    border-bottom: 2px solid rgba(255,255,255,0.24);\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n.input100 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    width: 100%;\r\n    height: 45px;\r\n    background: transparent;\r\n    padding: 0 5px 0 38px;\r\n  }\r\n\r\n/*---------------------------------------------*/\r\n\r\n.focus-input100 {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    pointer-events: none;\r\n  }\r\n\r\n.focus-input100::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    bottom: -2px;\r\n    left: 0;\r\n    width: 0;\r\n    height: 2px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  \r\n    background: #fff;\r\n  }\r\n\r\n.focus-input100::after {\r\n    font-family: Material-Design-Iconic-Font;\r\n    font-size: 22px;\r\n    color: #fff;\r\n  \r\n    content: attr(data-placeholder);\r\n    display: block;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 6px;\r\n    left: 0px;\r\n    padding-left: 5px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.input100:focus {\r\n    padding-left: 5px;\r\n  }\r\n\r\n.input100:focus + .focus-input100::after {\r\n    top: -22px;\r\n    font-size: 18px;\r\n  }\r\n\r\n.input100:focus + .focus-input100::before {\r\n    width: 100%;\r\n  }\r\n\r\n.has-val.input100 + .focus-input100::after {\r\n    top: -22px;\r\n    font-size: 18px;\r\n  }\r\n\r\n.has-val.input100 + .focus-input100::before {\r\n    width: 100%;\r\n  }\r\n\r\n.has-val.input100 {\r\n    padding-left: 5px;\r\n  }\r\n\r\n/*==================================================================\r\n[ Restyle Checkbox ]*/\r\n\r\n.contact100-form-checkbox {\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 35px;\r\n  }\r\n\r\n.input-checkbox100 {\r\n    display: none;\r\n  }\r\n\r\n.label-checkbox100 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 13px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    position: relative;\r\n    padding-left: 26px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.label-checkbox100::before {\r\n    content: \"\\F26B\";\r\n    font-family: Material-Design-Font;\r\n    font-size: 13px;\r\n    color: transparent;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 2px;\r\n    background: #fff;\r\n    left: 0;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n  }\r\n\r\n.input-checkbox100:checked + .label-checkbox100::before {\r\n    color: #555555;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Button ]*/\r\n\r\n.container-login100-form-btn {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n.login100-form-btn {\r\n    font-family: Poppins-Medium;\r\n    font-size: 16px;\r\n    color: #555555;\r\n    line-height: 1.2;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0 20px;\r\n    min-width: 120px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n  \r\n    background: #9152f8;\r\n    background: -webkit-gradient(linear,  left bottom, left top,  from(#e1ff75), to(#85730e));\r\n    background: linear-gradient(bottom,  #e1ff75, #85730e);\r\n    position: relative;\r\n    z-index: 1;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.login100-form-btn::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 25px;\r\n    background-color: #fff;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 1;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.login100-form-btn:hover {\r\n    color: #fff;\r\n  }\r\n\r\n.login100-form-btn:hover:before {\r\n    opacity: 0;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Responsive ]*/\r\n\r\n@media (max-width: 576px) {\r\n    .wrap-login100 {\r\n      padding: 55px 15px 37px 15px;\r\n    }\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n  [ Alert validate ]*/\r\n\r\n.validate-input {\r\n    position: relative;\r\n  }\r\n\r\n.alert-validate::before {\r\n    content: attr(data-validate);\r\n    position: absolute;\r\n    max-width: 70%;\r\n    background-color: #fff;\r\n    border: 1px solid #c80000;\r\n    border-radius: 2px;\r\n    padding: 4px 25px 4px 10px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 0px;\r\n    pointer-events: none;\r\n  \r\n    font-family: Poppins-Regular;\r\n    color: #c80000;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    text-align: left;\r\n  \r\n    visibility: hidden;\r\n    opacity: 0;\r\n  \r\n    -webkit-transition: opacity 0.4s;\r\n    transition: opacity 0.4s;\r\n  }\r\n\r\n.alert-validate::after {\r\n    content: \"\\F12A\";\r\n    font-family: FontAwesome;\r\n    font-size: 16px;\r\n    color: #c80000;\r\n  \r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 5px;\r\n  }\r\n\r\n.alert-validate:hover:before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n@media (max-width: 992px) {\r\n    .alert-validate::before {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n  <div class=\"container-login100\" style=\"background-image: url('assets/1.jpg');\">\n    <div class=\"wrap-login100\">\n      <form name=\"form\" (ngSubmit)=\"login()\" class=\"login100-form validate-form\">\n        <span class=\"login100-form-logo\">\n          <i class=\"fa fa-expeditedssl\" aria-hidden=\"true\"></i>\n        </span>\n        <br>\n        <span class=\"login100-form-title p-b-34 p-t-27\">\n          Prijava\n        </span>\n\n        <div class=\"wrap-input100 validate-input\" data-validate = \"Enter username\">\n          <input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"Korisnicko ime\">\n          <span class=\"focus-input100\" data-placeholder=\"&#xf207;\"></span>\n        </div>\n\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n          <input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass\" placeholder=\"Lozinka\">\n          <span class=\"focus-input100\" data-placeholder=\"&#xf191;\"></span>\n        </div>\n\n        <div class=\"contact100-form-checkbox\">\n        </div>\n\n        <div class=\"container-login100-form-btn\">\n          <button type=\"submit\" class=\"login100-form-btn\">\n            Prijavi se\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, toastr, vcr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
        this.user = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        localStorage.removeItem('token');
        this.auth.login(this.user.username, this.user.password)
            .then(function (res) { return _this.auth.me().then(function (me) {
            console.log(me);
            if (me.roles.includes('ROLE_ADMIN')) {
                _this.router.navigate(['/admin']);
            }
            else if (me.roles.includes('ROLE_DOCTOR')) {
                _this.router.navigate(['/home']);
            }
        }); })
            .catch(function (res) { return _this.toastr.error('Invalid username/password.'); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        if (localStorage.getItem('token') != null) {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + localStorage.getItem('token')
                }
            });
        }
        else {
            request = request.clone({});
        }
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/assets/Poppins-Bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-Bold.7940efc40d8e3b477e16.ttf";

/***/ }),

/***/ "../../../../../src/assets/Poppins-Medium.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-Medium.a4e11dda40531debd374.ttf";

/***/ }),

/***/ "../../../../../src/assets/Poppins-Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-Regular.731a28a413d642522667.ttf";

/***/ }),

/***/ "../../../../../src/assets/Poppins-SemiBold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-SemiBold.e63b93dfac2600782654.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map