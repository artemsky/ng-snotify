webpackJsonp([1],{

/***/ "./dist/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__snotify_snotify_component__ = __webpack_require__("./dist/snotify/snotify.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__snotify_toast_toast_component__ = __webpack_require__("./dist/snotify/toast/toast.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__snotify_toast_icon_icon_component__ = __webpack_require__("./dist/snotify/toast/icon/icon.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__snotify_snotify_service__ = __webpack_require__("./dist/snotify/snotify.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__snotify_pipes_truncate_pipe__ = __webpack_require__("./dist/snotify/pipes/truncate.pipe.js");
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__snotify_snotify_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__snotify_enum_SnotifyAction_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyAction.enum.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__snotify_enum_SnotifyPosition_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyPosition.enum.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__snotify_enum_SnotifyPosition_enum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__snotify_enum_SnotifyType_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyType.enum.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__snotify_toast_snotify_toast_model__ = __webpack_require__("./dist/snotify/toast/snotify-toast.model.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnotifyModule; });














var SnotifyModule = (function () {
    function SnotifyModule() {
    }
    SnotifyModule.forRoot = function () {
        return {
            ngModule: SnotifyModule,
            providers: [__WEBPACK_IMPORTED_MODULE_5__snotify_snotify_service__["a" /* SnotifyService */]]
        };
    };
    return SnotifyModule;
}());

SnotifyModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
                ],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__snotify_snotify_component__["a" /* SnotifyComponent */], __WEBPACK_IMPORTED_MODULE_3__snotify_toast_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_4__snotify_toast_icon_icon_component__["a" /* IconComponent */], __WEBPACK_IMPORTED_MODULE_6__snotify_pipes_truncate_pipe__["a" /* TruncatePipe */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__snotify_snotify_component__["a" /* SnotifyComponent */], __WEBPACK_IMPORTED_MODULE_6__snotify_pipes_truncate_pipe__["a" /* TruncatePipe */]
                ]
            },] },
];
/** @nocollapse */
SnotifyModule.ctorParameters = function () { return []; };


/***/ }),

/***/ "./dist/snotify/enum/SnotifyAction.enum.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnotifyAction; });
var SnotifyAction;
(function (SnotifyAction) {
    SnotifyAction[SnotifyAction["onInit"] = 3] = "onInit";
    SnotifyAction[SnotifyAction["beforeDestroy"] = 0] = "beforeDestroy";
    SnotifyAction[SnotifyAction["afterDestroy"] = 1] = "afterDestroy";
    SnotifyAction[SnotifyAction["onClick"] = 10] = "onClick";
    SnotifyAction[SnotifyAction["onHoverEnter"] = 11] = "onHoverEnter";
    SnotifyAction[SnotifyAction["onHoverLeave"] = 12] = "onHoverLeave";
})(SnotifyAction || (SnotifyAction = {}));


/***/ }),

/***/ "./dist/snotify/enum/SnotifyPosition.enum.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnotifyPosition; });
var SnotifyPosition;
(function (SnotifyPosition) {
    SnotifyPosition[SnotifyPosition["left_top"] = 0] = "left_top";
    SnotifyPosition[SnotifyPosition["left_center"] = 1] = "left_center";
    SnotifyPosition[SnotifyPosition["left_bottom"] = 2] = "left_bottom";
    SnotifyPosition[SnotifyPosition["right_top"] = 3] = "right_top";
    SnotifyPosition[SnotifyPosition["right_center"] = 4] = "right_center";
    SnotifyPosition[SnotifyPosition["right_bottom"] = 5] = "right_bottom";
    SnotifyPosition[SnotifyPosition["center_top"] = 6] = "center_top";
    SnotifyPosition[SnotifyPosition["center_center"] = 7] = "center_center";
    SnotifyPosition[SnotifyPosition["center_bottom"] = 8] = "center_bottom";
})(SnotifyPosition || (SnotifyPosition = {}));


/***/ }),

/***/ "./dist/snotify/enum/SnotifyType.enum.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnotifyType; });
var SnotifyType;
(function (SnotifyType) {
    SnotifyType[SnotifyType["SIMPLE"] = 0] = "SIMPLE";
    SnotifyType[SnotifyType["SUCCESS"] = 1] = "SUCCESS";
    SnotifyType[SnotifyType["ERROR"] = 2] = "ERROR";
    SnotifyType[SnotifyType["WARNING"] = 3] = "WARNING";
    SnotifyType[SnotifyType["INFO"] = 4] = "INFO";
    SnotifyType[SnotifyType["ASYNC"] = 5] = "ASYNC";
    SnotifyType[SnotifyType["CONFIRM"] = 6] = "CONFIRM";
    SnotifyType[SnotifyType["PROMPT"] = 7] = "PROMPT";
})(SnotifyType || (SnotifyType = {}));


/***/ }),

/***/ "./dist/snotify/pipes/truncate.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var limit = 40;
        var trail = '...';
        if (args.length > 0) {
            limit = args.length > 0 ? parseInt(args[0], 10) : limit;
            trail = args.length > 1 ? args[1] : trail;
        }
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());

TruncatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Pipe */], args: [{
                name: 'truncate'
            },] },
];
/** @nocollapse */
TruncatePipe.ctorParameters = function () { return []; };


/***/ }),

/***/ "./dist/snotify/snotify.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__snotify_service__ = __webpack_require__("./dist/snotify/snotify.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyAction.enum.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyPosition.enum.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnotifyComponent; });




