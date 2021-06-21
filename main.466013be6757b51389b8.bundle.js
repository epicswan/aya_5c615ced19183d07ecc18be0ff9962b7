webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/dashboard/dashboard.module.ngfactory": [
		"./src/app/dashboard/dashboard.module.ngfactory.js",
		"dashboard.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/api/api.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");


var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__configuration__["a" /* Configuration */], useFactory: configurationFactory }]
        };
    };
    return ApiModule;
}());



/***/ }),

/***/ "./src/app/api/api/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APIS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categoriesTemplates_service__ = __webpack_require__("./src/app/api/api/categoriesTemplates.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__designs_service__ = __webpack_require__("./src/app/api/api/designs.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__designsModule_service__ = __webpack_require__("./src/app/api/api/designsModule.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editors_service__ = __webpack_require__("./src/app/api/api/editors.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menus_service__ = __webpack_require__("./src/app/api/api/menus.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_service__ = __webpack_require__("./src/app/api/api/modules.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ndds_service__ = __webpack_require__("./src/app/api/api/ndds.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_service__ = __webpack_require__("./src/app/api/api/pages.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plans_service__ = __webpack_require__("./src/app/api/api/plans.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__public_service__ = __webpack_require__("./src/app/api/api/public.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sites_service__ = __webpack_require__("./src/app/api/api/sites.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__versions_service__ = __webpack_require__("./src/app/api/api/versions.service.ts");
/* unused harmony namespace reexport */
























var APIS = [__WEBPACK_IMPORTED_MODULE_0__categoriesTemplates_service__["a" /* CategoriesTemplatesService */], __WEBPACK_IMPORTED_MODULE_1__designs_service__["a" /* DesignsService */], __WEBPACK_IMPORTED_MODULE_2__designsModule_service__["a" /* DesignsModuleService */], __WEBPACK_IMPORTED_MODULE_3__editors_service__["a" /* EditorsService */], __WEBPACK_IMPORTED_MODULE_4__menus_service__["a" /* MenusService */], __WEBPACK_IMPORTED_MODULE_5__modules_service__["a" /* ModulesService */], __WEBPACK_IMPORTED_MODULE_6__ndds_service__["a" /* NddsService */], __WEBPACK_IMPORTED_MODULE_7__pages_service__["a" /* PagesService */], __WEBPACK_IMPORTED_MODULE_8__plans_service__["a" /* PlansService */], __WEBPACK_IMPORTED_MODULE_9__public_service__["a" /* PublicService */], __WEBPACK_IMPORTED_MODULE_10__sites_service__["a" /* SitesService */], __WEBPACK_IMPORTED_MODULE_11__versions_service__["a" /* VersionsService */]];


/***/ }),

/***/ "./src/app/api/api/categoriesTemplates.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesTemplatesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */


var CategoriesTemplatesService = /** @class */ (function () {
    function CategoriesTemplatesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_1__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    CategoriesTemplatesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    CategoriesTemplatesService.prototype.apiCategoriesCategorieTemplateTemplateGet = function (categorieTemplate, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (categorieTemplate === null || categorieTemplate === undefined) {
            throw new Error('Required parameter categorieTemplate was null or undefined when calling apiCategoriesCategorieTemplateTemplateGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/categories/" + encodeURIComponent(String(categorieTemplate)) + "/template", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    CategoriesTemplatesService.prototype.apiCategoriesTemplatesGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/categories/templates", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return CategoriesTemplatesService;
}());



/***/ }),

/***/ "./src/app/api/api/designs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */


var DesignsService = /** @class */ (function () {
    function DesignsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_1__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DesignsService.prototype.canConsumeForm = function (consumes) {
        var form = "multipart/form-data";
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DesignsService.prototype.apiSitesSlugDesignsDesignPut = function (containerItem, slug, design, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (containerItem === null || containerItem === undefined) {
            throw new Error("Required parameter containerItem was null or undefined when calling apiSitesSlugDesignsDesignPut.");
        }
        if (slug === null || slug === undefined) {
            throw new Error("Required parameter slug was null or undefined when calling apiSitesSlugDesignsDesignPut.");
        }
        if (design === null || design === undefined) {
            throw new Error("Required parameter design was null or undefined when calling apiSitesSlugDesignsDesignPut.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/designs/" + encodeURIComponent(String(design)), containerItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DesignsService.prototype.apiSitesSlugDesignsGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error("Required parameter slug was null or undefined when calling apiSitesSlugDesignsGet.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/designs", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return DesignsService;
}());



/***/ }),

/***/ "./src/app/api/api/designsModule.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignsModuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */


var DesignsModuleService = /** @class */ (function () {
    function DesignsModuleService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_1__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DesignsModuleService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DesignsModuleService.prototype.apiSitesSiteDesignsModulesPost = function (designType, site, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (designType === null || designType === undefined) {
            throw new Error('Required parameter designType was null or undefined when calling apiSitesSiteDesignsModulesPost.');
        }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSiteDesignsModulesPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(site)) + "/designs/modules", designType, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DesignsModuleService.prototype.apiSitesSlugDesignModuleGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugDesignModuleGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/design/module", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DesignsModuleService.prototype.apiSitesSlugDesignsDesignModulePut = function (designType, slug, design, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (designType === null || designType === undefined) {
            throw new Error('Required parameter designType was null or undefined when calling apiSitesSlugDesignsDesignModulePut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugDesignsDesignModulePut.');
        }
        if (design === null || design === undefined) {
            throw new Error('Required parameter design was null or undefined when calling apiSitesSlugDesignsDesignModulePut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/designs/" + encodeURIComponent(String(design)) + "/module", designType, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return DesignsModuleService;
}());



/***/ }),

/***/ "./src/app/api/api/editors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */


var EditorsService = /** @class */ (function () {
    function EditorsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_1__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    EditorsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    EditorsService.prototype.apiEditorsSlugGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiEditorsSlugGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/editors/" + encodeURIComponent(String(slug)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EditorsService.prototype.apiEditorsSlugLayoutsLayoutGet = function (slug, layout, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiEditorsSlugLayoutsLayoutGet.');
        }
        if (layout === null || layout === undefined) {
            throw new Error('Required parameter layout was null or undefined when calling apiEditorsSlugLayoutsLayoutGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/editors/" + encodeURIComponent(String(slug)) + "/layouts/" + encodeURIComponent(String(layout)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EditorsService.prototype.apiEditorsSlugTemplatesGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiEditorsSlugTemplatesGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/editors/" + encodeURIComponent(String(slug)) + "/templates", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    EditorsService.prototype.apiEditorsSlugTemplatesTemplateGet = function (slug, template, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiEditorsSlugTemplatesTemplateGet.');
        }
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling apiEditorsSlugTemplatesTemplateGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/editors/" + encodeURIComponent(String(slug)) + "/templates/" + encodeURIComponent(String(template)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return EditorsService;
}());



/***/ }),

/***/ "./src/app/api/api/menus.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__encoder__ = __webpack_require__("./src/app/api/encoder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */



var MenusService = /** @class */ (function () {
    function MenusService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    MenusService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    MenusService.prototype.apiMenusSlugItemOrderPut = function (rankItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (rankItem === null || rankItem === undefined) {
            throw new Error('Required parameter rankItem was null or undefined when calling apiMenusSlugItemOrderPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiMenusSlugItemOrderPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/menus/" + encodeURIComponent(String(slug)) + "/item/order", rankItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MenusService.prototype.apiMenusSlugItemsGet = function (slug, page, term, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiMenusSlugItemsGet.');
        }
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["i" /* HttpParams */]({ encoder: new __WEBPACK_IMPORTED_MODULE_1__encoder__["a" /* CustomHttpUrlEncodingCodec */]() });
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', page);
        }
        if (term !== undefined && term !== null) {
            queryParameters = queryParameters.set('term', term);
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/menus/" + encodeURIComponent(String(slug)) + "/items", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MenusService.prototype.apiMenusSlugItemsMenuDelete = function (slug, menu, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiMenusSlugItemsMenuDelete.');
        }
        if (menu === null || menu === undefined) {
            throw new Error('Required parameter menu was null or undefined when calling apiMenusSlugItemsMenuDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/menus/" + encodeURIComponent(String(slug)) + "/items/" + encodeURIComponent(String(menu)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MenusService.prototype.apiMenusSlugItemsMenuGet = function (slug, menu, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiMenusSlugItemsMenuGet.');
        }
        if (menu === null || menu === undefined) {
            throw new Error('Required parameter menu was null or undefined when calling apiMenusSlugItemsMenuGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/menus/" + encodeURIComponent(String(slug)) + "/items/" + encodeURIComponent(String(menu)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MenusService.prototype.apiMenusSlugItemsMenuItemPatchPut = function (menuItemItem, slug, menuItem, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (menuItemItem === null || menuItemItem === undefined) {
            throw new Error('Required parameter menuItemItem was null or undefined when calling apiMenusSlugItemsMenuItemPatchPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiMenusSlugItemsMenuItemPatchPut.');
        }
        if (menuItem === null || menuItem === undefined) {
            throw new Error('Required parameter menuItem was null or undefined when calling apiMenusSlugItemsMenuItemPatchPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/menus/" + encodeURIComponent(String(slug)) + "/items/" + encodeURIComponent(String(menuItem)) + "/patch", menuItemItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MenusService.prototype.apiMenusSlugItemsMenuItemPut = function (menuItemItem, slug, menuItem, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (menuItemItem === null || menuItemItem === undefined) {
            throw new Error('Required parameter menuItemItem was null or undefined when calling apiMenusSlugItemsMenuItemPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiMenusSlugItemsMenuItemPut.');
        }
        if (menuItem === null || menuItem === undefined) {
            throw new Error('Required parameter menuItem was null or undefined when calling apiMenusSlugItemsMenuItemPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/menus/" + encodeURIComponent(String(slug)) + "/items/" + encodeURIComponent(String(menuItem)), menuItemItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MenusService.prototype.apiMenusSlugItemsPost = function (menuItemItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (menuItemItem === null || menuItemItem === undefined) {
            throw new Error('Required parameter menuItemItem was null or undefined when calling apiMenusSlugItemsPost.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiMenusSlugItemsPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/menus/" + encodeURIComponent(String(slug)) + "/items", menuItemItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return MenusService;
}());



/***/ }),

/***/ "./src/app/api/api/modules.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__encoder__ = __webpack_require__("./src/app/api/encoder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */



var ModulesService = /** @class */ (function () {
    function ModulesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ModulesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ModulesService.prototype.apiSitesSiteModulesActivationsPost = function (activationItem, site, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (activationItem === null || activationItem === undefined) {
            throw new Error('Required parameter activationItem was null or undefined when calling apiSitesSiteModulesActivationsPost.');
        }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSiteModulesActivationsPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(site)) + "/modules/activations", activationItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModulesService.prototype.apiSitesSlugModulesModulePagesGet = function (slug, module, page, term, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugModulesModulePagesGet.');
        }
        if (module === null || module === undefined) {
            throw new Error('Required parameter module was null or undefined when calling apiSitesSlugModulesModulePagesGet.');
        }
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["i" /* HttpParams */]({ encoder: new __WEBPACK_IMPORTED_MODULE_1__encoder__["a" /* CustomHttpUrlEncodingCodec */]() });
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', page);
        }
        if (term !== undefined && term !== null) {
            queryParameters = queryParameters.set('term', term);
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/modules/" + encodeURIComponent(String(module)) + "/pages", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModulesService.prototype.apiSitesSlugModulesModulePagesModuleResourceGet = function (slug, module, moduleResource, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugModulesModulePagesModuleResourceGet.');
        }
        if (module === null || module === undefined) {
            throw new Error('Required parameter module was null or undefined when calling apiSitesSlugModulesModulePagesModuleResourceGet.');
        }
        if (moduleResource === null || moduleResource === undefined) {
            throw new Error('Required parameter moduleResource was null or undefined when calling apiSitesSlugModulesModulePagesModuleResourceGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/modules/" + encodeURIComponent(String(module)) + "/pages/" + encodeURIComponent(String(moduleResource)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ModulesService.prototype.apiSitesSlugModulesModulePagesPost = function (pageModule, slug, module, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (pageModule === null || pageModule === undefined) {
            throw new Error('Required parameter pageModule was null or undefined when calling apiSitesSlugModulesModulePagesPost.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugModulesModulePagesPost.');
        }
        if (module === null || module === undefined) {
            throw new Error('Required parameter module was null or undefined when calling apiSitesSlugModulesModulePagesPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/modules/" + encodeURIComponent(String(module)) + "/pages", pageModule, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return ModulesService;
}());



/***/ }),

/***/ "./src/app/api/api/ndds.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NddsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */


var NddsService = /** @class */ (function () {
    function NddsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_1__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    NddsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    NddsService.prototype.apiNddsContactsPost = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/ndds/contacts", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainContactDelete = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainContactDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/contact", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainContactGet = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainContactGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/contact", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainContactPut = function (contact, domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (contact === null || contact === undefined) {
            throw new Error('Required parameter contact was null or undefined when calling apiNddsDomainContactPut.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainContactPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/contact", contact, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainDomainInfoGet = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainDomainInfoGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/domain/info", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainLocksPost = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainLocksPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/locks", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainRedirectionDelete = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainRedirectionDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/redirection", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainRedirectionsMailsPost = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainRedirectionsMailsPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/redirections/mails", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainRedirectionsPost = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainRedirectionsPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/redirections", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainTransfertsPost = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainTransfertsPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/transferts", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainUnlocksPost = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainUnlocksPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/unlocks", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainZonePut = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainZonePut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.put(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/zone", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    NddsService.prototype.apiNddsDomainZonesPost = function (domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiNddsDomainZonesPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/ndds/" + encodeURIComponent(String(domain)) + "/zones", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return NddsService;
}());



/***/ }),

/***/ "./src/app/api/api/pages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */


var PagesService = /** @class */ (function () {
    function PagesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_1__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    PagesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    PagesService.prototype.apiPagesPageDelete = function (page, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling apiPagesPageDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/pages/" + encodeURIComponent(String(page)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PagesService.prototype.apiPagesPageGet = function (page, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling apiPagesPageGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/pages/" + encodeURIComponent(String(page)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PagesService.prototype.apiPagesPagePatchPut = function (pageItem, page, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (pageItem === null || pageItem === undefined) {
            throw new Error('Required parameter pageItem was null or undefined when calling apiPagesPagePatchPut.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling apiPagesPagePatchPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/pages/" + encodeURIComponent(String(page)) + "/patch", pageItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PagesService.prototype.apiPagesPagePut = function (pageItem, page, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (pageItem === null || pageItem === undefined) {
            throw new Error('Required parameter pageItem was null or undefined when calling apiPagesPagePut.');
        }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling apiPagesPagePut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/pages/" + encodeURIComponent(String(page)), pageItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PagesService.prototype.apiPagesSlugVersionsGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiPagesSlugVersionsGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/pages/" + encodeURIComponent(String(slug)) + "/versions", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PagesService.prototype.apiPagesSlugVersionsLastGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiPagesSlugVersionsLastGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/pages/" + encodeURIComponent(String(slug)) + "/versions/last", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PagesService.prototype.apiPagesSlugVersionsOnlineGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiPagesSlugVersionsOnlineGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/pages/" + encodeURIComponent(String(slug)) + "/versions/online", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return PagesService;
}());



/***/ }),

/***/ "./src/app/api/api/plans.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlansService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */


var PlansService = /** @class */ (function () {
    function PlansService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_1__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    PlansService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    PlansService.prototype.apiPlansGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/plans", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return PlansService;
}());



/***/ }),

/***/ "./src/app/api/api/public.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */


var PublicService = /** @class */ (function () {
    function PublicService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_1__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    PublicService.prototype.canConsumeForm = function (consumes) {
        var form = "multipart/form-data";
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    PublicService.prototype.publicDomainsPost = function (domainName, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domainName === null || domainName === undefined) {
            throw new Error("Required parameter domainName was null or undefined when calling publicDomainsPost.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/public/domains", domainName, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicFakeDataGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/public/fake/data", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicFeedbacksPost = function (message, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (message === null || message === undefined) {
            throw new Error("Required parameter message was null or undefined when calling publicFeedbacksPost.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/public/feedbacks", message, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicNddCountryGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/public/ndd/country", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicNddExpirationAlertGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/public/ndd/expiration/alert", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicNddStatusRefreshGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/public/ndd/status/refresh", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicNddsExtensionGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/public/ndds/extension", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicNddsExtensionsPost = function (domainName, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domainName === null || domainName === undefined) {
            throw new Error("Required parameter domainName was null or undefined when calling publicNddsExtensionsPost.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/public/ndds/extensions", domainName, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicNddsFacturesPost = function (factureNdd, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (factureNdd === null || factureNdd === undefined) {
            throw new Error("Required parameter factureNdd was null or undefined when calling publicNddsFacturesPost.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/public/ndds/factures", factureNdd, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicNddsFreesPost = function (domainName, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domainName === null || domainName === undefined) {
            throw new Error("Required parameter domainName was null or undefined when calling publicNddsFreesPost.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/public/ndds/frees", domainName, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicNddsTransferablesPost = function (domainName, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domainName === null || domainName === undefined) {
            throw new Error("Required parameter domainName was null or undefined when calling publicNddsTransferablesPost.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/public/ndds/transferables", domainName, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicNddsValidesQuantitesPost = function (data, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (data === null || data === undefined) {
            throw new Error("Required parameter data was null or undefined when calling publicNddsValidesQuantitesPost.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/public/ndds/valides/quantites", data, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicSitesPlansPost = function (observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/public/sites/plans", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicSitesProfilesPost = function (module, uid, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (module === null || module === undefined) {
            throw new Error("Required parameter module was null or undefined when calling publicSitesProfilesPost.");
        }
        if (uid === null || uid === undefined) {
            throw new Error("Required parameter uid was null or undefined when calling publicSitesProfilesPost.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/public/sites/profiles", uid, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicSitesSiteUidGet = function (site, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (site === null || site === undefined) {
            throw new Error("Required parameter site was null or undefined when calling publicSitesSiteUidGet.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/public/sites/" + encodeURIComponent(String(site)) + "/uid", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicSitesSiteWhoisOwnerGet = function (site, observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (site === null || site === undefined) {
            throw new Error("Required parameter site was null or undefined when calling publicSitesSiteWhoisOwnerGet.");
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/public/sites/" + encodeURIComponent(String(site)) + "/whois/owner", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PublicService.prototype.publicTemplatesSitesGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = "body"; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set("Authorization", this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/public/templates/sites", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return PublicService;
}());



/***/ }),

/***/ "./src/app/api/api/sites.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__encoder__ = __webpack_require__("./src/app/api/encoder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */



var SitesService = /** @class */ (function () {
    function SitesService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_2__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    SitesService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    SitesService.prototype.apiDomainsDomainPut = function (domainItem, domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domainItem === null || domainItem === undefined) {
            throw new Error('Required parameter domainItem was null or undefined when calling apiDomainsDomainPut.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiDomainsDomainPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/domains/" + encodeURIComponent(String(domain)), domainItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiDomainsMeGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/domains/me", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesCloneDuplicatesPost = function (clone, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (clone === null || clone === undefined) {
            throw new Error('Required parameter clone was null or undefined when calling apiSitesCloneDuplicatesPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(clone)) + "/duplicates", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesMeGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/me", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugPatchPut = function (siteItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (siteItem === null || siteItem === undefined) {
            throw new Error('Required parameter siteItem was null or undefined when calling apiSitesSlugPatchPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugPatchPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/patch", siteItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesPost = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/sites", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSiteDelete = function (site, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSiteDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/sites/" + encodeURIComponent(String(site)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSiteDomainsPost = function (domainItem, site, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domainItem === null || domainItem === undefined) {
            throw new Error('Required parameter domainItem was null or undefined when calling apiSitesSiteDomainsPost.');
        }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSiteDomainsPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(site)) + "/domains", domainItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSiteGet = function (site, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSiteGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(site)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSiteLayoutsLayoutPut = function (site, layout, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSiteLayoutsLayoutPut.');
        }
        if (layout === null || layout === undefined) {
            throw new Error('Required parameter layout was null or undefined when calling apiSitesSiteLayoutsLayoutPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(site)) + "/layouts/" + encodeURIComponent(String(layout)), null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSiteLoginsGet = function (site, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSiteLoginsGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(site)) + "/logins", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSiteLoginsPost = function (site, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSiteLoginsPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(site)) + "/logins", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSitePagesPost = function (pageItem, site, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (pageItem === null || pageItem === undefined) {
            throw new Error('Required parameter pageItem was null or undefined when calling apiSitesSitePagesPost.');
        }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSitePagesPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(site)) + "/pages", pageItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiPagesPagePublishPut = function (page, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling apiPagesPagePublishPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.put(this.basePath + "/api/pages/" + encodeURIComponent(String(page)) + "/publish", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSitePublishPut = function (site, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (site === null || site === undefined) {
            throw new Error('Required parameter site was null or undefined when calling apiSitesSitePublishPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(site)) + "/publish", null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugAssetsAssetDelete = function (slug, asset, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugAssetsAssetDelete.');
        }
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling apiSitesSlugAssetsAssetDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/assets/" + encodeURIComponent(String(asset)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugAssetsAssetGet = function (slug, asset, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugAssetsAssetGet.');
        }
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling apiSitesSlugAssetsAssetGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/assets/" + encodeURIComponent(String(asset)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugAssetsAssetPut = function (assetItem, slug, asset, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (assetItem === null || assetItem === undefined) {
            throw new Error('Required parameter assetItem was null or undefined when calling apiSitesSlugAssetsAssetPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugAssetsAssetPut.');
        }
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling apiSitesSlugAssetsAssetPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/assets/" + encodeURIComponent(String(asset)), assetItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugAssetsGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugAssetsGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/assets", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugAssetsPost = function (assetItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (assetItem === null || assetItem === undefined) {
            throw new Error('Required parameter assetItem was null or undefined when calling apiSitesSlugAssetsPost.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugAssetsPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/assets", assetItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugContainersContainerDelete = function (slug, container, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugContainersContainerDelete.');
        }
        if (container === null || container === undefined) {
            throw new Error('Required parameter container was null or undefined when calling apiSitesSlugContainersContainerDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/containers/" + encodeURIComponent(String(container)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugContainersContainerGet = function (slug, container, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugContainersContainerGet.');
        }
        if (container === null || container === undefined) {
            throw new Error('Required parameter container was null or undefined when calling apiSitesSlugContainersContainerGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/containers/" + encodeURIComponent(String(container)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugContainersContainerPut = function (containerItem, slug, container, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (containerItem === null || containerItem === undefined) {
            throw new Error('Required parameter containerItem was null or undefined when calling apiSitesSlugContainersContainerPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugContainersContainerPut.');
        }
        if (container === null || container === undefined) {
            throw new Error('Required parameter container was null or undefined when calling apiSitesSlugContainersContainerPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/containers/" + encodeURIComponent(String(container)), containerItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugContainersGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugContainersGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/containers", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugContainersPost = function (containerItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (containerItem === null || containerItem === undefined) {
            throw new Error('Required parameter containerItem was null or undefined when calling apiSitesSlugContainersPost.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugContainersPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/containers", containerItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugDomainsDomainDelete = function (slug, domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugDomainsDomainDelete.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiSitesSlugDomainsDomainDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/domains/" + encodeURIComponent(String(domain)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugDomainsDomainGet = function (slug, domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugDomainsDomainGet.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiSitesSlugDomainsDomainGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/domains/" + encodeURIComponent(String(domain)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugDomainsDomainPut = function (domainItem, slug, domain, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (domainItem === null || domainItem === undefined) {
            throw new Error('Required parameter domainItem was null or undefined when calling apiSitesSlugDomainsDomainPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugDomainsDomainPut.');
        }
        if (domain === null || domain === undefined) {
            throw new Error('Required parameter domain was null or undefined when calling apiSitesSlugDomainsDomainPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/domains/" + encodeURIComponent(String(domain)), domainItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugDomainsGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugDomainsGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/domains", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugMenusGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugMenusGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/menus", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugMenusMenuDelete = function (slug, menu, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugMenusMenuDelete.');
        }
        if (menu === null || menu === undefined) {
            throw new Error('Required parameter menu was null or undefined when calling apiSitesSlugMenusMenuDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/menus/" + encodeURIComponent(String(menu)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugMenusMenuGet = function (slug, menu, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugMenusMenuGet.');
        }
        if (menu === null || menu === undefined) {
            throw new Error('Required parameter menu was null or undefined when calling apiSitesSlugMenusMenuGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/menus/" + encodeURIComponent(String(menu)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugMenusMenuPut = function (menuItem, slug, menu, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (menuItem === null || menuItem === undefined) {
            throw new Error('Required parameter menuItem was null or undefined when calling apiSitesSlugMenusMenuPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugMenusMenuPut.');
        }
        if (menu === null || menu === undefined) {
            throw new Error('Required parameter menu was null or undefined when calling apiSitesSlugMenusMenuPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/menus/" + encodeURIComponent(String(menu)), menuItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugMenusPost = function (menuItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (menuItem === null || menuItem === undefined) {
            throw new Error('Required parameter menuItem was null or undefined when calling apiSitesSlugMenusPost.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugMenusPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/menus", menuItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugPagesGet = function (slug, page, term, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugPagesGet.');
        }
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["i" /* HttpParams */]({ encoder: new __WEBPACK_IMPORTED_MODULE_1__encoder__["a" /* CustomHttpUrlEncodingCodec */]() });
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', page);
        }
        if (term !== undefined && term !== null) {
            queryParameters = queryParameters.set('term', term);
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/pages", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugPut = function (siteItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (siteItem === null || siteItem === undefined) {
            throw new Error('Required parameter siteItem was null or undefined when calling apiSitesSlugPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)), siteItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SitesService.prototype.apiSitesSlugUsersScopesGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiSitesSlugUsersScopesGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/sites/" + encodeURIComponent(String(slug)) + "/users/scopes", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return SitesService;
}());



/***/ }),

/***/ "./src/app/api/api/versions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */


var VersionsService = /** @class */ (function () {
    function VersionsService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform";
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_1__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    VersionsService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    VersionsService.prototype.apiVersionsSlugAssetsAssetDelete = function (slug, asset, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugAssetsAssetDelete.');
        }
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling apiVersionsSlugAssetsAssetDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/assets/" + encodeURIComponent(String(asset)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugAssetsAssetGet = function (slug, asset, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugAssetsAssetGet.');
        }
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling apiVersionsSlugAssetsAssetGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/assets/" + encodeURIComponent(String(asset)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugAssetsAssetPut = function (assetItem, slug, asset, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (assetItem === null || assetItem === undefined) {
            throw new Error('Required parameter assetItem was null or undefined when calling apiVersionsSlugAssetsAssetPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugAssetsAssetPut.');
        }
        if (asset === null || asset === undefined) {
            throw new Error('Required parameter asset was null or undefined when calling apiVersionsSlugAssetsAssetPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/assets/" + encodeURIComponent(String(asset)), assetItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugAssetsPost = function (assetItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (assetItem === null || assetItem === undefined) {
            throw new Error('Required parameter assetItem was null or undefined when calling apiVersionsSlugAssetsPost.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugAssetsPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/assets", assetItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugContainerOrderPut = function (rankItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (rankItem === null || rankItem === undefined) {
            throw new Error('Required parameter rankItem was null or undefined when calling apiVersionsSlugContainerOrderPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugContainerOrderPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/container/order", rankItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugContainersContainerDelete = function (slug, container, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugContainersContainerDelete.');
        }
        if (container === null || container === undefined) {
            throw new Error('Required parameter container was null or undefined when calling apiVersionsSlugContainersContainerDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/containers/" + encodeURIComponent(String(container)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugContainersContainerGet = function (slug, container, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugContainersContainerGet.');
        }
        if (container === null || container === undefined) {
            throw new Error('Required parameter container was null or undefined when calling apiVersionsSlugContainersContainerGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/containers/" + encodeURIComponent(String(container)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugContainersContainerPut = function (containerItem, slug, container, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (containerItem === null || containerItem === undefined) {
            throw new Error('Required parameter containerItem was null or undefined when calling apiVersionsSlugContainersContainerPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugContainersContainerPut.');
        }
        if (container === null || container === undefined) {
            throw new Error('Required parameter container was null or undefined when calling apiVersionsSlugContainersContainerPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/containers/" + encodeURIComponent(String(container)), containerItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugContainersPost = function (containerItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (containerItem === null || containerItem === undefined) {
            throw new Error('Required parameter containerItem was null or undefined when calling apiVersionsSlugContainersPost.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugContainersPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/containers", containerItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugGet = function (slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugMetasMetaDelete = function (slug, meta, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugMetasMetaDelete.');
        }
        if (meta === null || meta === undefined) {
            throw new Error('Required parameter meta was null or undefined when calling apiVersionsSlugMetasMetaDelete.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.delete(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/metas/" + encodeURIComponent(String(meta)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugMetasMetaGet = function (slug, meta, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugMetasMetaGet.');
        }
        if (meta === null || meta === undefined) {
            throw new Error('Required parameter meta was null or undefined when calling apiVersionsSlugMetasMetaGet.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/metas/" + encodeURIComponent(String(meta)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugMetasMetaPut = function (metaItem, slug, meta, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (metaItem === null || metaItem === undefined) {
            throw new Error('Required parameter metaItem was null or undefined when calling apiVersionsSlugMetasMetaPut.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugMetasMetaPut.');
        }
        if (meta === null || meta === undefined) {
            throw new Error('Required parameter meta was null or undefined when calling apiVersionsSlugMetasMetaPut.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/metas/" + encodeURIComponent(String(meta)), metaItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    VersionsService.prototype.apiVersionsSlugMetasPost = function (metaItem, slug, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (metaItem === null || metaItem === undefined) {
            throw new Error('Required parameter metaItem was null or undefined when calling apiVersionsSlugMetasPost.');
        }
        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling apiVersionsSlugMetasPost.');
        }
        var headers = this.defaultHeaders;
        // authentication (Bearer) required
        if (this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/versions/" + encodeURIComponent(String(slug)) + "/metas", metaItem, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    return VersionsService;
}());



/***/ }),

/***/ "./src/app/api/configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderContentType = function (contentTypes) {
        var _this = this;
        if (contentTypes.length == 0) {
            return undefined;
        }
        var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    };
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderAccept = function (accepts) {
        var _this = this;
        if (accepts.length == 0) {
            return undefined;
        }
        var type = accepts.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    };
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    Configuration.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    return Configuration;
}());



/***/ }),

/***/ "./src/app/api/encoder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
    __extends(CustomHttpUrlEncodingCodec, _super);
    function CustomHttpUrlEncodingCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
        k = _super.prototype.encodeKey.call(this, k);
        return k.replace(/\+/gi, '%2B');
    };
    CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
        v = _super.prototype.encodeValue.call(this, v);
        return v.replace(/\+/gi, '%2B');
    };
    return CustomHttpUrlEncodingCodec;
}(__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["j" /* HttpUrlEncodingCodec */]));



/***/ }),

/***/ "./src/app/api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("./src/app/api/api/api.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_models__ = __webpack_require__("./src/app/api/model/models.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__("./src/app/api/variables.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__configuration__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_module__ = __webpack_require__("./src/app/api/api.module.ts");
/* unused harmony namespace reexport */







/***/ }),

/***/ "./src/app/api/model/menuItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenuItem */
var MenuItem;
(function (MenuItem) {
    MenuItem.TargetEnum = {
        Blank: '_blank',
        Self: '_self'
    };
    MenuItem.TypeEnum = {
        Page: 'page',
        Link: 'link',
        Dropdown: 'dropdown'
    };
})(MenuItem || (MenuItem = {}));


/***/ }),

/***/ "./src/app/api/model/models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menuItem__ = __webpack_require__("./src/app/api/model/menuItem.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moduleActivationType__ = __webpack_require__("./src/app/api/model/moduleActivationType.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "./src/app/api/model/moduleActivationType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ModuleActivationType */
/**
 * MetalIronThunder API
 * RESTons focus!
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var ModuleActivationType;
(function (ModuleActivationType) {
    ModuleActivationType.NomEnum = {
        Shop: 'shop',
        Membership: 'membership',
        Paiement: 'paiement',
        Blog: 'blog',
        Files: 'files',
        Notification: 'notification'
    };
})(ModuleActivationType || (ModuleActivationType = {}));


/***/ }),

/***/ "./src/app/api/variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_PATH; });
/* unused harmony export COLLECTION_FORMATS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var BASE_PATH = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* InjectionToken */]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ɵ0; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_guards__ = __webpack_require__("./src/app/shared/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_components_errors_errors_component__ = __webpack_require__("./src/app/global/components/errors/errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_components_login_login_component__ = __webpack_require__("./src/app/global/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_components_editor_editor_component__ = __webpack_require__("./src/app/global/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_components_password_password_component__ = __webpack_require__("./src/app/global/components/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_components_logout_logout_component__ = __webpack_require__("./src/app/global/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_components_external_login_external_login_component__ = __webpack_require__("./src/app/global/components/external-login/external-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_components_email_email_component__ = __webpack_require__("./src/app/global/components/email/email.component.ts");








var ɵ0 = { error: 404 };
// import { NgxPermissionsGuard } from 'ngx-permissions'; // if only admin module
var routes = [
    {
        path: "dashboard",
        loadChildren: "app/dashboard/dashboard.module#DashboardModule",
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_guards__["a" /* AuthGuard */]]
    },
    { path: "email/validation/:params", component: __WEBPACK_IMPORTED_MODULE_7__global_components_email_email_component__["a" /* EmailValidationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_guards__["a" /* AuthGuard */]] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_2__global_components_login_login_component__["a" /* LoginComponent */] },
    { path: "editor", component: __WEBPACK_IMPORTED_MODULE_3__global_components_editor_editor_component__["a" /* EditorComponent */] },
    { path: "password/reset/:params", component: __WEBPACK_IMPORTED_MODULE_4__global_components_password_password_component__["a" /* PasswordComponent */] },
    { path: "logout", component: __WEBPACK_IMPORTED_MODULE_5__global_components_logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__shared_guards__["a" /* AuthGuard */]] },
    { path: "error", component: __WEBPACK_IMPORTED_MODULE_1__global_components_errors_errors_component__["a" /* ErrorsComponent */] },
    { path: "external_login", component: __WEBPACK_IMPORTED_MODULE_6__global_components_external_login_external_login_component__["a" /* ExternalLoginComponent */] },
    { path: "", redirectTo: "/dashboard/accueil", pathMatch: "full" },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_1__global_components_errors_errors_component__["a" /* ErrorsComponent */], data: ɵ0 }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* unused harmony export View_AppComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_modal_modal_component_ngfactory__ = __webpack_require__("./src/app/shared/components/modal/modal.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_modal_modal_component__ = __webpack_require__("./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_modal_info_plan_modal_info_plan_component_ngfactory__ = __webpack_require__("./src/app/shared/components/modal-info-plan/modal-info-plan.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_modal_info_plan_modal_info_plan_component__ = __webpack_require__("./src/app/shared/components/modal-info-plan/modal-info-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__global_services_notification_service__ = __webpack_require__("./src/app/global/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__global_services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_0__app_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_router__["r" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ComponentFactoryResolver */], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ChangeDetectorRef */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](4, 0, null, null, 15, "app-modal", [["backdrop", "static"]], null, null, null, __WEBPACK_IMPORTED_MODULE_3__shared_components_modal_modal_component_ngfactory__["b" /* View_ModalComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__shared_components_modal_modal_component_ngfactory__["a" /* RenderType_ModalComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](5, 4440064, [["modalErrorApp", 4]], 0, __WEBPACK_IMPORTED_MODULE_4__shared_components_modal_modal_component__["a" /* ModalComponent */], [__WEBPACK_IMPORTED_MODULE_5__shared_services_modal_service__["a" /* ModalService */]], { idModal: [0, "idModal"], keyboard: [1, "keyboard"], backdrop: [2, "backdrop"], btnClose: [3, "btnClose"], header: [4, "header"], style: [5, "style"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵpod */](6, { zIndex: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](8, 0, null, 1, 10, "div", [["class", "we-modal-body"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](10, 0, null, null, 4, "div", [["class", "we-text-center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](12, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["Votre session a expir\u00E9."])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](16, 0, null, null, 1, "a", [["aria-label", "Close"], ["class", "we-mt-3 we-btn we-btn-primary we-btn-block"]], [[8, "href", 4]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            Se connecter\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](21, 0, null, null, 2, "app-modal-info-plan", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__shared_components_modal_info_plan_modal_info_plan_component_ngfactory__["b" /* View_ModalInfoPlanComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__shared_components_modal_info_plan_modal_info_plan_component_ngfactory__["a" /* RenderType_ModalInfoPlanComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](22, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__shared_components_modal_info_plan_modal_info_plan_component__["a" /* ModalInfoPlanComponent */], [__WEBPACK_IMPORTED_MODULE_8__shared_services_permission_service__["b" /* PermissionService */], __WEBPACK_IMPORTED_MODULE_9__shared_services_store_service__["a" /* StoreService */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { _ck(_v, 1, 0); var currVal_0 = "modalErrorApp"; var currVal_1 = false; var currVal_2 = "static"; var currVal_3 = false; var currVal_4 = false; var currVal_5 = _ck(_v, 6, 0, 99999); _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); _ck(_v, 22, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_6 = ("/login?returnUrl=" + _co.router.routerState.snapshot.url); _ck(_v, 16, 0, currVal_6); }); }
function View_AppComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */], [__WEBPACK_IMPORTED_MODULE_11__global_services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_12__global_services_errors_service__["a" /* ErrorsService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_13__shared_services_script_service__["a" /* ScriptService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵccf */]("app-root", __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_notification_service__ = __webpack_require__("./src/app/global/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(notificationService, errorsService, cd, router, scriptService) {
        this.notificationService = notificationService;
        this.errorsService = errorsService;
        this.cd = cd;
        this.router = router;
        this.scriptService = scriptService;
        this.showNotification = false;
        this.reactJs = "ReactProd";
        this.reactDomJs = "ReactDomProd";
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            function receiveMessage(event) {
                // Do we trust the sender of this message?
                var scheme = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].scheme, pathApps = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].pathApps, apiProd = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiProd;
                if (!apiProd) {
                    if (event.origin !== "https://" + pathApps &&
                        event.origin !== "http://" + pathApps) {
                        return;
                    }
                }
                else {
                    if (event.origin !== "https://admin.wifeosite.com") {
                        return;
                    }
                }
                if (typeof event.data !== "string") {
                    return;
                }
                var msg = JSON.parse(event.data);
                window["ngModuleEditor"].zone.run(function () {
                    window["ngModuleEditor"].component.runFromOutside(msg);
                });
            }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initInterceptorAxios();
                        this.initInterceptorJquery();
                        return [4 /*yield*/, this.initReact()];
                    case 1:
                        _a.sent();
                        if (window) {
                            window["__ENV_MODE"] = Object.freeze(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]);
                        }
                        window.addEventListener("message", receiveMessage, false);
                        this.notificationService.notification.subscribe(function (message) {
                            _this.notification = message;
                            _this.showNotification = true;
                            _this.cd.detectChanges();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.initReact = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].reactProd) {
                            this.reactJs = "ReactDev";
                            this.reactDomJs = "ReactDomDev";
                        }
                        return [4 /*yield*/, this.scriptService.load("js", this.reactJs).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.scriptService.load("js", this.reactDomJs)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.initInterceptorAxios = function () {
        var _this = this;
        window["axios"].interceptors.response.use(function (response) {
            // Do something with response data
            return response;
        }, function (error) {
            // https://github.com/axios/axios#handling-errors
            _this.errorsService.handleErrorHttp(error.response);
            return Promise.reject(error);
        });
    };
    AppComponent.prototype.initInterceptorJquery = function () {
        window["$"].ajaxSetup({
            ajaxError: function () {
                // console.log("pouete");
            }
        });
    };
    return AppComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_components_email_email_component_ngfactory__ = __webpack_require__("./src/app/global/components/email/email.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_components_login_login_component_ngfactory__ = __webpack_require__("./src/app/global/components/login/login.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_components_editor_editor_component_ngfactory__ = __webpack_require__("./src/app/global/components/editor/editor.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_components_password_password_component_ngfactory__ = __webpack_require__("./src/app/global/components/password/password.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_components_logout_logout_component_ngfactory__ = __webpack_require__("./src/app/global/components/logout/logout.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_components_errors_errors_component_ngfactory__ = __webpack_require__("./src/app/global/components/errors/errors.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_components_external_login_external_login_component_ngfactory__ = __webpack_require__("./src/app/global/components/external-login/external-login.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_components_tooltip_tooltip_component_ngfactory__ = __webpack_require__("./src/app/shared/components/tooltip/tooltip.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component_ngfactory__ = __webpack_require__("./src/app/app.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__ = __webpack_require__("./node_modules/@angular/animations/esm5/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__global_services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__api_configuration__ = __webpack_require__("./src/app/api/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__api_api_categoriesTemplates_service__ = __webpack_require__("./src/app/api/api/categoriesTemplates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__api_variables__ = __webpack_require__("./src/app/api/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__api_api_designs_service__ = __webpack_require__("./src/app/api/api/designs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__api_api_designsModule_service__ = __webpack_require__("./src/app/api/api/designsModule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__api_api_editors_service__ = __webpack_require__("./src/app/api/api/editors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__api_api_menus_service__ = __webpack_require__("./src/app/api/api/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__api_api_modules_service__ = __webpack_require__("./src/app/api/api/modules.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__api_api_ndds_service__ = __webpack_require__("./src/app/api/api/ndds.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__api_api_pages_service__ = __webpack_require__("./src/app/api/api/pages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__api_api_plans_service__ = __webpack_require__("./src/app/api/api/plans.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__api_api_public_service__ = __webpack_require__("./src/app/api/api/public.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__api_api_sites_service__ = __webpack_require__("./src/app/api/api/sites.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__api_api_versions_service__ = __webpack_require__("./src/app/api/api/versions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_classes_HttpEventInterceptor__ = __webpack_require__("./src/app/shared/classes/HttpEventInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_guards_auth_guard__ = __webpack_require__("./src/app/shared/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shared_services_react_service__ = __webpack_require__("./src/app/shared/services/react.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shared_services_router_params_service__ = __webpack_require__("./src/app/shared/services/router-params.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__shared_services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__shared_guards_pending_changes_guard__ = __webpack_require__("./src/app/shared/_guards/pending-changes.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__shared_pipes_get_main_domain_pipe__ = __webpack_require__("./src/app/shared/pipes/get-main-domain.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__global_services_notification_service__ = __webpack_require__("./src/app/global/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__global_services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__global_services_google_analytics_service__ = __webpack_require__("./src/app/global/services/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__global_services_app_service__ = __webpack_require__("./src/app/global/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__global_services_module_service__ = __webpack_require__("./src/app/global/services/module.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__global_components_class_errors_handler__ = __webpack_require__("./src/app/global/components/class/errors-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__global_components_email_email_component__ = __webpack_require__("./src/app/global/components/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__global_components_login_login_component__ = __webpack_require__("./src/app/global/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__global_components_editor_editor_component__ = __webpack_require__("./src/app/global/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__global_components_password_password_component__ = __webpack_require__("./src/app/global/components/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__global_components_logout_logout_component__ = __webpack_require__("./src/app/global/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__global_components_errors_errors_component__ = __webpack_require__("./src/app/global/components/errors/errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__global_components_external_login_external_login_component__ = __webpack_require__("./src/app/global/components/external-login/external-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__api_api_module__ = __webpack_require__("./src/app/api/api.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_ng2_material_dropdown__ = __webpack_require__("./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_ngx_perfect_scrollbar__ = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__shared_classes_CfgModule__ = __webpack_require__("./src/app/shared/classes/CfgModule.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


































































var AppModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵcmf */](__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵmod */]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵCodegenComponentFactoryResolver */], [[8, [__WEBPACK_IMPORTED_MODULE_3__global_components_email_email_component_ngfactory__["a" /* EmailValidationComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_4__global_components_login_login_component_ngfactory__["a" /* LoginComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__global_components_editor_editor_component_ngfactory__["a" /* EditorComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_6__global_components_password_password_component_ngfactory__["a" /* PasswordComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_7__global_components_logout_logout_component_ngfactory__["a" /* LogoutComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_8__global_components_errors_errors_component_ngfactory__["a" /* ErrorsComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_9__global_components_external_login_external_login_component_ngfactory__["a" /* ExternalLoginComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_10__shared_components_tooltip_tooltip_component_ngfactory__["a" /* TooltipComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_11__app_component_ngfactory__["a" /* AppComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ComponentFactoryResolver */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModuleRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* LOCALE_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵq */], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* LOCALE_ID */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_12__angular_common__["l" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["k" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* LOCALE_ID */], [2, __WEBPACK_IMPORTED_MODULE_12__angular_common__["s" /* ɵa */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* APP_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵn */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵo */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["q" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Sanitizer */], null, [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["g" /* HammerGestureConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["k" /* ɵDomEventsPlugin */](p0_0, p0_1), new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["o" /* ɵKeyEventsPlugin */](p1_0), new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["n" /* ɵHammerGesturesPlugin */](p2_0, p2_1)]; }, [__WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["f" /* HAMMER_GESTURE_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["e" /* EventManager */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["e" /* EventManager */], [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["d" /* EVENT_MANAGER_PLUGINS */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["m" /* ɵDomSharedStylesHost */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["m" /* ɵDomSharedStylesHost */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["e" /* EventManager */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["m" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["d" /* ɵc */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["e" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["c" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["a" /* AnimationDriver */], __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["c" /* ɵAnimationStyleNormalizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* RendererFactory2 */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["f" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_14__angular_animations_browser__["b" /* ɵAnimationEngine */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["p" /* ɵSharedStylesHost */], null, [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["m" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Testability */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Testability */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["h" /* Meta */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["h" /* Meta */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["i" /* Title */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["i" /* Title */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_16__angular_animations__["b" /* AnimationBuilder */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["b" /* ɵBrowserAnimationBuilder */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* RendererFactory2 */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["b" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_17__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["A" /* ɵf */], [__WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_router__["f" /* NoPreloading */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["f" /* NoPreloading */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_17__angular_router__["h" /* PreloadingStrategy */], null, [__WEBPACK_IMPORTED_MODULE_17__angular_router__["f" /* NoPreloading */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_17__angular_router__["s" /* RouterPreloader */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["s" /* RouterPreloader */], [__WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModuleFactoryLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["h" /* PreloadingStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_17__angular_router__["g" /* PreloadAllModules */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["g" /* PreloadAllModules */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_17__angular_router__["j" /* ROUTER_INITIALIZER */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["D" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_17__angular_router__["B" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* APP_BOOTSTRAP_LISTENER */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_17__angular_router__["j" /* ROUTER_INITIALIZER */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_18__angular_forms__["z" /* ɵi */], __WEBPACK_IMPORTED_MODULE_18__angular_forms__["z" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_18__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_18__angular_forms__["d" /* FormBuilder */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_19__global_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_19__global_services_authentication_service__["a" /* AuthenticationService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */], __WEBPACK_IMPORTED_MODULE_1__app_module__["b" /* ɵ0 */], [__WEBPACK_IMPORTED_MODULE_19__global_services_authentication_service__["a" /* AuthenticationService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_22__api_api_categoriesTemplates_service__["a" /* CategoriesTemplatesService */], __WEBPACK_IMPORTED_MODULE_22__api_api_categoriesTemplates_service__["a" /* CategoriesTemplatesService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_24__api_api_designs_service__["a" /* DesignsService */], __WEBPACK_IMPORTED_MODULE_24__api_api_designs_service__["a" /* DesignsService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_25__api_api_designsModule_service__["a" /* DesignsModuleService */], __WEBPACK_IMPORTED_MODULE_25__api_api_designsModule_service__["a" /* DesignsModuleService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_26__api_api_editors_service__["a" /* EditorsService */], __WEBPACK_IMPORTED_MODULE_26__api_api_editors_service__["a" /* EditorsService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_27__api_api_menus_service__["a" /* MenusService */], __WEBPACK_IMPORTED_MODULE_27__api_api_menus_service__["a" /* MenusService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_28__api_api_modules_service__["a" /* ModulesService */], __WEBPACK_IMPORTED_MODULE_28__api_api_modules_service__["a" /* ModulesService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_29__api_api_ndds_service__["a" /* NddsService */], __WEBPACK_IMPORTED_MODULE_29__api_api_ndds_service__["a" /* NddsService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_30__api_api_pages_service__["a" /* PagesService */], __WEBPACK_IMPORTED_MODULE_30__api_api_pages_service__["a" /* PagesService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_31__api_api_plans_service__["a" /* PlansService */], __WEBPACK_IMPORTED_MODULE_31__api_api_plans_service__["a" /* PlansService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_32__api_api_public_service__["a" /* PublicService */], __WEBPACK_IMPORTED_MODULE_32__api_api_public_service__["a" /* PublicService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_33__api_api_sites_service__["a" /* SitesService */], __WEBPACK_IMPORTED_MODULE_33__api_api_sites_service__["a" /* SitesService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_34__api_api_versions_service__["a" /* VersionsService */], __WEBPACK_IMPORTED_MODULE_34__api_api_versions_service__["a" /* VersionsService */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [2, __WEBPACK_IMPORTED_MODULE_23__api_variables__["a" /* BASE_PATH */]], [2, __WEBPACK_IMPORTED_MODULE_21__api_configuration__["a" /* Configuration */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["l" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["r" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* PLATFORM_ID */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["p" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["s" /* ɵi */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["s" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["l" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["q" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0, p1_0) { return [p0_0, new __WEBPACK_IMPORTED_MODULE_35__shared_classes_HttpEventInterceptor__["a" /* HttpEventInterceptor */](p1_0)]; }, [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["s" /* ɵi */], __WEBPACK_IMPORTED_MODULE_19__global_services_authentication_service__["a" /* AuthenticationService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_36_ngx_order_pipe__["b" /* OrderPipe */], __WEBPACK_IMPORTED_MODULE_36_ngx_order_pipe__["b" /* OrderPipe */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_37_ngx_chips__["b" /* ɵc */], __WEBPACK_IMPORTED_MODULE_37_ngx_chips__["b" /* ɵc */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_38__shared_guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_38__shared_guards_auth_guard__["a" /* AuthGuard */], [__WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_39__shared_services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_39__shared_services_modal_service__["a" /* ModalService */], [__WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_40__shared_services_script_service__["a" /* ScriptService */], __WEBPACK_IMPORTED_MODULE_40__shared_services_script_service__["a" /* ScriptService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_41__shared_services_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_41__shared_services_store_service__["a" /* StoreService */], [__WEBPACK_IMPORTED_MODULE_33__api_api_sites_service__["a" /* SitesService */], __WEBPACK_IMPORTED_MODULE_40__shared_services_script_service__["a" /* ScriptService */], __WEBPACK_IMPORTED_MODULE_28__api_api_modules_service__["a" /* ModulesService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_42__shared_services_react_service__["a" /* ReactService */], __WEBPACK_IMPORTED_MODULE_42__shared_services_react_service__["a" /* ReactService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_43__shared_services_router_params_service__["a" /* RouterParamsService */], __WEBPACK_IMPORTED_MODULE_43__shared_services_router_params_service__["a" /* RouterParamsService */], [__WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["a" /* ActivatedRoute */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_44__shared_services_permission_service__["b" /* PermissionService */], __WEBPACK_IMPORTED_MODULE_44__shared_services_permission_service__["b" /* PermissionService */], [__WEBPACK_IMPORTED_MODULE_41__shared_services_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_39__shared_services_modal_service__["a" /* ModalService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_45__shared_guards_pending_changes_guard__["a" /* PendingChangesGuard */], __WEBPACK_IMPORTED_MODULE_45__shared_guards_pending_changes_guard__["a" /* PendingChangesGuard */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_46__shared_pipes_get_main_domain_pipe__["a" /* GetMainDomainPipe */], __WEBPACK_IMPORTED_MODULE_46__shared_pipes_get_main_domain_pipe__["a" /* GetMainDomainPipe */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_47__global_services_notification_service__["a" /* NotificationService */], __WEBPACK_IMPORTED_MODULE_47__global_services_notification_service__["a" /* NotificationService */], [__WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_48__global_services_errors_service__["a" /* ErrorsService */], __WEBPACK_IMPORTED_MODULE_48__global_services_errors_service__["a" /* ErrorsService */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_39__shared_services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_47__global_services_notification_service__["a" /* NotificationService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_49__global_services_google_analytics_service__["a" /* GoogleAnalyticsService */], __WEBPACK_IMPORTED_MODULE_49__global_services_google_analytics_service__["a" /* GoogleAnalyticsService */], [__WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_50__global_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_50__global_services_app_service__["a" /* AppService */], [__WEBPACK_IMPORTED_MODULE_40__shared_services_script_service__["a" /* ScriptService */], __WEBPACK_IMPORTED_MODULE_42__shared_services_react_service__["a" /* ReactService */], __WEBPACK_IMPORTED_MODULE_41__shared_services_store_service__["a" /* StoreService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_51__global_services_module_service__["a" /* ModuleService */], __WEBPACK_IMPORTED_MODULE_51__global_services_module_service__["a" /* ModuleService */], [__WEBPACK_IMPORTED_MODULE_41__shared_services_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_50__global_services_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_48__global_services_errors_service__["a" /* ErrorsService */], __WEBPACK_IMPORTED_MODULE_28__api_api_modules_service__["a" /* ModulesService */], __WEBPACK_IMPORTED_MODULE_30__api_api_pages_service__["a" /* PagesService */], __WEBPACK_IMPORTED_MODULE_34__api_api_versions_service__["a" /* VersionsService */], __WEBPACK_IMPORTED_MODULE_25__api_api_designsModule_service__["a" /* DesignsModuleService */], __WEBPACK_IMPORTED_MODULE_40__shared_services_script_service__["a" /* ScriptService */], __WEBPACK_IMPORTED_MODULE_42__shared_services_react_service__["a" /* ReactService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_52__global_components_class_errors_handler__["a" /* ErrorsHandler */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgProbeToken */], function () { return [__WEBPACK_IMPORTED_MODULE_17__angular_router__["w" /* ɵb */]()]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_router__["B" /* ɵg */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["B" /* ɵg */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */], function (p0_0, p1_0) { return [__WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["s" /* ɵh */](p0_0), __WEBPACK_IMPORTED_MODULE_17__angular_router__["C" /* ɵh */](p1_0)]; }, [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgProbeToken */]], __WEBPACK_IMPORTED_MODULE_17__angular_router__["B" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵConsole */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationModule */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */], [[3, __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_17__angular_router__["v" /* ɵa */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["y" /* ɵd */], [[3, __WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_router__["u" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["c" /* DefaultUrlSerializer */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["b" /* ChildrenOutletContexts */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_17__angular_router__["i" /* ROUTER_CONFIGURATION */], {}, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* LocationStrategy */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["x" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["p" /* PlatformLocation */], [2, __WEBPACK_IMPORTED_MODULE_12__angular_common__["a" /* APP_BASE_HREF */]], __WEBPACK_IMPORTED_MODULE_17__angular_router__["i" /* ROUTER_CONFIGURATION */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_12__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["f" /* Location */], [__WEBPACK_IMPORTED_MODULE_12__angular_common__["g" /* LocationStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModuleFactoryLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* SystemJsNgModuleLoader */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* SystemJsNgModuleLoaderConfig */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_17__angular_router__["k" /* ROUTES */], function () { return [[{ path: "dashboard", loadChildren: "app/dashboard/dashboard.module#DashboardModule", canActivate: [__WEBPACK_IMPORTED_MODULE_38__shared_guards_auth_guard__["a" /* AuthGuard */]] }, { path: "email/validation/:params", component: __WEBPACK_IMPORTED_MODULE_53__global_components_email_email_component__["a" /* EmailValidationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__shared_guards_auth_guard__["a" /* AuthGuard */]] }, { path: "login", component: __WEBPACK_IMPORTED_MODULE_54__global_components_login_login_component__["a" /* LoginComponent */] }, { path: "editor", component: __WEBPACK_IMPORTED_MODULE_55__global_components_editor_editor_component__["a" /* EditorComponent */] }, { path: "password/reset/:params", component: __WEBPACK_IMPORTED_MODULE_56__global_components_password_password_component__["a" /* PasswordComponent */] }, { path: "logout", component: __WEBPACK_IMPORTED_MODULE_57__global_components_logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__shared_guards_auth_guard__["a" /* AuthGuard */]] }, { path: "error", component: __WEBPACK_IMPORTED_MODULE_58__global_components_errors_errors_component__["a" /* ErrorsComponent */] }, { path: "external_login", component: __WEBPACK_IMPORTED_MODULE_59__global_components_external_login_external_login_component__["a" /* ExternalLoginComponent */] }, { path: "", redirectTo: "/dashboard/accueil", pathMatch: "full" }, { path: "**", component: __WEBPACK_IMPORTED_MODULE_58__global_components_errors_errors_component__["a" /* ErrorsComponent */], data: __WEBPACK_IMPORTED_MODULE_60__app_routing_module__["b" /* ɵ0 */] }]]; }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["z" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["u" /* UrlSerializer */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_12__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModuleFactoryLoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["k" /* ROUTES */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["i" /* ROUTER_CONFIGURATION */], [2, __WEBPACK_IMPORTED_MODULE_17__angular_router__["t" /* UrlHandlingStrategy */]], [2, __WEBPACK_IMPORTED_MODULE_17__angular_router__["l" /* RouteReuseStrategy */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_17__angular_router__["q" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["q" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_17__angular_router__["v" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_17__angular_router__["m" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_60__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_60__app_routing_module__["a" /* AppRoutingModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_forms__["x" /* ɵba */], __WEBPACK_IMPORTED_MODULE_18__angular_forms__["x" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_forms__["j" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_18__angular_forms__["j" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_18__angular_forms__["t" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_18__angular_forms__["t" /* ReactiveFormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["o" /* ɵe */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["o" /* ɵe */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](2048, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["m" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["o" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["k" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["k" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["m" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](2048, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["k" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["g" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["n" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["g" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_61__api_api_module__["a" /* ApiModule */], __WEBPACK_IMPORTED_MODULE_61__api_api_module__["a" /* ApiModule */], [[3, __WEBPACK_IMPORTED_MODULE_61__api_api_module__["a" /* ApiModule */]], [2, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["c" /* HttpClient */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["e" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["e" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["d" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["d" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_36_ngx_order_pipe__["a" /* OrderModule */], __WEBPACK_IMPORTED_MODULE_36_ngx_order_pipe__["a" /* OrderModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_62_ng2_material_dropdown__["b" /* Ng2DropdownModule */], __WEBPACK_IMPORTED_MODULE_62_ng2_material_dropdown__["b" /* Ng2DropdownModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_37_ngx_chips__["a" /* TagInputModule */], __WEBPACK_IMPORTED_MODULE_37_ngx_chips__["a" /* TagInputModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_63_ngx_perfect_scrollbar__["d" /* PerfectScrollbarModule */], __WEBPACK_IMPORTED_MODULE_63_ngx_perfect_scrollbar__["d" /* PerfectScrollbarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_64__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_64__shared_shared_module__["a" /* SharedModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["p" /* ɵf */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["q" /* ɵg */], "X-XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */], false, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_65__shared_classes_CfgModule__["a" /* CONFIG_MODULE */], { nameApp: "EDITOR" }, []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵmpd */](256, __WEBPACK_IMPORTED_MODULE_63_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */], { suppressScrollX: true }, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ɵ0; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./src/app/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");


var ɵ0 = function (authService) {
    return new __WEBPACK_IMPORTED_MODULE_0__api__["a" /* Configuration */]({
        accessToken: authService.GetAccessToken(),
        apiKeys: authService.getApiKeys(),
        basePath: authService.getBasePath(),
    });
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/global/components/class/errors-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("./src/app/global/services/notification.service.ts");





var ErrorsHandler = /** @class */ (function () {
    function ErrorsHandler(injector) {
        this.injector = injector;
    }
    ErrorsHandler.prototype.handleError = function (error) {
        var notificationService = this.injector.get(__WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]);
        var errorsService = this.injector.get(__WEBPACK_IMPORTED_MODULE_3__services_errors_service__["a" /* ErrorsService */]);
        var router = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */]);
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpErrorResponse */]) {
            // Server error happened
            if (!navigator.onLine) {
                // No Internet connection
                return notificationService.notify("No Internet Connection");
            }
            // Http Error
            // Send the error to the server
            errorsService.log(error);
            // .subscribe(); // si server dispo
            // Handle Http Error (error.status === 403, 404...)
            errorsService.handleErrorHttp(error);
        }
        else {
            // Client Error Happend
            // Send the error to the server and then
            // redirect the user to the page with all the info
            errorsService.log(error);
            // .subscribe(errorWithContextInfo => { si server dispo
            //     router.navigate(['/error'], { queryParams: errorWithContextInfo, replaceUrl: true });
            // });
        }
        // return notificationService.notify(`${error.name} - ${error.message}`);
    };
    return ErrorsHandler;
}());



/***/ }),

/***/ "./src/app/global/components/editor/editor.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_EditorComponent */
/* unused harmony export View_EditorComponent_0 */
/* unused harmony export View_EditorComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_component__ = __webpack_require__("./src/app/global/components/editor/editor.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_EditorComponent = [".meta__card_body[_ngcontent-%COMP%] {\n            width: 408px;\n        }\n\n        .app__list__item[_ngcontent-%COMP%] {\n            padding: 0.2rem !important;\n            margin-top: 0.3rem;\n            margin-bottom: 0.35rem;\n\n\n        }\n\n        .app__list__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n            margin-right: 1rem;\n        }\n\n        .ap_google_titre[_ngcontent-%COMP%] {\n            font-size: 18px;\n            color: #1a0dab;\n            font-family: arial, sans-serif;\n            margin-top: 10px;\n        }\n\n        .ap_google_url[_ngcontent-%COMP%] {\n            font-size: 14px;\n            color: #006621;\n            font-family: arial, sans-serif;\n            margin-top: 0px;\n        }\n\n        .ap_google_description[_ngcontent-%COMP%] {\n            font-size: 14px;\n            color: #545454;\n            font-family: arial, sans-serif;\n            margin-top: 0px;\n        }\n\n\n        \n        .rc-slider[_ngcontent-%COMP%] {\n            position: relative;\n            height: 14px;\n            padding: 5px 0;\n            width: 100%;\n            border-radius: 6px;\n            touch-action: none;\n            box-sizing: border-box;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        .rc-slider[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n            box-sizing: border-box;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        .rc-slider-rail[_ngcontent-%COMP%] {\n            position: absolute;\n            width: 100%;\n            background-color: #e9e9e9;\n            height: 4px;\n            border-radius: 6px;\n        }\n\n        .rc-slider-track[_ngcontent-%COMP%] {\n            position: absolute;\n            left: 0;\n            height: 4px;\n            border-radius: 6px;\n            background-color: #abe2fb;\n        }\n\n        .rc-slider-handle[_ngcontent-%COMP%] {\n            position: absolute;\n            width: 14px;\n            height: 14px;\n            cursor: pointer;\n            cursor: -webkit-grab;\n            margin-top: -5px;\n            cursor: grab;\n            border-radius: 50%;\n            border: solid 2px #96dbfa;\n            background-color: #fff;\n            touch-action: pan-x;\n        }\n\n        .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging[_ngcontent-%COMP%] {\n            border-color: #57c5f7;\n            box-shadow: 0 0 0 5px #96dbfa;\n        }\n\n        .rc-slider-handle[_ngcontent-%COMP%]:focus {\n            outline: none;\n        }\n\n        .rc-slider-handle-click-focused[_ngcontent-%COMP%]:focus {\n            border-color: #96dbfa;\n            box-shadow: unset;\n        }\n\n        .rc-slider-handle[_ngcontent-%COMP%]:hover {\n            border-color: #57c5f7;\n        }\n\n        .rc-slider-handle[_ngcontent-%COMP%]:active {\n            border-color: #57c5f7;\n            box-shadow: 0 0 5px #57c5f7;\n            cursor: -webkit-grabbing;\n            cursor: grabbing;\n        }\n\n        .rc-slider-mark[_ngcontent-%COMP%] {\n            position: absolute;\n            top: 18px;\n            left: 0;\n            width: 100%;\n            font-size: 12px;\n        }\n\n        .rc-slider-mark-text[_ngcontent-%COMP%] {\n            position: absolute;\n            display: inline-block;\n            vertical-align: middle;\n            text-align: center;\n            cursor: pointer;\n            color: #999;\n        }\n\n        .rc-slider-mark-text-active[_ngcontent-%COMP%] {\n            color: #666;\n        }\n\n        .rc-slider-step[_ngcontent-%COMP%] {\n            position: absolute;\n            width: 100%;\n            height: 4px;\n            background: transparent;\n        }\n\n        .rc-slider-dot[_ngcontent-%COMP%] {\n            position: absolute;\n            bottom: -2px;\n            margin-left: -4px;\n            width: 8px;\n            height: 8px;\n            border: 2px solid #e9e9e9;\n            background-color: #fff;\n            cursor: pointer;\n            border-radius: 50%;\n            vertical-align: middle;\n        }\n\n        .rc-slider-dot-active[_ngcontent-%COMP%] {\n            border-color: #96dbfa;\n        }\n\n        .rc-slider-dot-reverse[_ngcontent-%COMP%] {\n            margin-right: -4px;\n        }\n\n        .rc-slider-disabled[_ngcontent-%COMP%] {\n            background-color: #e9e9e9;\n        }\n\n        .rc-slider-disabled[_ngcontent-%COMP%]   .rc-slider-track[_ngcontent-%COMP%] {\n            background-color: #cccccc;\n        }\n\n        .rc-slider-disabled[_ngcontent-%COMP%]   .rc-slider-handle[_ngcontent-%COMP%], .rc-slider-disabled[_ngcontent-%COMP%]   .rc-slider-dot[_ngcontent-%COMP%] {\n            border-color: #cccccc;\n            box-shadow: none;\n            background-color: #fff;\n            cursor: not-allowed;\n        }\n\n        .rc-slider-disabled[_ngcontent-%COMP%]   .rc-slider-mark-text[_ngcontent-%COMP%], .rc-slider-disabled[_ngcontent-%COMP%]   .rc-slider-dot[_ngcontent-%COMP%] {\n            cursor: not-allowed !important;\n        }\n\n        .rc-slider-vertical[_ngcontent-%COMP%] {\n            width: 14px;\n            height: 100%;\n            padding: 0 5px;\n        }\n\n        .rc-slider-vertical[_ngcontent-%COMP%]   .rc-slider-rail[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 4px;\n        }\n\n        .rc-slider-vertical[_ngcontent-%COMP%]   .rc-slider-track[_ngcontent-%COMP%] {\n            left: 5px;\n            bottom: 0;\n            width: 4px;\n        }\n\n        .rc-slider-vertical[_ngcontent-%COMP%]   .rc-slider-handle[_ngcontent-%COMP%] {\n            margin-left: -5px;\n            touch-action: pan-y;\n        }\n\n        .rc-slider-vertical[_ngcontent-%COMP%]   .rc-slider-mark[_ngcontent-%COMP%] {\n            top: 0;\n            left: 18px;\n            height: 100%;\n        }\n\n        .rc-slider-vertical[_ngcontent-%COMP%]   .rc-slider-step[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 4px;\n        }\n\n        .rc-slider-vertical[_ngcontent-%COMP%]   .rc-slider-dot[_ngcontent-%COMP%] {\n            left: 2px;\n            margin-bottom: -4px;\n        }\n\n        .rc-slider-vertical[_ngcontent-%COMP%]   .rc-slider-dot[_ngcontent-%COMP%]:first-child {\n            margin-bottom: -4px;\n        }\n\n        .rc-slider-vertical[_ngcontent-%COMP%]   .rc-slider-dot[_ngcontent-%COMP%]:last-child {\n            margin-bottom: -4px;\n        }\n\n        .rc-slider-tooltip-zoom-down-enter[_ngcontent-%COMP%], .rc-slider-tooltip-zoom-down-appear[_ngcontent-%COMP%] {\n            animation-duration: .3s;\n            animation-fill-mode: both;\n            display: block !important;\n            animation-play-state: paused;\n        }\n\n        .rc-slider-tooltip-zoom-down-leave[_ngcontent-%COMP%] {\n            animation-duration: .3s;\n            animation-fill-mode: both;\n            display: block !important;\n            animation-play-state: paused;\n        }\n\n        .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active[_ngcontent-%COMP%], .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active[_ngcontent-%COMP%] {\n            animation-name: rcSliderTooltipZoomDownIn;\n            animation-play-state: running;\n        }\n\n        .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active[_ngcontent-%COMP%] {\n            animation-name: rcSliderTooltipZoomDownOut;\n            animation-play-state: running;\n        }\n\n        .rc-slider-tooltip-zoom-down-enter[_ngcontent-%COMP%], .rc-slider-tooltip-zoom-down-appear[_ngcontent-%COMP%] {\n            transform: scale(0, 0);\n            animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n        }\n\n        .rc-slider-tooltip-zoom-down-leave[_ngcontent-%COMP%] {\n            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n        }\n\n        @keyframes rcSliderTooltipZoomDownIn {\n            0% {\n                opacity: 0;\n                transform-origin: 50% 100%;\n                transform: scale(0, 0);\n            }\n\n            100% {\n                transform-origin: 50% 100%;\n                transform: scale(1, 1);\n            }\n        }\n\n        @keyframes rcSliderTooltipZoomDownOut {\n            0% {\n                transform-origin: 50% 100%;\n                transform: scale(1, 1);\n            }\n\n            100% {\n                opacity: 0;\n                transform-origin: 50% 100%;\n                transform: scale(0, 0);\n            }\n        }\n\n        .rc-slider-tooltip[_ngcontent-%COMP%] {\n            position: absolute;\n            left: -9999px;\n            top: -9999px;\n            visibility: visible;\n            box-sizing: border-box;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        .rc-slider-tooltip[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n            box-sizing: border-box;\n            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        .rc-slider-tooltip-hidden[_ngcontent-%COMP%] {\n            display: none;\n        }\n\n        .rc-slider-tooltip-placement-top[_ngcontent-%COMP%] {\n            padding: 4px 0 8px 0;\n        }\n\n        .rc-slider-tooltip-inner[_ngcontent-%COMP%] {\n            padding: 6px 2px;\n            min-width: 24px;\n            height: 24px;\n            font-size: 12px;\n            line-height: 1;\n            color: #ffffff;\n            text-align: center;\n            text-decoration: none;\n            background-color: #6c6c6c;\n            border-radius: 6px;\n            box-shadow: 0 0 4px #d9d9d9;\n        }\n\n        .rc-slider-tooltip-arrow[_ngcontent-%COMP%] {\n            position: absolute;\n            width: 0;\n            height: 0;\n            border-color: transparent;\n            border-style: solid;\n        }\n\n        .rc-slider-tooltip-placement-top[_ngcontent-%COMP%]   .rc-slider-tooltip-arrow[_ngcontent-%COMP%] {\n            bottom: 4px;\n            left: 50%;\n            margin-left: -4px;\n            border-width: 4px 4px 0;\n            border-top-color: #6c6c6c;\n        }\n\n\n        .rc-slider-mark-text[_ngcontent-%COMP%] {\n            color: white;\n        }\n\n        .rc-slider-dot[_ngcontent-%COMP%] {\n            bottom: -5px;\n            width: 16px;\n            height: 16px;\n            border: 2px solid #e9e9e9;\n        }\n\n        .rc-slider-rail[_ngcontent-%COMP%] {\n            height: 6px;\n        }\n\n        .rc-slider-step[_ngcontent-%COMP%] {\n            height: 6px;\n        }\n\n        .rc-slider-handle[_ngcontent-%COMP%] {\n            width: 20px;\n            height: 20px;\n            margin-top: -8px;\n            margin-left: 3px;\n        }\n\n        .rc-slider-mark[_ngcontent-%COMP%] {\n            font-size: 14px;\n        }\n\n\n\n        .we-btn-group[_ngcontent-%COMP%] > .we-btn[_ngcontent-%COMP%]:focus, .we-btn-group[_ngcontent-%COMP%] > .we-btn[_ngcontent-%COMP%]:active, .we-btn-group[_ngcontent-%COMP%] > .we-btn.we-active[_ngcontent-%COMP%], .we-btn-group-vertical[_ngcontent-%COMP%] > .we-btn[_ngcontent-%COMP%]:focus, .we-btn-group-vertical[_ngcontent-%COMP%] > .we-btn[_ngcontent-%COMP%]:active, .we-btn-group-vertical[_ngcontent-%COMP%] > .we-btn.we-active[_ngcontent-%COMP%] {\n            background: rgb(93 117 160);\n        }\n\n\n\n\n        .react-tags[_ngcontent-%COMP%] {\n            position: relative;\n            padding: 6px 0 0 6px;\n            border: 1px solid #D1D1D1;\n            border-radius: 1px;\n            background: white;\n\n            \n            font-size: 1em;\n            line-height: 1.2;\n\n            \n            cursor: text;\n        }\n\n        .react-tags.is-focused[_ngcontent-%COMP%] {\n            border-color: #B1B1B1;\n        }\n\n        .react-tags__selected[_ngcontent-%COMP%] {\n            display: inline;\n        }\n\n        .react-tags__selected-tag[_ngcontent-%COMP%] {\n            display: inline-block;\n            box-sizing: border-box;\n            margin: 0 6px 6px 0;\n            padding: 6px 8px;\n            border: 1px solid #D1D1D1;\n            border-radius: 2px;\n\n\n            \n            font-size: inherit;\n            line-height: inherit;\n\n            box-sizing: border-box;\n            touch-action: manipulation;\n            margin: 0;\n            font-family: inherit;\n            overflow: visible;\n            text-transform: none;\n            white-space: nowrap;\n            display: inline-block;\n            font-weight: 400;\n            text-align: center;\n            vertical-align: middle;\n            user-select: none;\n            border: 1px solid transparent;\n            padding: .375rem .75rem;\n            font-size: 1rem;\n            line-height: 1.5;\n            border-radius: .25rem;\n            transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n            -webkit-appearance: button;\n            text-decoration: none;\n            cursor: pointer;\n            background-image: none;\n            color: #fff;\n            background-color: #0062cc;\n            border-color: #005cbf;\n            margin: 1px;\n        }\n\n        .react-tags__selected-tag[_ngcontent-%COMP%]:after {\n            content: '\\2715';\n            color: #AAA;\n            margin-left: 8px;\n        }\n\n        .react-tags__selected-tag[_ngcontent-%COMP%]:hover, .react-tags__selected-tag[_ngcontent-%COMP%]:focus {\n            border-color: #B1B1B1;\n        }\n\n        .react-tags__search[_ngcontent-%COMP%] {\n            display: inline-block;\n\n            \n            padding: 7px 2px;\n            margin-bottom: 6px;\n\n            \n            max-width: 100%;\n        }\n\n        @media screen and (min-width: 30em) {\n\n            .react-tags__search[_ngcontent-%COMP%] {\n                \n                position: relative;\n            }\n\n        }\n\n        .react-tags__search-input[_ngcontent-%COMP%] {\n            \n            max-width: 100%;\n\n            \n            margin: 0;\n            padding: 0;\n            border: 0;\n            outline: none;\n\n            \n            font-size: inherit;\n            line-height: inherit;\n        }\n\n        .react-tags__search-input[_ngcontent-%COMP%]::-ms-clear {\n            display: none;\n        }\n\n        .react-tags__suggestions[_ngcontent-%COMP%] {\n            position: absolute;\n            top: 100%;\n            left: 0;\n            width: 100%;\n        }\n\n        @media screen and (min-width: 30em) {\n\n            .react-tags__suggestions[_ngcontent-%COMP%] {\n                width: 240px;\n            }\n\n        }\n\n        .react-tags__suggestions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n            margin: 4px -1px;\n            padding: 0;\n            list-style: none;\n            background: white;\n            border: 1px solid #D1D1D1;\n            border-radius: 2px;\n            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n        }\n\n        .react-tags__suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n            border-bottom: 1px solid #ddd;\n            padding: 6px 8px;\n        }\n\n        .react-tags__suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mark[_ngcontent-%COMP%] {\n            text-decoration: underline;\n            background: none;\n            font-weight: 600;\n        }\n\n        .react-tags__suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n            cursor: pointer;\n            background: #eee;\n        }\n\n        .react-tags__suggestions[_ngcontent-%COMP%]   li.is-active[_ngcontent-%COMP%] {\n            background: #b7cfe0;\n        }\n\n        .react-tags__suggestions[_ngcontent-%COMP%]   li.is-disabled[_ngcontent-%COMP%] {\n            opacity: 0.5;\n            cursor: auto;\n        }\n\n\n        .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n            right: 0;\n            left: auto;\n        }\n\n        .we-overlay[_ngcontent-%COMP%] {\n            position: relative;\n        }\n\n        .we-overlay[_ngcontent-%COMP%]:hover > *[_ngcontent-%COMP%] {\n            opacity: 0.5;\n        }\n\n        .we-overlay[_ngcontent-%COMP%]:hover   .we-overlay-body[_ngcontent-%COMP%] {\n            opacity: 1;\n        }\n\n        .we-overlay-body[_ngcontent-%COMP%] {\n            transition: 0.5s ease;\n            opacity: 0;\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            bottom: -10px;\n            left: -10px;\n        }\n\n        .browser[_ngcontent-%COMP%] {\n            font-size: 18px;\n            padding: 2.1em 0 0 0;\n            border-radius: 0.25em;\n            display: inline-block;\n            overflow: hidden;\n        }\n\n        .browser[_ngcontent-%COMP%]   .browser-navigation-bar[_ngcontent-%COMP%] {\n            display: block;\n            box-sizing: border-box;\n            height: 2.1em;\n            position: absolute;\n            top: 0;\n            padding: 0.3em;\n            width: 100%;\n            background: linear-gradient(to bottom, #edeaed 0%, #dddfdd 100%);\n            border-bottom: 2px solid #cbcbcb;\n        }\n\n\n\n        .browser[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            font-size: 0.75em;\n            vertical-align: top;\n            display: inline-block;\n            height: 1.6em;\n            color: #aaa;\n            width: calc(100% - 6em);\n            border: 0.1em solid #E1E1E1;\n            border-radius: 0.25em;\n            background-color: #eee;\n            margin: 0.1em;\n            padding: 0 0.4em;\n        }\n\n        .browser-container[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 100%;\n            overflow-x: hidden;\n            overflow-y: auto;\n\n            text-align: center;\n        }\n\n\n        #sidebar-wrapper[_ngcontent-%COMP%] {\n            height: 100vh;\n            top: 1px;\n            \n            position: -webkit-sticky;\n            position: sticky;\n        }\n\n        .my-modal[_ngcontent-%COMP%] {\n            width: 100%;\n            height: 100%;\n            max-width: 100%;\n            margin: 0;\n            padding: 0;\n        }\n\n        .my-modal-content[_ngcontent-%COMP%] {\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            height: auto;\n            min-height: 100%;\n            border-radius: 0;\n        }\n\n\n        .btn-floating[_ngcontent-%COMP%] {\n            z-index: 1;\n            margin: -23px 20px;\n            margin-left: auto;\n            vertical-align: middle;\n            width: 47px;\n            height: 47px;\n            border-radius: 50% !important;\n            cursor: pointer;\n            -webkit-transition: .3s;\n            transition: .3s;\n            border: 0;\n        }\n\n        .card.narrower[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n            margin-left: 4%;\n            margin-right: 4%;\n            margin-top: -20px;\n            height: auto;\n            max-width: 100%;\n            width: auto;\n            border-radius: calc(.3rem - 0px);\n            \n        }\n\n        .card.wider[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n            margin-left: 4%;\n            margin-right: 4%;\n            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n            border: 0px solid rgba(0, 0, 0, 0.125);\n            border-bottom-right-radius: 0px;\n            border-bottom-left-radius: 0px;\n            border-bottom-right-radius: calc(.3rem - 0px);\n            border-bottom-left-radius: calc(.3rem - 0px);\n        }\n\n        .card.wider[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n            \n            border-bottom-right-radius: calc(.3rem - 0px);\n            border-bottom-left-radius: calc(.3rem - 0px);\n        }\n\n        .card.wider[_ngcontent-%COMP%] {\n            box-shadow: unset;\n        }\n\n        .effect-zoom-in[_ngcontent-%COMP%] {\n            overflow: hidden;\n        }\n\n        .effect-zoom-in[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n            -webkit-transform: scale(1.3);\n            -ms-transform: scale(1.3);\n            transform: scale(1.3);\n        }\n\n        .effect-zoom-in[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .effect-zoom-in[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n            -webkit-transition: .3s ease-in-out;\n            transition: .3s ease-in-out;\n        }\n\n        .effect-zoom-out[_ngcontent-%COMP%] {\n            overflow: hidden;\n        }\n\n        .effect-zoom-out[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n            -webkit-transform: scale(1);\n            -ms-transform: scale(1);\n            transform: scale(1);\n        }\n\n        .effect-zoom-out[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .effect-zoom-out[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n            -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n            -webkit-transition: .3s ease-in-out;\n            transition: .3s ease-in-out;\n        }\n\n        .card-custom-img[_ngcontent-%COMP%]::after {\n            position: absolute;\n            content: '';\n            top: 161px;\n            left: 0;\n            width: 0;\n            height: 0;\n            border-style: solid;\n            border-top-width: 40px;\n            border-right-width: 0;\n            border-bottom-width: 0;\n            border-left-width: 545px;\n            border-left-width: calc(575px - 5vw);\n            border-top-color: transparent;\n            border-right-color: transparent;\n            border-bottom-color: transparent;\n            border-left-color: inherit;\n        }"];
var RenderType_EditorComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_EditorComponent, data: {} });

function View_EditorComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](1, 0, null, null, 46, "html", [["lang", "en"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](3, 0, null, null, 33, "head", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](5, 0, null, null, 0, "meta", [["charset", "UTF-8"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](7, 0, null, null, 0, "meta", [["content", "width=device-width, initial-scale=1.0"], ["name", "viewport"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](9, 0, null, null, 0, "meta", [["content", "ie=edge"], ["http-equiv", "X-UA-Compatible"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](11, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Wifeo React Editor"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](14, 0, null, null, 0, "link", [["crossorigin", "anonymous"], ["href", "https://pro.fontawesome.com/releases/v5.8.2/css/all.css"], ["integrity", "sha384-xVVam1KS4+Qt2OrFa+VdRUoXygyKIuNWUUUBZYv+n27STsJ7oDOHJgfF0bNKLMJF"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](21, 0, null, null, 0, "link", [["href", "https://editor.wifeosite.com/assets/bootstrap/wifeo/css/global.css"], ["rel", "stylesheet"], ["type", "text/css"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](23, 0, null, null, 0, "link", [["href", "https://editor.wifeosite.com/assets/css/styles.css?v=1580395078917"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](25, 0, null, null, 0, "link", [["href", "https://editor.wifeosite.com/assets/css/sortable-tree-editor.css?v=0.0.154"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](28, 0, null, null, 0, "link", [["href", "https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"], ["rel", "stylesheet"], ["type", "text/css"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](31, 0, null, null, 0, "link", [["href", "https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.css"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](38, 0, null, null, 8, "body", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](42, 0, null, null, 0, "div", [["id", "root"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](44, 0, null, null, 0, "div", [["id", "modal-sortable-tree-editor"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"]))], null, null); }
function View_EditorComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_EditorComponent_0, RenderType_EditorComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_1__editor_component__["a" /* EditorComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EditorComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵccf */]("ng-component", __WEBPACK_IMPORTED_MODULE_1__editor_component__["a" /* EditorComponent */], View_EditorComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/global/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");

var EditorComponent = /** @class */ (function () {
    function EditorComponent() {
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/global/components/email/email.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_EmailValidationComponent */
/* unused harmony export View_EmailValidationComponent_0 */
/* unused harmony export View_EmailValidationComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidationComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_button_button_component_ngfactory__ = __webpack_require__("./src/app/shared/components/button/button.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_button_button_component__ = __webpack_require__("./src/app/shared/components/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_component__ = __webpack_require__("./src/app/global/components/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_EmailValidationComponent = ["@media screen {\n        @font-face {\n            font-family: 'Lato';\n            font-style: normal;\n            font-weight: 400;\n            src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\n        }\n\n        @font-face {\n            font-family: 'Lato';\n            font-style: normal;\n            font-weight: 700;\n            src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');\n        }\n\n        @font-face {\n            font-family: 'Lato';\n            font-style: italic;\n            font-weight: 400;\n            src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');\n        }\n\n        @font-face {\n            font-family: 'Lato';\n            font-style: italic;\n            font-weight: 700;\n            src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');\n        }\n    }\n\n    \n    body[_ngcontent-%COMP%], table[_ngcontent-%COMP%], td[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n    }\n\n    table[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n        mso-table-lspace: 0pt;\n        mso-table-rspace: 0pt;\n    }\n\n    img[_ngcontent-%COMP%] {\n        -ms-interpolation-mode: bicubic;\n    }\n\n    \n    img[_ngcontent-%COMP%] {\n        border: 0;\n        height: auto;\n        line-height: 100%;\n        outline: none;\n        text-decoration: none;\n    }\n\n    table[_ngcontent-%COMP%] {\n        border-collapse: collapse !important;\n    }\n\n    body[_ngcontent-%COMP%] {\n        height: 100% !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        width: 100% !important;\n    }\n\n    \n    a[x-apple-data-detectors][_ngcontent-%COMP%] {\n        color: inherit !important;\n        text-decoration: none !important;\n        font-size: inherit !important;\n        font-family: inherit !important;\n        font-weight: inherit !important;\n        line-height: inherit !important;\n    }\n\n    \n    @media screen and (max-width:600px) {\n        h1[_ngcontent-%COMP%] {\n            font-size: 32px !important;\n            line-height: 32px !important;\n        }\n    }\n\n    \n    div[style*=\"margin[_ngcontent-%COMP%]:   16px[_ngcontent-%COMP%]   0[_ngcontent-%COMP%];\"][_ngcontent-%COMP%] {\n        margin: 0 !important;\n    }"];
var RenderType_EmailValidationComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_EmailValidationComponent, data: {} });

function View_EmailValidationComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](2, 0, null, null, 1, "div", [["style", "display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    We're thrilled to have you here! Get ready to dive into your new account. "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](5, 0, null, null, 88, "table", [["border", "0"], ["cellpadding", "0"], ["cellspacing", "0"], ["width", "100%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](8, 0, null, null, 85, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](9, 0, null, null, 14, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](11, 0, null, null, 11, "td", [["align", "center"], ["bgcolor", "#6c63ff"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](13, 0, null, null, 8, "table", [["border", "0"], ["cellpadding", "0"], ["cellspacing", "0"], ["style", "max-width: 600px;"], ["width", "100%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](15, 0, null, null, 6, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](16, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](18, 0, null, null, 1, "td", [["align", "center"], ["style", "padding: 40px 10px 40px 10px;"], ["valign", "top"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](25, 0, null, null, 19, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](27, 0, null, null, 16, "td", [["align", "center"], ["bgcolor", "#6c63ff"], ["style", "padding: 0px 10px 0px 10px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](29, 0, null, null, 13, "table", [["border", "0"], ["cellpadding", "0"], ["cellspacing", "0"], ["style", "max-width: 600px;"], ["width", "100%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](31, 0, null, null, 11, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](32, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](34, 0, null, null, 6, "td", [["align", "center"], ["bgcolor", "#ffffff"], ["style", "padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;"], ["valign", "top"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](36, 0, null, null, 1, "h1", [["style", "font-size: 48px; font-weight: 400; margin: 2;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Vous y \u00EAtes presque!"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](39, 0, null, null, 0, "img", [["src", " https://mediacache.epicred.fr/E64NvrU0JJXyZY6Rc_tZw5D84wE=/480x/wifeosite-storage.fra1.digitaloceanspaces.com/document/832D00A7-4E51-4438-8754-3BE4F30C3F34/c96f07fa-fc7a-4919-93a8-36b59c3b693f.png"], ["style", "display: block; border: 0px;"], ["width", "150"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](46, 0, null, null, 46, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](48, 0, null, null, 43, "td", [["align", "center"], ["style", "padding: 0px 10px 0px 10px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](50, 0, null, null, 40, "table", [["border", "0"], ["cellpadding", "0"], ["cellspacing", "0"], ["style", "max-width: 600px;"], ["width", "100%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](52, 0, null, null, 38, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](53, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](55, 0, null, null, 4, "td", [["align", "left"], ["bgcolor", "#ffffff"], ["style", "padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](57, 0, null, null, 1, "p", [["style", "margin: 0;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            Appuyez sur le bouton ci-dessous pour valider votre compte wifeo.\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](62, 0, null, null, 27, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](64, 0, null, null, 24, "td", [["align", "left"], ["bgcolor", "#ffffff"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](66, 0, null, null, 21, "table", [["border", "0"], ["cellpadding", "0"], ["cellspacing", "0"], ["width", "100%"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](68, 0, null, null, 19, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](69, 0, null, null, 17, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](71, 0, null, null, 14, "td", [["align", "center"], ["bgcolor", "#ffffff"], ["style", "padding: 20px 30px 60px 30px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](73, 0, null, null, 11, "table", [["border", "0"], ["cellpadding", "0"], ["cellspacing", "0"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](75, 0, null, null, 9, "tbody", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](76, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](78, 0, null, null, 4, "td", [["align", "center"], ["bgcolor", "#6c63ff"], ["style", "border-radius: 3px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](80, 0, null, null, 1, "app-button", [["className", "we-btn we-btn-primary we-btn-block"], ["label", "Confirmer mon compte"]], null, [[null, "onClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onClick" === en)) {
        var pd_0 = (_co.emailVerify() !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_1__shared_components_button_button_component_ngfactory__["b" /* View_ButtonComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_components_button_button_component_ngfactory__["a" /* RenderType_ButtonComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](81, 4833280, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_components_button_button_component__["a" /* ButtonComponent */], [__WEBPACK_IMPORTED_MODULE_3__shared_services_store_service__["a" /* StoreService */]], { label: [0, "label"], className: [1, "className"] }, { onClick: "onClick" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n\n"]))], function (_ck, _v) { var currVal_0 = "Confirmer mon compte"; var currVal_1 = "we-btn we-btn-primary we-btn-block"; _ck(_v, 81, 0, currVal_0, currVal_1); }, null); }
function View_EmailValidationComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_EmailValidationComponent_0, RenderType_EmailValidationComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__email_component__["a" /* EmailValidationComponent */], [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_7__services_errors_service__["a" /* ErrorsService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmailValidationComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵccf */]("ng-component", __WEBPACK_IMPORTED_MODULE_4__email_component__["a" /* EmailValidationComponent */], View_EmailValidationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/global/components/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");




var EmailValidationComponent = /** @class */ (function () {
    function EmailValidationComponent(route, router, authenticationService, errService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.errService = errService;
        this.token = "";
        this.error = "";
        this.route.params.subscribe(function (token) {
            _this.token = token.params;
        });
    }
    EmailValidationComponent.prototype.emailVerify = function () {
        var _this = this;
        this.authenticationService.verifyEmailValidation(this.token).subscribe(function (e) {
            if (e && typeof e['status'] != "undefined") {
                localStorage.removeItem("accountValidationInProgress");
                if (e['status']) {
                    //console.log("verify ", e);
                    if (e['status'] == "expired") {
                        alert("Le lien d'activation est périmé. Veuillez renouveler la procédure de validation.");
                    }
                    else if (e['status'] && typeof e['token'] != "undefined") {
                        localStorage.setItem("currentUser", e['token']);
                        _this.router.navigateByUrl("/dashboard");
                    }
                }
                else {
                    alert("Lien d'activation inconnu.");
                }
            }
        }, function (fail) {
            alert("Lien d'activation inconnu.");
        });
    };
    EmailValidationComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    };
    return EmailValidationComponent;
}());



/***/ }),

/***/ "./src/app/global/components/errors/errors.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ErrorsComponent */
/* unused harmony export View_ErrorsComponent_0 */
/* unused harmony export View_ErrorsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/global/components/errors/errors.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors_component__ = __webpack_require__("./src/app/global/components/errors/errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ErrorsComponent = [__WEBPACK_IMPORTED_MODULE_0__errors_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ErrorsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_ErrorsComponent, data: {} });

function View_ErrorsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 13, "div", [["class", "c"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](2, 0, null, null, 1, "div", [["class", "_404"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["404"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](5, 0, null, null, 1, "div", [["class", "_1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["PAGE"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](8, 0, null, null, 1, "div", [["class", "_2"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["INTROUVABLE"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](11, 0, null, null, 1, "a", [["class", "btn-cloud"], ["href", "/"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["Retourner \u00E0 l'accueil"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], null, null); }
function View_ErrorsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-errors", [], null, null, null, View_ErrorsComponent_0, RenderType_ErrorsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_2__errors_component__["a" /* ErrorsComponent */], [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ErrorsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵccf */]("app-errors", __WEBPACK_IMPORTED_MODULE_2__errors_component__["a" /* ErrorsComponent */], View_ErrorsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/global/components/errors/errors.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["body[_ngcontent-%COMP%] {\n  background: #33cc99;\n  color: #fff;\n  font-family: \"Open Sans\", sans-serif;\n  max-height: 700px;\n  overflow: hidden; }\n\n.c[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  position: relative;\n  width: 80%;\n  margin: 100px auto; }\n\n._404[_ngcontent-%COMP%] {\n  font-size: 220px;\n  position: relative;\n  display: inline-block;\n  z-index: 2;\n  height: 250px;\n  letter-spacing: 15px; }\n\n._1[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  position: relative;\n  letter-spacing: 12px;\n  font-size: 4em;\n  line-height: 80%; }\n\n._2[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  position: relative;\n  font-size: 20px; }\n\n.text[_ngcontent-%COMP%] {\n  font-size: 70px;\n  text-align: center;\n  position: relative;\n  display: inline-block;\n  margin: 19px 0px 0px 0px;\n  \n  z-index: 3;\n  width: 100%;\n  line-height: 1.2em;\n  display: inline-block; }\n\n.btn-cloud[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n  display: inline-block;\n  width: 358px;\n  padding: 5px;\n  z-index: 5;\n  font-size: 25px;\n  margin: 0 auto;\n  color: #33cc99;\n  text-decoration: none;\n  margin-right: 10px; }\n\n.right[_ngcontent-%COMP%] {\n  float: right;\n  width: 60%; }\n\nhr[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  border-top: 5px solid #fff;\n  color: #fff;\n  text-align: center;\n  margin: 0px auto;\n  width: 420px;\n  height: 10px;\n  z-index: -10; }\n\nhr[_ngcontent-%COMP%]:after {\n  content: \"\\2022\";\n  display: inline-block;\n  position: relative;\n  top: -0.75em;\n  font-size: 2em;\n  padding: 0 0.2em;\n  background: #33cc99; }\n\n.cloud[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 120px;\n  background: #fff;\n  background: -webkit-gradient(linear, left top, left bottom, to(#fff));\n  background: linear-gradient(to bottom, #fff 100%);\n  border-radius: 100px;\n  position: absolute;\n  margin: 120px auto 20px;\n  z-index: -1;\n  -webkit-transition: ease 1s;\n  transition: ease 1s; }\n\n.cloud[_ngcontent-%COMP%]:after, .cloud[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  background: #fff;\n  z-index: -1; }\n\n.cloud[_ngcontent-%COMP%]:after {\n  width: 100px;\n  height: 100px;\n  top: -50px;\n  left: 50px;\n  border-radius: 100px; }\n\n.cloud[_ngcontent-%COMP%]:before {\n  width: 180px;\n  height: 180px;\n  top: -90px;\n  right: 50px;\n  border-radius: 200px; }\n\n.x1[_ngcontent-%COMP%] {\n  top: -50px;\n  left: 100px;\n  -webkit-transform: scale(0.3);\n          transform: scale(0.3);\n  opacity: 0.9;\n  -webkit-animation: moveclouds 15s linear infinite;\n          animation: moveclouds 15s linear infinite; }\n\n.x1_5[_ngcontent-%COMP%] {\n  top: -80px;\n  left: 250px;\n  -webkit-transform: scale(0.3);\n          transform: scale(0.3);\n  -webkit-animation: moveclouds 17s linear infinite;\n          animation: moveclouds 17s linear infinite; }\n\n.x2[_ngcontent-%COMP%] {\n  left: 250px;\n  top: 30px;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  opacity: 0.6;\n  -webkit-animation: moveclouds 25s linear infinite;\n          animation: moveclouds 25s linear infinite; }\n\n.x3[_ngcontent-%COMP%] {\n  left: 250px;\n  bottom: -70px;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  opacity: 0.8;\n  -webkit-animation: moveclouds 25s linear infinite;\n          animation: moveclouds 25s linear infinite; }\n\n.x4[_ngcontent-%COMP%] {\n  left: 470px;\n  bottom: 20px;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  opacity: 0.75;\n  -webkit-animation: moveclouds 18s linear infinite;\n          animation: moveclouds 18s linear infinite; }\n\n.x5[_ngcontent-%COMP%] {\n  left: 200px;\n  top: 300px;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  opacity: 0.8;\n  -webkit-animation: moveclouds 20s linear infinite;\n          animation: moveclouds 20s linear infinite; }\n\n@-webkit-keyframes moveclouds {\n  0% {\n    margin-left: 1000px; }\n  100% {\n    margin-left: -1000px; } }\n\n@keyframes moveclouds {\n  0% {\n    margin-left: 1000px; }\n  100% {\n    margin-left: -1000px; } }"];



/***/ }),

/***/ "./src/app/global/components/errors/errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");


var ErrorsComponent = /** @class */ (function () {
    function ErrorsComponent(route, location) {
        this.route = route;
        this.location = location;
    }
    ErrorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.data.subscribe(function (v) {
            _this.routeParams = v;
        });
    };
    ErrorsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ErrorsComponent;
}());



/***/ }),

/***/ "./src/app/global/components/external-login/external-login.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_ExternalLoginComponent */
/* unused harmony export View_ExternalLoginComponent_0 */
/* unused harmony export View_ExternalLoginComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalLoginComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__external_login_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/global/components/external-login/external-login.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_pipes_safe_res_url_pipe__ = __webpack_require__("./src/app/shared/pipes/safe-res-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__external_login_component__ = __webpack_require__("./src/app/global/components/external-login/external-login.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ExternalLoginComponent = [__WEBPACK_IMPORTED_MODULE_0__external_login_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ExternalLoginComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_ExternalLoginComponent, data: {} });

function View_ExternalLoginComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_2__shared_pipes_safe_res_url_pipe__["a" /* SafeResUrlPipe */], [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_41" /* ɵqud */](402653184, 1, { app_iframe: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, [">:-)\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](3, 0, [[1, 0], ["iframeContent", 1]], null, 2, "iframe", [["class", "iframeContent"], ["frameborder", "0"], ["id", "iframeContent"], ["name", "content"], ["style", "display:none;"]], [[8, "src", 5]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵppd */](4, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_44" /* ɵunv */](_v, 3, 0, _ck(_v, 4, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 0), _co.srcIframe)); _ck(_v, 3, 0, currVal_0); }); }
function View_ExternalLoginComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-external-login", [], null, null, null, View_ExternalLoginComponent_0, RenderType_ExternalLoginComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__external_login_component__["a" /* ExternalLoginComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ExternalLoginComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵccf */]("app-external-login", __WEBPACK_IMPORTED_MODULE_4__external_login_component__["a" /* ExternalLoginComponent */], View_ExternalLoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/global/components/external-login/external-login.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/global/components/external-login/external-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");


var ExternalLoginComponent = /** @class */ (function () {
    function ExternalLoginComponent() {
        this.srcIframe = "";
    }
    ExternalLoginComponent.prototype.ngOnInit = function () {
        var scheme = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].scheme, pathApps = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].pathApps, domain = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].domain, apiProd = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiProd, production = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production;
        if (production) {
            this.srcIframe = scheme + "://" + pathApps + "/external_login";
        }
        else {
            this.srcIframe = "http://" + pathApps + "/external_login";
        }
        this.srcIframe =
            this.srcIframe + "/external_login?v=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].versionFiles;
        function receiveMessage(event) {
            // console.log(event, event.origin);
            if (!apiProd) {
                if (scheme + "://www." + domain !== event.origin) {
                    return;
                }
            }
            else {
                if (event.origin !== "https://www.wifeocms.com") {
                    return;
                }
            }
            var msg = JSON.parse(event.data);
            if (msg && msg.token && msg.email) {
                localStorage.setItem("currentUser", msg.token);
                // localStorage.setItem("emailUser", msg.email);
                var strMsg = JSON.stringify({
                    token: localStorage.getItem("currentUser")
                });
                document
                    .getElementById("iframeContent")["contentWindow"].postMessage(strMsg, "*");
            }
        }
        window.addEventListener("message", receiveMessage, false);
    };
    return ExternalLoginComponent;
}());



/***/ }),

/***/ "./src/app/global/components/login/login.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LoginComponent */
/* unused harmony export View_LoginComponent_0 */
/* unused harmony export View_LoginComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_loading_loading_component_ngfactory__ = __webpack_require__("./src/app/shared/components/loading/loading.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_loading_loading_component__ = __webpack_require__("./src/app/shared/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_pipes_safe_res_url_pipe__ = __webpack_require__("./src/app/shared/pipes/safe-res-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_component__ = __webpack_require__("./src/app/global/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_LoginComponent = [".dataTables_filter[_ngcontent-%COMP%] {\n            display: none;\n        }\n\n        .sketch-picker[_ngcontent-%COMP%] {\n            margin: auto auto;\n        }\n\n        .cc-message[_ngcontent-%COMP%], .cc-compliance[_ngcontent-%COMP%] {\n            font-size: 13px !important\n        }\n\n        .cc-window[_ngcontent-%COMP%] {\n            padding-top: 10px !important;\n            padding-bottom: 10px !important;\n            line-height: 1em !important\n        }\n\n        .cc-btn[_ngcontent-%COMP%] {\n            padding: 2px !important\n        }", ".card-shadow[_ngcontent-%COMP%] {\n            z-index: 1;\n            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .2)\n        }\n\n        .card-media--bigger[_ngcontent-%COMP%] {\n            box-shadow: none;\n            background-color: transparent;\n            border: 0\n        }\n\n        .card-media--raised-mt[_ngcontent-%COMP%] {\n            margin-top: 1.625rem\n        }\n\n        .card-media--raised[_ngcontent-%COMP%]   .blog-image[_ngcontent-%COMP%] {\n            width: 100%\n        }\n\n        .card-media--raised[_ngcontent-%COMP%] {\n            margin-top: -1.625rem;\n            overflow: hidden\n        }\n\n        .card-media--bigger[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            border-radius: 0 !important;\n            z-index: 1\n        }\n\n        .PanAndZoomImage-container[_ngcontent-%COMP%] {\n            overflow: hidden\n        }\n\n        .PanAndZoomImage-image[_ngcontent-%COMP%] {\n            min-width: 100%;\n            max-width: 100%\n        }", ".blocBgVid[_ngcontent-%COMP%] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            overflow: hidden;\n            height: 100%;\n            z-index: 0;\n            pointer-events: none\n        }\n\n        .blocBgVid.invisible[_ngcontent-%COMP%] {\n            opacity: 0;\n            transition: visibility 0s linear .3s, opacity 2s\n        }\n\n        .blocBgVid.visible[_ngcontent-%COMP%] {\n            opacity: 1;\n            transition: visibility 0s linear 0s, opacity 2s\n        }\n\n        section[_ngcontent-%COMP%] {\n            opacity: 1 !important\n        }\n\n        .info-resize[_ngcontent-%COMP%] {\n            position: absolute;\n            width: 100%;\n            padding-left: .25rem;\n            padding-bottom: .25rem;\n            z-index: 1;\n            pointer-events: none;\n            display: none\n        }\n\n        [padding-resize=top][_ngcontent-%COMP%]   .info-resize[_ngcontent-%COMP%] {\n            top: 0\n        }\n\n        [padding-resize=bot][_ngcontent-%COMP%]   .info-resize[_ngcontent-%COMP%] {\n            bottom: 0\n        }\n\n        [padding-is-resizing=true][_ngcontent-%COMP%]   .info-resize[_ngcontent-%COMP%] {\n            display: block\n        }", "", "@keyframes bounce {\n\n            0%,\n            20%,\n            53%,\n            80%,\n            to {\n                animation-timing-function: cubic-bezier(.215, .61, .355, 1);\n                transform: translateZ(0)\n            }\n\n            40%,\n            43% {\n                animation-timing-function: cubic-bezier(.755, .05, .855, .06);\n                transform: translate3d(0, -30px, 0)\n            }\n\n            70% {\n                animation-timing-function: cubic-bezier(.755, .05, .855, .06);\n                transform: translate3d(0, -15px, 0)\n            }\n\n            90% {\n                transform: translate3d(0, -4px, 0)\n            }\n        }\n\n        .bounce[_ngcontent-%COMP%] {\n            animation-name: bounce;\n            transform-origin: center bottom\n        }\n\n        @keyframes flash {\n\n            0%,\n            50%,\n            to {\n                opacity: 1\n            }\n\n            25%,\n            75% {\n                opacity: 0\n            }\n        }\n\n        .flash[_ngcontent-%COMP%] {\n            animation-name: flash\n        }\n\n        @keyframes pulse {\n            0% {\n                transform: scaleX(1)\n            }\n\n            50% {\n                transform: scale3d(1.05, 1.05, 1.05)\n            }\n\n            to {\n                transform: scaleX(1)\n            }\n        }\n\n        .pulse[_ngcontent-%COMP%] {\n            animation-name: pulse\n        }\n\n        @keyframes rubberBand {\n            0% {\n                transform: scaleX(1)\n            }\n\n            30% {\n                transform: scale3d(1.25, .75, 1)\n            }\n\n            40% {\n                transform: scale3d(.75, 1.25, 1)\n            }\n\n            50% {\n                transform: scale3d(1.15, .85, 1)\n            }\n\n            65% {\n                transform: scale3d(.95, 1.05, 1)\n            }\n\n            75% {\n                transform: scale3d(1.05, .95, 1)\n            }\n\n            to {\n                transform: scaleX(1)\n            }\n        }\n\n        .rubberBand[_ngcontent-%COMP%] {\n            animation-name: rubberBand\n        }\n\n        @keyframes shake {\n\n            0%,\n            to {\n                transform: translateZ(0)\n            }\n\n            10%,\n            30%,\n            50%,\n            70%,\n            90% {\n                transform: translate3d(-10px, 0, 0)\n            }\n\n            20%,\n            40%,\n            60%,\n            80% {\n                transform: translate3d(10px, 0, 0)\n            }\n        }\n\n        .shake[_ngcontent-%COMP%] {\n            animation-name: shake\n        }\n\n        @keyframes headShake {\n            0% {\n                transform: translateX(0)\n            }\n\n            6.5% {\n                transform: translateX(-6px) rotateY(-9deg)\n            }\n\n            18.5% {\n                transform: translateX(5px) rotateY(7deg)\n            }\n\n            31.5% {\n                transform: translateX(-3px) rotateY(-5deg)\n            }\n\n            43.5% {\n                transform: translateX(2px) rotateY(3deg)\n            }\n\n            50% {\n                transform: translateX(0)\n            }\n        }\n\n        .headShake[_ngcontent-%COMP%] {\n            animation-timing-function: ease-in-out;\n            animation-name: headShake\n        }\n\n        @keyframes swing {\n            20% {\n                transform: rotate(15deg)\n            }\n\n            40% {\n                transform: rotate(-10deg)\n            }\n\n            60% {\n                transform: rotate(5deg)\n            }\n\n            80% {\n                transform: rotate(-5deg)\n            }\n\n            to {\n                transform: rotate(0deg)\n            }\n        }\n\n        .swing[_ngcontent-%COMP%] {\n            transform-origin: top center;\n            animation-name: swing\n        }\n\n        @keyframes tada {\n            0% {\n                transform: scaleX(1)\n            }\n\n            10%,\n            20% {\n                transform: scale3d(.9, .9, .9) rotate(-3deg)\n            }\n\n            30%,\n            50%,\n            70%,\n            90% {\n                transform: scale3d(1.1, 1.1, 1.1) rotate(3deg)\n            }\n\n            40%,\n            60%,\n            80% {\n                transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg)\n            }\n\n            to {\n                transform: scaleX(1)\n            }\n        }\n\n        .tada[_ngcontent-%COMP%] {\n            animation-name: tada\n        }\n\n        @keyframes wobble {\n            0% {\n                transform: translateZ(0)\n            }\n\n            15% {\n                transform: translate3d(-25%, 0, 0) rotate(-5deg)\n            }\n\n            30% {\n                transform: translate3d(20%, 0, 0) rotate(3deg)\n            }\n\n            45% {\n                transform: translate3d(-15%, 0, 0) rotate(-3deg)\n            }\n\n            60% {\n                transform: translate3d(10%, 0, 0) rotate(2deg)\n            }\n\n            75% {\n                transform: translate3d(-5%, 0, 0) rotate(-1deg)\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .wobble[_ngcontent-%COMP%] {\n            animation-name: wobble\n        }\n\n        @keyframes jello {\n\n            0%,\n            11.1%,\n            to {\n                transform: translateZ(0)\n            }\n\n            22.2% {\n                transform: skewX(-12.5deg) skewY(-12.5deg)\n            }\n\n            33.3% {\n                transform: skewX(6.25deg) skewY(6.25deg)\n            }\n\n            44.4% {\n                transform: skewX(-3.125deg) skewY(-3.125deg)\n            }\n\n            55.5% {\n                transform: skewX(1.5625deg) skewY(1.5625deg)\n            }\n\n            66.6% {\n                transform: skewX(-.78125deg) skewY(-.78125deg)\n            }\n\n            77.7% {\n                transform: skewX(.390625deg) skewY(.390625deg)\n            }\n\n            88.8% {\n                transform: skewX(-.1953125deg) skewY(-.1953125deg)\n            }\n        }\n\n        .jello[_ngcontent-%COMP%] {\n            animation-name: jello;\n            transform-origin: center\n        }\n\n        @keyframes heartBeat {\n            0% {\n                transform: scale(1)\n            }\n\n            14% {\n                transform: scale(1.3)\n            }\n\n            28% {\n                transform: scale(1)\n            }\n\n            42% {\n                transform: scale(1.3)\n            }\n\n            70% {\n                transform: scale(1)\n            }\n        }\n\n        .heartBeat[_ngcontent-%COMP%] {\n            animation-name: heartBeat;\n            animation-duration: 1.3s;\n            animation-timing-function: ease-in-out\n        }\n\n        @keyframes bounceIn {\n\n            0%,\n            20%,\n            40%,\n            60%,\n            80%,\n            to {\n                animation-timing-function: cubic-bezier(.215, .61, .355, 1)\n            }\n\n            0% {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3)\n            }\n\n            20% {\n                transform: scale3d(1.1, 1.1, 1.1)\n            }\n\n            40% {\n                transform: scale3d(.9, .9, .9)\n            }\n\n            60% {\n                opacity: 1;\n                transform: scale3d(1.03, 1.03, 1.03)\n            }\n\n            80% {\n                transform: scale3d(.97, .97, .97)\n            }\n\n            to {\n                opacity: 1;\n                transform: scaleX(1)\n            }\n        }\n\n        .bounceIn[_ngcontent-%COMP%] {\n            animation-duration: .75s;\n            animation-name: bounceIn\n        }\n\n        @keyframes bounceInDown {\n\n            0%,\n            60%,\n            75%,\n            90%,\n            to {\n                animation-timing-function: cubic-bezier(.215, .61, .355, 1)\n            }\n\n            0% {\n                opacity: 0;\n                transform: translate3d(0, -3000px, 0)\n            }\n\n            60% {\n                opacity: 1;\n                transform: translate3d(0, 25px, 0)\n            }\n\n            75% {\n                transform: translate3d(0, -10px, 0)\n            }\n\n            90% {\n                transform: translate3d(0, 5px, 0)\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .bounceInDown[_ngcontent-%COMP%] {\n            animation-name: bounceInDown\n        }\n\n        @keyframes bounceInLeft {\n\n            0%,\n            60%,\n            75%,\n            90%,\n            to {\n                animation-timing-function: cubic-bezier(.215, .61, .355, 1)\n            }\n\n            0% {\n                opacity: 0;\n                transform: translate3d(-3000px, 0, 0)\n            }\n\n            60% {\n                opacity: 1;\n                transform: translate3d(25px, 0, 0)\n            }\n\n            75% {\n                transform: translate3d(-10px, 0, 0)\n            }\n\n            90% {\n                transform: translate3d(5px, 0, 0)\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .bounceInLeft[_ngcontent-%COMP%] {\n            animation-name: bounceInLeft\n        }\n\n        @keyframes bounceInRight {\n\n            0%,\n            60%,\n            75%,\n            90%,\n            to {\n                animation-timing-function: cubic-bezier(.215, .61, .355, 1)\n            }\n\n            0% {\n                opacity: 0;\n                transform: translate3d(3000px, 0, 0)\n            }\n\n            60% {\n                opacity: 1;\n                transform: translate3d(-25px, 0, 0)\n            }\n\n            75% {\n                transform: translate3d(10px, 0, 0)\n            }\n\n            90% {\n                transform: translate3d(-5px, 0, 0)\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .bounceInRight[_ngcontent-%COMP%] {\n            animation-name: bounceInRight\n        }\n\n        @keyframes bounceInUp {\n\n            0%,\n            60%,\n            75%,\n            90%,\n            to {\n                animation-timing-function: cubic-bezier(.215, .61, .355, 1)\n            }\n\n            0% {\n                opacity: 0;\n                transform: translate3d(0, 3000px, 0)\n            }\n\n            60% {\n                opacity: 1;\n                transform: translate3d(0, -20px, 0)\n            }\n\n            75% {\n                transform: translate3d(0, 10px, 0)\n            }\n\n            90% {\n                transform: translate3d(0, -5px, 0)\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .bounceInUp[_ngcontent-%COMP%] {\n            animation-name: bounceInUp\n        }\n\n        @keyframes bounceOut {\n            20% {\n                transform: scale3d(.9, .9, .9)\n            }\n\n            50%,\n            55% {\n                opacity: 1;\n                transform: scale3d(1.1, 1.1, 1.1)\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3)\n            }\n        }\n\n        .bounceOut[_ngcontent-%COMP%] {\n            animation-duration: .75s;\n            animation-name: bounceOut\n        }\n\n        @keyframes bounceOutDown {\n            20% {\n                transform: translate3d(0, 10px, 0)\n            }\n\n            40%,\n            45% {\n                opacity: 1;\n                transform: translate3d(0, -20px, 0)\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(0, 2000px, 0)\n            }\n        }\n\n        .bounceOutDown[_ngcontent-%COMP%] {\n            animation-name: bounceOutDown\n        }\n\n        @keyframes bounceOutLeft {\n            20% {\n                opacity: 1;\n                transform: translate3d(20px, 0, 0)\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(-2000px, 0, 0)\n            }\n        }\n\n        .bounceOutLeft[_ngcontent-%COMP%] {\n            animation-name: bounceOutLeft\n        }\n\n        @keyframes bounceOutRight {\n            20% {\n                opacity: 1;\n                transform: translate3d(-20px, 0, 0)\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(2000px, 0, 0)\n            }\n        }\n\n        .bounceOutRight[_ngcontent-%COMP%] {\n            animation-name: bounceOutRight\n        }\n\n        @keyframes bounceOutUp {\n            20% {\n                transform: translate3d(0, -10px, 0)\n            }\n\n            40%,\n            45% {\n                opacity: 1;\n                transform: translate3d(0, 20px, 0)\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(0, -2000px, 0)\n            }\n        }\n\n        .bounceOutUp[_ngcontent-%COMP%] {\n            animation-name: bounceOutUp\n        }\n\n        @keyframes fadeIn {\n            0% {\n                opacity: 0\n            }\n\n            to {\n                opacity: 1\n            }\n        }\n\n        .fadeIn[_ngcontent-%COMP%] {\n            animation-name: fadeIn\n        }\n\n        @keyframes fadeInDown {\n            0% {\n                opacity: 0;\n                transform: translate3d(0, -100%, 0)\n            }\n\n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n\n        .fadeInDown[_ngcontent-%COMP%] {\n            animation-name: fadeInDown\n        }\n\n        @keyframes fadeInDownBig {\n            0% {\n                opacity: 0;\n                transform: translate3d(0, -2000px, 0)\n            }\n\n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n\n        .fadeInDownBig[_ngcontent-%COMP%] {\n            animation-name: fadeInDownBig\n        }\n\n        @keyframes fadeInLeft {\n            0% {\n                opacity: 0;\n                transform: translate3d(-100%, 0, 0)\n            }\n\n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n\n        .fadeInLeft[_ngcontent-%COMP%] {\n            animation-name: fadeInLeft\n        }\n\n        @keyframes fadeInLeftBig {\n            0% {\n                opacity: 0;\n                transform: translate3d(-2000px, 0, 0)\n            }\n\n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n\n        .fadeInLeftBig[_ngcontent-%COMP%] {\n            animation-name: fadeInLeftBig\n        }\n\n        @keyframes fadeInRight {\n            0% {\n                opacity: 0;\n                transform: translate3d(100%, 0, 0)\n            }\n\n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n\n        .fadeInRight[_ngcontent-%COMP%] {\n            animation-name: fadeInRight\n        }\n\n        @keyframes fadeInRightBig {\n            0% {\n                opacity: 0;\n                transform: translate3d(2000px, 0, 0)\n            }\n\n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n\n        .fadeInRightBig[_ngcontent-%COMP%] {\n            animation-name: fadeInRightBig\n        }\n\n        @keyframes fadeInUp {\n            0% {\n                opacity: 0;\n                transform: translate3d(0, 100%, 0)\n            }\n\n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n\n        .fadeInUp[_ngcontent-%COMP%] {\n            animation-name: fadeInUp\n        }\n\n        @keyframes fadeInUpBig {\n            0% {\n                opacity: 0;\n                transform: translate3d(0, 2000px, 0)\n            }\n\n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n\n        .fadeInUpBig[_ngcontent-%COMP%] {\n            animation-name: fadeInUpBig\n        }\n\n        @keyframes fadeOut {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0\n            }\n        }\n\n        .fadeOut[_ngcontent-%COMP%] {\n            animation-name: fadeOut\n        }\n\n        @keyframes fadeOutDown {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(0, 100%, 0)\n            }\n        }\n\n        .fadeOutDown[_ngcontent-%COMP%] {\n            animation-name: fadeOutDown\n        }\n\n        @keyframes fadeOutDownBig {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(0, 2000px, 0)\n            }\n        }\n\n        .fadeOutDownBig[_ngcontent-%COMP%] {\n            animation-name: fadeOutDownBig\n        }\n\n        @keyframes fadeOutLeft {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(-100%, 0, 0)\n            }\n        }\n\n        .fadeOutLeft[_ngcontent-%COMP%] {\n            animation-name: fadeOutLeft\n        }\n\n        @keyframes fadeOutLeftBig {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(-2000px, 0, 0)\n            }\n        }\n\n        .fadeOutLeftBig[_ngcontent-%COMP%] {\n            animation-name: fadeOutLeftBig\n        }\n\n        @keyframes fadeOutRight {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(100%, 0, 0)\n            }\n        }\n\n        .fadeOutRight[_ngcontent-%COMP%] {\n            animation-name: fadeOutRight\n        }\n\n        @keyframes fadeOutRightBig {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(2000px, 0, 0)\n            }\n        }\n\n        .fadeOutRightBig[_ngcontent-%COMP%] {\n            animation-name: fadeOutRightBig\n        }\n\n        @keyframes fadeOutUp {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(0, -100%, 0)\n            }\n        }\n\n        .fadeOutUp[_ngcontent-%COMP%] {\n            animation-name: fadeOutUp\n        }\n\n        @keyframes fadeOutUpBig {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(0, -2000px, 0)\n            }\n        }\n\n        .fadeOutUpBig[_ngcontent-%COMP%] {\n            animation-name: fadeOutUpBig\n        }\n\n        @keyframes flip {\n            0% {\n                transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);\n                animation-timing-function: ease-out\n            }\n\n            40% {\n                transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);\n                animation-timing-function: ease-out\n            }\n\n            50% {\n                transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);\n                animation-timing-function: ease-in\n            }\n\n            80% {\n                transform: perspective(400px) scale3d(.95, .95, .95) translateZ(0) rotateY(0deg);\n                animation-timing-function: ease-in\n            }\n\n            to {\n                transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);\n                animation-timing-function: ease-in\n            }\n        }\n\n        .animated.flip[_ngcontent-%COMP%] {\n            -webkit-backface-visibility: visible;\n            backface-visibility: visible;\n            animation-name: flip\n        }\n\n        @keyframes flipInX {\n            0% {\n                transform: perspective(400px) rotateX(90deg);\n                animation-timing-function: ease-in;\n                opacity: 0\n            }\n\n            40% {\n                transform: perspective(400px) rotateX(-20deg);\n                animation-timing-function: ease-in\n            }\n\n            60% {\n                transform: perspective(400px) rotateX(10deg);\n                opacity: 1\n            }\n\n            80% {\n                transform: perspective(400px) rotateX(-5deg)\n            }\n\n            to {\n                transform: perspective(400px)\n            }\n        }\n\n        .flipInX[_ngcontent-%COMP%] {\n            -webkit-backface-visibility: visible !important;\n            backface-visibility: visible !important;\n            animation-name: flipInX\n        }\n\n        @keyframes flipInY {\n            0% {\n                transform: perspective(400px) rotateY(90deg);\n                animation-timing-function: ease-in;\n                opacity: 0\n            }\n\n            40% {\n                transform: perspective(400px) rotateY(-20deg);\n                animation-timing-function: ease-in\n            }\n\n            60% {\n                transform: perspective(400px) rotateY(10deg);\n                opacity: 1\n            }\n\n            80% {\n                transform: perspective(400px) rotateY(-5deg)\n            }\n\n            to {\n                transform: perspective(400px)\n            }\n        }\n\n        .flipInY[_ngcontent-%COMP%] {\n            -webkit-backface-visibility: visible !important;\n            backface-visibility: visible !important;\n            animation-name: flipInY\n        }\n\n        @keyframes flipOutX {\n            0% {\n                transform: perspective(400px)\n            }\n\n            30% {\n                transform: perspective(400px) rotateX(-20deg);\n                opacity: 1\n            }\n\n            to {\n                transform: perspective(400px) rotateX(90deg);\n                opacity: 0\n            }\n        }\n\n        .flipOutX[_ngcontent-%COMP%] {\n            animation-duration: .75s;\n            animation-name: flipOutX;\n            -webkit-backface-visibility: visible !important;\n            backface-visibility: visible !important\n        }\n\n        @keyframes flipOutY {\n            0% {\n                transform: perspective(400px)\n            }\n\n            30% {\n                transform: perspective(400px) rotateY(-15deg);\n                opacity: 1\n            }\n\n            to {\n                transform: perspective(400px) rotateY(90deg);\n                opacity: 0\n            }\n        }\n\n        .flipOutY[_ngcontent-%COMP%] {\n            animation-duration: .75s;\n            -webkit-backface-visibility: visible !important;\n            backface-visibility: visible !important;\n            animation-name: flipOutY\n        }\n\n        @keyframes lightSpeedIn {\n            0% {\n                transform: translate3d(100%, 0, 0) skewX(-30deg);\n                opacity: 0\n            }\n\n            60% {\n                transform: skewX(20deg);\n                opacity: 1\n            }\n\n            80% {\n                transform: skewX(-5deg)\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .lightSpeedIn[_ngcontent-%COMP%] {\n            animation-name: lightSpeedIn;\n            animation-timing-function: ease-out\n        }\n\n        @keyframes lightSpeedOut {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                transform: translate3d(100%, 0, 0) skewX(30deg);\n                opacity: 0\n            }\n        }\n\n        .lightSpeedOut[_ngcontent-%COMP%] {\n            animation-name: lightSpeedOut;\n            animation-timing-function: ease-in\n        }\n\n        @keyframes rotateIn {\n            0% {\n                transform-origin: center;\n                transform: rotate(-200deg);\n                opacity: 0\n            }\n\n            to {\n                transform-origin: center;\n                transform: translateZ(0);\n                opacity: 1\n            }\n        }\n\n        .rotateIn[_ngcontent-%COMP%] {\n            animation-name: rotateIn\n        }\n\n        @keyframes rotateInDownLeft {\n            0% {\n                transform-origin: left bottom;\n                transform: rotate(-45deg);\n                opacity: 0\n            }\n\n            to {\n                transform-origin: left bottom;\n                transform: translateZ(0);\n                opacity: 1\n            }\n        }\n\n        .rotateInDownLeft[_ngcontent-%COMP%] {\n            animation-name: rotateInDownLeft\n        }\n\n        @keyframes rotateInDownRight {\n            0% {\n                transform-origin: right bottom;\n                transform: rotate(45deg);\n                opacity: 0\n            }\n\n            to {\n                transform-origin: right bottom;\n                transform: translateZ(0);\n                opacity: 1\n            }\n        }\n\n        .rotateInDownRight[_ngcontent-%COMP%] {\n            animation-name: rotateInDownRight\n        }\n\n        @keyframes rotateInUpLeft {\n            0% {\n                transform-origin: left bottom;\n                transform: rotate(45deg);\n                opacity: 0\n            }\n\n            to {\n                transform-origin: left bottom;\n                transform: translateZ(0);\n                opacity: 1\n            }\n        }\n\n        .rotateInUpLeft[_ngcontent-%COMP%] {\n            animation-name: rotateInUpLeft\n        }\n\n        @keyframes rotateInUpRight {\n            0% {\n                transform-origin: right bottom;\n                transform: rotate(-90deg);\n                opacity: 0\n            }\n\n            to {\n                transform-origin: right bottom;\n                transform: translateZ(0);\n                opacity: 1\n            }\n        }\n\n        .rotateInUpRight[_ngcontent-%COMP%] {\n            animation-name: rotateInUpRight\n        }\n\n        @keyframes rotateOut {\n            0% {\n                transform-origin: center;\n                opacity: 1\n            }\n\n            to {\n                transform-origin: center;\n                transform: rotate(200deg);\n                opacity: 0\n            }\n        }\n\n        .rotateOut[_ngcontent-%COMP%] {\n            animation-name: rotateOut\n        }\n\n        @keyframes rotateOutDownLeft {\n            0% {\n                transform-origin: left bottom;\n                opacity: 1\n            }\n\n            to {\n                transform-origin: left bottom;\n                transform: rotate(45deg);\n                opacity: 0\n            }\n        }\n\n        .rotateOutDownLeft[_ngcontent-%COMP%] {\n            animation-name: rotateOutDownLeft\n        }\n\n        @keyframes rotateOutDownRight {\n            0% {\n                transform-origin: right bottom;\n                opacity: 1\n            }\n\n            to {\n                transform-origin: right bottom;\n                transform: rotate(-45deg);\n                opacity: 0\n            }\n        }\n\n        .rotateOutDownRight[_ngcontent-%COMP%] {\n            animation-name: rotateOutDownRight\n        }\n\n        @keyframes rotateOutUpLeft {\n            0% {\n                transform-origin: left bottom;\n                opacity: 1\n            }\n\n            to {\n                transform-origin: left bottom;\n                transform: rotate(-45deg);\n                opacity: 0\n            }\n        }\n\n        .rotateOutUpLeft[_ngcontent-%COMP%] {\n            animation-name: rotateOutUpLeft\n        }\n\n        @keyframes rotateOutUpRight {\n            0% {\n                transform-origin: right bottom;\n                opacity: 1\n            }\n\n            to {\n                transform-origin: right bottom;\n                transform: rotate(90deg);\n                opacity: 0\n            }\n        }\n\n        .rotateOutUpRight[_ngcontent-%COMP%] {\n            animation-name: rotateOutUpRight\n        }\n\n        @keyframes hinge {\n            0% {\n                transform-origin: top left;\n                animation-timing-function: ease-in-out\n            }\n\n            20%,\n            60% {\n                transform: rotate(80deg);\n                transform-origin: top left;\n                animation-timing-function: ease-in-out\n            }\n\n            40%,\n            80% {\n                transform: rotate(60deg);\n                transform-origin: top left;\n                animation-timing-function: ease-in-out;\n                opacity: 1\n            }\n\n            to {\n                transform: translate3d(0, 700px, 0);\n                opacity: 0\n            }\n        }\n\n        .hinge[_ngcontent-%COMP%] {\n            animation-duration: 2s;\n            animation-name: hinge\n        }\n\n        @keyframes jackInTheBox {\n            0% {\n                opacity: 0;\n                transform: scale(.1) rotate(30deg);\n                transform-origin: center bottom\n            }\n\n            50% {\n                transform: rotate(-10deg)\n            }\n\n            70% {\n                transform: rotate(3deg)\n            }\n\n            to {\n                opacity: 1;\n                transform: scale(1)\n            }\n        }\n\n        .jackInTheBox[_ngcontent-%COMP%] {\n            animation-name: jackInTheBox\n        }\n\n        @keyframes rollIn {\n            0% {\n                opacity: 0;\n                transform: translate3d(-100%, 0, 0) rotate(-120deg)\n            }\n\n            to {\n                opacity: 1;\n                transform: translateZ(0)\n            }\n        }\n\n        .rollIn[_ngcontent-%COMP%] {\n            animation-name: rollIn\n        }\n\n        @keyframes rollOut {\n            0% {\n                opacity: 1\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(100%, 0, 0) rotate(120deg)\n            }\n        }\n\n        .rollOut[_ngcontent-%COMP%] {\n            animation-name: rollOut\n        }\n\n        @keyframes zoomIn {\n            0% {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3)\n            }\n\n            50% {\n                opacity: 1\n            }\n        }\n\n        .zoomIn[_ngcontent-%COMP%] {\n            animation-name: zoomIn\n        }\n\n        @keyframes zoomInDown {\n            0% {\n                opacity: 0;\n                transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n                animation-timing-function: cubic-bezier(.55, .055, .675, .19)\n            }\n\n            60% {\n                opacity: 1;\n                transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n                animation-timing-function: cubic-bezier(.175, .885, .32, 1)\n            }\n        }\n\n        .zoomInDown[_ngcontent-%COMP%] {\n            animation-name: zoomInDown\n        }\n\n        @keyframes zoomInLeft {\n            0% {\n                opacity: 0;\n                transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n                animation-timing-function: cubic-bezier(.55, .055, .675, .19)\n            }\n\n            60% {\n                opacity: 1;\n                transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n                animation-timing-function: cubic-bezier(.175, .885, .32, 1)\n            }\n        }\n\n        .zoomInLeft[_ngcontent-%COMP%] {\n            animation-name: zoomInLeft\n        }\n\n        @keyframes zoomInRight {\n            0% {\n                opacity: 0;\n                transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n                animation-timing-function: cubic-bezier(.55, .055, .675, .19)\n            }\n\n            60% {\n                opacity: 1;\n                transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n                animation-timing-function: cubic-bezier(.175, .885, .32, 1)\n            }\n        }\n\n        .zoomInRight[_ngcontent-%COMP%] {\n            animation-name: zoomInRight\n        }\n\n        @keyframes zoomInUp {\n            0% {\n                opacity: 0;\n                transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n                animation-timing-function: cubic-bezier(.55, .055, .675, .19)\n            }\n\n            60% {\n                opacity: 1;\n                transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n                animation-timing-function: cubic-bezier(.175, .885, .32, 1)\n            }\n        }\n\n        .zoomInUp[_ngcontent-%COMP%] {\n            animation-name: zoomInUp\n        }\n\n        @keyframes zoomOut {\n            0% {\n                opacity: 1\n            }\n\n            50% {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3)\n            }\n\n            to {\n                opacity: 0\n            }\n        }\n\n        .zoomOut[_ngcontent-%COMP%] {\n            animation-name: zoomOut\n        }\n\n        @keyframes zoomOutDown {\n            40% {\n                opacity: 1;\n                transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n                animation-timing-function: cubic-bezier(.55, .055, .675, .19)\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n                transform-origin: center bottom;\n                animation-timing-function: cubic-bezier(.175, .885, .32, 1)\n            }\n        }\n\n        .zoomOutDown[_ngcontent-%COMP%] {\n            animation-name: zoomOutDown\n        }\n\n        @keyframes zoomOutLeft {\n            40% {\n                opacity: 1;\n                transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0)\n            }\n\n            to {\n                opacity: 0;\n                transform: scale(.1) translate3d(-2000px, 0, 0);\n                transform-origin: left center\n            }\n        }\n\n        .zoomOutLeft[_ngcontent-%COMP%] {\n            animation-name: zoomOutLeft\n        }\n\n        @keyframes zoomOutRight {\n            40% {\n                opacity: 1;\n                transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0)\n            }\n\n            to {\n                opacity: 0;\n                transform: scale(.1) translate3d(2000px, 0, 0);\n                transform-origin: right center\n            }\n        }\n\n        .zoomOutRight[_ngcontent-%COMP%] {\n            animation-name: zoomOutRight\n        }\n\n        @keyframes zoomOutUp {\n            40% {\n                opacity: 1;\n                transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n                animation-timing-function: cubic-bezier(.55, .055, .675, .19)\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n                transform-origin: center bottom;\n                animation-timing-function: cubic-bezier(.175, .885, .32, 1)\n            }\n        }\n\n        .zoomOutUp[_ngcontent-%COMP%] {\n            animation-name: zoomOutUp\n        }\n\n        @keyframes slideInDown {\n            0% {\n                transform: translate3d(0, -100%, 0);\n                visibility: visible\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .slideInDown[_ngcontent-%COMP%] {\n            animation-name: slideInDown\n        }\n\n        @keyframes slideInLeft {\n            0% {\n                transform: translate3d(-100%, 0, 0);\n                visibility: visible\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .slideInLeft[_ngcontent-%COMP%] {\n            animation-name: slideInLeft\n        }\n\n        @keyframes slideInRight {\n            0% {\n                transform: translate3d(100%, 0, 0);\n                visibility: visible\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .slideInRight[_ngcontent-%COMP%] {\n            animation-name: slideInRight\n        }\n\n        @keyframes slideInUp {\n            0% {\n                transform: translate3d(0, 100%, 0);\n                visibility: visible\n            }\n\n            to {\n                transform: translateZ(0)\n            }\n        }\n\n        .slideInUp[_ngcontent-%COMP%] {\n            animation-name: slideInUp\n        }\n\n        @keyframes slideOutDown {\n            0% {\n                transform: translateZ(0)\n            }\n\n            to {\n                visibility: hidden;\n                transform: translate3d(0, 100%, 0)\n            }\n        }\n\n        .slideOutDown[_ngcontent-%COMP%] {\n            animation-name: slideOutDown\n        }\n\n        @keyframes slideOutLeft {\n            0% {\n                transform: translateZ(0)\n            }\n\n            to {\n                visibility: hidden;\n                transform: translate3d(-100%, 0, 0)\n            }\n        }\n\n        .slideOutLeft[_ngcontent-%COMP%] {\n            animation-name: slideOutLeft\n        }\n\n        @keyframes slideOutRight {\n            0% {\n                transform: translateZ(0)\n            }\n\n            to {\n                visibility: hidden;\n                transform: translate3d(100%, 0, 0)\n            }\n        }\n\n        .slideOutRight[_ngcontent-%COMP%] {\n            animation-name: slideOutRight\n        }\n\n        @keyframes slideOutUp {\n            0% {\n                transform: translateZ(0)\n            }\n\n            to {\n                visibility: hidden;\n                transform: translate3d(0, -100%, 0)\n            }\n        }\n\n        .slideOutUp[_ngcontent-%COMP%] {\n            animation-name: slideOutUp\n        }\n\n        .animated[_ngcontent-%COMP%] {\n            animation-duration: 1s;\n            animation-fill-mode: both\n        }\n\n        .animated.infinite[_ngcontent-%COMP%] {\n            animation-iteration-count: infinite\n        }\n\n        .animated.delay-1s[_ngcontent-%COMP%] {\n            animation-delay: 1s\n        }\n\n        .animated.delay-2s[_ngcontent-%COMP%] {\n            animation-delay: 2s\n        }\n\n        .animated.delay-3s[_ngcontent-%COMP%] {\n            animation-delay: 3s\n        }\n\n        .animated.delay-4s[_ngcontent-%COMP%] {\n            animation-delay: 4s\n        }\n\n        .animated.delay-5s[_ngcontent-%COMP%] {\n            animation-delay: 5s\n        }\n\n        .animated.fast[_ngcontent-%COMP%] {\n            animation-duration: .8s\n        }\n\n        .animated.faster[_ngcontent-%COMP%] {\n            animation-duration: .5s\n        }\n\n        .animated.slow[_ngcontent-%COMP%] {\n            animation-duration: 2s\n        }\n\n        .animated.slower[_ngcontent-%COMP%] {\n            animation-duration: 3s\n        }\n\n        @media (prefers-reduced-motion:reduce),\n        (print) {\n            .animated[_ngcontent-%COMP%] {\n                animation-duration: 1ms !important;\n                transition-duration: 1ms !important;\n                animation-iteration-count: 1 !important\n            }\n        }", "#sidebar[_ngcontent-%COMP%] {\n            overflow: hidden;\n            z-index: 3\n        }\n\n        #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n            min-width: 400px;\n            background-color: #333;\n            min-height: 100vh\n        }\n\n        #sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n            margin-right: 6px\n        }\n\n        #sidebar[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n            border-radius: 0;\n            background-color: #333;\n            color: #ccc;\n            border-left: 0;\n            border-right: 0;\n            border-color: #2c2c2c;\n            white-space: nowrap\n        }\n\n        #sidebar[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:not(.collapsed) {\n            background-color: #222\n        }\n\n        #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[aria-expanded=false][_ngcontent-%COMP%]:after {\n            content: \" \\F0D7\";\n            font-family: FontAwesome;\n            display: inline;\n            text-align: right;\n            padding-left: 5px\n        }\n\n        #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[aria-expanded=true][_ngcontent-%COMP%] {\n            background-color: #222\n        }\n\n        #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .list-group-item[aria-expanded=true][_ngcontent-%COMP%]:after {\n            content: \" \\F0DA\";\n            font-family: FontAwesome;\n            display: inline;\n            text-align: right;\n            padding-left: 5px\n        }\n\n        #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .collapsing[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n            padding-left: 20px\n        }\n\n        #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] > .collapse[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] > .collapsing[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n            padding-left: 30px\n        }\n\n        #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%] > .collapse[_ngcontent-%COMP%] > .collapse[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n            padding-left: 40px\n        }\n\n        @media (max-width:768px) {\n            #sidebar[_ngcontent-%COMP%] {\n                min-width: 35px;\n                max-width: 40px;\n                overflow-y: auto;\n                overflow-x: visible;\n                transition: all .25s ease;\n                transform: translateX(-45px);\n                position: fixed\n            }\n\n            #sidebar.show[_ngcontent-%COMP%] {\n                transform: translateX(0)\n            }\n\n            #sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n                width: 0\n            }\n\n            #sidebar[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n                min-width: 35px;\n                overflow: visible\n            }\n\n            #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .collapse.show[_ngcontent-%COMP%], #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .collapsing[_ngcontent-%COMP%] {\n                position: relative;\n                z-index: 1;\n                width: 190px;\n                top: 0\n            }\n\n            #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%] {\n                text-align: center;\n                padding: .75rem .5rem\n            }\n\n            #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] > .list-group-item[aria-expanded=false][_ngcontent-%COMP%]:after, #sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] > .list-group-item[aria-expanded=true][_ngcontent-%COMP%]:after {\n                display: none\n            }\n        }\n\n        .collapse.show[_ngcontent-%COMP%], .collapsing[_ngcontent-%COMP%] {\n            visibility: visible\n        }\n\n        .collapsing[_ngcontent-%COMP%] {\n            height: 0;\n            transition-property: height, visibility;\n            transition-timing-function: ease-out\n        }\n\n        .collapsing.width[_ngcontent-%COMP%] {\n            transition-property: width, visibility;\n            width: 0;\n            height: 100%;\n            transition-timing-function: ease-out\n        }", "#mainNav.fixed-top.navbar-dark[_ngcontent-%COMP%]   .sidenav-toggler[_ngcontent-%COMP%] {\n            background-color: #212529\n        }\n\n        #mainNav.fixed-top[_ngcontent-%COMP%]   .sidenav-toggler[_ngcontent-%COMP%] {\n            display: none\n        }\n\n        #mainNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n            cursor: pointer\n        }\n\n        #container-sidebar-with-navbar.fixed-nav[_ngcontent-%COMP%] {\n            margin-top: 4.7rem\n        }\n\n        #container-sidebar-with-navbar[_ngcontent-%COMP%] {\n            overflow-x: hidden\n        }\n\n        #mainNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n            overflow: auto;\n            max-height: 75vh\n        }\n\n        .content-wrapper[_ngcontent-%COMP%] {\n            padding-top: 1rem;\n            overflow-x: hidden;\n            background: #fff\n        }\n\n        @media (max-width:767px) {\n            #mainNav[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n                padding-left: .5rem\n            }\n        }\n\n        @media (min-width:768px) {\n            #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n                width: 250px\n            }\n\n            #mainNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                overflow-x: hidden;\n                overflow-y: auto;\n                flex-direction: column;\n                margin-top: 4.7rem\n            }\n\n            .content-wrapper[_ngcontent-%COMP%] {\n                margin-left: 250px\n            }\n\n            #mainNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.dropdown[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n                min-width: 0;\n                position: relative;\n                min-width: 45px\n            }\n\n            #mainNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > .nav-item.dropdown[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n                position: absolute;\n                top: 5px;\n                left: 21px;\n                font-size: 10px\n            }\n\n            #mainNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n                overflow: visible;\n                max-height: none\n            }\n\n            #mainNav.fixed-top[_ngcontent-%COMP%]   .sidenav-toggler[_ngcontent-%COMP%] > .nav-item[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%], #mainNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n                padding: 1em\n            }\n\n            #mainNav[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n                width: 250px;\n                padding: 0\n            }\n\n            #mainNav.navbar-dark[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%] {\n                background: #343a40\n            }\n\n            #mainNav.fixed-top[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%] {\n                height: 100vh\n            }\n\n            #mainNav.fixed-top[_ngcontent-%COMP%]   .sidenav-toggler[_ngcontent-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                display: flex;\n                overflow-x: hidden;\n                overflow-y: auto;\n                flex-direction: column;\n                margin-top: calc(100vh - 3.7rem)\n            }\n\n            #mainNav.fixed-top[_ngcontent-%COMP%]   .sidenav-toggler[_ngcontent-%COMP%] > .nav-item[_ngcontent-%COMP%] {\n                width: 250px;\n                padding: 0\n            }\n\n            #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n                margin-left: 55px\n            }\n\n            #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:after, #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%]   .nav-link-text[_ngcontent-%COMP%], #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:after {\n                display: none\n            }\n\n            #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   #mainNav.fixed-top[_ngcontent-%COMP%]   .sidenav-toggler[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%], #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   #mainNav.fixed-top[_ngcontent-%COMP%]   .sidenav-toggler[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n                width: 55px !important\n            }\n\n            #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%] {\n                overflow-x: hidden;\n                width: 55px\n            }\n\n            #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%], #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   .navbar-sidenav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n                width: 55px !important\n            }\n\n            #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   .navbar-sidenav-tooltip.show[_ngcontent-%COMP%] {\n                display: flex\n            }\n\n            #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   #mainNav.fixed-top[_ngcontent-%COMP%]   #sidenavToggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], #container-sidebar-with-navbar.sidenav-toggled[_ngcontent-%COMP%]   #mainNav.static-top[_ngcontent-%COMP%]   #sidenavToggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n                transform: scaleX(-1);\n                filter: FlipH;\n                -ms-filter: \"FlipH\"\n            }\n\n            .navbar-sidenav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] {\n                height: 100%\n            }\n        }", ".navbar__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            height: auto;\n            width: auto;\n            max-height: 50px;\n            max-width: 300px\n        }\n\n        .navbar__logo--medium[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            height: auto;\n            width: auto;\n            max-height: 90px;\n            max-width: 150px\n        }\n\n        .navbar__logo--large[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            height: auto;\n            width: auto;\n            max-height: 175px\n        }\n\n        .navbar__icons[_ngcontent-%COMP%]   .navbar__icon[_ngcontent-%COMP%] {\n            padding-right: .5rem;\n            padding-left: .5rem\n        }\n\n        section[id-section=navigation_primary][_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n            margin-bottom: 0 !important\n        }\n\n        section[id-section=navigation_primary][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n            cursor: pointer\n        }\n\n        .draft-editor-bottom[_ngcontent-%COMP%]   .rdw-editor-toolbar[_ngcontent-%COMP%] {\n            position: relative;\n            margin-top: 50px;\n            position: absolute;\n            right: unset\n        }\n\n        .navbar__border-b[_ngcontent-%COMP%] {\n            border-bottom: 1px solid rgba(0, 0, 0, .11)\n        }\n\n        .navbar__form-search[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n            outline: none;\n            box-sizing: border-box\n        }\n\n        .navbar__form-search[_ngcontent-%COMP%]   .search__wrapper[_ngcontent-%COMP%] {\n            position: relative\n        }\n\n        .navbar__form-search[_ngcontent-%COMP%]   .search__field[_ngcontent-%COMP%] {\n            background-color: transparent;\n            width: 50px;\n            color: transparent;\n            border: 1px solid transparent;\n            cursor: pointer;\n            transition: all .3s ease-in-out\n        }\n\n        .navbar__form-search[_ngcontent-%COMP%]   .search__field[_ngcontent-%COMP%]::placeholder {\n            visibility: hidden\n        }\n\n        .navbar__form-search[_ngcontent-%COMP%]   .search__field.active[_ngcontent-%COMP%], .navbar__form-search[_ngcontent-%COMP%]   .search__field[_ngcontent-%COMP%]:focus {\n            padding: .35em 50px .35em 7px;\n            background-color: #fff;\n            border-bottom-color: #ccc;\n            width: 100%;\n            max-width: 22vw;\n            color: #2b2b2b;\n            cursor: text\n        }\n\n        .navbar__form-search[_ngcontent-%COMP%]   .search__field.active[_ngcontent-%COMP%] + .search__icon[_ngcontent-%COMP%], .navbar__form-search[_ngcontent-%COMP%]   .search__field[_ngcontent-%COMP%]:focus + .search__icon[_ngcontent-%COMP%] {\n            background-color: transparent;\n            cursor: pointer;\n            pointer-events: auto;\n            color: #000\n        }\n\n        .navbar__form-search[_ngcontent-%COMP%]   .search__field.active[_ngcontent-%COMP%]::placeholder, .navbar__form-search[_ngcontent-%COMP%]   .search__field[_ngcontent-%COMP%]:focus::placeholder {\n            visibility: visible;\n            position: relative;\n            top: 0;\n            left: 0;\n            transition-property: top, color;\n            transition-duration: .1s;\n            transform: translateZ(0);\n            backface-visibility: hidden;\n            perspective: 1000\n        }\n\n        .navbar__form-search[_ngcontent-%COMP%]   .search__icon[_ngcontent-%COMP%] {\n            outline: none;\n            position: absolute;\n            top: 0;\n            right: 0;\n            color: inherit;\n            background-color: inherit;\n            width: 50px;\n            height: 100%;\n            border-color: transparent;\n            border-radius: 50%;\n            pointer-events: none;\n            display: inline-block;\n            transition: background-color .2s ease-in-out\n        }\n\n        .spaced-container[_ngcontent-%COMP%]   div[navbar-container][_ngcontent-%COMP%]   div[bg-for][_ngcontent-%COMP%] {\n            margin: .25rem .5rem;\n            box-shadow: 0 1px 2px rgba(0, 0, 0, .3)\n        }\n\n        .spaced-container[_ngcontent-%COMP%]   div[navbar-container][_ngcontent-%COMP%]:last-of-type   div[bg-for][_ngcontent-%COMP%] {\n            margin-bottom: .5rem\n        }\n\n        @media (min-width:768px) {\n            section[data-tpl=Tpl04][_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n                padding: 0\n            }\n\n            section[data-tpl=Tpl04][_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n                min-width: 200px\n            }\n\n            section[data-tpl=Tpl04][_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n                height: 100vh\n            }\n\n            section[data-tpl=Tpl04][_ngcontent-%COMP%]   .snipTest[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n                padding: .5rem\n            }\n        }\n\n        @media (max-width:768px) {\n            section[data-tpl=Tpl04][_ngcontent-%COMP%] {\n                width: 100%\n            }\n\n            .snipTest.snipDefault[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n                padding-top: .9rem;\n                padding-bottom: .9rem\n            }\n        }\n\n        .snipTest[_ngcontent-%COMP%]:not(.snipDefault)   .nav-link[_ngcontent-%COMP%] {\n            padding: 0\n        }\n\n        .snipTest[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n            transition: all .35s ease\n        }\n\n        @media (min-width:768px) {\n            .snipTest[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n                padding-right: .5rem;\n                padding-left: .5rem\n            }\n        }\n\n        .snip1143[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n            overflow: hidden\n        }\n\n        .snip1143[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            padding: 0 !important;\n            position: relative;\n            letter-spacing: 1px\n        }\n\n        .snip1143[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .snip1143[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            position: absolute;\n            transition: all .35s ease\n        }\n\n        .snip1143[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            top: 100%;\n            display: block;\n            height: 3px;\n            width: 100%;\n            content: \"\";\n            background-color: #c0392b;\n            left: 0\n        }\n\n        .snip1143[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n            position: absolute;\n            top: 100%;\n            left: 0;\n            content: attr(data-hover);\n            white-space: nowrap;\n            width: 100%\n        }\n\n        .snip1143[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .snip1143[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n            transform: translateY(-100%)\n        }\n\n        .snip1135[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            padding: 0 !important;\n            color: hsla(0, 0%, 100%, .5);\n            position: relative;\n            letter-spacing: 1px;\n            text-decoration: none\n        }\n\n        .snip1135[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .snip1135[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            position: absolute;\n            transition: all .35s ease\n        }\n\n        .snip1135[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            bottom: 0;\n            display: block;\n            height: 3px;\n            width: 0;\n            content: \"\";\n            background-color: #2980b9\n        }\n\n        .snip1135[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n            left: 0;\n            top: 0;\n            padding: .5em 0;\n            position: absolute;\n            content: \"\";\n            white-space: nowrap;\n            max-width: 0;\n            overflow: hidden\n        }\n\n        .snip1135[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after:hover {\n            content: attr(data-hover);\n            color: #fff\n        }\n\n        .snip1135[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before, .snip1135[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\n            opacity: 1;\n            width: 100%\n        }\n\n        .snip1135[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .snip1135[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n            max-width: 100%\n        }\n\n        .snip1155[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            display: inline-block;\n            padding: .5em 17px !important;\n            color: hsla(0, 0%, 100%, .5);\n            position: relative;\n            letter-spacing: 1px;\n            text-decoration: none\n        }\n\n        .snip1155[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            left: 20%;\n            right: 20%;\n            top: 50%;\n            content: \"\";\n            border-left: 12px solid #9b59b6;\n            border-right: 12px solid #9b59b6;\n            transform: translateY(-50%);\n            height: 3px;\n            opacity: 0;\n            position: absolute;\n            transition: all .35s ease\n        }\n\n        .snip1155[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .snip1155[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            color: #fff\n        }\n\n        .snip1155[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before, .snip1155[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\n            left: 0;\n            right: 0;\n            opacity: 1\n        }\n\n        .snip1168[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            padding: .5em 0 !important;\n            color: hsla(0, 0%, 100%, .5);\n            position: relative;\n            letter-spacing: 1px;\n            text-decoration: none\n        }\n\n        .snip1168[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .snip1168[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            position: absolute;\n            transition: all .35s ease\n        }\n\n        .snip1168[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            top: 0;\n            display: block;\n            height: 3px;\n            width: 0;\n            content: \"\";\n            background-color: #c0392b\n        }\n\n        .snip1168[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n            left: 0;\n            top: 0;\n            padding: .5em 0;\n            position: absolute;\n            content: attr(data-hover);\n            color: #fff;\n            white-space: nowrap;\n            max-width: 0;\n            overflow: hidden\n        }\n\n        .snip1168[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before.active, .snip1168[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\n            opacity: 1;\n            width: 100%\n        }\n\n        .snip1168[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after.active, .snip1168[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n            max-width: 100%\n        }\n\n        .snip1189[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            padding: .5rem .8rem !important;\n            margin: .2em 0;\n            color: hsla(0, 0%, 100%, .5);\n            position: relative;\n            text-decoration: none\n        }\n\n        .snip1189[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .snip1189[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            height: 14px;\n            width: 14px;\n            position: absolute;\n            content: \"\";\n            transition: all .35s ease;\n            opacity: 0\n        }\n\n        .snip1189[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            left: 0;\n            top: 0;\n            border-left: 3px solid #c0392b;\n            border-top: 3px solid #c0392b;\n            transform: translate(100%, 50%)\n        }\n\n        .snip1189[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n            right: 0;\n            bottom: 0;\n            border-right: 3px solid #c0392b;\n            border-bottom: 3px solid #c0392b;\n            transform: translate(-100%, -50%)\n        }\n\n        .snip1189[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .snip1189[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            color: #fff\n        }\n\n        .snip1189[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after, .snip1189[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before, .snip1189[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .snip1189[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\n            transform: translate(0);\n            opacity: 1\n        }\n\n        .snip1198[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            padding: 0 .5rem !important;\n            color: hsla(0, 0%, 100%, .5);\n            position: relative;\n            text-decoration: none;\n            display: inline-block\n        }\n\n        .snip1198[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            position: absolute;\n            content: \"\";\n            transition: all .35s ease;\n            opacity: 0;\n            left: 15%;\n            right: 15%;\n            top: 0;\n            bottom: 0;\n            border-left: 3px solid #27ae60;\n            border-right: 3px solid #27ae60\n        }\n\n        .snip1198[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .snip1198[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            color: #fff\n        }\n\n        .snip1198[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before, .snip1198[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\n            opacity: 1;\n            left: 0;\n            right: 0\n        }\n\n        .snip1211[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            padding: .4em 0 !important;\n            color: hsla(0, 0%, 100%, .5);\n            position: relative;\n            text-decoration: none;\n            display: inline-block\n        }\n\n        .snip1211[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            position: absolute;\n            content: \"\";\n            transition: all .35s ease;\n            opacity: 0;\n            top: 25%;\n            bottom: 25%;\n            left: 0;\n            right: 0;\n            border-top: 3px solid #34495e;\n            border-bottom: 3px solid #34495e\n        }\n\n        .snip1211[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .snip1211[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            color: #fff\n        }\n\n        .snip1211[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before, .snip1211[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\n            opacity: 1;\n            top: 0;\n            bottom: 0\n        }\n\n        .snip1217[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            padding: .3em 0 !important;\n            color: hsla(0, 0%, 100%, .5);\n            position: relative;\n            text-decoration: none;\n            display: inline-block\n        }\n\n        .snip1217[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .snip1217[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            height: 3px;\n            position: absolute;\n            content: \"\";\n            transition: all .35s ease;\n            background-color: #9b59b6;\n            width: 0\n        }\n\n        .snip1217[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            top: 0;\n            left: 0\n        }\n\n        .snip1217[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n            bottom: 0;\n            right: 0\n        }\n\n        .snip1217[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .snip1217[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            color: #fff\n        }\n\n        .snip1217[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after, .snip1217[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before, .snip1217[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .snip1217[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\n            width: 100%\n        }\n\n        .snip1226[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n            overflow: hidden\n        }\n\n        .snip1226[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            padding: .3em 0 !important;\n            color: hsla(0, 0%, 100%, .5);\n            position: relative;\n            display: inline-block;\n            letter-spacing: 1px;\n            margin: 0;\n            text-decoration: none\n        }\n\n        .snip1226[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, .snip1226[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            position: absolute;\n            transition: all .35s ease\n        }\n\n        .snip1226[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n            bottom: 100%;\n            display: block;\n            height: 3px;\n            width: 100%;\n            content: \"\";\n            background-color: #e67e22\n        }\n\n        .snip1226[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n            padding: .3em 0;\n            position: absolute;\n            bottom: 100%;\n            left: 0;\n            content: attr(data-hover);\n            white-space: nowrap\n        }\n\n        .snip1226[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .snip1226[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n            transform: translateY(100%)\n        }\n\n        .counter-icon[_ngcontent-%COMP%] {\n            font-size: 90%;\n            line-height: inherit;\n            padding: 0 .4em\n        }\n\n        .list-accordion[_ngcontent-%COMP%] {\n            padding-left: .75rem;\n            border-top: 1px solid rgba(0, 0, 0, .15);\n            border-bottom: 1px solid rgba(0, 0, 0, .15)\n        }", ".login__container[_ngcontent-%COMP%] {\n            max-width: 390px;\n            margin: 1rem auto\n        }\n\n        .login__header[_ngcontent-%COMP%] {\n            text-align: center\n        }\n\n        .btns-forget-pwd[_ngcontent-%COMP%] {\n            display: inline-flex\n        }\n\n        .login-choice[_ngcontent-%COMP%], .login-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            text-align: center;\n            width: 100%\n        }\n\n        .login-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            font: 400 16px/1.5 Sailec-Regular, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\n            -webkit-font-smoothing: antialiased;\n            text-rendering: optimizeLegibility;\n            list-style: none;\n            box-sizing: inherit;\n            margin-bottom: 0;\n            font-family: Sailec-Regular;\n            color: #5b6987;\n            display: grid;\n            font-size: 16px;\n            line-height: 26px;\n            align-items: center;\n            grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);\n            grid-gap: 19px\n        }\n\n        .login-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .login-choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n            content: \"\";\n            border-top: 1px solid #e5e8ed\n        }", "h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]:not(i) {\n            font-family: 'Roboto', cursive !important\n        }\n\n        p[_ngcontent-%COMP%] {\n            font-family: 'Open Sans', cursive !important\n        }\n\n        h1[_ngcontent-%COMP%] {\n            font-size: 2.5rem;\n        }\n\n        h2[_ngcontent-%COMP%] {\n            font-size: 2rem;\n        }\n\n        h3[_ngcontent-%COMP%] {\n            font-size: 1.75rem;\n        }\n\n        p[_ngcontent-%COMP%] {\n            font-size: 1rem;\n        }", "", ".fb_hidden[_ngcontent-%COMP%] {\n            position: absolute;\n            top: -10000px;\n            z-index: 10001\n        }\n\n        .fb_reposition[_ngcontent-%COMP%] {\n            overflow: hidden;\n            position: relative\n        }\n\n        .fb_invisible[_ngcontent-%COMP%] {\n            display: none\n        }\n\n        .fb_reset[_ngcontent-%COMP%] {\n            background: none;\n            border: 0;\n            border-spacing: 0;\n            color: #000;\n            cursor: auto;\n            direction: ltr;\n            font-family: \"lucida grande\", tahoma, verdana, arial, sans-serif;\n            font-size: 11px;\n            font-style: normal;\n            font-variant: normal;\n            font-weight: normal;\n            letter-spacing: normal;\n            line-height: 1;\n            margin: 0;\n            overflow: visible;\n            padding: 0;\n            text-align: left;\n            text-decoration: none;\n            text-indent: 0;\n            text-shadow: none;\n            text-transform: none;\n            visibility: visible;\n            white-space: normal;\n            word-spacing: normal\n        }\n\n        .fb_reset[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n            overflow: hidden\n        }\n\n        @keyframes fb_transform {\n            from {\n                opacity: 0;\n                transform: scale(.95)\n            }\n\n            to {\n                opacity: 1;\n                transform: scale(1)\n            }\n        }\n\n        .fb_animate[_ngcontent-%COMP%] {\n            animation: fb_transform .3s forwards\n        }\n\n        .fb_dialog[_ngcontent-%COMP%] {\n            background: rgba(82, 82, 82, .7);\n            position: absolute;\n            top: -10000px;\n            z-index: 10001\n        }\n\n        .fb_dialog_advanced[_ngcontent-%COMP%] {\n            border-radius: 8px;\n            padding: 10px\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%] {\n            background: #fff;\n            color: #373737\n        }\n\n        .fb_dialog_close_icon[_ngcontent-%COMP%] {\n            background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;\n            cursor: pointer;\n            display: block;\n            height: 15px;\n            position: absolute;\n            right: 18px;\n            top: 17px;\n            width: 15px\n        }\n\n        .fb_dialog_mobile[_ngcontent-%COMP%]   .fb_dialog_close_icon[_ngcontent-%COMP%] {\n            left: 5px;\n            right: auto;\n            top: 5px\n        }\n\n        .fb_dialog_padding[_ngcontent-%COMP%] {\n            background-color: transparent;\n            position: absolute;\n            width: 1px;\n            z-index: -1\n        }\n\n        .fb_dialog_close_icon[_ngcontent-%COMP%]:hover {\n            background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent\n        }\n\n        .fb_dialog_close_icon[_ngcontent-%COMP%]:active {\n            background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent\n        }\n\n        .fb_dialog_iframe[_ngcontent-%COMP%] {\n            line-height: 0\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_title[_ngcontent-%COMP%] {\n            background: #6d84b4;\n            border: 1px solid #365899;\n            color: #fff;\n            font-size: 14px;\n            font-weight: bold;\n            margin: 0\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n            background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;\n            float: left;\n            padding: 5px 0 7px 26px\n        }\n\n        body.fb_hidden[_ngcontent-%COMP%] {\n            height: 100%;\n            left: 0;\n            margin: 0;\n            overflow: visible;\n            position: absolute;\n            top: -10000px;\n            transform: none;\n            width: 100%\n        }\n\n        .fb_dialog.fb_dialog_mobile.loading[_ngcontent-%COMP%] {\n            background: url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;\n            min-height: 100%;\n            min-width: 100%;\n            overflow: hidden;\n            position: absolute;\n            top: 0;\n            z-index: 10001\n        }\n\n        .fb_dialog.fb_dialog_mobile.loading.centered[_ngcontent-%COMP%] {\n            background: none;\n            height: auto;\n            min-height: initial;\n            min-width: initial;\n            width: auto\n        }\n\n        .fb_dialog.fb_dialog_mobile.loading.centered[_ngcontent-%COMP%]   #fb_dialog_loader_spinner[_ngcontent-%COMP%] {\n            width: 100%\n        }\n\n        .fb_dialog.fb_dialog_mobile.loading.centered[_ngcontent-%COMP%]   .fb_dialog_content[_ngcontent-%COMP%] {\n            background: none\n        }\n\n        .loading.centered[_ngcontent-%COMP%]   #fb_dialog_loader_close[_ngcontent-%COMP%] {\n            clear: both;\n            color: #fff;\n            display: block;\n            font-size: 18px;\n            padding-top: 20px\n        }\n\n        #fb-root[_ngcontent-%COMP%]   #fb_dialog_ipad_overlay[_ngcontent-%COMP%] {\n            background: rgba(0, 0, 0, .4);\n            bottom: 0;\n            left: 0;\n            min-height: 100%;\n            position: absolute;\n            right: 0;\n            top: 0;\n            width: 100%;\n            z-index: 10000\n        }\n\n        #fb-root[_ngcontent-%COMP%]   #fb_dialog_ipad_overlay.hidden[_ngcontent-%COMP%] {\n            display: none\n        }\n\n        .fb_dialog.fb_dialog_mobile.loading[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n            visibility: hidden\n        }\n\n        .fb_dialog_mobile[_ngcontent-%COMP%]   .fb_dialog_iframe[_ngcontent-%COMP%] {\n            position: sticky;\n            top: 0\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_header[_ngcontent-%COMP%] {\n            background: linear-gradient(from(#738aba), to(#2c4987));\n            border-bottom: 1px solid;\n            border-color: #043b87;\n            box-shadow: white 0 1px 1px -1px inset;\n            color: #fff;\n            font: bold 14px Helvetica, sans-serif;\n            text-overflow: ellipsis;\n            text-shadow: rgba(0, 30, 84, .296875) 0 -1px 0;\n            vertical-align: middle;\n            white-space: nowrap\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_header[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n            height: 43px;\n            width: 100%\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_header[_ngcontent-%COMP%]   td.header_left[_ngcontent-%COMP%] {\n            font-size: 12px;\n            padding-left: 5px;\n            vertical-align: middle;\n            width: 60px\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_header[_ngcontent-%COMP%]   td.header_right[_ngcontent-%COMP%] {\n            font-size: 12px;\n            padding-right: 5px;\n            vertical-align: middle;\n            width: 60px\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .touchable_button[_ngcontent-%COMP%] {\n            background: linear-gradient(from(#4267B2), to(#2a4887));\n            background-clip: padding-box;\n            border: 1px solid #29487d;\n            border-radius: 3px;\n            display: inline-block;\n            line-height: 18px;\n            margin-top: 3px;\n            max-width: 85px;\n            padding: 4px 12px;\n            position: relative\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_header[_ngcontent-%COMP%]   .touchable_button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            background: none;\n            border: none;\n            color: #fff;\n            font: bold 12px Helvetica, sans-serif;\n            margin: 2px -12px;\n            padding: 2px 6px 3px 6px;\n            text-shadow: rgba(0, 30, 84, .296875) 0 -1px 0\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_header[_ngcontent-%COMP%]   .header_center[_ngcontent-%COMP%] {\n            color: #fff;\n            font-size: 16px;\n            font-weight: bold;\n            line-height: 18px;\n            text-align: center;\n            vertical-align: middle\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_content[_ngcontent-%COMP%] {\n            background: url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;\n            border: 1px solid #4a4a4a;\n            border-bottom: 0;\n            border-top: 0;\n            height: 150px\n        }\n\n        .fb_dialog_content[_ngcontent-%COMP%]   .dialog_footer[_ngcontent-%COMP%] {\n            background: #f5f6f7;\n            border: 1px solid #4a4a4a;\n            border-top-color: #ccc;\n            height: 40px\n        }\n\n        #fb_dialog_loader_close[_ngcontent-%COMP%] {\n            float: left\n        }\n\n        .fb_dialog.fb_dialog_mobile[_ngcontent-%COMP%]   .fb_dialog_close_icon[_ngcontent-%COMP%] {\n            visibility: hidden\n        }\n\n        #fb_dialog_loader_spinner[_ngcontent-%COMP%] {\n            animation: rotateSpinner 1.2s linear infinite;\n            background-color: transparent;\n            background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);\n            background-position: 50% 50%;\n            background-repeat: no-repeat;\n            height: 24px;\n            width: 24px\n        }\n\n        @keyframes rotateSpinner {\n            0% {\n                transform: rotate(0deg)\n            }\n\n            100% {\n                transform: rotate(360deg)\n            }\n        }\n\n        .fb_iframe_widget[_ngcontent-%COMP%] {\n            display: inline-block;\n            position: relative\n        }\n\n        .fb_iframe_widget[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            display: inline-block;\n            position: relative;\n            text-align: justify\n        }\n\n        .fb_iframe_widget[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n            position: absolute\n        }\n\n        .fb_iframe_widget_fluid_desktop[_ngcontent-%COMP%], .fb_iframe_widget_fluid_desktop[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .fb_iframe_widget_fluid_desktop[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n            max-width: 100%\n        }\n\n        .fb_iframe_widget_fluid_desktop[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n            min-width: 220px;\n            position: relative\n        }\n\n        .fb_iframe_widget_lift[_ngcontent-%COMP%] {\n            z-index: 1\n        }\n\n        .fb_iframe_widget_fluid[_ngcontent-%COMP%] {\n            display: inline\n        }\n\n        .fb_iframe_widget_fluid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            width: 100%\n        }"];
var RenderType_LoginComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-help-block"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    Email is required\n                                "]))], null, null); }
function View_LoginComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-loading", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__shared_components_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_components_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_components_loading_loading_component__["a" /* LoadingComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LoginComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-alert we-alert-danger"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](1, null, ["\n                                ", "\n                            "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error; _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-help-block"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    Email is required\n                                "]))], null, null); }
function View_LoginComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-help-block"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    Password is required\n                                "]))], null, null); }
function View_LoginComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-loading", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__shared_components_loading_loading_component_ngfactory__["b" /* View_LoadingComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_components_loading_loading_component_ngfactory__["a" /* RenderType_LoadingComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_components_loading_loading_component__["a" /* LoadingComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LoginComponent_7(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-alert we-alert-danger"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](1, null, ["\n                                ", "\n                            "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error; _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_9(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-help-block"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    Email is required\n                                "]))], null, null); }
function View_LoginComponent_10(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 0, "img", [["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]], null, null, null, null, null))], null, null); }
function View_LoginComponent_11(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-alert we-alert-danger"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](1, null, ["\n                                ", "\n                            "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error; _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_8(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 45, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Mot de Passe oubli\u00E9"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](5, 0, null, null, 37, "form", [["name", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = ((__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).form.valid && _co.resetting()) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["y" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](7, 4210688, [["f2", 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["p" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["p" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["o" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](11, 0, null, null, 18, "div", [["class", "we-form-group"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](12, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵpod */](13, { "has-error": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](15, 0, null, null, 1, "label", [["for", "username"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Email"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](18, 0, null, null, 7, "input", [["class", "we-form-control"], ["name", "username"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.username = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](19, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](23, 671744, [["username", 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](25, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_9)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](31, 0, null, null, 7, "div", [["class", "we-form-group"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](33, 0, null, null, 1, "button", [["class", "we-btn we-btn-success"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    Changer mon mot de passe\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_10)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](37, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_11)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](41, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](44, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "we-form-group"; var currVal_8 = _ck(_v, 13, 0, (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 23).valid)); _ck(_v, 12, 0, currVal_7, currVal_8); var currVal_17 = ""; _ck(_v, 20, 0, currVal_17); var currVal_18 = "username"; var currVal_19 = _co.model.username; _ck(_v, 23, 0, currVal_18, currVal_19); var currVal_20 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 23).valid); _ck(_v, 28, 0, currVal_20); var currVal_22 = _co.loading; _ck(_v, 37, 0, currVal_22); var currVal_23 = _co.error; _ck(_v, 41, 0, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 20).required ? "" : null); var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassUntouched; var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassTouched; var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassPristine; var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassDirty; var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassValid; var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassInvalid; var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassPending; _ck(_v, 18, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_21 = _co.loading; _ck(_v, 33, 0, currVal_21); }); }
function View_LoginComponent_12(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Mot de Passe oubli\u00E9"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](7, 0, null, null, 9, "div", [["class", "we-alert we-alert-info"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](9, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                Un email vous a \u00E9t\u00E9 envoy\u00E9. Il contient un lien pour\n                                r\u00E9initialiser votre mot de passe. "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Ce lien n'est\n                                valable que 2 heures.\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                Si vous n'avez pas re\u00E7u d'email, v\u00E9rifiez vos spams ou\n                                recommencez la proc\u00E9dure.\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](18, 0, null, null, 4, "div", [["class", "we-text-right"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](20, 0, null, null, 1, "button", [["class", "we-btn we-btn-success"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEmailReceived() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                Retour\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "]))], null, null); }
function View_LoginComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_5__shared_pipes_safe_res_url_pipe__["a" /* SafeResUrlPipe */], [__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵqud */](402653184, 1, { app_iframe: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](2, 0, null, null, 352, "html", [["lang", "fr"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](4, 0, null, null, 68, "head", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](6, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["login"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](9, 0, null, null, 0, "meta", [["content", ""], ["name", "description"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](11, 0, null, null, 0, "meta", [["content", "login"], ["name", "og:title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](13, 0, null, null, 0, "meta", [["content", "login"], ["name", "twitter:title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](15, 0, null, null, 0, "meta", [["content", "http://www.wifeocms.com/se_connecter"], ["name", "og:url"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](17, 0, null, null, 0, "meta", [["content", "website"], ["name", "og:type"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](19, 0, null, null, 0, "meta", [["content", "summary"], ["name", "twitter:card"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](21, 0, null, null, 0, "meta", [["content", "fr"], ["http-equiv", "content-language"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](23, 0, null, null, 0, "meta", [["content", "R8_DoVQNDSu0N7iQeAxR-z8C3RtgbJXUtI5SsuHD8c8"], ["name", "google-site-verification"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](25, 0, null, null, 0, "meta", [["content", "width=device-width, initial-scale=1"], ["name", "viewport"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](27, 0, null, null, 0, "meta", [["charset", "utf-8"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](29, 0, null, null, 0, "link", [["href", "https://mediacache.epicred.fr/jjtatyd8x58ZMqjCVC4VnHi-h6A=/160x/wifeosite-storage.fra1.digitaloceanspaces.com/document/832D00A7-4E51-4438-8754-3BE4F30C3F34/9023842e-1a0e-4c04-b667-c4a2700117e2.png"], ["rel", "icon"], ["type", "image/x-icon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](36, 0, null, null, 0, "link", [["href", "https://use.fontawesome.com/releases/v5.13.0/css/all.css"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](38, 0, null, null, 0, "link", [["href", "https://editor.wifeosite.com/assets/css/styles.css?v=1580395078917"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](40, 0, null, null, 0, "link", [["href", "https://js.epicred.fr/js/d/d62/d62652a1776a1cbffadba7dacda71f4acce56cf7d1d1b78dd597be64ba82c336.css"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](68, 0, null, null, 0, "link", [["href", "https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap"], ["rel", "stylesheet"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](74, 0, null, null, 279, "body", [["id", "root"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](76, 0, null, null, 78, "div", [["id", "ctn_782715"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](78, 0, null, null, 75, "section", [["bg-type-section", "color"], ["class", "react-reveal none"], ["data-animation", "none"], ["data-rcpt", "navbar"], ["data-tpl", "tpl01"], ["id-section", "navigation_primary"], ["style", "animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1;"], ["type-section", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](80, 0, null, null, 72, "div", [["class", "pos-rel  "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](82, 0, null, null, 9, "div", [["class", "d-flex"], ["style", "position: absolute; inset: 0px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](84, 0, null, null, 6, "div", [["class", ""], ["style", "width: 100%;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](86, 0, null, null, 3, "div", [["bg-for", "section"], ["class", " rounded-0"], ["style", "height: 100%;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](88, 0, null, null, 0, "div", [["style", "background-color: rgb(255, 255, 255); height: 100%;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](93, 0, null, null, 58, "div", [["class", "pos-rel "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](95, 0, null, null, 55, "div", [["class", "pos-rel my-0 jumbotron-fluid"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](97, 0, null, null, 52, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](99, 0, null, null, 49, "div", [["class", "w-100"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](101, 0, null, null, 46, "div", [["class", "pt-0 pb-0"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](103, 0, null, null, 43, "div", [["class", ""], ["style", "padding: 0px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](105, 0, null, null, 40, "nav", [["class", "navbar navbar navbar-light navbar-expand-md "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](107, 0, null, null, 37, "div", [["class", " container-fluid"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](109, 0, null, null, 5, "div", [["class", "navbar-brand d-flex align-items-center mr-0 "]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](111, 0, null, null, 2, "div", [["class", "pos-rel navbar__logo "], ["data-type", "media"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](112, 0, null, null, 1, "a", [["href", "/"], ["target", "_self"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](113, 0, null, null, 0, "img", [["class", "img-fluid lazyautosizes lazyloaded"], ["data-expand", "300"], ["data-sizes", "auto"], ["data-srcset", "https://mediacache.epicred.fr/lj-rSKRvNrvAO4XNsvqlPJ5vAWA=/1920x/wifeosite-storage.fra1.digitaloceanspaces.com/document/832D00A7-4E51-4438-8754-3BE4F30C3F34/cf654132-e9ca-4100-bf13-4f621cd5d767.png 1x"], ["sizes", "101px"], ["src", "https://mediacache.epicred.fr/lj-rSKRvNrvAO4XNsvqlPJ5vAWA=/1920x/wifeosite-storage.fra1.digitaloceanspaces.com/document/832D00A7-4E51-4438-8754-3BE4F30C3F34/cf654132-e9ca-4100-bf13-4f621cd5d767.png"], ["srcset", "https://mediacache.epicred.fr/lj-rSKRvNrvAO4XNsvqlPJ5vAWA=/1920x/wifeosite-storage.fra1.digitaloceanspaces.com/document/832D00A7-4E51-4438-8754-3BE4F30C3F34/cf654132-e9ca-4100-bf13-4f621cd5d767.png 1x"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](116, 0, null, null, 3, "a", [["aria-controls", "navbarSupportedContentX"], ["aria-expanded", "true"], ["aria-label", "Toggle navigation"], ["class", "navbar-toggler"], ["data-target", "#navbarSupportedContentX"], ["data-toggle", "collapse"], ["style", "color: black;"], ["type", "button"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](117, 0, null, null, 0, "i", [["class", "fa fa-bars"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, [" "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](119, 0, null, null, 0, "i", [["class", "fas fa-caret-down"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](121, 0, null, null, 22, "div", [["class", "collapse navbar-collapse"], ["id", "navbarSupportedContentX"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](123, 0, null, null, 14, "ul", [["class", "navbar-nav ml-auto snipTest snipDefault"], ["style", "color: black;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](125, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](126, 0, null, null, 2, "a", [["class", "nav-link"], ["data-hover", "ACCUEIL"], ["href", "https://www.wifeo.com"], ["target", "_self"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](127, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["ACCUEIL"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](130, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](131, 0, null, null, 1, "a", [["class", "nav-link"], ["data-hover", "OFFRES"], ["href", "https://www.wifeocms.com/offres"], ["target", "_self"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["OFFRES"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](134, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](135, 0, null, null, 1, "a", [["class", "nav-link"], ["data-hover", "CR\u00C9ER UN SITE"], ["href", "https://www.wifeocms.com/creer_un_site"], ["target", "_self"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["CR\u00C9ER UN\n                                                                SITE"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](139, 0, null, null, 3, "div", [["class", "d-flex flex-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](141, 0, null, null, 0, "div", [["class", "order-1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](156, 0, null, null, 188, "div", [["class", "we-row"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](158, 0, null, null, 185, "div", [["class", "we-col-sm-12"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](160, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](162, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](164, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](167, 0, null, null, 170, "div", [["class", "we-container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](169, 0, null, null, 157, "div", [["class", "we-col-sm-6 we-mx-auto "]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](171, 0, null, null, 69, "div", [["class", "we-col-md-12 "]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](173, 0, null, null, 11, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](175, 0, null, null, 1, "span", [["style", "text-decoration: none;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["S'inscrire"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, [" /\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](178, 0, null, null, 5, "small", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](179, 0, null, null, 4, "small", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](181, 0, null, null, 1, "a", [["class", "we-alert-link"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setAction("login") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Se\n                                    connecter"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](186, 0, null, null, 51, "form", [["name", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 188).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 188).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = ((__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 188).form.valid && _co.register()) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](187, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["y" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](188, 4210688, [["f1", 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["p" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["p" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](190, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["o" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](192, 0, null, null, 18, "div", [["class", "we-form-group"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](193, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵpod */](194, { "we-has-error": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](196, 0, null, null, 1, "label", [["for", "username"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Email"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](199, 0, null, null, 7, "input", [["class", "we-form-control"], ["name", "username"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 200)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 200).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 200)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 200)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.username1 = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](200, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](201, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](204, 671744, [["username1", 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](206, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](209, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](212, 0, null, null, 15, "div", [["class", "we-form-group"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](213, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵpod */](214, { "we-has-error": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](216, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Mot de passe"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](219, 0, null, null, 7, "input", [["class", "we-form-control"], ["name", "password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 220)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 220).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 220)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 220)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.password1 = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](220, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](221, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](224, 671744, [["password1", 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](226, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](229, 0, null, null, 1, "button", [["class", "btn btn-primary btn-block px-4 cfg-btn-oval"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                S'inscrire\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](233, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](236, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](239, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](242, 0, null, null, 83, "div", [["class", "we-col-md-12 "]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](245, 0, null, null, 12, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](247, 0, null, null, 1, "span", [["style", "text-decoration: none;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Se connecter"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, [" /\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](250, 0, null, null, 6, "small", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](251, 0, null, null, 4, "small", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](253, 0, null, null, 1, "a", [["class", "we-alert-link"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setAction("register") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["S'inscrire"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](259, 0, null, null, 63, "form", [["name", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 261).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 261).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = ((__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 261).form.valid && _co.login()) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](260, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["y" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](261, 4210688, [["f", 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["p" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["p" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](263, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["o" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](265, 0, null, null, 18, "div", [["class", "we-form-group"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](266, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵpod */](267, { "we-has-error": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](269, 0, null, null, 1, "label", [["for", "username"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Email"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](272, 0, null, null, 7, "input", [["class", "we-form-control"], ["name", "username"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 273)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 273).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 273)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 273)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.username = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](273, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](274, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](277, 671744, [["username", 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](279, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](282, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](285, 0, null, null, 18, "div", [["class", "we-form-group"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](286, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵpod */](287, { "has-error": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](289, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Mot de passe"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](292, 0, null, null, 7, "input", [["class", "we-form-control"], ["name", "password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 293)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 293).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 293)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 293)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](293, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](294, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["u" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](297, 671744, [["password", 4]], 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](299, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](302, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](305, 0, null, null, 10, "div", [["class", "we-form-group"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](307, 0, null, null, 1, "button", [["class", "btn btn-primary btn-block px-4 cfg-btn-oval"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    Se connecter\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](310, 0, null, null, 4, "div", [["class", "we-text-right"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](312, 0, null, null, 1, "button", [["class", "btn btn-link px-0"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onResetPassword() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                        Mot de passe oubli\u00E9?\n                                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_6)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](318, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_7)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](321, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](324, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](328, 0, null, null, 8, "div", [["class", "we-col-sm-6 we-mx-auto "]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_8)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](332, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoginComponent_12)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](335, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](339, 0, [[1, 0], ["iframeContent", 1]], null, 2, "iframe", [["class", "iframeContent"], ["frameborder", "0"], ["id", "iframeContent"], ["name", "content"], ["style", "display:none;"]], [[8, "src", 5]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵppd */](340, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](346, 0, null, null, 6, "div", [["class", " fb_reset"], ["id", "fb-root"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](348, 0, null, null, 3, "div", [["style", "position: absolute; top: -10000px; width: 0px; height: 0px;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](350, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = "we-form-group"; var currVal_10 = _ck(_v, 194, 0, (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 188).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 204).valid)); _ck(_v, 193, 0, currVal_9, currVal_10); var currVal_19 = ""; _ck(_v, 201, 0, currVal_19); var currVal_20 = "username"; var currVal_21 = _co.model.username1; _ck(_v, 204, 0, currVal_20, currVal_21); var currVal_22 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 188).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 204).valid); _ck(_v, 209, 0, currVal_22); var currVal_23 = "we-form-group"; var currVal_24 = _ck(_v, 214, 0, (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 261).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 297).valid)); _ck(_v, 213, 0, currVal_23, currVal_24); var currVal_33 = ""; _ck(_v, 221, 0, currVal_33); var currVal_34 = "password"; var currVal_35 = _co.model.password1; _ck(_v, 224, 0, currVal_34, currVal_35); var currVal_37 = _co.loading; _ck(_v, 233, 0, currVal_37); var currVal_38 = _co.error; _ck(_v, 236, 0, currVal_38); var currVal_47 = "we-form-group"; var currVal_48 = _ck(_v, 267, 0, (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 261).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 277).valid)); _ck(_v, 266, 0, currVal_47, currVal_48); var currVal_57 = ""; _ck(_v, 274, 0, currVal_57); var currVal_58 = "username"; var currVal_59 = _co.model.username; _ck(_v, 277, 0, currVal_58, currVal_59); var currVal_60 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 261).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 277).valid); _ck(_v, 282, 0, currVal_60); var currVal_61 = "we-form-group"; var currVal_62 = _ck(_v, 287, 0, (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 261).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 297).valid)); _ck(_v, 286, 0, currVal_61, currVal_62); var currVal_71 = ""; _ck(_v, 294, 0, currVal_71); var currVal_72 = "password"; var currVal_73 = _co.model.password; _ck(_v, 297, 0, currVal_72, currVal_73); var currVal_74 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 261).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 297).valid); _ck(_v, 302, 0, currVal_74); var currVal_76 = _co.loading; _ck(_v, 318, 0, currVal_76); var currVal_77 = _co.error; _ck(_v, 321, 0, currVal_77); var currVal_79 = !_co.email_sended; _ck(_v, 332, 0, currVal_79); var currVal_80 = _co.email_sended; _ck(_v, 335, 0, currVal_80); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.reset; _ck(_v, 169, 0, currVal_0); var currVal_1 = _co.loginAction; _ck(_v, 171, 0, currVal_1); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 190).ngClassUntouched; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 190).ngClassTouched; var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 190).ngClassPristine; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 190).ngClassDirty; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 190).ngClassValid; var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 190).ngClassInvalid; var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 190).ngClassPending; _ck(_v, 186, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_11 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 201).required ? "" : null); var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 206).ngClassUntouched; var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 206).ngClassTouched; var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 206).ngClassPristine; var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 206).ngClassDirty; var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 206).ngClassValid; var currVal_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 206).ngClassInvalid; var currVal_18 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 206).ngClassPending; _ck(_v, 199, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_25 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 221).required ? "" : null); var currVal_26 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 226).ngClassUntouched; var currVal_27 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 226).ngClassTouched; var currVal_28 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 226).ngClassPristine; var currVal_29 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 226).ngClassDirty; var currVal_30 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 226).ngClassValid; var currVal_31 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 226).ngClassInvalid; var currVal_32 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 226).ngClassPending; _ck(_v, 219, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_36 = _co.loading; _ck(_v, 229, 0, currVal_36); var currVal_39 = !_co.loginAction; _ck(_v, 242, 0, currVal_39); var currVal_40 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 263).ngClassUntouched; var currVal_41 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 263).ngClassTouched; var currVal_42 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 263).ngClassPristine; var currVal_43 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 263).ngClassDirty; var currVal_44 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 263).ngClassValid; var currVal_45 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 263).ngClassInvalid; var currVal_46 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 263).ngClassPending; _ck(_v, 259, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46); var currVal_49 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 274).required ? "" : null); var currVal_50 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 279).ngClassUntouched; var currVal_51 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 279).ngClassTouched; var currVal_52 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 279).ngClassPristine; var currVal_53 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 279).ngClassDirty; var currVal_54 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 279).ngClassValid; var currVal_55 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 279).ngClassInvalid; var currVal_56 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 279).ngClassPending; _ck(_v, 272, 0, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56); var currVal_63 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 294).required ? "" : null); var currVal_64 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 299).ngClassUntouched; var currVal_65 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 299).ngClassTouched; var currVal_66 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 299).ngClassPristine; var currVal_67 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 299).ngClassDirty; var currVal_68 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 299).ngClassValid; var currVal_69 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 299).ngClassInvalid; var currVal_70 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 299).ngClassPending; _ck(_v, 292, 0, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70); var currVal_75 = _co.loading; _ck(_v, 307, 0, currVal_75); var currVal_78 = !_co.reset; _ck(_v, 328, 0, currVal_78); var currVal_81 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_44" /* ɵunv */](_v, 339, 0, _ck(_v, 340, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 0), _co.srcIframe)); _ck(_v, 339, 0, currVal_81); }); }
function View_LoginComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__login_component__["a" /* LoginComponent */], [__WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_10__services_errors_service__["a" /* ErrorsService */], __WEBPACK_IMPORTED_MODULE_11__shared_services_modal_service__["a" /* ModalService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵccf */]("ng-component", __WEBPACK_IMPORTED_MODULE_7__login_component__["a" /* LoginComponent */], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/global/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, errService, modalService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.errService = errService;
        this.modalService = modalService;
        this.model = {
            username: "",
            password: ""
        };
        this.loading = false;
        this.reset = false;
        this.loginAction = true;
        this.email_sended = false;
        this.error = "";
        this.srcIframe = "";
    }
    LoginComponent.prototype.onResetPassword = function () {
        this.reset = true;
    };
    LoginComponent.prototype.get_browser = function () {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'IE', version: (tem[1] || '') };
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR|Edge\/(\d+)/);
            if (tem != null) {
                return { name: 'Opera', version: tem[1] };
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    };
    LoginComponent.prototype.ngOnInit = function () {
        var scheme = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].scheme, pathApps = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].pathApps, production = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production;
        if (production) {
            this.srcIframe = scheme + "://" + pathApps;
        }
        else {
            this.srcIframe = "http://" + pathApps;
        }
        this.srcIframe =
            this.srcIframe + "/external_login?v=" + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].versionFiles;
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        var returnUrl = this.route.snapshot.queryParams["returnUrl"];
        this.returnUrl =
            (returnUrl !== "login" &&
                this.route.snapshot.queryParams["returnUrl"]) ||
                "/";
        this.modalService.close("modalErrorApp");
        var browser = this.get_browser();
        if (__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production && __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiProd) {
            console.log("redirecting...");
            if (browser && browser.name.toLowerCase() == "safari") {
                console.log("safari stays here...", browser);
            }
            else {
                console.log("Browser...", browser);
                console.log("LOGIN : return wifeocms.com");
                //location.href = "https://www.wifeocms.com/se_connecter";
            }
        }
    };
    LoginComponent.prototype.setAction = function (action) {
        this.loginAction = action === "login";
        this.error = "";
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService
            .register(this.model.username1, this.model.password1)
            .finally(function () { return (_this.loading = false); })
            .subscribe(function (result) {
            if (result["token"] && result["status"]) {
                localStorage.setItem("currentUser", result["token"]);
                // localStorage.setItem("emailUser", this.model.username1);
                _this.router.navigateByUrl("/", { replaceUrl: true });
            }
            else {
                _this.error = "Username or password is incorrect";
            }
        }, function (error) {
            _this.errService.handleErrorHttp(error);
            _this.error =
                (error.error && error.error.error) || "Erreur inconnue";
        });
    };
    LoginComponent.prototype.onEmailReceived = function () {
        this.email_sended = false;
        this.reset = false;
        this.loginAction = true;
        // redirect vers la landing page
    };
    LoginComponent.prototype.resetting = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService
            .resetting(this.model.username)
            .finally(function () { return (_this.loading = false); })
            .subscribe(function (result) {
            _this.email_sended = true;
        }, function (error) {
            _this.errService.handleErrorHttp(error);
            _this.error =
                (error.error && error.error.error) || "Erreur inconnue";
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService
            .login(this.model.username, this.model.password)
            .finally(function () { return (_this.loading = false); })
            .subscribe(function (result) {
            if (result["token"]) {
                localStorage.setItem("currentUser", result["token"]);
                // localStorage.setItem("emailUser", this.model.username);
                var strMsg = JSON.stringify({
                    token: localStorage.getItem("currentUser")
                });
                _this.app_iframe.nativeElement.contentWindow.postMessage(strMsg, "*");
                // return;
                // login successful so redirect to return url
                // replaceUrl : supprime le path /login de l'historique de navigation
                // location.href pour etre sur que les modules charge avec la bonne auth et ne pas tenté la première req avec un le token precedent..
                if (_this.returnUrl) {
                    location.href = _this.returnUrl;
                }
                else {
                    location.href = "/dashboard";
                }
                // this.router
                //     .navigateByUrl(this.returnUrl, { replaceUrl: true })
                //     .catch(e => {
                //         this.router.navigate(["/dashboard"], {
                //             replaceUrl: true
                //         });
                //     });
            }
            else {
                _this.error = "Username or password is incorrect";
            }
        }, function (error) {
            _this.errService.handleErrorHttp(error);
            _this.error = "Username or password is incorrect";
        });
    };
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/global/components/logout/logout.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_LogoutComponent */
/* unused harmony export View_LogoutComponent_0 */
/* unused harmony export View_LogoutComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logout_component__ = __webpack_require__("./src/app/global/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_LogoutComponent = [];
var RenderType_LogoutComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵcrt */]({ encapsulation: 2, styles: styles_LogoutComponent, data: {} });

function View_LogoutComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [], null, null); }
function View_LogoutComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_LogoutComponent_0, RenderType_LogoutComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_1__logout_component__["a" /* LogoutComponent */], [__WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LogoutComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵccf */]("ng-component", __WEBPACK_IMPORTED_MODULE_1__logout_component__["a" /* LogoutComponent */], View_LogoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/global/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LogoutComponent.prototype.get_browser = function () {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'IE', version: (tem[1] || '') };
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR|Edge\/(\d+)/);
            if (tem != null) {
                return { name: 'Opera', version: tem[1] };
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    };
    LogoutComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authService.logout();
        // si on utilise le router, les services sont restes remplies avec de la data, si l'user change de compte, il verra des infos de son compte precedent, pour eviter cela on utilise location
        // this.router.navigate(['/']);
        var browser = this.get_browser();
        if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production && __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiProd) {
            console.log("LOGOUT GUARD : return wifeocms.com");
            if (browser && browser.name.toLowerCase() == "safari") {
                location.href = "/";
            }
            else {
                location.href = "/";
                //location.href = "https://www.wifeosite.com/se_connecter";
            }
            // location.href = `https://${environment.hostWifeoCms}/se_connecter`;
        }
        else {
            location.href = "/";
        }
    };
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/global/components/password/password.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_PasswordComponent */
/* unused harmony export View_PasswordComponent_0 */
/* unused harmony export View_PasswordComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_component__ = __webpack_require__("./src/app/global/components/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_PasswordComponent = [];
var RenderType_PasswordComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵcrt */]({ encapsulation: 2, styles: styles_PasswordComponent, data: {} });

function View_PasswordComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-help-block"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Le mot de passe est obligatoire"]))], null, null); }
function View_PasswordComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-help-block"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["La confirmation de mot de passe est obligatoire"]))], null, null); }
function View_PasswordComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "we-alert we-alert-danger"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error; _ck(_v, 1, 0, currVal_0); }); }
function View_PasswordComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 0, "img", [["src", "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="]], null, null, null, null, null))], null, null); }
function View_PasswordComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 66, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Modifier mon mot de passe"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](5, 0, null, null, 58, "form", [["name", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = ((__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).form.valid && _co.resetting()) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["y" /* ɵbf */], [], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](7, 4210688, [["f2", 4]], 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["p" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ControlContainer */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["p" /* NgForm */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["o" /* NgControlStatusGroup */], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ControlContainer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](11, 0, null, null, 18, "div", [["class", "we-form-group"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](12, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵpod */](13, { "has-error": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](15, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Nouveau mot de passe"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](18, 0, null, null, 7, "input", [["class", "we-form-control"], ["name", "password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = (_co.onModified() !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.model.password = $event) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](19, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](20, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["u" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["u" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](23, 671744, [["password", 4]], 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](25, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_PasswordComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](32, 0, null, null, 18, "div", [["class", "we-form-group"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](33, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵpod */](34, { "has-error": 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](36, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Confirmation du mot de passe"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](39, 0, null, null, 7, "input", [["class", "we-form-control"], ["name", "password2"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 40)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 40).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 40)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 40)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = (_co.onModified() !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = ((_co.model.password2 = $event) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](40, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](41, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["u" /* RequiredValidator */], [], { required: [0, "required"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["u" /* RequiredValidator */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* DefaultValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](44, 671744, [["password2", 4]], 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["q" /* NgModel */], [[2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ControlContainer */]], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* NG_VALIDATORS */]], [8, null], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_39" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["q" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](46, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_PasswordComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](49, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](52, 0, null, null, 10, "div", [["class", "we-form-group"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_PasswordComponent_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](55, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](57, 0, null, null, 1, "button", [["class", "we-btn we-btn-success"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Modifier mon mot de passe"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_PasswordComponent_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](61, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](65, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = "we-form-group"; var currVal_8 = _ck(_v, 13, 0, (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 23).valid)); _ck(_v, 12, 0, currVal_7, currVal_8); var currVal_17 = ""; _ck(_v, 20, 0, currVal_17); var currVal_18 = "password"; var currVal_19 = _co.model.password; _ck(_v, 23, 0, currVal_18, currVal_19); var currVal_20 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 23).valid); _ck(_v, 28, 0, currVal_20); var currVal_21 = "we-form-group"; var currVal_22 = _ck(_v, 34, 0, (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 44).valid)); _ck(_v, 33, 0, currVal_21, currVal_22); var currVal_31 = ""; _ck(_v, 41, 0, currVal_31); var currVal_32 = "password2"; var currVal_33 = _co.model.password2; _ck(_v, 44, 0, currVal_32, currVal_33); var currVal_34 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 7).submitted && !__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 44).valid); _ck(_v, 49, 0, currVal_34); var currVal_35 = _co.error; _ck(_v, 55, 0, currVal_35); var currVal_37 = _co.loading; _ck(_v, 61, 0, currVal_37); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassUntouched; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassTouched; var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassPristine; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassDirty; var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassValid; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassInvalid; var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 20).required ? "" : null); var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassUntouched; var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassTouched; var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassPristine; var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassDirty; var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassValid; var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassInvalid; var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 25).ngClassPending; _ck(_v, 18, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_23 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 41).required ? "" : null); var currVal_24 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 46).ngClassUntouched; var currVal_25 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 46).ngClassTouched; var currVal_26 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 46).ngClassPristine; var currVal_27 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 46).ngClassDirty; var currVal_28 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 46).ngClassValid; var currVal_29 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 46).ngClassInvalid; var currVal_30 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵnov */](_v, 46).ngClassPending; _ck(_v, 39, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_36 = _co.loading; _ck(_v, 57, 0, currVal_36); }); }
function View_PasswordComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Changement du mot de passe"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](7, 0, null, null, 7, "div", [["class", "we-alert we-alert-info"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Votre mot de passe vient d'\u00EAtre modifi\u00E9."])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](12, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Vous pouvez d\u00E9sormais vous connecter."])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](16, 0, null, null, 4, "div", [["class", "we-text-right"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](18, 0, null, null, 1, "button", [["class", "we-btn we-btn-success"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEmailReceived() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["Se connecter"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "]))], null, null); }
function View_PasswordComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 7, "div", [["class", "we-container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_PasswordComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_PasswordComponent_6)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.email_sended; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.email_sended; _ck(_v, 6, 0, currVal_1); }, null); }
function View_PasswordComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "ng-component", [], null, null, null, View_PasswordComponent_0, RenderType_PasswordComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__password_component__["a" /* PasswordComponent */], [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["m" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_6__services_errors_service__["a" /* ErrorsService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PasswordComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵccf */]("ng-component", __WEBPACK_IMPORTED_MODULE_3__password_component__["a" /* PasswordComponent */], View_PasswordComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/global/components/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");




var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(route, router, authenticationService, errService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.errService = errService;
        this.model = {
            password2: "",
            password: ""
        };
        this.loading = false;
        this.reset = false;
        this.loginAction = true;
        this.email_sended = false;
        this.token = "";
        this.error = "";
        this.route.params.subscribe(function (token) {
            _this.token = token.params;
        });
    }
    PasswordComponent.prototype.onResetPassword = function () {
        this.reset = true;
    };
    PasswordComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    };
    PasswordComponent.prototype.setAction = function (action) {
        this.loginAction = action === "login";
        this.error = "";
    };
    PasswordComponent.prototype.onModified = function () {
        this.error = "";
    };
    PasswordComponent.prototype.onEmailReceived = function () {
        this.email_sended = false;
        this.reset = false;
        this.loginAction = true;
        this.router.navigate(["/"]);
    };
    PasswordComponent.prototype.resetting = function () {
        var _this = this;
        if (this.model.password !== this.model.password2) {
            this.error = "Les 2 mots de passe doivent etre identiques";
            this.model.password2 = "";
            return;
        }
        this.loading = true;
        this.authenticationService
            .passwordUpdate(this.model.password, this.model.password2, this.token)
            .finally(function () { return (_this.loading = false); })
            .subscribe(function (result) {
            if (result["status"]) {
                // this.router.navigate(['/']);
                _this.email_sended = true;
            }
            else {
                _this.error = "Le lien de réinitialisation est inconnu ou expiré. Recommencer la procédure de modification de mot de passe.";
            }
        }, function (error) {
            _this.errService.handleErrorHttp(error);
            _this.error = (error.error && error.error.error) || "Erreur inconnue";
        });
    };
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/global/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_react_service__ = __webpack_require__("./src/app/shared/services/react.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");



var AppService = /** @class */ (function () {
    function AppService(scriptService, reactService, store) {
        this.scriptService = scriptService;
        this.reactService = reactService;
        this.store = store;
        this.PLACEHOLDER_IMG = "https://mediacache.epicred.fr/4X6DE68rOO9oeeAGN6wlzbLgPTU=/1920x/https://media.epicred.fr/media/cache/original/all/5c1901e87c038.png";
        this.NO_IMG = "https://mediacache.epicred.fr/p8CBOfY37Ag_rwZ9TG5iAvJJw_U=/480x/https://media.epicred.fr/media/cache/original/all/5c9ca0b88a51e.png";
    }
    AppService.prototype.refreshUid = function () {
        if (this.store.curSite["uids"]) {
            var scriptUidSite = "window.__UID_SITE=" + JSON.stringify(this.store.curSite["uids"]) + ";";
            this.scriptService.scriptJsWithContent(scriptUidSite, "script-uid-site");
            this.reactService.refreshAll.next();
        }
    };
    return AppService;
}());



/***/ }),

/***/ "./src/app/global/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_utils__ = __webpack_require__("./src/app/shared/utils/utils.ts");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        // set token if saved in local storage
        if (localStorage.getItem("currentUser")) {
            var currentUser = localStorage.getItem("currentUser");
            this.token = currentUser;
        }
    }
    /**
     * demande de challenge
     * @param token
     */
    AuthenticationService.prototype.requestEmailValidation = function () {
        var url = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/user/api/send/validation/link ";
        var auth = this.getApiKeys();
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': auth.Authorization
        });
        return this.http.get(url, { headers: headers });
    };
    /**
     * verif de l'email renvoi du challenge
     * @param token
     */
    AuthenticationService.prototype.verifyEmailValidation = function (token) {
        var url = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/user/api/verifies/" + token + "/validation/link";
        var auth = this.getApiKeys();
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': auth.Authorization
        });
        return this.http.get(url, { headers: headers });
    };
    AuthenticationService.prototype.login = function (username, password) {
        var url_str = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/user/login_check";
        var url = Object(__WEBPACK_IMPORTED_MODULE_4__shared_utils_utils__["c" /* formatDomain */])(url_str);
        var body = new FormData();
        body.append("_username", username);
        body.append("_password", password);
        return this.http.post(url, body);
    };
    AuthenticationService.prototype.resetting = function (username) {
        var url_str = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/user/resetting/send-email";
        var url = Object(__WEBPACK_IMPORTED_MODULE_4__shared_utils_utils__["c" /* formatDomain */])(url_str);
        var body = new FormData();
        body.append("username", username);
        // body.append('_password', password);
        return this.http.post(url, body);
    };
    AuthenticationService.prototype.passwordUpdate = function (password, password2, id) {
        var url_str = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/user/resetting/reset/" + id;
        var url = Object(__WEBPACK_IMPORTED_MODULE_4__shared_utils_utils__["c" /* formatDomain */])(url_str);
        var body = new FormData();
        body.append("fos_user_resetting_form[plainPassword][first]", password);
        body.append("fos_user_resetting_form[plainPassword][second]", password2);
        return this.http.post(url, body);
    };
    AuthenticationService.prototype.register = function (username, password) {
        var url_str = "https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/user/register";
        var url = Object(__WEBPACK_IMPORTED_MODULE_4__shared_utils_utils__["c" /* formatDomain */])(url_str);
        var body = new FormData();
        body.append("_username", username);
        body.append("_password", password);
        return this.http.post(url, body);
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem("currentUser");
        localStorage.removeItem("emailUser");
        localStorage.removeItem("webSiteId");
        localStorage.removeItem("theme");
        localStorage.removeItem("accountValidationInProgress");
    };
    AuthenticationService.prototype.GetAccessToken = function () {
        if (localStorage.getItem("currentUser")) {
            var currentUser = localStorage.getItem("currentUser");
            this.token = currentUser;
        }
        return "Bearer " + this.token;
    };
    AuthenticationService.prototype.getApiKeys = function () {
        return {
            Authorization: "Bearer " +
                (this.token !== null
                    ? this.token
                    : localStorage.getItem("currentUser"))
        };
    };
    AuthenticationService.prototype.getBasePath = function () {
        var basePath = "";
        if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
            basePath = "";
        }
        return basePath;
    };
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/global/services/errors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_error_stack_parser__ = __webpack_require__("./node_modules/error-stack-parser/error-stack-parser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_error_stack_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_error_stack_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notification_service__ = __webpack_require__("./src/app/global/services/notification.service.ts");




// Cool library to deal with errors: https://www.stacktracejs.com





var ErrorsService = /** @class */ (function () {
    function ErrorsService(injector, router, modalService, notifService) {
        var _this = this;
        this.injector = injector;
        this.router = router;
        this.modalService = modalService;
        this.notifService = notifService;
        this.errors = [];
        this.initErrors();
        // Listen to the navigation errors
        this.router.events.subscribe(function (event) {
            // Redirect to the ErrorComponent
            if (event instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* NavigationError */]) {
                if (!navigator.onLine) {
                    return;
                }
                // Redirect to the ErrorComponent
                _this.log(event.error);
                // console.log("navigation errors -> event.error", event.error);
                // .subscribe((errorWithContext) => { // if server
                //     this.router.navigate(['/error'], { queryParams: errorWithContext, replaceUrl: true });
                // });
            }
        });
    }
    ErrorsService.prototype.log = function (error) {
        // Log the error to the console
        console.error(error);
        // console.error("this.addContextInfo(error)", this.addContextInfo(error));
        // this.router.navigate(['/error'], { queryParams: error, replaceUrl: true }).then(() => console.log('test'));
        // Send error to server
        // const errorToSend = this.addContextInfo(error);
        // return fakeHttpService.post(errorToSend);
    };
    ErrorsService.prototype.addContextInfo = function (error) {
        // All the context details that you want (usually coming from other services; Constants, UserService...)
        var store = this.injector.get(__WEBPACK_IMPORTED_MODULE_7__shared_services_store_service__["a" /* StoreService */]);
        var name = error.name || null;
        var user = (store.curSite && store.curSite.uid) ||
            "anonymous or user not defined";
        var time = new Date().getTime();
        var id = user + "-" + time;
        var location = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* LocationStrategy */]);
        var url = location instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common__["o" /* PathLocationStrategy */] ? location.path() : "";
        var status = error.status || null;
        var message = error.message || error.toString();
        var stack = error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["f" /* HttpErrorResponse */]
            ? null
            : __WEBPACK_IMPORTED_MODULE_4_error_stack_parser__["parse"](error);
        var errorToSend = {
            name: name,
            user: user,
            time: time,
            id: id,
            url: url,
            status: status,
            message: message,
            stack: stack
        };
        return errorToSend;
    };
    ErrorsService.prototype.openModal = function () {
        this.modalService.open("modalErrorApp");
    };
    ErrorsService.prototype.handleErrorHttp = function (error, notify) {
        if (notify === void 0) { notify = false; }
        switch (error.status) {
            case 401:
                var msg401 = [
                    "Expired JWT Token",
                    "Invalid JWT Token",
                    "JWT Token not found"
                ];
                // error.data from axios
                var msg401FromApi_1 = (error.error && error.error.message) ||
                    (error.data && error.data.message);
                if (msg401FromApi_1 &&
                    msg401.find(function (msg) { return msg401FromApi_1 === msg; })) {
                    localStorage.removeItem("currrentUser");
                    this.openModal();
                }
                else {
                    this.notifService.notify("Vous n'êtes pas autorisé à accéder à la ressource demandée.");
                    // alert("Oops ! Une erreur est survenue !");
                }
                // console.log("error 401", error);
                break;
            case 500:// todo
                this.notifService.notify("Serveur temporairement indisponible ! :(");
                // alert("erreur 500! Serveur indisponible ! :(");
                break;
            case 502: // todo
            // console.log("error 502", error);
            case 503: // todo
            case 504:// todo
                this.notifService.notify("La connexion a échoué. Veuillez réessayer dans quelques minutes.");
                // alert("La connexion au serveur à échoué. Veuillez réessayer dans quelques minutes.");
                break;
            case 404:// todo
                this.notifService.notify("La ressource demandée n'est pas disponible.");
                // alert("Une ressource demandée n'a pas été trouvée.");
                break;
            case 400:
            case 402:
                var code = error.error && error.error.code;
                var val = error.error && error.error.query;
                var msg = this.getMsgError(code, val, error.status);
                if (msg.length > 0) {
                    return msg;
                }
                /**
                 * On doit avoir un code d'erreur qu'on fait matcher, et la limitation
                 */
                break;
            default:
                // todo
                this.notifService.notify("Une erreur inconnue est survenue.");
                // alert("Une erreur inconnue est survenue.");
                break;
        }
    };
    ErrorsService.prototype.getMsgError = function (code, val, codeHttp) {
        var defaultCode = codeHttp === 402 ? "LIM_DEFAULT" : "UNKNOW";
        var msg = (this.errors.find(function (err) { return err.code === code; }) ||
            this.errors.find(function (err) { return err.code === defaultCode; })).msg;
        return msg.replace("%val%", val);
    };
    ErrorsService.prototype.initErrors = function () {
        var preSentence = "Vous avez atteint la limite de ";
        // const preSentenceDemo = "Le mode <strong>demo</strong> est limité à ";
        this.errors = [
            {
                code: "UNKNOW",
                msg: "Une erreur est survenue."
            },
            {
                code: "LIM_1",
                msg: preSentence + "%val% scripts pour cette page."
            },
            {
                code: "LIM_2",
                msg: preSentence + "<strong>%val% sections</strong>."
            },
            {
                code: "LIM_3",
                msg: preSentence + "%val% noms de domaine pour ce site."
            },
            {
                code: "LIM_4",
                msg: preSentence + "%val% menus pour cette page."
            },
            {
                code: "LIM_5",
                msg: preSentence + "%val% items pour ce menu."
            },
            {
                code: "LIM_6",
                msg: preSentence + "%val% metas pour cette page."
            },
            {
                code: "LIM_7",
                msg: preSentence + "<strong>%val% pages</strong>."
            },
            {
                code: "LIM_8",
                msg: preSentence + "%val% scripts pour ce site."
            },
            {
                code: "LIM_9",
                msg: preSentence + "<strong>%val% sites</strong>."
            },
            {
                code: "LIM_10",
                msg: preSentence + "%val% menus pour ce site."
            },
            {
                code: "LIM_DEFAULT",
                msg: "Vous ne pouvez pas ajouter plus d'éléments."
            },
            {
                code: "URL_PAGE_EXISTS",
                msg: "L'adresse URL est déjà associée à une page."
            }
        ];
    };
    return ErrorsService;
}());



/***/ }),

/***/ "./src/app/global/services/google-analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");

var GoogleAnalyticsService = /** @class */ (function () {
    // fakeUserID = Math.floor(Math.random() * (999 - 10 + 1)) + 10;
    function GoogleAnalyticsService(router) {
        this.router = router;
    }
    GoogleAnalyticsService.prototype.push = function (typeAction, action, eventCat, eventLabel, eventValue, pagePath) {
        /*         if (environment.production && environment.apiProd) {
                    // const uid = "UA-116284141-2";
                    const uid = "UA-127583013-1";
                    gtag("config", uid, {
                        page_path: pagePath || this.router.url
                    });
                    gtag("config", uid, {
                        custom_map: {
                            dimension1: "cd_siteID",
                            dimension2: "cd_sitePlan"
                        }
                    });
                    gtag(
                        typeAction,
                        action, // is the string that will appear as the event action in Google Analytics Event reports.
                        {
                            event_category: eventCat, // is the string that will appear as the event category.
                            event_label: eventLabel, // is the string that will appear as the event label.
                            value: typeof eventValue === "undefined" ? 0 : eventValue // is a non-negative integer that will appear as the event value.
                        }
                    );
                } */
    };
    return GoogleAnalyticsService;
}());



/***/ }),

/***/ "./src/app/global/services/module.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./src/app/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_modules_service__ = __webpack_require__("./src/app/api/api/modules.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("./src/app/global/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_react_service__ = __webpack_require__("./src/app/shared/services/react.service.ts");







var ModuleService = /** @class */ (function () {
    function ModuleService(store, appService, errorsService, 
        // private siteApi: SitesService,
        modulesApi, pageApi, versionPageApi, designModuleApi, scriptService, reactService) {
        this.store = store;
        this.appService = appService;
        this.errorsService = errorsService;
        this.modulesApi = modulesApi;
        this.pageApi = pageApi;
        this.versionPageApi = versionPageApi;
        this.designModuleApi = designModuleApi;
        this.scriptService = scriptService;
        this.reactService = reactService;
    }
    ModuleService.prototype.rebuildUids = function (nameModule, onSuccess) {
        var _this = this;
        this.modulesApi
            .apiSitesSiteModulesActivationsPost({ nom: nameModule }, this.store.curSite.id.toString())
            .subscribe(function (e) {
            // console.log('SHOP UIDS MODULES', e);
            // console.log("STORE REBUILD :", this.store);
            _this.store.curSite["uids"] = e;
            _this.store.memberId = _this.setIdModule("membership");
            _this.store.paiementId = _this.setIdModule("paiement");
            _this.store.shopId = _this.setIdModule("shop");
            _this.store.blogId = _this.setIdModule("blog");
            _this.store.formationId = _this.setIdModule("formation");
            onSuccess(e);
            var strMsg = JSON.stringify({
                uidSite: _this.store.curSite["uids"]
            });
            parent.postMessage(strMsg, "*");
            _this.refreshUid();
        });
    };
    ModuleService.prototype.setIdModule = function (name) {
        var uidModule = this.store.curSite["uids"].find(function (word) { return word.nom === name; });
        return uidModule && uidModule.distant_id;
    };
    ModuleService.prototype.activateModule = function (nameModule) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var moduleIsActivate = _this.store.curSite["uids"].filter(function (uid) { return uid.nom === nameModule; })
                .length !== 0;
            if (!moduleIsActivate) {
                _this.rebuildUids(nameModule, function () {
                    resolve();
                    // this.shopLoaded = true;
                });
            }
            else {
                var needsRebuild = false;
                switch (nameModule) {
                    case "shop":
                        var memberEntry = _this.store.curSite["uids"].filter(function (word) { return word.nom == "membership"; });
                        if (memberEntry.length > 0) {
                            _this.store.memberId = memberEntry[0].distant_id;
                        }
                        else {
                            needsRebuild = true;
                        }
                        var paiementEntry = _this.store.curSite["uids"].filter(function (word) { return word.nom == "paiement"; });
                        if (paiementEntry.length > 0) {
                            _this.store.paiementId = paiementEntry[0].distant_id;
                        }
                        else {
                            needsRebuild = true;
                        }
                        var shopEntry = _this.store.curSite["uids"].filter(function (word) { return word.nom == "shop"; });
                        if (shopEntry.length > 0) {
                            _this.store.shopId = shopEntry[0].distant_id;
                        }
                        else {
                            needsRebuild = true;
                        }
                        break;
                    case "blog":
                        var blogEntry = _this.store.curSite["uids"].filter(function (word) { return word.nom == "blog"; });
                        if (blogEntry.length > 0) {
                            _this.store.blogId = blogEntry[0].distant_id;
                        }
                        else {
                            needsRebuild = true;
                        }
                        break;
                }
                if (needsRebuild) {
                    _this.rebuildUids(nameModule, function () {
                        resolve();
                        // this.shopLoaded = true;
                    });
                }
                else {
                    resolve();
                    // this.shopLoaded = true;
                }
            }
        });
    };
    ModuleService.prototype.refreshUid = function () {
        this.appService.refreshUid();
    };
    return ModuleService;
}());



/***/ }),

/***/ "./src/app/global/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publish.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");




var NotificationService = /** @class */ (function () {
    function NotificationService(router) {
        var _this = this;
        this.router = router;
        // private _notification: BehaviorSubject<string> = new BehaviorSubject(null);
        // readonly notification$: Observable<string> = this._notification.asObservable().publish().refCount();
        this.notification = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.counter = 0;
        this.notifications = [];
        // On supprime toute les notifs apres un changement de route
        // bien sur les nouvelles notifs apparaisent qu'apres la suppression
        router.events.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* filter */])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]; })).subscribe(function (event) {
            if (_this.notifications.length > 0) {
                _this.reset();
            }
        });
    }
    NotificationService.prototype.notify = function (message, id, type) {
        this.notification.next(message);
        this.add(message);
        // setTimeout(() => this._notification.next(null), 3000);
    };
    NotificationService.prototype.add = function (message, id, type) {
        var notif = this.notifications.find(function (n) { return n.message === message; });
        if (!notif) {
            this.notifications.push({ id: id || this.counter++, message: message, type: type || "warning" });
        }
    };
    NotificationService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.notifications = this.notifications.filter(function (x) { return x.id !== id; });
    };
    NotificationService.prototype.reset = function () {
        this.notifications = [];
    };
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.storageAvailable = function (type) {
        try {
            var storage = window[type], x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage.length !== 0;
        }
    };
    AuthGuard.prototype.get_browser = function () {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'IE', version: (tem[1] || '') };
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR|Edge\/(\d+)/);
            if (tem != null) {
                return { name: 'Opera', version: tem[1] };
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem("currentUser")) {
            // logged in so return true
            return true;
        }
        else {
            if (this.storageAvailable('localStorage')) {
                // Nous pouvons utiliser localStorage
                // not logged in so redirect to login page
                console.log("storage is available :", localStorage.getItem("currentUser"));
                if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production && __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiProd) {
                    var browser = this.get_browser();
                    if (browser && browser.name.toLowerCase() == "safari") {
                        console.log("safari stays here...", browser);
                        this.router.navigate(["/login"], {
                            queryParams: { returnUrl: state.url }
                        });
                    }
                    else {
                        this.router.navigate(["/login"], {
                            queryParams: { returnUrl: state.url }
                        });
                        //location.href = "https://www.wifeocms.com/se_connecter";
                        // location.href = `https://${environment.hostWifeoCms}/se_connecter`;
                    }
                }
                else {
                    this.router.navigate(["/login"], {
                        queryParams: { returnUrl: state.url }
                    });
                }
            }
            else {
                // Malheureusement, localStorage n'est pas disponible
                // not logged in so redirect to login page
                console.log("storage non available...");
                this.router.navigate(["/login"], {
                    queryParams: { returnUrl: state.url }
                });
            }
        }
        return false;
    };
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/shared/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "./src/app/shared/_guards/pending-changes.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingChangesGuard; });
// https://stackoverflow.com/questions/35922071/warn-user-of-unsaved-changes-before-leaving-page
var PendingChangesGuard = /** @class */ (function () {
    function PendingChangesGuard() {
    }
    PendingChangesGuard.prototype.canDeactivate = function (component) {
        if (!component ||
            (component && typeof component.canDeactivate !== "function")) {
            return true;
        }
        // if there are no pending changes, just allow deactivation; else confirm first
        return component.canDeactivate()
            ? true
            : // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
                // when navigating away from your angular app, the browser will show a generic warning message
                // see http://stackoverflow.com/a/42207299/7307355
                confirm("Attention: Vous avez des changements non enregistrés. Appuyez sur Annuler pour revenir en arrière et enregistrer ces modifications, ou sur OK pour les perdre.");
    };
    return PendingChangesGuard;
}());



/***/ }),

/***/ "./src/app/shared/classes/CfgModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG_MODULE; });
/* unused harmony export APP_WIFEO */
/* unused harmony export CfgModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

// if jamais on doit savoir quelle app utilise le module ou passer d'autres infos
var CONFIG_MODULE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* InjectionToken */]("config");
var APP_WIFEO;
(function (APP_WIFEO) {
    APP_WIFEO["EDITOR"] = "EDITOR";
    APP_WIFEO["APPS"] = "APPS";
})(APP_WIFEO || (APP_WIFEO = {}));
var CfgModule = /** @class */ (function () {
    function CfgModule() {
    }
    return CfgModule;
}());



/***/ }),

/***/ "./src/app/shared/classes/GridLayout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridLayout; });
var GridLayout = /** @class */ (function () {
    function GridLayout(fields) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
    GridLayout.prototype.toString = function () {
        var str = "";
        str += this.xs ? " " + this.xs : "";
        str += this.sm ? " " + this.sm : "";
        str += this.md ? " " + this.md : "";
        str += this.lg ? " " + this.lg : "";
        str += this.xl ? " " + this.xl : "";
        str += this.extra ? " " + this.extra : "";
        return str;
    };
    return GridLayout;
}());



/***/ }),

/***/ "./src/app/shared/classes/HttpEventInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpEventInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_authentication_service__ = __webpack_require__("./src/app/global/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("./src/app/shared/utils/utils.ts");



var HttpEventInterceptor = /** @class */ (function () {
    function HttpEventInterceptor(authService) {
        this.authService = authService;
    }
    HttpEventInterceptor.prototype.intercept = function (req, next) {
        var url = Object(__WEBPACK_IMPORTED_MODULE_2__utils_utils__["c" /* formatDomain */])(req.url);
        var request = url !== req.url
            ? req.clone({
                url: url
            })
            : req;
        return next.handle(request);
        //     .do(
        //     (event: HttpEvent<any>) => {
        //         if (event instanceof HttpResponse) {
        //             // do stuff with response if you want
        //         }
        //     },
        //     (err: any) => {
        //         if (err instanceof HttpErrorResponse) {
        //             console.log("err", err);
        //             console.log("err", err.status);
        //             if (err.status === 401) {
        //                 // redirect to the login route
        //                 // or show a modal
        //             }
        //         }
        //     }
        // );
    };
    return HttpEventInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/classes/icon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Icon */
var Icon = /** @class */ (function () {
    function Icon() {
    }
    return Icon;
}());



/***/ }),

/***/ "./src/app/shared/classes/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Menu */
/* unused harmony export PanelOptionsAction */
/* unused harmony export PanelOptions */
/* unused harmony export MenuItem */
var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());

var PanelOptionsAction = /** @class */ (function () {
    function PanelOptionsAction() {
    }
    return PanelOptionsAction;
}());

var PanelOptions = /** @class */ (function () {
    function PanelOptions(_a) {
    }
    return PanelOptions;
}());

var MenuItem = /** @class */ (function () {
    function MenuItem(fields) {
        if (fields) {
            Object.assign(this, fields);
        }
    }
    return MenuItem;
}());



/***/ }),

/***/ "./src/app/shared/components/button/button.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ButtonComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ButtonComponent_0;
/* unused harmony export View_ButtonComponent_Host_0 */
/* unused harmony export ButtonComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/shared/components/button/button.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_tooltip_directive__ = __webpack_require__("./src/app/shared/directives/tooltip.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_component__ = __webpack_require__("./src/app/shared/components/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ButtonComponent = [__WEBPACK_IMPORTED_MODULE_0__button_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ButtonComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_ButtonComponent, data: {} });

function View_ButtonComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon.className; _ck(_v, 0, 0, currVal_0); }); }
function View_ButtonComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon.className; _ck(_v, 0, 0, currVal_0); }); }
function View_ButtonComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](2, 0, null, null, 1, "span", [["class", "badge badge-light"]], [[8, "title", 0], [8, "innerHTML", 1]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](5, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](6, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.badge.title; var currVal_1 = _co.badge.node; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.badge.title; _ck(_v, 6, 0, currVal_2); }); }
function View_ButtonComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_41" /* ɵqud */](402653184, 1, { button: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](1, 0, [[1, 0], ["button", 1]], null, 15, "button", [], [[8, "type", 0], [8, "disabled", 0], [8, "className", 0]], [[null, "click"], [null, "focus"], [null, "blur"], [null, "focusin"], [null, "mouseenter"], [null, "focusout"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focusin" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 3).onMouseEnter() !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 3).onMouseEnter() !== false);
        ad = (pd_1 && ad);
    } if (("focusout" === en)) {
        var pd_2 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 3).onMouseLeave() !== false);
        ad = (pd_2 && ad);
    } if (("mouseleave" === en)) {
        var pd_3 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 3).onMouseLeave() !== false);
        ad = (pd_3 && ad);
    } if (("click" === en)) {
        var pd_4 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 3).onClick($event) !== false);
        ad = (pd_4 && ad);
    } if (("click" === en)) {
        var pd_5 = (_co.onClick.emit($event) !== false);
        ad = (pd_5 && ad);
    } if (("focus" === en)) {
        var pd_6 = (_co.onFocus.emit($event) !== false);
        ad = (pd_6 && ad);
    } if (("blur" === en)) {
        var pd_7 = (_co.onBlur.emit($event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](2, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* NgStyle */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Renderer2 */]], { ngStyle: [0, "ngStyle"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](3, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_3__directives_tooltip_directive__["a" /* TooltipDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["g" /* ApplicationRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injector */]], { tooltipValue: [0, "tooltipValue"], options: [1, "options"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ButtonComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](7, null, ["\n    ", "\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ButtonComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](9, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ButtonComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](13, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵncd */](null, 0), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.style; _ck(_v, 2, 0, currVal_3); var currVal_4 = _co.tooltipContent; var currVal_5 = _co.tooltipOptions; _ck(_v, 3, 0, currVal_4, currVal_5); var currVal_6 = (((_co.icon == null) ? null : _co.icon.active) && (_co.iconPos === "left")); _ck(_v, 6, 0, currVal_6); var currVal_8 = (((_co.icon == null) ? null : _co.icon.active) && (_co.iconPos === "right")); _ck(_v, 9, 0, currVal_8); var currVal_9 = (!_co.activeBadge && _co.badge); _ck(_v, 13, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.type; var currVal_1 = _co.disabled; var currVal_2 = _co.className; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_7 = _co.label; _ck(_v, 7, 0, currVal_7); }); }
function View_ButtonComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-button", [], null, null, null, View_ButtonComponent_0, RenderType_ButtonComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 4833280, null, 0, __WEBPACK_IMPORTED_MODULE_4__button_component__["a" /* ButtonComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_store_service__["a" /* StoreService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ButtonComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵccf */]("app-button", __WEBPACK_IMPORTED_MODULE_4__button_component__["a" /* ButtonComponent */], View_ButtonComponent_Host_0, { type: "type", tooltipContent: "tooltipContent", iconPos: "iconPos", icon: "icon", style: "style", label: "label", disabled: "disabled", tooltipOptions: "tooltipOptions", className: "className", attr: "attr", activeBadge: "activeBadge", badge: "badge", useCssPlan: "useCssPlan", site: "site" }, { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, ["*"]);



/***/ }),

/***/ "./src/app/shared/components/button/button.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/shared/components/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_icon__ = __webpack_require__("./src/app/shared/classes/icon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");




var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(store) {
        this.store = store;
        this.type = "";
        this.tooltipContent = "";
        this.iconPos = "left";
        this.tooltipOptions = { display: false };
        // tableau de data attribut a setter au bouton
        this.attr = [];
        this.activeBadge = false;
        this.badge = { title: "", node: "" };
        this.useCssPlan = false;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    ButtonComponent.prototype.ngOnInit = function () {
        if (this.useCssPlan) {
            var _site = this.site ? this.site : this.store.curSite;
            var cssPlan = __WEBPACK_IMPORTED_MODULE_2__services_permission_service__["a" /* PLAN_CSS */][_site.plan.name];
            this.className += " ." + cssPlan;
        }
    };
    ButtonComponent.prototype.ngAfterViewInit = function () {
        this.setAttr();
    };
    ButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.attr && !changes.attr.firstChange) {
            this.setAttr();
        }
    };
    ButtonComponent.prototype.setAttr = function () {
        for (var i = 0; i < this.attr.length; i++) {
            this.button.nativeElement.setAttribute(this.attr[i].name, this.attr[i].value);
        }
    };
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/domain-handler/domain-handler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomainHandlerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__("./src/app/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_services_errors_service__ = __webpack_require__("./src/app/global/services/errors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_get_main_domain_pipe__ = __webpack_require__("./src/app/shared/pipes/get-main-domain.pipe.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



// import { NddsService, SitesService } from "../../../api";





var DomainHandlerComponent = /** @class */ (function () {
    function DomainHandlerComponent(Modalservice, SiteApi, storeService, errorsService, cd) {
        this.Modalservice = Modalservice;
        this.SiteApi = SiteApi;
        this.storeService = storeService;
        this.errorsService = errorsService;
        this.cd = cd;
        this.subDomain = { val: "" }; // TODO A setter avec un service
        this.subDomainError = null;
        this.subDomainReserved = ["admin", "test"];
        this.subDomainCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](this.subDomain.val, [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["w" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["w" /* Validators */].minLength(4),
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["w" /* Validators */].maxLength(30),
            this.forbiddenNameValidator()
        ]);
        this.viewRegisterNDD = false;
        this.pendingUpdate = false;
    }
    DomainHandlerComponent.prototype.ngOnInit = function () {
        var getMainDomain = new __WEBPACK_IMPORTED_MODULE_7__pipes_get_main_domain_pipe__["a" /* GetMainDomainPipe */]();
        var main = this.storeService.curSite &&
            getMainDomain.transform(this.storeService.curSite.domains);
        if (main) {
            this.subDomain.val = main.name.replace("." + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].domain, "");
        }
    };
    DomainHandlerComponent.prototype.ngAfterViewInit = function () { };
    DomainHandlerComponent.prototype.registerNDD = function () {
        this.viewRegisterNDD = true;
    };
    /**
     *  Ajout d'un sous domaine gratos
     */
    DomainHandlerComponent.prototype.checkSubDomain = function () {
        var _this = this;
        if (this.pendingUpdate) {
            return;
        }
        this.pendingUpdate = true;
        if (!this.subDomainCtrl.valid) {
            return;
        }
        var site = this.storeService.curSite;
        //console.log("valid ok");
        var year = new Date().getFullYear();
        // mettre "Date | any" dans DomainType si probleme pour la date
        var wanted_domain = {
            price: "5.99$",
            name: this.subDomain.val + "." + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].domain,
            expiration: {
                date: { month: 1, day: 1, year: year + 1 },
                time: {
                    hour: 23,
                    minute: 59
                }
            }
        };
        var matching_domain = {};
        var matching_index = 0;
        // tslint:disable-next-line:forin
        for (var i in site.domains) {
            var replace = ".__domain__";
            replace = replace.replace("__domain__", __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].domain);
            var re = new RegExp(replace, "g");
            if (site.domains[i].name.match(re)) {
                //console.log("test");
                matching_domain = site.domains[i];
                matching_index = Number(i);
                this.SiteApi.apiSitesSlugDomainsDomainPut(wanted_domain, site.id.toString(), matching_domain["id"]).subscribe(function (e) {
                    var d = new Date();
                    d.setFullYear(year + 1);
                    var dformat = d.toISOString();
                    var domain = {
                        id: matching_domain["id"],
                        price: "5.99$",
                        name: _this.subDomain.val + "." + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].domain
                        // expiration: dformat
                    };
                    site.domains[matching_index] = domain;
                    site.domains = site.domains.map(function (d, i) {
                        if (i !== matching_index) {
                            return d;
                        }
                        return __assign({}, domain);
                    });
                    var strMsg = JSON.stringify({
                        domainChange: { matching_index: matching_index, domain: domain }
                    });
                    parent.postMessage(strMsg, "*");
                    _this.pendingUpdate = false;
                    _this.Modalservice.close("modalParamsGeneral");
                }, function (error) {
                    _this.subDomainError = error.error;
                    _this.errorsService.handleErrorHttp(error);
                }, function () { });
            }
        }
    };
    DomainHandlerComponent.prototype.string_to_slug = function (str) {
        if (!str) {
            return;
        }
        str = str.replace(/^\s+|\s+$/g, "");
        str = str.toLowerCase();
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
        }
        str = str
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
        return str;
    };
    DomainHandlerComponent.prototype.subdomainChanged = function ($event) {
        this.subDomainError = "";
        if ($event) {
            this.subDomain.val = this.string_to_slug($event);
            //console.log(this.subDomain);
            if (this.el) {
                this.el.nativeElement.value = this.string_to_slug($event);
            }
        }
        this.subDomain.val = this.string_to_slug($event);
    };
    DomainHandlerComponent.prototype.forbiddenNameValidator = function () {
        var _this = this;
        return function (control) {
            var forbidden = _this.subDomainReserved.indexOf(control.value) > -1;
            return forbidden
                ? { forbiddenName: { value: control.value } }
                : null;
        };
    };
    return DomainHandlerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_icon__ = __webpack_require__("./src/app/shared/classes/icon.ts");



var nextIdModal = 0;
var InputComponent = /** @class */ (function () {
    // besoin du detect change la premiere fois ou il y a une erreur, sans, sa declenche une erreur de rafraichissement du template.
    function InputComponent(cd) {
        this.cd = cd;
        this.id = "input_" + nextIdModal++;
        this.type = "text";
        this.placeholder = "";
        this.focus = false;
        this.debounce = 0;
        this.groupClassNameR = "we-input-group-addon";
        this.groupClassNameL = "we-input-group-addon";
        this.control = { active: false, msg: "" };
        this.controls = [];
        this.ngStyleForm = {};
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormGroup */]({
            input: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]("")
        });
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onClickBtnL = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onClickBtnR = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onFail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.detectChangesIsFired = false; // pr declencher qu'une fois le detectChanges;
    }
    InputComponent.prototype.ngAfterViewInit = function () {
        // this.input.nativeElement.removeAttribute('data-toggle');
        $("#" + this.id).tooltip("disable");
    };
    InputComponent.prototype.ngOnDestroy = function () {
        $("#" + this.id).tooltip("hide");
        $("#" + this.id).tooltip("disable");
        $("#" + this.id).tooltip("dispose");
    };
    InputComponent.prototype.ngOnInit = function () {
        if (typeof this.form === "undefined") {
            this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormGroup */]({
                input: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]("")
            });
        }
    };
    InputComponent.prototype.openModal = function (condition) {
        if (condition && !this.detectChangesIsFired) {
            this.detectChangesIsFired = true;
            this.cd.detectChanges();
        }
        return condition;
    };
    InputComponent.prototype.onKey = function ($event) {
        if ($event.keyCode === 13 || $event.keyCode === "13") {
            // this.onSubmit.emit({ yo: 'yo' });
        }
    };
    InputComponent.prototype.onDebounce = function ($event) {
        this.onValueChange.emit($event);
        this.tooltipShow();
    };
    InputComponent.prototype.tooltipShow = function () {
        if (typeof this.control !== "undefined" &&
            this.control.active &&
            this.form.controls["input"].invalid &&
            this.form.controls["input"].dirty) {
            // this.input.nativeElement.setAttribute('data-toggle', 'tooltip');
            $("#" + this.id).tooltip("enable");
            $("#" + this.id).tooltip("show");
            // $('#' + this.id).tooltip('update');
        }
        else {
            $("#" + this.id).tooltip("hide");
            $("#" + this.id).tooltip("disable");
            // $('#' + this.id).tooltip('dispose');
            //  $('#' + this.id).wePopover('update')
        }
    };
    InputComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.control) {
            $("#" + this.id).tooltip("dispose");
            setTimeout(function () {
                _this.tooltipShow();
            }, 200);
        }
    };
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_LoadingComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_LoadingComponent_0;
/* unused harmony export View_LoadingComponent_Host_0 */
/* unused harmony export LoadingComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/shared/components/loading/loading.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_safe_style_pipe__ = __webpack_require__("./src/app/shared/pipes/safe-style.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_component__ = __webpack_require__("./src/app/shared/components/loading/loading.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_LoadingComponent = [__WEBPACK_IMPORTED_MODULE_0__loading_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_LoadingComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_LoadingComponent, data: {} });

function View_LoadingComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 5, "div", [], [[8, "className", 0], [8, "style", 2]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵppd */](1, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](3, 16777216, null, null, 1, null, null, null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](4, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["n" /* NgTemplateOutlet */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v.parent.parent, 4); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* ɵinlineInterpolate */](1, "", ((_co.baseClass + " ") + _co.size), ""); var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_44" /* ɵunv */](_v, 0, 1, _ck(_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v.parent.parent, 0), _co.styleDiv)); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_LoadingComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](2, 16777216, null, null, 1, null, null, null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](3, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["n" /* NgTemplateOutlet */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */]], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v.parent.parent, 4); _ck(_v, 3, 0, currVal_0); }, null); }
function View_LoadingComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoadingComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoadingComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.useDiv; _ck(_v, 3, 0, currVal_0); var currVal_1 = !_co.useDiv; _ck(_v, 6, 0, currVal_1); }, null); }
function View_LoadingComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](1, 0, null, null, 0, "i", [], [[8, "title", 0], [8, "className", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; var currVal_1 = _co.loader.css; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_LoadingComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_3__pipes_safe_style_pipe__["a" /* SafeStylePipe */], [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_LoadingComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](0, [["switchLoader", 2]], null, 0, null, View_LoadingComponent_4)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.active; _ck(_v, 2, 0, currVal_0); }, null); }
function View_LoadingComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-loading", [], null, null, null, View_LoadingComponent_0, RenderType_LoadingComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_5__loading_component__["a" /* LoadingComponent */], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoadingComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵccf */]("app-loading", __WEBPACK_IMPORTED_MODULE_5__loading_component__["a" /* LoadingComponent */], View_LoadingComponent_Host_0, { title: "title", type: "type", opts: "opts", size: "size", baseClass: "baseClass", styleDiv: "styleDiv", active: "active", fullscreen: "fullscreen", useDiv: "useDiv" }, {}, []);



/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.title = "";
        this.type = "pulse";
        // opts utiliser pour le type skeleton
        this.opts = {
            nbCards: 1
        };
        this.size = "";
        this.baseClass = "we-text-center";
        this.styleDiv = "";
        this.active = true;
        this.fullscreen = false;
        this.useDiv = true;
        this.loaders = [
            { type: "spinner", css: "fas fa-spinner fa-spin" },
            { type: "circle", css: "fas fa-circle-notch fa-spin" },
            { type: "sync", css: "fas fa-sync fa-spin" },
            { type: "cog", css: "far fa-cog fa-spin" },
            { type: "pulse", css: "fas fa-spinner fa-pulse" }
        ];
        this.loader = null;
    }
    LoadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader =
            this.loaders.find(function (loader) { return loader.type === _this.type; }) ||
                this.loader[0];
        if (this.fullscreen) {
            this.styleDiv = "position: fixed;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            z-index: 2000;\n            background-color:rgba(31, 31, 33, 0.39);\n            color: white;\n            ";
        }
    };
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_header_nav_header_component__ = __webpack_require__("./src/app/shared/components/nav-header/nav-header.component.ts");




var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(store, componentFactoryResolver, injector, appRef, viewContainerRef) {
        this.store = store;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.appRef = appRef;
        this.viewContainerRef = viewContainerRef;
        this.style = "";
        this.showParams = false;
        this.warnBeforeLeft = function () {
            return { warning: false };
        };
        this.showBreadcrum = false;
        this.innerNavbar = false;
        this.canOpenCustomizer = false;
        this.repeatBtns = false;
        this.activePortal = true;
        this.showNotification = false;
    }
    MainContentComponent.prototype.ngOnInit = function () { };
    MainContentComponent.prototype.ngAfterViewInit = function () {
        if (!this.canOpenCustomizer || !this.activePortal) {
            return;
        }
        // Create a portalHost from a DOM element
        // locate at page.component.html
        this.portalHost = new __WEBPACK_IMPORTED_MODULE_1__angular_cdk_portal__["a" /* DomPortalHost */](document.querySelector("#section-editor-content"), this.componentFactoryResolver, this.appRef, this.injector);
        // Locate the component factory for the HeaderComponent
        this.portal = new __WEBPACK_IMPORTED_MODULE_1__angular_cdk_portal__["b" /* TemplatePortal */](this.sectionEditorTplRef, this.viewContainerRef);
        // Attach portal to host
        this.portalHost.attach(this.portal);
    };
    MainContentComponent.prototype.ngOnDestroy = function () {
        if (!this.canOpenCustomizer || !this.activePortal) {
            return;
        }
        if (this.portalHost) {
            this.portalHost.detach();
        }
    };
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/menu-item/menu-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_classes_menu__ = __webpack_require__("./src/app/shared/classes/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_collapse_directive__ = __webpack_require__("./src/app/shared/directives/collapse.directive.ts");




var nextIdMenuItem = 0;
var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
        /**
         * id de l'item
         */
        this.id = "app-menu-item-" + nextIdMenuItem++;
        /**
         * id du menu parent
         */
        this.idMenuParent = "";
        /**
         * le lvl de profondeur a laquel se situe l'item
         */
        this.lvl = 0;
        /**
         * indique si l'element est un enfant
         */
        this.isChild = false;
        /**
         * container css
         */
        this.containerCss = "";
        /**
         * Event onAction
         */
        this.onAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        /**
         * stockage temporaire de variable en edition
         */
        this.tmp = {
            name: ""
        };
    }
    MenuItemComponent.prototype.ngOnInit = function () { };
    /**
     * met a jour la variable temporaire 'name' lors de l'edition du nom de l'item
     */
    MenuItemComponent.prototype.editNameItem = function ($event) {
        this.tmp.name = $event;
    };
    /**
     * ouvrir le panel d'option associé a l'item
     */
    MenuItemComponent.prototype.openPanelOption = function () {
        $("#collapse-" + this.id).weCollapse("show");
    };
    /**
     * ouvrir le panel d'option associé a l'item
     */
    MenuItemComponent.prototype.togglePanelOption = function () {
        $("#collapse-" + this.id).weCollapse("toggle");
    };
    /**
     * Met a jour une option
     */
    MenuItemComponent.prototype.setValueOpt = function ($event) {
        this.item[$event.attr] = this.item.options[$event.indexOpt].input.value = $event.event;
    };
    MenuItemComponent.prototype.onClickItem = function (item) {
        if (typeof item.command === "function") {
            item.command();
        }
    };
    MenuItemComponent.prototype.handleEventCollapse = function ($event, command, item) {
        if (command) {
            var show = command.show, shown = command.shown, hide = command.hide, hidden = command.hidden;
            switch ($event) {
                case __WEBPACK_IMPORTED_MODULE_3__directives_collapse_directive__["b" /* EventCollapse */].SHOW:
                    if (typeof show === "function") {
                        show(item);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__directives_collapse_directive__["b" /* EventCollapse */].SHOWN:
                    if (typeof shown === "function") {
                        shown(item);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__directives_collapse_directive__["b" /* EventCollapse */].HIDE:
                    if (typeof hide === "function") {
                        hide(item);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_3__directives_collapse_directive__["b" /* EventCollapse */].HIDDEN:
                    if (typeof hidden === "function") {
                        hidden(item);
                    }
                    break;
            }
        }
    };
    MenuItemComponent.prototype.runCommand = function ($event) {
        if (this.item.command) {
            this.item.command($event, this);
        }
        else if (this.item.action) {
            this.onAction.emit(this.item.action);
        }
    };
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_react_cpt_react_cpt_component__ = __webpack_require__("./src/app/shared/components/react-cpt/react-cpt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");




var nextIdMenu = 0;
var MenuComponent = /** @class */ (function () {
    function MenuComponent(cd, scriptService, store) {
        var _this = this;
        this.cd = cd;
        this.scriptService = scriptService;
        this.store = store;
        this.tplInput = false;
        this.idMenu = "app-menu-" + nextIdMenu++;
        /**
         * maximum d'item dans un dropdown
         */
        this.MAX_ITEM_DROPDOWN = 10;
        /**
         * la barre de recherche du menu
         */
        this.searchBar = { active: false };
        /**
         * Props du component react sortable tree
         */
        this.STEprops = {};
        /**
         * indique si le menu est de type DnD
         */
        this.menuSortable = false;
        /**
         * Input pour ajouter un nouvel item page
         */
        this.inputNewItem = {
            name: "new_item_menu",
            type: "input",
            placeholder: "Item sans titre",
            className: "we-form-control we-bg-transparent we-caret-light",
            action: "set_name_new_item",
            actionBtnR: "update",
            val: "test",
            focus: true,
            iconR: {
                active: true,
                className: "we-btn-icon fal fa-check we-text-success"
            },
            active: false,
            groupClassNameR: "we-input-group-addon we-bg-transparent we-border-0"
        };
        /**
         * eventEmitter Action
         */
        this.onAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        if (this.menuSortable) {
            this.scriptService
                .loadScript("css", "SortableTreeEditorCss")
                .then(function (data) {
                _this.scriptService
                    .loadScript("js", "SortableTreeEditorRcpt")
                    .then(function (data) {
                    _this.STEditor = SortableTreeEditorRcpt.default;
                })
                    .catch(function (error) { return console.log(error); });
            });
            // console.log("menu subscribe to ListenerReact$");
            window["ListenerReact$"].subscribe(function (e) {
                // console.log("listenerReact$ in menu", e);
                if (e.app !== "editor") {
                    return;
                }
                if (e.action === "want_pages") {
                    // console.log("send props pages");
                    window["ListenerEditor$"].next({
                        action: e.action,
                        data: _this.STEprops
                    });
                }
            });
        }
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.menuSortable) {
            this.STEprops.treeData = this.items;
            this.STEprops.maxSubItems = 10;
            this.STEprops.showBtnCollapse = true;
            this.STEprops.namePlanSite = this.store.curSite.plan.name;
            this.scriptService
                .loadScript("css", "SortableTreeEditorCss")
                .then(function (data) {
                _this.scriptService
                    .loadScript("js", "SortableTreeEditorRcpt")
                    .then(function (data) {
                    _this.STEditor = SortableTreeEditorRcpt.default;
                })
                    .catch(function (error) { return console.log(error); });
            });
        }
    };
    /**
     * envoie toutes les actions recue au parent
     */
    MenuComponent.prototype.handleAction = function ($event) {
        this.onAction.emit($event);
    };
    MenuComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    /**
     * met a jour le component react sortable tree
     */
    MenuComponent.prototype.refresh = function () {
        if (this.menuSortable) {
            this.menuST.binding();
        }
    };
    MenuComponent.prototype.reRender = function () {
        if (this.menuSortable) {
            this.menuST.reRender();
        }
    };
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modal-info-plan/modal-info-plan.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ModalInfoPlanComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ModalInfoPlanComponent_0;
/* unused harmony export View_ModalInfoPlanComponent_Host_0 */
/* unused harmony export ModalInfoPlanComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_info_plan_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/shared/components/modal-info-plan/modal-info-plan.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_component_ngfactory__ = __webpack_require__("./src/app/shared/components/modal/modal.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__ = __webpack_require__("./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permission_permission_component_ngfactory__ = __webpack_require__("./src/app/shared/components/permission/permission.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__permission_permission_component__ = __webpack_require__("./src/app/shared/components/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_info_plan_component__ = __webpack_require__("./src/app/shared/components/modal-info-plan/modal-info-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_ModalInfoPlanComponent = [__WEBPACK_IMPORTED_MODULE_0__modal_info_plan_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ModalInfoPlanComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_ModalInfoPlanComponent, data: {} });

function View_ModalInfoPlanComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](1, null, ["\n            ", "\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.permService.contentModal.msg; _ck(_v, 1, 0, currVal_0); }); }
function View_ModalInfoPlanComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](2, 0, null, null, 1, "li", [["class", "we-p-1"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](3, null, ["", ""])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.msg; _ck(_v, 3, 0, currVal_0); }); }
function View_ModalInfoPlanComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 19, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](3, 0, null, null, 1, "div", [["class", "we-text-center we-h4"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                Gr\u00E2ce au Premium vous pourrez\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](6, 0, null, null, 12, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](8, 0, null, null, 3, "div", [["class", "we-text-center"], ["style", "margin-bottom: 10px;display:none;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](10, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-plus-circle fa-2x"], ["style", "color: #d2d6de;"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](13, 0, null, null, 4, "ul", [["class", "we-list-unstyled we-text-center"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ModalInfoPlanComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](16, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.avantages; _ck(_v, 16, 0, currVal_0); }, null); }
function View_ModalInfoPlanComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 30, "app-modal", [["sizeModal", "lg"]], null, [[null, "onHidden"], [null, "onShow"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onHidden" === en)) {
        var pd_0 = ((_co.permService.showModalPlan = false) !== false);
        ad = (pd_0 && ad);
    } if (("onShow" === en)) {
        var pd_1 = (_co.initMsg() !== false);
        ad = (pd_1 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_3__modal_modal_component_ngfactory__["b" /* View_ModalComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__modal_modal_component_ngfactory__["a" /* RenderType_ModalComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 4440064, null, 0, __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__["a" /* ModalComponent */], [__WEBPACK_IMPORTED_MODULE_5__services_modal_service__["a" /* ModalService */]], { idModal: [0, "idModal"], sizeModal: [1, "sizeModal"], style: [2, "style"] }, { onHidden: "onHidden", onShow: "onShow" }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵpod */](2, { zIndex: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](4, 0, null, 0, 3, "h5", [["class", "we-modal-title"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](6, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](7, null, ["\n        ", "\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](9, 0, null, 1, 20, "div", [["class", "we-modal-body"], ["style", "color: black"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ModalInfoPlanComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ModalInfoPlanComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](15, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](17, 0, null, null, 11, "div", [["class", "we-text-center"], ["style", "padding-top: 10px"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](19, 0, null, null, 3, "app-permission", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__permission_permission_component_ngfactory__["b" /* View_PermissionComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__permission_permission_component_ngfactory__["a" /* RenderType_PermissionComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](20, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_7__permission_permission_component__["a" /* PermissionComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_8__services_permission_service__["b" /* PermissionService */]], { except: [0, "except"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, 0, ["\n                LINK TO PLAN\n "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](24, 0, null, null, 3, "app-permission", [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__permission_permission_component_ngfactory__["b" /* View_PermissionComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__permission_permission_component_ngfactory__["a" /* RenderType_PermissionComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](25, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_7__permission_permission_component__["a" /* PermissionComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_8__services_permission_service__["b" /* PermissionService */]], { for: [0, "for"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, 0, ["\n                RENEW\n              "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, 0, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.permService.idModalUpgradePlan; var currVal_1 = "lg"; var currVal_2 = _ck(_v, 2, 0, 8888); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _co.permService.contentModal.msg; _ck(_v, 12, 0, currVal_5); var currVal_6 = _co.permService.contentModal.list; _ck(_v, 15, 0, currVal_6); var currVal_7 = _co.permService.PLAN.PREMIUM; _ck(_v, 20, 0, currVal_7); var currVal_8 = _co.permService.PLAN.PREMIUM; _ck(_v, 25, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = (_co.permService.iconPlan + " we-text-plan-free"); _ck(_v, 6, 0, currVal_3); var currVal_4 = _co.permService.contentModal.title; _ck(_v, 7, 0, currVal_4); }); }
function View_ModalInfoPlanComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ModalInfoPlanComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.permService.showModalPlan; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ModalInfoPlanComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-modal-info-plan", [], null, null, null, View_ModalInfoPlanComponent_0, RenderType_ModalInfoPlanComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_9__modal_info_plan_component__["a" /* ModalInfoPlanComponent */], [__WEBPACK_IMPORTED_MODULE_8__services_permission_service__["b" /* PermissionService */], __WEBPACK_IMPORTED_MODULE_10__services_store_service__["a" /* StoreService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ModalInfoPlanComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵccf */]("app-modal-info-plan", __WEBPACK_IMPORTED_MODULE_9__modal_info_plan_component__["a" /* ModalInfoPlanComponent */], View_ModalInfoPlanComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/components/modal-info-plan/modal-info-plan.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/shared/components/modal-info-plan/modal-info-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalInfoPlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");


var ModalInfoPlanComponent = /** @class */ (function () {
    function ModalInfoPlanComponent(permService, store) {
        this.permService = permService;
        this.store = store;
        this.avantages = [];
        this.lastPlanShow = null;
    }
    ModalInfoPlanComponent.prototype.ngOnInit = function () { };
    ModalInfoPlanComponent.prototype.initMsg = function () {
        var _this = this;
        var namePlan = (this.store.curSite && this.store.curSite.plan.name) ||
            this.permService.PLAN.FREE;
        if (this.lastPlanShow === namePlan) {
            return;
        }
        // this.avantages = Object.keys(this.permService.msgLimitations);
        var arrMsgLim = Object.keys(this.permService.msgLimitations);
        arrMsgLim.forEach(function (key) {
            var msgLimitations = _this.permService.msgLimitations[key];
            if (msgLimitations.list) {
                // const nextPlan = this.permService.getNextNamePlan(namePlan);
                // Si on utilise le nextPlan, il faudra surement des phrases du genre ajouter jusqu'à...
                // opti possible: retirer les avantages deja inclus dans le plan actuel de l'user et n'afficher que les nouveaux ou avec limite supérieur
                var val = String(_this.permService.limitations[namePlan][key] || 0);
                _this.avantages.push({
                    key: key,
                    msg: msgLimitations.avantage.msg.replace("%val%", val)
                });
            }
        });
        this.lastPlanShow = namePlan;
    };
    return ModalInfoPlanComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_ModalComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_ModalComponent_0;
/* unused harmony export View_ModalComponent_Host_0 */
/* unused harmony export ModalComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/shared/components/modal/modal.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_safe_html_pipe__ = __webpack_require__("./src/app/shared/pipes/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_component__ = __webpack_require__("./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_ModalComponent = [__WEBPACK_IMPORTED_MODULE_0__modal_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_ModalComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_ModalComponent, data: {} });

function View_ModalComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 4, "button", [["aria-label", "Close"], ["class", "we-close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](2, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\u00D7"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                "]))], null, null); }
function View_ModalComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 6, "div", [["class", "we-modal-header"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵncd */](null, 0), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ModalComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.btnClose; _ck(_v, 5, 0, currVal_0); }, null); }
function View_ModalComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "div", [], [[8, "className", 0], [8, "innerHTML", 1]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵppd */](1, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* ɵinlineInterpolate */](1, "we-modal-body ", (_co.bodyCss || ""), ""); var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_44" /* ɵunv */](_v, 0, 1, _ck(_v, 1, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v.parent, 0), _co.bodyHtml)); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ModalComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵncd */](null, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](0, null, null, 0))], null, null); }
function View_ModalComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n                "])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵncd */](null, 2), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "]))], null, null); }
function View_ModalComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_3__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */], [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_41" /* ɵqud */](402653184, 1, { modalDOM: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](2, 0, [[1, 0], ["modalDOM", 1]], null, 23, "div", [["data-backdrop", "static"], ["role", "dialog"], ["tabindex", "-1"]], [[1, "modal-for", 0], [8, "id", 0], [8, "className", 0], [1, "data-keyboard", 0], [1, "data-backdrop", 0]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](3, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* NgStyle */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Renderer2 */]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](5, 0, null, null, 19, "div", [["role", "document"]], [[1, "is-draggable", 0]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](6, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵpod */](7, { "we-modal-dialog": 0, "we-modal-lg": 1, "we-modal-xl": 2, "we-modal-fullscreen": 3, "modal-scrollable-content": 4 }), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](8, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* NgStyle */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Renderer2 */]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](10, 0, null, null, 13, "div", [["class", "we-modal-content"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ModalComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](13, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ModalComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](16, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ModalComponent_4)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](19, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_ModalComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](22, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.styleWrapper; _ck(_v, 3, 0, currVal_5); var currVal_7 = _ck(_v, 7, 0, true, (_co.sizeModal === "lg"), (_co.sizeModal === "xl"), (_co.sizeModal === "fullscreen"), _co.scrollable); _ck(_v, 6, 0, currVal_7); var currVal_8 = _co.style; _ck(_v, 8, 0, currVal_8); var currVal_9 = _co.header; _ck(_v, 13, 0, currVal_9); var currVal_10 = _co.useBodyHtml; _ck(_v, 16, 0, currVal_10); var currVal_11 = !_co.useBodyHtml; _ck(_v, 19, 0, currVal_11); var currVal_12 = !_co.footerIsHide; _ck(_v, 22, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.modalFor; var currVal_1 = _co.idModal; var currVal_2 = ((("we-modal " + (_co.restrictCss ? "we-restrict" : "")) + " ") + _co.className); var currVal_3 = _co.keyboard; var currVal_4 = _co.backdrop; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_6 = _co.isDraggable; _ck(_v, 5, 0, currVal_6); }); }
function View_ModalComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-modal", [], null, null, null, View_ModalComponent_0, RenderType_ModalComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 4440064, null, 0, __WEBPACK_IMPORTED_MODULE_5__modal_component__["a" /* ModalComponent */], [__WEBPACK_IMPORTED_MODULE_6__services_modal_service__["a" /* ModalService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ModalComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵccf */]("app-modal", __WEBPACK_IMPORTED_MODULE_5__modal_component__["a" /* ModalComponent */], View_ModalComponent_Host_0, { idModal: "idModal", title: "title", conf: "conf", isOpen: "isOpen", sizeModal: "sizeModal", className: "className", keyboard: "keyboard", backdrop: "backdrop", btnClose: "btnClose", header: "header", isDraggable: "isDraggable", styleWrapper: "styleWrapper", style: "style", modalFor: "modalFor", bodyCss: "bodyCss", restrictCss: "restrictCss", scrollable: "scrollable" }, { onHidden: "onHidden", onHide: "onHide", onShow: "onShow", onShown: "onShown" }, [".we-modal-title", ".we-modal-body", ".we-modal-footer"]);



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".we-modal-fullscreen[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin: 0; }\n  .we-modal-fullscreen[_ngcontent-%COMP%]   .we-modal-content[_ngcontent-%COMP%] {\n    border: none;\n    border-radius: unset;\n    min-height: 100vh;\n    min-width: 100vh; }"];



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");


var nextIdModal = 0;
var ModalComponent = /** @class */ (function () {
    // _conf: any = {
    //   btnClose: true,
    // };
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.idModal = "app-modal-" + nextIdModal++;
        this.isOpen = false;
        this.sizeModal = "";
        this.className = "";
        this.keyboard = true;
        this.backdrop = true;
        this.btnClose = true;
        this.header = true;
        this.isDraggable = false;
        this.styleWrapper = {};
        this.style = {};
        this.modalFor = undefined;
        this.bodyCss = "";
        this.restrictCss = true;
        this.scrollable = false;
        // This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        // This event is fired immediately when the hide instance method has been called.
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        // This event fires immediately when the show instance method is called. If caused by a click, the clicked element is available as the relatedTarget property of the event.
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        // This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the relatedTarget property of the event.
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.useBodyHtml = false;
        this.bodyHtml = "";
        this.footerIsHide = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.modalService.add(this);
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
        document.body.appendChild(this.modalDOM.nativeElement);
        this.initOnHide();
        this.initOnHidden();
        this.initOnShow();
        this.initOnShown();
        if (this.isOpen) {
            this.open();
        }
        if (this.isDraggable) {
            this.initDraggable();
        }
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        // this.modalService.remove(this.id);
        this.modalService.close(this.idModal);
        this.modalDOM.nativeElement.remove();
    };
    ModalComponent.prototype.initOnHide = function () {
        var _this = this;
        $("#" + this.idModal).on("hide.bs.modal", function (e) {
            _this.onHide.emit();
        });
    };
    ModalComponent.prototype.initOnHidden = function () {
        var _this = this;
        $("#" + this.idModal).on("hidden.bs.modal", function (e) {
            if (_this.isDraggable) {
                window["$"]("body").css({
                    "overflow-y": ""
                });
                window["$"]("body").removeClass("we-pr-0");
            }
            // parfois il y a la double scrollbar, alors on remet a l'etat initial
            if (_this.sizeModal === "fullscreen") {
                window["$"]("body").css({
                    "overflow-y": ""
                });
            }
            _this.onHidden.emit();
        });
    };
    ModalComponent.prototype.initOnShow = function () {
        var _this = this;
        $("#" + this.idModal).on("show.bs.modal", function (e) {
            _this.onShow.emit();
        });
    };
    ModalComponent.prototype.initOnShown = function () {
        var _this = this;
        $("#" + this.idModal).on("shown.bs.modal", function (e) {
            if (_this.isDraggable) {
                // console.log("initOnShown");
                window["$"](".modal-backdrop.show").css({
                    "background-color": "rgba(0, 0, 0, 0)"
                });
                window["$"]("body").css({
                    "overflow-y": "auto"
                });
                window["$"]("body").addClass("we-pr-0");
            }
            // parfois il y a la double scrollbar, alors on overflow hidden l'axe Y
            if (_this.sizeModal === "fullscreen") {
                window["$"]("body").css({
                    "overflow-y": "hidden"
                });
            }
            _this.onShown.emit();
        });
    };
    ModalComponent.prototype.close = function () {
        this.modalService.close(this.idModal);
        this.isOpen = false;
    };
    ModalComponent.prototype.open = function () {
        this.modalService.open(this.idModal);
        this.isOpen = true;
    };
    ModalComponent.prototype.setBodyHtml = function (html) {
        this.bodyHtml = html;
        this.useBodyHtml = true;
    };
    ModalComponent.prototype.showFooter = function () {
        this.footerIsHide = false;
    };
    ModalComponent.prototype.hideFooter = function () {
        this.footerIsHide = true;
    };
    ModalComponent.prototype.initDraggable = function () {
        if (!$(".we-modal.in").length) {
            $('.we-modal-dialog[is-draggable="true"]').css({
                margin: 0
                // top: 0,
                // right: 0
            });
        }
        $("#" + this.idModal).modal({
            // backdrop: false,
            show: true
        });
        var x2 = $("body").width() - 500;
        var y2 = $("body").height();
        $("#" + this.idModal + " .we-modal-dialog").css({
            top: "17%",
            left: "40%"
            // transform: "translate(-50%, -50%)" // on peut pas utiliser sa car la height de la modal varie et se retrouve au dessus de la limite
        });
        $("#" + this.idModal + " .we-modal-dialog").draggable({
            // handle: ".we-modal-dialog",
            handle: ".we-modal-header",
            // containment: $(".we-editor")
            containment: [0, 54, x2, y2]
        });
    };
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modal/modal.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var ModalDirective = /** @class */ (function () {
    function ModalDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return ModalDirective;
}());



/***/ }),

/***/ "./src/app/shared/components/nav-header/nav-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACTIONS_NAV_HEADER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");





var ACTIONS_NAV_HEADER;
(function (ACTIONS_NAV_HEADER) {
    ACTIONS_NAV_HEADER["TOGGLE_SIDEBAR"] = "TOGGLE_SIDEBAR";
    ACTIONS_NAV_HEADER["OPEN_SIDEBAR"] = "OPEN_SIDEBAR";
    ACTIONS_NAV_HEADER["CLOSE_SIDEBAR"] = "CLOSE_SIDEBAR";
})(ACTIONS_NAV_HEADER || (ACTIONS_NAV_HEADER = {}));
var NavHeaderComponent = /** @class */ (function () {
    function NavHeaderComponent(store, router, cd, permService) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.cd = cd;
        this.permService = permService;
        this.activeItemMenu = "bureau";
        this.idOverlayParams = "overlayNavHeaderParams";
        this.paramsOpen = false;
        this.warnBeforeLeft = function () {
            return { warning: false };
        };
        this.hasParams = false;
        this.cssItemsNav = "we-btn we-nav-link navheader__btn-nav";
        this.itemsNav = [
            {
                name: "Pages",
                id: "pages",
                iconCss: "fal fa-rectangle-landscape we-mr-3",
                css: this.cssItemsNav,
                command: function () { return _this.goTo("pages"); }
            },
            {
                name: "Style",
                id: "design",
                iconCss: "fal fa-brush we-mr-3",
                css: this.cssItemsNav,
                command: function () { return _this.goTo("design"); }
            },
            {
                name: "Bureau",
                id: "bureau",
                iconCss: "fal fa-cube we-mr-3",
                css: this.cssItemsNav,
                command: function () { return undefined; }
            }
        ];
        this.urlCentreAide = "https://wifeo.zendesk.com/hc/fr";
        this.urlCentreAideNewRequest = "https://wifeo.zendesk.com/hc/fr/requests/new";
    }
    NavHeaderComponent.prototype.ngOnInit = function () {
        if (this.tplRef) {
            this.hasParams = true;
        }
    };
    NavHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.$subActions = this.store.actions$.subscribe(function (action) {
            // Pour eviter l'erreur ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(function () {
                switch (action.name) {
                    case ACTIONS_NAV_HEADER.TOGGLE_SIDEBAR:
                        _this.toggleParams();
                        break;
                    case ACTIONS_NAV_HEADER.OPEN_SIDEBAR:
                        _this.openParams();
                        break;
                    case ACTIONS_NAV_HEADER.CLOSE_SIDEBAR:
                        _this.closeParams();
                        break;
                }
            }, 200);
        });
    };
    NavHeaderComponent.prototype.goTo = function (type) {
        var strMsg = JSON.stringify({
            goTo: type
        });
        if (type === "pages" || type === "design") {
            if (!this.inIframe()) {
                var scheme = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].scheme, pathParent = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].pathParent;
                return (location.href = scheme + "://" + pathParent + "/editeur");
            }
            // subterfuge pour avertir les components ayant implementer canDeactivate() que l'iframe va se fermer
            var result = this.warnBeforeLeft();
            // Si pas de warning ou que l'user a accepter le warning -> redirection & fermeture de la modal
            if (!result.warning || result.acceptWarning) {
                parent.postMessage(strMsg, "*");
            }
        }
        else {
            parent.postMessage(strMsg, "*");
        }
    };
    NavHeaderComponent.prototype.toggleParams = function () {
        if (this.paramsOpen) {
            this.closeParams();
        }
        else {
            this.openParams();
        }
    };
    NavHeaderComponent.prototype.openParams = function () {
        this.paramsOpen = true;
    };
    NavHeaderComponent.prototype.closeParams = function () {
        this.paramsOpen = false;
    };
    NavHeaderComponent.prototype.clickOnOverlay = function (event) {
        if (event.srcElement && event.srcElement.id === this.idOverlayParams) {
            this.closeParams();
        }
    };
    NavHeaderComponent.prototype.inIframe = function () {
        try {
            return window.self !== window.top;
        }
        catch (e) {
            return true;
        }
    };
    NavHeaderComponent.prototype.ngOnDestroy = function () {
        if (this.$subActions) {
            this.$subActions.unsubscribe();
        }
    };
    return NavHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/notify-messenger/notify-messenger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyMessengerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_services_notification_service__ = __webpack_require__("./src/app/global/services/notification.service.ts");


var NotifyMessengerComponent = /** @class */ (function () {
    function NotifyMessengerComponent(notifService, cd) {
        this.notifService = notifService;
        this.cd = cd;
        this.css = "";
    }
    NotifyMessengerComponent.prototype.ngOnInit = function () { };
    return NotifyMessengerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/panel-options/panel-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_menu__ = __webpack_require__("./src/app/shared/classes/menu.ts");


var PanelOptionsComponent = /** @class */ (function () {
    function PanelOptionsComponent() {
        this.isCollapse = false;
        this.inline = false;
        this.type = "";
        this.options = [];
        this.className = "we-small";
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onDestroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.hasTplOutlet = false;
    }
    PanelOptionsComponent.prototype.ngOnInit = function () {
        if (this.tplRef) {
            this.hasTplOutlet = true;
        }
    };
    PanelOptionsComponent.prototype.ngOnDestroy = function () {
        this.onDestroy.emit();
    };
    return PanelOptionsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/permission/permission.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_PermissionComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_PermissionComponent_0;
/* unused harmony export View_PermissionComponent_Host_0 */
/* unused harmony export PermissionComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__permission_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/shared/components/permission/permission.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permission_component__ = __webpack_require__("./src/app/shared/components/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_PermissionComponent = [__WEBPACK_IMPORTED_MODULE_0__permission_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_PermissionComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_PermissionComponent, data: {} });

function View_PermissionComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵncd */](null, 0), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](0, null, null, 0))], null, null); }
function View_PermissionComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵncd */](null, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](0, null, null, 0))], null, null); }
function View_PermissionComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵncd */](null, 2), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](0, null, null, 0))], null, null); }
function View_PermissionComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_PermissionComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_PermissionComponent_2)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_PermissionComponent_3)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](7, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.IsAuthorized; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.IsAuthorized; _ck(_v, 4, 0, currVal_1); var currVal_2 = !_co.IsAuthorized; _ck(_v, 7, 0, currVal_2); }, null); }
function View_PermissionComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "app-permission", [], null, null, null, View_PermissionComponent_0, RenderType_PermissionComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 638976, null, 0, __WEBPACK_IMPORTED_MODULE_3__permission_component__["a" /* PermissionComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__services_permission_service__["b" /* PermissionService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PermissionComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵccf */]("app-permission", __WEBPACK_IMPORTED_MODULE_3__permission_component__["a" /* PermissionComponent */], View_PermissionComponent_Host_0, { for: "for", except: "except", site: "site", autoHide: "autoHide" }, { authorized: "authorized", unauthorized: "unauthorized" }, ["*", "[authorized]", "[unauthorized]"]);



/***/ }),

/***/ "./src/app/shared/components/permission/permission.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/shared/components/permission/permission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");


/**
 * USAGE
 *
 <app-permission [for]="['FREE', 'PRO']">
            <div authorized>
                Cette div sera montré a ceux ayant le role dans la variable For
            </div>
            <div unauthorized>
                Cette div sera montré a ceux n'ayant pas le role requis
            </div>
</app-permission>
 */
var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(el, permService) {
        this.el = el;
        this.permService = permService;
        // Soit for soit except pour les plan !
        this.for = null;
        this.except = null;
        this.site = null;
        // fait un 'display:none;' sur le component
        this.autoHide = false;
        this.authorized = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.unauthorized = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.IsAuthorized = false;
    }
    PermissionComponent.prototype.ngOnInit = function () { };
    PermissionComponent.prototype.ngOnChanges = function (changes) {
        this.setAuthorization();
    };
    PermissionComponent.prototype.setAuthorization = function () {
        this.IsAuthorized = this.permService.IsAuthorized(this.for, this.except, this.site);
        if (this.IsAuthorized) {
            this.authorized.emit();
        }
        else {
            this.unauthorized.emit();
            if (this.autoHide) {
                this.el.nativeElement.style.display = "none";
            }
        }
    };
    return PermissionComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/react-cpt/react-cpt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactCptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_react_service__ = __webpack_require__("./src/app/shared/services/react.service.ts");


var nextIdRcpt = 0;
/**
 * Component qui insere dans le dom un react component
 */
var ReactCptComponent = /** @class */ (function () {
    function ReactCptComponent(element, reactService) {
        this.reactService = reactService;
        this.getInstance = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.elementRef = element.nativeElement;
    }
    ReactCptComponent.prototype.getData = function () {
        return this.cptInstance;
    };
    ReactCptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.binding(false, true);
        this.refreshAll$ = this.reactService.refreshAll.subscribe(function ($event) {
            _this.binding();
        });
        this.refresh$ = this.reactService.refresh.subscribe(function ($event) {
            /**
             * Si on a $event.app On reRender tous les flux d'une application présent sur la page (meme si on a $event.id)
             * Si on a $event.id On reRender juste la section concerné
             */
            if ($event.app && _this.app === $event.app) {
                _this.reRender();
            }
            else if ($event.id && _this.cId === $event.id) {
                _this.reRender();
            }
            else if ($event.app === "all") {
                _this.reRender();
            }
        });
    };
    /**
     *
     */
    ReactCptComponent.prototype.binding = function (forceProps, inCollection) {
        if (typeof this.component !== "undefined" && this.component !== null) {
            var props = forceProps || this.props;
            //Juste pour que l'user puisse se faire une idée
            /*             if (this.section && this.section.componentName === "CommentsRcpt" ) {
                            props = {
                                bg: {
                                    class: "bg-transparent"
                                },
                                sectionCss: "",
                                containerCss: "container",
                                valPaddingT: 4,
                                fake: true,
                                fakeItems: [
                                    {
                                        title: "Titre du commentaire",
                                        name: "Nom",
                                        rating: 5,
                                        //dateMsg: moment().format("LL"),
                                        msg:
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus urna. Fusce efficitur eros porta sapien sagittis, a pharetra libero tristique. Duis turpis mi, bibendum vel sagittis ac, gravida et magna. Aenean auctor porta aliquam. Duis in molestie lectus. Etiam sed luctus metus. Mauris pharetra id erat nec ornare."
                                    },
                                    {
                                        title: "Titre du commentaire",
                                        name: "Nom",
                                        rating: 3,
                                        //dateMsg: moment().format("LL"),
                                        msg:
                                            "Cras et magna eu metus iaculis pellentesque eget aliquet ligula. Donec risus metus, blandit pulvinar tincidunt non, aliquam nec mi. Nam efficitur rhoncus interdum. In hac habitasse platea dictumst."
                                    }
                                ]
                            }
                        } */
            var el = React.createElement(this.component, props);
            var rcpt = ReactDOM.render(el, this.elementRef);
            //console.log("Binding RCPT Instance:", rcpt.props);
            this.cptInstance = rcpt;
            if (inCollection && this.cId) {
                this.reactService.components.push({
                    id: this.cId,
                    rcpt: rcpt,
                });
                this.reactService.onLoadedRcpt.next({ cId: this.cId });
            }
        }
    };
    ReactCptComponent.prototype.ngOnDestroy = function () {
        if (this.refreshAll$) {
            this.refreshAll$.unsubscribe();
        }
        if (this.refresh$) {
            this.refresh$.unsubscribe();
        }
        this.removeRcpt();
    };
    ReactCptComponent.prototype.setComponent = function (c) {
        this.component = c;
    };
    ReactCptComponent.prototype.removeRcpt = function () {
        ReactDOM.unmountComponentAtNode(this.elementRef);
    };
    /**
     * Supprimer le component React et le ressussite
     * utile quand on as besoin de componentDidMount etc...
     */
    ReactCptComponent.prototype.reRender = function () {
        this.removeRcpt();
        this.binding();
    };
    return ReactCptComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tooltip-icon/tooltip-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipIconComponent; });
var TooltipIconComponent = /** @class */ (function () {
    function TooltipIconComponent() {
        this.iconCss = "fal fa-question-circle";
    }
    TooltipIconComponent.prototype.ngOnInit = function () { };
    return TooltipIconComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tooltip/tooltip.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_TooltipComponent */
/* unused harmony export View_TooltipComponent_0 */
/* unused harmony export View_TooltipComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_component_scss_shim_ngstyle__ = __webpack_require__("./src/app/shared/components/tooltip/tooltip.component.scss.shim.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_component__ = __webpack_require__("./src/app/shared/components/tooltip/tooltip.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_TooltipComponent = [__WEBPACK_IMPORTED_MODULE_0__tooltip_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_TooltipComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵcrt */]({ encapsulation: 0, styles: styles_TooltipComponent, data: {} });

function View_TooltipComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 0, "div", [["class", "tooltip-arrow"]], null, null, null, null, null))], null, null); }
function View_TooltipComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵand */](16777216, null, null, 1, null, View_TooltipComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_43" /* ɵted */](2, null, ["\n", "\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isThemeLight; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.value; _ck(_v, 2, 0, currVal_1); }); }
function View_TooltipComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_45" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* ɵeld */](0, 0, null, null, 1, "tooltip", [["class", "tooltip"]], [[4, "top", null], [4, "left", null], [4, "z-index", null], [4, "transition", null], [4, "max-width", null], [2, "tooltip-show", null], [2, "tooltip-shadow", null], [2, "tooltip-light", null]], [[null, "transitionend"]], function (_v, en, $event) { var ad = true; if (("transitionend" === en)) {
        var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).transitionEnd($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_TooltipComponent_0, RenderType_TooltipComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__tooltip_component__["a" /* TooltipComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Renderer2 */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).hostStyleTop; var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).hostStyleLeft; var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).hostStyleZIndex; var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).hostStyleTransition; var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).hostStyleMaxWidth; var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).hostClassShow; var currVal_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).hostClassShadow; var currVal_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵnov */](_v, 1).hostClassLight; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
var TooltipComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵccf */]("tooltip", __WEBPACK_IMPORTED_MODULE_3__tooltip_component__["a" /* TooltipComponent */], View_TooltipComponent_Host_0, { data: "data", show: "show" }, {}, []);



/***/ }),

/***/ "./src/app/shared/components/tooltip/tooltip.component.scss.shim.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  max-width: 200px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 8px;\n  position: absolute;\n  z-index: 1000;\n  display: block;\n  opacity: 0;\n  -webkit-transition: opacity 300ms;\n  transition: opacity 300ms; }\n\n.tooltip-show[_nghost-%COMP%] {\n  opacity: 1; }\n\n.tooltip-shadow[_nghost-%COMP%] {\n  -webkit-box-shadow: 0 7px 15px -5px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 7px 15px -5px rgba(0, 0, 0, 0.4); }\n\n.tooltip-light.tooltip-shadow[_nghost-%COMP%] {\n  -webkit-box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.4); }\n\n.tooltip[_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  border-style: solid; }\n\n.tooltip-top[_nghost-%COMP%]::after {\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-color: black transparent transparent transparent; }\n\n.tooltip-bottom[_nghost-%COMP%]::after {\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-color: transparent transparent black transparent; }\n\n.tooltip-left[_nghost-%COMP%]::after {\n  top: 50%;\n  left: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-color: transparent transparent transparent black; }\n\n.tooltip-right[_nghost-%COMP%]::after {\n  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-color: transparent black transparent transparent; }\n\n.tooltip-light[_nghost-%COMP%]::after {\n  display: none; }\n\n.tooltip-light[_nghost-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  background-color: #fff;\n  color: black; }\n\n.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n  background-color: rgba(0, 0, 0, 0.07); }\n\n.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 10px;\n  height: 10px; }\n\n.tooltip-top.tooltip-light[_nghost-%COMP%] {\n  margin-top: -2px; }\n\n.tooltip-top.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%] {\n  top: 100%;\n  left: 50%;\n  margin-top: -4px;\n  margin-left: -5px;\n  background: -webkit-gradient(linear, right top, left bottom, color-stop(50%, rgba(0, 0, 0, 0.07)), color-stop(50%, transparent));\n  background: linear-gradient(to bottom left, rgba(0, 0, 0, 0.07) 50%, transparent 50%); }\n\n.tooltip-top.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]::after {\n  top: 1px;\n  right: 1px; }\n\n.tooltip-bottom.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%] {\n  bottom: 100%;\n  left: 50%;\n  margin-bottom: -4px;\n  margin-left: -5px;\n  background: -webkit-gradient(linear, left bottom, right top, color-stop(50%, rgba(0, 0, 0, 0.1)), color-stop(50%, transparent));\n  background: linear-gradient(to top right, rgba(0, 0, 0, 0.1) 50%, transparent 50%); }\n\n.tooltip-bottom.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]::after {\n  top: -1px;\n  right: -1px; }\n\n.tooltip-left.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 100%;\n  margin-top: -5px;\n  margin-left: -4px;\n  background: -webkit-gradient(linear, left top, right bottom, color-stop(50%, rgba(0, 0, 0, 0.07)), color-stop(50%, transparent));\n  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.07) 50%, transparent 50%); }\n\n.tooltip-left.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]::after {\n  top: 1px;\n  right: -1px; }\n\n.tooltip-right.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n  margin-right: -4px;\n  background: -webkit-gradient(linear, right bottom, left top, color-stop(50%, rgba(0, 0, 0, 0.07)), color-stop(50%, transparent));\n  background: linear-gradient(to top left, rgba(0, 0, 0, 0.07) 50%, transparent 50%); }\n\n.tooltip-right.tooltip-light[_nghost-%COMP%]   .tooltip-arrow[_ngcontent-%COMP%]::after {\n  top: -1px;\n  right: 1px; }"];



/***/ }),

/***/ "./src/app/shared/components/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultOptionsTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var defaultOptionsTooltip = {
    placement: "top",
    delay: 0,
    "show-delay": 0,
    "hide-delay": 300,
    "hide-delay-mobile": 1500,
    "z-index": 0,
    "animation-duration": 300,
    "animation-duration-default": 300,
    trigger: "hover",
    "tooltip-class": "",
    display: true,
    "display-mobile": true,
    shadow: true,
    theme: "dark",
    offset: 8,
    "max-width": "",
    id: false
};
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._show = false;
        /* tslint:enable */
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    TooltipComponent.prototype.transitionEnd = function (event) {
        if (this.show) {
            this.events.emit("shown");
        }
    };
    Object.defineProperty(TooltipComponent.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            if (value) {
                this.setPosition();
            }
            this._show = this.hostClassShow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "placement", {
        get: function () {
            return this.data.options.placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "element", {
        get: function () {
            return this.data.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "elementPosition", {
        get: function () {
            return this.data.elementPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "options", {
        get: function () {
            return this.data.options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "value", {
        get: function () {
            return this.data.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "tooltipOffset", {
        get: function () {
            return Number(this.data.options.offset);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "isThemeLight", {
        get: function () {
            return this.options["theme"] === "light";
        },
        enumerable: true,
        configurable: true
    });
    TooltipComponent.prototype.ngOnInit = function () {
        this.setPlacementClass();
        this.setZIndex();
        this.setCustomClass();
        this.setAnimationDuration();
        this.setStyles();
    };
    TooltipComponent.prototype.setPosition = function () {
        var elementHeight = this.element.offsetHeight;
        var elementWidth = this.element.offsetWidth;
        var tooltipHeight = this.elementRef.nativeElement.clientHeight;
        var tooltipWidth = this.elementRef.nativeElement.offsetWidth;
        var scrollY = window.pageYOffset;
        var tooltip = this.elementRef.nativeElement;
        if (this.placement === "top") {
            this.hostStyleTop =
                this.elementPosition.top +
                    scrollY -
                    (tooltipHeight + this.tooltipOffset) +
                    "px";
        }
        if (this.placement === "bottom") {
            this.hostStyleTop =
                this.elementPosition.top +
                    scrollY +
                    elementHeight +
                    this.tooltipOffset +
                    "px";
        }
        if (this.placement === "top" || this.placement === "bottom") {
            this.hostStyleLeft =
                this.elementPosition.left +
                    elementWidth / 2 -
                    tooltipWidth / 2 +
                    "px";
        }
        if (this.placement === "left") {
            this.hostStyleLeft =
                this.elementPosition.left -
                    tooltipWidth -
                    this.tooltipOffset +
                    "px";
        }
        if (this.placement === "right") {
            this.hostStyleLeft =
                this.elementPosition.left +
                    elementWidth +
                    this.tooltipOffset +
                    "px";
        }
        if (this.placement === "left" || this.placement === "right") {
            this.hostStyleTop =
                this.elementPosition.top +
                    scrollY +
                    elementHeight / 2 -
                    tooltip.clientHeight / 2 +
                    "px";
        }
    };
    TooltipComponent.prototype.setPlacementClass = function () {
        this.renderer.addClass(this.elementRef.nativeElement, "tooltip-" + this.placement);
    };
    TooltipComponent.prototype.setZIndex = function () {
        if (this.options["z-index"] !== 0) {
            this.hostStyleZIndex = this.options["z-index"];
        }
    };
    TooltipComponent.prototype.setCustomClass = function () {
        if (this.options["tooltip-class"]) {
            this.renderer.addClass(this.elementRef.nativeElement, this.options["tooltip-class"]);
        }
    };
    TooltipComponent.prototype.setAnimationDuration = function () {
        if (Number(this.options["animation-duration"]) !=
            this.options["animation-duration-default"]) {
            this.hostStyleTransition =
                "opacity " + this.options["animation-duration"] + "ms";
        }
    };
    TooltipComponent.prototype.setStyles = function () {
        this.hostClassShadow = this.options["shadow"];
        this.hostClassLight = this.isThemeLight;
        this.hostStyleMaxWidth = this.options["max-width"];
    };
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/vertical-pills/vertical-pills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalPillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_GridLayout__ = __webpack_require__("./src/app/shared/classes/GridLayout.ts");

var VerticalPillsComponent = /** @class */ (function () {
    function VerticalPillsComponent() {
        this.grid = {
            colL: new __WEBPACK_IMPORTED_MODULE_0__classes_GridLayout__["a" /* GridLayout */]({ xs: 'we-col-3', sm: '', md: '', lg: '', xl: '' }),
            colR: new __WEBPACK_IMPORTED_MODULE_0__classes_GridLayout__["a" /* GridLayout */]({ xs: 'we-col-9', sm: '', md: '', lg: '', xl: '' })
        };
        this.styl = {
            colL: {},
            colR: {}
        };
    }
    VerticalPillsComponent.prototype.ngOnInit = function () {
    };
    return VerticalPillsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/viewport-detector/viewport-detector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewportDetectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

// USE CASE IMPORTANT:
/**
 * <app-viewport-detector>
 *  <ng-template> <!-- OBLIGATOIRE SINON DOUBLE CHILDREN  -->
 *      ...
 *
 * NgTemplate POUR PAS QUE ANGULAR INSERE LES CHILDREN
 * C'EST CE COMPONENT QUI SE CHARGE D'AFFICHER OU NON LES CHILDREN
 */
var ViewportDetectorComponent = /** @class */ (function () {
    function ViewportDetectorComponent(viewContainerRef, cd) {
        this.viewContainerRef = viewContainerRef;
        this.cd = cd;
        this.isLoaded = false;
        this.observer = null;
        this.canLoaded = false;
    }
    ViewportDetectorComponent.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.for) {
            console.log.apply(console, args);
        }
    };
    ViewportDetectorComponent.prototype.ngOnInit = function () {
        // console.log("init TemplateRef", this.tplRef);
    };
    ViewportDetectorComponent.prototype.ngOnDestroy = function () {
        // If the IntersectionObserver isn't supported, we never started tracking the
        // given target in the first place.
        if (this.observer) {
            this.observer.unobserve(this.element);
        }
    };
    /**
     * Probleme: vu que tous les components sont vide apres le view init, tous les components seront charger en meme temps
     * Solution: mettre une classe CSS avec un min-height abusé
     */
    ViewportDetectorComponent.prototype.ngAfterViewInit = function () {
        this.startObservation();
    };
    ViewportDetectorComponent.prototype.startObservation = function () {
        var _this = this;
        // console.log("on setup SectionComponent", this.hostCpt);
        this.element = this.hostCpt.nativeElement;
        this.observer = new IntersectionObserver(function (entries) {
            // If intersectionRatio is 0, the cpt is out of view
            // and we do not need to do anything.
            if (entries[0].intersectionRatio <= 0) {
                return;
            }
            if (!_this.isLoaded) {
                _this.viewContainerRef.createEmbeddedView(_this.tplRef);
                _this.canLoaded = _this.isLoaded = true;
            }
            else {
                _this.unobserve();
            }
        }, this.options);
        this.observer.observe(this.element);
    };
    ViewportDetectorComponent.prototype.unobserve = function () {
        this.observer.unobserve(this.element);
        this.observer = null;
    };
    ViewportDetectorComponent.prototype.reObserve = function () {
        if (!this.isLoaded) {
            this.unobserve();
            this.startObservation();
        }
    };
    return ViewportDetectorComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/auto-focus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/**
 * USE CASE
 *<div appAutofocus > //will focus
 *<div appAutofocus="true" > //will focus
 *<div appAutofocus="false"> //will not focus
 */
var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    AutofocusDirective.prototype.ngAfterViewInit = function () {
        if (this._autofocus || typeof this._autofocus === "undefined") {
            this.renderer.invokeElementMethod(this.el.nativeElement, "focus", []);
        }
    };
    Object.defineProperty(AutofocusDirective.prototype, "autofocus", {
        set: function (condition) {
            this._autofocus = condition !== false;
        },
        enumerable: true,
        configurable: true
    });
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/click-outside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var ignoreList = ['we-btn we-btn-secondary we-btn-block',
            'we-btn we-btn-secondary we-btn-sm',
            'control-label',
            'fill-control-indicator',
            'we-badge we-badge-secondary',
            'we-form-check fill-control-input',
            'fas fa-caret-down',
            'we-list-group',
            'we-list-group we-list-group-flush',
            'we-list-group-item',
            'custom-control fill-checkbox',
            'fas fa-caret-up'];
        if (ignoreList.indexOf(targetElement.className) == -1) {
            var clickedInside = this._elementRef.nativeElement.contains(targetElement);
            if (!clickedInside) {
                if (targetElement.className) {
                    //console.log("clicked outside",targetElement.name );
                    this.clickOutside.emit(null);
                }
            }
        }
    };
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/collapse.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var EventCollapse;
(function (EventCollapse) {
    EventCollapse["SHOW"] = "show.bs.collapse";
    EventCollapse["SHOWN"] = "shown.bs.collapse";
    EventCollapse["HIDE"] = "hide.bs.collapse";
    EventCollapse["HIDDEN"] = "hidden.bs.collapse";
})(EventCollapse || (EventCollapse = {}));
var CollapseDirective = /** @class */ (function () {
    function CollapseDirective(elementRef) {
        this.onShowCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onShownCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onHideCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onHiddenCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.element = elementRef.nativeElement;
    }
    CollapseDirective.prototype.ngAfterViewInit = function () {
        var id = this.element.getAttribute("data-target");
        var $this = this;
        // This event fires immediately when the show instance method is called.
        $(document).on(EventCollapse.SHOW, id, function () {
            $this.onShowCollapse.emit(EventCollapse.SHOW);
        });
        // This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).
        $(document).on(EventCollapse.SHOWN, id, function () {
            $this.onShownCollapse.emit(EventCollapse.SHOWN);
        });
        // This event is fired immediately when the hide method has been called.
        $(document).on(EventCollapse.HIDE, id, function () {
            $this.onHideCollapse.emit(EventCollapse.HIDE);
        });
        // This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).
        $(document).on(EventCollapse.HIDDEN, id, function () {
            $this.onHiddenCollapse.emit(EventCollapse.HIDDEN);
        });
    };
    return CollapseDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/debounce-click.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebounceClickDirective; });
var DebounceClickDirective = /** @class */ (function () {
    function DebounceClickDirective() {
    }
    DebounceClickDirective.prototype.ngOnInit = function () { };
    DebounceClickDirective.prototype.clickEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Click from Host Element!");
    };
    return DebounceClickDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/debounce.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebounceDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");




var DebounceDirective = /** @class */ (function () {
    // private isFirstChange: boolean = true;
    function DebounceDirective(model) {
        this.model = model;
        this.onDebounce = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.debounce = 500;
    }
    DebounceDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.model.valueChanges
            .debounceTime(this.debounce)
            .distinctUntilChanged()
            .subscribe(function (modelValue) {
            _this.onDebounce.emit(modelValue);
        });
    };
    return DebounceDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/font-family.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontFamilyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");


/**
 * USE CASE
 *<div fontFamily [font] > //will focus
 *<div appAutofocus="true" > //will focus
 *<div appAutofocus="false"> //will not focus
 */
var FontFamilyDirective = /** @class */ (function () {
    function FontFamilyDirective(el, renderer, // peut pas utiliser !important avec renderer...
        scriptService) {
        this.el = el;
        this.renderer = renderer;
        this.scriptService = scriptService;
        this.font = null;
        this.idFont = null;
        this.nameFont = null;
        this.pathFont = null;
        this.onFontLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    FontFamilyDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.setProps();
        if (this.pathFont) {
            this.el.nativeElement.setAttribute("style", "font-family: " + this.nameFont + ";display: none;");
            var script = {
                id: this.idFont,
                name: this.idFont,
                // On as deja open sans de charger, si on le charge a nouveau ca va deconner avec le changement de font
                // De meme pour les autres fonts souvent repeter comme Roboto (not fixed yet)
                src: this.pathFont
                    .replace("Open+Sans|", "")
                    .replace("Open+Sans", "")
            };
            this.scriptService.addScript(script);
            this.scriptService.loadScript("css", script.name).then(function (v) {
                _this.el.nativeElement.setAttribute("style", "font-family: " + _this.nameFont + ";display: block;");
                _this.onFontLoaded.emit();
            });
        }
        else {
            this.el.nativeElement.setAttribute("style", "font-family: " + this.nameFont + ";display: block;");
        }
    };
    FontFamilyDirective.prototype.setProps = function () {
        if (this.font) {
            if (this.font.id) {
                this.idFont = this.font.id;
            }
            if (this.font.name) {
                this.nameFont = this.font.name;
            }
            if (this.font.path) {
                this.pathFont = this.font.path;
            }
        }
    };
    return FontFamilyDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/tooltip-bootstrap.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipBootstrapDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var TooltipBootstrapDirective = /** @class */ (function () {
    function TooltipBootstrapDirective(elementRef) {
        this.tooltipOptions = {
            iconQuestion: true
        };
        this.element = elementRef.nativeElement;
    }
    TooltipBootstrapDirective.prototype.ngAfterViewInit = function () {
        // console.log(this.element);
        // console.log($(this.element));
        // class="fa fa-question-circle icone_tooltip"
        if (this.tooltipOptions) {
            if (this.tooltipOptions.iconQuestion) {
                this.element.className = "fa fa-question-circle icone_tooltip";
            }
        }
        this.element.setAttribute("data-html", true);
        this.element.setAttribute("data-toggle", "we-tooltip");
        $(this.element).weTooltip();
        // $('[data-toggle="we-tooltip"]').weTooltip();
    };
    return TooltipBootstrapDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/tooltip.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tooltip_tooltip_component__ = __webpack_require__("./src/app/shared/components/tooltip/tooltip.component.ts");


var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(elementRef, componentFactoryResolver, appRef, injector) {
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this._showDelay = 0;
        this._hideDelay = 300;
        this._options = {};
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    Object.defineProperty(TooltipDirective.prototype, "options", {
        get: function () {
            return this._options;
        },
        /* tslint:enable */
        set: function (value) {
            if (value && __WEBPACK_IMPORTED_MODULE_1__components_tooltip_tooltip_component__["b" /* defaultOptionsTooltip */]) {
                this._options = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "placement", {
        set: function (value) {
            if (value) {
                this._options["placement"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "delay", {
        set: function (value) {
            if (value) {
                this._options["delay"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "hideDelayMobile", {
        set: function (value) {
            if (value) {
                this._options["hide-delay-mobile"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "zIndex", {
        set: function (value) {
            if (value) {
                this._options["z-index"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "animationDuration", {
        set: function (value) {
            if (value) {
                this._options["animation-duration"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "trigger", {
        set: function (value) {
            if (value) {
                this._options["trigger"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "tooltipClass", {
        set: function (value) {
            if (value) {
                this._options["tooltip-class"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "display", {
        set: function (value) {
            if (typeof value === "boolean") {
                this._options["display"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "displayMobile", {
        set: function (value) {
            if (value) {
                this._options["display-mobile"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "shadow", {
        set: function (value) {
            this._options["shadow"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "theme", {
        set: function (value) {
            if (value) {
                this._options["theme"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "offset", {
        set: function (value) {
            if (value) {
                this._options["offset"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "maxWidth", {
        set: function (value) {
            if (value) {
                this._options["max-width"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "showDelay", {
        get: function () {
            var result = this.options["delay"] || this._showDelay;
            if (this.isMobile) {
                return 0;
            }
            else {
                return result;
            }
        },
        set: function (value) {
            if (value) {
                this._showDelay = this._options["show-delay"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "hideDelay", {
        get: function () {
            if (this.isMobile) {
                return this._hideDelay >= this.options["hide-delay-mobile"]
                    ? this._hideDelay
                    : this.options["hide-delay-mobile"];
            }
            else {
                return this._hideDelay;
            }
        },
        set: function (value) {
            if (value) {
                this._hideDelay = this._options["hide-delay"] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isTooltipDestroyed", {
        get: function () {
            return this.componentRef && this.componentRef.hostView.destroyed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "destroyDelay", {
        get: function () {
            if (this._destroyDelay) {
                return this._destroyDelay;
            }
            else {
                return (Number(this.hideDelay) +
                    Number(this.options["animation-duration"]));
            }
        },
        set: function (value) {
            this._destroyDelay = value;
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.onMouseEnter = function () {
        if (this.isDisplayOnHover == false) {
            return;
        }
        this.show();
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        if (this.options["trigger"] === "hover") {
            this.destroyTooltip();
        }
    };
    TooltipDirective.prototype.onClick = function () {
        var _this = this;
        if (this.isDisplayOnClick == false) {
            return;
        }
        this.show();
        this.hideAfterClickTimeoutId = window.setTimeout(function () {
            _this.destroyTooltip();
        }, 0);
    };
    TooltipDirective.prototype.ngOnInit = function () {
        this.applyOptionsDefault(__WEBPACK_IMPORTED_MODULE_1__components_tooltip_tooltip_component__["b" /* defaultOptionsTooltip */], this.options);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this.destroyTooltip({ fast: true });
        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe();
        }
    };
    TooltipDirective.prototype.getElementPosition = function () {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    };
    TooltipDirective.prototype.createTooltip = function () {
        var _this = this;
        this.clearTimeouts();
        this.getElementPosition();
        this.createTimeoutId = window.setTimeout(function () {
            _this.appendComponentToBody(__WEBPACK_IMPORTED_MODULE_1__components_tooltip_tooltip_component__["a" /* TooltipComponent */]);
        }, this.showDelay);
        this.showTimeoutId = window.setTimeout(function () {
            _this.showTooltipElem();
        }, this.showDelay);
    };
    TooltipDirective.prototype.destroyTooltip = function (options) {
        var _this = this;
        if (options === void 0) { options = { fast: false }; }
        this.clearTimeouts();
        if (this.isTooltipDestroyed == false) {
            this.hideTimeoutId = window.setTimeout(function () {
                _this.hideTooltip();
            }, options.fast ? 0 : this.hideDelay);
            this.destroyTimeoutId = window.setTimeout(function () {
                if (!_this.componentRef || _this.isTooltipDestroyed) {
                    return;
                }
                _this.appRef.detachView(_this.componentRef.hostView);
                _this.componentRef.destroy();
                _this.events.emit("hidden");
            }, options.fast ? 0 : this.destroyDelay);
        }
    };
    TooltipDirective.prototype.showTooltipElem = function () {
        this.clearTimeouts();
        this.componentRef.instance.show = true;
        this.events.emit("show");
    };
    TooltipDirective.prototype.hideTooltip = function () {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return;
        }
        this.componentRef.instance.show = false;
        this.events.emit("hide");
    };
    TooltipDirective.prototype.appendComponentToBody = function (component, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.componentRef.instance.data = {
            value: this.tooltipValue,
            element: this.elementRef.nativeElement,
            elementPosition: this.elementPosition,
            options: this.options
        };
        this.appRef.attachView(this.componentRef.hostView);
        var domElem = this.componentRef.hostView
            .rootNodes[0];
        document.body.appendChild(domElem);
        this.componentSubscribe = (this.componentRef.instance).events.subscribe(function (event) {
            _this.handleEvents(event);
        });
    };
    TooltipDirective.prototype.clearTimeouts = function () {
        if (this.createTimeoutId) {
            clearTimeout(this.createTimeoutId);
        }
        if (this.showTimeoutId) {
            clearTimeout(this.showTimeoutId);
        }
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
        if (this.destroyTimeoutId) {
            clearTimeout(this.destroyTimeoutId);
        }
    };
    Object.defineProperty(TooltipDirective.prototype, "isDisplayOnHover", {
        get: function () {
            if (this.options["trigger"] != "hover") {
                return false;
            }
            if (this.isMobile) {
                return false;
            }
            if (this.options["display"] == false) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isDisplayOnClick", {
        get: function () {
            if (this.options["trigger"] != "click" && this.isMobile == false) {
                return false;
            }
            if (this.options["display"] == false) {
                return false;
            }
            if (this.options["display-mobile"] == false && this.isMobile) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isMobile", {
        get: function () {
            var check = false;
            navigator.maxTouchPoints ? (check = true) : (check = false);
            return check;
        },
        enumerable: true,
        configurable: true
    });
    TooltipDirective.prototype.applyOptionsDefault = function (defaultOptionsTooltip, options) {
        this._defaultOptionsTooltip = Object.assign({}, defaultOptionsTooltip);
        this.options = Object.assign(this._defaultOptionsTooltip, options);
    };
    TooltipDirective.prototype.handleEvents = function (event) {
        if (event === "shown") {
            this.events.emit("shown");
        }
    };
    TooltipDirective.prototype.show = function () {
        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip();
        }
        else if (!this.isTooltipDestroyed) {
            this.showTooltipElem();
        }
    };
    TooltipDirective.prototype.hide = function () {
        this.destroyTooltip();
    };
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        var itemsFiltered = items.filter(function (item) { return item[filter.prop] === filter.value; });
        return itemsFiltered;
    };
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/form-field-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldFormatPipe; });
var FormFieldFormatPipe = /** @class */ (function () {
    function FormFieldFormatPipe() {
    }
    FormFieldFormatPipe.prototype.transform = function (value, exclude) {
        // remove recaptcha et rgpd
        if (value["recaptcha"] !== undefined) {
            delete value["recaptcha"];
        }
        if (value["rgpd"] !== undefined) {
            delete value["rgpd"];
        }
        if (exclude) {
            delete value[exclude];
        }
        var values = Object.values(value);
        // handle notation ici, rgpd...
        // const idxNote = value.findIndex( v =>  )
        return values;
    };
    return FormFieldFormatPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/format-date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatDatePipe; });
var FormatDatePipe = /** @class */ (function () {
    function FormatDatePipe() {
    }
    FormatDatePipe.prototype.transform = function (inputFormat, args) {
        function pad(s) {
            return s < 10 ? "0" + s : s;
        }
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
    };
    return FormatDatePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/get-limit.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetLimitPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");

var GetLimitPipe = /** @class */ (function () {
    function GetLimitPipe(permService) {
        this.permService = permService;
    }
    GetLimitPipe.prototype.transform = function (key) {
        return this.permService.getLimit(key);
    };
    return GetLimitPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/get-main-domain.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetMainDomainPipe; });
var GetMainDomainPipe = /** @class */ (function () {
    function GetMainDomainPipe() {
    }
    GetMainDomainPipe.prototype.transform = function (domains, key) {
        if (domains) {
            var main = domains.find(function (d) { return d.main; }) || domains[0];
            return key ? main[key] : main;
        }
    };
    return GetMainDomainPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/has-reached-limit.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasReachedLimitPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");

var HasReachedLimitPipe = /** @class */ (function () {
    function HasReachedLimitPipe(permService) {
        this.permService = permService;
    }
    HasReachedLimitPipe.prototype.transform = function (dataToCompare, key) {
        return this.permService.hasReachedLimit(key, dataToCompare);
    };
    return HasReachedLimitPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/isocode-country-to-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsocodeCountryToNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("./src/app/shared/utils/utils.ts");

var IsocodeCountryToNamePipe = /** @class */ (function () {
    function IsocodeCountryToNamePipe() {
    }
    IsocodeCountryToNamePipe.prototype.transform = function (isoCode) {
        var name = Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["d" /* getCountryName */])(isoCode);
        if (name) {
            return name;
        }
        else {
            return isoCode;
        }
    };
    return IsocodeCountryToNamePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/moment-date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentDatePipe; });
var MomentDatePipe = /** @class */ (function () {
    function MomentDatePipe() {
    }
    MomentDatePipe.prototype.transform = function (value, format) {
        var mDate = moment(value);
        switch (format) {
            case "fromNow":
                return mDate.fromNow();
            default:
                return mDate.format(format);
        }
    };
    return MomentDatePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/objects-iterate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectsIteratePipe; });
var ObjectsIteratePipe = /** @class */ (function () {
    function ObjectsIteratePipe() {
    }
    // value : { test: 5, test2: 10, test3: 15 }
    // result : [{key: 'test', value: 5}, {key: 'test2', value: 10}, {key: 'test3', value: 15}]
    ObjectsIteratePipe.prototype.transform = function (value, args) {
        if (typeof value === "object" && value !== null) {
            var arrayData = [];
            for (var property in value) {
                if (typeof value[property] !== "undefined") {
                    arrayData.push({ key: property, value: value[property] });
                }
            }
            return arrayData;
        }
        return null;
    };
    return ObjectsIteratePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");

var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustHtml(url);
    };
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/safe-res-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeResUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");

var SafeResUrlPipe = /** @class */ (function () {
    function SafeResUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeResUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    /**
     * Converts an html characterSet into its original character.
     *
     * @param {String} str htmlSet entities
     **/
    SafeResUrlPipe.prototype.decode = function (str) {
        return str.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
        });
    };
    return SafeResUrlPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/safe-style.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeStylePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");

/**
 * Utiliser pour bypass la securité dans les balises [style]
 */
var SafeStylePipe = /** @class */ (function () {
    function SafeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeStylePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustStyle(url);
    };
    return SafeStylePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/safe-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");

var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    return SafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/srcset.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrcsetPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__("./src/app/shared/utils/utils.ts");

/**
 * Renvoie une chaine correspondant a l'attribut srcset HTML5
 *
 */
var SrcsetPipe = /** @class */ (function () {
    function SrcsetPipe() {
    }
    SrcsetPipe.prototype.transform = function (value) {
        var data = null;
        try {
            data = JSON.parse(value);
        }
        catch (e) {
            data = value;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["e" /* getSrcSet */])(data);
    };
    return SrcsetPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/str-replace.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrReplacePipe; });
/**
 * Rend lisible une simple chaine de caracteres (combo replace() + toUpperCase())
 *
 * Takes a string as a value.
 * Usage:
 *  value | strReplace
 * Exemple:
 *  name = 'filter-shadow'
 *  name | strReplace : "filter-" : "true"
 *  => Shadow
 *
 * new strReplacePipe().transform(myData, arg1, arg2)
 */
var StrReplacePipe = /** @class */ (function () {
    function StrReplacePipe() {
    }
    StrReplacePipe.prototype.transform = function (value, nameToReplace, upFirstLetter) {
        if (upFirstLetter === void 0) { upFirstLetter = true; }
        value = value.replace(nameToReplace, "");
        if (upFirstLetter) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    return StrReplacePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");


var ModalService = /** @class */ (function () {
    function ModalService(router, appRef) {
        this.router = router;
        this.appRef = appRef;
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        ///console.log("modals :" , this.modals);
        this.appRef.tick(); // detect les changements (ngIf notemmment)
        $("#" + id).modal("show");
    };
    ModalService.prototype.openByRouter = function (id) {
        this.router.navigate([{ outlets: { modal: ["modal", id] } }]);
    };
    ModalService.prototype.close = function (id) {
        $("#" + id).modal("hide");
        // this.router.navigate([{ outlets: { modal: null } }]);
    };
    ModalService.prototype.onHidden = function (id) {
        this.router.navigate([{ outlets: { modal: null } }]);
    };
    /**
     * Manually readjust the modal’s position if the height of a modal changes while it is open (i.e. in case a scrollbar appears).
     * @param id
     */
    ModalService.prototype.handleUpdate = function (id) {
        $("#" + id).modal("handleUpdate");
    };
    /**
     * Destroys an element’s modal.
     * @param id
     */
    ModalService.prototype.dispose = function (id) {
        $("#" + id).modal("dispose");
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/shared/services/permission.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PLAN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLAN_CSS; });
/* unused harmony export LIMIT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PermissionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



// type exceptPermission = string | string[];
// FREE < PRO < PREMIUM
var PLAN;
(function (PLAN) {
    PLAN["FREE"] = "FREE";
    // INTERMEDIAIRE = "INTERMEDIAIRE",
    PLAN["PRO"] = "PRO";
    PLAN["PREMIUM"] = "PREMIUM";
})(PLAN || (PLAN = {}));
var PLAN_CSS;
(function (PLAN_CSS) {
    PLAN_CSS["FREE"] = "plan-free";
    // INTERMEDIAIRE = "plan-intermediaire",
    PLAN_CSS["PRO"] = "plan-pro";
    PLAN_CSS["PREMIUM"] = "plan-premium";
})(PLAN_CSS || (PLAN_CSS = {}));
var LIMIT;
(function (LIMIT) {
    LIMIT["NB_PRODUITS_SHOP"] = "NB_PRODUITS_SHOP";
    LIMIT["NB_POSTS_BLOG"] = "NB_POSTS_BLOG";
    LIMIT["ACTIVATE_ONLINE_PAYMENT_SHOP"] = "ACTIVATE_ONLINE_PAYMENT_SHOP";
    LIMIT["NB_PAGES"] = "NB_PAGES";
    LIMIT["NB_SECTIONS_PER_PAGE"] = "NB_SECTIONS_PER_PAGE";
    LIMIT["SET_FAVICON"] = "SET_FAVICON";
    LIMIT["SET_DOMAIN"] = "SET_DOMAIN";
    LIMIT["SET_SEO"] = "SET_SEO";
    LIMIT["SET_PROTECTION"] = "SET_PROTECTION";
    LIMIT["REMOVE_ADS"] = "REMOVE_ADS";
})(LIMIT || (LIMIT = {}));
var PermissionService = /** @class */ (function () {
    function PermissionService(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        // Nom des plans & des actions si check needed (fichier .TS & .HTLM)
        this.PLAN = PLAN;
        // Non des limitations
        this.LIMIT = LIMIT;
        // Tableau  de plans
        this.PLANS = Object.values(PLAN);
        // id pour la modal
        this.idModalUpgradePlan = "modalUpgradePlan";
        // Affiche ou non la modal
        this.showModalPlan = false;
        // Store des limitations selon un plan
        // ES6 : { [yourKeyVariable]: someValueArray}
        this.limitations = (_a = {},
            _a[PLAN.FREE] = (_b = {},
                _b[LIMIT.NB_PAGES] = 5,
                _b[LIMIT.NB_SECTIONS_PER_PAGE] = 8,
                _b[LIMIT.NB_PRODUITS_SHOP] = 5,
                _b[LIMIT.NB_POSTS_BLOG] = 10,
                _b),
            _a[PLAN.PRO] = (_c = {},
                _c[LIMIT.NB_PAGES] = 50,
                _c[LIMIT.NB_SECTIONS_PER_PAGE] = 20,
                _c[LIMIT.NB_PRODUITS_SHOP] = 25,
                _c[LIMIT.NB_POSTS_BLOG] = 100,
                _c),
            _a[PLAN.PREMIUM] = (_d = {},
                _d[LIMIT.NB_PAGES] = 9999,
                _d[LIMIT.NB_SECTIONS_PER_PAGE] = 20,
                _d[LIMIT.NB_PRODUITS_SHOP] = 9999,
                _d[LIMIT.NB_POSTS_BLOG] = 9999,
                _d),
            _a);
        // Url du shop wifeo pour ajouter un plan au panier
        // linkPlans = "https://www.wifeocms.com/plans";
        this.linkPlans = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].scheme + "://" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].hostWifeoCms + "/" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].pathToBuyPlans;
        // Msg par defaut du btn de la modal
        this.msgLinkPlans = "Passer au plan supérieur";
        this.cssLinkPlans = "link-plans";
        // icon fontawesome a utiliser là ou y'a du plan payant
        this.iconPlan = "fal fa-crown";
        // Store des msg de limitations selon une limitation
        this.msgLimitations = (_e = {},
            _e[LIMIT.NB_PRODUITS_SHOP] = {
                title: "Augmenter votre nombre de produits",
                msg: "",
                list: true,
                avantage: {
                    msg: "Ajouter plus de %val% produits sur votre boutique",
                },
            },
            _e[LIMIT.NB_POSTS_BLOG] = {
                title: "Augmenter votre nombre d'articles",
                msg: "",
                list: true,
                avantage: {
                    msg: "Ajouter plus de %val% articles de blog",
                },
            },
            _e[LIMIT.ACTIVATE_ONLINE_PAYMENT_SHOP] = {
                title: "Activer les paiements en ligne",
                msg: "",
                list: true,
                avantage: {
                    msg: "Permetter à vos clients de réaliser des paiements en ligne",
                },
            },
            _e[LIMIT.NB_PAGES] = {
                title: "Augmenter votre nombre de pages",
                msg: "",
                list: true,
                avantage: {
                    msg: "Ajouter plus de %val% pages à votre site",
                },
            },
            _e[LIMIT.NB_SECTIONS_PER_PAGE] = {
                title: "Ajouter plus de sections",
                msg: "",
                list: true,
                avantage: {
                    msg: "Ajouter plus de %val% sections par page",
                },
            },
            _e[LIMIT.SET_DOMAIN] = {
                title: "Ajouter un nom de domaine personnalisé",
                msg: "",
                list: true,
                avantage: {
                    msg: "Renforcer la confiance de vos visiteurs avec un nom de domaine personnalisé",
                },
            },
            _e[LIMIT.SET_FAVICON] = {
                title: "Ajouter un favicon personnalisé",
                // msg:
                //     "Passer à un plan supérieur pour choisir un favicon. Un favicon personnalisé ajoute de la légitimité à votre site et renforce la confiance des visiteurs.",
                msg: "",
                list: true,
                avantage: {
                    msg: "Ajouter de la légitimité à votre site avec un favicon personnalisé",
                },
            },
            _e[LIMIT.SET_SEO] = {
                title: "Profiter d'un meilleur référencement",
                msg: "",
                list: true,
                avantage: {
                    msg: "Améliorer votre référencement",
                },
            },
            /*         [LIMIT.SET_PROTECTION]: {
                        title: "Protéger l'accés à vos pages",
                        msg: "",
                        list: true,
                        avantage: {
                            msg: "Render certaines de vos pages confidentielles",
                        },
                    }, */
            _e[LIMIT.REMOVE_ADS] = {
                title: "Retirer les publicités",
                msg: "",
                list: true,
                avantage: {
                    msg: "Retirer les publicités",
                },
            },
            _e);
        // Content de la modal utilisé dans le template et setter selon limitation ou bien custom
        this.contentModal = {
            title: "",
            msg: "",
            list: true,
        };
        var _a, _b, _c, _d, _e;
    }
    /**
     * Check si le plan du site appartient aux plans autorisé passé en paramètre
     */
    PermissionService.prototype.IsAuthorized = function (forPlan, exceptFor, site) {
        var IsAuthorized = false;
        var _site = site ? site : this.store.curSite;
        if (!_site) {
            return false;
        }
        if (!_site.plan) {
            return false;
        }
        var namePlan = _site.plan.name;
        if (typeof forPlan === "string") {
            if (namePlan === forPlan) {
                IsAuthorized = true;
            }
        }
        if (Array.isArray(forPlan)) {
            var nameFound = forPlan.find(function (name) { return name === namePlan; });
            if (nameFound) {
                IsAuthorized = true;
            }
        }
        if (typeof exceptFor === "string") {
            if (namePlan !== exceptFor) {
                IsAuthorized = true;
            }
        }
        if (Array.isArray(exceptFor)) {
            var nameFound = exceptFor.find(function (name) { return name === namePlan; });
            if (!nameFound) {
                IsAuthorized = true;
            }
        }
        return IsAuthorized;
    };
    /**
     * Check si une limitation est atteinte ou non
     * @param key
     * @param dataToCompare
     */
    PermissionService.prototype.hasReachedLimit = function (key, dataToCompare) {
        var limit = this.getLimit(key);
        // console.log("hasReachedLimit", key, dataToCompare);
        // console.log("limit", limit);
        if (typeof limit === "undefined") {
            return false;
        }
        else {
            return dataToCompare >= limit;
        }
    };
    PermissionService.prototype.getLimit = function (key) {
        var limit = this.limitations[this.store.curSite.plan.name][key];
        return limit;
    };
    /**
     * remove title et msg
     */
    PermissionService.prototype.clearModal = function () {
        this.contentModal.title = "";
        this.contentModal.msg = "";
    };
    /**
     * A chaque ouverture de modal on clear le title et msg
     * on recupere ensuite le bon msg et title ou le contenu custom
     * @param key
     * @param custom
     */
    PermissionService.prototype.openModalPlan = function (key, custom) {
        this.clearModal();
        if (key) {
            var msgLim = this.msgLimitations[key];
            if (msgLim) {
                this.contentModal = __assign({}, msgLim);
            }
        }
        if (custom) {
            this.contentModal = __assign({}, custom);
        }
        this.showModalPlan = true;
        this.modalService.open(this.idModalUpgradePlan);
    };
    PermissionService.prototype.goToPlans = function () {
        location.href = this.linkPlans;
    };
    PermissionService.prototype.getNamePlanCss = function (namePlan) {
        return PLAN_CSS[namePlan];
    };
    /**
     * Retourne le plan superieur
     */
    PermissionService.prototype.getNextNamePlan = function (namePlan) {
        switch (namePlan) {
            case PLAN.FREE:
                return PLAN.PRO;
            case PLAN.PRO:
                return PLAN.PREMIUM;
        }
    };
    return PermissionService;
}());



/***/ }),

/***/ "./src/app/shared/services/react.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");

var ReactService = /** @class */ (function () {
    function ReactService() {
        this.refreshAll = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.onLoadedRcpt = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.components = [];
    }
    return ReactService;
}());



/***/ }),

/***/ "./src/app/shared/services/router-params.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterParamsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



/**
 * Get router params outside of router-outlet
 */
var RouterParamsService = /** @class */ (function () {
    function RouterParamsService(router, rootRoute) {
        var _this = this;
        this.router = router;
        this.rootRoute = rootRoute;
        this.params$ = router.events.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_filter__["a" /* filter */])(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* NavigationEnd */]; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (e) { return _this.getParams(_this.rootRoute); }));
    }
    RouterParamsService.prototype.paramsSnapshot = function () {
        return this.getParams(this.rootRoute);
    };
    RouterParamsService.prototype.getParams = function (route) {
        // route param names (eg /a/:personId) must be ditinct within
        // a route otherwise they'll be overwritten
        var params = route.snapshot.params;
        params = __assign({}, route.snapshot.queryParams, params);
        if (route.children) {
            for (var _i = 0, _a = route.children; _i < _a.length; _i++) {
                var r = _a[_i];
                params = __assign({}, this.getParams(r), params);
            }
        }
        return params;
    };
    return RouterParamsService;
}());



/***/ }),

/***/ "./src/app/shared/services/script.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_script_store__ = __webpack_require__("./src/app/shared/store/script.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__("./src/app/shared/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");



var ScriptService = /** @class */ (function () {
    function ScriptService() {
        var _this = this;
        this.scripts = {};
        this.scriptsStore = [];
        __WEBPACK_IMPORTED_MODULE_0__store_script_store__["a" /* ScriptStore */].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src,
                id: script.id,
                dependencies: script.dependencies || [],
                type: script.type || "js",
                name: script.name,
                versioning: script.versioning !== false
            };
        });
    }
    ScriptService.prototype.getVersionFiles = function (script) {
        //console.log("script version :", script.name, script.versioning, script );
        //assets/js
        return script.versioning ? "?v=" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].versionFiles : "";
    };
    ScriptService.prototype.load = function (type) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(type, script)); });
        return Promise.all(promises);
    };
    ScriptService.prototype.loadScript = function (type, name) {
        var _this = this;
        console.log("loading script :", type, name);
        return new Promise(function (resolve, reject) {
            if (!_this.scripts[name]) {
                console.error("the script " + name + " isn't in the registry");
                return;
            }
            // resolve if already loaded
            if (_this.scripts[name].loaded) {
                var id = _this.scripts[name].id;
                resolve({
                    script: name,
                    loaded: true,
                    status: "Already Loaded",
                    id: id
                });
            }
            else {
                // load script
                var _a = _this.scripts[name], id_1 = _a.id, text = _a.text;
                var script_1 = type === "css"
                    ? _this.scriptCss(name, id_1, text)
                    : _this.scriptJs(name, id_1, text);
                if (script_1.readyState) {
                    // IE
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" ||
                            script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({
                                script: name,
                                loaded: true,
                                status: "Loaded",
                                id: id_1
                            });
                        }
                    };
                }
                else {
                    // Others
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({
                            script: name,
                            loaded: true,
                            status: "Loaded",
                            id: id_1
                        });
                    };
                }
                script_1.onerror = function (error) {
                    return resolve({ script: name, loaded: false, status: "Loaded" });
                };
                document.getElementsByTagName("head")[0].appendChild(script_1);
            }
        });
    };
    ScriptService.prototype.loader = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) {
            if (_this.scripts[script]) {
                var type = _this.scripts[script].type;
                promises.push(_this.loadScript(type, script));
            }
        });
        return Promise.all(promises);
    };
    ScriptService.prototype.scriptJs = function (name, id, text) {
        var script = document.createElement("script");
        if (id) {
            script.id = id;
        }
        if (text) {
            script.text = text;
        }
        script.type = "text/javascript";
        script.src =
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["c" /* formatDomain */])(this.scripts[name].src) +
                this.getVersionFiles(this.scripts[name]);
        return script;
    };
    ScriptService.prototype.scriptCss = function (name, id, text) {
        var script = document.createElement("link");
        if (id) {
            script.id = id;
        }
        if (text) {
            script.text = text;
        }
        script.type = "text/css";
        script.rel = "stylesheet";
        script.href =
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["c" /* formatDomain */])(this.scripts[name].src) +
                this.getVersionFiles(this.scripts[name]);
        return script;
    };
    ScriptService.prototype.getScripts = function () {
        return this.scripts;
    };
    ScriptService.prototype.getScriptByName = function (name) {
        return this.scripts[name];
    };
    ScriptService.prototype.addScript = function (script, replace) {
        if (replace === void 0) { replace = false; }
        if (!this.scripts[script.name] || replace) {
            this.scripts[script.name] = script;
            return true;
        }
        return false;
    };
    ScriptService.prototype.removeScript = function (name, keepNode, keepInStore) {
        if (keepNode === void 0) { keepNode = true; }
        if (this.scripts[name]) {
            if (!keepNode) {
                var curThemeNode = document.getElementById(this.scripts[name].id);
                if (curThemeNode) {
                    curThemeNode.remove();
                }
            }
            if (keepInStore) {
                this.scripts[name].loaded = false;
            }
            else {
                delete this.scripts[name];
            }
            return true;
        }
        return false;
    };
    ScriptService.prototype.isset = function (name) {
        return typeof this.scripts[name] !== "undefined";
    };
    ScriptService.prototype.scriptJsWithContent = function (content, id) {
        var script = document.createElement("script");
        if (id) {
            // test que la node n'existe pas deja, si elle existe on la supprime
            var node = document.getElementById(id);
            if (node) {
                node.remove();
            }
            script.id = id;
        }
        script.type = "text/javascript";
        script.text = content;
        document.getElementsByTagName("head")[0].appendChild(script);
        return script;
    };
    return ScriptService;
}());



/***/ }),

/***/ "./src/app/shared/services/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__("./src/app/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_utils__ = __webpack_require__("./src/app/shared/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_animation_store__ = __webpack_require__("./src/app/shared/store/animation.store.ts");





var StoreService = /** @class */ (function () {
    function StoreService(siteApi, scriptService, moduleApi // @Optional() @Inject(CONFIG_MODULE) private config: CfgModule
    ) {
        this.siteApi = siteApi;
        this.scriptService = scriptService;
        this.moduleApi = moduleApi; // @Optional() @Inject(CONFIG_MODULE) private config: CfgModule
        this.blogId = null;
        this.shopId = null;
        this.formationId = null;
        this.paiementId = null;
        this.memberId = null;
        this.filesId = null;
        this.notificationId = null;
        this.galleryId = null;
        this.formId = null;
        this.sites = [];
        this.curMenu = {};
        this.curThemeUser = null;
        this.assetsSite = [];
        this.PLACEHOLDER_IMG = "https://mediacache.epicred.fr/4X6DE68rOO9oeeAGN6wlzbLgPTU=/1920x/https://media.epicred.fr/media/cache/original/all/5c1901e87c038.png";
        // theme couleurs bootstrap
        this.themeColors = [
            {
                label: "Bg Primary",
                value: "",
                className: "bg-primary"
            },
            {
                label: "Bg Secondary",
                value: "",
                className: "bg-secondary"
            },
            {
                label: "Bg Success",
                value: "",
                className: "bg-success"
            },
            { label: "Bg Info", value: "", className: "bg-info" },
            {
                label: "Bg white",
                className: "bg-white"
            },
            { label: "Bg Black", value: "", className: "bg-black" }
            // { label: "Bg Dark", value: "", className: "bg-dark" }
        ];
        this.widthSidebar = 322;
        this.styleSidebar = "width: " + this.widthSidebar + "px; transition: left .5s;";
        this.footerPersoHeight = "0px;";
        this.styleMain = "margin-left:  " + this.widthSidebar + "px; transition: margin-left .5s; margin-bottom: " + this.footerPersoHeight;
        this.styleNavbar = "margin-left:  " + this.widthSidebar + "px; transition: margin-left .5s;";
        this.sidebarIsHidden = false;
        // si on tente de choper le innerwidth du parent -> probleme cross-origin
        this.smallDevice = false;
        this.loadingWidthSidebar = this.smallDevice
            ? "width: 50px;"
            : "width: " + this.widthSidebar + "px;";
        this.openedCustomizer = false;
        // design module type
        this.designModules = {};
        this.design_config = null;
        this.modules = [
            {
                id: 2,
                name: "shop",
                lastPageReached: 0,
                pages: [],
                stopLoadItems: false,
                inLoading: false
            },
            {
                id: 1,
                name: "blog",
                lastPageReached: 0,
                pages: [],
                stopLoadItems: false,
                inLoading: false
            }
        ];
        this.groups = [];
        this.actions$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.curAnimationSection = __WEBPACK_IMPORTED_MODULE_4__store_animation_store__["a" /* AnimationStore */][0];
        this.checkIfSmallDevice();
    }
    /**
     * Retourne le logo du site courant pour les factures
     */
    StoreService.prototype.getLogoSite = function (rs) {
        if (rs === void 0) { rs = false; }
        if (!this.curSite) {
            return false;
        }
        var logos = this.curSite.logo;
        if (logos != null) {
            logos = JSON.parse(logos);
            if (!rs) {
                return logos['320'];
            }
            else {
                return logos['1280'];
            }
        }
        return false;
    };
    /**
     * Retourne le domaine principal du site en cours
     */
    StoreService.prototype.getMainDomain = function () {
        if (!this.curSite) {
            return false;
        }
        var domains = this.curSite.domains;
        var mainDomain = domains.find(function (d) { return d.main == true; });
        return mainDomain;
    };
    /**
     * Retourne le plan principal du site en cours
     */
    StoreService.prototype.getMainPlanName = function () {
        if (!this.curSite) {
            return false;
        }
        return this.curSite.plan.name;
    };
    StoreService.prototype.setSites = function (sites) {
        this.sites = sites;
    };
    StoreService.prototype.getSites = function () {
        return this.sites;
    };
    StoreService.prototype.openCustomizer = function () {
        var _this = this;
        setTimeout(function () {
            var $nav = document.querySelector("#nav-section-editor");
            if ($nav) {
                var val = $nav["offsetHeight"] + "px;";
                // console.log("val", val);
                _this.updateMarginBotMain(val);
                // console.log("---->", this.styleMain);
            }
        }, 250);
        // this.store.styleMain
        this.openedCustomizer = true;
    };
    StoreService.prototype.closeCustomizer = function () {
        this.updateMarginBotMain(0);
        this.openedCustomizer = false;
    };
    StoreService.prototype.toggleSidebar = function () {
        if (this.sidebarIsHidden) {
            this.styleSidebar = this.styleSidebar.replace("left: -272px;height: 54px;", "");
            this.styleMain = this.styleMain.replace("margin-left: 0px;", "margin-left:  " + this.widthSidebar + "px;");
            this.styleNavbar = this.styleNavbar.replace("margin-left: 50px;", "margin-left:  " + this.widthSidebar + "px;");
            this.sidebarIsHidden = false;
            // this.activeItemMenu = this.currentCptSidebar;
        }
        else {
            this.styleSidebar += "left: -272px;height: 54px;";
            this.styleMain = this.styleMain.replace("margin-left:  " + this.widthSidebar + "px;", "margin-left: 0px;");
            this.styleNavbar = this.styleNavbar.replace("margin-left:  " + this.widthSidebar + "px;", "margin-left: 50px;");
            this.sidebarIsHidden = true;
            // this.activeItemMenu = "";
        }
    };
    StoreService.prototype.checkIfSmallDevice = function () {
        this.smallDevice = (window && window.innerWidth <= 991) || false;
        // console.log("small device", this.smallDevice);
        // if (this.smallDevice) {
        //     this.toggleSidebar();
        // }
        if (this.smallDevice && !this.sidebarIsHidden) {
            this.toggleSidebar();
        }
        else if (!this.smallDevice && this.sidebarIsHidden) {
            this.toggleSidebar();
        }
    };
    StoreService.prototype.updateMarginBotMain = function (value) {
        this.styleMain = this.styleMain.replace("margin-bottom: " + this.footerPersoHeight, "margin-bottom: " + value);
        this.footerPersoHeight = value;
    };
    // Recupere la palette de l'user (le theme de l'user doit etre present dans la page)
    // donc la fonction doit etre appeller apres le chargement de celle ci
    StoreService.prototype.getScheme = function () {
        // color surchargé plus bas
        var presetUser = [
            { color: "var(--primary)", title: "Couleur primaire" },
            { color: "var(--secondary)", title: "Couleur secondaire" },
            { color: "var(--success)", title: "Couleur tertiaire" },
            { color: "var(--info)", title: "Couleur quaternaire" }
        ];
        var bodyStyles = getComputedStyle(document.body);
        // bug sur les feuilles css perso, il y a un espace au debut des variables
        var hexPrimary = Object(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["b" /* fixHex */])(bodyStyles.getPropertyValue("--primary").trim());
        var hexSecondary = Object(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["b" /* fixHex */])(bodyStyles.getPropertyValue("--secondary").trim());
        var hexSuccess = Object(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["b" /* fixHex */])(bodyStyles.getPropertyValue("--success").trim());
        var hexInfo = Object(__WEBPACK_IMPORTED_MODULE_1__utils_utils__["b" /* fixHex */])(bodyStyles.getPropertyValue("--info").trim());
        var colors = [
            "#FFFFFF",
            hexPrimary,
            hexSecondary,
            hexSuccess,
            hexInfo
        ];
        presetUser[0].color = hexPrimary;
        presetUser[1].color = hexSecondary;
        presetUser[2].color = hexSuccess;
        presetUser[3].color = hexInfo;
        return { colors: colors, presetUser: presetUser };
    };
    StoreService.prototype.getPagesModule = function (name) {
        // console.log("getPagesModule -->", name);
        var _this = this;
        var site = this.curSite;
        var module = this.modules.find(function (m) { return m.name === name; });
        // console.log("module -->", module);
        if (module.inLoading || module.stopLoadItems) {
            this.sendPropsPagesModules(module);
            return;
        }
        module.inLoading = true;
        // console.log("request start");
        this.moduleApi
            .apiSitesSlugModulesModulePagesGet(String(site.id), String(module.id), ++module.lastPageReached)
            .subscribe(function (paginator) {
            // console.log("paginator menu items", paginator);
            module.pages = module.pages.concat(paginator["items"]);
            // console.log("request end, module.pages", module.pages);
            if (module.pages.length === paginator["totalItems"]) {
                module.stopLoadItems = true;
            }
            _this.sendPropsPagesModules(module);
            module.inLoading = false;
        });
    };
    StoreService.prototype.sendPropsPagesModules = function (module) {
        var _this = this;
        window["ListenerEditor$"].next({
            action: "want_pages_modules",
            data: {
                nameModule: module.name,
                propsMenu: {
                    stopLoadItems: module.stopLoadItems,
                    treeData: this.pagesToMenuItems(module.pages),
                    onAction: function (data) {
                        // console.log("onAction from react sortable modules", data.action);
                        if (data.action === "loadMenuItems") {
                            _this.getPagesModule(module.name);
                        }
                    },
                    currentPage: module.lastPageReached
                }
            }
        });
    };
    StoreService.prototype.pagesToMenuItems = function (data) {
        var menuItems = [];
        for (var i = 0; i < data.length; i++) {
            var page = data[i];
            var node = {
                page: page,
                title: page.nom,
                slug: page.slug,
                url: page.url
            };
            menuItems[i] = node;
        }
        return menuItems;
    };
    StoreService.prototype.setDefaultLayout = function () {
        if (typeof this.design_config.config.layout === "undefined") {
            this.design_config.config.layout = { id: 1, name: "Mep 100%" };
        }
    };
    StoreService.prototype.loadFont = function () {
        // console.log("loadFont");
        // Setter par main.component.ts de Editor
        var _this = this;
        if (this.design_config &&
            typeof this.design_config.config.fonts !== "undefined") {
            // this.removeFont();
            var scriptFontCss = {
                id: "font-select-css",
                name: this.design_config.config.fonts.name,
                src: this.design_config.config.fonts["web-font-path"]
            };
            this.scriptService.addScript(scriptFontCss);
            if (scriptFontCss.src) {
                this.scriptService
                    .loadScript("css", this.design_config.config.fonts.name)
                    .then(function (v) {
                    _this.insertFontsStyle();
                });
            }
            else {
                this.insertFontsStyle();
            }
        }
        else {
            this.setDefaultFonts();
        }
    };
    /**
     * Insert or update fonts style in DOM
     */
    StoreService.prototype.insertFontsStyle = function () {
        var sizesText = this.design_config.config.sizesText;
        var sizesTextStyle = "";
        if (sizesText) {
            sizesText.selectors.forEach(function (el) {
                if (el.for === "p") {
                    sizesTextStyle += "\n                    .wrapper-fake-browser div[data-block=\"true\"]{\n                        font-size: " + el.val + ";\n                    }\n                    .page-preview div[data-block=\"true\"]{\n                        font-size: " + el.val + ";\n                    }\n                    ";
                }
                sizesTextStyle += "\n                            .wrapper-fake-browser " + el.for + "{\n                                font-size: " + el.val + ";\n                            }\n                            ";
            });
        }
        var contentStyle = " h1,h2,h3,h4, .navbar-brand, .nav-link:not(i) {\n                            font-family : " + this.design_config.config.fonts["headings-font-family"] + ";\n                        }\n                        .active-fake-browser p, .active-fake-browser div[data-block=\"true\"] {\n                            font-family : " + this.design_config.config.fonts["paragraphe-font-family"] + ";\n                        }\n                        .not-active-fake-browser p, .not-active-fake-browser div[data-block=\"true\"] {\n                            font-family : " + this.design_config.config.fonts["paragraphe-font-family"] + ";\n                        }\n                        .page-preview p, .page-preview div[data-block=\"true\"] {\n                            font-family : " + this.design_config.config.fonts["paragraphe-font-family"] + ";\n                        }\n                        " + sizesTextStyle + "\n                        ";
        var elScriptCustomizeFont = document.getElementById("customize_font");
        if (elScriptCustomizeFont) {
            elScriptCustomizeFont.innerHTML = contentStyle;
        }
        else {
            window["$"]("head").append("<style id=\"customize_font\">" + contentStyle + "</style>");
        }
    };
    StoreService.prototype.setDefaultFonts = function () {
        if (this.design_config && !this.design_config.config.fonts) {
            this.design_config.config.fonts = {
                "headings-font-family": '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                "paragraphe-font-family": '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                "web-font-path": "",
                name: "Default"
            };
        }
    };
    StoreService.prototype.removeFont = function () {
        window["$"]("#customize_font").remove();
    };
    StoreService.prototype.updateThemeSite = function () {
        var _this = this;
        window["__THEME_SITE"] = this.design_config.config;
        if (this.design_config.config.animSection) {
            this.curAnimationSection =
                __WEBPACK_IMPORTED_MODULE_4__store_animation_store__["a" /* AnimationStore */].find(function (anim) {
                    return anim.effect ===
                        _this.design_config.config.animSection.effect;
                }) || __WEBPACK_IMPORTED_MODULE_4__store_animation_store__["a" /* AnimationStore */][0];
        }
        else {
            this.curAnimationSection = __WEBPACK_IMPORTED_MODULE_4__store_animation_store__["a" /* AnimationStore */][0];
        }
        // todo update react cpt
    };
    return StoreService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards__ = __webpack_require__("./src/app/shared/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_filter_pipe__ = __webpack_require__("./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_safe_html_pipe__ = __webpack_require__("./src/app/shared/pipes/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_safe_res_url_pipe__ = __webpack_require__("./src/app/shared/pipes/safe-res-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_safe_style_pipe__ = __webpack_require__("./src/app/shared/pipes/safe-style.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_safe_url_pipe__ = __webpack_require__("./src/app/shared/pipes/safe-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_auto_focus_directive__ = __webpack_require__("./src/app/shared/directives/auto-focus.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_collapse_directive__ = __webpack_require__("./src/app/shared/directives/collapse.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_debounce_directive__ = __webpack_require__("./src/app/shared/directives/debounce.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_button_button_component__ = __webpack_require__("./src/app/shared/components/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_input_input_component__ = __webpack_require__("./src/app/shared/components/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_modal_modal_component__ = __webpack_require__("./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_panel_options_panel_options_component__ = __webpack_require__("./src/app/shared/components/panel-options/panel-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_react_cpt_react_cpt_component__ = __webpack_require__("./src/app/shared/components/react-cpt/react-cpt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_vertical_pills_vertical_pills_component__ = __webpack_require__("./src/app/shared/components/vertical-pills/vertical-pills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_modal_service__ = __webpack_require__("./src/app/shared/services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_react_service__ = __webpack_require__("./src/app/shared/services/react.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_modal_modal_directive__ = __webpack_require__("./src/app/shared/components/modal/modal.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_store_service__ = __webpack_require__("./src/app/shared/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_loading_loading_component__ = __webpack_require__("./src/app/shared/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_menu_menu_component__ = __webpack_require__("./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_menu_item_menu_item_component__ = __webpack_require__("./src/app/shared/components/menu-item/menu-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_domain_handler_domain_handler_component__ = __webpack_require__("./src/app/shared/components/domain-handler/domain-handler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__classes_HttpEventInterceptor__ = __webpack_require__("./src/app/shared/classes/HttpEventInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_tooltip_icon_tooltip_icon_component__ = __webpack_require__("./src/app/shared/components/tooltip-icon/tooltip-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__directives_tooltip_directive__ = __webpack_require__("./src/app/shared/directives/tooltip.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_tooltip_tooltip_component__ = __webpack_require__("./src/app/shared/components/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__directives_debounce_click_directive__ = __webpack_require__("./src/app/shared/directives/debounce-click.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_str_replace_pipe__ = __webpack_require__("./src/app/shared/pipes/str-replace.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_srcset_pipe__ = __webpack_require__("./src/app/shared/pipes/srcset.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_viewport_detector_viewport_detector_component__ = __webpack_require__("./src/app/shared/components/viewport-detector/viewport-detector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_router_params_service__ = __webpack_require__("./src/app/shared/services/router-params.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_notify_messenger_notify_messenger_component__ = __webpack_require__("./src/app/shared/components/notify-messenger/notify-messenger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_format_date_pipe__ = __webpack_require__("./src/app/shared/pipes/format-date.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_get_main_domain_pipe__ = __webpack_require__("./src/app/shared/pipes/get-main-domain.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_permission_permission_component__ = __webpack_require__("./src/app/shared/components/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pipes_has_reached_limit_pipe__ = __webpack_require__("./src/app/shared/pipes/has-reached-limit.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pipes_get_limit_pipe__ = __webpack_require__("./src/app/shared/pipes/get-limit.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_permission_service__ = __webpack_require__("./src/app/shared/services/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_modal_info_plan_modal_info_plan_component__ = __webpack_require__("./src/app/shared/components/modal-info-plan/modal-info-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pipes_moment_date_pipe__ = __webpack_require__("./src/app/shared/pipes/moment-date.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pipes_objects_iterate_pipe__ = __webpack_require__("./src/app/shared/pipes/objects-iterate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__directives_tooltip_bootstrap_directive__ = __webpack_require__("./src/app/shared/directives/tooltip-bootstrap.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__directives_click_outside_directive__ = __webpack_require__("./src/app/shared/directives/click-outside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_main_content_main_content_component__ = __webpack_require__("./src/app/shared/components/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_nav_header_nav_header_component__ = __webpack_require__("./src/app/shared/components/nav-header/nav-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ngx_perfect_scrollbar__ = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__guards_pending_changes_guard__ = __webpack_require__("./src/app/shared/_guards/pending-changes.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__classes_CfgModule__ = __webpack_require__("./src/app/shared/classes/CfgModule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pipes_form_field_format_pipe__ = __webpack_require__("./src/app/shared/pipes/form-field-format.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pipes_isocode_country_to_name_pipe__ = __webpack_require__("./src/app/shared/pipes/isocode-country-to-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__directives_font_family_directive__ = __webpack_require__("./src/app/shared/directives/font-family.directive.ts");






























// import { TooltipModule } from "ng2-tooltip-directive";























//import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
//import { DraftEditorComponent } from "./components/draft-editor/draft-editor.component";







var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var imports = [
    __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["t" /* ReactiveFormsModule */],
    __WEBPACK_IMPORTED_MODULE_17__angular_router__["q" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["d" /* HttpClientModule */],
    __WEBPACK_IMPORTED_MODULE_22_ngx_order_pipe__["a" /* OrderModule */],
    __WEBPACK_IMPORTED_MODULE_41_ngx_chips__["a" /* TagInputModule */],
    __WEBPACK_IMPORTED_MODULE_53_ngx_perfect_scrollbar__["d" /* PerfectScrollbarModule */]
    // TooltipModule
];
var declarations = [
    __WEBPACK_IMPORTED_MODULE_3__pipes_filter_pipe__["a" /* FilterPipe */],
    __WEBPACK_IMPORTED_MODULE_57__pipes_isocode_country_to_name_pipe__["a" /* IsocodeCountryToNamePipe */],
    __WEBPACK_IMPORTED_MODULE_35__pipes_srcset_pipe__["a" /* SrcsetPipe */],
    __WEBPACK_IMPORTED_MODULE_47__pipes_moment_date_pipe__["a" /* MomentDatePipe */],
    __WEBPACK_IMPORTED_MODULE_39__pipes_format_date_pipe__["a" /* FormatDatePipe */],
    __WEBPACK_IMPORTED_MODULE_40__pipes_get_main_domain_pipe__["a" /* GetMainDomainPipe */],
    __WEBPACK_IMPORTED_MODULE_48__pipes_objects_iterate_pipe__["a" /* ObjectsIteratePipe */],
    __WEBPACK_IMPORTED_MODULE_4__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */],
    __WEBPACK_IMPORTED_MODULE_5__pipes_safe_res_url_pipe__["a" /* SafeResUrlPipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes_safe_style_pipe__["a" /* SafeStylePipe */],
    __WEBPACK_IMPORTED_MODULE_7__pipes_safe_url_pipe__["a" /* SafeUrlPipe */],
    __WEBPACK_IMPORTED_MODULE_8__directives_auto_focus_directive__["a" /* AutofocusDirective */],
    __WEBPACK_IMPORTED_MODULE_9__directives_collapse_directive__["a" /* CollapseDirective */],
    __WEBPACK_IMPORTED_MODULE_49__directives_tooltip_bootstrap_directive__["a" /* TooltipBootstrapDirective */],
    __WEBPACK_IMPORTED_MODULE_10__directives_debounce_directive__["a" /* DebounceDirective */],
    __WEBPACK_IMPORTED_MODULE_58__directives_font_family_directive__["a" /* FontFamilyDirective */],
    __WEBPACK_IMPORTED_MODULE_50__directives_click_outside_directive__["a" /* ClickOutsideDirective */],
    __WEBPACK_IMPORTED_MODULE_11__components_button_button_component__["a" /* ButtonComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_input_input_component__["a" /* InputComponent */],
    __WEBPACK_IMPORTED_MODULE_13__components_modal_modal_component__["a" /* ModalComponent */],
    __WEBPACK_IMPORTED_MODULE_14__components_panel_options_panel_options_component__["a" /* PanelOptionsComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components_react_cpt_react_cpt_component__["a" /* ReactCptComponent */],
    __WEBPACK_IMPORTED_MODULE_16__components_vertical_pills_vertical_pills_component__["a" /* VerticalPillsComponent */],
    __WEBPACK_IMPORTED_MODULE_21__components_modal_modal_directive__["a" /* ModalDirective */],
    __WEBPACK_IMPORTED_MODULE_25__components_loading_loading_component__["a" /* LoadingComponent */],
    __WEBPACK_IMPORTED_MODULE_26__components_menu_menu_component__["a" /* MenuComponent */],
    __WEBPACK_IMPORTED_MODULE_27__components_menu_item_menu_item_component__["a" /* MenuItemComponent */],
    __WEBPACK_IMPORTED_MODULE_28__components_domain_handler_domain_handler_component__["a" /* DomainHandlerComponent */],
    __WEBPACK_IMPORTED_MODULE_51__components_main_content_main_content_component__["a" /* MainContentComponent */],
    __WEBPACK_IMPORTED_MODULE_52__components_nav_header_nav_header_component__["a" /* NavHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_30__components_tooltip_icon_tooltip_icon_component__["a" /* TooltipIconComponent */],
    __WEBPACK_IMPORTED_MODULE_38__components_notify_messenger_notify_messenger_component__["a" /* NotifyMessengerComponent */],
    __WEBPACK_IMPORTED_MODULE_32__components_tooltip_tooltip_component__["a" /* TooltipComponent */],
    __WEBPACK_IMPORTED_MODULE_31__directives_tooltip_directive__["a" /* TooltipDirective */],
    __WEBPACK_IMPORTED_MODULE_33__directives_debounce_click_directive__["a" /* DebounceClickDirective */],
    __WEBPACK_IMPORTED_MODULE_34__pipes_str_replace_pipe__["a" /* StrReplacePipe */],
    __WEBPACK_IMPORTED_MODULE_56__pipes_form_field_format_pipe__["a" /* FormFieldFormatPipe */],
    __WEBPACK_IMPORTED_MODULE_42__components_permission_permission_component__["a" /* PermissionComponent */],
    __WEBPACK_IMPORTED_MODULE_43__pipes_has_reached_limit_pipe__["a" /* HasReachedLimitPipe */],
    __WEBPACK_IMPORTED_MODULE_44__pipes_get_limit_pipe__["a" /* GetLimitPipe */],
    __WEBPACK_IMPORTED_MODULE_46__components_modal_info_plan_modal_info_plan_component__["a" /* ModalInfoPlanComponent */],
    __WEBPACK_IMPORTED_MODULE_36__components_viewport_detector_viewport_detector_component__["a" /* ViewportDetectorComponent */],
];
var _exports = imports.concat(declarations);
/**
 * Quand on genere un component via la commande (ng g c, ng g p...), sa rajoute declarations dans @NgModule,
 * Il faut supprimer la ligne 'declarations: [...nameCpt]' (celle après entryComponents: [TooltipComponent])
 * et mettre le component dans l'objet declarations plus haut,
 * il sera alors exporter directement via la ligne 115 _exports...
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: SharedModule,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_55__classes_CfgModule__["a" /* CONFIG_MODULE */],
                    useValue: config
                },
                __WEBPACK_IMPORTED_MODULE_2__guards__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_18__services_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_23__services_script_service__["a" /* ScriptService */],
                __WEBPACK_IMPORTED_MODULE_24__services_store_service__["a" /* StoreService */],
                __WEBPACK_IMPORTED_MODULE_19__services_react_service__["a" /* ReactService */],
                __WEBPACK_IMPORTED_MODULE_37__services_router_params_service__["a" /* RouterParamsService */],
                __WEBPACK_IMPORTED_MODULE_45__services_permission_service__["b" /* PermissionService */],
                __WEBPACK_IMPORTED_MODULE_54__guards_pending_changes_guard__["a" /* PendingChangesGuard */],
                __WEBPACK_IMPORTED_MODULE_40__pipes_get_main_domain_pipe__["a" /* GetMainDomainPipe */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_29__classes_HttpEventInterceptor__["a" /* HttpEventInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_53_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        };
    };
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/store/animation.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationStore; });
var pathImg = "assets/img/icon_animation_section/";
var AnimationStore = [
    {
        label: "Aucun",
        imgSrc: pathImg + "anim_none.svg",
        effect: "none"
    },
    {
        label: "Slide in",
        imgSrc: pathImg + "anim_slide_in.svg",
        effect: "fadeInDown"
    },
    {
        label: "Fade in",
        imgSrc: pathImg + "anim_fade_in.svg",
        effect: "fadeIn"
    },
    {
        label: "Swing in",
        imgSrc: pathImg + "anim_swing_in.svg",
        effect: "flipInX"
    },
    {
        label: "Puff in",
        imgSrc: pathImg + "anim_puff_in.svg",
        effect: "zoomIn"
    }
];


/***/ }),

/***/ "./src/app/shared/store/script.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptStore; });
var path = "";
// const path = 'https://awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/platform/';
var ScriptStore = [
    {
        name: "SortableTreeEditorRcpt",
        src: path + "assets/js/sortable-tree-editor-rcpt.min.js"
    },
    {
        name: "SortableTreeEditorCss",
        src: path + "assets/css/sortable-tree-editor.css",
        type: "css"
    },
    {
        name: "ckeditorCdn",
        src: "https://cdn.ckeditor.com/4.6.1/full/ckeditor.js"
    },
    { name: "CkeditorRcpt", src: path + "assets/js/ckeditor-rcpt.min.js" },
    { name: "CkeditorInit", src: path + "assets/js/ckeditor_init.js" },
    {
        name: "DraftEditorRcpt",
        src: path + "assets/js/draft-editor-rcpt.min.js"
    },
    {
        name: "MediaLibraryRcpt",
        src: path + "assets/js/media-library-rcpt.min.js"
    },
    { name: "NavbarRcpt", src: path + "assets/js/wifeoengine/navbar-rcpt.js" },
    { name: "PageFormationRcpt", src: path + "assets/js/page-formation-rcpt.min.js" },
    { name: "FooterRcpt", src: path + "assets/js/wifeoengine/footer-rcpt.js" },
    { name: "UtilsRcpt", src: path + "assets/js/wifeoengine/1_utils-rcpt.js" },
    {
        name: "PaginationRcpt",
        src: path + "assets/js/wifeoengine/pagination-rcpt.min.js"
    },
    {
        name: "userBoostrapJs",
        id: "userBoostrapJs",
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        versioning: false
    },
    {
        name: "ArticleListBlogRcpt",
        src: "assets/js/articles-list-blog-rcpt.min.js"
    },
    { name: "FormRenderRcpt", src: path + "assets/js/form-render-rcpt.min.js" },
    {
        name: "FormRcpt",
        src: path + "assets/js/form-rcpt.min.js",
        dependencies: ["JsonSchemaForm"]
    },
    {
        name: "FormEditorRcpt",
        src: path + "assets/js/form-editor-rcpt.min.js",
        dependencies: ["JsonSchemaForm"]
    },
    {
        name: "BtnModeRcpt",
        src: path + "assets/js/wifeoengine/2_btn-mode-rcpt.min.js"
    },
    {
        name: "MediaElementRcpt",
        src: path + "assets/js/wifeoengine/3_media-element-rcpt.min.js"
    },
    {
        name: "PaiementInstitRcpt",
        src: path + "assets/js/paiement-instit-rcpt.min.js"
    },
    {
        name: "CountdownRcpt",
        src: path + "assets/js/countdown-rcpt.min.js"
    },
    {
        name: "DatatableJs",
        id: "DatatableJs",
        type: "js",
        src: "https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js",
        versioning: false
    },
    {
        name: "DatatableCss",
        id: "DatatableCss",
        type: "css",
        src: "https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css",
        versioning: false
    },
    {
        name: "TableRcpt",
        src: path + "assets/js/table-rcpt.min.js",
        dependencies: ["DatatableJs", "DatatableCss"]
    },
    {
        name: "CardLayoutRcpt",
        src: path + "assets/js/wifeoengine/4_card-layout-rcpt.min.js"
    },
    { name: "MasonryRcpt", src: path + "assets/js/masonry-rcpt.min.js" },
    { name: "CarouselRcpt", src: path + "assets/js/carousel-rcpt.min.js" },
    { name: "DomainRcpt", src: path + "assets/js/domain-rcpt.min.js" },
    {
        name: "EspaceReserveRcpt",
        src: path + "assets/js/espace-reserve-rcpt.min.js"
    },
    {
        name: "SocialShareRcpt",
        src: path + "assets/js/social-share-rcpt.min.js"
    },
    {
        name: "ProductPageRcpt",
        id: "ProductPageRcpt",
        src: path + "assets/js/product-page-rcpt.min.js",
        dependencies: ["CarouselRcpt"]
    },
    {
        name: "CommentsRcpt",
        id: "CommentsRcpt",
        src: "assets/js/comments-rcpt.min.js"
    },
    { name: "FormRenderRcpt", src: path + "assets/js/form-render-rcpt.min.js" },
    { name: "BtnModeRcpt", src: path + "assets/js/btn-mode-rcpt.min.js" },
    {
        name: "MediaElementRcpt",
        src: path + "assets/js/media-element-rcpt.min.js"
    },
    { name: "DtPaiementRcpt", src: path + "assets/js/dt-paiement-rcpt.min.js" },
    { name: "FactureRcpt", src: path + "assets/js/facture-rcpt.min.js" },
    { name: "CardLayoutRcpt", src: path + "assets/js/card-layout-rcpt.min.js" },
    { name: "MasonryRcpt", src: path + "assets/js/masonry-rcpt.min.js" },
    { name: "TableRcpt", src: path + "assets/js/table-rcpt.min.js" },
    {
        name: "Moment",
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
        versioning: false
    },
    {
        name: "MomentFr",
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/locale/fr.js",
        versioning: false
    },
    {
        name: "InlineMediaTextRcpt",
        src: "assets/js/wifeoengine/inline-media-text-rcpt.min.js"
    },
    { name: "WifeoEngine", src: "assets/js/wifeoengine.min.js" },
    { name: "styles", src: "assets/css/styles.min.css", type: "css" },
    {
        name: "ReactDev",
        id: "ReactDev",
        src: "https://cdnjs.cloudflare.com/ajax/libs/react/16.3.1/umd/react.development.js",
        versioning: false
    },
    {
        name: "ReactDomDev",
        id: "ReactDomDev",
        src: "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.1/umd/react-dom.development.js",
        versioning: false
    },
    {
        name: "ReactProd",
        id: "ReactProd",
        src: "https://cdnjs.cloudflare.com/ajax/libs/react/16.3.1/umd/react.production.min.js",
        versioning: false
    },
    {
        name: "ReactDomProd",
        id: "ReactDomProd",
        src: "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.1/umd/react-dom.production.min.js",
        versioning: false
    },
    {
        name: "RstBlogPosts",
        src: path + "assets/js/rst-blog-posts-rcpt.min.js"
    },
    {
        name: "JsonSchemaForm",
        src: "https://unpkg.com/react-jsonschema-form@1.0.3/dist/react-jsonschema-form.js",
        versioning: false
    },
    {
        name: "Sendinblue",
        src: "assets/js/sendinblue.js",
        versioning: false
    },
    {
        name: "ApiGooglePlatform",
        src: "https://apis.google.com/js/platform.js",
        versioning: false
    },
    {
        name: "LoginWifeoRcpt",
        src: path + "assets/js/login-wifeo-rcpt.min.js",
        dependencies: ["JsonSchemaForm", "Sendinblue", "ApiGooglePlatform"]
    },
    {
        name: "PickerColorRcpt",
        src: path + "assets/js/picker-color-rcpt.min.js"
    },
    {
        name: "Plupload",
        src: "https://cdnjs.cloudflare.com/ajax/libs/plupload/2.3.6/plupload.full.min.js",
        versioning: false
    }
];


/***/ }),

/***/ "./src/app/shared/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isObject */
/* unused harmony export toInteger */
/* unused harmony export toString */
/* unused harmony export getValueInRange */
/* unused harmony export scrollTo */
/* unused harmony export isString */
/* unused harmony export isNumber */
/* unused harmony export isInteger */
/* unused harmony export displayFieldCss */
/* unused harmony export isDefined */
/* unused harmony export mergeDeep */
/* unused harmony export simpleMerge */
/* unused harmony export slug */
/* unused harmony export get */
/* unused harmony export findObjectByAttr */
/* unused harmony export findObjectByAttrAndDelete */
/* unused harmony export moveElementInArray */
/* unused harmony export stristr */
/* unused harmony export debounce */
/* harmony export (immutable) */ __webpack_exports__["c"] = formatDomain;
/* harmony export (immutable) */ __webpack_exports__["e"] = getSrcSet;
/* unused harmony export hexToRgb */
/* harmony export (immutable) */ __webpack_exports__["b"] = fixHex;
/* harmony export (immutable) */ __webpack_exports__["a"] = encodeQueryData;
/* unused harmony export paysFact */
/* harmony export (immutable) */ __webpack_exports__["d"] = getCountryName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return value !== undefined && value !== null ? "" + value : "";
}
function getValueInRange(value, max, min) {
    if (min === void 0) { min = 0; }
    return Math.max(Math.min(value, max), min);
}
function scrollTo(classNames) {
    var elementList = document.querySelectorAll("." + classNames.join(", ."));
    var element = elementList[0];
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
function isString(value) {
    return typeof value === "string";
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return (typeof value === "number" &&
        isFinite(value) &&
        Math.floor(value) === value);
}
function displayFieldCss(form, field) {
    // console.log("form", form, field, !form.get(field).valid);
    return {
        "we-is-invalid": !form.get(field).valid,
    };
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 *
 * @param {Object} target - Les donnees par default
 * @param {Object} source - Donnees externe
 * @returns {Object} - Object merge
 */
function mergeDeep(target, source) {
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
            var _a, _b;
        });
    }
    return output;
}
/**
 * @param {Object} target - Les donnees par default
 * @param {Object} source - Donnees externe
 */
function simpleMerge(target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
}
function slug(str) {
    if (typeof str !== "string") {
        console.error("Hola, le slug n'est pas une string");
    }
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();
    // remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "_") // collapse whitespace and replace by -
        .replace(/-+/g, "_"); // collapse dashes
    return str;
}
// Safely Accessing Deeply Nested Values
function get(path, object) {
    return path.reduce(function (xs, x) { return (xs && xs[x] ? xs[x] : null); }, object);
}
function findObjectByAttr(root, attr, value, attrChildren, exclude) {
    if (typeof value !== "undefined" &&
        root[attr] === value &&
        root[exclude.key] !== exclude.value) {
        return root;
    }
    if (root[attrChildren]) {
        for (var i = 0; i < root[attrChildren].length; i++) {
            var cond = typeof exclude === "undefined"
                ? root[attrChildren][i][attr] === value
                : root[attrChildren][i][attr] === value &&
                    root[attrChildren][i][exclude.key] !== exclude.value;
            if (cond) {
                return { node: root[attrChildren][i], index: i, parent: root };
            }
            else if (root[attrChildren][i][attrChildren]) {
                var node = findObjectByAttr(root[attrChildren][i], attr, value, attrChildren, exclude);
                if (node) {
                    return node;
                }
            }
        }
    }
    return null;
}
function findObjectByAttrAndDelete(root, attr, value, attrChildren, exclude) {
    if (typeof value !== "undefined" &&
        root[attr] === value &&
        root[exclude.key] !== exclude.value) {
        return root;
    }
    if (root[attrChildren]) {
        for (var i = 0; i < root[attrChildren].length; i++) {
            var cond = typeof exclude === "undefined"
                ? root[attrChildren][i][attr] === value
                : root[attrChildren][i][attr] === value &&
                    root[attrChildren][i][exclude.key] !== exclude.value;
            if (cond) {
                // delete root[attrChildren][i];
                root[attrChildren].splice(i, 1);
                return root;
            }
            else if (root[attrChildren][i][attrChildren]) {
                var node = findObjectByAttr(root[attrChildren][i], attr, value, attrChildren, exclude);
                if (node) {
                    root[attrChildren][i][attrChildren].splice(node.index, 1);
                    return root;
                }
            }
        }
    }
    return null;
}
function moveElementInArray(array, value, positionChange) {
    var oldIndex = array.indexOf(value, 0);
    if (oldIndex > -1) {
        var newIndex = positionChange;
        if (newIndex < 0) {
            newIndex = 0;
        }
        else if (newIndex >= array.length) {
            newIndex = array.length;
        }
        var arrayClone = array.slice();
        arrayClone.splice(oldIndex, 1);
        arrayClone.splice(newIndex, 0, value);
        return arrayClone;
    }
    return array;
}
function stristr(haystack, needle, bool) {
    //  discuss at: http://locutus.io/php/stristr/
    // original by: Kevin van Zonneveld (http://kvz.io)
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    //   example 1: stristr('Kevin van Zonneveld', 'Van')
    //   returns 1: 'van Zonneveld'
    //   example 2: stristr('Kevin van Zonneveld', 'VAN', true)
    //   returns 2: 'Kevin '
    var pos = 0;
    haystack += "";
    pos = haystack.toLowerCase().indexOf((needle + "").toLowerCase());
    if (pos === -1) {
        return false;
    }
    else {
        if (bool) {
            return haystack.substr(0, pos);
        }
        else {
            return haystack.slice(pos);
        }
    }
}
function debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout, result;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }
        // Return timeout so debounced function can be cancelled
        result = result || {};
        result.timeout = timeout;
        return result;
    };
}
/**
 * Change si besoin le scheme et le domain de la requete passé en paramètre
 * @param str url de la requete
 */
function formatDomain(str) {
    // On recupere les bonnes variables selon l'environment d'export
    var scheme = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].scheme, domain = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].domain, reactProd = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].reactProd;
    var defaultScheme = "https";
    var defaultDomain = "wifeosite.com";
    if (defaultDomain === domain && defaultScheme === scheme) {
        return str;
    }
    var newStr = str;
    if (!reactProd) {
        newStr = newStr.replace(defaultScheme, scheme);
        // console.log("newStr", newStr);
        var pathAws = "awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/";
        var urlSplit = str.indexOf(pathAws) + 1 && str.split(pathAws);
        if (urlSplit) {
            if (urlSplit.length === 2) {
                var pathSplit = urlSplit[1].split("/");
                var subdomain = pathSplit[0] === "platform" ? "api" : pathSplit[0];
                defaultDomain =
                    "awbjanv94g.execute-api.eu-west-1.amazonaws.com/prod/" +
                        pathSplit[0];
                domain = subdomain + "." + domain;
            }
        }
    }
    newStr = newStr.replace(defaultDomain, domain);
    // console.log("newStr", newStr);
    return newStr;
}
function getSrcSet(srcs) {
    if (typeof srcs === "undefined") {
        return srcs;
    }
    var _srcs = null;
    if (typeof srcs === "object") {
        _srcs = srcs;
    }
    else if (typeof srcs === "string" && srcs.charAt(0) === "{") {
        _srcs = JSON.parse(srcs);
    }
    if (!_srcs) {
        return;
    }
    var sizes = [
        "default",
        160,
        320,
        480,
        640,
        800,
        1024,
        1280,
        1440,
        1600,
        1920,
    ];
    var srcSet = [];
    if (_srcs.default) {
        srcSet.push(_srcs.default + " 1x");
    }
    else {
        sizes.forEach(function (size) {
            var _size = _srcs[size];
            if (_size) {
                srcSet.push(_srcs[size] + " " + size + "w");
            }
        });
    }
    return srcSet.join(",");
}
function hexToRgb(hex, forCss, opacity) {
    if (hex === "transparent") {
        if (forCss) {
            return hex;
        }
        return { r: 255, g: 255, b: 255, a: 0 };
    }
    function hexToR(h) {
        return parseInt(cutHex(h).substring(0, 2), 16);
    }
    function hexToG(h) {
        return parseInt(cutHex(h).substring(2, 4), 16);
    }
    function hexToB(h) {
        return parseInt(cutHex(h).substring(4, 6), 16);
    }
    function cutHex(h) {
        return h.charAt(0) === "#" ? h.substring(1, 7) : h;
    }
    var r = hexToR(hex);
    var g = hexToG(hex);
    var b = hexToB(hex);
    var rgb = { r: r, g: g, b: b };
    if (typeof opacity !== "undefined") {
        var a = opacity;
        if (forCss) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
        }
        return __assign({}, rgb, { a: a });
    }
    if (forCss) {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    return rgb;
}
/**
 * Certain valeur Hex des themes sont composer de 3 lettres/chiffres uniquement (ex: #369)
 * on les transforme donc avec 6 lettres/chiffres
 */
function fixHex(hex) {
    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
    if (hex.length === 4) {
        hex = insert(hex, 1, hex.substr(1, 1)); // #3369
        hex = insert(hex, 3, hex.substr(3, 1)); // #33669
        hex = insert(hex, 5, hex.substr(5, 1)); // #336699
        // console.log("hex update ->", hex);
    }
    return hex;
}
function encodeQueryData(data) {
    var ret = [];
    for (var d in data) {
        if (typeof data[d] !== "undefined") {
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        }
    }
    return ret.join("&");
}
var paysFact = [
    { codeIso: "DE", nom: "Allemagne" },
    { codeIso: "AT", nom: "Autriche" },
    { codeIso: "BE", nom: "Belgique" },
    { codeIso: "CA", nom: "Canada" },
    { codeIso: "CN", nom: "Chine" },
    { codeIso: "ES", nom: "Espagne" },
    { codeIso: "FI", nom: "Finlande" },
    { codeIso: "FR", nom: "France (Hors DOM TOM)" },
    { codeIso: "GR", nom: "Grèce" },
    { codeIso: "IT", nom: "Italie" },
    { codeIso: "JP", nom: "Japon" },
    { codeIso: "LU", nom: "Luxembourg" },
    { codeIso: "NL", nom: "Pays-bas" },
    { codeIso: "PL", nom: "Pologne" },
    { codeIso: "PT", nom: "Portugal" },
    { codeIso: "CZ", nom: "République Tchèque" },
    { codeIso: "GB", nom: "Royaume-Uni" },
    { codeIso: "SE", nom: "Suède" },
    { codeIso: "CH", nom: "Suisse" },
    { codeIso: "DK", nom: "Danemark" },
    { codeIso: "US", nom: "Etats-Unis" },
    { codeIso: "HK", nom: "Hong-Kong" },
    { codeIso: "NO", nom: "Norvège" },
    { codeIso: "AU", nom: "Australie" },
    { codeIso: "SG", nom: "Singapour" },
    { codeIso: "IE", nom: "Irlande" },
    { codeIso: "NZ", nom: "Nouvelle-Zélande" },
    { codeIso: "KR", nom: "Corée du Sud" },
    { codeIso: "IL", nom: "Israel" },
    { codeIso: "ZA", nom: "Afrique du Sud" },
    { codeIso: "NG", nom: "Nigeria" },
    { codeIso: "CI", nom: "C\u00c3\u00b4te d'Ivoire" },
    { codeIso: "TG", nom: "Togo" },
    { codeIso: "BO", nom: "Bolivie" },
    { codeIso: "MU", nom: "Ile Maurice" },
    { codeIso: "RO", nom: "Roumanie" },
    { codeIso: "SK", nom: "Slovaquie" },
    { codeIso: "DZ", nom: "Alg\u00c3\u00a9rie" },
    { codeIso: "AS", nom: "Samoa Am\u00c3\u00a9ricaines" },
    { codeIso: "AD", nom: "Andorre" },
    { codeIso: "AO", nom: "Angola" },
    { codeIso: "AI", nom: "Anguilla" },
    { codeIso: "AG", nom: "Antigua et Barbuda" },
    { codeIso: "AR", nom: "Argentine" },
    { codeIso: "AM", nom: "Arm\u00c3\u00a9nie" },
    { codeIso: "AW", nom: "Aruba" },
    { codeIso: "AZ", nom: "Azerba\u00c3\u00afdjan" },
    { codeIso: "BS", nom: "Bahamas" },
    { codeIso: "BH", nom: "Bahre\u00c3\u00afn" },
    { codeIso: "BD", nom: "Bangladesh" },
    { codeIso: "BB", nom: "Barbade" },
    { codeIso: "BY", nom: "B\u00c3\u00a9larus" },
    { codeIso: "BZ", nom: "Belize" },
    { codeIso: "BJ", nom: "B\u00c3\u00a9nin" },
    { codeIso: "BM", nom: "Bermudes" },
    { codeIso: "BT", nom: "Bhoutan" },
    { codeIso: "BW", nom: "Botswana" },
    { codeIso: "BR", nom: "Br\u00c3\u00a9sil" },
    { codeIso: "BN", nom: "Brun\u00c3\u00a9i Darussalam" },
    { codeIso: "BF", nom: "Burkina Faso" },
    { codeIso: "MM", nom: "Burma (Myanmar)" },
    { codeIso: "BI", nom: "Burundi" },
    { codeIso: "KH", nom: "Cambodge" },
    { codeIso: "CM", nom: "Cameroun" },
    { codeIso: "CV", nom: "Cap-Vert" },
    { codeIso: "CF", nom: "Centrafricaine, R\u00c3\u00a9publique" },
    { codeIso: "TD", nom: "Tchad" },
    { codeIso: "CL", nom: "Chili" },
    { codeIso: "CO", nom: "Colombie" },
    { codeIso: "KM", nom: "Comores" },
    { codeIso: "CD", nom: "Congo, R\u00c3\u00a9p. D\u00c3\u00a9m." },
    { codeIso: "CG", nom: "Congo, R\u00c3\u00a9p." },
    { codeIso: "CR", nom: "Costa Rica" },
    { codeIso: "HR", nom: "Croatie" },
    { codeIso: "CU", nom: "Cuba" },
    { codeIso: "CY", nom: "Chypre" },
    { codeIso: "DJ", nom: "Djibouti" },
    { codeIso: "DM", nom: "Dominica" },
    { codeIso: "DO", nom: "R\u00c3\u00a9publique Dominicaine" },
    { codeIso: "TL", nom: "Timor oriental" },
    { codeIso: "EC", nom: "\u00c3\u2030quateur" },
    { codeIso: "EG", nom: "\u00c3\u2030gypte" },
    { codeIso: "SV", nom: "El Salvador" },
    { codeIso: "GQ", nom: "Guin\u00c3\u00a9e \u00c3\u2030quatoriale" },
    { codeIso: "ER", nom: "\u00c3\u2030rythr\u00c3\u00a9e" },
    { codeIso: "EE", nom: "Estonie" },
    { codeIso: "ET", nom: "\u00c3\u2030thiopie" },
    { codeIso: "FK", nom: "Falkland,  \u00c3\u017dles" },
    { codeIso: "FO", nom: "F\u00c3\u00a9ro\u00c3\u00a9,  \u00c3\u017dles" },
    { codeIso: "FJ", nom: "Fidji" },
    { codeIso: "GA", nom: "Gabon" },
    { codeIso: "GM", nom: "Gambie" },
    { codeIso: "GE", nom: "G\u00c3\u00a9orgie" },
    { codeIso: "GH", nom: "Ghana" },
    { codeIso: "GD", nom: "Grenade" },
    { codeIso: "GL", nom: "Groenland" },
    { codeIso: "GI", nom: "Gibraltar" },
    { codeIso: "GP", nom: "Guadeloupe" },
    { codeIso: "GU", nom: "Guam" },
    { codeIso: "GT", nom: "Guatemala" },
    { codeIso: "GG", nom: "Guernesey" },
    { codeIso: "GN", nom: "Guin\u00c3\u00a9e" },
    { codeIso: "GW", nom: "Guin\u00c3\u00a9e-Bissau" },
    { codeIso: "GY", nom: "Guyana" },
    { codeIso: "HT", nom: "Ha\u00c3\u0192\u00c2\u00aeti" },
    {
        codeIso: "HM",
        nom: "Heard,  \u00c3\u017dle et Mcdonald,  \u00c3\u017dles",
    },
    {
        codeIso: "VA",
        nom: "Saint-Siege (\u00c3\u2030tat de la Cit\u00c3\u00a9 du Vatican)",
    },
    { codeIso: "HN", nom: "Honduras" },
    { codeIso: "IS", nom: "Islande" },
    { codeIso: "IN", nom: "Inde" },
    { codeIso: "ID", nom: "Indon\u00c3\u00a9sie" },
    { codeIso: "IR", nom: "Iran" },
    { codeIso: "IQ", nom: "Iraq" },
    { codeIso: "IM", nom: "Man,  \u00c3\u017dle de" },
    { codeIso: "JM", nom: "Jamaique" },
    { codeIso: "JE", nom: "Jersey" },
    { codeIso: "JO", nom: "Jordanie" },
    { codeIso: "KZ", nom: "Kazakhstan" },
    { codeIso: "KE", nom: "Kenya" },
    { codeIso: "KI", nom: "Kiribati" },
    {
        codeIso: "KP",
        nom: "Cor\u00c3\u00a9e, R\u00c3\u00a9p. Populaire D\u00c3\u00a9m. de",
    },
    { codeIso: "KW", nom: "Kowe\u00c3\u00aft" },
    { codeIso: "KG", nom: "Kirghizistan" },
    { codeIso: "LA", nom: "Laos" },
    { codeIso: "LV", nom: "Lettonie" },
    { codeIso: "LB", nom: "Liban" },
    { codeIso: "LS", nom: "Lesotho" },
    { codeIso: "LR", nom: "Lib\u00c3\u00a9ria" },
    { codeIso: "LY", nom: "Libyenne, Jamahiriya Arabe" },
    { codeIso: "LI", nom: "Liechtenstein" },
    { codeIso: "LT", nom: "Lituanie" },
    { codeIso: "MO", nom: "Macao" },
    { codeIso: "MK", nom: "Mac\u00c3\u00a9doine" },
    { codeIso: "MG", nom: "Madagascar" },
    { codeIso: "MW", nom: "Malawi" },
    { codeIso: "MY", nom: "Malaisie" },
    { codeIso: "MV", nom: "Maldives" },
    { codeIso: "ML", nom: "Mali" },
    { codeIso: "MT", nom: "Malte" },
    { codeIso: "MH", nom: "Marshall,  \u00c3\u017dles" },
    { codeIso: "MQ", nom: "Martinique" },
    { codeIso: "MR", nom: "Mauritanie" },
    { codeIso: "HU", nom: "Hongrie" },
    { codeIso: "YT", nom: "Mayotte" },
    { codeIso: "MX", nom: "Mexique" },
    { codeIso: "FM", nom: "Micron\u00c3\u00a9sie" },
    { codeIso: "MD", nom: "Moldova" },
    { codeIso: "MC", nom: "Monaco" },
    { codeIso: "MN", nom: "Mongolie" },
    { codeIso: "ME", nom: "Mont\u00c3\u00a9n\u00c3\u00a9gro" },
    { codeIso: "MS", nom: "Montserrat" },
    { codeIso: "MA", nom: "Maroc" },
    { codeIso: "MZ", nom: "Mozambique" },
    { codeIso: "NA", nom: "Namibie" },
    { codeIso: "NR", nom: "Nauru" },
    { codeIso: "NP", nom: "N\u00c3\u00a9pal" },
    { codeIso: "AN", nom: "Antilles N\u00c3\u00a9erlandaises" },
    { codeIso: "NC", nom: "Nouvelle-Cal\u00c3\u00a9donie" },
    { codeIso: "NI", nom: "Nicaragua" },
    { codeIso: "NE", nom: "Niger" },
    { codeIso: "NU", nom: "Niu\u00c3\u00a9" },
    { codeIso: "NF", nom: "Norfolk,  \u00c3\u017dle" },
    { codeIso: "MP", nom: "Mariannes du Nord,  \u00c3\u017dles" },
    { codeIso: "OM", nom: "Oman" },
    { codeIso: "PK", nom: "Pakistan" },
    { codeIso: "PW", nom: "Palaos" },
    { codeIso: "PS", nom: "Palestinien Occup\u00c3\u00a9, Territoire" },
    { codeIso: "PA", nom: "Panama" },
    { codeIso: "PG", nom: "Papouasie-Nouvelle-Guin\u00c3\u00a9e" },
    { codeIso: "PY", nom: "Paraguay" },
    { codeIso: "PE", nom: "P\u00c3\u00a9rou" },
    { codeIso: "PH", nom: "Philippines" },
    { codeIso: "PN", nom: "Pitcairn" },
    { codeIso: "PR", nom: "Porto Rico" },
    { codeIso: "QA", nom: "Qatar" },
    { codeIso: "RE", nom: "R\u00c3\u00a9union,  \u00c3\u017dle de la" },
    { codeIso: "RU", nom: "Russie, F\u00c3\u00a9d\u00c3\u00a9ration de" },
    { codeIso: "RW", nom: "Rwanda" },
    { codeIso: "BL", nom: "Saint-Barth\u00c3\u00a9lemy" },
    { codeIso: "KN", nom: "Saint-Kitts-et-Nevis" },
    { codeIso: "LC", nom: "Sainte-Lucie" },
    { codeIso: "MF", nom: "Saint-Martin" },
    { codeIso: "PM", nom: "Saint-Pierre-et-Miquelon" },
    { codeIso: "VC", nom: "Saint-Vincent-et-Les Grenadines" },
    { codeIso: "WS", nom: "Samoa" },
    { codeIso: "SM", nom: "Saint-Marin" },
    { codeIso: "ST", nom: "Sao Tom\u00c3\u00a9-et-Principe" },
    { codeIso: "SA", nom: "Arabie Saoudite" },
    { codeIso: "SN", nom: "S\u00c3\u00a9n\u00c3\u00a9gal" },
    { codeIso: "RS", nom: "Serbie" },
    { codeIso: "SC", nom: "Seychelles" },
    { codeIso: "SL", nom: "Sierra Leone" },
    { codeIso: "SI", nom: "Slov\u00c3\u00a9nie" },
    { codeIso: "SB", nom: "Salomon,  \u00c3\u017dles" },
    { codeIso: "SO", nom: "Somalie" },
    {
        codeIso: "GS",
        nom: "G\u00c3\u00a9orgie du Sud et les  \u00c3\u017dles Sandwich du Sud",
    },
    { codeIso: "LK", nom: "Sri Lanka" },
    { codeIso: "SD", nom: "Soudan" },
    { codeIso: "SR", nom: "Suriname" },
    { codeIso: "SJ", nom: "Svalbard et  \u00c3\u017dle Jan Mayen" },
    { codeIso: "SZ", nom: "Swaziland" },
    { codeIso: "SY", nom: "Syrienne" },
    { codeIso: "TW", nom: "Ta\u00c3\u00afwan" },
    { codeIso: "TJ", nom: "Tadjikistan" },
    { codeIso: "TZ", nom: "Tanzanie" },
    { codeIso: "TH", nom: "Tha\u00c3\u00aflande" },
    { codeIso: "TK", nom: "Tokelau" },
    { codeIso: "TO", nom: "Tonga" },
    { codeIso: "TT", nom: "Trinit\u00c3\u00a9-et-Tobago" },
    { codeIso: "TN", nom: "Tunisie" },
    { codeIso: "TR", nom: "Turquie" },
    { codeIso: "TM", nom: "Turkm\u00c3\u00a9nistan" },
    { codeIso: "TC", nom: "Turks et Caiques,  \u00c3\u017dles" },
    { codeIso: "TV", nom: "Tuvalu" },
    { codeIso: "UG", nom: "Ouganda" },
    { codeIso: "UA", nom: "Ukraine" },
    { codeIso: "AE", nom: "\u00c3\u2030mirats Arabes Unis" },
    { codeIso: "UY", nom: "Uruguay" },
    { codeIso: "UZ", nom: "Ouzb\u00c3\u00a9kistan" },
    { codeIso: "VU", nom: "Vanuatu" },
    { codeIso: "VE", nom: "Venezuela" },
    { codeIso: "VN", nom: "Vietnam" },
    { codeIso: "VG", nom: " \u00c3\u017dles Vierges Britanniques" },
    {
        codeIso: "VI",
        nom: " \u00c3\u017dles Vierges des \u00c3\u2030tats-Unis",
    },
    { codeIso: "WF", nom: "Wallis et Futuna" },
    { codeIso: "EH", nom: "Sahara Occidental" },
    { codeIso: "YE", nom: "Y\u00c3\u00a9men" },
    { codeIso: "ZM", nom: "Zambie" },
    { codeIso: "ZW", nom: "Zimbabwe" },
    { codeIso: "AL", nom: "Albanie" },
    { codeIso: "AF", nom: "Afghanistan" },
    { codeIso: "AQ", nom: "Antarctique" },
    { codeIso: "BA", nom: "Bosnie-Herz\u00c3\u00a9govine" },
    { codeIso: "BV", nom: "Bouvet,  \u00c3\u017dle" },
    {
        codeIso: "IO",
        nom: "Oc\u00c3\u00a9an Indien, Territoire Britannique de L'",
    },
    { codeIso: "BG", nom: "Bulgarie" },
    { codeIso: "KY", nom: "Ca\u00c3\u00afmans,  \u00c3\u017dles" },
    { codeIso: "CX", nom: "Christmas,  \u00c3\u017dle" },
    { codeIso: "CC", nom: "Cocos (Keeling),  \u00c3\u017dles" },
    { codeIso: "CK", nom: "Cook,  \u00c3\u017dles" },
    { codeIso: "GF", nom: "Guyane Fran\u00c3\u00a7aise" },
    { codeIso: "PF", nom: "Polyn\u00c3\u00a9sie Fran\u00c3\u00a7aise" },
    { codeIso: "TF", nom: "Terres Australes Fran\u00c3\u00a7aises" },
    {
        codeIso: "AX",
        nom: "\u00c3\u0192\u00e2\u20ac\u00a6land,  \u00c3\u017dles",
    },
];
function getCountryName(codeIso) {
    var pays = paysFact.find(function (p) { return p.codeIso === codeIso; });
    return pays ? pays.nom : "";
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    scheme: "https",
    domain: "epicblue.fr",
    reactProd: false,
    apiProd: false,
    pathApps: "localhost:4201",
    // lien du front pour réserver un nom de domaine
    pathToBuyDomain: "domaines",
    pathToBuyPlans: "offres",
    pathParent: null,
    // Pour la page dashboard/facturation
    uidPaiementWifeosite: {
        distant_id: 44,
        uid: "6417DE16-3FB7-42C7-8B8D-BB45C9C0212A"
    },
    versionFiles: "0.0.173",
    hostWifeoCms: "www.wifeocms.com"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__ = __webpack_require__("./src/app/app.module.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
    // if (window) {
    //     window.console.log = function () { };
    // }
}
__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["j" /* platformBrowser */]().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_2__app_app_module_ngfactory__["a" /* AppModuleNgFactory */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.466013be6757b51389b8.bundle.js.map