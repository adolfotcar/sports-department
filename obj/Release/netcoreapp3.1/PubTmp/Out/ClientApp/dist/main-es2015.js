(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <router-outlet></router-outlet>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"jumbotron\">\r\n  <h1>Cruzeiro City Council</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/students']\">\r\n      <img src=\"assets/images/manage-students.png\" width=\"128\" />\r\n      <div>Students</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/teachers']\">\r\n      <img src=\"assets/images/manage-teachers.png\" width=\"128\" />\r\n      <div>Teachers</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/neighborhoods']\">\r\n      <img src=\"assets/images/manage-neighborhood.png\" width=\"128\" />\r\n      <div>Neighborhoods</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/modalities']\">\r\n      <img src=\"assets/images/manage-classes.png\" width=\"128\" />\r\n      <div>Modalities</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/users']\">\r\n      <img src=\"assets/images/manage-users.png\" width=\"128\" />\r\n      <div>Users</div>\r\n    </a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Sports Department</a>\r\n      <button class=\"navbar-toggler\"\r\n              type=\"button\"\r\n              data-toggle=\"collapse\"\r\n              data-target=\".navbar-collapse\"\r\n              aria-label=\"Toggle navigation\"\r\n              [attr.aria-expanded]=\"isExpanded\"\r\n              (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex justify-content-end\"\r\n           [ngClass]=\"{ show: isExpanded }\">\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/login']\">Login</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\r\n  <div class=\"container-fluid\">\r\n    <h2 class=\"form-signin-heading\">Login</h2>\r\n    <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">Invalid username or password.</div>\r\n    <br />\r\n    <label for=\"username\" class=\"sr-only\">Email address</label>\r\n    <input type=\"email\" id=\"username\" name=\"email\" ngModel class=\"form-control\" placeholder=\"User Name\" required autofocus>\r\n    <br />\r\n    <label for=\"password\" class=\"sr-only\">Password</label>\r\n    <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Password\" required>\r\n    <br />\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/create/create.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modality/create/create.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create Modality</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Teacher</td>\r\n          <td>\r\n            <select formControlName=\"TeacherId\">\r\n              <option *ngFor=\"let t of teachers\" [ngValue]=\"t.teacherId\">{{t.fullName}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.TeacherId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.TeacherId.errors.required\">Teacher is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/edit/edit.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modality/edit/edit.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit Modality</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Teacher</td>\r\n          <td>\r\n            <select formControlName=\"TeacherId\">\r\n              <option *ngFor=\"let t of teachers\" [ngValue]=\"t.teacherId\">{{t.fullName}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.TeacherId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.TeacherId.errors.required\">Teacher is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/table/table.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modality/table/table.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/modalities/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Id</td>\r\n        <td>Modality</td>\r\n        <td>Teacher</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.modalityId}}</td>\r\n        <td>{{d.name}}</td>\r\n        <td>{{d.teacher.fullName}}</td>\r\n        <td><a [routerLink]=\"['/modalities/'+d.modalityId]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.modalityId, d.name)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Sports Department</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex justify-content-end\"\r\n           [ngClass]=\"{ show: isExpanded }\">\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\" style=\"padding: 0.5rem\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            Welcome {{ username }}!\r\n          </li>\r\n          <li class=\"nav-item\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" (click)=\"logOut()\">Logout</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/create/create.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/create/create.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create new Neighborhood</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/edit/edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/edit/edit.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit Neighborhood</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/table/table.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/table/table.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/neighborhoods/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Id</td>\r\n        <td>Neighborhood</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.neighborhoodId}}</td>\r\n        <td>{{d.name}}</td>\r\n        <td><a [routerLink]=\"['/neighborhoods/'+d.neighborhoodId]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.neighborhoodId, d.name)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/create/create.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/create/create.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create new Student</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n        <tr>\r\n          <td>Surname</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Surname\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Surname.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Surname.errors.required\">Surname is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Modality</td>\r\n          <td>\r\n            <select formControlName=\"ModalityId\">\r\n              <option *ngFor=\"let m of modalities\" [ngValue]=\"m.modalityId\">{{m.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.ModalityId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.ModalityId.errors.required\">Modality is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Neighborhood</td>\r\n          <td>\r\n            <select formControlName=\"NeighborhoodId\">\r\n              <option *ngFor=\"let n of neighborhoods\" [ngValue]=\"n.neighborhoodId\">{{n.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.NeighborhoodId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.NeighborhoodId.errors.required\">Neighborhood is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/edit/edit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/edit/edit.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit Student</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Nome</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n        <tr>\r\n          <td>Surname</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Surname\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Surname.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Surname.errors.required\">Surname is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Modality</td>\r\n          <td>\r\n            <select formControlName=\"ModalityId\">\r\n              <option *ngFor=\"let m of modalities\" [ngValue]=\"m.modalityId\">{{m.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.ModalityId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.ModalityId.errors.required\">Modality is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Neighborhood</td>\r\n          <td>\r\n            <select formControlName=\"NeighborhoodId\">\r\n              <option *ngFor=\"let n of neighborhoods\" [ngValue]=\"n.neighborhoodId\">{{n.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.NeighborhoodId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.NeighborhoodId.errors.required\">Neighborhood is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/table/table.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/table/table.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/students/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Id</td>\r\n        <td>Name</td>\r\n        <td>Modality</td>\r\n        <td>Neighborhood</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.studentId}}</td>\r\n        <td>{{d.fullName}}</td>\r\n        <td>{{d.modality.name}}</td>\r\n        <td>{{d.neighborhood.name}}</td>\r\n        <td><a [routerLink]=\"['/students/'+d.studentId]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.studentId, d.fullName)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/create/create.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/create/create.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create new Teacher</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Surname</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Surname\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Surname.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Surname.errors.required\">Surname is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Phone</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"PhoneNumber\">\r\n            <div *ngIf=\"submitted && MyForm.controls.PhoneNumber.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.PhoneNumber.errors.required\">Phone is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/edit/edit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/edit/edit.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit Teacher</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Nome</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Sobrenome</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Surname\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Surname.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Surname.errors.required\">Surname is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Telefone</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"PhoneNumber\">\r\n            <div *ngIf=\"submitted && MyForm.controls.PhoneNumber.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.PhoneNumber.errors.required\">Phone is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/table/table.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/table/table.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/teachers/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Id</td>\r\n        <td>Name</td>\r\n        <td>Phone</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.teacherId}}</td>\r\n        <td>{{d.fullName}}</td>\r\n        <td>{{d.phoneNumber}}</td>\r\n        <td><a [routerLink]=\"['/teachers/'+d.teacherId]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.teacherId, d.fullName)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/create/create.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/create/create.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create new User</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Email</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Email\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Email.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Email.errors.required\">Email is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Password</td>\r\n          <td>\r\n            <input type=\"password\" formControlName=\"Password\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Password.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Password.errors.required\">Password is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit User</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Email</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Email\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Email.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Email.errors.required\">Email is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Password</td>\r\n          <td>\r\n            <input type=\"password\" formControlName=\"Password\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Password.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Password.errors.required\">Password is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/table/table.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/table/table.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/users/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Name</td>\r\n        <td>Email</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.name}}</td>\r\n        <td>{{d.email}}</td>\r\n        <td><a [routerLink]=\"['/users/'+d.id]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.id, d.name)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n");