var SnotifyComponent = (function () {
    function SnotifyComponent(service, render, snotify) {
        this.service = service;
        this.render = render;
        this.snotify = snotify;
    }
    /**
     * Init base options. Subscribe to options, lifecycle change
     */
    SnotifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setOptions(this.service.options);
        this.optionsSubscription = this.service.optionsChanged.subscribe(function (options) {
            _this.setOptions(options);
        });
        this.setPosition(this.service.options.position);
        this.emitter = this.service.emitter.subscribe(function (toasts) {
            _this.notifications = toasts;
            var list = _this.notifications.filter(function (toast) { return toast.config.backdrop >= 0; });
            if (list.length) {
                _this.backdrop = 0;
                setTimeout(function () {
                    _this.backdrop = list[list.length - 1].config.backdrop;
                }, 10);
            }
            else {
                _this.backdrop = 0;
                setTimeout(function () {
                    _this.backdrop = -1;
                }, _this.service.options.transition);
            }
        });
        this.lifecycleSubscription = this.service.lifecycle.subscribe(function (info) {
            switch (info.action) {
                case __WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].onInit:
                    if (_this.service.onInit) {
                        _this.service.onInit(info.toast);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].onClick:
                    if (_this.service.onClick) {
                        _this.service.onClick(info.toast);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].onHoverEnter:
                    if (_this.service.onHoverEnter) {
                        _this.service.onHoverEnter(info.toast);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].onHoverLeave:
                    if (_this.service.onHoverLeave) {
                        _this.service.onHoverLeave(info.toast);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].beforeDestroy:
                    if (_this.service.beforeDestroy) {
                        _this.service.beforeDestroy(info.toast);
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].afterDestroy:
                    if (_this.service.afterDestroy) {
                        _this.service.afterDestroy(info.toast);
                    }
                    break;
            }
        });
    };
    /**
     * Setup global options object
     * @param options {SnotifyOptions}
     */
    SnotifyComponent.prototype.setOptions = function (options) {
        if (this.service.options.newOnTop) {
            this.dockSize_a = -options.maxOnScreen;
            this.dockSize_b = undefined;
        }
        else {
            this.dockSize_a = 0;
            this.dockSize_b = options.maxOnScreen;
        }
        this.setPosition(options.position);
    };
    /**
     * Setup notifications position
     * @param position {SnotifyPosition}
     */
    SnotifyComponent.prototype.setPosition = function (position) {
        this.render.removeAttribute(this.snotify.nativeElement, 'class');
        switch (position) {
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].left_top:
                this.render.addClass(this.snotify.nativeElement, 'snotify-leftTop');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].left_center:
                this.render.addClass(this.snotify.nativeElement, 'snotify-leftCenter');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].left_bottom:
                this.render.addClass(this.snotify.nativeElement, 'snotify-leftBottom');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].right_top:
                this.render.addClass(this.snotify.nativeElement, 'snotify-rightTop');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].right_center:
                this.render.addClass(this.snotify.nativeElement, 'snotify-rightCenter');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].right_bottom:
                this.render.addClass(this.snotify.nativeElement, 'snotify-rightBottom');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].center_top:
                this.render.addClass(this.snotify.nativeElement, 'snotify-centerTop');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].center_center:
                this.render.addClass(this.snotify.nativeElement, 'snotify-centerCenter');
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].center_bottom:
                this.render.addClass(this.snotify.nativeElement, 'snotify-centerBottom');
                break;
        }
    };
    /**
     * Unsubscribe subscriptions
     */
    SnotifyComponent.prototype.ngOnDestroy = function () {
        this.emitter.unsubscribe();
        this.optionsSubscription.unsubscribe();
        this.lifecycleSubscription.unsubscribe();
    };
    return SnotifyComponent;
}());

SnotifyComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */], args: [{
                selector: 'app-snotify',
                template: "<div class=\"snotify-backdrop\" *ngIf=\"backdrop >= 0\" [style.opacity]=\"backdrop\"></div> <app-snotify-toast *ngFor=\"let notification of notifications| slice:dockSize_a:dockSize_b\" [toast]=\"notification\"> </app-snotify-toast> ",
                styles: [":host { display: block; position: fixed; width: 300px; z-index: 9999; box-sizing: border-box; } :host * { box-sizing: border-box; } :host(.snotify-leftTop), :host(.snotify-leftCenter), :host(.snotify-leftBottom) { left: 10px; } :host(.snotify-rightTop), :host(.snotify-rightCenter), :host(.snotify-rightBottom) { right: 10px; } :host(.snotify-centerTop), :host(.snotify-centerCenter), :host(.snotify-centerBottom) { left: calc(50% - 300px/2); } :host(.snotify-leftTop), :host(.snotify-rightTop), :host(.snotify-rightTop) { top: 10px; } :host(.snotify-leftCenter), :host(.snotify-rightCenter), :host(.snotify-centerCenter) { top: 50%; transform: translateY(-50%); } :host(.snotify-leftBottom), :host(.snotify-rightBottom), :host(.snotify-centerBottom) { bottom: 10px; } .snotify-backdrop { position: fixed; top: 0; right: 0; bottom: 0; left: 0; background-color: #000000; opacity: 0; z-index: -1; transition: opacity .3s; } "]
            },] },
];
/** @nocollapse */
SnotifyComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__snotify_service__["a" /* SnotifyService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */], },
]; };


/***/ }),

