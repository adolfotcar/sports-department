function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n  <router-outlet></router-outlet>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"jumbotron\">\r\n  <h1>Cruzeiro City Council</h1>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/students']\">\r\n      <img src=\"assets/images/manage-students.png\" width=\"128\" />\r\n      <div>Students</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/teachers']\">\r\n      <img src=\"assets/images/manage-teachers.png\" width=\"128\" />\r\n      <div>Teachers</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/neighborhoods']\">\r\n      <img src=\"assets/images/manage-neighborhood.png\" width=\"128\" />\r\n      <div>Neighborhoods</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/modalities']\">\r\n      <img src=\"assets/images/manage-classes.png\" width=\"128\" />\r\n      <div>Modalities</div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center dash-icon ng-scope\">\r\n    <a [routerLink]=\"['/users']\">\r\n      <img src=\"assets/images/manage-users.png\" width=\"128\" />\r\n      <div>Users</div>\r\n    </a>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Sports Department</a>\r\n      <button class=\"navbar-toggler\"\r\n              type=\"button\"\r\n              data-toggle=\"collapse\"\r\n              data-target=\".navbar-collapse\"\r\n              aria-label=\"Toggle navigation\"\r\n              [attr.aria-expanded]=\"isExpanded\"\r\n              (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex justify-content-end\"\r\n           [ngClass]=\"{ show: isExpanded }\">\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/login']\">Login</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\r\n  <div class=\"container-fluid\">\r\n    <h2 class=\"form-signin-heading\">Login</h2>\r\n    <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">Invalid username or password.</div>\r\n    <br />\r\n    <label for=\"username\" class=\"sr-only\">Email address</label>\r\n    <input type=\"email\" id=\"username\" name=\"email\" ngModel class=\"form-control\" placeholder=\"User Name\" required autofocus>\r\n    <br />\r\n    <label for=\"password\" class=\"sr-only\">Password</label>\r\n    <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Password\" required>\r\n    <br />\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n  </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/create/create.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modality/create/create.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalityCreateCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create Modality</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Teacher</td>\r\n          <td>\r\n            <select formControlName=\"TeacherId\">\r\n              <option *ngFor=\"let t of teachers\" [ngValue]=\"t.teacherId\">{{t.fullName}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.TeacherId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.TeacherId.errors.required\">Teacher is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/edit/edit.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modality/edit/edit.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalityEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit Modality</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Teacher</td>\r\n          <td>\r\n            <select formControlName=\"TeacherId\">\r\n              <option *ngFor=\"let t of teachers\" [ngValue]=\"t.teacherId\">{{t.fullName}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.TeacherId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.TeacherId.errors.required\">Teacher is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/table/table.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modality/table/table.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalityTableTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/modalities/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Id</td>\r\n        <td>Modality</td>\r\n        <td>Teacher</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.modalityId}}</td>\r\n        <td>{{d.name}}</td>\r\n        <td>{{d.teacher.fullName}}</td>\r\n        <td><a [routerLink]=\"['/modalities/'+d.modalityId]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.modalityId, d.name)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Sports Department</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex justify-content-end\"\r\n           [ngClass]=\"{ show: isExpanded }\">\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\" style=\"padding: 0.5rem\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            Welcome {{ username }}!\r\n          </li>\r\n          <li class=\"nav-item\"\r\n              [routerLinkActive]=\"['link-active']\"\r\n              [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" (click)=\"logOut()\">Logout</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/create/create.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/create/create.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNeighborhoodCreateCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create new Neighborhood</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/edit/edit.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/edit/edit.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNeighborhoodEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit Neighborhood</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/table/table.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/table/table.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNeighborhoodTableTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/neighborhoods/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Id</td>\r\n        <td>Neighborhood</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.neighborhoodId}}</td>\r\n        <td>{{d.name}}</td>\r\n        <td><a [routerLink]=\"['/neighborhoods/'+d.neighborhoodId]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.neighborhoodId, d.name)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/create/create.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/create/create.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentCreateCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create new Student</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n        <tr>\r\n          <td>Surname</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Surname\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Surname.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Surname.errors.required\">Surname is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Modality</td>\r\n          <td>\r\n            <select formControlName=\"ModalityId\">\r\n              <option *ngFor=\"let m of modalities\" [ngValue]=\"m.modalityId\">{{m.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.ModalityId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.ModalityId.errors.required\">Modality is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Neighborhood</td>\r\n          <td>\r\n            <select formControlName=\"NeighborhoodId\">\r\n              <option *ngFor=\"let n of neighborhoods\" [ngValue]=\"n.neighborhoodId\">{{n.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.NeighborhoodId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.NeighborhoodId.errors.required\">Neighborhood is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/edit/edit.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/edit/edit.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit Student</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Nome</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n        <tr>\r\n          <td>Surname</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Surname\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Surname.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Surname.errors.required\">Surname is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Modality</td>\r\n          <td>\r\n            <select formControlName=\"ModalityId\">\r\n              <option *ngFor=\"let m of modalities\" [ngValue]=\"m.modalityId\">{{m.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.ModalityId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.ModalityId.errors.required\">Modality is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Neighborhood</td>\r\n          <td>\r\n            <select formControlName=\"NeighborhoodId\">\r\n              <option *ngFor=\"let n of neighborhoods\" [ngValue]=\"n.neighborhoodId\">{{n.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && MyForm.controls.NeighborhoodId.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.NeighborhoodId.errors.required\">Neighborhood is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/table/table.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/table/table.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentTableTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/students/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Id</td>\r\n        <td>Name</td>\r\n        <td>Modality</td>\r\n        <td>Neighborhood</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.studentId}}</td>\r\n        <td>{{d.fullName}}</td>\r\n        <td>{{d.modality.name}}</td>\r\n        <td>{{d.neighborhood.name}}</td>\r\n        <td><a [routerLink]=\"['/students/'+d.studentId]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.studentId, d.fullName)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/create/create.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/create/create.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeacherCreateCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create new Teacher</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Surname</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Surname\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Surname.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Surname.errors.required\">Surname is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Phone</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"PhoneNumber\">\r\n            <div *ngIf=\"submitted && MyForm.controls.PhoneNumber.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.PhoneNumber.errors.required\">Phone is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/edit/edit.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/edit/edit.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeacherEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit Teacher</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Nome</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Sobrenome</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Surname\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Surname.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Surname.errors.required\">Surname is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Telefone</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"PhoneNumber\">\r\n            <div *ngIf=\"submitted && MyForm.controls.PhoneNumber.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.PhoneNumber.errors.required\">Phone is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/table/table.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/table/table.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeacherTableTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/teachers/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Id</td>\r\n        <td>Name</td>\r\n        <td>Phone</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.teacherId}}</td>\r\n        <td>{{d.fullName}}</td>\r\n        <td>{{d.phoneNumber}}</td>\r\n        <td><a [routerLink]=\"['/teachers/'+d.teacherId]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.teacherId, d.fullName)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/create/create.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/create/create.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserCreateCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Create new User</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Email</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Email\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Email.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Email.errors.required\">Email is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Password</td>\r\n          <td>\r\n            <input type=\"password\" formControlName=\"Password\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Password.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Password.errors.required\">Password is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n\r\n  <form [formGroup]=\"MyForm\" (ngSubmit)=\"this[EventValue]()\">\r\n\r\n    <h3>Edit User</h3>\r\n    <div class=\"row\">\r\n\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td>Name</td>\r\n          <td>\r\n            <input type=\"hidden\" formControlName=\"ID\">\r\n            <input type=\"text\" formControlName=\"Name\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Name.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Name.errors.required\">Name is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Email</td>\r\n          <td>\r\n            <input type=\"text\" formControlName=\"Email\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Email.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Email.errors.required\">Email is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Password</td>\r\n          <td>\r\n            <input type=\"password\" formControlName=\"Password\">\r\n            <div *ngIf=\"submitted && MyForm.controls.Password.errors\" class=\"text-danger\">\r\n              <div *ngIf=\"MyForm.controls.Password.errors.required\">Password is required</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/table/table.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/table/table.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserTableTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/users/create']\"><fa-icon [icon]=\"faPlus\"></fa-icon> Add</a>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-striped\">\r\n      <tr>\r\n        <td>Name</td>\r\n        <td>Email</td>\r\n        <td></td>\r\n        <td></td>\r\n      </tr>\r\n      <tr *ngFor=\"let d of data\">\r\n        <td>{{d.name}}</td>\r\n        <td>{{d.email}}</td>\r\n        <td><a [routerLink]=\"['/users/'+d.id]\" class=\"btn btn-warning\"><fa-icon [icon]=\"faEdit\"></fa-icon> Edit</a></td>\r\n        <td><a (click)=\"remove(d.id, d.name)\" class=\"btn btn-danger\"><fa-icon [icon]=\"faTrash\"></fa-icon> Remove</a></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nav-menu/nav-menu.component */
    "./src/app/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _teacher_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./teacher/table/table.component */
    "./src/app/teacher/table/table.component.ts");
    /* harmony import */


    var _teacher_create_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./teacher/create/create.component */
    "./src/app/teacher/create/create.component.ts");
    /* harmony import */


    var _teacher_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./teacher/edit/edit.component */
    "./src/app/teacher/edit/edit.component.ts");
    /* harmony import */


    var _neighborhood_table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./neighborhood/table/table.component */
    "./src/app/neighborhood/table/table.component.ts");
    /* harmony import */


    var _neighborhood_create_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./neighborhood/create/create.component */
    "./src/app/neighborhood/create/create.component.ts");
    /* harmony import */


    var _neighborhood_edit_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./neighborhood/edit/edit.component */
    "./src/app/neighborhood/edit/edit.component.ts");
    /* harmony import */


    var _modality_table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./modality/table/table.component */
    "./src/app/modality/table/table.component.ts");
    /* harmony import */


    var _modality_create_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./modality/create/create.component */
    "./src/app/modality/create/create.component.ts");
    /* harmony import */


    var _modality_edit_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./modality/edit/edit.component */
    "./src/app/modality/edit/edit.component.ts");
    /* harmony import */


    var _student_table_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./student/table/table.component */
    "./src/app/student/table/table.component.ts");
    /* harmony import */


    var _student_create_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./student/create/create.component */
    "./src/app/student/create/create.component.ts");
    /* harmony import */


    var _student_edit_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./student/edit/edit.component */
    "./src/app/student/edit/edit.component.ts");
    /* harmony import */


    var _user_table_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./user/table/table.component */
    "./src/app/user/table/table.component.ts");
    /* harmony import */


    var _user_create_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./user/create/create.component */
    "./src/app/user/create/create.component.ts");
    /* harmony import */


    var _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./user/edit/edit.component */
    "./src/app/user/edit/edit.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__["NavMenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _teacher_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TeacherTableComponent"], _teacher_create_create_component__WEBPACK_IMPORTED_MODULE_13__["TeacherCreateComponent"], _teacher_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["TeacherEditComponent"], _neighborhood_table_table_component__WEBPACK_IMPORTED_MODULE_15__["NeighborhoodTableComponent"], _neighborhood_create_create_component__WEBPACK_IMPORTED_MODULE_16__["NeighborhoodCreateComponent"], _neighborhood_edit_edit_component__WEBPACK_IMPORTED_MODULE_17__["NeighborhoodEditComponent"], _modality_table_table_component__WEBPACK_IMPORTED_MODULE_18__["ModalityTableComponent"], _modality_create_create_component__WEBPACK_IMPORTED_MODULE_19__["ModalityCreateComponent"], _modality_edit_edit_component__WEBPACK_IMPORTED_MODULE_20__["ModalityEditComponent"], _student_table_table_component__WEBPACK_IMPORTED_MODULE_21__["StudentTableComponent"], _student_create_create_component__WEBPACK_IMPORTED_MODULE_22__["StudentCreateComponent"], _student_edit_edit_component__WEBPACK_IMPORTED_MODULE_23__["StudentEditComponent"], _user_table_table_component__WEBPACK_IMPORTED_MODULE_24__["UserTableComponent"], _user_create_create_component__WEBPACK_IMPORTED_MODULE_25__["UserCreateComponent"], _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__["UserEditComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
      }, {
        path: 'teachers',
        component: _teacher_table_table_component__WEBPACK_IMPORTED_MODULE_12__["TeacherTableComponent"]
      }, {
        path: 'teachers/create',
        component: _teacher_create_create_component__WEBPACK_IMPORTED_MODULE_13__["TeacherCreateComponent"]
      }, {
        path: 'teachers/:ID',
        component: _teacher_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["TeacherEditComponent"]
      }, {
        path: 'neighborhoods',
        component: _neighborhood_table_table_component__WEBPACK_IMPORTED_MODULE_15__["NeighborhoodTableComponent"]
      }, {
        path: 'neighborhoods/create',
        component: _neighborhood_create_create_component__WEBPACK_IMPORTED_MODULE_16__["NeighborhoodCreateComponent"]
      }, {
        path: 'neighborhoods/:ID',
        component: _neighborhood_edit_edit_component__WEBPACK_IMPORTED_MODULE_17__["NeighborhoodEditComponent"]
      }, {
        path: 'modalities',
        component: _modality_table_table_component__WEBPACK_IMPORTED_MODULE_18__["ModalityTableComponent"]
      }, {
        path: 'modalities/create',
        component: _modality_create_create_component__WEBPACK_IMPORTED_MODULE_19__["ModalityCreateComponent"]
      }, {
        path: 'modalities/:ID',
        component: _modality_edit_edit_component__WEBPACK_IMPORTED_MODULE_20__["ModalityEditComponent"]
      }, {
        path: 'students',
        component: _student_table_table_component__WEBPACK_IMPORTED_MODULE_21__["StudentTableComponent"]
      }, {
        path: 'students/create',
        component: _student_create_create_component__WEBPACK_IMPORTED_MODULE_22__["StudentCreateComponent"]
      }, {
        path: 'students/:ID',
        component: _student_edit_edit_component__WEBPACK_IMPORTED_MODULE_23__["StudentEditComponent"]
      }, {
        path: 'users',
        component: _user_table_table_component__WEBPACK_IMPORTED_MODULE_24__["UserTableComponent"]
      }, {
        path: 'users/create',
        component: _user_create_create_component__WEBPACK_IMPORTED_MODULE_25__["UserCreateComponent"]
      }, {
        path: 'users/:ID',
        component: _user_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__["UserEditComponent"]
      }]), ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot()],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent = function HomeComponent(router) {
      _classCallCheck(this, HomeComponent);

      this.router = router; //reading the JWT token that will be sent with every AJAX call

      this.token = localStorage.getItem("jwt");
      if (!this.token) this.router.navigate(['/login']);
    };

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent =
    /*#__PURE__*/

    /** login component*/
    function () {
      /** login ctor */
      function LoginComponent(http, router, baseUrl) {
        _classCallCheck(this, LoginComponent);

        this.http = http;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login(form) {
          var _this = this;

          var credentials = JSON.stringify(form.value);
          this.http.post("/api/auth/login", credentials, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          }).subscribe(function (response) {
            var token = response.token;
            var username = response.userName; //saves the token on the client side

            localStorage.setItem("jwt", token);
            localStorage.setItem("username", username);
            _this.invalidLogin = false; //redirects to the dashboard

            _this.router.navigate(["/"]);
          }, function (err) {
            _this.invalidLogin = true;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"]
    })
    /** login component*/
    , __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/modality/create/create.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modality/create/create.component.ts ***!
    \*****************************************************/

  /*! exports provided: ModalityCreateComponent */

  /***/
  function srcAppModalityCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalityCreateComponent", function () {
      return ModalityCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ModalityCreateComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      /** create ctor */
      function ModalityCreateComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, ModalityCreateComponent);

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

      _createClass(ModalityCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //initialize the html form
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            TeacherId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "getTeachers",
        value: function getTeachers() {
          var _this2 = this;

          //load the teachers that will be used in the dropdown
          this.http.get('/api/teachers', this.httpOptions).subscribe(function (result) {
            _this2.teachers = result;
          }, function (error) {
            //shows an error message
            _this2.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this2.router.navigate(['/login']);
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this3 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields. ID is 0 as it was not created yet


          var data = {
            modalityId: 0,
            Name: this.MyForm.value.Name,
            teacherId: this.MyForm.value.TeacherId
          };
          var jData = JSON.stringify(data);
          this.http.post('api/modalities', jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this3.toastr.success('Data Saved'); //redirects to the table


            _this3.router.navigate(['/modalities']);
          }, function (error) {
            //shows an error message
            _this3.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this3.router.navigate(['/login']);
          });
        }
      }]);

      return ModalityCreateComponent;
    }();

    ModalityCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    ModalityCreateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-create',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/create/create.component.html"))["default"]
    })
    /** create component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])], ModalityCreateComponent);
    /***/
  },

  /***/
  "./src/app/modality/edit/edit.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/modality/edit/edit.component.ts ***!
    \*************************************************/

  /*! exports provided: ModalityEditComponent */

  /***/
  function srcAppModalityEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalityEditComponent", function () {
      return ModalityEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ModalityEditComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      function ModalityEditComponent(http, router, toastr, route, baseUrl) {
        var _this4 = this;

        _classCallCheck(this, ModalityEditComponent);

        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(function (params) {
          return _this4.mainId = params['ID'];
        });
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
          this.router.navigate(['/login']);
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token //adds token as the Authorization header

          })
        }; //loading data to populate the form fields

        http.get(baseUrl + 'api/modalities/' + this.mainId, this.httpOptions).subscribe(function (result) {
          _this4.MyForm.controls["ID"].setValue(result["modalityId"]);

          _this4.MyForm.controls["Name"].setValue(result["name"]);

          _this4.MyForm.controls["TeacherId"].setValue(result["teacherId"]);
        }, function (error) {
          //shows an error message
          _this4.toastr.error('Error Status: ' + error.status);

          if (error.status == 401) //if error is 401 the redirects to login
            _this4.router.navigate(['/login']);
        });
        this.getTeachers();
      }

      _createClass(ModalityEditComponent, [{
        key: "getTeachers",
        value: function getTeachers() {
          var _this5 = this;

          //load the teachers that will be used in the dropdown
          this.http.get('/api/teachers', this.httpOptions).subscribe(function (result) {
            _this5.teachers = result;
          }, function (error) {
            //shows an error message
            _this5.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this5.router.navigate(['/login']);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          //initialize the html form
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            TeacherId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this6 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields


          var data = {
            modalityId: this.mainId,
            Name: this.MyForm.value.Name,
            teacherId: this.MyForm.value.TeacherId
          };
          var jData = JSON.stringify(data);
          this.http.put('api/modalities/' + this.mainId, jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this6.toastr.success('Data Saved'); //redirects to the table


            _this6.router.navigate(['/modalities']);
          }, function (error) {
            //shows an error message
            _this6.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this6.router.navigate(['/login']);
          });
        }
      }]);

      return ModalityEditComponent;
    }();

    ModalityEditComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    ModalityEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-edit',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/edit/edit.component.html"))["default"]
    })
    /** create component*/
    , __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])], ModalityEditComponent);
    /***/
  },

  /***/
  "./src/app/modality/table/table.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/modality/table/table.component.ts ***!
    \***************************************************/

  /*! exports provided: ModalityTableComponent */

  /***/
  function srcAppModalityTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalityTableComponent", function () {
      return ModalityTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ModalityTableComponent =
    /*#__PURE__*/

    /** table component*/
    function () {
      function ModalityTableComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, ModalityTableComponent);

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

      _createClass(ModalityTableComponent, [{
        key: "getData",
        value: function getData() {
          var _this7 = this;

          //loading data to populate the table
          this.http.get('/api/modalities', this.httpOptions).subscribe(function (result) {
            _this7.data = result;
          }, function (error) {
            //shows an error message
            _this7.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this7.router.navigate(['/login']);
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          //redirects to the edit page
          window.open('/modalities/' + id);
        }
      }, {
        key: "remove",
        value: function remove(id, name) {
          var _this8 = this;

          //confirms before deleting
          if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name)) //making deletion call
            this.http["delete"]('/api/modalities/' + id, this.httpOptions).subscribe(function (data) {
              //showing a success message
              _this8.toastr.success('Completed'); //reloads the table


              _this8.getData();
            }, function (error) {
              //shows a an error message
              _this8.toastr.error('Error Status: ' + error.status);

              if (error.status == 401) //if error is 401 the redirects to login
                _this8.router.navigate(['/login']);
            });else //alerting that deletion was cancelled
            this.toastr.warning('Action cancelled');
        }
      }]);

      return ModalityTableComponent;
    }();

    ModalityTableComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    ModalityTableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-table',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modality/table/table.component.html"))["default"]
    })
    /** table component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])], ModalityTableComponent);
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.css":
  /*!*************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n.nav-item{\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLm5hdmJhci1icmFuZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG5cclxuLm5hdi1pdGVte1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav-menu/nav-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav-menu/nav-menu.component.ts ***!
    \************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavMenuComponent = /*#__PURE__*/function () {
      function NavMenuComponent(router) {
        _classCallCheck(this, NavMenuComponent);

        this.router = router;
        this.isExpanded = false;
        this.username = "User";
        this.token = localStorage.getItem("jwt");
        this.username = localStorage.getItem("username"); //to create the hello message
      }

      _createClass(NavMenuComponent, [{
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem("jwt"); //removing jwt from client side

          localStorage.removeItem("username");
          this.token = null;
          this.router.navigate(['/login']); //redirects to login
        }
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-nav-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./nav-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./nav-menu.component.css */
      "./src/app/nav-menu/nav-menu.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], NavMenuComponent);
    /***/
  },

  /***/
  "./src/app/neighborhood/create/create.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/neighborhood/create/create.component.ts ***!
    \*********************************************************/

  /*! exports provided: NeighborhoodCreateComponent */

  /***/
  function srcAppNeighborhoodCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeighborhoodCreateComponent", function () {
      return NeighborhoodCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NeighborhoodCreateComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      /** create ctor */
      function NeighborhoodCreateComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, NeighborhoodCreateComponent);

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

      _createClass(NeighborhoodCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //initialize the html form
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this9 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields. ID is 0 as it was not created yet


          var data = {
            id: 0,
            name: this.MyForm.value.Name
          };
          var jData = JSON.stringify(data);
          this.http.post('api/neighborhoods', jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this9.toastr.success('Data saved'); //redirects to the table


            _this9.router.navigate(['/neighborhoods']);
          }, function (error) {
            //shows an error message
            _this9.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this9.router.navigate(['/login']);
          });
        }
      }]);

      return NeighborhoodCreateComponent;
    }();

    NeighborhoodCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    NeighborhoodCreateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-create',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/create/create.component.html"))["default"]
    })
    /** create component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])], NeighborhoodCreateComponent);
    /***/
  },

  /***/
  "./src/app/neighborhood/edit/edit.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/neighborhood/edit/edit.component.ts ***!
    \*****************************************************/

  /*! exports provided: NeighborhoodEditComponent */

  /***/
  function srcAppNeighborhoodEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeighborhoodEditComponent", function () {
      return NeighborhoodEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NeighborhoodEditComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      function NeighborhoodEditComponent(http, router, toastr, route, baseUrl) {
        var _this10 = this;

        _classCallCheck(this, NeighborhoodEditComponent);

        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(function (params) {
          return _this10.mainId = params['ID'];
        });
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
          this.router.navigate(['/login']);
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token //adds token as the Authorization header

          })
        }; //loading data to populate the form fields

        http.get(baseUrl + 'api/neighborhoods/' + this.mainId, this.httpOptions).subscribe(function (result) {
          _this10.MyForm.controls["ID"].setValue(result["neighborhoodId"]);

          _this10.MyForm.controls["Name"].setValue(result["name"]);
        }, function (error) {
          //shows an error message
          _this10.toastr.error('Error Status: ' + error.status);

          if (error.status == 401) //if error is 401 the redirects to login
            _this10.router.navigate(['/login']);
        });
      }

      _createClass(NeighborhoodEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //initialize the html form
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this11 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields


          var data = {
            neighborhoodId: this.mainId,
            name: this.MyForm.value.Name
          };
          var jData = JSON.stringify(data);
          this.http.put('api/neighborhoods/' + this.mainId, jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this11.toastr.success('Data Saved'); //redirects back to the table


            _this11.router.navigate(['/neighborhoods']);
          }, function (error) {
            //shows an error message
            _this11.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this11.router.navigate(['/login']);
          });
        }
      }]);

      return NeighborhoodEditComponent;
    }();

    NeighborhoodEditComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    NeighborhoodEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-edit',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/edit/edit.component.html"))["default"]
    })
    /** create component*/
    , __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])], NeighborhoodEditComponent);
    /***/
  },

  /***/
  "./src/app/neighborhood/table/table.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/neighborhood/table/table.component.ts ***!
    \*******************************************************/

  /*! exports provided: NeighborhoodTableComponent */

  /***/
  function srcAppNeighborhoodTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeighborhoodTableComponent", function () {
      return NeighborhoodTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NeighborhoodTableComponent =
    /*#__PURE__*/

    /** table component*/
    function () {
      function NeighborhoodTableComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, NeighborhoodTableComponent);

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

      _createClass(NeighborhoodTableComponent, [{
        key: "getData",
        value: function getData() {
          var _this12 = this;

          //loading data to populate the table
          this.http.get('/api/neighborhoods', this.httpOptions).subscribe(function (result) {
            _this12.data = result;
          }, function (error) {
            //shows an error message
            _this12.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this12.router.navigate(['/login']);
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          //redirects to the edit page
          window.open('/neighborhoods/' + id);
        }
      }, {
        key: "remove",
        value: function remove(id, name) {
          var _this13 = this;

          //confirms before deleting
          if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name)) //making deletion call
            this.http["delete"]('/api/neighborhoods/' + id, this.httpOptions).subscribe(function (data) {
              //showing a success message
              _this13.toastr.success("Completed"); //reloads the table


              _this13.getData();
            }, function (error) {
              //shows an error message
              _this13.toastr.error('Error Status: ' + error.status);

              if (error.status == 401) //if error is 401 the redirects to login
                _this13.router.navigate(['/login']);
            });else //alerting that deletion was cancelled
            this.toastr.warning('Action Cancelled!');
        }
      }]);

      return NeighborhoodTableComponent;
    }();

    NeighborhoodTableComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    NeighborhoodTableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-table',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/neighborhood/table/table.component.html"))["default"]
    })
    /** table component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])], NeighborhoodTableComponent);
    /***/
  },

  /***/
  "./src/app/student/create/create.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/student/create/create.component.ts ***!
    \****************************************************/

  /*! exports provided: StudentCreateComponent */

  /***/
  function srcAppStudentCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCreateComponent", function () {
      return StudentCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var StudentCreateComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      function StudentCreateComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, StudentCreateComponent);

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

      _createClass(StudentCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //initialize the html form
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            ModalityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            NeighborhoodId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "getModalities",
        value: function getModalities() {
          var _this14 = this;

          //load the modalities that will be used in the dropdown
          this.http.get('/api/modalities', this.httpOptions).subscribe(function (result) {
            _this14.modalities = result;
          }, function (error) {
            //shows an error message
            _this14.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this14.router.navigate(['/login']);
          });
        }
      }, {
        key: "getNeighborhoods",
        value: function getNeighborhoods() {
          var _this15 = this;

          //load the neighborhoods that will be used in the dropdown
          this.http.get('/api/neighborhoods', this.httpOptions).subscribe(function (result) {
            _this15.neighborhoods = result;
          }, function (error) {
            //shows an error message
            _this15.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this15.router.navigate(['/login']);
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this16 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields. ID is 0 as it was not created yet


          var data = {
            studentId: 0,
            Name: this.MyForm.value.Name,
            Surname: this.MyForm.value.Surname,
            modalityId: this.MyForm.value.ModalityId,
            neighborhoodId: this.MyForm.value.NeighborhoodId
          };
          var jData = JSON.stringify(data);
          this.http.post('api/students', jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this16.toastr.success('Data Saved'); //redirects to the table


            _this16.router.navigate(['/students']);
          }, function (error) {
            //shows an error message
            _this16.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this16.router.navigate(['/login']);
          });
        }
      }]);

      return StudentCreateComponent;
    }();

    StudentCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    StudentCreateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-create',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/create/create.component.html"))["default"]
    })
    /** create component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])], StudentCreateComponent);
    /***/
  },

  /***/
  "./src/app/student/edit/edit.component.ts":
  /*!************************************************!*\
    !*** ./src/app/student/edit/edit.component.ts ***!
    \************************************************/

  /*! exports provided: StudentEditComponent */

  /***/
  function srcAppStudentEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentEditComponent", function () {
      return StudentEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var StudentEditComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      function StudentEditComponent(http, toastr, router, route, baseUrl) {
        var _this17 = this;

        _classCallCheck(this, StudentEditComponent);

        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(function (params) {
          return _this17.mainId = params['ID'];
        });
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
          this.router.navigate(['/login']);
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token //adds token as the Authorization header

          })
        }; //loading data to populate the form fields

        http.get(baseUrl + 'api/students/' + this.mainId, this.httpOptions).subscribe(function (result) {
          _this17.MyForm.controls["ID"].setValue(result["modalityId"]);

          _this17.MyForm.controls["Name"].setValue(result["name"]);

          _this17.MyForm.controls["Surname"].setValue(result["surname"]);

          _this17.MyForm.controls["ModalityId"].setValue(result["modalityId"]);

          _this17.MyForm.controls["NeighborhoodId"].setValue(result["neighborhoodId"]);
        }, function (error) {
          //shows an error message
          _this17.toastr.error('Error Status: ' + error.status);

          if (error.status == 401) //if error is 401 the redirects to login
            _this17.router.navigate(['/login']);
        });
        this.getModalities();
        this.getNeighborhoods();
      }

      _createClass(StudentEditComponent, [{
        key: "getModalities",
        value: function getModalities() {
          var _this18 = this;

          //load the modalities that will be used in the dropdown
          this.http.get('/api/modalities', this.httpOptions).subscribe(function (result) {
            _this18.modalities = result;
          }, function (error) {
            //shows an error message
            _this18.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this18.router.navigate(['/login']);
          });
        }
      }, {
        key: "getNeighborhoods",
        value: function getNeighborhoods() {
          var _this19 = this;

          //load the neighborhoods that will be used in the dropdown
          this.http.get('/api/neighborhoods', this.httpOptions).subscribe(function (result) {
            _this19.neighborhoods = result;
          }, function (error) {
            //shows an error message
            _this19.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this19.router.navigate(['/login']);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            ModalityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            NeighborhoodId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this20 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields


          var data = {
            studentId: this.mainId,
            Name: this.MyForm.value.Name,
            Surname: this.MyForm.value.Surname,
            modalityId: this.MyForm.value.ModalityId,
            neighborhoodId: this.MyForm.value.NeighborhoodId
          };
          var jData = JSON.stringify(data);
          this.http.put('api/students/' + this.mainId, jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this20.toastr.success('Data Saved'); //redirects to the table


            _this20.router.navigate(['/students']);
          }, function (error) {
            //shows an error message
            _this20.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this20.router.navigate(['/login']);
          });
        }
      }]);

      return StudentEditComponent;
    }();

    StudentEditComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    StudentEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-edit',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/edit/edit.component.html"))["default"]
    })
    /** create component*/
    , __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])], StudentEditComponent);
    /***/
  },

  /***/
  "./src/app/student/table/table.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/student/table/table.component.ts ***!
    \**************************************************/

  /*! exports provided: StudentTableComponent */

  /***/
  function srcAppStudentTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentTableComponent", function () {
      return StudentTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var StudentTableComponent =
    /*#__PURE__*/

    /** table component*/
    function () {
      function StudentTableComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, StudentTableComponent);

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

      _createClass(StudentTableComponent, [{
        key: "getData",
        value: function getData() {
          var _this21 = this;

          //loading data to populate the table
          this.http.get('/api/students', this.httpOptions).subscribe(function (result) {
            _this21.data = result;
          }, function (error) {
            //shows an error message
            _this21.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this21.router.navigate(['/login']);
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          //redirects to the edit page
          window.open('/students/' + id);
        }
      }, {
        key: "remove",
        value: function remove(id, name) {
          var _this22 = this;

          //confirms before deleting
          if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name)) //making deletion call
            this.http["delete"]('/api/students/' + id, this.httpOptions).subscribe(function (data) {
              //showing a success message
              _this22.toastr.success('Completed'); //reloads the table


              _this22.getData();
            }, function (error) {
              //shows an error message
              _this22.toastr.error('Error Status: ' + error.status);

              if (error.status == 401) //if error is 401 the redirects to login
                _this22.router.navigate(['/login']);
            });else //alerting that deletion was cancelled
            this.toastr.warning('Action Cancelled');
        }
      }]);

      return StudentTableComponent;
    }();

    StudentTableComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    StudentTableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-table',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/table/table.component.html"))["default"]
    })
    /** table component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])], StudentTableComponent);
    /***/
  },

  /***/
  "./src/app/teacher/create/create.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/teacher/create/create.component.ts ***!
    \****************************************************/

  /*! exports provided: TeacherCreateComponent */

  /***/
  function srcAppTeacherCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherCreateComponent", function () {
      return TeacherCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TeacherCreateComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      /** create ctor */
      function TeacherCreateComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, TeacherCreateComponent);

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

      _createClass(TeacherCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //initialize the html form
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this23 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields. ID is 0 as it was not created yet


          var data = {
            id: 0,
            name: this.MyForm.value.Name,
            surname: this.MyForm.value.Surname,
            phoneNumber: this.MyForm.value.PhoneNumber
          };
          var jData = JSON.stringify(data);
          this.http.post('api/teachers', jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this23.toastr.success('Data Saved'); //redirects to the table


            _this23.router.navigate(['/teachers']);
          }, function (error) {
            //shows an error message
            _this23.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this23.router.navigate(['/login']);
          });
        }
      }]);

      return TeacherCreateComponent;
    }();

    TeacherCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    TeacherCreateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-create',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/create/create.component.html"))["default"]
    })
    /** create component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])], TeacherCreateComponent);
    /***/
  },

  /***/
  "./src/app/teacher/edit/edit.component.ts":
  /*!************************************************!*\
    !*** ./src/app/teacher/edit/edit.component.ts ***!
    \************************************************/

  /*! exports provided: TeacherEditComponent */

  /***/
  function srcAppTeacherEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherEditComponent", function () {
      return TeacherEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TeacherEditComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      function TeacherEditComponent(http, toastr, router, route, baseUrl) {
        var _this24 = this;

        _classCallCheck(this, TeacherEditComponent);

        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(function (params) {
          return _this24.mainId = params['ID'];
        });
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
          this.router.navigate(['/login']);
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token //adds token as the Authorization header

          })
        }; //loading data to populate the form fields

        http.get(baseUrl + 'api/teachers/' + this.mainId, this.httpOptions).subscribe(function (result) {
          _this24.MyForm.controls["ID"].setValue(result["teacherId"]);

          _this24.MyForm.controls["Name"].setValue(result["name"]);

          _this24.MyForm.controls["Surname"].setValue(result["surname"]);

          _this24.MyForm.controls["PhoneNumber"].setValue(result["phoneNumber"]);
        }, function (error) {
          //shows an error message
          _this24.toastr.error("Error Status: " + error.status);

          if (error.status == 401) //if error is 401 the redirects to login
            _this24.router.navigate(['/login']);
        });
      }

      _createClass(TeacherEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //initialize the html form
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this25 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields


          var data = {
            teacherId: this.mainId,
            name: this.MyForm.value.Name,
            surname: this.MyForm.value.Surname,
            phoneNumber: this.MyForm.value.PhoneNumber
          };
          var jData = JSON.stringify(data);
          this.http.put('api/teachers/' + this.mainId, jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this25.toastr.success('Data Saved'); //redirects to the table


            _this25.router.navigate(['/teachers']);
          }, function (error) {
            //shows an error message
            _this25.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this25.router.navigate(['/login']);
          });
        }
      }]);

      return TeacherEditComponent;
    }();

    TeacherEditComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    TeacherEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-edit',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/edit/edit.component.html"))["default"]
    })
    /** create component*/
    , __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])], TeacherEditComponent);
    /***/
  },

  /***/
  "./src/app/teacher/table/table.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/teacher/table/table.component.ts ***!
    \**************************************************/

  /*! exports provided: TeacherTableComponent */

  /***/
  function srcAppTeacherTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeacherTableComponent", function () {
      return TeacherTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TeacherTableComponent =
    /*#__PURE__*/

    /** table component*/
    function () {
      function TeacherTableComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, TeacherTableComponent);

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

      _createClass(TeacherTableComponent, [{
        key: "getData",
        value: function getData() {
          var _this26 = this;

          //loading data to populate the table
          this.http.get('/api/teachers', this.httpOptions).subscribe(function (result) {
            _this26.data = result;
          }, function (error) {
            //shows an error message
            _this26.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this26.router.navigate(['/login']);
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          //redirects to the edit page
          window.open('/teachers/' + id);
        }
      }, {
        key: "remove",
        value: function remove(id, name) {
          var _this27 = this;

          //confirms before deleting
          if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name)) //making deletion call
            this.http["delete"]('/api/teachers/' + id, this.httpOptions).subscribe(function (data) {
              //showing a success message
              _this27.toastr.success('Completed'); //reloads the table


              _this27.getData();
            }, function (error) {
              //shows an error message
              _this27.toastr.error('Error Status: ' + error.status);

              if (error.status == 401) //if error is 401 the redirects to login
                _this27.router.navigate(['/login']);
            });else //alerting that deletion was cancelled
            this.toastr.warning('Action Cancelled');
        }
      }]);

      return TeacherTableComponent;
    }();

    TeacherTableComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    TeacherTableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-table',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/table/table.component.html"))["default"]
    })
    /** table component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])], TeacherTableComponent);
    /***/
  },

  /***/
  "./src/app/user/create/create.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/create/create.component.ts ***!
    \*************************************************/

  /*! exports provided: UserCreateComponent */

  /***/
  function srcAppUserCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function () {
      return UserCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserCreateComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      /** create ctor */
      function UserCreateComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, UserCreateComponent);

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

      _createClass(UserCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //initialize the html form
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this28 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields. ID is 0 as it was not created yet


          var data = {
            id: 0,
            name: this.MyForm.value.Name,
            email: this.MyForm.value.Email,
            password: this.MyForm.value.Password
          };
          var jData = JSON.stringify(data);
          this.http.post('api/users', jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this28.toastr.success('Data Saved'); //redirects to the table


            _this28.router.navigate(['/users']);
          }, function (error) {
            //shows an error message
            _this28.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this28.router.navigate(['/login']);
          });
        }
      }]);

      return UserCreateComponent;
    }();

    UserCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    UserCreateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-create',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/create/create.component.html"))["default"]
    })
    /** create component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])], UserCreateComponent);
    /***/
  },

  /***/
  "./src/app/user/edit/edit.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/edit/edit.component.ts ***!
    \*********************************************/

  /*! exports provided: UserEditComponent */

  /***/
  function srcAppUserEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditComponent", function () {
      return UserEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserEditComponent =
    /*#__PURE__*/

    /** create component*/
    function () {
      function UserEditComponent(http, toastr, router, route, baseUrl) {
        var _this29 = this;

        _classCallCheck(this, UserEditComponent);

        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.mainId = 0;
        this.submitted = false;
        this.EventValue = "Save";
        route.params.subscribe(function (params) {
          return _this29.mainId = params['ID'];
        });
        this.token = localStorage.getItem("jwt");
        if (!this.token) //if token is inexistent then redirects to login
          this.router.navigate(['/login']);
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token //adds token as the Authorization header

          })
        }; //loading data to populate the form fields

        http.get(baseUrl + 'api/users/' + this.mainId, this.httpOptions).subscribe(function (result) {
          _this29.MyForm.controls["ID"].setValue(result["id"]);

          _this29.MyForm.controls["Name"].setValue(result["name"]);

          _this29.MyForm.controls["Email"].setValue(result["email"]);

          _this29.MyForm.controls["Password"].setValue(result["password"]);
        }, function (error) {
          //shows an error message
          _this29.toastr.error("Error Status: " + error.status);

          if (error.status == 401) //if error is 401 the redirects to login
            _this29.router.navigate(['/login']);
        });
      }

      _createClass(UserEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //initialize the html form
          this.MyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "Save",
        value: function Save() {
          var _this30 = this;

          this.submitted = true;

          if (this.MyForm.invalid) {
            return; //if any field is missing/invalid values then stops action
          } //creating the JSON object with the form fields


          var data = {
            id: this.mainId,
            name: this.MyForm.value.Name,
            email: this.MyForm.value.Email,
            password: this.MyForm.value.Password
          };
          var jData = JSON.stringify(data);
          this.http.put('api/users/' + this.mainId, jData, this.httpOptions).subscribe(function (data) {
            //showing a success message
            _this30.toastr.success('Data Saved'); //redirects to the table


            _this30.router.navigate(['/users']);
          }, function (error) {
            //shows an error message
            _this30.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this30.router.navigate(['/login']);
          });
        }
      }]);

      return UserEditComponent;
    }();

    UserEditComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    UserEditComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-edit',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/edit/edit.component.html"))["default"]
    })
    /** create component*/
    , __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], String])], UserEditComponent);
    /***/
  },

  /***/
  "./src/app/user/table/table.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/table/table.component.ts ***!
    \***********************************************/

  /*! exports provided: UserTableComponent */

  /***/
  function srcAppUserTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTableComponent", function () {
      return UserTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserTableComponent =
    /*#__PURE__*/

    /** table component*/
    function () {
      function UserTableComponent(http, toastr, router, baseUrl) {
        _classCallCheck(this, UserTableComponent);

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

      _createClass(UserTableComponent, [{
        key: "getData",
        value: function getData() {
          var _this31 = this;

          //loading data to populate the table
          this.http.get('/api/users', this.httpOptions).subscribe(function (result) {
            _this31.data = result;
          }, function (error) {
            //shows an error message
            _this31.toastr.error('Error Status: ' + error.status);

            if (error.status == 401) //if error is 401 the redirects to login
              _this31.router.navigate(['/login']);
          });
        }
      }, {
        key: "edit",
        value: function edit(id) {
          //redirects to the edit page
          window.open('/teachers/' + id);
        }
      }, {
        key: "remove",
        value: function remove(id, name) {
          var _this32 = this;

          //confirms before deleting
          if (confirm('Are you sure that you want to remove this registry? \r\n Name: ' + name)) //making deletion call
            this.http["delete"]('/api/users/' + id, this.httpOptions).subscribe(function (data) {
              //showing a success message
              _this32.toastr.success('Completed'); //reloads the table


              _this32.getData();
            }, function (error) {
              if (error.status == 409) //if error is 409 let's user know that they can't delete themselves
                _this32.toastr.error('You cannot delete your own account! Error: ' + error.status);else //shows a generic error message
                _this32.toastr.error('Error Status: ' + error.status);
              if (error.status == 401) //if error is 401 the redirects to login
                _this32.router.navigate(['/login']);
            });else //alerting that deletion was cancelled
            this.toastr.warning('Action Cancelled');
        }
      }]);

      return UserTableComponent;
    }();

    UserTableComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: ['BASE_URL']
        }]
      }];
    };

    UserTableComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-table',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/table/table.component.html"))["default"]
    })
    /** table component*/
    , __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], String])], UserTableComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\adolf\source\repos\SportsDepartment\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map