/***/ }),

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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _teacher_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teacher/table/table.component */ "./src/app/teacher/table/table.component.ts");
/* harmony import */ var _teacher_create_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teacher/create/create.component */ "./src/app/teacher/create/create.component.ts");
/* harmony import */ var _teacher_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher/edit/edit.component */ "./src/app/teacher/edit/edit.component.ts");
/* harmony import */ var _neighborhood_table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./neighborhood/table/table.component */ "./src/app/neighborhood/table/table.component.ts");
/* harmony import */ var _neighborhood_create_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./neighborhood/create/create.component */ "./src/app/neighborhood/create/create.component.ts");
/* harmony import */ var _neighborhood_edit_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./neighborhood/edit/edit.component */ "./src/app/neighborhood/edit/edit.component.ts");
/* harmony import */ var _modality_table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modality/table/table.component */ "./src/app/modality/table/table.component.ts");
/* harmony import */ var _modality_create_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modality/create/create.component */ "./src/app/modality/create/create.component.ts");
/* harmony import */ var _modality_edit_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modality/edit/edit.component */ "./src/app/modality/edit/edit.component.ts");
/* harmony import */ var _student_table_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./student/table/table.component */ "./src/app/student/table/table.component.ts");
/* harmony import */ var _student_create_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./student/create/create.component */ "./src/app/student/create/create.component.ts");
/* harmony import */ var _student_edit_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student/edit/edit.component */ "./src/app/student/edit/edit.component.ts");
/* harmony import */ var _user_table_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/table/table.component */ "./src/app/user/table/table.component.ts");
/* harmony import */ var _user_create_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/create/create.component */ "./src/app/user/create/create.component.ts");
/* harmony import */ var _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user/edit/edit.component */ "./src/app/user/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



