/***/ "./dist/snotify/snotify.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_snotify_toast_model__ = __webpack_require__("./dist/snotify/toast/snotify-toast.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_PromiseObservable__ = __webpack_require__("./node_modules/rxjs/observable/PromiseObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_PromiseObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_PromiseObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyType.enum.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enum_SnotifyPosition_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyPosition.enum.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enum_SnotifyAction_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyAction.enum.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnotifyService; });







/**
 * SnotifyService - create, remove, config toasts
 */
var SnotifyService = (function () {
    /**
     * Constructor - initialize base configuration objects
     */
    function SnotifyService() {
        this.emitter = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.lifecycle = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.optionsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.toastChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.toastDeleted = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.notifications = [];
        this.config = {
            showProgressBar: true,
            timeout: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            buttons: [
                { text: 'Ok', action: null, bold: true },
                { text: 'Cancel', action: null, bold: false },
            ],
            placeholder: 'Enter answer here...',
            bodyMaxLength: 150,
            titleMaxLength: 16,
            backdrop: -1
        };
        this._options = {
            newOnTop: true,
            position: __WEBPACK_IMPORTED_MODULE_5__enum_SnotifyPosition_enum__["a" /* SnotifyPosition */].right_bottom,
            maxOnScreen: 8,
            transition: 400,
            maxHeight: 300
        };
    }
    /**
     * Generates random id
     * @return {number}
     */
    SnotifyService.generateRandomId = function () {
        return Math.floor(Math.random() * (Date.now() - 1)) + 1;
    };
    /**
     * Simple is object check.
     * @param item {Object<any>}
     * @returns {boolean}
     */
    SnotifyService.isObject = function (item) {
        return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
    };
    /**
     * Deep merge objects.
     * @param sources {Array<Object>}
     * @returns {Object<any>}
     */
    SnotifyService.mergeDeep = function () {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i] = arguments[_i];
        }
        var target = {};
        if (!sources.length) {
            return target;
        }
        var _loop_1 = function () {
            var source = sources.shift();
            if (SnotifyService.isObject(source)) {
                var _loop_2 = function (key) {
                    if (SnotifyService.isObject(source[key])) {
                        target[key] = SnotifyService.mergeDeep(target[key], source[key]);
                    }
                    else if (Array.isArray(source[key])) {
                        if (!target[key]) {
                            Object.assign(target, (_a = {}, _a[key] = source[key], _a));
                        }
                        else {
                            target[key].forEach(function (value, i) {
                                target[key][i] = SnotifyService.mergeDeep(value, source[key][i]);
                            });
                        }
                    }
                    else {
                        Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                    }
                    var _a, _b;
                };
                for (var key in source) {
                    _loop_2(key);
                }
            }
        };
        while (sources.length > 0) {
            _loop_1();
        }
        return target;
    };
    /**
     * emit changes in notifications array
     */
    SnotifyService.prototype.emit = function () {
        this.emitter.next(this.getAll());
    };
    /**
     * Set global config
     * @param config {SnotifyConfig}
     * @param options {SnotifyOptions}
     */
    SnotifyService.prototype.setConfig = function (config, options) {
        this.config = Object.assign(this.config, config);
        this._options = Object.assign(this._options, options);
        this.optionsChanged.next(this._options);
    };
    Object.defineProperty(SnotifyService.prototype, "options", {
        /**
         * get SnotifyOptions
         * @return {SnotifyOptions}
         */
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * returns SnotifyToast object
     * @param id {Number}
     * @return {undefined|SnotifyToast}
     */
    SnotifyService.prototype.get = function (id) {
        return this.notifications.find(function (toast) { return toast.id === id; });
    };
    /**
     * returns copy of notifications array
     * @return {SnotifyToast[]}
     */
    SnotifyService.prototype.getAll = function () {
        return this.notifications.slice();
    };
    /**
     * add SnotifyToast to notifications array
     * @param toast {SnotifyToast}
     */
    SnotifyService.prototype.add = function (toast) {
        if (this._options.newOnTop) {
            this.notifications.unshift(toast);
        }
        else {
            this.notifications.push(toast);
        }
        this.emit();
    };
    /**
     * If ID passed, emits toast animation remove, if ID & REMOVE passed, removes toast from notifications array
     * @param id {Number}
     * @param remove {Boolean}
     */
    SnotifyService.prototype.remove = function (id, remove) {
        if (!id) {
            return this.clear();
        }
        else if (remove) {
            this.notifications = this.notifications.filter(function (toast) { return toast.id !== id; });
            return this.emit();
        }
        this.toastDeleted.next(id);
    };
    /**
     * Clear notifications array
     */
    SnotifyService.prototype.clear = function () {
        this.notifications = [];
        this.emit();
    };
    /**
     * Creates toast and add it to array, returns toast id
     * @param snotify {Snotify}
     * @return {number}
     */
    SnotifyService.prototype.create = function (snotify) {
        var id = SnotifyService.generateRandomId();
        this.add(new __WEBPACK_IMPORTED_MODULE_1__toast_snotify_toast_model__["a" /* SnotifyToast */](id, snotify.title, snotify.body, snotify.config || null));
        return id;
    };
    /**
     * Create toast with Success style, returns toast id;
     * @param title {String}
     * @param body {String}
     * @param config {SnotifyConfig}
     * @return {number}
     */
    SnotifyService.prototype.success = function (title, body, config) {
        return this.create({
            title: title,
            body: body,
            config: Object.assign({}, this.config, config, { type: __WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].SUCCESS })
        });
    };
    /**
     * Create toast with Error style, returns toast id;
     * @param title {String}
     * @param body {String}
     * @param config {SnotifyConfig}
     * @return {number}
     */
    SnotifyService.prototype.error = function (title, body, config) {
        return this.create({
            title: title,
            body: body,
            config: Object.assign({}, this.config, config, { type: __WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].ERROR })
        });
    };
    /**
     * Create toast with Info style, returns toast id;
     * @param title {String}
     * @param body {String}
     * @param config {SnotifyConfig}
     * @return {number}
     */
    SnotifyService.prototype.info = function (title, body, config) {
        return this.create({
            title: title,
            body: body,
            config: Object.assign({}, this.config, config, { type: __WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].INFO })
        });
    };
    /**
     * Create toast with Warining style, returns toast id;
     * @param title {String}
     * @param body {String}
     * @param config {SnotifyConfig}
     * @return {number}
     */
    SnotifyService.prototype.warning = function (title, body, config) {
        return this.create({
            title: title,
            body: body,
            config: Object.assign({}, this.config, config, { type: __WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].WARNING })
        });
    };
    /**
     * Create toast without style, returns toast id;
     * @param title {String}
     * @param body {String}
     * @param config {SnotifyConfig}
     * @return {number}
     */
    SnotifyService.prototype.simple = function (title, body, config) {
        return this.create({
            title: title,
            body: body,
            config: Object.assign({}, this.config, config)
        });
    };
    /**
     * Create toast with Confirm style {with two buttons}, returns toast id;
     * @param title {String}
     * @param body {String}
     * @param config {SnotifyConfig}
     * @return {number}
     */
    SnotifyService.prototype.confirm = function (title, body, config) {
        return this.create({
            title: title,
            body: body,
            config: SnotifyService.mergeDeep(this.config, config, { type: __WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].CONFIRM }, { closeOnClick: false })
        });
    };
    /**
     * Create toast with Prompt style {with two buttons}, returns toast id;
     * @param title {String}
     * @param body {String}
     * @param config {SnotifyConfig}
     * @return {number}
     */
    SnotifyService.prototype.prompt = function (title, body, config) {
        return this.create({
            title: title,
            body: body,
            config: SnotifyService.mergeDeep(this.config, config, { type: __WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].PROMPT }, { timeout: 0, closeOnClick: false })
        });
    };
    /**
     * Creates async toast with Info style. Pass action, and resolve or reject it.
     * @param title {String}
     * @param body {String}
     * @param action {Promise<SnotifyConfig> | Observable<SnotifyConfig>}
     * @return {number}
     */
    SnotifyService.prototype.async = function (title, body, action) {
        var _this = this;
        var async;
        if (action instanceof Promise) {
            async = __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_PromiseObservable__["PromiseObservable"].create(action);
        }
        else {
            async = action;
        }
        var id = this.simple(title, body, {
            pauseOnHover: false,
            closeOnClick: false,
            timeout: 0,
            showProgressBar: false,
            type: __WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].ASYNC
        });
        var toast = this.get(id);
        var latestToast = Object.assign({}, toast);
        var updateToast = function (type, data) {
            if (!data) {
                latestToast = SnotifyService.mergeDeep(toast, latestToast, { config: { type: type } });
            }
            else {
                latestToast = SnotifyService.mergeDeep(toast, data, { config: { type: type } });
            }
            _this.toastChanged.next(latestToast);
        };
        var lifecycleSubscription = this.lifecycle.subscribe(function (info) {
            if (info.action === __WEBPACK_IMPORTED_MODULE_6__enum_SnotifyAction_enum__["a" /* SnotifyAction */].onInit && info.toast.id === id) {
                var subscription_1 = async.subscribe(function (next) {
                    updateToast(__WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].ASYNC, next);
                }, function (error) {
                    updateToast(__WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].ERROR, error);
                    subscription_1.unsubscribe();
                }, function () {
                    updateToast(__WEBPACK_IMPORTED_MODULE_4__enum_SnotifyType_enum__["a" /* SnotifyType */].SUCCESS);
                    subscription_1.unsubscribe();
                    lifecycleSubscription.unsubscribe();
                });
            }
        });
        return id;
    };
    return SnotifyService;
}());

SnotifyService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Injectable */] },
];
/** @nocollapse */
SnotifyService.ctorParameters = function () { return []; };


/***/ }),

/***/ "./dist/snotify/toast/icon/icon.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconComponent; });

var IconComponent = (function () {
    function IconComponent() {
    }
    return IconComponent;
}());

IconComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */], args: [{
                selector: 'app-icon',
                template: "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 48 48;\" xml:space=\"preserve\" width=\"48px\" height=\"48px\"> <g *ngIf=\"types.warning\" class=\"snotify-icon__warning\"> <path d=\"M256,512c141.15,0,256-114.84,256-256S397.15,0,256,0,0,114.84,0,256,114.85,512,256,512Zm0-480.49c123.79,0,224.49,100.71,224.49,224.49S379.79,480.49,256,480.49,31.51,379.79,31.51,256,132.21,31.51,256,31.51Z\"/><circle cx=\"260.08\" cy=\"343.87\" r=\"26.35\"/><path d=\"M254.68,278.39a15.76,15.76,0,0,0,15.75-15.75V128.72a15.75,15.75,0,1,0-31.51,0V262.63A15.76,15.76,0,0,0,254.68,278.39Z\"/> </g> <g *ngIf=\"types.success\" class=\"snotify-icon__success\"> <path d=\"M256,0C114.85,0,0,114.84,0,256S114.85,512,256,512,512,397.16,512,256,397.15,0,256,0Zm0,492.31c-130.29,0-236.31-106-236.31-236.31S125.71,19.69,256,19.69,492.31,125.71,492.31,256,386.29,492.31,256,492.31Z\"/><path class=\"cls-1\" d=\"M376.64,151,225.31,321.24l-91.17-72.93a9.85,9.85,0,0,0-12.3,15.38l98.46,78.77a9.86,9.86,0,0,0,13.52-1.15L391.36,164.08A9.85,9.85,0,0,0,376.64,151Z\"/> </g> <g *ngIf=\"types.info && !types.async\" class=\"snotify-icon__info\"> <path d=\"M256,0C114.84,0,0,114.84,0,256S114.84,512,256,512,512,397.16,512,256,397.15,0,256,0Zm0,478.43C133.35,478.43,33.57,378.64,33.57,256S133.35,33.58,256,33.58,478.42,133.36,478.42,256,378.64,478.43,256,478.43Z\"/><path d=\"M251.26,161.24a22.39,22.39,0,1,0-22.38-22.39A22.39,22.39,0,0,0,251.26,161.24Z\"/><path d=\"M286.84,357.87h-14v-160A16.79,16.79,0,0,0,256,181.05H225.17a16.79,16.79,0,0,0,0,33.58h14.05V357.87H225.17a16.79,16.79,0,0,0,0,33.57h61.67a16.79,16.79,0,1,0,0-33.57Z\"/> </g> <g *ngIf=\"types.error\" class=\"snotify-icon__error\"> <path d=\"M437,75A256,256,0,1,0,75,437,256,256,0,1,0,437,75ZM416.43,416.43a226.82,226.82,0,0,1-320.86,0C7.11,328,7.11,184,95.57,95.57a226.82,226.82,0,0,1,320.86,0C504.89,184,504.89,328,416.43,416.43Z\"/><path d=\"M368.81,143.19a14.5,14.5,0,0,0-20.58,0L256,235.42l-92.23-92.23a14.55,14.55,0,0,0-20.58,20.58L235.42,256l-92.23,92.23a14.6,14.6,0,0,0,10.24,24.89,14.19,14.19,0,0,0,10.24-4.31l92.23-92.23,92.23,92.23a14.64,14.64,0,0,0,10.24,4.31,14,14,0,0,0,10.24-4.31,14.5,14.5,0,0,0,0-20.58l-92-92.23,92.23-92.23A14.5,14.5,0,0,0,368.81,143.19Z\"/> </g> <g *ngIf=\"types.async\" class=\"snotify-icon__async\"> <path d=\"M256,0a32,32,0,0,0-32,32V96a32,32,0,0,0,64,0V32A32,32,0,0,0,256,0Zm0,384a32,32,0,0,0-32,32v64a32,32,0,0,0,64,0V416A32,32,0,0,0,256,384ZM391.74,165.5,437,120.22A32,32,0,0,0,391.74,75L346.5,120.22a32,32,0,0,0,45.25,45.28Zm-271.52,181L75,391.74A32,32,0,0,0,120.22,437l45.25-45.25a32,32,0,0,0-45.25-45.25Zm0-271.52A32,32,0,1,0,75,120.22l45.25,45.28a32,32,0,1,0,45.25-45.28ZM391.74,346.5a32,32,0,0,0-45.25,45.25L391.74,437A32,32,0,0,0,437,391.74ZM480,224H416a32,32,0,0,0,0,64h64a32,32,0,0,0,0-64ZM128,256a32,32,0,0,0-32-32H32a32,32,0,0,0,0,64H96A32,32,0,0,0,128,256Z\"/> </g> </svg> ",
                styles: [".snotify-icon__error { fill: #ffcdd2; } .snotify-icon__warning { fill: #ffccbc; } .snotify-icon__info { fill: #bbdefb; } .snotify-icon__success { fill: #c8e6c9; } .snotify-icon__async { fill: #bbdefb; animation: async 3s infinite linear; transform-origin: 50% 50%; } @keyframes async { 0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } "]
            },] },
];
/** @nocollapse */
IconComponent.ctorParameters = function () { return []; };
IconComponent.propDecorators = {
    'types': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */] },],
};


/***/ }),

/***/ "./dist/snotify/toast/snotify-toast.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnotifyToast; });
/**
 * Toast main model
 */
var SnotifyToast = (function () {
    function SnotifyToast(id, title, body, config) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.config = config;
    }
    return SnotifyToast;
}());



/***/ }),

