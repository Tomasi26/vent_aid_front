function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-material.module.ts":
  /*!****************************************!*\
    !*** ./src/app/app-material.module.ts ***!
    \****************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");

    var material = [// DragDropModule,
    // CdkTableModule,
    // CdkTreeModule,
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], // MatBadgeModule,
    // MatBottomSheetModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], // MatButtonToggleModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], // MatStepperModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], // MatNativeDateModule,
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], // MatTreeModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[material], // DragDropModule,
      // CdkTableModule,
      // CdkTreeModule,
      _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], // MatBadgeModule,
      // MatBottomSheetModule,
      _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], // MatButtonToggleModule,
      _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], // MatStepperModule,
      _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], // MatDividerModule,
      // MatExpansionModule,
      // MatGridListModule,
      _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], // MatNativeDateModule,
      _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], // MatProgressBarModule,
      // MatProgressSpinnerModule,
      // MatRadioModule,
      // MatRippleModule,
      _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], // MatSidenavModule,
      // MatSliderModule,
      // MatSlideToggleModule,
      // MatSnackBarModule,
      _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], // MatTreeModule,
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [// DragDropModule,
        // CdkTableModule,
        // CdkTreeModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], // MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], // MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], // MatDividerModule,
        // MatExpansionModule,
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], // MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], // MatProgressBarModule,
        // MatProgressSpinnerModule,
        // MatRadioModule,
        // MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], // MatTreeModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]],
        exports: [// DragDropModule,
        // CdkTableModule,
        // CdkTreeModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], // MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], // MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], // MatDividerModule,
        // MatExpansionModule,
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], // MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], // MatProgressBarModule,
        // MatProgressSpinnerModule,
        // MatRadioModule,
        // MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], // MatTreeModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [material],
          exports: [material]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
        path: '',
        redirectTo: '/vent',
        pathMatch: 'full'
      }, {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      }], {
        onSameUrlNavigation: 'reload',
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
            path: '',
            redirectTo: '/vent',
            pathMatch: 'full'
          }, {
            path: 'admin',
            loadChildren: './admin/admin.module#AdminModule'
          }], {
            onSameUrlNavigation: 'reload',
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
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
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _store_app_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store/app.reducer */
    "./src/app/store/app.reducer.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-material.module */
    "./src/app/app-material.module.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _vent_output_vent_output_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./vent-output/vent-output.module */
    "./src/app/vent-output/vent-output.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _vent_output_vent_output_module__WEBPACK_IMPORTED_MODULE_16__["VentOutputModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_10__["appReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
      }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _vent_output_vent_output_module__WEBPACK_IMPORTED_MODULE_16__["VentOutputModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _vent_output_vent_output_module__WEBPACK_IMPORTED_MODULE_16__["VentOutputModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_10__["appReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
          }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot()],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/bluetooth-services/ble-scan.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/bluetooth-services/ble-scan.service.ts ***!
    \********************************************************/

  /*! exports provided: BleScanService */

  /***/
  function srcAppBluetoothServicesBleScanServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BleScanService", function () {
      return BleScanService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BleScanService = /*#__PURE__*/function () {
      function BleScanService() {
        _classCallCheck(this, BleScanService);

        this.foundDevices = [];
      }

      _createClass(BleScanService, [{
        key: "init",
        value: function init() {
          var _this = this;

          document.addEventListener('deviceready', function () {
            new Promise(function (resolve) {
              bluetoothle.initialize(resolve, {
                request: true,
                statusReceiver: false
              });
            }).then(_this.initializeSuccess, _this.handleError);
          });
        }
      }, {
        key: "initializeSuccess",
        value: function initializeSuccess(result) {
          if (result.status === 'enabled') {
            console.log('Bluetooth is enabled.');
            console.log(result);
          } else {
            // document.getElementById('start-scan').disabled = true;
            console.log('Bluetooth is not enabled:', result.status);
            console.log(result, 'status');
          }
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var msg;

          if (error.error && error.message) {
            var errorItems = [];

            if (error.service) {// errorItems.push('service: ' + (uuids[error.service] || error.service));
            }

            if (error.characteristic) {// errorItems.push('characteristic: ' + (uuids[error.characteristic] || error.characteristic));
            }

            msg = 'Error on ' + error.error + ': ' + error.message + (errorItems.length && ' (' + errorItems.join(', ') + ')');
          } else {
            msg = error;
          }

          console.log(msg, 'error');

          if (error.error === 'read' && error.service && error.characteristic) {// reportValue(error.service, error.characteristic, 'Error: ' + error.message);
          }
        }
      }, {
        key: "startScan",
        value: function startScan() {
          console.log('Starting scan for devices...', 'status');
          this.foundDevices = [];
          document.getElementById('devices').innerHTML = '';
          document.getElementById('services').innerHTML = '';
          document.getElementById('output').innerHTML = ''; // if (window.cordova.platformId === 'windows') {
          //   bluetoothle.retrieveConnected(this.retrieveConnectedSuccess, this.handleError, {});
          // }
          // else {
          //   bluetoothle.startScan(this.startScanSuccess, this.handleError, { services: [] });
          // }
        }
      }, {
        key: "retrieveConnectedSuccess",
        value: function retrieveConnectedSuccess(result) {
          console.log('retrieveConnectedSuccess()');
          console.log(result);
          result.forEach(function (device) {
            this.addDevice(device.name, device.address);
          });
        }
      }, {
        key: "addDevice",
        value: function addDevice(name, address) {
          var button = document.createElement('button');
          button.style.width = '100%';
          button.style.padding = '10px';
          button.style.fontSize = '16px';
          button.textContent = name + ': ' + address;
          button.addEventListener('click', function () {
            document.getElementById('services').innerHTML = ''; // connect(address);
          });
          document.getElementById('devices').appendChild(button);
        }
      }]);

      return BleScanService;
    }();

    BleScanService.ɵfac = function BleScanService_Factory(t) {
      return new (t || BleScanService)();
    };

    BleScanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BleScanService,
      factory: BleScanService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BleScanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 5,
      vars: 0,
      consts: [[1, "flex-container"], ["id", "logo-group", "routerLink", "/admin/vent"], [1, "example-fill-remaining-space"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "AmbuVent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/app.reducer.ts":
  /*!**************************************!*\
    !*** ./src/app/store/app.reducer.ts ***!
    \**************************************/

  /*! exports provided: appReducer */

  /***/
  function srcAppStoreAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReducer", function () {
      return appReducer;
    });

    var appReducer = {};
    /***/
  },

  /***/
  "./src/app/vent-output/constants/vent-output.constants.ts":
  /*!****************************************************************!*\
    !*** ./src/app/vent-output/constants/vent-output.constants.ts ***!
    \****************************************************************/

  /*! exports provided: VENT_OUTPUT_STORE_KEY */

  /***/
  function srcAppVentOutputConstantsVentOutputConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VENT_OUTPUT_STORE_KEY", function () {
      return VENT_OUTPUT_STORE_KEY;
    });

    var VENT_OUTPUT_STORE_KEY = '/vent-output';
    /***/
  },

  /***/
  "./src/app/vent-output/service/vent-output.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/vent-output/service/vent-output.service.ts ***!
    \************************************************************/

  /*! exports provided: VentOutputService */

  /***/
  function srcAppVentOutputServiceVentOutputServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputService", function () {
      return VentOutputService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var VentOutputService = /*#__PURE__*/function () {
      function VentOutputService() {
        _classCallCheck(this, VentOutputService);
      }

      _createClass(VentOutputService, [{
        key: "getVentOutput",
        value: function getVentOutput(params) {
          var dummyVentOutput = {
            bpm: 'BPM',
            compressionPercentage: 'COMPRESSION_PERCENTAGE',
            pressureAbsolute: 'PRESSURE_ABSOLUTE',
            inspiriumPressure: 'INSPIRIUM_PRESSURE'
          };
          var dummyVentOutputResponse = {
            output: dummyVentOutput
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(dummyVentOutputResponse);
        }
      }]);

      return VentOutputService;
    }();

    VentOutputService.ɵfac = function VentOutputService_Factory(t) {
      return new (t || VentOutputService)();
    };

    VentOutputService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: VentOutputService,
      factory: VentOutputService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VentOutputService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vent-output/store/vent-output.actions.ts":
  /*!**********************************************************!*\
    !*** ./src/app/vent-output/store/vent-output.actions.ts ***!
    \**********************************************************/

  /*! exports provided: FETCH_VENT_OUTPUT, SET_VENT_OUTPUT, VENT_OUTPUT_FAILURE, VENT_OUTPUT_SUCCESS, VENT_OUTPUT_CLEAN, VENT_OUTPUT_DUMMY, FetchVentOutput, SetVentOutput, VentOutputFailure, VentOutputSuccess, VentOutputClean, VentOutputDummy */

  /***/
  function srcAppVentOutputStoreVentOutputActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FETCH_VENT_OUTPUT", function () {
      return FETCH_VENT_OUTPUT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SET_VENT_OUTPUT", function () {
      return SET_VENT_OUTPUT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VENT_OUTPUT_FAILURE", function () {
      return VENT_OUTPUT_FAILURE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VENT_OUTPUT_SUCCESS", function () {
      return VENT_OUTPUT_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VENT_OUTPUT_CLEAN", function () {
      return VENT_OUTPUT_CLEAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VENT_OUTPUT_DUMMY", function () {
      return VENT_OUTPUT_DUMMY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchVentOutput", function () {
      return FetchVentOutput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetVentOutput", function () {
      return SetVentOutput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputFailure", function () {
      return VentOutputFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputSuccess", function () {
      return VentOutputSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputClean", function () {
      return VentOutputClean;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputDummy", function () {
      return VentOutputDummy;
    }); // vent output


    var FETCH_VENT_OUTPUT = '[VentOutput] Fetch VentOutput';
    var SET_VENT_OUTPUT = '[VentOutput] Set VentOutput';
    var VENT_OUTPUT_FAILURE = '[VentOutput] VentOutput Failure';
    var VENT_OUTPUT_SUCCESS = '[VentOutput] VentOutput Success';
    var VENT_OUTPUT_CLEAN = '[VentOutput] VentOutput Clean';
    var VENT_OUTPUT_DUMMY = '[VentOutput] VentOutput Dummy'; // vent output actions

    var FetchVentOutput = function FetchVentOutput(payload) {
      _classCallCheck(this, FetchVentOutput);

      this.payload = payload;
      this.type = FETCH_VENT_OUTPUT;
    };

    var SetVentOutput = function SetVentOutput(payload) {
      _classCallCheck(this, SetVentOutput);

      this.payload = payload;
      this.type = SET_VENT_OUTPUT;
    };

    var VentOutputFailure = function VentOutputFailure(payload) {
      _classCallCheck(this, VentOutputFailure);

      this.payload = payload;
      this.type = VENT_OUTPUT_FAILURE;
    };

    var VentOutputSuccess = function VentOutputSuccess(payload) {
      _classCallCheck(this, VentOutputSuccess);

      this.payload = payload;
      this.type = VENT_OUTPUT_SUCCESS;
    };

    var VentOutputClean = function VentOutputClean() {
      _classCallCheck(this, VentOutputClean);

      this.type = VENT_OUTPUT_CLEAN;
    }; // dummy


    var VentOutputDummy = function VentOutputDummy() {
      _classCallCheck(this, VentOutputDummy);

      this.type = VENT_OUTPUT_DUMMY;
    };
    /***/

  },

  /***/
  "./src/app/vent-output/store/vent-output.effects.ts":
  /*!**********************************************************!*\
    !*** ./src/app/vent-output/store/vent-output.effects.ts ***!
    \**********************************************************/

  /*! exports provided: VentOutputEffects */

  /***/
  function srcAppVentOutputStoreVentOutputEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputEffects", function () {
      return VentOutputEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _vent_output_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./vent-output.actions */
    "./src/app/vent-output/store/vent-output.actions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _service_vent_output_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../service/vent-output.service */
    "./src/app/vent-output/service/vent-output.service.ts");

    var VentOutputEffects = /*#__PURE__*/function () {
      function VentOutputEffects(actions$, store, ventOutputService) {
        var _this2 = this;

        _classCallCheck(this, VentOutputEffects);

        this.actions$ = actions$;
        this.store = store;
        this.ventOutputService = ventOutputService; // read

        this.fetchVentOutput = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_vent_output_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_VENT_OUTPUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (fetchVentOutputData) {
          return _this2.ventOutputService.getVentOutput(fetchVentOutputData.payload.params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (ventOutputResponse) {
            if (ventOutputResponse.output) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(ventOutputResponse.output);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Error Getting Vent Output');
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ventOutput) {
            return new _vent_output_actions__WEBPACK_IMPORTED_MODULE_4__["SetVentOutput"]({
              output: ventOutput
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (errorRes) {
            return _this2.handleVentOutputError(errorRes);
          }));
        }));
      }

      _createClass(VentOutputEffects, [{
        key: "handleVentOutputError",
        value: function handleVentOutputError(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _vent_output_actions__WEBPACK_IMPORTED_MODULE_4__["VentOutputFailure"]({
            errorMessage: error
          }));
        }
      }]);

      return VentOutputEffects;
    }();

    VentOutputEffects.ɵfac = function VentOutputEffects_Factory(t) {
      return new (t || VentOutputEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_vent_output_service__WEBPACK_IMPORTED_MODULE_7__["VentOutputService"]));
    };

    VentOutputEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VentOutputEffects,
      factory: VentOutputEffects.ɵfac
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], VentOutputEffects.prototype, "fetchVentOutput", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VentOutputEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }, {
          type: _service_vent_output_service__WEBPACK_IMPORTED_MODULE_7__["VentOutputService"]
        }];
      }, {
        fetchVentOutput: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/vent-output/store/vent-output.reducer.ts":
  /*!**********************************************************!*\
    !*** ./src/app/vent-output/store/vent-output.reducer.ts ***!
    \**********************************************************/

  /*! exports provided: ventOutputReducer */

  /***/
  function srcAppVentOutputStoreVentOutputReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ventOutputReducer", function () {
      return ventOutputReducer;
    });
    /* harmony import */


    var _vent_output_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./vent-output.actions */
    "./src/app/vent-output/store/vent-output.actions.ts");
    /* harmony import */


    var _vent_output_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./vent-output.state */
    "./src/app/vent-output/store/vent-output.state.ts");

    function ventOutputReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _vent_output_state__WEBPACK_IMPORTED_MODULE_1__["initialState"];
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _vent_output_actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_VENT_OUTPUT"]:
          return Object.assign(Object.assign({}, state), {
            ventOutput: null,
            ventOutputLoading: true,
            ventOutputError: null,
            ventOutputSuccess: null
          });

        case _vent_output_actions__WEBPACK_IMPORTED_MODULE_0__["SET_VENT_OUTPUT"]:
          return Object.assign(Object.assign({}, state), {
            ventOutput: action.payload.output,
            ventOutputLoading: false,
            ventOutputError: null,
            ventOutputSuccess: null
          });

        case _vent_output_actions__WEBPACK_IMPORTED_MODULE_0__["VENT_OUTPUT_FAILURE"]:
          return Object.assign(Object.assign({}, state), {
            ventOutputLoading: false,
            ventOutputError: action.payload.errorMessage,
            ventOutputSuccess: null
          });

        case _vent_output_actions__WEBPACK_IMPORTED_MODULE_0__["VENT_OUTPUT_SUCCESS"]:
          return Object.assign(Object.assign({}, state), {
            ventOutputLoading: false,
            ventOutputError: null,
            ventOutputSuccess: action.payload.successMessage
          });

        case _vent_output_actions__WEBPACK_IMPORTED_MODULE_0__["VENT_OUTPUT_CLEAN"]:
          return Object.assign(Object.assign({}, state), {
            ventOutput: null,
            ventOutputLoading: false,
            ventOutputError: null,
            ventOutputSuccess: null
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/vent-output/store/vent-output.selectors.ts":
  /*!************************************************************!*\
    !*** ./src/app/vent-output/store/vent-output.selectors.ts ***!
    \************************************************************/

  /*! exports provided: selectVentOutputStateFeatureState, selectVentOutput, selectVentOutputLoading, selectVentOutputSuccess, selectVentOutputError */

  /***/
  function srcAppVentOutputStoreVentOutputSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectVentOutputStateFeatureState", function () {
      return selectVentOutputStateFeatureState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectVentOutput", function () {
      return selectVentOutput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectVentOutputLoading", function () {
      return selectVentOutputLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectVentOutputSuccess", function () {
      return selectVentOutputSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectVentOutputError", function () {
      return selectVentOutputError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _constants_vent_output_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants/vent-output.constants */
    "./src/app/vent-output/constants/vent-output.constants.ts"); // vent output selectors helpers


    var getVentOutput = function getVentOutput(state) {
      return state.ventOutput;
    };

    var getVentOutputLoading = function getVentOutputLoading(state) {
      return state.ventOutputLoading;
    };

    var getVentOutputSuccess = function getVentOutputSuccess(state) {
      return state.ventOutputSuccess;
    };

    var getVentOutputError = function getVentOutputError(state) {
      return state.ventOutputError;
    }; // vent output feature selectors


    var selectVentOutputStateFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_constants_vent_output_constants__WEBPACK_IMPORTED_MODULE_1__["VENT_OUTPUT_STORE_KEY"]); // vent output selectors

    var selectVentOutput = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectVentOutputStateFeatureState, getVentOutput);
    var selectVentOutputLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectVentOutputStateFeatureState, getVentOutputLoading);
    var selectVentOutputSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectVentOutputStateFeatureState, getVentOutputSuccess);
    var selectVentOutputError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectVentOutputStateFeatureState, getVentOutputError);
    /***/
  },

  /***/
  "./src/app/vent-output/store/vent-output.state.ts":
  /*!********************************************************!*\
    !*** ./src/app/vent-output/store/vent-output.state.ts ***!
    \********************************************************/

  /*! exports provided: initialState */

  /***/
  function srcAppVentOutputStoreVentOutputStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });

    var initialState = {
      ventOutput: null,
      ventOutputLoading: false,
      ventOutputError: null,
      ventOutputSuccess: null
    };
    /***/
  },

  /***/
  "./src/app/vent-output/vent-output-panel/vent-output-panel.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/vent-output/vent-output-panel/vent-output-panel.component.ts ***!
    \******************************************************************************/

  /*! exports provided: VentOutputPanelComponent */

  /***/
  function srcAppVentOutputVentOutputPanelVentOutputPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputPanelComponent", function () {
      return VentOutputPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_vent_output_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/vent-output.actions */
    "./src/app/vent-output/store/vent-output.actions.ts");
    /* harmony import */


    var _store_vent_output_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/vent-output.selectors */
    "./src/app/vent-output/store/vent-output.selectors.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _bluetooth_services_ble_scan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../bluetooth-services/ble-scan.service */
    "./src/app/bluetooth-services/ble-scan.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js"); // core
    // store


    function VentOutputPanelComponent_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var device_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](device_r1.name);
      }
    } // tslint:disable-next-line:component-class-suffix


    var Device = function Device(name) {
      _classCallCheck(this, Device);

      this.name = name;
    };

    var VentOutputPanelComponent = /*#__PURE__*/function () {
      function VentOutputPanelComponent(router, route, store, ventOutputStore, bleService) {
        _classCallCheck(this, VentOutputPanelComponent);

        this.router = router;
        this.route = route;
        this.store = store;
        this.ventOutputStore = ventOutputStore;
        this.bleService = bleService;
        this.ventOutputLoading = false;
        this.ventOutputError = null;
        this.ventOutputSuccess = null;
        this.devices = [];
        this.devices.push(new Device('Tomer\'s Phone'));
      }

      _createClass(VentOutputPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //init bluetooth module
          this.bleService.init(); // document.dispatchEvent(new Event('deviceready'));
          // subscribe to vent output state

          this.subscribeVentOutputStateObservables(); // setting example values for the vent outputs

          this.store.dispatch(new _store_vent_output_actions__WEBPACK_IMPORTED_MODULE_2__["SetVentOutput"]({
            output: {
              bpm: 'BPM',
              pressureAbsolute: 'PRESSURE_ABSOLUTE',
              compressionPercentage: 'COMPRESSION_PERCENTAGE',
              inspiriumPressure: 'INSPIRIUM_PRESSURE'
            }
          }));
        } // vent output state

      }, {
        key: "subscribeVentOutputStateObservables",
        value: function subscribeVentOutputStateObservables() {
          var _this3 = this;

          // vent output
          this.ventOutputSub = this.ventOutputStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_vent_output_selectors__WEBPACK_IMPORTED_MODULE_3__["selectVentOutput"])).subscribe(function (ventOutput) {
            _this3.ventOutput = ventOutput;
          }); // loading

          this.ventOutputLoadingSub = this.ventOutputStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_vent_output_selectors__WEBPACK_IMPORTED_MODULE_3__["selectVentOutputLoading"])).subscribe(function (ventOutputLoading) {
            _this3.ventOutputLoading = ventOutputLoading;
          }); // success message

          this.ventOutputSuccessSub = this.ventOutputStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_vent_output_selectors__WEBPACK_IMPORTED_MODULE_3__["selectVentOutputSuccess"])).subscribe(function (ventOutputSuccess) {
            _this3.ventOutputSuccess = ventOutputSuccess;
          }); // error message

          this.ventOutputErrorSub = this.ventOutputStore.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_vent_output_selectors__WEBPACK_IMPORTED_MODULE_3__["selectVentOutputError"])).subscribe(function (ventOutputError) {
            _this3.ventOutputError = ventOutputError;
          });
        }
      }, {
        key: "unsubscribeVentOutputStateObservables",
        value: function unsubscribeVentOutputStateObservables() {
          if (this.ventOutputSub) {
            this.ventOutputSub.unsubscribe();
          }

          if (this.ventOutputLoadingSub) {
            this.ventOutputLoadingSub.unsubscribe();
          }

          if (this.ventOutputSuccessSub) {
            this.ventOutputSuccessSub.unsubscribe();
          }

          if (this.ventOutputErrorSub) {
            this.ventOutputErrorSub.unsubscribe();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.dispatchEvent(new Event('deviceready'));
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe to vent output state
          this.unsubscribeVentOutputStateObservables();
        }
      }, {
        key: "startScan",
        value: function startScan() {}
      }]);

      return VentOutputPanelComponent;
    }();

    VentOutputPanelComponent.ɵfac = function VentOutputPanelComponent_Factory(t) {
      return new (t || VentOutputPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bluetooth_services_ble_scan_service__WEBPACK_IMPORTED_MODULE_5__["BleScanService"]));
    };

    VentOutputPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VentOutputPanelComponent,
      selectors: [["app-vent-output-panel"]],
      decls: 12,
      vars: 1,
      consts: [[1, "card"], [4, "ngFor", "ngForOf"], ["mat-button", ""], ["mat-button", "", 3, "click"]],
      template: function VentOutputPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VentOutputPanelComponent_p_4_Template, 3, 1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Scan QR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VentOutputPanelComponent_Template_button_click_8_listener() {
            return ctx.startScan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Scan BT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devices);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"]],
      styles: [".card {\n  max-width: 400px;\n  border: solid;\n  border-radius: 4px;\n  height: 400px;\n  margin: 5px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.mat-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-card-header {\n  flex-shrink: 0;\n}\n\n.mat-card-actions {\n  flex-grow: 1;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2lwZXJldHovV2Vic3Rvcm1Qcm9qZWN0cy92ZW50X2FpZF9mcm9udC9zcmMvYXBwL3ZlbnQtb3V0cHV0L3ZlbnQtb3V0cHV0LXBhbmVsL3ZlbnQtb3V0cHV0LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92ZW50LW91dHB1dC92ZW50LW91dHB1dC1wYW5lbC92ZW50LW91dHB1dC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZlbnQtb3V0cHV0L3ZlbnQtb3V0cHV0LXBhbmVsL3ZlbnQtb3V0cHV0LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hdC1jYXJke1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIge1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnN7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4iLCIuY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJvcmRlcjogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIge1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VentOutputPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vent-output-panel',
          styleUrls: ['vent-output-panel.component.scss'],
          templateUrl: 'vent-output-panel.component.html',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _bluetooth_services_ble_scan_service__WEBPACK_IMPORTED_MODULE_5__["BleScanService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vent-output/vent-output.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/vent-output/vent-output.component.ts ***!
    \******************************************************/

  /*! exports provided: VentOutputComponent */

  /***/
  function srcAppVentOutputVentOutputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputComponent", function () {
      return VentOutputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var VentOutputComponent = /*#__PURE__*/function () {
      function VentOutputComponent() {
        _classCallCheck(this, VentOutputComponent);
      }

      _createClass(VentOutputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VentOutputComponent;
    }();

    VentOutputComponent.ɵfac = function VentOutputComponent_Factory(t) {
      return new (t || VentOutputComponent)();
    };

    VentOutputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VentOutputComponent,
      selectors: [["app-vent-output"]],
      decls: 3,
      vars: 0,
      consts: [[1, "row"], [1, "col-md-12"]],
      template: function VentOutputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbnQtb3V0cHV0L3ZlbnQtb3V0cHV0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VentOutputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vent-output',
          templateUrl: './vent-output.component.html',
          styleUrls: ['./vent-output.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vent-output/vent-output.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/vent-output/vent-output.module.ts ***!
    \***************************************************/

  /*! exports provided: VentOutputModule */

  /***/
  function srcAppVentOutputVentOutputModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputModule", function () {
      return VentOutputModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _vent_output_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vent-output.routing.module */
    "./src/app/vent-output/vent-output.routing.module.ts");
    /* harmony import */


    var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app-material.module */
    "./src/app/app-material.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _vent_output_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vent-output.component */
    "./src/app/vent-output/vent-output.component.ts");
    /* harmony import */


    var _vent_output_panel_vent_output_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vent-output-panel/vent-output-panel.component */
    "./src/app/vent-output/vent-output-panel/vent-output-panel.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _store_vent_output_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store/vent-output.effects */
    "./src/app/vent-output/store/vent-output.effects.ts");
    /* harmony import */


    var _store_vent_output_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/vent-output.reducer */
    "./src/app/vent-output/store/vent-output.reducer.ts");
    /* harmony import */


    var _constants_vent_output_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./constants/vent-output.constants */
    "./src/app/vent-output/constants/vent-output.constants.ts");

    var VentOutputModule = function VentOutputModule() {
      _classCallCheck(this, VentOutputModule);
    };

    VentOutputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VentOutputModule
    });
    VentOutputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VentOutputModule_Factory(t) {
        return new (t || VentOutputModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _vent_output_routing_module__WEBPACK_IMPORTED_MODULE_2__["VentOutputRoutingModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature(_constants_vent_output_constants__WEBPACK_IMPORTED_MODULE_12__["VENT_OUTPUT_STORE_KEY"], _store_vent_output_reducer__WEBPACK_IMPORTED_MODULE_11__["ventOutputReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_vent_output_effects__WEBPACK_IMPORTED_MODULE_10__["VentOutputEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VentOutputModule, {
        declarations: [_vent_output_component__WEBPACK_IMPORTED_MODULE_5__["VentOutputComponent"], _vent_output_panel_vent_output_panel_component__WEBPACK_IMPORTED_MODULE_6__["VentOutputPanelComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _vent_output_routing_module__WEBPACK_IMPORTED_MODULE_2__["VentOutputRoutingModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsFeatureModule"]],
        exports: [_vent_output_panel_vent_output_panel_component__WEBPACK_IMPORTED_MODULE_6__["VentOutputPanelComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VentOutputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _vent_output_routing_module__WEBPACK_IMPORTED_MODULE_2__["VentOutputRoutingModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature(_constants_vent_output_constants__WEBPACK_IMPORTED_MODULE_12__["VENT_OUTPUT_STORE_KEY"], _store_vent_output_reducer__WEBPACK_IMPORTED_MODULE_11__["ventOutputReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_store_vent_output_effects__WEBPACK_IMPORTED_MODULE_10__["VentOutputEffects"]])],
          exports: [_vent_output_panel_vent_output_panel_component__WEBPACK_IMPORTED_MODULE_6__["VentOutputPanelComponent"]],
          declarations: [_vent_output_component__WEBPACK_IMPORTED_MODULE_5__["VentOutputComponent"], _vent_output_panel_vent_output_panel_component__WEBPACK_IMPORTED_MODULE_6__["VentOutputPanelComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/vent-output/vent-output.routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/vent-output/vent-output.routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: VentOutputRoutingModule */

  /***/
  function srcAppVentOutputVentOutputRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VentOutputRoutingModule", function () {
      return VentOutputRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _vent_output_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vent-output.component */
    "./src/app/vent-output/vent-output.component.ts");
    /* harmony import */


    var _vent_output_panel_vent_output_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vent-output-panel/vent-output-panel.component */
    "./src/app/vent-output/vent-output-panel/vent-output-panel.component.ts");

    var routes = [{
      path: '',
      component: _vent_output_component__WEBPACK_IMPORTED_MODULE_2__["VentOutputComponent"],
      children: [{
        path: '',
        component: _vent_output_panel_vent_output_panel_component__WEBPACK_IMPORTED_MODULE_3__["VentOutputPanelComponent"]
      }]
    }];

    var VentOutputRoutingModule = function VentOutputRoutingModule() {
      _classCallCheck(this, VentOutputRoutingModule);
    };

    VentOutputRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VentOutputRoutingModule
    });
    VentOutputRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VentOutputRoutingModule_Factory(t) {
        return new (t || VentOutputRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VentOutputRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VentOutputRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
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
    /*! /Users/roiperetz/WebstormProjects/vent_aid_front/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map