let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _teacher_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TeacherTableComponent"],
            _teacher_create_create_component__WEBPACK_IMPORTED_MODULE_13__["TeacherCreateComponent"],
            _teacher_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["TeacherEditComponent"],
            _neighborhood_table_table_component__WEBPACK_IMPORTED_MODULE_15__["NeighborhoodTableComponent"],
            _neighborhood_create_create_component__WEBPACK_IMPORTED_MODULE_16__["NeighborhoodCreateComponent"],
            _neighborhood_edit_edit_component__WEBPACK_IMPORTED_MODULE_17__["NeighborhoodEditComponent"],
            _modality_table_table_component__WEBPACK_IMPORTED_MODULE_18__["ModalityTableComponent"],
            _modality_create_create_component__WEBPACK_IMPORTED_MODULE_19__["ModalityCreateComponent"],
            _modality_edit_edit_component__WEBPACK_IMPORTED_MODULE_20__["ModalityEditComponent"],
            _student_table_table_component__WEBPACK_IMPORTED_MODULE_21__["StudentTableComponent"],
            _student_create_create_component__WEBPACK_IMPORTED_MODULE_22__["StudentCreateComponent"],
            _student_edit_edit_component__WEBPACK_IMPORTED_MODULE_23__["StudentEditComponent"],
            _user_table_table_component__WEBPACK_IMPORTED_MODULE_24__["UserTableComponent"],
            _user_create_create_component__WEBPACK_IMPORTED_MODULE_25__["UserCreateComponent"],
            _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__["UserEditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], pathMatch: 'full' },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
                { path: 'teachers', component: _teacher_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TeacherTableComponent"] },
                { path: 'teachers/create', component: _teacher_create_create_component__WEBPACK_IMPORTED_MODULE_13__["TeacherCreateComponent"] },
                { path: 'teachers/:ID', component: _teacher_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["TeacherEditComponent"] },
                { path: 'neighborhoods', component: _neighborhood_table_table_component__WEBPACK_IMPORTED_MODULE_15__["NeighborhoodTableComponent"] },
                { path: 'neighborhoods/create', component: _neighborhood_create_create_component__WEBPACK_IMPORTED_MODULE_16__["NeighborhoodCreateComponent"] },
                { path: 'neighborhoods/:ID', component: _neighborhood_edit_edit_component__WEBPACK_IMPORTED_MODULE_17__["NeighborhoodEditComponent"] },
                { path: 'modalities', component: _modality_table_table_component__WEBPACK_IMPORTED_MODULE_18__["ModalityTableComponent"] },
                { path: 'modalities/create', component: _modality_create_create_component__WEBPACK_IMPORTED_MODULE_19__["ModalityCreateComponent"] },
                { path: 'modalities/:ID', component: _modality_edit_edit_component__WEBPACK_IMPORTED_MODULE_20__["ModalityEditComponent"] },
                { path: 'students', component: _student_table_table_component__WEBPACK_IMPORTED_MODULE_21__["StudentTableComponent"] },
                { path: 'students/create', component: _student_create_create_component__WEBPACK_IMPORTED_MODULE_22__["StudentCreateComponent"] },
                { path: 'students/:ID', component: _student_edit_edit_component__WEBPACK_IMPORTED_MODULE_23__["StudentEditComponent"] },
                { path: 'users', component: _user_table_table_component__WEBPACK_IMPORTED_MODULE_24__["UserTableComponent"] },
                { path: 'users/create', component: _user_create_create_component__WEBPACK_IMPORTED_MODULE_25__["UserCreateComponent"] },
                { path: 'users/:ID', component: _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__["UserEditComponent"] },
            ]),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        //reading the JWT token that will be sent with every AJAX call
        this.token = localStorage.getItem("jwt");
        if (!this.token)
            this.router.navigate(['/login']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginComponent = 
/** login component*/
class LoginComponent {
    /** login ctor */
    constructor(http, router, baseUrl) {
        this.http = http;
        this.router = router;
    }
    login(form) {
        const credentials = JSON.stringify(form.value);
        this.http.post("/api/auth/login", credentials, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        }).subscribe(response => {
            const token = response.token;
            const username = response.userName;
            //saves the token on the client side
            localStorage.setItem("jwt", token);
            localStorage.setItem("username", username);
            this.invalidLogin = false;
            //redirects to the dashboard
            this.router.navigate(["/"]);
        }, err => {
            this.invalidLogin = true;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default
    })
    /** login component*/
    ,
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])
], LoginComponent);