/***/ "./dist/snotify/toast/toast.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__snotify_service__ = __webpack_require__("./dist/snotify/snotify.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyAction.enum.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyType_enum__ = __webpack_require__("./dist/snotify/enum/SnotifyType.enum.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });




var ToastComponent = (function () {
    function ToastComponent(service) {
        this.service = service;
        /**
         * Toast state
         * @type {Object}
         */
        this.state = {
            toast: {
                progress: 0,
                isShowing: false,
                isRemoving: false,
                isDestroying: false
            },
            prompt: {
                input: '',
                isPromptFocused: false,
                isPromptActive: false
            }
        };
        /**
         * Active style for toast
         * @type {Object}
         */
        this.types = {
            success: false,
            warning: false,
            error: false,
            info: false,
            simple: false,
            async: false,
            confirm: false,
            prompt: false,
        };
    }
    /*
    Life cycles
     */
    /**
     * Init base options. Subscribe to toast changed, toast deleted
     */
    ToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transitionTime = this.service.options.transition;
        this.maxHeight = this.service.options.maxHeight;
        this.initToast();
        this.toastChangedSubscription = this.service.toastChanged.subscribe(function (toast) {
            if (_this.toast.id === toast.id) {
                _this.initToast(toast);
            }
        });
        this.toastDeletedSubscription = this.service.toastDeleted.subscribe(function (id) {
            if (_this.toast.id === id) {
                _this.onRemove().then(function () {
                    _this.service.remove(id, true);
                });
            }
        });
    };
    /**
     * Delay on toast show
     */
    ToastComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onShow(); }, 50);
    };
    /**
     * Unsubscribe subscriptions
     */
    ToastComponent.prototype.ngOnDestroy = function () {
        this.lifecycle(__WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].afterDestroy);
        this.toastChangedSubscription.unsubscribe();
        this.toastDeletedSubscription.unsubscribe();
    };
    /*
    Event hooks
     */
    /**
     * Trigger OnClick lifecycle
     */
    ToastComponent.prototype.onClick = function () {
        this.lifecycle(__WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].onClick);
        if (this.toast.config.closeOnClick) {
            this.service.remove(this.toast.id);
        }
    };
    /**
     * Trigger beforeDestroy lifecycle. Removes toast
     */
    ToastComponent.prototype.onRemove = function () {
        var _this = this;
        this.maxHeight = 0;
        clearInterval(this.interval);
        this.state.toast.isDestroying = true;
        this.lifecycle(__WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].beforeDestroy);
        this.state.toast.isRemoving = true;
        return new Promise(function (resolve, reject) { return setTimeout(resolve, _this.service.options.transition); });
    };
    /**
     * Trigger onInit lifecycle
     */
    ToastComponent.prototype.onShow = function () {
        this.state.toast.isShowing = true;
        this.lifecycle(__WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].onInit);
    };
    /**
     * Trigger onHoverEnter lifecycle
     */
    ToastComponent.prototype.onMouseEnter = function () {
        this.lifecycle(__WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].onHoverEnter);
        if (this.toast.config.pauseOnHover) {
            clearInterval(this.interval);
        }
    };
    /**
     * Trigger onHoverLeave lifecycle
     */
    ToastComponent.prototype.onMouseLeave = function () {
        if (this.toast.config.pauseOnHover && !this.types.prompt) {
            this.startTimeout(this.state.toast.progress);
        }
        this.lifecycle(__WEBPACK_IMPORTED_MODULE_2__enum_SnotifyAction_enum__["a" /* SnotifyAction */].onHoverLeave);
    };
    // Prompt
    /**
     * Expand input
     */
    ToastComponent.prototype.onPromptEnter = function () {
        this.state.prompt.isPromptActive = true;
    };
    /**
     * Collapse input
     */
    ToastComponent.prototype.onPromptLeave = function () {
        if (!this.state.prompt.input.length && !this.state.prompt.isPromptFocused) {
            this.state.prompt.isPromptActive = false;
        }
    };
    /*
     Common
     */
    /**
     * Initialize base toast config
     * @param toast {SnotifyToast}
     */
    ToastComponent.prototype.initToast = function (toast) {
        if (toast) {
            if (this.toast.config.type !== toast.config.type) {
                clearInterval(this.interval);
            }
            this.toast = toast;
        }
        this.setType(this.toast.config.type);
        if (this.toast.config.timeout > 0) {
            this.startTimeout(0);
        }
        else {
            this.toast.config.showProgressBar = false;
            this.toast.config.pauseOnHover = false;
        }
    };
    /**
     * Setup toast type
     * @param type {SnotifyType}
     */
    ToastComponent.prototype.setType = function (type) {
        this.resetTypes();
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyType_enum__["a" /* SnotifyType */].SUCCESS:
                this.types.success = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyType_enum__["a" /* SnotifyType */].ERROR:
                this.types.error = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyType_enum__["a" /* SnotifyType */].WARNING:
                this.types.warning = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyType_enum__["a" /* SnotifyType */].INFO:
                this.types.info = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyType_enum__["a" /* SnotifyType */].ASYNC:
                this.types.async = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyType_enum__["a" /* SnotifyType */].CONFIRM:
                this.types.confirm = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_3__enum_SnotifyType_enum__["a" /* SnotifyType */].PROMPT:
                this.types.prompt = true;
                break;
            default:
                this.types.simple = true;
                break;
        }
    };
    /**
     * Reset toast type
     */
    ToastComponent.prototype.resetTypes = function () {
        this.types.info =
            this.types.error =
                this.types.warning =
                    this.types.simple =
                        this.types.success =
                            this.types.async =
                                this.types.confirm =
                                    this.types.prompt =
                                        false;
    };
    /**
     * Start progress bar
     * @param currentProgress {Number}
     */
    ToastComponent.prototype.startTimeout = function (currentProgress) {
        var _this = this;
        var refreshRate = 10;
        if (this.state.toast.isDestroying) {
            return;
        }
        this.state.toast.progress = currentProgress;
        var step = refreshRate / this.toast.config.timeout * 100;
        this.interval = setInterval(function () {
            _this.state.toast.progress += step;
            if (_this.state.toast.progress >= 100) {
                _this.service.remove(_this.toast.id);
            }
        }, refreshRate);
    };
    /**
     * Lifesycle trigger
     * @param action {SnotifyAction}
     */
    ToastComponent.prototype.lifecycle = function (action) {
        return this.service.lifecycle.next({
            action: action,
            toast: this.toast
        });
    };
    return ToastComponent;
}());

ToastComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */], args: [{
                selector: 'app-snotify-toast',
                template: "<div class=\"snotifyToast\" [ngClass]=\"{ 'snotify-success': types.success, 'snotify-warning': types.warning, 'snotify-info': types.info, 'snotify-error': types.error, 'snotify-simple': types.simple, 'snotify-async': types.async, 'snotify-confirm': types.confirm, 'snotify-prompt': types.prompt, 'snotifyToast-show': state.toast.isShowing, 'snotifyToast-remove': state.toast.isRemoving }\" [ngStyle]=\"{ 'transition': 'transform ' + transitionTime + 'ms, opacity '+transitionTime/2+'ms, max-height ease '+transitionTime+'ms', 'max-height': maxHeight + 'px' }\" (click)=\"onClick()\" (mouseenter)=\"onMouseEnter()\" (mouseleave)=\"onMouseLeave()\"> <div class=\"snotifyToast__inner\"> <div class=\"snotifyToast__progressBar\" *ngIf=\"toast.config.showProgressBar\"> <span class=\"snotifyToast__progressBar__percentage\" [ngStyle]=\"{'width': state.toast.progress + '%'}\"></span> </div> <div class=\"snotifyToast__title\">{{toast.title | truncate : toast.config.titleMaxLength}}</div> <div class=\"snotifyToast__body\">{{toast.body | truncate : toast.config.bodyMaxLength}}</div> <span *ngIf=\"types.prompt\" class=\"input\" [ngClass]=\"{'input--filled': state.prompt.isPromptActive}\" (mouseenter)=\"onPromptEnter()\" (mouseleave)=\"onPromptLeave()\"> <input (input)=\"state.prompt.input = $event.target.value\" class=\"input__field\" type=\"text\" [id]=\"toast.id\" (focus)=\"state.prompt.isPromptFocused = true\" (blur)=\"state.prompt.isPromptFocused = false; onPromptLeave()\"/> <label class=\"input__label\" [for]=\"toast.id\"> <span class=\"input__labelContent\">{{toast.config.placeholder | truncate}}</span> </label> </span> <app-icon *ngIf=\"!toast.config.icon; else elseBlock\" class=\"snotify-icon\" [types]=\"types\"></app-icon> <ng-template #elseBlock> <img class=\"snotify-icon\" [src]='toast.config.icon' /> </ng-template> </div> <div *ngIf=\"types.prompt || types.confirm\" class=\"snotifyToast__buttons\"> <button (click)=\"toast.config.buttons[0].action(types.prompt ? state.prompt.input : null)\" [ngClass]=\"{'snotifyToast__buttons--bold': toast.config.buttons[0].bold}\"> {{toast.config.buttons[0].text}} </button> <button (click)=\"toast.config.buttons[1].action(types.prompt ? state.prompt.input : null)\" [ngClass]=\"{'snotifyToast__buttons--bold': toast.config.buttons[1].bold}\"> {{toast.config.buttons[1].text}} </button> </div> </div> ",
                styles: [":host { display: block; cursor: pointer; } .snotifyToast { background-color: #fff; max-height: 300px; height: 100%; margin: 5px; opacity: 0; transform: translate(0, -50%); border-radius: 5px; overflow: hidden; } .snotifyToast__inner { position: relative; padding: 10px 65px 10px 15px; font-size: 16px; color: #000; } .snotifyToast__progressBar { position: absolute; top: 0; left: 0; right: 0; height: 10px; background-color: #c7c7c7; } .snotifyToast__progressBar__percentage { position: absolute; top: 0; left: 0; height: 10px; background-color: #4c4c4c; max-width: 100%; } .snotifyToast__progressBar + .snotifyToast__title { margin-top: 5px; } .snotifyToast__progressBar ~ .snotifyToast-icon { margin-top: 5px; } .snotifyToast__title { font-size: 1.8em; margin-bottom: 5px; color: #fff; } .snotifyToast__body { font-size: 1em; } .snotifyToast__buttons { display: flex; flex-flow: row nowrap; justify-content: space-between; border-top: 1px solid rgba(0, 0, 0, 0.1); } .snotifyToast__buttons button { position: relative; width: 100%; border: none; background: transparent; padding: 8px; text-transform: capitalize; color: #fff; } .snotifyToast__buttons button:hover, .snotifyToast__buttons button:focus { background: rgba(0, 0, 0, 0.1); outline: none; } .snotifyToast__buttons button:active { background: rgba(0, 0, 0, 0.5); } .snotifyToast__buttons button:last-child::before { content: ''; width: 2px; position: absolute; top: 0; bottom: 0; left: -1px; background-color: rgba(0, 0, 0, 0.1); } .snotifyToast__buttons--bold { font-weight: 700; } .snotifyToast-show { transform: translate(0, 0); opacity: 1; } .snotifyToast-remove { max-height: 0; overflow: hidden; transform: translate(0, 50%); opacity: 0; } .input { position: relative; z-index: 1; display: inline-block; margin: 0; width: 100%; vertical-align: top; transition: all .5s; transition-delay: .3s; transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); } .input__field { position: relative; display: block; float: right; padding: 0.85em 0.5em; width: 100%; border: none; border-radius: 0; background: transparent; color: #333; font-weight: bold; -webkit-appearance: none; /* for box shadows to show on iOS */ opacity: 0; transition: opacity 0.3s; } .input__field:focus { outline: none; } .input__label { display: inline-block; float: right; padding: 0 0.85em; width: 100%; color: #e0f2f1; font-weight: bold; font-size: 70.25%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: absolute; left: 0; height: 100%; text-align: left; pointer-events: none; } .input__label::before, .input__label::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; transition: transform 0.3s; } .input__label::before { border-top: 2px solid #fff; transform: translate3d(0, 100%, 0) translate3d(0, -2px, 0); transition-delay: 0.3s; } .input__label::after { z-index: -1; background: #b2dfdb; transform: scale3d(1, 0, 1); transform-origin: 50% 0; } .input__labelContent { position: relative; display: block; padding: 1.6em 0; width: 100%; transition: transform 0.3s 0.3s; } .input--filled { margin-top: 1.5em; } .input--filled:focus, .input--filled .input__field { opacity: 1; transition-delay: 0.3s; } .input__field:focus + .input__label .input__labelContent, .input--filled .input__labelContent { transform: translate(0, -80%); transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); } .input__field:focus + .input__label::before, .input--filled .input__label::before { transition-delay: 0s; } .input__field:focus + .input__label::before, .input--filled .input__label::before { transform: translate(0, 0); } .input__field:focus + .input__label::after, .input--filled .input__label::after { transform: scale(1, 1); transition-delay: 0.3s; transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); } /*************** ** Modifiers ** **************/ .snotify-simple .snotifyToast__title, .snotify-simple .snotifyToast__body { color: #000; } .snotify-success { background-color: #4CAF50; } .snotify-success .snotifyToast__progressBar { background-color: #388E3C; } .snotify-success .snotifyToast__progressBar__percentage { background-color: #81c784; } .snotify-success .snotifyToast__body { color: #C8E6C9; } .snotify-info { background-color: #1e88e5; } .snotify-info .snotifyToast__progressBar { background-color: #1565c0; } .snotify-info .snotifyToast__progressBar__percentage { background-color: #64b5f6; } .snotify-info .snotifyToast__body { color: #e3f2fd; } .snotify-warning { background-color: #ff9800; } .snotify-warning .snotifyToast__progressBar { background-color: #ef6c00; } .snotify-warning .snotifyToast__progressBar__percentage { background-color: #ffcc80; } .snotify-warning .snotifyToast__body { color: #fff3e0; } .snotify-error { background-color: #f44336; } .snotify-error .snotifyToast__progressBar { background-color: #c62828; } .snotify-error .snotifyToast__progressBar__percentage { background-color: #ef9a9a; } .snotify-error .snotifyToast__body { color: #ffebee; } .snotify-async { background-color: #1e88e5; } .snotify-async .snotifyToast__progressBar { background-color: #1565c0; } .snotify-async .snotifyToast__progressBar__percentage { background-color: #64b5f6; } .snotify-async .snotifyToast__body { color: #e3f2fd; } .snotify-confirm { background-color: #009688; } .snotify-confirm .snotifyToast__progressBar { background-color: #4db6ac; } .snotify-confirm .snotifyToast__progressBar__percentage { background-color: #80cbc4; } .snotify-confirm .snotifyToast__body { color: #e0f2f1; } .snotify-prompt { background-color: #009688; } .snotify-prompt .snotifyToast__inner { padding: 10px 15px; } .snotify-prompt .snotifyToast__title { margin-bottom: 0; } .snotify-prompt .snotifyToast__body { color: #e0f2f1; } .snotify-icon { position: absolute; right: 10px; top: 50%; line-height: 0; transform: translate(0, -50%); max-height: 48px; max-width: 48px; } "]
            },] },
];
/** @nocollapse */
ToastComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__snotify_service__["a" /* SnotifyService */], },
]; };
ToastComponent.propDecorators = {
    'toast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */] },],
};


/***/ }),

/***/ "./example async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./example async recursive";

/***/ }),