/***/ }),

/***/ "./src/app/modality/create/create.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modality/create/create.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalityCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalityCreateComponent", function() { return ModalityCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let ModalityCreateComponent = 
/** create component*/
class ModalityCreateComponent {
    /** create ctor */
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.submitted = false;
        this.EventValue = "Save";
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        this.getTeachers();
    }
    ngOnInit() {
        //initialize the html form
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            TeacherId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    getTeachers() {
        //load the teachers that will be used in the dropdown
        this.http.get('/api/teachers', this.httpOptions).subscribe(result => {
            this.teachers = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields. ID is 0 as it was not created yet
        var data = { modalityId: 0, Name: this.MyForm.value.Name, teacherId: this.MyForm.value.TeacherId };
        var jData = JSON.stringify(data);
        this.http.post('api/modalities', jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data Saved');
            //redirects to the table
            this.router.navigate(['/modalities']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
ModalityCreateComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
ModalityCreateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create',
        template: __importDefault(__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/create/create.component.html")).default
    })
    /** create component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])
], ModalityCreateComponent);



/***/ }),

/***/ "./src/app/modality/edit/edit.component.ts":
/*!*************************************************!*\
  !*** ./src/app/modality/edit/edit.component.ts ***!
  \*************************************************/
/*! exports provided: ModalityEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalityEditComponent", function() { return ModalityEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let ModalityEditComponent = 
/** create component*/
class ModalityEditComponent {
    constructor(http, router, toastr, route, baseUrl) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(params => this.mainId = params['ID']);
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        //loading data to populate the form fields
        http.get(baseUrl + 'api/modalities/' + this.mainId, this.httpOptions).subscribe(result => {
            this.MyForm.controls["ID"].setValue(result["modalityId"]);
            this.MyForm.controls["Name"].setValue(result["name"]);
            this.MyForm.controls["TeacherId"].setValue(result["teacherId"]);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
        this.getTeachers();
    }
    getTeachers() {
        //load the teachers that will be used in the dropdown
        this.http.get('/api/teachers', this.httpOptions).subscribe(result => {
            this.teachers = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    ngOnInit() {
        //initialize the html form
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            TeacherId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields
        var data = { modalityId: this.mainId, Name: this.MyForm.value.Name, teacherId: this.MyForm.value.TeacherId };
        var jData = JSON.stringify(data);
        this.http.put('api/modalities/' + this.mainId, jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data Saved');
            //redirects to the table
            this.router.navigate(['/modalities']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
ModalityEditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
ModalityEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/edit/edit.component.html")).default
    })
    /** create component*/
    ,
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])
], ModalityEditComponent);



/***/ }),

/***/ "./src/app/modality/table/table.component.ts":
/*!***************************************************!*\
  !*** ./src/app/modality/table/table.component.ts ***!
  \***************************************************/
/*! exports provided: ModalityTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalityTableComponent", function() { return ModalityTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let ModalityTableComponent = 
/** table component*/
class ModalityTableComponent {
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        this.getData();
    }
    getData() {
        //loading data to populate the table
        this.http.get('/api/modalities', this.httpOptions).subscribe(result => {
            this.data = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    edit(id) {
        //redirects to the edit page
        window.open('/modalities/' + id);
    }
    remove(id, name) {
        //confirms before deleting
        if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name))
            //making deletion call
            this.http.delete('/api/modalities/' + id, this.httpOptions).subscribe((data) => {
                //showing a success message
                this.toastr.success('Completed');
                //reloads the table
                this.getData();
            }, error => {
                //shows a an error message
                this.toastr.error('Error Status: ' + error.status);
                if (error.status == 401) //if error is 401 the redirects to login
                    this.router.navigate(['/login']);
            });
        else //alerting that deletion was cancelled
            this.toastr.warning('Action cancelled');
    }
};
ModalityTableComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
ModalityTableComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-table',
        template: __importDefault(__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/table/table.component.html")).default,
    })
    /** table component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])
], ModalityTableComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n.nav-item{\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLm5hdmJhci1icmFuZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG5cclxuLm5hdi1pdGVte1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let NavMenuComponent = class NavMenuComponent {
    constructor(router) {
        this.router = router;
        this.isExpanded = false;
        this.username = "User";
        this.token = localStorage.getItem("jwt");
        this.username = localStorage.getItem("username"); //to create the hello message
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    logOut() {
        localStorage.removeItem("jwt"); //removing jwt from client side
        localStorage.removeItem("username");
        this.token = null;
        this.router.navigate(['/login']); //redirects to login
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], NavMenuComponent);



/***/ }),

/***/ "./src/app/neighborhood/create/create.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/neighborhood/create/create.component.ts ***!
  \*********************************************************/
/*! exports provided: NeighborhoodCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeighborhoodCreateComponent", function() { return NeighborhoodCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let NeighborhoodCreateComponent = 
/** create component*/
class NeighborhoodCreateComponent {
    /** create ctor */
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.submitted = false;
        this.EventValue = "Save";
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
    }
    ngOnInit() {
        //initialize the html form
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields. ID is 0 as it was not created yet
        var data = { id: 0, name: this.MyForm.value.Name };
        var jData = JSON.stringify(data);
        this.http.post('api/neighborhoods', jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data saved');
            //redirects to the table
            this.router.navigate(['/neighborhoods']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
NeighborhoodCreateComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
NeighborhoodCreateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create',
        template: __importDefault(__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/create/create.component.html")).default
    })
    /** create component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])
], NeighborhoodCreateComponent);



/***/ }),

/***/ "./src/app/neighborhood/edit/edit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/neighborhood/edit/edit.component.ts ***!
  \*****************************************************/
/*! exports provided: NeighborhoodEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeighborhoodEditComponent", function() { return NeighborhoodEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let NeighborhoodEditComponent = 
/** create component*/
class NeighborhoodEditComponent {
    constructor(http, router, toastr, route, baseUrl) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(params => this.mainId = params['ID']);
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        //loading data to populate the form fields
        http.get(baseUrl + 'api/neighborhoods/' + this.mainId, this.httpOptions).subscribe(result => {
            this.MyForm.controls["ID"].setValue(result["neighborhoodId"]);
            this.MyForm.controls["Name"].setValue(result["name"]);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    ngOnInit() {
        //initialize the html form
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields
        var data = { neighborhoodId: this.mainId, name: this.MyForm.value.Name };
        var jData = JSON.stringify(data);
        this.http.put('api/neighborhoods/' + this.mainId, jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data Saved');
            //redirects back to the table
            this.router.navigate(['/neighborhoods']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
NeighborhoodEditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
NeighborhoodEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/edit/edit.component.html")).default
    })
    /** create component*/
    ,
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])
], NeighborhoodEditComponent);



/***/ }),

/***/ "./src/app/neighborhood/table/table.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/neighborhood/table/table.component.ts ***!
  \*******************************************************/
/*! exports provided: NeighborhoodTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeighborhoodTableComponent", function() { return NeighborhoodTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let NeighborhoodTableComponent = 
/** table component*/
class NeighborhoodTableComponent {
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        this.getData();
    }
    getData() {
        //loading data to populate the table
        this.http.get('/api/neighborhoods', this.httpOptions).subscribe(result => {
            this.data = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    edit(id) {
        //redirects to the edit page
        window.open('/neighborhoods/' + id);
    }
    remove(id, name) {
        //confirms before deleting
        if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name))
            //making deletion call
            this.http.delete('/api/neighborhoods/' + id, this.httpOptions).subscribe((data) => {
                //showing a success message
                this.toastr.success("Completed");
                //reloads the table
                this.getData();
            }, error => {
                //shows an error message
                this.toastr.error('Error Status: ' + error.status);
                if (error.status == 401) //if error is 401 the redirects to login
                    this.router.navigate(['/login']);
            });
        else //alerting that deletion was cancelled
            this.toastr.warning('Action Cancelled!');
    }
};
NeighborhoodTableComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
NeighborhoodTableComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-table',
        template: __importDefault(__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/table/table.component.html")).default,
    })
    /** table component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])
], NeighborhoodTableComponent);



/***/ }),