/***/ "./example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<aside>\r\n  <h3 class=\"text-center\">Toast config</h3>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Title</label>\r\n    <input [(ngModel)]=\"title\" type=\"text\" id=\"title\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"body\">Body</label>\r\n    <textarea [(ngModel)]=\"body\" id=\"body\" rows=\"3\" class=\"form-control\"></textarea>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"titlemaxlen\">Title max-length</label>\r\n        <input [(ngModel)]=\"titleMaxLength\" type=\"text\" id=\"titlemaxlen\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"bodymaxlen\">Body max-length</label>\r\n        <input [(ngModel)]=\"bodyMaxLength\" type=\"text\" id=\"bodymaxlen\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"timeout\">Timeout</label>\r\n    <input [(ngModel)]=\"timeout\" type=\"number\" id=\"timeout\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"maxheight\">Toast max-height</label>\r\n    <input [(ngModel)]=\"maxHeight\" type=\"number\" id=\"maxheight\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"position\">Position</label>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <select [(ngModel)]=\"position\" id=\"position\" class=\"form-control\">\r\n          <option [ngValue]=\"0\">LEFT - TOP</option>\r\n          <option [ngValue]=\"1\">LEFT - CENTER</option>\r\n          <option [ngValue]=\"2\">LEFT - BOTTOM</option>\r\n          <option [ngValue]=\"3\">RIGHT - TOP</option>\r\n          <option [ngValue]=\"4\">RIGHT - CENTER</option>\r\n          <option [ngValue]=\"5\">RIGHT - BOTTOM</option>\r\n          <option [ngValue]=\"6\">CENTER - TOP</option>\r\n          <option [ngValue]=\"7\">CENTER - CENTER</option>\r\n          <option [ngValue]=\"8\">CENTER - BOTTOM</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"switch-group-wrapper\">\r\n    <div class=\"switch-wrapper\">\r\n      <strong>Show progress bar?</strong>\r\n      <div class=\"switch\">\r\n        <input [(ngModel)]=\"progressBar\" id=\"progressBar\" class=\"cmn-toggle cmn-toggle-yes-no\" type=\"checkbox\">\r\n        <label for=\"progressBar\" data-on=\"On\" data-off=\"Off\"></label>\r\n      </div>\r\n    </div>\r\n    <div class=\"switch-wrapper\">\r\n      <strong>Close on click?</strong>\r\n      <div class=\"switch\">\r\n        <input [(ngModel)]=\"closeClick\" id=\"closeClick\" class=\"cmn-toggle cmn-toggle-yes-no\" type=\"checkbox\">\r\n        <label for=\"closeClick\" data-on=\"On\" data-off=\"Off\"></label>\r\n      </div>\r\n    </div>\r\n    <div class=\"switch-wrapper\">\r\n      <strong>Pause on hover?</strong>\r\n      <div class=\"switch\">\r\n        <input [(ngModel)]=\"pauseHover\" id=\"pauseHover\" class=\"cmn-toggle cmn-toggle-yes-no\" type=\"checkbox\">\r\n        <label for=\"pauseHover\" data-on=\"On\" data-off=\"Off\"></label>\r\n      </div>\r\n    </div>\r\n    <div class=\"switch-wrapper\">\r\n      <strong>New items on top?</strong>\r\n      <div class=\"switch\">\r\n        <input [(ngModel)]=\"newTop\" id=\"newTop\" class=\"cmn-toggle cmn-toggle-yes-no\" type=\"checkbox\">\r\n        <label for=\"newTop\" data-on=\"On\" data-off=\"Off\"></label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"backdrop\">\r\n      Backdrop (0-1)\r\n    </label>\r\n    <input [(ngModel)]=\"backdrop\" type=\"number\" id=\"backdrop\" class=\"form-control\" min=\"-1\" max=\"1\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"dockMax\">\r\n      Max items on screen\r\n    </label>\r\n    <input [(ngModel)]=\"dockMax\" type=\"number\" id=\"dockMax\" class=\"form-control\" min=\"1\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <div class=\"buttons\">\r\n      <div class=\"btn-group btn-group-justified\">\r\n        <div class=\"btn btn-success\" (click)=\"onSuccess()\">Success</div>\r\n        <div class=\"btn btn-info\" (click)=\"onInfo()\">Info</div>\r\n        <div class=\"btn btn-danger\" (click)=\"onError()\">Error</div>\r\n        <div class=\"btn btn-warning\" (click)=\"onWarning()\">Warning</div>\r\n\r\n      </div>\r\n      <div class=\"btn-group btn-group-justified\">\r\n        <div class=\"btn btn-default\" (click)=\"onSimple()\">Simple</div>\r\n        <div class=\"btn btn-blue\" (click)=\"onAsyncLoading()\">Async</div>\r\n        <div class=\"btn btn-teal\" (click)=\"onConfirmation()\">Confirm</div>\r\n        <div class=\"btn btn-black\" (click)=\"onPrompt()\">Prompt</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"btn btn-block btn-primary\" (click)=\"onClear()\">Clear all</div>\r\n\r\n\r\n</aside>\r\n<main>\r\n  <div class=\"brand\">\r\n    <h1>Ng-Snotify</h1>\r\n    <p>Angular 2 Notification Center</p>\r\n  </div>\r\n</main>\r\n<footer>\r\n  <div class=\"footer\">\r\n    <a href=\"documentation/index.html\" target=\"_blank\">Auto-Documentation</a> &#9673;\r\n    <a href=\"https://github.com/artemsky/ng-snotify\" target=\"_blank\">GitHub</a> &#9673;\r\n    <a href=\"https://www.npmjs.com/package/ng-snotify\" target=\"_blank\">NPM</a>\r\n    <h6>MIT &copy; 2017 <a href=\"https://github.com/artemsky/\">artemsky</a></h6>\r\n  </div>\r\n</footer>\r\n<app-snotify></app-snotify>\r\n"

/***/ }),

/***/ "./example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Audiowide);", ""]);