/***/ "./src/app/student/create/create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/student/create/create.component.ts ***!
  \****************************************************/
/*! exports provided: StudentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCreateComponent", function() { return StudentCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let StudentCreateComponent = 
/** create component*/
class StudentCreateComponent {
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.submitted = false;
        this.EventValue = "Save";
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        this.getModalities();
        this.getNeighborhoods();
    }
    ngOnInit() {
        //initialize the html form
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            ModalityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            NeighborhoodId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    getModalities() {
        //load the modalities that will be used in the dropdown
        this.http.get('/api/modalities', this.httpOptions).subscribe(result => {
            this.modalities = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    getNeighborhoods() {
        //load the neighborhoods that will be used in the dropdown
        this.http.get('/api/neighborhoods', this.httpOptions).subscribe(result => {
            this.neighborhoods = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields. ID is 0 as it was not created yet
        var data = { studentId: 0, Name: this.MyForm.value.Name, Surname: this.MyForm.value.Surname, modalityId: this.MyForm.value.ModalityId, neighborhoodId: this.MyForm.value.NeighborhoodId };
        var jData = JSON.stringify(data);
        this.http.post('api/students', jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data Saved');
            //redirects to the table
            this.router.navigate(['/students']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
StudentCreateComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
StudentCreateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create',
        template: __importDefault(__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/create/create.component.html")).default
    })
    /** create component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])
], StudentCreateComponent);



/***/ }),

/***/ "./src/app/student/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/student/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: StudentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEditComponent", function() { return StudentEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let StudentEditComponent = 
/** create component*/
class StudentEditComponent {
    constructor(http, toastr, router, route, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(params => this.mainId = params['ID']);
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        //loading data to populate the form fields
        http.get(baseUrl + 'api/students/' + this.mainId, this.httpOptions).subscribe(result => {
            this.MyForm.controls["ID"].setValue(result["modalityId"]);
            this.MyForm.controls["Name"].setValue(result["name"]);
            this.MyForm.controls["Surname"].setValue(result["surname"]);
            this.MyForm.controls["ModalityId"].setValue(result["modalityId"]);
            this.MyForm.controls["NeighborhoodId"].setValue(result["neighborhoodId"]);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
        this.getModalities();
        this.getNeighborhoods();
    }
    getModalities() {
        //load the modalities that will be used in the dropdown
        this.http.get('/api/modalities', this.httpOptions).subscribe(result => {
            this.modalities = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    getNeighborhoods() {
        //load the neighborhoods that will be used in the dropdown
        this.http.get('/api/neighborhoods', this.httpOptions).subscribe(result => {
            this.neighborhoods = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    ngOnInit() {
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            ModalityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            NeighborhoodId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields
        var data = { studentId: this.mainId, Name: this.MyForm.value.Name, Surname: this.MyForm.value.Surname, modalityId: this.MyForm.value.ModalityId, neighborhoodId: this.MyForm.value.NeighborhoodId };
        var jData = JSON.stringify(data);
        this.http.put('api/students/' + this.mainId, jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data Saved');
            //redirects to the table
            this.router.navigate(['/students']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
StudentEditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
StudentEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/edit/edit.component.html")).default
    })
    /** create component*/
    ,
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])
], StudentEditComponent);



/***/ }),

/***/ "./src/app/student/table/table.component.ts":
/*!**************************************************!*\
  !*** ./src/app/student/table/table.component.ts ***!
  \**************************************************/
/*! exports provided: StudentTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentTableComponent", function() { return StudentTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let StudentTableComponent = 
/** table component*/
class StudentTableComponent {
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        this.getData();
    }
    getData() {
        //loading data to populate the table
        this.http.get('/api/students', this.httpOptions).subscribe(result => {
            this.data = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    edit(id) {
        //redirects to the edit page
        window.open('/students/' + id);
    }
    remove(id, name) {
        //confirms before deleting
        if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name))
            //making deletion call
            this.http.delete('/api/students/' + id, this.httpOptions).subscribe((data) => {
                //showing a success message
                this.toastr.success('Completed');
                //reloads the table
                this.getData();
            }, error => {
                //shows an error message
                this.toastr.error('Error Status: ' + error.status);
                if (error.status == 401) //if error is 401 the redirects to login
                    this.router.navigate(['/login']);
            });
        else //alerting that deletion was cancelled
            this.toastr.warning('Action Cancelled');
    }
};
StudentTableComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
StudentTableComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-table',
        template: __importDefault(__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/table/table.component.html")).default,
    })
    /** table component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])
], StudentTableComponent);



/***/ }),

/***/ "./src/app/teacher/create/create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/teacher/create/create.component.ts ***!
  \****************************************************/
/*! exports provided: TeacherCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherCreateComponent", function() { return TeacherCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let TeacherCreateComponent = 
/** create component*/
class TeacherCreateComponent {
    /** create ctor */
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.submitted = false;
        this.EventValue = "Save";
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
    }
    ngOnInit() {
        //initialize the html form
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields. ID is 0 as it was not created yet
        var data = { id: 0, name: this.MyForm.value.Name, surname: this.MyForm.value.Surname, phoneNumber: this.MyForm.value.PhoneNumber };
        var jData = JSON.stringify(data);
        this.http.post('api/teachers', jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data Saved');
            //redirects to the table
            this.router.navigate(['/teachers']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
TeacherCreateComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
TeacherCreateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create',
        template: __importDefault(__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/create/create.component.html")).default
    })
    /** create component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])
], TeacherCreateComponent);



/***/ }),

/***/ "./src/app/teacher/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/teacher/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: TeacherEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherEditComponent", function() { return TeacherEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let TeacherEditComponent = 
/** create component*/
class TeacherEditComponent {
    constructor(http, toastr, router, route, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(params => this.mainId = params['ID']);
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        //loading data to populate the form fields
        http.get(baseUrl + 'api/teachers/' + this.mainId, this.httpOptions).subscribe(result => {
            this.MyForm.controls["ID"].setValue(result["teacherId"]);
            this.MyForm.controls["Name"].setValue(result["name"]);
            this.MyForm.controls["Surname"].setValue(result["surname"]);
            this.MyForm.controls["PhoneNumber"].setValue(result["phoneNumber"]);
        }, error => {
            //shows an error message
            this.toastr.error("Error Status: " + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    ngOnInit() {
        //initialize the html form
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields
        var data = { teacherId: this.mainId, name: this.MyForm.value.Name, surname: this.MyForm.value.Surname, phoneNumber: this.MyForm.value.PhoneNumber };
        var jData = JSON.stringify(data);
        this.http.put('api/teachers/' + this.mainId, jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data Saved');
            //redirects to the table
            this.router.navigate(['/teachers']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
TeacherEditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
TeacherEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/edit/edit.component.html")).default
    })
    /** create component*/
    ,
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])
], TeacherEditComponent);



/***/ }),

/***/ "./src/app/teacher/table/table.component.ts":
/*!**************************************************!*\
  !*** ./src/app/teacher/table/table.component.ts ***!
  \**************************************************/
/*! exports provided: TeacherTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherTableComponent", function() { return TeacherTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let TeacherTableComponent = 
/** table component*/
class TeacherTableComponent {
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        this.getData();
    }
    getData() {
        //loading data to populate the table
        this.http.get('/api/teachers', this.httpOptions).subscribe(result => {
            this.data = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    edit(id) {
        //redirects to the edit page
        window.open('/teachers/' + id);
    }
    remove(id, name) {
        //confirms before deleting
        if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name))
            //making deletion call
            this.http.delete('/api/teachers/' + id, this.httpOptions).subscribe((data) => {
                //showing a success message
                this.toastr.success('Completed');
                //reloads the table
                this.getData();
            }, error => {
                //shows an error message
                this.toastr.error('Error Status: ' + error.status);
                if (error.status == 401) //if error is 401 the redirects to login
                    this.router.navigate(['/login']);
            });
        else //alerting that deletion was cancelled
            this.toastr.warning('Action Cancelled');
    }
};
TeacherTableComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
TeacherTableComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-table',
        template: __importDefault(__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/table/table.component.html")).default,
    })
    /** table component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])
], TeacherTableComponent);



/***/ }),

/***/ "./src/app/user/create/create.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/create/create.component.ts ***!
  \*************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let UserCreateComponent = 
/** create component*/
class UserCreateComponent {
    /** create ctor */
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.submitted = false;
        this.EventValue = "Save";
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
    }
    ngOnInit() {
        //initialize the html form
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields. ID is 0 as it was not created yet
        var data = { id: 0, name: this.MyForm.value.Name, email: this.MyForm.value.Email, password: this.MyForm.value.Password };
        var jData = JSON.stringify(data);
        this.http.post('api/users', jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data Saved');
            //redirects to the table
            this.router.navigate(['/users']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
UserCreateComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
UserCreateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create',
        template: __importDefault(__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/create/create.component.html")).default
    })
    /** create component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])
], UserCreateComponent);



/***/ }),

/***/ "./src/app/user/edit/edit.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/edit/edit.component.ts ***!
  \*********************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let UserEditComponent = 
/** create component*/
class UserEditComponent {
    constructor(http, toastr, router, route, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(params => this.mainId = params['ID']);
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        //loading data to populate the form fields
        http.get(baseUrl + 'api/users/' + this.mainId, this.httpOptions).subscribe(result => {
            this.MyForm.controls["ID"].setValue(result["id"]);
            this.MyForm.controls["Name"].setValue(result["name"]);
            this.MyForm.controls["Email"].setValue(result["email"]);
            this.MyForm.controls["Password"].setValue(result["password"]);
        }, error => {
            //shows an error message
            this.toastr.error("Error Status: " + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    ngOnInit() {
        //initialize the html form
        this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    Save() {
        this.submitted = true;
        if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
        }
        //creating the JSON object with the form fields
        var data = { id: this.mainId, name: this.MyForm.value.Name, email: this.MyForm.value.Email, password: this.MyForm.value.Password };
        var jData = JSON.stringify(data);
        this.http.put('api/users/' + this.mainId, jData, this.httpOptions).subscribe((data) => {
            //showing a success message
            this.toastr.success('Data Saved');
            //redirects to the table
            this.router.navigate(['/users']);
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
};
UserEditComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
UserEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.component.html")).default
    })
    /** create component*/
    ,
    __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])
], UserEditComponent);



/***/ }),

/***/ "./src/app/user/table/table.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/table/table.component.ts ***!
  \***********************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let UserTableComponent = 
/** table component*/
class UserTableComponent {
    constructor(http, toastr, router, baseUrl) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
            this.router.navigate(['/login']);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token //adds token as the Authorization header
            })
        };
        this.getData();
    }
    getData() {
        //loading data to populate the table
        this.http.get('/api/users', this.httpOptions).subscribe(result => {
            this.data = result;
        }, error => {
            //shows an error message
            this.toastr.error('Error Status: ' + error.status);
            if (error.status == 401) //if error is 401 the redirects to login
                this.router.navigate(['/login']);
        });
    }
    edit(id) {
        //redirects to the edit page
        window.open('/teachers/' + id);
    }
    remove(id, name) {
        //confirms before deleting
        if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name))
            //making deletion call
            this.http.delete('/api/users/' + id, this.httpOptions).subscribe((data) => {
                //showing a success message
                this.toastr.success('Completed');
                //reloads the table
                this.getData();
            }, error => {
                if (error.status == 409) //if error is 409 let's user know that they can't delete themselves
                    this.toastr.error('You cannot delete your own account! Error: ' + error.status);
                else //shows a generic error message
                    this.toastr.error('Error Status: ' + error.status);
                if (error.status == 401) //if error is 401 the redirects to login
                    this.router.navigate(['/login']);
            });
        else //alerting that deletion was cancelled
            this.toastr.warning('Action Cancelled');
    }
};
UserTableComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
UserTableComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-table',
        template: __importDefault(__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/table/table.component.html")).default,
    })
    /** table component*/
    ,
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])
], UserTableComponent);



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adolf\source\repos\SportsDepartment\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map