// module
exports.push([module.i, "main {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #EA5C54;\n  /* Old browsers */\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(135deg, #EA5C54 0%, #bb6dec 100%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EA5C54 ', endColorstr='#bb6dec',GradientType=1 );\n  /* IE6-9 fallback on horizontal gradient */\n  z-index: 1; }\n\naside {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 340px;\n  height: 100%;\n  padding: 15px;\n  background: #fff;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 3; }\n  aside .btn-group .btn {\n    padding: 6px 9px; }\n\n.brand {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(calc(-50% + 340px / 2));\n          transform: translateY(-50%) translateX(calc(-50% + 340px / 2));\n  color: #ffffff; }\n  .brand h1 {\n    font-family: 'Audiowide', cursive;\n    font-size: 6em; }\n  .brand p {\n    font-size: 2em;\n    text-align: center; }\n\ntextarea {\n  resize: vertical; }\n\nfooter {\n  display: block;\n  padding: 10px;\n  position: fixed;\n  bottom: 15px;\n  left: 50%;\n  font-size: 15px;\n  text-align: center;\n  color: white;\n  width: calc(100% - 340px);\n  -webkit-transform: translateX(calc(-50% + 340px / 2));\n          transform: translateX(calc(-50% + 340px / 2));\n  z-index: 2; }\n  footer a {\n    color: #ffffff; }\n\n.buttons {\n  margin: 20px 0; }\n\n.btn-group {\n  margin: 5px 0 0; }\n\n.btn-black {\n  color: #f8f8f8;\n  background-color: #2d2d2d;\n  border-color: #000000; }\n  .btn-black:hover {\n    color: #fff;\n    background-color: #000000;\n    border-color: #000000; }\n\n.btn-blue {\n  color: #f8f8f8;\n  background-color: #2095F2;\n  border-color: #1a80d1; }\n  .btn-blue:hover {\n    color: #fff;\n    background-color: #1a80d1;\n    border-color: #1a80d1; }\n\n.btn-teal {\n  color: #f8f8f8;\n  background-color: #009587;\n  border-color: #018175; }\n  .btn-teal:hover {\n    color: #fff;\n    background-color: #018175;\n    border-color: #018175; }\n\n.switch-wrapper {\n  width: 50%; }\n\n.switch-group-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin: 5px 0 10px; }\n\n.cmn-toggle {\n  position: absolute;\n  margin-left: -9999px;\n  padding: 2px;\n  width: 60px;\n  height: 30px;\n  visibility: hidden; }\n  .cmn-toggle + label {\n    display: block;\n    position: relative;\n    padding: 2px;\n    width: 60px;\n    height: 30px;\n    cursor: pointer;\n    outline: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    .cmn-toggle + label::before, .cmn-toggle + label::after {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      color: #fff;\n      font-family: \"Roboto Slab\", serif;\n      font-size: 20px;\n      text-align: center;\n      line-height: 30px; }\n    .cmn-toggle + label::before {\n      background-color: #dddddd;\n      content: attr(data-off);\n      transition: -webkit-transform 0.5s;\n      transition: transform 0.5s;\n      transition: transform 0.5s, -webkit-transform 0.5s;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n    .cmn-toggle + label::after {\n      background-color: #8ce196;\n      content: attr(data-on);\n      transition: -webkit-transform 0.5s;\n      transition: transform 0.5s;\n      transition: transform 0.5s, -webkit-transform 0.5s;\n      -webkit-transform: rotateY(180deg);\n              transform: rotateY(180deg);\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n  .cmn-toggle:checked + label::before {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  .cmn-toggle:checked + label::after {\n    -webkit-transform: rotateY(0);\n            transform: rotateY(0); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_snotify__ = __webpack_require__("./dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(snotifyService) {
        this.snotifyService = snotifyService;
        this.title = 'Snotify title!';
        this.body = 'Lorem ipsum dolor sit amet!';
        this.timeout = 3000;
        this.position = __WEBPACK_IMPORTED_MODULE_2_ng_snotify__["c" /* SnotifyPosition */].right_bottom;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 6;
        this.pauseHover = true;
        this.maxHeight = 300;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.snotifyService.setConfig({
            timeout: 3000,
            titleMaxLength: 14,
            bodyMaxLength: 40
        }, {
            newOnTop: false,
            position: this.position,
            maxHeight: 500
        });
        this.snotifyService.onInit = function (toast) {
            console.log('on Init', toast);
            /*
             At each callback you can change toast data directly.
             toast.title = "New Title"
             toast.body = "Some new value"
             */
        };
        this.snotifyService.onHoverEnter = function (toast) {
            console.log('Hover enter', toast);
        };
        this.snotifyService.onHoverLeave = function (toast) {
            console.log('Hover leave', toast);
        };
        this.snotifyService.onClick = function (toast) {
            console.log('Clicked', toast);
        };
        this.snotifyService.beforeDestroy = function (toast) {
            console.log('Before Destroy', toast);
        };
        this.snotifyService.afterDestroy = function (toast) {
            console.log('After Destroy', toast);
        };
    };
    /*
    Change global configuration
     */
    AppComponent.prototype.setGlobal = function () {
        this.snotifyService.setConfig({
            bodyMaxLength: this.bodyMaxLength,
            titleMaxLength: this.titleMaxLength,
            backdrop: this.backdrop
        }, {
            newOnTop: this.newTop,
            position: this.position,
            maxOnScreen: this.dockMax,
            maxHeight: this.maxHeight
        });
    };
    AppComponent.prototype.onSuccess = function () {
        this.setGlobal();
        this.snotifyService.success(this.title, this.body, {
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        });
    };
    AppComponent.prototype.onInfo = function () {
        this.setGlobal();
        this.snotifyService.info(this.title, this.body, {
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        });
    };
    AppComponent.prototype.onError = function () {
        this.setGlobal();
        this.snotifyService.error(this.title, this.body, {
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        });
    };
    AppComponent.prototype.onWarning = function () {
        this.setGlobal();
        this.snotifyService.warning(this.title, this.body, {
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        });
    };
    AppComponent.prototype.onSimple = function () {
        this.setGlobal();
        // const icon = `assets/custom-svg.svg`;
        var icon = "https://placehold.it/48x100";
        this.snotifyService.simple(this.title, this.body, {
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover,
            icon: icon
        });
    };
    AppComponent.prototype.onAsyncLoading = function () {
        this.setGlobal();
        this.snotifyService.async(this.title, this.body, 
        /*
        You should pass Promise or Observable of type SnotifyConfig to change some data or do some other actions
        More information how to work with observables:
        https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md
         */
        // new Promise((resolve, reject) => {
        //   setTimeout(() => reject(), 1000);
        //   setTimeout(() => resolve(), 1500);
        // })
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next({
                    body: 'Still loading.....',
                });
            }, 1000);
            setTimeout(function () {
                observer.next({
                    title: 'Success',
                    body: 'Example. Data loaded!',
                    config: {
                        closeOnClick: true,
                        timeout: 5000,
                        showProgressBar: true
                    }
                });
                observer.complete();
            }, 5000);
            // setTimeout(() => {
            //   observer.error({
            //     title: 'Error',
            //     body: 'Example. Error 404. Service not found',
            //   });
            // }, 6000);
        }));
    };
    AppComponent.prototype.onConfirmation = function () {
        var _this = this;
        this.setGlobal();
        /*
        Here we pass an buttons array, which contains of 2 element of type SnotifyButton
         */
        var id = this.snotifyService.confirm(this.title, this.body, {
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover,
            buttons: [
                { text: 'Yes', action: function () { return console.log('Clicked: Yes'); }, bold: false },
                { text: 'No', action: function () { console.log('Clicked: No'); _this.snotifyService.remove(id); }, bold: true },
            ]
        });
    };
    AppComponent.prototype.onPrompt = function () {
        var _this = this;
        this.setGlobal();
        /*
         Here we pass an buttons array, which contains of 2 element of type SnotifyButton
         At the action of the first button we can get what user entered into input field.
         At the second we can't get it. But we can remove this toast
         */
        var id = this.snotifyService.prompt(this.title, this.body, {
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover,
            buttons: [
                { text: 'Yes', action: function (text) { return console.log('Said Yes: ' + text); } },
                { text: 'No', action: function (text) { console.log('Said No: ' + text); _this.snotifyService.remove(id); } },
            ],
            placeholder: 'This is the example placeholder which you can pass' // Max-length = 40
        });
    };
    AppComponent.prototype.onClear = function () {
        this.snotifyService.clear();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./example/app/app.component.html"),
        styles: [__webpack_require__("./example/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_snotify__["b" /* SnotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_snotify__["b" /* SnotifyService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./example/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_snotify__ = __webpack_require__("./dist/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng_snotify__["a" /* SnotifyModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_ng_snotify__["b" /* SnotifyService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./example/environments/environment.ts":
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

/***/ "./example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./example/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map