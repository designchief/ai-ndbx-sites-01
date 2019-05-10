var ndbxPatternLab =
webpackJsonpndbxPatternLab([0],Array(29).concat([
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_hub__ = __webpack_require__(472);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__event_hub__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__event_hub__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_pointer_data__ = __webpack_require__(168);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_position__ = __webpack_require__(169);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__get_position__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__is_one_of__ = __webpack_require__(473);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__is_one_of__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__set_style__ = __webpack_require__(474);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__set_style__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__touch_record__ = __webpack_require__(475);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__touch_record__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseClamp_js__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toNumber_js__ = __webpack_require__(165);



/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toNumber_js__["a" /* default */])(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toNumber_js__["a" /* default */])(lower);
    lower = lower === lower ? lower : 0;
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseClamp_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toNumber_js__["a" /* default */])(number), lower, upper);
}

/* harmony default export */ __webpack_exports__["a"] = clamp;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __assign; });
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["c"] = __decorate;
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _patternlabConfig = __webpack_require__(479);

var _patternlabConfig2 = _interopRequireDefault(_patternlabConfig);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var BREAKPOINT = {
    "mobile": _patternlabConfig2.default.ishViewportRange.s[1],
    "tablet": _patternlabConfig2.default.ishViewportRange.m[1]
};

var Breakpoint = function () {
    function Breakpoint() {
        _classCallCheck(this, Breakpoint);

        this.breakpoint = BREAKPOINT;
        this.screenWidth = window.innerWidth;
    }

    _createClass(Breakpoint, [{
        key: "getBreakpointObject",
        value: function getBreakpointObject() {
            return this.breakpoint;
        }
    }, {
        key: "getScreenType",
        value: function getScreenType() {
            this.screenWidth = window.innerWidth;
            return this.screenWidth <= this.breakpoint.mobile ? "mobile" : this.screenWidth <= this.breakpoint.tablet ? "tablet" : "desktop";
        }
    }, {
        key: "isMobile",
        value: function isMobile() {
            return this.getScreenType() === "mobile";
        }
    }, {
        key: "isTablet",
        value: function isTablet() {
            return this.getScreenType() === "tablet";
        }
    }, {
        key: "isDesktop",
        value: function isDesktop() {
            return this.getScreenType() === "desktop";
        }
    }]);

    return Breakpoint;
}();

exports.default = Breakpoint;

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfills__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrollbar__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugin__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__(468);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarPlugin", function() { return __WEBPACK_IMPORTED_MODULE_3__plugin__["a"]; });






/*!
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
var SmoothScrollbar = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SmoothScrollbar, _super);
    function SmoothScrollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes a scrollbar on the given element.
     *
     * @param elem The DOM element that you want to initialize scrollbar to
     * @param [options] Initial options
     */
    SmoothScrollbar.init = function (elem, options) {
        if (!elem || elem.nodeType !== 1) {
            throw new TypeError("expect element to be DOM Element, but got " + elem);
        }
        // attach stylesheet
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__style__["a" /* attachStyle */])();
        if (__WEBPACK_IMPORTED_MODULE_2__scrollbar__["a" /* scrollbarMap */].has(elem)) {
            return __WEBPACK_IMPORTED_MODULE_2__scrollbar__["a" /* scrollbarMap */].get(elem);
        }
        return new __WEBPACK_IMPORTED_MODULE_2__scrollbar__["b" /* Scrollbar */](elem, options);
    };
    /**
     * Automatically init scrollbar on all elements base on the selector `[data-scrollbar]`
     *
     * @param options Initial options
     */
    SmoothScrollbar.initAll = function (options) {
        return Array.from(document.querySelectorAll('[data-scrollbar]'), function (elem) {
            return SmoothScrollbar.init(elem, options);
        });
    };
    /**
     * Check if there is a scrollbar on given element
     *
     * @param elem The DOM element that you want to check
     */
    SmoothScrollbar.has = function (elem) {
        return __WEBPACK_IMPORTED_MODULE_2__scrollbar__["a" /* scrollbarMap */].has(elem);
    };
    /**
     * Gets scrollbar on the given element.
     * If no scrollbar instance exsits, returns `undefined`
     *
     * @param elem The DOM element that you want to check.
     */
    SmoothScrollbar.get = function (elem) {
        return __WEBPACK_IMPORTED_MODULE_2__scrollbar__["a" /* scrollbarMap */].get(elem);
    };
    /**
     * Returns an array that contains all scrollbar instances
     */
    SmoothScrollbar.getAll = function () {
        return Array.from(__WEBPACK_IMPORTED_MODULE_2__scrollbar__["a" /* scrollbarMap */].values());
    };
    /**
     * Removes scrollbar on the given element
     */
    SmoothScrollbar.destroy = function (elem) {
        var scrollbar = __WEBPACK_IMPORTED_MODULE_2__scrollbar__["a" /* scrollbarMap */].get(elem);
        if (scrollbar) {
            scrollbar.destroy();
        }
    };
    /**
     * Removes all scrollbar instances from current document
     */
    SmoothScrollbar.destroyAll = function () {
        __WEBPACK_IMPORTED_MODULE_2__scrollbar__["a" /* scrollbarMap */].forEach(function (scrollbar) {
            scrollbar.destroy();
        });
    };
    /**
     * Attaches plugins to scrollbars
     *
     * @param ...Plugins Scrollbar plugin classes
     */
    SmoothScrollbar.use = function () {
        var Plugins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Plugins[_i] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_3__plugin__["b" /* addPlugins */].apply(void 0, Plugins);
    };
    /**
     * Attaches default style sheets to current document.
     * You don't need to call this method manually unless
     * you removed the default styles via `Scrollbar.detachStyle()`
     */
    SmoothScrollbar.attachStyle = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__style__["a" /* attachStyle */])();
    };
    /**
     * Removes default styles from current document.
     * Use this method when you want to use your own css for scrollbars.
     */
    SmoothScrollbar.detachStyle = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__style__["b" /* detachStyle */])();
    };
    SmoothScrollbar.version = "8.2.7";
    SmoothScrollbar.ScrollbarPlugin = __WEBPACK_IMPORTED_MODULE_3__plugin__["a" /* ScrollbarPlugin */];
    return SmoothScrollbar;
}(__WEBPACK_IMPORTED_MODULE_2__scrollbar__["b" /* Scrollbar */]));
/* harmony default export */ __webpack_exports__["default"] = SmoothScrollbar;
//# sourceMappingURL=index.js.map

/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(1);
var key_event_code_1 = __webpack_require__(117);
$.fn.dropdown = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var settings = Object.assign({
        // Defaults
        container: '[data-toggle="dropdown"]', trigger: '[data-trigger="dropdown"]', item: '[data-items="dropdown"]', toggleClass: 'is-open', namespace: 'c-filter-dropdown' }, options);
    return this.each(function (index) {
        var $container = $(this);
        var $trigger = $container.find(settings.trigger);
        var $item = $container.find(settings.item);
        var $listItems = $item.children();
        var eventName = "click." + settings.namespace + "-" + index + " touch." + settings.namespace + "-" + index;
        var $defaultSelected = $($item.children()[0]);
        var toggleAttrHandler = function toggleAttrHandler(i, attr) {
            return attr === 'true' ? 'false' : 'true';
        };
        var documentHandler = function documentHandler(e) {
            if (!$container.has(e.target).length) {
                $container.removeClass(settings.toggleClass);
                // Remove used handler
                $(this).off(eventName);
            }
        };
        var itemHandler = function itemHandler(e) {
            $container.toggleClass(settings.toggleClass);
            if ($container.hasClass(settings.toggleClass)) {
                $(document).on(eventName, documentHandler);
            }
            $trigger.attr('aria-expanded', toggleAttrHandler);
            $item.attr('aria-hidden', toggleAttrHandler);
            $item.prop('selectedIndex', 0);
        };
        var selectionHandler = function selectionHandler(e) {
            var $lists = $item.children();
            var $selected = $(e.currentTarget);
            var $rendered = $container.find('.c-filter-dropdown__text');
            $lists.map(function (i, list) {
                return $(list).removeClass('c-filter-dropdown__item--selected');
            });
            $selected.addClass('c-filter-dropdown__item--selected');
            $item.prop('selectedIndex', $selected.index());
            $container.removeClass('is-open');
            $rendered.text($selected.text());
        };
        $trigger.on('click', itemHandler);
        $listItems.on('click', selectionHandler);
        $defaultSelected.addClass('c-filter-dropdown__item--selected');
        // Accessibility handler
        $trigger.on('keydown', function (e) {
            if (e.which === key_event_code_1.default.SPACE) {
                e.preventDefault();
                itemHandler(e);
            }
        });
    });
};
// Initiate
$('[data-toggle="dropdown"]').dropdown();

/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range__ = __webpack_require__(449);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boolean__ = __webpack_require__(447);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__boolean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__debounce__ = __webpack_require__(448);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__debounce__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toggleItem = __webpack_require__(231);

var _toggleItem2 = _interopRequireDefault(_toggleItem);

var _toggleContainerItem = __webpack_require__(229);

var _toggleContainerItem2 = _interopRequireDefault(_toggleContainerItem);

var _toggleItemResize = __webpack_require__(230);

var _toggleItemResize2 = _interopRequireDefault(_toggleItemResize);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-toggle-text';
  var maxHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 42;
  var toggleAllSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.js-toggle-all-texts';
  var containerSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-toggle-text-container';

  var toggleItems = document.querySelectorAll(selector);
  var toggleItemObjects = [];

  for (var i = 0; i < toggleItems.length; i++) {
    new _toggleItemResize2.default(toggleItems[i]);
    toggleItemObjects.push(new _toggleItem2.default(toggleItems[i], maxHeight));
  }

  var toggleContainer = document.querySelectorAll(containerSelector);

  for (var i = 0; i < toggleContainer.length; i++) {
    new _toggleContainerItem2.default(toggleContainer[i], selector, toggleAllSelector, toggleItemObjects);
  }
}

exports.default = { attach: attach };

/***/ }),
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var keyCode = {
  CANCEL: 3,
  HELP: 6,
  BACK_SPACE: 8,
  TAB: 9,
  CLEAR: 12,
  RETURN: 13,
  ENTER: 14,
  SHIFT: 16,
  CONTROL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESCAPE: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINTSCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  NUM_0: 48,
  NUM_1: 49,
  NUM_2: 50,
  NUM_3: 51,
  NUM_4: 52,
  NUM_5: 53,
  NUM_6: 54,
  NUM_7: 55,
  NUM_8: 56,
  NUM_9: 57
};

exports.default = keyCode;

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(162);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = Symbol;


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(441);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = root;


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__now_js__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toNumber_js__ = __webpack_require__(165);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toNumber_js__["a" /* default */])(wait) || 0;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toNumber_js__["a" /* default */])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])());
  }

  function debounced() {
    var time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ __webpack_exports__["a"] = debounce;


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["a"] = isObject;


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSymbol_js__ = __webpack_require__(445);



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isSymbol_js__["a" /* default */])(value)) {
    return NAN;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ __webpack_exports__["a"] = toNumber;


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollbarPlugin; });
/* unused harmony export globalPlugins */
/* harmony export (immutable) */ __webpack_exports__["b"] = addPlugins;
/* harmony export (immutable) */ __webpack_exports__["c"] = initPlugins;

var ScrollbarPlugin = /** @class */ (function () {
    function ScrollbarPlugin(scrollbar, options) {
        var _newTarget = this.constructor;
        this.scrollbar = scrollbar;
        this.name = _newTarget.pluginName;
        this.options = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __assign */]({}, _newTarget.defaultOptions, options);
    }
    ScrollbarPlugin.prototype.onInit = function () { };
    ScrollbarPlugin.prototype.onDestory = function () { };
    ScrollbarPlugin.prototype.onUpdate = function () { };
    ScrollbarPlugin.prototype.onRender = function (_remainMomentum) { };
    ScrollbarPlugin.prototype.transformDelta = function (delta, _evt) {
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __assign */]({}, delta);
    };
    ScrollbarPlugin.pluginName = '';
    ScrollbarPlugin.defaultOptions = {};
    return ScrollbarPlugin;
}());

var globalPlugins = {
    order: new Set(),
    constructors: {},
};
function addPlugins() {
    var Plugins = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Plugins[_i] = arguments[_i];
    }
    Plugins.forEach(function (P) {
        var pluginName = P.pluginName;
        if (!pluginName) {
            throw new TypeError("plugin name is required");
        }
        globalPlugins.order.add(pluginName);
        globalPlugins.constructors[pluginName] = P;
    });
}
function initPlugins(scrollbar, options) {
    return Array.from(globalPlugins.order)
        .filter(function (pluginName) {
        return options[pluginName] !== false;
    })
        .map(function (pluginName) {
        var Plugin = globalPlugins.constructors[pluginName];
        var instance = new Plugin(scrollbar, options[pluginName]);
        // bind plugin options to `scrollbar.options`
        options[pluginName] = instance.options;
        return instance;
    });
}
//# sourceMappingURL=plugin.js.map

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackDirection; });
var TrackDirection;
(function (TrackDirection) {
    TrackDirection["X"] = "x";
    TrackDirection["Y"] = "y";
})(TrackDirection || (TrackDirection = {}));
//# sourceMappingURL=direction.js.map

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPointerData;
/**
 * Get pointer/touch data
 */
function getPointerData(evt) {
    // if is touch event, return last item in touchList
    // else return original event
    return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}
//# sourceMappingURL=get-pointer-data.js.map

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_pointer_data__ = __webpack_require__(168);
/* harmony export (immutable) */ __webpack_exports__["a"] = getPosition;

/**
 * Get pointer/finger position
 */
function getPosition(evt) {
    var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__get_pointer_data__["a" /* getPointerData */])(evt);
    return {
        x: data.clientX,
        y: data.clientY,
    };
}
//# sourceMappingURL=get-position.js.map

/***/ }),
/* 170 */,
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tableSort = __webpack_require__(217);

var _tableSort2 = _interopRequireDefault(_tableSort);

var _tableScroll = __webpack_require__(216);

var _tableScroll2 = _interopRequireDefault(_tableScroll);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-table-sortable';
  var selector2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-table-scroll-wrapper';

  var tableElements = document.querySelectorAll(selector);
  var tableElements2 = document.querySelectorAll(selector2);

  for (var i = 0; i < tableElements.length; i += 1) {
    var element = tableElements[i];
    var tableSort = new _tableSort2.default(element);
  }

  for (var _i = 0; _i < tableElements2.length; _i += 1) {
    var _element = tableElements2[_i];
    var tableScroll = new _tableScroll2.default(_element);
  }
}

exports.default = { attach: attach };

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Modal = function ($) {

  $.fn.ndbxModal = function (options) {

    // Let make it comment first
    // let settings = $.extend({
    //
    // }, options );

    var element = this;
    var isMovable = $(element)[0].classList.contains('js-popup--movable');

    this.setContent = function (content) {
      $(element).find('.c-popup_body').html(content);
    };

    this.open = function () {

      var showEvent = $.Event('ndbx.modal.show');
      $(element).trigger(showEvent);

      $(element).removeClass('isClose').addClass('isOpen');
      $(element).find('.c-popup__dialog').addClass('c-popup__dialog--transition-enter').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
        // check css animation has finishded or not
        var dialog = this;
        $(this).removeClass('c-popup__dialog--transition-enter');

        // check the attribute data-dismiss="modal" to close the modal box
        // initiate when modal box open
        $(element).find('[data-dismiss="modal"]').on('click', function () {

          // When there is some settings, we need to pass setting object as param
          // $(element).ndbxModal(settings).close();
          $(element).ndbxModal().close();
          $(this).off('click');
        });

        // check the attribute data-draggable="modal" to be able to drag the modal box
        // $(element).find('[data-draggable="modal"]').on('mousedown',function(e){
        //
        //   var dragElement = this;
        //   var dialogPosition = $(dialog).position();
        //   var initialMouseX = e.clientX;
        //   var initialMouseY = e.clientY;
        //
        //
        //   $(document).on('mousemove', function(e){
        //     var dx = e.clientX - initialMouseX;
        //     var dy = e.clientY - initialMouseY;
        //     var style = { top: dialogPosition.top + dy + 'px', left: dialogPosition.left + dx + 'px', position: 'absolute' };
        //     $(dialog).css(style);
        //
        //     $(document).on('mouseup', function(e){
        //       $(document).off('mousemove');
        //       $(document).off('mouseup');
        //     });
        //
        //   });
        //
        // });

        var showEvent = $.Event('ndbx.modal.shown');
        $(element).trigger(showEvent);
      });

      $('.c-popup__dialog').css({ position: 'relative', top: 'auto', left: 'auto' });
      return this;
    };

    this.close = function () {

      var hideEvent = $.Event('ndbx.modal.hide');
      $(element).trigger(hideEvent);

      $(element).find('.c-popup__dialog').addClass('c-popup__dialog--transition-leave').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
        // check css animation has finishded or not
        $(this).removeClass('c-popup__dialog--transition-leave');
        $(element).removeClass('isOpen').addClass('isClose');

        var hiddenEvent = $.Event('ndbx.modal.hidden');
        $(element).trigger(hiddenEvent);
      });

      return this;
    };

    $(element).on('click', function (e) {
      if (e.currentTarget != e.target) {
        return;
      }
      element.close();
    });

    // for movable popup only  
    if (isMovable && window.innerWidth > 991) {
      var nextLeft = 0,
          nextTop = 0;
      $('.c-popup__move').on('mousedown', function (e) {
        $('.c-popup__header').css({ cursor: 'move' });
        $(document).on('mousemove', function (e) {
          nextLeft = e.clientX - 24;
          nextTop = e.clientY - 26;
          var style = { left: nextLeft + 'px', top: nextTop + 'px', position: 'absolute' };
          $('.c-popup__dialog').css(style);

          $(document).on('mouseup', function (e) {
            $(document).off('mousemove');
            $(document).off('mouseup');
            $('.c-popup__header').css({ cursor: 'default' });
          });
        });
      });
    }

    return this;
  };

  $('[data-toggle="modal"]').on('click', function () {
    var modalSelector = $(this).data('trigger'); // get id of Modal Box
    $('#' + modalSelector).ndbxModal().open();
  });
}(_jquery2.default);

exports.default = Modal;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectFitImages = __webpack_require__(79);

var _objectFitImages2 = _interopRequireDefault(_objectFitImages);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function polyfillObjectFit() {
  // first of all ensure object-fit polyfill is in place (all IE)
  // we heavily use object-fit to ensure fixes ratios in some places.
  // the following will search for every image

  // skip lazy images for carousel three columns
  var notLazyImage = 'img:not(.swiper-lazy)';

  (0, _objectFitImages2.default)(notLazyImage);
}

exports.default = { polyfillObjectFit: polyfillObjectFit };

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _naturalFormHandleEvent = __webpack_require__(235);

var _naturalFormHandleEvent2 = _interopRequireDefault(_naturalFormHandleEvent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-natural-form';

  var naturalForm = document.querySelectorAll(selector);

  for (var i = 0; i < naturalForm.length; i += 1) {
    var element = naturalForm[i];
    var naturalFormHandleEvent = new _naturalFormHandleEvent2.default(element);
  }
}

exports.default = { attach: attach };

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _productNavBar = __webpack_require__(218);

var _productNavBar2 = _interopRequireDefault(_productNavBar);

var _lodash = __webpack_require__(12);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var AutoCombineNavBar = function () {
  function AutoCombineNavBar(el) {
    _classCallCheck(this, AutoCombineNavBar);

    this._productNavEl = el;
    this._navBarItemsEl = this._productNavEl.querySelector('.js-toggle-product-nav__list');
    this._moreLinkContainer = this._productNavEl.querySelector('.js-more-link-container');
    this._moreLinkEls = this._productNavEl.querySelectorAll('.js-more-link');
    this._subMenuEl = this._moreLinkContainer.querySelector('.js-sub-menu');
    this._defaultHeight = 31; // The height of menu item

    this.clickOutsideHandle = this.clickOutsideHandle.bind(this);

    if (!this._productNavEl || !this._navBarItemsEl) {
      throw new Error();
    }
    this._init();
  }

  _createClass(AutoCombineNavBar, [{
    key: '_init',
    value: function _init() {
      var _this = this;

      var listitems = this._navBarItemsEl.querySelectorAll('.js-listitems li');

      setTimeout(function () {
        _this._showMoreLink();
      }, 50);

      this._moreLinkEls.forEach(function (moreLinkEl) {
        moreLinkEl.addEventListener('click', function (e) {
          e.preventDefault();
          _this._toggleSubMenu();
        });
      });

      window.addEventListener('resize', (0, _lodash.throttle)(function () {
        _this._hideSubmenu();
        _this._showMoreLink();
      }, 20));
    }
  }, {
    key: '_showMoreLink',
    value: function _showMoreLink() {
      var isWrap = this._navBarItemsEl.scrollHeight > this._defaultHeight;
      if (isWrap) {
        this.addClass(this._moreLinkContainer, 'is-active');
        this._appendChildren();
        this._activeMoreLink();
      } else {
        this.removeClass(this._moreLinkContainer, 'is-active');
      }
    }
  }, {
    key: '_activeMoreLink',
    value: function _activeMoreLink() {
      var activeLink = this._moreLinkContainer.querySelector('.js-submenu-listitems .c-nav-product__link.is-active');
      if (activeLink) this.addClass(this._moreLinkContainer.querySelector('.js-more-link'), 'is-active');
    }
  }, {
    key: '_toggleSubMenu',
    value: function _toggleSubMenu() {
      var className = 'is-active';
      var isActive = this._subMenuEl.classList.contains(className);
      var moreLink = this._moreLinkContainer.querySelector('.c-nav-product__more-link');

      if (isActive) {
        this.removeClass(this._subMenuEl, className);
        this._activeMoreLink();
        this.removeClass(moreLink, 'c-nav-product--is-selected');
      } else {
        var submenuListActive = this._subMenuEl.querySelector('.js-submenu-listitems');
        var isSubmenuListActive = submenuListActive.querySelector('.c-nav-product__link.is-active') ? true : false;

        this._appendChildren();
        this.addClass(this._subMenuEl, className);
        if (isSubmenuListActive) {
          this.addClass(moreLink, 'c-nav-product--is-selected');
        }
      }

      document.addEventListener('click', this.clickOutsideHandle);
    }
  }, {
    key: 'clickOutsideHandle',
    value: function clickOutsideHandle(e) {
      if (!this._moreLinkContainer.contains(e.target)) {
        this._hideSubmenu();
        this.removeClass(this._subMenuEl, 'is-active');
      }
    }
  }, {
    key: '_hideSubmenu',
    value: function _hideSubmenu() {
      document.removeEventListener("click", this.clickOutsideHandle);
      this.removeClass(this._subMenuEl, 'is-active');
    }
  }, {
    key: '_appendChildren',
    value: function _appendChildren() {
      var _this2 = this;

      var listitems = this._navBarItemsEl.querySelectorAll('.js-listitems li');
      var submenuList = this._productNavEl.querySelector('.js-submenu-listitems');

      this.empty(submenuList);
      listitems.forEach(function (item) {
        if (item.offsetTop > 0) {
          var cloned = item.cloneNode(true);

          cloned.addEventListener('click', function (event) {
            _this2.setActiveItem(event.currentTarget, item);
            _this2._toggleSubMenu();
          });

          submenuList.appendChild(cloned);
        }
      });
    }
  }, {
    key: 'setActiveItem',
    value: function setActiveItem(cloned, main) {
      var _this3 = this;

      this._productNavEl.querySelectorAll('.js-submenu-listitems > li').forEach(function (item) {
        _this3.removeClass(item.querySelector('a'), 'is-active');
      });
      this._navBarItemsEl.querySelectorAll('.js-listitems li').forEach(function (item) {
        _this3.removeClass(item.querySelector('a'), 'is-active');
      });
      this.addClass(cloned.querySelector('a'), 'is-active');
      this.addClass(main.querySelector('a'), 'is-active');
    }
  }, {
    key: 'addClass',
    value: function addClass(el, className) {
      if (!el || !className) return;
      el.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(el, className) {
      if (!el || !className) return;
      el.classList.remove(className);
    }
  }, {
    key: 'empty',
    value: function empty(el) {
      if (!el) return;
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
      }
    }
  }]);

  return AutoCombineNavBar;
}();

var mediaQuery = window.matchMedia('(min-width: 703px)');

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-toggle-product-nav';

  var productNavElements = document.querySelectorAll(selector);

  productNavElements.forEach(function (element) {
    var productNavBar = new _productNavBar2.default(element, mediaQuery);
    productNavBar.sticky();
  });

  productNavElements.forEach(function (el) {
    var navBar = new AutoCombineNavBar(el);
    return navBar;
  });
}

exports.default = { attach: attach };

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listTableMultiSelectHandleEvent = __webpack_require__(220);

var _listTableMultiSelectHandleEvent2 = _interopRequireDefault(_listTableMultiSelectHandleEvent);

var _listTableSingleSelectHandleEvent = __webpack_require__(221);

var _listTableSingleSelectHandleEvent2 = _interopRequireDefault(_listTableSingleSelectHandleEvent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-table-list';

  var listTable = document.querySelectorAll(selector);

  var _loop = function _loop(i) {
    var element = listTable[i];
    if (element.classList.contains("c-list-table__table-multi-select")) {
      var listMultiSelectHandleEvent = new _listTableMultiSelectHandleEvent2.default(element);

      element.addEventListener('click', function () {
        listMultiSelectHandleEvent = new _listTableMultiSelectHandleEvent2.default(element);
      });
    } else if (element.classList.contains("c-list-table__table-single-select")) {
      var listSingleSelectHandleEvent = new _listTableSingleSelectHandleEvent2.default(element);

      element.addEventListener('click', function () {
        listSingleSelectHandleEvent = new _listTableSingleSelectHandleEvent2.default(element);
      });
    }
  };

  for (var i = 0; i < listTable.length; i += 1) {
    _loop(i);
  }
}

exports.default = { attach: attach };

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SharingDialog = function () {
  function SharingDialog(dialogEl, shareableContents) {
    _classCallCheck(this, SharingDialog);

    this._dialog = dialogEl;
    this._shareableContents = [].concat(_toConsumableArray(shareableContents));
    this._isActive = false;

    this.xPosPage = 0;
    this.yPosPage = 0;
    this.xPosScreen = 0;
    this.yPosScreen = 0;
    this.yPosPage = 0;
    this.offsetTop = 0;
    this.offsetLeft = 0;
    this.offsetTooltipBottom = 30;
    this.offsetTooltipTop = 190;
    this.offsetTooltipExpandedTop = 105;
    this.offsetTooltipAcceptedTop = 30;
    this.tooltipHeight = 200;
  }

  _createClass(SharingDialog, [{
    key: 'init',
    value: function init() {
      window.addEventListener('mouseup', this.onSelection.bind(this));

      this._dialog.querySelector('.js-close').addEventListener('click', this.hideDialog.bind(this));
      this.initSharingInfoSection();
    }
  }, {
    key: 'onSelection',
    value: function onSelection(e) {
      var _this = this;

      var selectionObj = window.getSelection();
      var isShareable = false;

      if (this._isActive) {
        return;
      }

      if (selectionObj.isCollapsed) {
        return;
      }

      isShareable = this._shareableContents.some(function (content) {
        var result = false;
        if (selectionObj.containsNode) {
          result = selectionObj.containsNode(content, true);
        } else {
          // IE doesn't has containsNode.
          result = _this._isNodeInSelection(selectionObj, content);
        }
        return result;
      });

      if (isShareable) {
        var parentContainer = this._dialog.parentNode.parentNode; //  Double parent because new code have new tooltip wrapped
        if (parentContainer) {
          var computedStyle = window.getComputedStyle(parentContainer, null);
          var paddingTop = parseInt(computedStyle.getPropertyValue('padding-top'), 10);

          this.offsetTop = parentContainer.offsetTop + paddingTop;
          this.offsetLeft = parentContainer.getBoundingClientRect().left;
          this.xPosPage = e.pageX;
          this.yPosPage = e.pageY;
          this.xPosScreen = e.clientX;
          this.yPosScreen = e.clientY;
        }

        if (this.yPosScreen > this.tooltipHeight) {
          this._dialog.parentNode.classList.remove('c-tooltip--bottom');
          this._dialog.parentNode.classList.add('c-tooltip--top');
          if (this._dialog.classList.contains('c-social-sharing--accepted')) {
            this.showDialog(this.xPosPage - this.offsetLeft, this.yPosPage - this.offsetTop - this.offsetTooltipTop + this.offsetTooltipAcceptedTop);
          } else {
            this.showDialog(this.xPosPage - this.offsetLeft, this.yPosPage - this.offsetTop - this.offsetTooltipTop);
          }
        } else {
          this._dialog.parentNode.classList.remove('c-tooltip--top');
          this._dialog.parentNode.classList.add('c-tooltip--bottom');
          this.showDialog(this.xPosPage - this.offsetLeft, this.yPosPage - this.offsetTop + this.offsetTooltipBottom);
        }
      }
    }
  }, {
    key: 'showDialog',
    value: function showDialog(posLeft, posTop) {
      this._isActive = true;
      this.resetState();
      this._dialog.classList.add('is-open');
      this._dialog.style.top = posTop + 'px';
      this._dialog.style.left = posLeft + 'px';
    }
  }, {
    key: 'hideDialog',
    value: function hideDialog() {
      this._dialog.classList.remove('is-open');
      this._dialog.classList.remove('c-social-sharing--expanded');
      this._isActive = false;
    }
  }, {
    key: 'initSharingInfoSection',
    value: function initSharingInfoSection() {
      var _this2 = this;

      var showInfoBtn = this._dialog.querySelector('.js-show-info');
      var hideInfoBtn = this._dialog.querySelector('.js-hide-info');
      var infoContent = this._dialog.querySelector('.js-info-content');
      var acceptBtn = this._dialog.querySelector('.js-accept-btn');
      var cancelBtn = this._dialog.querySelector('.js-cancel-btn');
      showInfoBtn.addEventListener('click', function () {
        _this2.resetState();

        if (_this2.yPosScreen > _this2.tooltipHeight) {
          _this2._dialog.parentNode.classList.remove('c-tooltip--bottom');
          _this2._dialog.parentNode.classList.add('c-tooltip--top');
          _this2.showDialog(_this2.xPosPage - _this2.offsetLeft, _this2.yPosPage - _this2.offsetTop - _this2.offsetTooltipTop - _this2.offsetTooltipExpandedTop);
        } else {
          _this2._dialog.parentNode.classList.remove('c-tooltip--top');
          _this2._dialog.parentNode.classList.add('c-tooltip--bottom');
          _this2.showDialog(_this2.xPosPage - _this2.offsetLeft, _this2.yPosPage - _this2.offsetTop + _this2.offsetTooltipBottom);
        }

        _this2._dialog.classList.add('c-social-sharing--expanded');
        showInfoBtn.classList.add('is-hidden');
        hideInfoBtn.classList.remove('is-hidden');
        infoContent.classList.remove('is-hidden');
      });

      hideInfoBtn.addEventListener('click', function () {
        _this2.resetState();

        if (_this2.yPosScreen > _this2.tooltipHeight) {
          _this2._dialog.parentNode.classList.remove('c-tooltip--bottom');
          _this2._dialog.parentNode.classList.add('c-tooltip--top');
          _this2.showDialog(_this2.xPosPage - _this2.offsetLeft, _this2.yPosPage - _this2.offsetTop - _this2.offsetTooltipTop);
        } else {
          _this2._dialog.parentNode.classList.remove('c-tooltip--top');
          _this2._dialog.parentNode.classList.add('c-tooltip--bottom');
          _this2.showDialog(_this2.xPosPage - _this2.offsetLeft, _this2.yPosPage - _this2.offsetTop + _this2.offsetTooltipBottom);
        }

        _this2._dialog.classList.remove('c-social-sharing--expanded');
        hideInfoBtn.classList.add('is-hidden');
        showInfoBtn.classList.remove('is-hidden');
        infoContent.classList.add('is-hidden');
      });

      acceptBtn.addEventListener('click', function () {
        _this2.resetState();

        if (_this2.yPosScreen > _this2.tooltipHeight) {
          _this2._dialog.parentNode.classList.remove('c-tooltip--bottom');
          _this2._dialog.parentNode.classList.add('c-tooltip--top');
          _this2.showDialog(_this2.xPosPage - _this2.offsetLeft, _this2.yPosPage - _this2.offsetTop - _this2.offsetTooltipTop + _this2.offsetTooltipAcceptedTop);
        } else {
          _this2._dialog.parentNode.classList.remove('c-tooltip--top');
          _this2._dialog.parentNode.classList.add('c-tooltip--bottom');
          _this2.showDialog(_this2.xPosPage - _this2.offsetLeft, _this2.yPosPage - _this2.offsetTop + _this2.offsetTooltipBottom);
        }

        _this2._dialog.classList.add('c-social-sharing--accepted');
        _this2._dialog.classList.remove('c-social-sharing--expanded');
        _this2._dialog.classList.remove('is-disabled');
      });

      cancelBtn.addEventListener('click', function () {
        _this2.resetState();

        if (_this2.yPosScreen > _this2.tooltipHeight) {
          _this2._dialog.parentNode.classList.remove('c-tooltip--bottom');
          _this2._dialog.parentNode.classList.add('c-tooltip--top');
          _this2.showDialog(_this2.xPosPage - _this2.offsetLeft, _this2.yPosPage - _this2.offsetTop - _this2.offsetTooltipTop);
        } else {
          _this2._dialog.parentNode.classList.remove('c-tooltip--top');
          _this2._dialog.parentNode.classList.add('c-tooltip--bottom');
          _this2.showDialog(_this2.xPosPage - _this2.offsetLeft, _this2.yPosPage - _this2.offsetTop + _this2.offsetTooltipBottom);
        }

        _this2._dialog.classList.remove('c-social-sharing--expanded');
        _this2.hideDialog();
      });
    }
  }, {
    key: 'resetState',
    value: function resetState() {
      var showInfoBtn = this._dialog.querySelector('.js-show-info');
      var hideInfoBtn = this._dialog.querySelector('.js-hide-info');
      var infoContent = this._dialog.querySelector('.js-info-content');
      showInfoBtn.classList.remove('is-hidden');
      hideInfoBtn.classList.add('is-hidden');
      infoContent.classList.add('is-hidden');
    }
  }, {
    key: '_isNodeInSelection',
    value: function _isNodeInSelection(selectionObj, el) {
      var rangeCount = selectionObj.rangeCount;
      if (!rangeCount) {
        return false;
      }
      var range = document.createRange();
      for (var i = 0; i < rangeCount; i += 1) {
        range.selectNodeContents(el);
        var selRange = selectionObj.getRangeAt(i);
        var isInRange = selRange.compareBoundaryPoints(range.START_TO_END, range) === 1;
        isInRange = isInRange && selRange.compareBoundaryPoints(range.END_TO_START, range) === -1;
        if (isInRange) {
          return true;
        }
      }
      return false;
    }
  }]);

  return SharingDialog;
}();

function attach() {
  var shareableContents = document.querySelectorAll('.js-shareable');
  var dialog = document.querySelector('.js-social-sharing');
  if (shareableContents && dialog) {
    var sharingDialog = new SharingDialog(dialog, shareableContents);
    sharingDialog.init();
  }
}

exports.default = { attach: attach };

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _dropdownConstructor = __webpack_require__(222);

var _dropdownConstructor2 = _interopRequireDefault(_dropdownConstructor);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var FormSelect = function () {
  function FormSelect($el) {
    _classCallCheck(this, FormSelect);

    this._keys = {
      ENTER: 13,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      TAB: 9,
      BACKSPACE: 8,
      DELETE: 46,
      ESC: 27,
      HOME: 36,
      END: 35,
      SPACE: 32
    };

    this._$formSelect = $el;
    this._$natural = this._$formSelect.find('.c-select__natural');
    // Generate markup from select tag
    new _dropdownConstructor2.default($el);

    this._$rendered = this._$formSelect.find('.c-select__selection--rendered');
    this._$optionsContainer = this._$formSelect.find('.c-select-results');
    this._$options = this._$formSelect.find('li.c-select-results__option');
    this._$dropdown = this._$formSelect.find('.c-select__dropdown');
    this._$dropdownLabel = this._$dropdown.find('.c-select__dropdown__label');
    this._$selection = this._$formSelect.find('.c-select__selection');
    this._$filter = this._$formSelect.find('.c-select__filter > input');
    this._$closeBtn = this._$formSelect.find('.c-select__c-icon');
    this._$natural = this._$formSelect.find('.c-select__natural');
    this.isComboSelect = this._$formSelect[0].classList.contains('c-select--combo-select');

    this.init();
  }

  // End of dropdown markup construction

  _createClass(FormSelect, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this._$filter.on('keyup', this.onKeyupFilter.bind(this));
      this._$closeBtn.on('click', this.onClickCloseBtn.bind(this));
      this._$formSelect.on('keydown', this.onKeyNavigate.bind(this));
      this._$selection.on('click', this.onMouseClick.bind(this));
      this._$selection.on('focus', this.onFocus.bind(this));
      this._$selection.on('focusout', this.onFocusOut.bind(this));
      this._$options.on('click', this.onSelect.bind(this));
      this._$options.on('mouseenter', this.onOptionHover.bind(this));

      this.setValue(this._$formSelect.attr('data-value')); // set pre-selected value
      this._bindCloseHandler();

      if (this._$filter.length > 0) {
        this._$formSelect.on('close', function () {
          _this._$filter.val('');
          _this._$selection.focus();
        });

        this._$formSelect.on('open', function () {
          _this._$filter.focus();
        });
      }
    }
  }, {
    key: 'onMouseClick',
    value: function onMouseClick() {
      if (this.isDisabled()) {
        return;
      }

      if (this.isOpen()) {
        this.close();
      } else {
        this.initializeOptionDisplay(false);
        this.open();
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(event) {
      var $selected = (0, _jquery2.default)(event.currentTarget);
      this._$formSelect.addClass('c-select--is-filled');
      this.close();
      this._$options.removeClass('c-select-results__option--selected');

      $selected.addClass('c-select-results__option--selected');
      this._$rendered.text($selected.text());
      this.$selected = $selected;
      var value = $selected.closest('.c-select-results__option').data('value') || $selected.text();
      this._$formSelect.attr('data-value', value);
      this._$natural.val(value);
      this._$formSelect.val($selected.text());
    }
  }, {
    key: 'updateDropdownPosition',
    value: function updateDropdownPosition() {
      var $dropdown = this._$dropdown;
      var $selected = this.$selected;
      $dropdown.css('top', '');
      var top = $dropdown[0].offsetTop + this._$dropdownLabel.height();
      if ($selected && $selected.length) {
        var optionOffsetTop = $selected[0].offsetTop;
        var scrollPosition = optionOffsetTop - 150;
        this._$optionsContainer[0].scrollTop = scrollPosition;
        var selectedItemPosition = $selected[0].getBoundingClientRect().top;
        var relatedTop = selectedItemPosition - this._$rendered[0].getBoundingClientRect().top;
        if (relatedTop < this._$formSelect[0].getBoundingClientRect().top) {
          top = relatedTop + 16;
        }
      }
      $dropdown.css('top', -1 * top + 'px');
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      _jquery2.default.each(this._$options, function (idx, option) {
        var optionValue = (0, _jquery2.default)(option).text().trim();
        if (value && value.trim() === optionValue) {
          (0, _jquery2.default)(option).trigger('click');
        }
      });
    }
  }, {
    key: '_bindCloseHandler',
    value: function _bindCloseHandler() {
      var _this2 = this;

      (0, _jquery2.default)(document).on('mousedown.form.select2', function (event) {
        var $target = (0, _jquery2.default)(event.target);
        var $parent = $target.closest('.c-select');

        if (_this2._$formSelect[0] === $parent[0]) {
          return;
        }

        if (_this2.isOpen()) {
          _this2.close();
        }
      });
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this._$formSelect.attr('disabled') || // TODO:: Deprecate in next major release(2.0) 
      this._$natural.attr('disabled');
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this._$formSelect.hasClass('c-select--is-opended');
    }
  }, {
    key: 'open',
    value: function open() {
      var $selected = this._$options.filter('.c-select-results__option--selected');
      this.removeItemHighlightState();
      if ($selected.length > 0) {
        var selectIndex = this._$options.index($selected);
        this.moveToIndex(selectIndex);
      } else {
        this.moveToFirst();
      }
      this._$formSelect.addClass('c-select--is-opended');
      this._$formSelect.trigger('open');
      if (!this.isComboSelect) {
        this.updateDropdownPosition();
      }
      this._$selection.attr('aria-expanded', true);
    }
  }, {
    key: 'close',
    value: function close() {
      this._$formSelect.removeClass('c-select--is-opended');
      this.addIconHiddenClass(this._$closeBtn);
      this._$formSelect.trigger('close');
      this._$selection.removeAttr('aria-expanded');
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      this._$formSelect.addClass('c-select--focus');
    }
  }, {
    key: 'onFocusOut',
    value: function onFocusOut() {
      if (!this.isOpen()) {
        this._$formSelect.removeClass('c-select--focus');
      }
    }
  }, {
    key: 'onOptionHover',
    value: function onOptionHover(event) {
      this.removeItemHighlightState();
      var $item = (0, _jquery2.default)(event.currentTarget);
      this.setItemHighlightState($item);
    }
  }, {
    key: 'getHighlightItem',
    value: function getHighlightItem() {
      return this._$options.filter('.c-select-results__option--hightlighted');
    }
  }, {
    key: 'setItemHighlightState',
    value: function setItemHighlightState($elment) {
      $elment.addClass('c-select-results__option--hightlighted');
      $elment.attr('aria-selected', 'true');
    }
  }, {
    key: 'removeItemHighlightState',
    value: function removeItemHighlightState() {
      this._$options.removeClass('c-select-results__option--hightlighted');
      this._$options.removeAttr('aria-selected');
    }
  }, {
    key: 'onClickCloseBtn',
    value: function onClickCloseBtn() {
      this._$filter.val('');
      this.addIconHiddenClass(this._$closeBtn);
      this.initializeOptionDisplay(false);
    }
  }, {
    key: 'addHiddenClass',
    value: function addHiddenClass(element) {
      if (!(0, _jquery2.default)(element).hasClass('u-hidden')) {
        (0, _jquery2.default)(element).addClass('u-hidden');
      }
    }
  }, {
    key: 'addIconHiddenClass',
    value: function addIconHiddenClass(element) {
      if (!(0, _jquery2.default)(element).hasClass('c-select__c-icon--hidden')) {
        (0, _jquery2.default)(element).addClass('c-select__c-icon--hidden');
        (0, _jquery2.default)('.c-select__filter').removeClass('c-select__filter--is-filled');
      }
    }
  }, {
    key: 'initializeOptionDisplay',
    value: function initializeOptionDisplay(isHide) {
      (0, _jquery2.default)('.c-select-results__option').each(function (index, value) {
        if (isHide) {
          if (!(0, _jquery2.default)(value).hasClass('u-hidden')) {
            (0, _jquery2.default)(value).addClass('u-hidden');
          }
        } else {
          (0, _jquery2.default)(value).removeClass('u-hidden');
        }
      });
    }
  }, {
    key: 'onKeyupFilter',
    value: function onKeyupFilter(event) {
      var keycode = event.which;
      event.preventDefault();

      var inputVal = this._$filter.val().toLowerCase();
      var liClassList = '.c-select-results__option';
      var self = this;
      if (keycode !== this._keys.BACKSPACE && keycode !== this._keys.DELETE) {
        // not delete event

        this._$closeBtn.removeClass('c-select__c-icon--hidden');
        (0, _jquery2.default)('.c-select__filter').addClass('c-select__filter--is-filled');
        (0, _jquery2.default)(liClassList).each(function (index, value) {
          var liValue = (0, _jquery2.default)(value).text().toLowerCase();
          if (liValue.indexOf(inputVal) < 0) {
            // not found in the list
            self.addHiddenClass(value);
          }
        });
      } else {
        //delete event

        (0, _jquery2.default)(liClassList).each(function (index, value) {
          var liValue = (0, _jquery2.default)(value).text().toLowerCase();
          if (inputVal) {
            if (liValue.indexOf(inputVal) < 0) {
              // not found in the list
              self.addHiddenClass(value);
            } else {
              (0, _jquery2.default)(value).removeClass('u-hidden');
            }
          } else {
            (0, _jquery2.default)(value).removeClass('u-hidden');
            self.addIconHiddenClass(self._$closeBtn);
          }
        });
      }
    }
  }, {
    key: 'onKeyNavigate',
    value: function onKeyNavigate(event) {
      var keycode = event.which;
      if (this.isDisabled()) {
        return;
      }
      if (this.isOpen()) {

        if (keycode === this._keys.ESC) {
          this.close();
          event.preventDefault();
        }

        if (keycode === this._keys.TAB) {
          this.close();
          this.onFocusOut();
          event.preventDefault();
        }

        if (keycode === this._keys.DOWN) {
          this.moveNext();
          event.preventDefault();
        }

        if (keycode === this._keys.UP) {
          this.movePrevious();
          event.preventDefault();
        }

        if (keycode === this._keys.HOME) {
          this.moveToFirst();
          event.preventDefault();
        }

        if (keycode === this._keys.END) {
          this.moveToLast();
          event.preventDefault();
        }

        if (keycode === this._keys.ENTER) {
          this.selectHighlighItem();
          this.close();
          event.preventDefault();
        }
      } else {
        if (keycode === this._keys.ENTER || keycode === this._keys.DOWN || keycode === this._keys.UP || keycode === this._keys.SPACE) {
          this.open();
          event.preventDefault();
        }
      }
    }
  }, {
    key: 'selectHighlighItem',
    value: function selectHighlighItem() {
      var $highlighted = this.getHighlightItem();
      $highlighted.trigger('click');
    }
  }, {
    key: 'moveNext',
    value: function moveNext() {
      var $highlighted = this.getHighlightItem();
      var currentIndex = 0;
      var nextIndex = 0;
      if ($highlighted.length > 0) {
        currentIndex = this._$options.index($highlighted);
      }
      nextIndex = currentIndex + 1;

      // Do nothing if we're at the last item.
      if (nextIndex >= this._$options.length) {
        return;
      }

      this.moveToIndex(nextIndex);
    }
  }, {
    key: 'movePrevious',
    value: function movePrevious() {
      var $highlighted = this.getHighlightItem();
      var currentIndex = 0;
      var previousIndex = 0;
      if ($highlighted.length > 0) {
        currentIndex = this._$options.index($highlighted);
      }
      previousIndex = currentIndex - 1;

      // Do nothing if we're at the first item.
      if (previousIndex < 0) {
        return;
      }

      this.moveToIndex(previousIndex);
    }
  }, {
    key: 'moveToFirst',
    value: function moveToFirst() {
      this.moveToIndex(0);
    }
  }, {
    key: 'moveToLast',
    value: function moveToLast() {
      var lastItemIndex = this._$options.index(this._$options.last());
      this.moveToIndex(lastItemIndex);
    }
  }, {
    key: 'moveToIndex',
    value: function moveToIndex(index) {
      var $target = this._$options.eq(index);
      var id = $target.attr('id');

      this.removeItemHighlightState();
      this.setItemHighlightState($target);
      this.scrollToItem($target);
      this._$selection.attr('aria-activedescendant', id);
    }
  }, {
    key: 'scrollToItem',
    value: function scrollToItem($item) {
      var containerOffsetTop = this._$optionsContainer.offset().top;
      var scrollTop = this._$optionsContainer.scrollTop();
      var containerHeight = this._$optionsContainer.height();
      var itemTop = $item.offset().top;

      if (itemTop - (containerOffsetTop + scrollTop + containerHeight) > 0) {
        this._$optionsContainer.scrollTop(itemTop - containerOffsetTop);
      } else if (itemTop < containerOffsetTop) {
        this._$optionsContainer.scrollTop(itemTop - containerOffsetTop);
      }
    }
  }]);

  return FormSelect;
}();

_jquery2.default.fn.formSelect = function initial() {
  var _this3 = this;

  this.control = [];
  _jquery2.default.each(this, function (idx, el) {
    var control = new FormSelect((0, _jquery2.default)(el));
    _this3.control.push(control);
  });
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_jquery2.default.fn.starRating = function (options) {
  var settings = _jquery2.default.extend({
    // These are the defaults.    
    target: ".js-process-star-rating-item"
  }, options);

  var stars = this.find(settings.target);

  stars.click(function () {
    var position = (0, _jquery2.default)(this).index() + 1;
    var activeStars = stars.slice(0, position);
    var deactiveStars = stars.slice(position);

    activeStars.removeClass('c-icon--star-o').addClass('c-icon--star');
    deactiveStars.removeClass('c-icon--star').addClass('c-icon--star-o');
  });
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var accordionTrigger = '.js-accordion__trigger';
var accordionContent = '.js-accordion__item-content';

var Accordion = function () {
  function Accordion(element) {
    var _this = this;

    _classCallCheck(this, Accordion);

    this.toggleItem = function (currentTab) {
      // If multiple tabs are not allowed, close another opened item
      if (!_this._element.classList.contains('js-accordion-multiple-tabs-active')) {
        var activeTab = _this._element.querySelector('[aria-expanded="true"]');
        if (activeTab && activeTab !== currentTab) {
          activeTab.setAttribute('aria-expanded', 'false');
          _this.toggleStyles(activeTab);
        }
      }

      _this.toggleStyles(currentTab);
      var isExpanded = currentTab.getAttribute('aria-expanded') === 'true';
      currentTab.setAttribute('aria-expanded', !isExpanded);
    };

    this.toggleStyles = function (tab) {
      tab.classList.remove('is-animated');
      var chevronIcon = tab.querySelector('.c-accordion__chevron');
      chevronIcon.classList.toggle('c-icon--is-rotated');
      tab.classList.toggle('c-accordion__item--is-active');

      var currentItemContent = tab.nextElementSibling;
      var accordionContentHeight = Math.round(currentItemContent.scrollHeight);
      currentItemContent.style.maxHeight = !currentItemContent.style.maxHeight || currentItemContent.style.maxHeight === '0px' ? accordionContentHeight + 'px' : 0;
    };

    this.animationEnd = function (currentContent) {
      var currentTab = currentContent.previousElementSibling;
      var isOpen = currentTab.classList.contains('c-accordion__item--is-active');

      if (isOpen) {
        currentTab.classList.add('is-animated');
      }
    };

    this._element = element;
    this.init();
  }

  _createClass(Accordion, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this._accordionTriggers = this._element.querySelectorAll(accordionTrigger);
      this._accordionContent = this._element.querySelectorAll(accordionContent);

      this._accordionContent.forEach(function (element) {
        element.addEventListener('transitionend', function (event) {
          return _this2.animationEnd(event.target);
        });
      });

      this._accordionTriggers.forEach(function (element) {
        element.addEventListener('click', function (event) {
          return _this2.toggleItem(event.target);
        });
      });
    }
  }]);

  return Accordion;
}();

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-accordion';

  var accordions = document.querySelectorAll(selector);
  for (var i = 0; i < accordions.length; i += 1) {
    var accordion = new Accordion(accordions[i]);
  }
}

exports.default = {
  attach: attach
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _breakpoint = __webpack_require__(50);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

var _smoothScrollbar = __webpack_require__(78);

var _smoothScrollbar2 = _interopRequireDefault(_smoothScrollbar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_jquery2.default.fn.tabs = function () {
  var $window = (0, _jquery2.default)(window);
  var breakpoint = new _breakpoint2.default();

  function changeContentOnDesktop(element) {
    var $container = (0, _jquery2.default)(element).closest('.c-tabs__nav-item');
    var $targetContent = (0, _jquery2.default)('#' + $container.data('content-id'));
    var $contentParent = $targetContent.parent();
    var hasTable = $targetContent.children().hasClass('c-table__container');

    $container.addClass('active').siblings().removeClass('active');

    $targetContent.addClass('active');
    $targetContent.addClass('delayed animated fadeIn').siblings().removeClass('active');

    if (hasTable) {
      var scrollbarElem = _smoothScrollbar2.default.get($targetContent.children('.c-table__container')[0]);

      $targetContent.children('.c-table-scroll__container').removeClass('u-hidden');

      $targetContent.children('.c-table__container').children('.scrollbar-track-x').css('display', 'block');

      $targetContent.children('.c-table__container').children('.scroll-content').children('.c-table').css('margin-top', '40px');

      scrollbarElem.update(true);
    }
  }

  function changeContentOnMobile(element) {
    var $container = (0, _jquery2.default)(element).closest('.c-tabs__nav-item');
    var contentItem = $container.find('.c-tabs__content-item')[0];

    if ($container.hasClass('active')) {
      $container.removeClass('active');
      (0, _jquery2.default)(contentItem).css('maxHeight', contentItem.scrollHeight + 'px');
      // Hack to wait for max-height above to be set first
      setTimeout(function () {
        (0, _jquery2.default)(contentItem).css('maxHeight', '0');
      }, 0);
    } else {
      $container.siblings().removeClass('active').each(function () {
        (0, _jquery2.default)(this).find('.c-tabs__content-item').css('maxHeight', '0px');
      });

      $container.addClass('active').find('.c-tabs__content-item').css('maxHeight', contentItem.scrollHeight + 'px');

      // recompute maxHeight after scrollbar appears
      var initialContentHeight = contentItem.scrollHeight;
      setTimeout(function () {
        if (initialContentHeight !== contentItem.scrollHeight) {
          $container.find('.c-tabs__content-item').css('maxHeight', contentItem.scrollHeight + 'px');
        }
      }, 500);

      //scroll into visible 
      element.scrollIntoView(true);
    }
  }

  function handleOnBlur(element) {
    (0, _jquery2.default)(element).attr('tabindex', -1);
    (0, _jquery2.default)(element).blur();
  }

  function handleOnFocus(element) {
    (0, _jquery2.default)(element).attr('tabindex', 0);
    (0, _jquery2.default)(element).focus();
  }

  return this.each(function () {
    var $el = (0, _jquery2.default)(this);
    var $contentItem = $el.find('.c-tabs__content-item');

    var keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      delete: 46
    };
    var tabNavs = $el.find('.c-tabs__nav-item');
    var isVertical = $el.find('[role="tablist"]')[0].getAttribute('aria-orientation') ? true : false;

    $el.find('.c-tabs__nav .c-tabs__content-item').each(function () {
      if (!(0, _jquery2.default)(this).closest('.c-tabs__nav-item').hasClass('active')) {
        (0, _jquery2.default)(this).css('maxHeight', '0px');
      }
    });

    $el.find('.c-tabs__label').on('click', function () {
      if (breakpoint.isMobile()) {
        changeContentOnMobile(this);
      } else {
        changeContentOnDesktop(this);
      }
    });

    $el.find('.c-tabs__nav-item').on('focus', function () {
      if (breakpoint.isMobile()) {
        (0, _jquery2.default)(this).blur();
      } else {
        changeContentOnDesktop(this);
      }
    });

    $el.find('.c-tabs__nav-item').on('keydown', function (e) {
      switch (e.keyCode) {
        case keys.down:
          if (!isVertical) {
            break;
          }
        case keys.right:
          e.preventDefault();
          handleOnBlur(this);
          if ((0, _jquery2.default)(this).next().length == 0) {
            handleOnFocus(tabNavs[0]);
          } else {
            handleOnFocus((0, _jquery2.default)(this).next());
          }
          break;
        case keys.up:
          if (!isVertical) {
            break;
          }
        case keys.left:
          e.preventDefault();
          handleOnBlur(this);
          if ((0, _jquery2.default)(this).prev().length == 0) {
            handleOnFocus(tabNavs[tabNavs.length - 1]);
          } else {
            handleOnFocus((0, _jquery2.default)(this).prev());
          }
          break;
        case keys.home:
          e.preventDefault();
          handleOnBlur(this);
          handleOnFocus(tabNavs[0]);
          break;
        case keys.end:
          e.preventDefault();
          handleOnBlur(this);
          handleOnFocus(tabNavs[tabNavs.length - 1]);
          break;
        case keys.delete:
          (0, _jquery2.default)(this).blur();
        default:
          break;
      }
    });

    $window.on('breakpoint', function () {
      if (breakpoint.isMobile()) {
        $el.find('.c-tabs__nav-item').each(function () {
          var $contentItem = (0, _jquery2.default)(this).find('.c-tabs__content-item');
          var maxHeight = '0';

          if ((0, _jquery2.default)(this).hasClass('active')) {
            maxHeight = 'none';
          }

          $contentItem.css('maxHeight', maxHeight);
        });
      } else {
        var isActive = $el.find('.c-tabs__nav-item.active').length > 0;

        if (!isActive) {
          $el.find('.c-tabs__nav-item').first().find('.c-tabs__label').click();
        }
      }
    });

    // Remove max height when animation is done to avoid cutoff text
    $contentItem.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
      var $containerNav = (0, _jquery2.default)(this).closest('.c-tabs__nav-item');
      if ($containerNav.hasClass('active')) {
        (0, _jquery2.default)(this).css('maxHeight', 'none');
      }
    });
  });
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _jquery2.default)('.js-product-communication-tile').find('.js-product-communication-tile__button').on('click', function () {
  var $isMobile = window.innerWidth <= 767;
  if ($isMobile) {
    var $allItems = (0, _jquery2.default)('.js-product-communication-tile').find('.js-product-communication-tile__item');
    var $buttonLabelText = (0, _jquery2.default)('.js-product-communication-tile').find('.js-product-communication-tile__button');
    $allItems.each(function () {
      (0, _jquery2.default)(this).toggleClass("u-hidden-small-down");
    });
    $buttonLabelText.each(function () {
      (0, _jquery2.default)(this).toggleClass("u-hidden-small-down");
    });
  }
});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footerShowOptions = __webpack_require__(225);

var _footerShowOptions2 = _interopRequireDefault(_footerShowOptions);

__webpack_require__(223);

__webpack_require__(224);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-footer-show-options';

  var footerElements = document.querySelectorAll(selector);

  for (var i = 0; i < footerElements.length; i += 1) {
    var element = footerElements[i];
    new _footerShowOptions2.default(element);
  }
}

exports.default = { attach: attach };

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var buttonSelector = '.js-author-profile__show-info-button';

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-author-profile';

  var authorProfiles = document.querySelectorAll(selector);

  authorProfiles.forEach(function (authorProfile) {
    (0, _jquery2.default)(buttonSelector, authorProfile).on('click', function (e) {
      (0, _jquery2.default)(authorProfile).toggleClass('c-author-profile--is-opened');
    });
  });
}

exports.default = { attach: attach };

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _mobileDetect = __webpack_require__(115);

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var twoLevelNavigationSelector = '.js-header__navigation';
var mobileOpenBtnSelector = '.js-header__navigation-mobile-open';
var levelOneLinkSelector = '.js-header__navigation-link';
var levelOneItemSelector = '.js-header__navigation-item';
var slideContainerSelector = '.js-header__navigation-level-2-container';
var mainListContainer = '.js-header__navigation-list';
var mobileContainerSelector = mainListContainer;
var openItemClass = 'c-header__navigation-item--open';
var openItemSelector = '.' + 'c-header__navigation-item--open';

var TwoLevelNavigation = function () {
    function TwoLevelNavigation() {
        var _this = this;

        _classCallCheck(this, TwoLevelNavigation);

        this.$navigations = $(twoLevelNavigationSelector);
        this.md = new _mobileDetect2.default(window.navigator.userAgent);

        this.$navigations.each(function (index, element) {
            var toggle = $(element).data('toggle');
            var $navigation = $(element);

            _this.init($navigation, toggle);
        });
    }

    _createClass(TwoLevelNavigation, [{
        key: 'init',
        value: function init($navigation, toggleType) {
            $(document).on('click', this.checkOutsideClick.bind(this, $navigation));

            var $levelOneLink = $(levelOneLinkSelector, $navigation).parent(); // Parent of link is use for mobile view support
            var $mobileOpenBtn = $(mobileOpenBtnSelector, $navigation);

            if (toggleType == 'click') {
                $levelOneLink.on('click', this.haddleLeveOneClick.bind(this));
            } else {
                $levelOneLink.on('click', this.haddleLeveOneClick.bind(this));
                if (!this.isMobile()) {
                    $levelOneLink.on('mouseenter', this.haddleLeveOneHover.bind(this));
                    $navigation.on('mouseleave', this.handdleMouseLeaveNavigator.bind(this));
                }
            }

            $mobileOpenBtn.on('click', this.handdleMobileOpen.bind(this));
        }
    }, {
        key: 'handdleMobileOpen',
        value: function handdleMobileOpen(e) {
            var $target = $(e.target);
            var $navigation = $target.closest(twoLevelNavigationSelector);

            $(mobileContainerSelector, $navigation).slideToggle(500, function () {
                $navigation.toggleClass('c-header__navigation--open');
                $(this).removeAttr("style");
            });
        }
    }, {
        key: 'haddleLeveOneClick',
        value: function haddleLeveOneClick(e) {
            var $target = $(e.target);
            var $navigation = $target.closest(twoLevelNavigationSelector);
            var $openingItem = $(openItemSelector, $navigation);
            var $clickItem = $target.closest(levelOneItemSelector);

            if ($openingItem.is($clickItem)) {
                this.close($openingItem);
            } else {
                this.closeAllOpening($navigation);
                this.open($clickItem);
            }
        }
    }, {
        key: 'haddleLeveOneHover',
        value: function haddleLeveOneHover(e) {
            var $target = $(e.target);

            var $navigation = $target.closest(twoLevelNavigationSelector);
            var $hoverItem = $target.closest(levelOneItemSelector);

            this.closeAllOpening($navigation);
            this.open($hoverItem);
        }
    }, {
        key: 'handdleMouseLeaveNavigator',
        value: function handdleMouseLeaveNavigator(e) {
            var $target = $(e.target);
            var $navigation = $target.closest(twoLevelNavigationSelector);
            this.closeAllOpening($navigation);
        }

        // Helper Medthod

    }, {
        key: 'open',
        value: function open($item) {
            var $container = $(slideContainerSelector, $item);

            $container.slideDown();
            $item.addClass(openItemClass);

            //Accessibillity
            $(levelOneLinkSelector, $item).attr('aria-expanded', 'true');
        }
    }, {
        key: 'close',
        value: function close($item) {
            var $openingCotainer = $(slideContainerSelector, $item);

            $openingCotainer.slideUp();
            $item.removeClass(openItemClass);

            //Accessibillity
            $(levelOneLinkSelector, $item).attr('aria-expanded', 'false');
        }
    }, {
        key: 'closeAllOpening',
        value: function closeAllOpening($navigation) {
            $(slideContainerSelector, $navigation).hide();
            $(openItemSelector, $navigation).removeClass(openItemClass);
            //Accessibillity
            $(levelOneLinkSelector, $navigation).attr('aria-expanded', 'false');
        }
    }, {
        key: 'checkOutsideClick',
        value: function checkOutsideClick($navigation, e) {
            if (this.isClickInside($navigation, e)) {
                $(slideContainerSelector, $navigation).hide();
                $(openItemSelector, $navigation).removeClass(openItemClass);
            }
        }
    }, {
        key: 'isClickInside',
        value: function isClickInside($container, e) {
            return !$container.is(e.target) && $container.has(e.target).length === 0 ? true : false;
        }
    }, {
        key: 'isMobile',
        value: function isMobile() {
            if (this.md.phone() || this.md.tablet()) {
                return true;
            }

            return false;
        }
    }]);

    return TwoLevelNavigation;
}();

function attach() {
    new TwoLevelNavigation();
}

exports.default = { attach: attach };

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _threeLevelNavHandleEvent = __webpack_require__(226);

var _threeLevelNavHandleEvent2 = _interopRequireDefault(_threeLevelNavHandleEvent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-three-level-nav';

  var threeLvlNav = _jquery2.default.find(selector);

  for (var i = 0; i < threeLvlNav.length; i += 1) {
    var element = threeLvlNav[i];
    var threeLevelNavHandleEvent = new _threeLevelNavHandleEvent2.default(element);
  }
}

exports.default = { attach: attach };

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_jquery2.default.fn.acceptCookie = function () {
  var methods = {
    getCookie: function getCookie(cname) {
      var name = cname + '=';
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    },
    setCookie: function setCookie(cname, cvalue) {
      var existingCookie = methods.getCookie(cname);
      var existingCookieArray = existingCookie.split(',');
      if (!existingCookieArray.includes(cvalue)) {
        var expires = new Date();
        expires.setTime(expires.getTime() + 10 * 365 * 24 * 60 * 60 * 1000);
        if (existingCookie.length > 0) {
          document.cookie = cname + '=' + existingCookie + ',' + cvalue + ';expires=' + expires.toUTCString() + ';path=/';
        } else {
          document.cookie = cname + '=' + cvalue + ';expires=' + expires.toUTCString() + ';path=/';
        }
      }
    }
  };
  return this.each(function () {
    (0, _jquery2.default)(this).on('click', function (e) {
      e.preventDefault();
      var element = (0, _jquery2.default)(this);
      var path = element[0].dataset.path;
      var elementContent = element.parents('.c-legal-disclaimer__content');
      if (element.attr('data-path') === undefined) {
        elementContent.hide().next().show();
      } else {
        methods.setCookie('legal-disclaimer', path);
        window.location.reload();
      }
    });
  });
}; /* jshint esversion: 6 */
/* eslint func-names: ["off", "always"] */

(0, _jquery2.default)('.js-cookie').acceptCookie();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _searchHandleEvent = __webpack_require__(227);

var _searchHandleEvent2 = _interopRequireDefault(_searchHandleEvent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-search';

  var search = _jquery2.default.find(selector);

  for (var i = 0; i < search.length; i += 1) {
    var element = search[i];
    var searchHandleEvent = new _searchHandleEvent2.default(element);
  }
}

exports.default = { attach: attach };

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SearchForm = function () {
  function SearchForm($el) {
    _classCallCheck(this, SearchForm);

    this.$searchForm = $el;
    this.$closeBtn = (0, _jquery2.default)(this.$searchForm).find('.js-search-form__close-icon');
    this.$searchInput = (0, _jquery2.default)(this.$searchForm).find('.js-search-form__input');
    this.init();
  }

  _createClass(SearchForm, [{
    key: 'init',
    value: function init() {
      this.$closeBtn.on('click', this.onClickCloseBtn.bind(this));
      this.$searchInput.on('keyup', this.onToggleCloseBtn.bind(this));
    }
  }, {
    key: 'onClickCloseBtn',
    value: function onClickCloseBtn() {
      this.$closeBtn.addClass('u-hidden');
      this.$searchInput.val('');
    }
  }, {
    key: 'onToggleCloseBtn',
    value: function onToggleCloseBtn() {
      if (this.$searchInput.val() === '') {
        this.$closeBtn.addClass('u-hidden');
      } else {
        this.$closeBtn.removeClass('u-hidden');
      }
    }
  }]);

  return SearchForm;
}();

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-search-form';

  (0, _jquery2.default)(selector).each(function (i, e) {
    new SearchForm(e);
  });
}

exports.default = { attach: attach };

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_jquery2.default.fn.showHideToggle = function (options) {
  return this.each(function () {
    var settings = _jquery2.default.extend({
      // These are the defaults.
      target: '.js-show-hide-target',
      showDetailText: '.js-show-detail',
      hideDetailText: '.js-hide-detail'
    }, options);

    var $elem = (0, _jquery2.default)(this);
    var $triggerEl = (0, _jquery2.default)(this).find(settings.showDetailText + ', ' + settings.hideDetailText);
    $triggerEl.click(function () {
      $elem.find(settings.target).slideToggle('400', function () {
        $triggerEl.toggleClass('u-hidden');
      });
    });
  });
};

(0, _jquery2.default)('.js-show-hide').showHideToggle();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _lodash = __webpack_require__(12);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Masonry = function () {
  function Masonry(element) {
    _classCallCheck(this, Masonry);

    this.element = element;
    this.gridItems = $('.js-masonry-item', this.element);
    this.cols = 1;
    this.renderGrid = this.renderGrid.bind(this);

    this.init();
  }

  _createClass(Masonry, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.updateGrid();

      window.addEventListener('resize', (0, _lodash.debounce)(function () {
        _this.updateGrid();
      }, 10), true);
    }
  }, {
    key: 'updateGrid',
    value: function updateGrid() {
      var mediaQuery = $(window).outerWidth();
      this.cols = this.inViewport(mediaQuery);
      this.renderGrid();
    }
  }, {
    key: 'inViewport',
    value: function inViewport(mediaQuery) {
      var cols = 1;

      if (mediaQuery > 992) {
        cols = 3;
      } else if (mediaQuery > 703) {
        cols = 2;
      }

      return cols;
    }
  }, {
    key: 'isMobileView',
    value: function isMobileView() {
      return this.cols === 1;
    }
  }, {
    key: 'renderGrid',
    value: function renderGrid() {
      for (var i = 1; i < this.gridItems.length; i++) {
        var cols = this.cols;
        var newtop = void 0,
            newleft = void 0;

        // for tablet and desktop view
        if (!this.isMobileView()) {

          // if it's not first row
          if (i >= cols) {
            newtop = $(this.gridItems[i - cols]).offset().top + $(this.gridItems[i - cols]).height();
            $(this.gridItems[i]).css('top', newtop + 'px');
          } else {
            // if it's first row
            $(this.gridItems[i]).css('top', '0px');
          }

          // if it's not first column
          if (i % cols > 0) {
            newleft = $(this.gridItems[i - 1]).outerWidth() * (i % cols);
            $(this.gridItems[i]).css('left', newleft + 'px');
          } else {
            // if it's first column
            $(this.gridItems[i]).css('left', '0px');
          }

          $(this.gridItems[i]).css('position', 'absolute');
        } else {
          // for mobile view
          $(this.gridItems[i]).css('position', 'relative');
          $(this.gridItems[i]).css('top', '0px');
          $(this.gridItems[i]).css('left', '0px');
        }
      }
    }
  }]);

  return Masonry;
}();

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-masonry';

  $(window).on('load', function () {
    var gridContainer = document.querySelectorAll(selector);

    (0, _lodash.forEach)(gridContainer, function (element) {
      new Masonry(element);
    });
  });
}

exports.default = { attach: attach };

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _youtubeContainer = __webpack_require__(228);

var _youtubeContainer2 = _interopRequireDefault(_youtubeContainer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-youtube';

  var players = document.querySelectorAll(selector);

  for (var i = 0; i < players.length; i += 1) {
    var element = players[i];
    var youtubeContainer = new _youtubeContainer2.default(element);
  }
}

exports.default = { attach: attach };

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swiper = __webpack_require__(39);

var _swiper2 = _interopRequireDefault(_swiper);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(12);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ProductOverviewCarousel = function ($) {
  $.fn.productOverviewCarousel = function (options) {

    return this.each(function () {
      var elem = $(this);

      var settings = $.extend({
        // spaceBetween: 20,
        slidesOffsetBefore: -1,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        //selectors
        slideClass: 'c-product-overview--carousel__slide',
        slideActiveClass: 'c-product-overview--carousel__slide--active',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          bulletClass: 'c-carousel__bullet',
          bulletActiveClass: 'is-active'
        },
        // it's still need blank object to get 'currentBreakpoint' property in object
        breakpoints: {
          // when window width is <= 767px, 'currentBreakpoint' property form swiper object get the value 767
          703: {}
        },
        wrapperClass: 'c-product-overview--carousel__wrapper',
        on: {
          init: function init() {
            if (this.currentBreakpoint === 'max') {
              this.destroy(false, true);
            } else {
              elem.find('.c-top-product-teaser__pagination').show();

              // Adding Swiper Classes
              elem.addClass('swiper-container').children('.c-product-overview--carousel__wrapper').removeClass('c-product-overview__wrapper').addClass('swiper-wrapper').children('.c-product-overview--carousel__slide').addClass('swiper-slide').removeClass('c-product-overview-tile--recommanded');

              this.update();
            }
          },
          resize: (0, _lodash.debounce)(function () {
            if (this.currentBreakpoint === 'max') {
              this.destroy(false, true);
            }
          }),
          beforeDestroy: function beforeDestroy() {
            elem.find('.c-top-product-teaser__pagination').hide();

            // Removing Swiper Classes
            elem.removeClass('swiper-container').children('.c-product-overview--carousel__wrapper').addClass('c-product-overview__wrapper').removeClass('swiper-wrapper').removeAttr('style').children('.c-product-overview--carousel__slide').removeClass('swiper-slide').removeAttr('style');

            elem.find('.c-product-overview--carousel__slide--recommanded').addClass('c-product-overview-tile--recommanded');
            this.update();
          }
        }
      }, options);

      var swiper = void 0;

      //check onload
      window.addEventListener("load", function (event) {
        if (window.innerWidth < 767) {
          swiper = new _swiper2.default(elem, settings);
        }
      });

      // get the window size when it's resize
      window.addEventListener('resize', function (event) {
        if (window.innerWidth < 767 && swiper.initialized !== true) {
          swiper = new _swiper2.default(elem, settings);
        }
      }, true);
    });
  };

  // Pre-init
  $('.js-product-overview-carousel').productOverviewCarousel();
}(_jquery2.default);

exports.default = ProductOverviewCarousel;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_jquery2.default.fn.stepper = function () {
  return this.each(function () {
    var $container = (0, _jquery2.default)(this);
    var $input = $container.find('.js-stepper-input');
    var $decreaseBtn = $container.find('.js-stepper-ctr-decrease');
    var $increaseBtn = $container.find('.js-stepper-ctr-increase');
    var MAX = +$input.attr('max');
    var MIN = +$input.attr('min');
    var KEY_ENTER = 13;

    function validate(num) {
      return num >= MIN && num <= MAX;
    }

    function formatNumber(num) {
      return num < 10 ? '0' + num : num;
    }

    function updateValue(value) {
      if (validate(value)) {
        var isMax = value === MAX;
        var isMin = value === MIN;

        if (!isMax && !isMin) {
          isMax = false;
          isMin = false;
        }
        if (!$increaseBtn.is(':disabled') || !$decreaseBtn.is(':disabled')) {
          $increaseBtn.attr('disabled', isMax);
          $decreaseBtn.attr('disabled', isMin);
        }
        $input.val(formatNumber(value));
      } else {
        var limitValue = value > MAX ? MAX : MIN;

        updateValue(limitValue);
      }
    }

    function onIncrease() {
      var value = +$input.val() + 1;
      updateValue(value);
    }

    function onDecrease() {
      var value = +$input.val() - 1;
      updateValue(value);
    }

    function onFocusOutInput() {
      updateValue(+$input.val());
    }

    function onKeypressInput(e) {
      if (e.which === KEY_ENTER) {
        updateValue(+$input.val());
      }
    }

    $increaseBtn.on('click', onIncrease);
    $decreaseBtn.on('click', onDecrease);
    $input.on('blur', onFocusOutInput);
    $input.on('keypress', onKeypressInput);

    updateValue(+$input.val());
  });
};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-checkbox--indeterminate';

  var checkboxes = document.querySelectorAll(selector);

  for (var i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].indeterminate = true;
  }
}

exports.default = { attach: attach };

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

//TODO: Add Keybord event
var UPARROWKEY = '38';
var DOWNARROWKEY = '40';
var LEFTARROWKEY = '37';
var RIGHTARROWKEY = '39';

var sliderSelector = ".js-slider";
var sliderHandleSelector = ".js-slider__handle";
var sliderInputSelector = ".js-slider__input";
var sliderTooltipLabelSelector = '.js-slider__tooltip-value';
var sliderFillerSelector = '.js-slider__filler';

var Slider = function () {
    function Slider(slider) {
        _classCallCheck(this, Slider);

        this.mouseDown = false;
        this.slider = $(slider);
        this.sliderHandle = $(sliderHandleSelector, this.slider);
        this.sliderInput = $(sliderInputSelector, this.slider);
        this.sliderTooltipLabel = $(sliderTooltipLabelSelector, this.slider);
        this.sliderFiller = $(sliderFillerSelector, this.slider);
        // Get Value From Form Slider
        this.min = parseInt(this.sliderInput.attr('min'));
        this.max = parseInt(this.sliderInput.attr('max'));
        this.step = parseInt(this.sliderInput.attr('step'));
        this.setMainVal();

        this.init();
    }

    _createClass(Slider, [{
        key: 'setMainVal',
        value: function setMainVal() {
            this.sliderWidth = this.sliderHandle.parent().width();
            this.noOfStep = Math.ceil((this.max - this.min) / this.step);
            this.pxPerStep = this.sliderWidth / this.noOfStep;
            this.rangeArray = this.buildRangeArray();
        }
    }, {
        key: 'init',
        value: function init() {
            this.setInitValue();
            this.sliderHandle.children().on('mousedown', function (e) {
                return e.stopPropagation();
            }); // Prevent Slider Label to get parent event propagation
            this.sliderHandle.on('mousedown', this.handleSliderClick.bind(this));
            $(document).on('keydown', this.handleSliderKeyboard.bind(this));
        }
    }, {
        key: 'handleSliderClick',
        value: function handleSliderClick(e) {
            var _this = this;

            this.setMainVal();
            this.mouseDown = true;
            $(document).on("mousemove", this.handleSliderDrag.bind(this));
            $(document).one("mouseup", function (e) {
                return _this.mouseDown = false;
            });
        }
    }, {
        key: 'handleSliderKeyboard',
        value: function handleSliderKeyboard(e) {
            // Bail if there are no focus on slider
            if (this.sliderHandle.is(":focus")) {
                var currentValue = this.getValue();

                if ((e.keyCode == LEFTARROWKEY || e.keyCode == DOWNARROWKEY) && currentValue > this.min) {
                    this.setValue(currentValue - this.step);
                } else if ((e.keyCode == RIGHTARROWKEY || e.keyCode == UPARROWKEY) && currentValue < this.max) {
                    this.setValue(currentValue + this.step);
                }
            }
        }
    }, {
        key: 'handleSliderDrag',
        value: function handleSliderDrag(e) {
            if (!this.mouseDown) {
                $(document).off('mousemove', document, this.handleSliderDrag.bind(this));
            } else {
                var mouseXPos = e.clientX;
                var handleXPosition = $(sliderHandleSelector, this.slider).offset().left;
                var visualPos = this.getVisualPosInPercent(mouseXPos);
                var newActualValue = (this.max - this.min) * (visualPos / 100) + this.min;
                var closestValue = this.getClosestNumberFromArray(newActualValue, this.rangeArray);
                var posDiff = Math.abs(mouseXPos - handleXPosition) + this.sliderHandle.outerWidth() / 2;

                if (posDiff >= this.pxPerStep) {
                    this.setValue(closestValue);
                }
            }
        }
    }, {
        key: 'getVisualPosInPercent',
        value: function getVisualPosInPercent(mouseXPos) {
            var percentage = (mouseXPos - this.slider.offset().left) * 100 / this.sliderWidth;

            if (percentage < 0) {
                percentage = 0;
            } else if (percentage > 100) {
                percentage = 100;
            }

            return percentage;
        }
    }, {
        key: 'setInitValue',
        value: function setInitValue() {
            //Run Once on Page Load
            var currentValue = this.sliderInput.val();
            this.setValue(currentValue);
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            var percentage = Math.round((value - this.min) * 100 / (this.max - this.min));
            // Set Actual Slider (input)
            this.sliderInput.val(value);
            // Set Visual Slider
            this.sliderHandle.css('left', percentage + '%');
            this.sliderFiller.css('width', percentage + '%');
            this.sliderTooltipLabel.html(value);
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return parseInt(this.sliderInput.val());
        }

        // Helper Method

    }, {
        key: 'getClosestNumberFromArray',
        value: function getClosestNumberFromArray(value, array) {
            return value - array.reduce(function (closest, v) {
                return value >= v ? Math.min(value - v, closest) : closest;
            }, 1e100);
        }
    }, {
        key: 'buildRangeArray',
        value: function buildRangeArray() {
            var rangeArray = [];

            for (var i = this.min; i < this.max + this.step; i = i + this.step) {
                rangeArray.push(i);
            }

            return rangeArray;
        }
    }]);

    return Slider;
}();

function attach() {
    $(sliderSelector).each(function (index, slider) {
        new Slider(slider);
    });
}

exports.default = { attach: attach };

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(12);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Textarea = function () {
  function Textarea(element) {
    _classCallCheck(this, Textarea);

    this.element = element;
    this.height = parseFloat((0, _jquery2.default)(element).css('line-height'));
    this.handleSizes = this.handleSizes.bind(this);
    this.init();
  }

  _createClass(Textarea, [{
    key: 'init',
    value: function init() {
      (0, _jquery2.default)(this.element).on('keyup', this.handleSizes);
      this.handleSizes();
    }
  }, {
    key: 'handleSizes',
    value: function handleSizes() {
      // get new scrollHeight
      (0, _jquery2.default)(this.element).height(this.height);
      var scrollHeight = this.element.scrollHeight;

      // set new height if lines < 5
      if (scrollHeight / this.height < 5) {
        (0, _jquery2.default)(this.element).height(scrollHeight);
      } else {
        (0, _jquery2.default)(this.element).height(this.height * 5);
      }
    }
  }]);

  return Textarea;
}();

// TODO: include pointer-events shim for floating labels (IE 10)

var instances = [];

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-textarea';

  // markup elements available when method is called
  var textareas = document.querySelectorAll(selector);

  (0, _lodash.forEach)(textareas, function (e) {
    var input = new Textarea(e);
    instances.push(input);
  });
}

exports.default = { attach: attach };

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _lodash = __webpack_require__(12);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var filledClass = 'is-filled';

// For Textfields and Textareas, assign status indicating css classes

var TextInput = function () {
  function TextInput(element) {
    _classCallCheck(this, TextInput);

    this.element = element;
    this.input = element.querySelector('.js-floating__input');
    this.prefix = this.input.dataset.prefix || false;
    this.suffix = this.input.dataset.suffix || false;
    this.handleChange = this.handleChange.bind(this);
    this.init();
  }

  _createClass(TextInput, [{
    key: 'init',
    value: function init() {
      if (this.suffix || this.prefix) this.handlePrefixSuffix();
      this.input.addEventListener('input', this.handleChange);
      this.handleChange();
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      var input = this.input;

      if (input.value.length) {
        input.classList.add(filledClass);
      } else {
        input.classList.remove(filledClass);
      }
    }
  }, {
    key: 'handlePrefixSuffix',
    value: function handlePrefixSuffix() {
      var _this = this;

      var inputNode = [];
      var allChildrenNode = [];
      var inputContainer = document.createElement("div");
      var prefixSuffixContainer = document.createElement("div");
      inputContainer.classList.add('c-textfield__input-container');
      prefixSuffixContainer.classList.add('c-textfield__prefix-suffix-container');

      // removeChild and store removed child
      while (this.element.firstChild) {
        var currentChild = this.element.firstChild;
        if (currentChild.classList) {
          //Check if node is actual component not a white space
          var cloneOfChild = currentChild.cloneNode(true);
          var isInput = cloneOfChild.classList.contains('c-textinput__label') || cloneOfChild.classList.contains('c-textinput__field');

          isInput ? inputNode.push(cloneOfChild) : allChildrenNode.push(cloneOfChild);
        }

        this.element.removeChild(currentChild);
      }
      // Add removed child into new container
      inputNode.forEach(function (element) {
        return inputContainer.appendChild(element);
      });
      prefixSuffixContainer.appendChild(inputContainer);

      prefixSuffixContainer = this.prefix ? this.handlePrefix(prefixSuffixContainer) : prefixSuffixContainer;
      prefixSuffixContainer = this.suffix ? this.handleSuffix(prefixSuffixContainer) : prefixSuffixContainer;

      // Add new container back to DOM
      this.element.appendChild(prefixSuffixContainer);
      allChildrenNode.forEach(function (element) {
        return _this.element.appendChild(element);
      });
      this.element.classList.add('c-textfield--prefix-suffix');

      // Re-query node
      this.input = this.element.querySelector('.js-floating__input');
      this.input.addEventListener('focus', this.handleFocus.bind(this));
      this.input.addEventListener('blur', this.handleBlur.bind(this));
    }
  }, {
    key: 'handlePrefix',
    value: function handlePrefix(container) {
      var prefixElement = document.createElement("span");
      prefixElement.classList.add('c-textfield__prefix');
      prefixElement.innerHTML = this.prefix;
      container.prepend(prefixElement);
      return container;
    }
  }, {
    key: 'handleSuffix',
    value: function handleSuffix(container) {
      var suffixElement = document.createElement("span");
      suffixElement.classList.add('c-textfield__suffix');
      suffixElement.innerHTML = this.suffix;
      container.appendChild(suffixElement);
      return container;
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.element.classList.add('is-focus');
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.element.classList.remove('is-focus');
    }
  }]);

  return TextInput;
}();

// TODO: include pointer-events shim for floating labels (IE 10)

var instances = [];

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-floating';

  // markup elements available when method is called
  var textinputs = document.querySelectorAll(selector);

  (0, _lodash.forEach)(textinputs, function (e) {
    var textInput = new TextInput(e);
    instances.push(textInput);
  });
}

exports.default = { attach: attach };

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _breakpoint = __webpack_require__(50);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var BreakpointEmitter = function () {
    function BreakpointEmitter(attachObject, eventName) {
        var breakpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _breakpoint2.default();

        _classCallCheck(this, BreakpointEmitter);

        this.breakpoint = breakpoint;
        this.attachObject = attachObject;
        this.eventName = eventName;

        this.screenWidth = window.innerWidth;
        this.breakpointEventObj = {
            "size": window.innerWidth,
            "type": this.breakpoint.getScreenType(),
            "breakpoint": this.breakpoint
        };
        this.init();
    }

    _createClass(BreakpointEmitter, [{
        key: "init",
        value: function init() {
            var _this = this;

            window.addEventListener('resize', function (e) {
                _this.screenWidth = e.target.innerWidth;
                _this.currentType = _this.breakpoint.getScreenType();

                if (_this.currentType != _this.breakpointEventObj.type) {
                    var breakpointEvent = new CustomEvent(_this.eventName, { "detail": _this.breakpointEventObj });
                    _this.breakpointEventObj.size = _this.screenWidth;
                    _this.breakpointEventObj.type = _this.currentType;
                    _this.attachObject.dispatchEvent(breakpointEvent);
                }
            });
        }
    }]);

    return BreakpointEmitter;
}();

exports.default = BreakpointEmitter;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CloseButton = function () {
  function CloseButton(element) {
    _classCallCheck(this, CloseButton);

    this.element = element;
    this.close = this.close.bind(this);
    this.parent = (0, _jquery2.default)(this.element).closest('.js-close');

    this.init();
  }

  _createClass(CloseButton, [{
    key: 'init',
    value: function init() {
      (0, _jquery2.default)(this.element).on('click', this.close);
    }
  }, {
    key: 'close',
    value: function close() {
      (0, _jquery2.default)(this.parent).hide();
    }
  }]);

  return CloseButton;
}();

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-close-button';

  (0, _jquery2.default)(selector).each(function (i, e) {
    new CloseButton(e);
  });
}

exports.default = { attach: attach };

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_jquery2.default.fn.cutText = function (options) {
  var settings = _jquery2.default.extend({
    start: 0,
    length: 150
  }, options);

  if ((0, _jquery2.default)(this).length > 0) {
    return this.each(function (index, element) {
      var string = (0, _jquery2.default)(element).text();
      var stringTrim = _jquery2.default.trim(string);
      var countTags = 0;
      var returnString = '';
      var writeLetters = 0;
      while (!(writeLetters >= settings.length && countTags === 0)) {
        var letter = stringTrim.charAt(settings.start + writeLetters);
        if (letter === '<') {
          countTags++;
        }
        if (letter === '>') {
          countTags--;
        }
        returnString += letter;
        writeLetters++;
      }
      (0, _jquery2.default)(element).html(returnString + '...');
    });
  }
};

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//  Polyfill for foeEach of nodeList objects

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, argument) {
    argument = argument || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(argument, this[i], i, this);
    }
  };
}

// Polyfill for CustomEvent object
(function () {

  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

// Polyfill for Prepend
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }
    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

// Polyfill for Closet 
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toggleTooltipContainer = __webpack_require__(232);

var _toggleTooltipContainer2 = _interopRequireDefault(_toggleTooltipContainer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function attach() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-toggle-tooltip';

  var tooltipContainer = document.querySelectorAll(selector);

  for (var i = 0; i < tooltipContainer.length; i++) {
    new _toggleTooltipContainer2.default(tooltipContainer[i]);
  }
}

exports.default = { attach: attach };

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  console.info('what-input loaded and attached');
  // whatinput is already attached just by including it and it will reflect the current state on the <html> tag.
  // You can use whatInput.ask() and whatInput.types() to manually check for types.
};

var _whatInput = __webpack_require__(116);

var whatInput = _interopRequireWildcard(_whatInput);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var swiper_1 = __webpack_require__(39);
var $ = __webpack_require__(1);
var lodash_1 = __webpack_require__(12);
$.fn.agentCardTileCarousel = function (options) {
    return this.each(function () {
        var swiper = void 0;
        var elem = $(this);
        var wrapper = elem.find('.swiper-wrapper');
        var pagination = elem.next();
        var settings = $.extend({
            init: true,
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            loopedSlides: 0,
            containerModifierClass: 'swiper-container',
            wrapperClass: 'swiper-wrapper',
            slideClass: 'swiper-slide',
            loopAdditionalSlides: 1,
            slidesPerGroup: 1,
            pagination: {
                el: pagination.find('.swiper-pagination'),
                clickable: true
            },
            navigation: {
                prevEl: pagination.find('.carousel-prev'),
                nextEl: pagination.find('.carousel-next')
            },
            breakpoints: {
                703: {
                    slidesPerView: 1.15,
                    centeredSlides: true,
                    spaceBetween: 10
                },
                991: {
                    slidesPerView: 2.29,
                    centeredSlides: false,
                    spaceBetween: 30
                }
            },
            on: {
                init: function init() {
                    if (this.currentBreakpoint === 'max' && this.slides.length / 3 <= 8) {
                        this.destroy(false, true);
                        pagination.addClass('u-hidden-large-up');
                        wrapper.removeClass('desktop');
                        elem.addClass('js-carousel-agent-card-tile--less-than-nine');
                    } else {
                        pagination.removeClass('u-hidden-large-up');
                        wrapper.addClass('desktop');
                    }
                },
                resize: lodash_1.debounce(function () {
                    if (this.currentBreakpoint === 'max' && this.slides.length / 3 <= 8) {
                        this.destroy(false, true);
                        pagination.addClass('u-hidden-large-up');
                    } else {
                        pagination.removeClass('u-hidden-large-up');
                    }
                }, 40)
            }
        }, options);
        swiper = new swiper_1.default(elem, settings);
        window.addEventListener('resize', lodash_1.debounce(function () {
            if (swiper.initialized === false) {
                swiper = new swiper_1.default(elem, settings);
            }
        }, 50), true);
    });
};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var swiper_1 = __webpack_require__(39);
var $ = __webpack_require__(1);
var lodash_1 = __webpack_require__(12);
$.fn.productTileCarousel = function (options) {
    return this.each(function () {
        var elem = $(this);
        var settings = $.extend({
            spaceBetween: 30,
            a11y: true,
            keyboardControl: true,
            paginationClickable: true,
            centeredSlides: true,
            slidesPerView: 1,
            //selectors
            slideClass: 'c-tile__product-tile--slide',
            wrapperClass: 'c-tile__product-tile--wrapper',
            pagination: {
                el: '.c-tile__product-tile--pagination',
                clickable: true,
                bulletActiveClass: 'is-active',
                bulletClass: 'c-tile__product-tile--bullet'
            },
            breakpoints: {
                703: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 10
                }
            },
            on: {
                init: function init() {
                    if (this.currentBreakpoint === 'max') {
                        this.destroy(false, true);
                    } else {
                        elem.children('.c-tile__product-tile--wrapper').removeClass('l-grid__row').addClass('swiper-wrapper').children('.c-tile__product-tile--slide').addClass('swiper-slide');
                    }
                },
                resize: lodash_1.debounce(function () {
                    if (this.currentBreakpoint === 'max') {
                        this.destroy(false, true);
                    }
                }, 50),
                beforeDestroy: function beforeDestroy() {
                    elem.children('.c-tile__product-tile--wrapper').addClass('l-grid__row').removeClass('swiper-wrapper').children('.c-tile__product-tile--slide').removeClass('swiper-slide');
                    this.update();
                }
            }
        }, options);
        var swiper = new swiper_1.default(elem, settings);
        // get the window size when it's resize
        window.addEventListener('resize', lodash_1.debounce(function () {
            if (window.innerWidth <= 704) {
                if (swiper.initialized === false) {
                    swiper = new swiper_1.default(elem, settings);
                }
            }
        }, 50), true);
    });
};

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(1);
$.fn.removableTag = function () {
    var removeTargetClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    return this.each(function () {
        var handler = null;
        if (removeTargetClass) {
            var $parent = $(removeTargetClass).parent();
            var $clearBtnCloned = $(this).clone().addClass('c-button-cloned');
            $(removeTargetClass).last().clone().appendTo($parent).addClass('u-invisible u-hidden-medium-up').removeClass(removeTargetClass.replace(/\./, ''))
            //Clear all content from clone node
            .empty()
            //Clone item must same measurement as clear filters btn
            .append($clearBtnCloned);
            handler = function handler() {
                //Remove all tag items
                $(this).closest('.c-tag-filter').remove();
            };
        } else {
            handler = function handler() {
                var remainingItem = $(this).siblings().length;
                if (remainingItem == 1) {
                    $(this).closest('.c-tag-filter').remove();
                } else if (remainingItem == 2) {
                    $(this).closest('.c-tag-filter').find('.c-tag-filter__delete').remove();
                }
                // Remove current tag item
                $(this).remove();
            };
        }
        $(this).click(handler);
    });
};
//Init
$('.js-remove-tag').removableTag();
$('.js-remove-all-tags').removableTag('.js-remove-tag');

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(1);
var key_event_code_1 = __webpack_require__(117);
$.fn.dropdown = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var settings = Object.assign({
        // Defaults
        container: '[data-toggle-switcher="dropdown"]', trigger: '[data-trigger-switcher="dropdown"]', item: '[data-items-switcher="dropdown"]', toggleClass: 'is-open', namespace: 'c-dropdown' }, options);
    return this.each(function (index) {
        var $container = $(this);
        var $trigger = $container.children(settings.trigger);
        var $item = $container.children(settings.item);
        var eventName = "click." + settings.namespace + "-" + index + " touch." + settings.namespace + "-" + index;
        var toggleAttrHandler = function toggleAttrHandler(i, attr) {
            return attr === 'true' ? 'false' : 'true';
        };
        var documentHandler = function documentHandler(e) {
            if (!$container.has(e.target).length) {
                $container.removeClass(settings.toggleClass);
                // Remove used handler
                $(this).off(eventName);
            }
        };
        var itemHandler = function itemHandler(e) {
            $container.toggleClass(settings.toggleClass);
            if ($container.hasClass(settings.toggleClass)) {
                $(document).on(eventName, documentHandler);
            }
            $trigger.attr('aria-expanded', toggleAttrHandler);
            $item.attr('aria-hidden', toggleAttrHandler);
            dropdownPointer(e);
        };
        var closeItem = function closeItem(e) {
            $container.removeClass(settings.toggleClass);
            $trigger.attr('aria-expanded', 'false');
            $item.attr('aria-hidden', 'false');
        };
        var dropdownPointer = function dropdownPointer(e) {
            var menuTitle = $container.innerWidth();
            var menuList = $container.children('.c-header-dropdown__menu').innerWidth();
            var pointerValue = (menuList - menuTitle) / 2;
            if ($container.is(':first-child')) {
                $container.children('.c-header-dropdown__menu').css('left', 0);
            } else {
                $container.children('.c-header-dropdown__menu').css('left', -pointerValue);
            }
        };
        $trigger.on('click touch', itemHandler);
        // Accessibility handler
        $trigger.on('keydown', function (e) {
            if (e.which === key_event_code_1.default.SPACE) {
                e.preventDefault();
                itemHandler(e);
            }
        });
        $container.keydown(function (e) {
            // Wait for the new component to be focus first and close if it not inside
            setTimeout(function () {
                if ($container.has(document.activeElement).length === 0) {
                    closeItem(e);
                }
            }, 0);
        });
    });
};
// Initiate
$('[data-toggle-switcher="dropdown"]').dropdown();

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var swiper_1 = __webpack_require__(39);
var $ = __webpack_require__(1);
var lodash_1 = __webpack_require__(12);
var breakpoint_1 = __webpack_require__(50);
var objectFitImages = __webpack_require__(79);
var defaultOptions = {
    direction: 'horizontal',
    loop: true,
    a11y: true,
    keyboardControl: true,
    paginationClickable: true,
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
        703: {
            slidesPerView: 1
        }
    },
    // Accessibility
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide'
};
var instances = [];
function attachSlider(element) {
    var fixedHeightRequired = element.classList.contains('c-carousel--fixed-height');
    var slidesPerView = parseInt(element.dataset.columns) || 1;
    var pagination = $(element);
    var options = Object.assign({}, defaultOptions, {
        //switch internally used class names to match our BEM style
        min: 2, max: 6,
        //selectors
        slideClass: 'c-carousel__slide', wrapperClass: 'c-carousel__wrapper', navigation: {
            prevEl: pagination.find('.c-carousel__prev'),
            nextEl: pagination.find('.c-carousel__next')
        }, pagination: {
            el: pagination.find('.c-carousel__pagination'),
            type: 'bullets',
            clickable: true,
            bulletClass: 'c-carousel__bullet',
            bulletActiveClass: 'is-active'
        }, autoHeight: fixedHeightRequired == false, slidesPerView: slidesPerView });
    var swiper = new swiper_1.default(element, options);
    instances.push(swiper);
}
function attachTeaserSlider(element) {
    var currentBreakpointName = void 0;
    var slidesPerView = parseInt(element.dataset.columns) || 3;
    var swiper = void 0;
    var pagination = $(element).next();
    var options = Object.assign({}, defaultOptions, {
        //switch internally used class names to match our BEM style
        slidesOffsetBefore: 0, slidesOffsetAfter: 0, slidesPerView: slidesPerView, slidesPerGroup: 1, centeredSlides: false, paginationClickable: true, spaceBetween: 32, loop: true, min: 4, max: 6,
        //selectors
        slideClass: 'c-carousel__teaser__slide', wrapperClass: 'c-carousel__teaser-wrapper', navigation: {
            prevEl: pagination.find('.c-carousel__teaser__prev'),
            nextEl: pagination.find('.c-carousel__teaser__next')
        }, pagination: {
            el: pagination.find('.c-carousel__teaser-wrapper__pagination'),
            type: 'bullets',
            clickable: true,
            bulletClass: 'c-carousel__bullet',
            bulletActiveClass: 'is-active'
        }, on: {
            init: function init() {
                currentBreakpointName = this.currentBreakpoint;
            },
            resize: lodash_1.debounce(function () {
                // Check breakpoint changes
                if (currentBreakpointName === this.currentBreakpoint) {
                    return;
                }
                // Destroy carousel
                swiper.destroy();
                // Content fixer
                carouselContentFixer(element, options);
                // Reinitial carousel
                swiper = new swiper_1.default(element, options);
                // Reposition arrows beside tiles
                calculateArrowsPosition($(element));
            }, 250, { 'maxWait': 1000 })
        }, breakpoints: {
            // when window width is <= 703px
            703: {
                spaceBetween: 16,
                slidesPerView: 1.25,
                slidesPerGroup: 1,
                centeredSlides: true
            },
            // when window width is <= 991px
            991: {
                slidesOffsetBefore: -125,
                slidesOffsetAfter: 125,
                slidesPerView: 3,
                slidesPerGroup: 1,
                centeredSlides: true,
                // Whatever number will be fine
                loopAdditionalSlides: 1
            }
        } });
    carouselContentFixer(element, options);
    swiper = new swiper_1.default(element, options);
    instances.push(swiper);
    calculateArrowsPosition($(element));
}
function attachTeaserEventSlider(element) {
    var currentBreakpointName = void 0;
    var slidesPerView = parseInt(element.dataset.columns) || 3;
    var swiper = void 0;
    var pagination = $(element).next();
    var options = Object.assign({}, defaultOptions, {
        //switch internally used class names to match our BEM style
        slidesOffsetBefore: 0, slidesOffsetAfter: 0, slidesPerView: slidesPerView, slidesPerGroup: 1, centeredSlides: false, paginationClickable: true, spaceBetween: 32, loop: true, min: 4, max: 6,
        //selectors
        slideClass: 'c-carousel__teaser-event__slide', wrapperClass: 'c-carousel__teaser-event-wrapper', navigation: {
            prevEl: pagination.find('.carousel-prev'),
            nextEl: pagination.find('.carousel-next')
        }, pagination: {
            el: pagination.find('.swiper-pagination'),
            type: 'bullets',
            clickable: true,
            bulletClass: 'c-carousel__bullet',
            bulletActiveClass: 'is-active'
        }, on: {
            init: function init() {
                currentBreakpointName = this.currentBreakpoint;
            },
            resize: lodash_1.debounce(function () {
                // Check breakpoint changes
                if (currentBreakpointName === this.currentBreakpoint) {
                    return;
                }
                // Destroy carousel
                swiper.destroy();
                // Content fixer
                carouselContentFixer(element, options);
                // Reinitial carousel
                swiper = new swiper_1.default(element, options);
                // Reposition arrows beside tiles
                calculateArrowsPosition($(element));
            }, 250, { 'maxWait': 1000 })
        }, breakpoints: {
            // when window width is <= 703px
            703: {
                spaceBetween: 16,
                slidesPerView: 1,
                slidesPerGroup: 1,
                centeredSlides: true
            },
            // when window width is <= 991px
            991: {
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                slidesPerView: 2.25,
                slidesPerGroup: 1,
                centeredSlides: false,
                // Whatever number will be fine
                loopAdditionalSlides: 1
            }
        } });
    carouselContentFixer(element, options);
    swiper = new swiper_1.default(element, options);
    instances.push(swiper);
    calculateArrowsPosition($(element));
}
function attachTwoColumnSlider(element) {
    var currentBreakpointName = void 0;
    var slidesPerView = parseInt(element.dataset.columns) || 2;
    var swiper = void 0;
    var pagination = $(element).next();
    var twoColumnParams = {
        slidesPerView: slidesPerView,
        slidesPerGroup: 1,
        initialSlide: 0,
        centeredSlides: false,
        paginationClickable: true,
        spaceBetween: 32,
        loop: false,
        loopAdditionalSlides: 1,
        min: 3,
        max: 6,
        //selectors
        slideClass: 'c-carousel__two-column__slide',
        wrapperClass: 'swiper-wrapper',
        navigation: {
            prevEl: pagination.find('.c-carousel__two-column__prev'),
            nextEl: pagination.find('.c-carousel__two-column__next')
        },
        pagination: {
            el: pagination.find('.c-carousel__two-column__pagination'),
            type: 'bullets',
            clickable: true,
            bulletClass: 'c-carousel__bullet',
            bulletActiveClass: 'is-active'
        },
        on: {
            init: function init() {
                currentBreakpointName = this.currentBreakpoint;
            },
            resize: lodash_1.debounce(function () {
                // Check breakpoint changes
                if (currentBreakpointName === this.currentBreakpoint) {
                    return;
                }
                // Destroy carousel
                swiper.destroy();
                // Content fixer
                carouselContentFixer(element, twoColumnParams);
                // Reinitial carousel
                swiper = new swiper_1.default(element, twoColumnParams);
            }, 250, { 'maxWait': 1000 })
        },
        breakpoints: {
            // when window width is <= 703px
            703: {
                spaceBetween: 16,
                slidesPerView: 1.25,
                slidesPerGroup: 1,
                centeredSlides: true
            },
            // when window width is <= 991px
            991: {
                slidesPerView: 1.5,
                slidesPerGroup: 1,
                centeredSlides: true
            },
            'max': {
                loop: true
            }
        }
    };
    carouselContentFixer(element, twoColumnParams);
    swiper = new swiper_1.default(element, twoColumnParams);
    var carouselLoopable = lodash_1.debounce(function () {
        swiper.on('slideNextTransitionEnd', function () {
            if (currentBreakpointName !== 'max') {
                twoColumnParams.loop = true;
                twoColumnParams.initialSlide = 1;
                swiper.destroy();
                swiper = new swiper_1.default(element, twoColumnParams);
            }
        });
    }, 500);
    carouselLoopable();
    $(window).on('resize', carouselLoopable);
    instances.push(swiper);
}
function attachThreeColumnSlider(element) {
    var currentBreakpointName = void 0;
    var slidesPerView = parseInt(element.dataset.columns) || 3;
    var swiper = void 0;
    var breakpoint = new breakpoint_1.default();
    var pagination = $(element).next();
    var desktopNoneSwiper = 3;
    // Check for number of items inside carousel
    var noOfSwiperItems = $(element).find('.c-carousel__three-column-wrapper').children().length;
    var $container = $(element).closest('.c-carousel__three-column-container');
    var threeColumnParams = {
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        slidesPerView: slidesPerView,
        slidesPerGroup: 1,
        centeredSlides: false,
        paginationClickable: true,
        spaceBetween: 32,
        loop: true,
        loopAdditionalSlides: 2,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        touchReleaseOnEdges: true,
        min: 4,
        max: 6,
        lazy: {
            preloaderClass: 'c-teaser__image--preloader'
        },
        //selectors
        slideClass: 'c-carousel__three-column__slide',
        wrapperClass: 'c-carousel__three-column-wrapper',
        navigation: {
            prevEl: pagination.find('.c-carousel__three-column__prev'),
            nextEl: pagination.find('.c-carousel__three-column__next')
        },
        pagination: {
            el: pagination.find('.c-carousel__three-column-wrapper__pagination'),
            type: 'bullets',
            clickable: true,
            bulletClass: 'c-carousel__bullet',
            bulletActiveClass: 'is-active'
        },
        on: {
            init: function init() {
                currentBreakpointName = this.currentBreakpoint;
                $container.removeClass('c-carousel__three-column-container--no-swiper');
                if (this.currentBreakpoint === 'max' && this.slides.length / 3 <= desktopNoneSwiper) {
                    this.destroy(false, true);
                    $container.addClass('c-carousel__three-column-container--no-swiper');
                }
            },
            slideChange: function slideChange() {
                this.lazy.load();
                if (this.activeIndex == 0 && noOfSwiperItems > desktopNoneSwiper && breakpoint.isTablet()) {
                    this.slideNext(0);
                    this.slidePrev(0);
                }
            },
            lazyImageReady: function lazyImageReady(slide, image) {
                $(element).removeClass('c-carousel-column__slide--dummy');
                // Work around for lazyload and object-fit-image-polyfil
                objectFitImages(image);
            },
            resize: lodash_1.debounce(function () {
                // Check breakpoint changes
                if (currentBreakpointName === this.currentBreakpoint) {
                    return;
                }
                // Destroy carousel
                swiper.destroy();
                // Content fixer
                carouselContentFixer(element, threeColumnParams);
                // Reinitial carousel
                swiper = new swiper_1.default(element, threeColumnParams);
                // Reposition arrows beside tiles
                calculateArrowsPosition($(element));
            }, 250, { 'maxWait': 1000 })
        },
        breakpoints: {
            // when window width is <= 703px
            703: {
                spaceBetween: 16,
                slidesPerView: 1.25,
                slidesPerGroup: 1,
                centeredSlides: true
            },
            // when window width is <= 991px
            991: {
                slidesOffsetBefore: 125,
                slidesOffsetAfter: -125,
                spaceBetween: 32,
                slidesPerView: 3,
                slidesPerGroup: 1,
                centeredSlides: false,
                loopSlides: 1,
                loopAdditionalSlides: 3,
                // Whatever number will be fine
                centerInsufficientSlides: true
            }
        }
    };
    // Remove lazy load functionality if having three item and initialize on desktop
    if (noOfSwiperItems <= desktopNoneSwiper && breakpoint.isDesktop()) {
        removeLazyLoadingImage(element);
    }
    // Modified swiper property incase of three item
    if (noOfSwiperItems <= desktopNoneSwiper) {
        threeColumnParams.loop = false;
        threeColumnParams.breakpoints[991] = {
            slidesOffsetBefore: 125,
            slidesOffsetAfter: 125,
            slidesPerView: 2.6,
            slidesPerGroup: 2,
            centeredSlides: false,
            // Whatever number will be fine
            loopAdditionalSlides: 1,
            centerInsufficientSlides: true
        };
    }
    // Initialization of swiper
    carouselContentFixer(element, threeColumnParams);
    swiper = new swiper_1.default(element, threeColumnParams);
    instances.push(swiper);
    calculateArrowsPosition($(element));
    // Reinitialize incase swiper has been destroy when breakpoint change
    window.addEventListener('breakpoint', lodash_1.debounce(function () {
        if (swiper.initialized === false) {
            swiper = new swiper_1.default(element, threeColumnParams);
        }
    }, 50), true);
}
// Remove lazy loading functionality provide by swiper
function removeLazyLoadingImage(element) {
    // Remove Lazy load
    $(element).removeClass('c-carousel-column__slide--dummy');
    // Remove Lazy load for all image
    $(element).find('.c-image__img').each(function () {
        var dataSrc = $(this).attr('data-src');
        var dataSrcset = $(this).attr('data-srcset');
        $(this).removeAttr('data-src');
        $(this).removeAttr('data-srcset');
        $(this).attr('src', dataSrc);
        $(this).attr('srcset', dataSrcset);
    });
    // Remove Place Holder Image
    $(element).find('.c-teaser__image--preloader').remove();
}
// This method is workaround for the issues https://github.com/nolimits4web/Swiper/issues/1925
function carouselContentFixer(scope, params) {
    var $scope = $(scope);
    var dummyClass = 'c-carousel-column__slide--dummy';
    // Clean old dummy class
    $scope.find("." + dummyClass).remove();
    var currentBreakpoint = +window.innerWidth;
    // Find matched breakpoint in carousel config
    var currentBreakpointData = lodash_1.find(params.breakpoints, function (item, breakpoint) {
        return currentBreakpoint <= breakpoint;
    });
    params.perPage = !currentBreakpointData ? params.slidesPerGroup : currentBreakpointData.slidesPerGroup;
    // Skip it when slidesPerGroup = 1
    if (params.perPage <= 1) {
        return;
    }
    // Calculate how many blank items should have in carousel
    var $items = $scope.find("." + params.slideClass);
    var isValidItemCount = $items.length >= params.min && $items.length <= params.max;
    if (isValidItemCount) {
        var dummyTotal = params.max % $items.length;
        var isNeedFix = dummyTotal !== params.perPage && dummyTotal > 0;
        if (isNeedFix) {
            for (var i = 0; i < dummyTotal; i++) {
                var $cloned = $items.eq(0).clone().addClass(dummyClass);
                $items.parent().append($cloned);
            }
        }
    }
}
// This method is used for positioning arrows correctly aside carousel, instead of using absolute percent of 500%.
// We calculate swiper height,
// NOTE: The precondition is to have swiper element sibling before pagination
function calculateArrowsPosition(element) {
    // arrows
    var arrowPrev = element.next().find('.c-carousel__three-column__prev');
    var arrowNext = element.next().find('.c-carousel__three-column__next');
    var arrowPrevTeaser = element.next().find('.c-carousel__teaser__prev');
    var arrowNextTeaser = element.next().find('.c-carousel__teaser__next');
    // pagination
    var wrapperHeight = element.outerHeight();
    // 57px is height of arrow div element, so the half height is 28.5px
    arrowPrev.css('top', wrapperHeight / 2 * -1 - 28.5 + 'px');
    arrowNext.css('top', wrapperHeight / 2 * -1 - 28.5 + 'px');
    arrowPrevTeaser.css('top', wrapperHeight / 2 * -1 - 28.5 + 'px');
    arrowNextTeaser.css('top', wrapperHeight / 2 * -1 - 28.5 + 'px');
}
function attach() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-carousel';

    document.querySelectorAll(selector).forEach(function (item) {
        return attachSlider(item);
    });
}
exports.attach = attach;
function attachTeaser() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-carousel-teaser';

    document.querySelectorAll(selector).forEach(function (item) {
        return attachTeaserSlider(item);
    });
}
exports.attachTeaser = attachTeaser;
function attachTeaserEvent() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-carousel-teaser-event';

    document.querySelectorAll(selector).forEach(function (item) {
        return attachTeaserEventSlider(item);
    });
}
exports.attachTeaserEvent = attachTeaserEvent;
function attachTwoColumn() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-carousel-two-column';

    document.querySelectorAll(selector).forEach(function (item) {
        return attachTwoColumnSlider(item);
    });
}
exports.attachTwoColumn = attachTwoColumn;
function attachThreeColumn() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-carousel-three-column';

    document.querySelectorAll(selector).forEach(function (item) {
        return attachThreeColumnSlider(item);
    });
}
exports.attachThreeColumn = attachThreeColumn;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(1);
var smooth_scrollbar_1 = __webpack_require__(78);
var lodash_1 = __webpack_require__(12);

var SearchFilterDropdown = function () {
    function SearchFilterDropdown($container) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        _classCallCheck(this, SearchFilterDropdown);

        this.items = [];
        this.$itemTemplate = $('<a class="c-filter-dropdown__item" role="menuitem"></a>');
        this.$scrollContainer = $container.find('[data-items="dropdown"]');
        this._extractor($container.find('.c-filter-dropdown__item'));
    }

    _createClass(SearchFilterDropdown, [{
        key: "_extractor",
        value: function _extractor($items) {
            var _this = this;

            $items.each(function (index, item) {
                _this.items.push({
                    label: $(item).html(),
                    href: $(item).attr('href')
                });
            });
        }
    }, {
        key: "_getContentHeight",
        value: function _getContentHeight() {
            var visibleItems = this.$scrollContainer.find('.c-filter-dropdown__item').slice(0, 5);
            var totalHeight = lodash_1.reduce(visibleItems, function (sum, item) {
                return sum + $(item).outerHeight(true);
            }, 0);
            return totalHeight;
        }
    }, {
        key: "_updateItems",
        value: function _updateItems() {
            var _this2 = this;

            var $items = this.items.map(function (_ref) {
                var label = _ref.label,
                    href = _ref.href;
                return _this2.$itemTemplate.clone().attr('href', href).html(label);
            });
            this.$scrollContainer.find('.scroll-content').empty().append($items);
            this._updateHeight();
        }
    }, {
        key: "_updateHeight",
        value: function _updateHeight() {
            var height = void 0;
            if (this.items.length > 5) {
                height = this._getContentHeight() + 20;
            }
            this.$scrollContainer.css('height', height || 'auto');
        }
    }, {
        key: "initScrollbar",
        value: function initScrollbar() {
            var _this3 = this;

            smooth_scrollbar_1.default.init(this.$scrollContainer.get(0), {
                alwaysShowTracks: true,
                plugins: {
                    onUpdatePlugin: {
                        onInit: function onInit() {
                            return _this3._updateHeight();
                        },
                        onUpdate: function onUpdate() {
                            return _this3._updateHeight();
                        }
                    }
                }
            });
        }
    }, {
        key: "removeItem",
        value: function removeItem(index) {
            if (this.items[index]) {
                this.items.splice(index, 1);
                this._updateItems();
            }
        }
    }, {
        key: "addItem",
        value: function addItem(label) {
            var href = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';

            this.items.push({ label: label, href: href });
            this._updateItems();
        }
    }]);

    return SearchFilterDropdown;
}();

$.fn.searchFilter = function (options) {
    var pluginName = 'pluginSearchFilter';
    var pluginArguments = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
        if (typeof options === 'string') {
            var plugin = $.data(this, pluginName);
            plugin[options].apply(plugin, pluginArguments);
        } else if (!$.data(this, pluginName)) {
            var searchFilterDropdown = new SearchFilterDropdown($(this), options);
            searchFilterDropdown.initScrollbar();
            $.data(this, pluginName, searchFilterDropdown);
        }
    });
};
// Initiate
$('.js-search-filter-dropdown').searchFilter();
// Example Add item
$('.js-search-filter-dropdown').searchFilter('addItem', 'Help & Care (99)', '#');
$('.js-search-filter-dropdown').searchFilter('addItem', 'Help & Care (99)', '#');
// Example Remove item by index
$('.js-search-filter-dropdown').searchFilter('removeItem', 2);

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var swiper_1 = __webpack_require__(39);
var $ = __webpack_require__(1);
var lodash_1 = __webpack_require__(12);
$.fn.topProductTeaserCarousel = function (options) {
    return this.each(function () {
        var elem = $(this);
        var settings = $.extend({
            slidesOffsetBefore: -8,
            spaceBetween: 0,
            slidesPerView: 1.15,
            slidesPerGroup: 1,
            centeredSlides: false,
            paginationClickable: true,
            loop: true,
            min: 2,
            //selectors
            slideClass: 'c-top-product-teaser-carousel__slide',
            slideActiveClass: 'c-top-product-teaser-carousel__slide--active',
            pagination: {
                el: '.c-top-product-teaser-carousel__pagination',
                type: 'bullets',
                clickable: true,
                bulletClass: 'c-carousel__bullet',
                bulletActiveClass: 'is-active'
            },
            // it's still need blank object to get 'currentBreakpoint' property in object
            breakpoints: {
                // when window width is <= 703px, 'currentBreakpoint' property form swiper object get the value 703
                703: {}
            },
            wrapperClass: 'c-top-product-teaser-carousel__wrapper',
            on: {
                init: function init() {
                    if (this.currentBreakpoint === 'max') {
                        this.destroy(false, true);
                    } else {
                        elem.find('.c-top-product-teaser-carousel__pagination').show();
                        // Adding Swiper Classes
                        elem.addClass('swiper-container').removeClass('l-grid').children('.c-top-product-teaser-carousel__wrapper').removeClass('l-grid__row').addClass('swiper-wrapper').children('.c-top-product-teaser-carousel__slide').addClass('swiper-slide');
                        this.update();
                    }
                },
                resize: lodash_1.debounce(function () {
                    if (this.currentBreakpoint === 'max') {
                        this.destroy(false, true);
                    }
                }),
                beforeDestroy: function beforeDestroy() {
                    elem.find('.c-top-product-teaser-carousel__pagination').hide();
                    // Removing Swiper Classes
                    elem.removeClass('swiper-container').addClass('l-grid').removeAttr('style').children('.c-top-product-teaser-carousel__wrapper').removeClass('swiper-wrapper').addClass('l-grid__row').removeAttr('style').children('.c-top-product-teaser-carousel__slide').removeClass('swiper-slide').removeAttr('style');
                    this.update();
                }
            }
        }, options);
        var swiper = void 0;
        //check onload
        window.addEventListener("load", function (event) {
            if (window.innerWidth <= 703) {
                swiper = new swiper_1.default(elem, settings);
            }
        });
        // get the window size when it's resize
        window.addEventListener('resize', lodash_1.debounce(function () {
            if (window.innerWidth <= 703) {
                swiper = new swiper_1.default(elem, settings);
            }
        }, 50), true);
    });
};

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var swiper_1 = __webpack_require__(39);
var $ = __webpack_require__(1);
var lodash_1 = __webpack_require__(12);
var defaultOptions = {
    loop: true,
    a11y: true,
    keyboardControl: true,
    paginationClickable: true,
    // Accessibility
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    slideClass: 'c-carousel__slide',
    wrapperClass: 'c-carousel__wrapper',
    bulletClass: 'c-carousel__bullet',
    threshold: 50,
    pagination: {
        bulletClass: 'c-icon-navigation__link--stage',
        clickable: true,
        type: 'bullets',
        bulletActiveClass: 'is-active',
        renderCustom: function renderCustom(swiper, current, total) {
            var $navigationData = swiper.$el.find('.js-data-stage--with-navigation');
            var text = [];
            for (var i = 0; i < total; i++) {
                var activeClass = i === swiper.realIndex ? 'is-active' : '';
                var scope = $navigationData.eq(i + 1);
                text.push("\n          <span class='c-icon-navigation__link--stage " + activeClass + "'>\n            <i class='c-icon-navigation__icon " + scope.data('icon') + "'></i>\n            <span class='c-icon-navigation__label'>" + scope.data('label') + "</span>\n          </span>");
            }
            return text.join('');
        }
    }
};
var instances = [];
function attachNavigationSlider(element) {
    var swiper = void 0;
    function initiate() {
        var isMobile = window.innerWidth <= 703;
        var config = defaultOptions;
        if (isMobile) {
            if ($(element).find('.c-stage__navigation--rectangle').length) {
                config = mobileRectangleConfig;
            } else {
                config = mobileCircleConfig;
            }
        } else {
            if ($(element).find('.c-stage__navigation--rectangle').length) {
                config = rectangleConfig;
            } else {
                config = circleConfig;
            }
        }
        swiper = new swiper_1.default(element, config);
    }
    function getCarouselConfig(el, bulletClass) {
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bullets';

        var config = Object.assign({}, defaultOptions, { on: {
                resize: debounced,
                init: function init() {
                    if (window.innerWidth > 991) {
                        this.$el.css('height', '510px');
                    } else if (window.innerWidth >= 704 && window.innerWidth <= 991) {
                        var isExtraHeadline = lodash_1.find(this.$el.find('.js-extra-height-headline'), function (item) {
                            return $(item).height() > 118;
                        });
                        var isExtraList = lodash_1.find(this.$el.find('.js-extra-height-list'), function (item) {
                            return $(item).height() > 52;
                        });
                        if (isExtraHeadline || isExtraList) {
                            this.$el.css('height', '595px');
                        } else {
                            this.$el.css('height', '510px');
                        }
                    }
                }
            } });
        config.pagination = Object.assign({}, config.pagination, { el: el,
            type: type,
            bulletClass: bulletClass });
        return config;
    }
    var debounced = lodash_1.debounce(function () {
        swiper.destroy();
        initiate();
    }, 250, { 'maxWait': 1000 });
    var mobileRectangleConfig = getCarouselConfig('.c-stage__navigation--rectangle', 'c-carousel__bullet--negative');
    var mobileCircleConfig = getCarouselConfig('.c-stage__navigation--circle', 'c-carousel__bullet--negative');
    var rectangleConfig = getCarouselConfig('.c-stage__navigation--rectangle', 'c-icon-navigation__link--stage', 'custom');
    var circleConfig = getCarouselConfig('.c-stage__navigation--circle', 'c-icon-navigation__link--stage', 'custom');
    initiate();
    instances.push(swiper);
}
function attachFullWidthSlider(element) {
    var currentBreakpointName = void 0;
    var swiper = void 0;
    var delay = element.dataset.swiperAutoplay;
    function initiate() {
        var config = Object.assign({}, options);
        if (delay) {
            config['autoplay'] = {
                delay: delay,
                disableOnInteraction: false
            };
            element.addEventListener('mouseenter', function () {
                return swiper.autoplay.stop();
            });
            element.addEventListener('mouseleave', function () {
                return swiper.autoplay.start();
            });
        }
        swiper = new swiper_1.default(element, config);
    }
    var debounced = lodash_1.debounce(function () {
        // Check breakpoint changes
        if (currentBreakpointName === this.currentBreakpoint) {
            return;
        }
        // Destroy carousel
        swiper.destroy();
        // Reinitial carousel
        initiate();
    }, 250, { 'maxWait': 1000 });
    var options = {
        paginationClickable: true,
        loop: true,
        min: 2,
        max: 6,
        //selectors
        slideClass: 'c-carousel__slide',
        wrapperClass: 'c-carousel__wrapper',
        navigation: {
            nextEl: '.c-carousel__next',
            prevEl: '.c-carousel__prev'
        },
        pagination: {
            el: '.c-carousel__pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'c-carousel__bullet--negative',
            bulletActiveClass: 'is-active'
        }
    };
    initiate();
    instances.push(swiper);
}
function attachNavigation() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-stage-with-navigation-carousel';

    document.querySelectorAll(selector).forEach(function (item) {
        return attachNavigationSlider(item);
    });
}
function attachFullWidth() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-stage-carousel';

    document.querySelectorAll(selector).forEach(function (item) {
        return attachFullWidthSlider(item);
    });
}
exports.default = { attachNavigation: attachNavigation, attachFullWidth: attachFullWidth };

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(12);
var $ = __webpack_require__(1);
var smooth_scrollbar_1 = __webpack_require__(78);
var breakpoint_1 = __webpack_require__(50);
var breakpoint = new breakpoint_1.default();

var OnUpdatePlugin = function (_smooth_scrollbar_1$S) {
    _inherits(OnUpdatePlugin, _smooth_scrollbar_1$S);

    function OnUpdatePlugin() {
        _classCallCheck(this, OnUpdatePlugin);

        return _possibleConstructorReturn(this, (OnUpdatePlugin.__proto__ || Object.getPrototypeOf(OnUpdatePlugin)).apply(this, arguments));
    }

    _createClass(OnUpdatePlugin, [{
        key: "onInit",
        value: function onInit() {
            if (typeof this.options.onInit !== 'function') return;
            this.options.onInit();
        }
    }, {
        key: "onUpdate",
        value: function onUpdate() {
            if (typeof this.options.onUpdate !== 'function') return;
            this.options.onUpdate();
            if (typeof this.options.onScreenChange !== 'function') return;
            var callback = this.options.onScreenChange;
            if (!breakpoint.isMobile()) {
                this.scrollbar.scrollTo(0, 0, 0, { callback: callback });
            }
        }
    }]);

    return OnUpdatePlugin;
}(smooth_scrollbar_1.ScrollbarPlugin);

OnUpdatePlugin.pluginName = 'onUpdatePlugin';
smooth_scrollbar_1.default.use(OnUpdatePlugin);

var ComparisonTable = function () {
    function ComparisonTable(el) {
        _classCallCheck(this, ComparisonTable);

        this.$container = $(el);
        this.$table = this.$container.find('.js-comparison-table');
        this.bufferArea = 30;
        this.maxImageHeight = 0;
        this.$stickyHeader = null;
        this.$header = null;
    }

    _createClass(ComparisonTable, [{
        key: "init",
        value: function init() {
            this.initStickyHeader();
            this.initCollapsibleSection();
            this.initTopScrollBar();
            this.initTooltip();
        }
    }, {
        key: "initTooltip",
        value: function initTooltip() {
            var _this2 = this;

            var $tooltips = this.$table.find('.c-tooltip');
            var $tooltipsItem = $('.c-tooltip__item', $tooltips);
            var tableWidth = this.$table.width();
            var $stickyCol = $tooltips.closest('.js-sticky-column');
            if (breakpoint.isDesktop()) {
                $stickyCol.css('padding-right', '25px');
                $tooltipsItem.outerWidth(tableWidth - 40);
            } else {
                $stickyCol.css('padding-right', '45px');
                $tooltipsItem.width('auto');
            }
            $tooltips.each(function (index, element) {
                _this2.addTooltipParentIndex(element);
            });
        }
    }, {
        key: "initStickyHeader",
        value: function initStickyHeader() {
            var _this3 = this;

            this.$header = this.$table.find('.js-sticky-header');
            var $tableBody = this.$header.closest('.c-comparison-columns__body');
            if (!this.$header.length) return;
            this.$stickyHeader = this.$header.clone();
            this.$stickyHeaderRow = this.$stickyHeader.find('.js-sticky-header-row');
            var bgColor = $tableBody.css('backgroundColor');
            this.$stickyHeaderRow.css('backgroundColor', bgColor);
            this.$stickyHeader.addClass('c-comparison-table__section--header-sticky');
            this.$stickyHeader.find('picture').remove();
            $tableBody.find('.js-sticky-placeholder').append(this.$stickyHeader);
            var images = this.$table.find('.js-sticky-header-img');
            if (images.length) {
                var imagesHeight = lodash_1.map(images, function (image) {
                    return image.clientHeight;
                });
                this.maxImageHeight = Math.max.apply(Math, _toConsumableArray(imagesHeight));
            }
            this.pageHeaderCompactHeight = 0;
            $(window).on({
                scroll: lodash_1.debounce(function () {
                    var _$table$0$getBounding = _this3.$table[0].getBoundingClientRect(),
                        bottom = _$table$0$getBounding.bottom,
                        top = _$table$0$getBounding.top;

                    var pageHeaderCompactSelection = $('.c-navigation--compact');
                    if (pageHeaderCompactSelection.length > 0) {
                        var pageHeaderCompact = pageHeaderCompactSelection.get(0);
                        _this3.pageHeaderCompactHeight = pageHeaderCompact.clientHeight;
                    }
                    var isAtBottom = bottom + _this3.bufferArea > _this3.$header.height() + _this3.pageHeaderCompactHeight;
                    var toggleState = top + _this3.maxImageHeight - _this3.pageHeaderCompactHeight < 0 && isAtBottom;
                    _this3.$stickyHeader.css('padding-top', _this3.pageHeaderCompactHeight);
                    _this3.$stickyHeader.toggleClass('is-active', toggleState);
                }, 20),
                resize: lodash_1.debounce(function () {
                    _this3.initTooltip();
                }, 20)
            });
        }
    }, {
        key: "initCollapsibleSection",
        value: function initCollapsibleSection() {
            var $sections = this.$table.find('.js-collapsible');
            $sections.each(function () {
                var _this4 = this;

                var $header = $(this).find('.js-collapsible-header');
                var $body = $(this).find('.js-collapsible-body');
                if (!$header || !$body) return;
                $header.on('click', function () {
                    return $(_this4).toggleClass('is-collapse');
                });
            });
        }
    }, {
        key: "initTopScrollBar",
        value: function initTopScrollBar() {
            var _this5 = this;

            var $scrollEl = this.$container.find('.js-table-scrollable-x');
            var $stickyHeader = this.$stickyHeader;
            var $stickyHeaderContent = this.$stickyHeaderRow;
            var alignRightClass = 'c-comparison-table--align-right';
            var $stickyCols = this.$table.find('.js-sticky-column');
            var _transformContent = function _transformContent(scrollbar) {
                var actualLimit = _this5.$table.width() - scrollbar.size.container.width;
                var offsetWidth = scrollbar.offset.x > actualLimit ? actualLimit : scrollbar.offset.x;
                $stickyHeaderContent.css('transform', "translate3d(-" + offsetWidth + "px, 0px, 0px)");
                if (breakpoint.isMobile()) {
                    $stickyCols.css('transform', "translate3d(" + offsetWidth + "px, 0px, 0px)");
                }
            };
            var scrollbar = smooth_scrollbar_1.default.init($scrollEl[0], {
                alwaysShowTracks: true,
                plugins: {
                    onUpdatePlugin: {
                        onScreenChange: function onScreenChange() {
                            $stickyHeaderContent.css('transform', 'none');
                            $stickyCols.css('transform', 'none');
                            _transformContent(scrollbar);
                        },
                        onUpdate: function onUpdate() {
                            $stickyHeader.width($scrollEl.width());
                        }
                    }
                }
            });
            scrollbar.addListener(function (_ref) {
                var offset = _ref.offset,
                    limit = _ref.limit;

                var shouldAlignRight = window.innerWidth <= 703 && offset.x >= Math.ceil(limit.x / 2);
                $stickyHeader.toggleClass(alignRightClass, shouldAlignRight);
                $scrollEl.toggleClass(alignRightClass, shouldAlignRight);
                _transformContent(scrollbar);
            });
        }
        /**
         * This is fix for transform of sticky col interfere with z-index property
         * causing tooltip to display in-correctly
         * this function will set z-index on js-sticky-column to be higher if its contain opened tooltip
         */

    }, {
        key: "addTooltipParentIndex",
        value: function addTooltipParentIndex(tooltip) {
            var _this6 = this;

            var tooltipLink = tooltip.querySelector('.js-toggle-tooltip__link');
            document.addEventListener('click', function (e) {
                var isTooltipEl = e.target === tooltipLink;
                if (!isTooltipEl) {
                    isTooltipEl = $(e.target).closest('.js-toggle-tooltip__link')[0] === tooltipLink;
                }
                if (isTooltipEl) {
                    var $stickyCol = $(tooltip).closest('.js-sticky-column');
                    var isOpen = tooltip.classList.contains('is-open');
                    var $stickyCols = _this6.$table.find('.js-sticky-column');
                    $stickyCols.removeClass('c-comparison-table__sticky-column--has-open-tooltip');
                    if (isOpen) {
                        $stickyCol.addClass('c-comparison-table__sticky-column--has-open-tooltip');
                    }
                }
            }, true);
        }
    }]);

    return ComparisonTable;
}();

function attach() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-comparison';

    var els = document.querySelectorAll(selector);
    els.forEach(function (el) {
        var comparisonTable = new ComparisonTable(el);
        comparisonTable.init();
    });
}
exports.default = { attach: attach };

/***/ }),
/* 214 */,
/* 215 */,
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _smoothScrollbar = __webpack_require__(78);

var _smoothScrollbar2 = _interopRequireDefault(_smoothScrollbar);

var _lodash = __webpack_require__(12);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var TableScroll = function () {
  function TableScroll(element) {
    _classCallCheck(this, TableScroll);

    this.element = element;
    this.init();
  }

  _createClass(TableScroll, [{
    key: 'init',
    value: function init() {
      var _this = this;

      _smoothScrollbar2.default.init(this.element, { alwaysShowTracks: true });
      var xScrollbar = (0, _jquery2.default)(this.element).find('.scrollbar-track-x');

      var debounced = (0, _lodash.debounce)(function () {
        var marginTop = void 0;

        if (xScrollbar.css('display') === 'block') {
          (0, _jquery2.default)(_this.element).prev().removeClass('u-hidden');
          marginTop = 40;
        } else {
          (0, _jquery2.default)(_this.element).prev().addClass('u-hidden');
          marginTop = 0;
        }

        (0, _jquery2.default)(_this.element).find('.c-table').css('margin-top', marginTop + 'px');
      }, 400);

      debounced();
      (0, _jquery2.default)(window).on('resize', debounced);
    }
  }]);

  return TableScroll;
}();

exports.default = TableScroll;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _toggleText = __webpack_require__(114);

var _toggleText2 = _interopRequireDefault(_toggleText);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var columnSelector = '.js-column-sortable';
var sortByClassNameClass = 'js-column-sort-by-class';
var sortNumberClass = 'js-column-sort-num';
var previousCellIndex = -1;

var TableSort = function () {
  function TableSort(element) {
    _classCallCheck(this, TableSort);

    this.tableElement = element;
    this.columnElements = element.querySelectorAll(columnSelector);

    this.init();
  }

  _createClass(TableSort, [{
    key: 'init',
    value: function init() {
      for (var i = 0; i < this.columnElements.length; i += 1) {
        this.columnElements[i].addEventListener('click', function (e) {
          this.sortByClass = e.currentTarget.classList.contains(sortByClassNameClass);
          this.sortNumber = e.currentTarget.classList.contains(sortNumberClass);
          this.sortTable(e.currentTarget.cellIndex);
        }.bind(this));
      }
    }
  }, {
    key: 'sortTable',
    value: function sortTable(cellIndex) {
      var table = this.tableElement;

      var rows = [];
      var sortRows = [];

      for (var i = 1; i < table.rows.length; i++) {
        var rowData = [];
        for (var j = 0; j < table.rows[i].cells.length; j++) {
          var cell = table.rows[i].cells[j];
          var cellContent = cell.children.length ? cell.firstElementChild.cloneNode(true) : cell.innerHTML;
          rowData.push(cellContent);
        }
        rows.push(rowData);
      }

      if (previousCellIndex === cellIndex) {
        sortRows = rows.sort(this.compare(cellIndex, 'desc'));
        previousCellIndex = -1;
      } else {
        sortRows = rows.sort(this.compare(cellIndex, 'asc'));
        previousCellIndex = cellIndex;
      }
      for (var _i = 1; _i < table.rows.length; _i++) {
        for (var _j = 0; _j < table.rows[_i].cells.length; _j++) {
          var _cell = table.rows[_i].cells[_j];
          var sortCell = sortRows[_i - 1][_j];
          _cell.innerHTML = sortCell instanceof HTMLElement ? sortCell.outerHTML : sortCell;
        }
      }
      _toggleText2.default.attach();
    }
  }, {
    key: 'compare',
    value: function compare(col, direction) {
      var _this = this;

      return function (a, b) {
        var aVal = void 0;
        var bVal = void 0;
        if (_this.sortNumber) {
          aVal = _this.sortByClass ? _this.elementToNum(a[col]) : _this.textToNum(a[col]);
          bVal = _this.sortByClass ? _this.elementToNum(b[col]) : _this.textToNum(b[col]);
        } else {
          aVal = a[col];
          bVal = b[col];
        }

        if (aVal < bVal) {
          return direction === 'asc' ? -1 : 1;
        } else if (aVal > bVal) {
          return direction === 'asc' ? 1 : -1;
        }
        return 0;
      };
    }
  }, {
    key: 'elementToNum',
    value: function elementToNum(element) {
      var isNagative = element.classList.contains('c-table__number-value--negative');
      var value = Number(element.innerHTML.replace(/[^0-9\.-]+/g, ''));
      return isNagative ? value * -1 : value;
    }
  }, {
    key: 'textToNum',
    value: function textToNum(text) {
      var matchCase = /^\±?(\+?\-?\d*\.?\d*)*/.exec(text)[1];
      return isNaN(matchCase) ? false : Number(matchCase);
    }
  }]);

  return TableSort;
}();

exports.default = TableSort;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _productNavItem = __webpack_require__(219);

var _productNavItem2 = _interopRequireDefault(_productNavItem);

var _lodash = __webpack_require__(12);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var toggleProductNavLinkClass = '.js-toggle-product-nav__link';
var productNavListContainerClass = '.js-toggle-product-nav__list';
var toggleProductNavListClass = '.c-product-nav-bar__navigation';
var navigationLinkClass = '.c-nav-product__link';
var activeNavigationLinkClass = '.c-nav-product__active-item';

var ProductNavBar = function () {
  function ProductNavBar(element, mediaQuery) {
    _classCallCheck(this, ProductNavBar);

    this._element = element;
    this._mediaQuery = mediaQuery;

    this.init();
  }

  _createClass(ProductNavBar, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this._placeholderElement = this.createPlaceHolderElement();
      this._linkElement = this._element.querySelector(toggleProductNavLinkClass);
      this._navigationListContainer = this._element.querySelector(productNavListContainerClass);
      this._navigationList = this._navigationListContainer.querySelector(toggleProductNavListClass);
      this._openStatus = false;
      this._isMobile = !this._mediaQuery.matches;

      this.toggleProductNavigation = this.toggleProductNavigation.bind(this);
      this.handleLayoutChanged = this.handleLayoutChanged.bind(this);
      this._productNavItems = [];

      this.getHeightOfNavigationList();
      var productNavItems = this._element.querySelectorAll(navigationLinkClass);
      var allNavigationItems = productNavItems;
      productNavItems.forEach(function (element) {
        var mediaQuery = _this._mediaQuery;
        var navBar = _this._element;
        var isMobile = _this._isMobile;
        var nav = new _productNavItem2.default(element, allNavigationItems, mediaQuery, navBar, isMobile);
        _this._productNavItems.push(nav);
      });

      this._mediaQuery.addListener(this.handleLayoutChanged);
      this.addMobileEventListener();
    }
  }, {
    key: 'createPlaceHolderElement',
    value: function createPlaceHolderElement() {
      var newNode = document.createElement('div');
      newNode.classList.add('u-hidden', 'js-placeholder-product-nav');
      return this._element.parentNode.insertBefore(newNode, this._element.nextSibling);
    }
  }, {
    key: 'sticky',
    value: function sticky() {
      var _this2 = this;

      var elementRect = this._element.getBoundingClientRect();

      this._element.classList.add('c-nav-product--sticky');
      this._placeholderElement.style.height = elementRect.height + 'px';

      window.addEventListener('scroll', (0, _lodash.throttle)(function () {
        var isSticky = false;
        if (!isSticky && _this2._element.getBoundingClientRect().top <= 0) {
          isSticky = true;
          _this2._element.classList.add('is-active');
          _this2._placeholderElement.classList.remove('u-hidden');
        }

        if (isSticky && _this2._placeholderElement.getBoundingClientRect().top >= 0) {
          isSticky = false;
          _this2._element.classList.remove('is-active');
          _this2._placeholderElement.classList.add('u-hidden');
        }
      }, 10));
    }
  }, {
    key: 'handleLayoutChanged',
    value: function handleLayoutChanged() {
      this._navigationList = this._element.querySelector(toggleProductNavListClass);
      this.addMobileEventListener();
      this.getHeightOfNavigationList();
    }
  }, {
    key: 'addMobileEventListener',
    value: function addMobileEventListener() {
      var _this3 = this;

      this._isMobile = !this._mediaQuery.matches;

      if (this._isMobile) {
        this.closeNavigation();
        document.addEventListener('click', this.toggleProductNavigation);
        this._linkElement.addEventListener('touchstart', this.toggleProductNavigation);
        this._linkElement.addEventListener('keydown', this.toggleProductNavigation);
        this._linkElement.setAttribute('tabindex', 0);
      } else {
        this.setNavigationDefault();
        document.removeEventListener('click', this.toggleProductNavigation);
        this._linkElement.removeEventListener('touchstart', this.toggleProductNavigation);
        this._linkElement.removeEventListener('keydown', this.toggleProductNavigation);
        this._linkElement.removeAttribute('tabindex');
      }

      this._productNavItems.map(function (navItem) {
        navItem.isMobile = _this3._isMobile;
        return navItem;
      });
    }
  }, {
    key: 'toggleProductNavigation',
    value: function toggleProductNavigation(e) {
      var keyCode = e.which;
      var KEY_SPACE = 32;
      var KEY_ENTER = 13;
      var KEY_CLICK = 1;
      var matchedKeys = keyCode === KEY_SPACE || keyCode === KEY_ENTER || keyCode === KEY_CLICK;

      if (!this._openStatus && e.target === this._linkElement && matchedKeys) {
        this.openNavigation();
      } else if (this._openStatus && matchedKeys) {
        this.closeNavigation();
      } else {
        return;
      }
      this._openStatus = !this._openStatus;
    }
  }, {
    key: 'closeNavigation',
    value: function closeNavigation() {
      this._navigationListContainer.style.maxHeight = 0;
      this._linkElement.classList.remove('is-active');
      this._navigationList.classList.remove('is-active');
      if (this._element.querySelector(activeNavigationLinkClass)) {
        this._productNavItems[0].updateActivePosition();
      }
    }
  }, {
    key: 'openNavigation',
    value: function openNavigation() {
      var activeLink = this._element.querySelector(activeNavigationLinkClass);
      this._navigationListContainer.style.maxHeight = this._navigationListHeight + 'px';
      this._linkElement.classList.add('is-active');
      this._navigationList.classList.add('is-active');
      if (activeLink !== null) {
        this._activeLink = activeLink;
        this._activeLink.style.display = 'none';
      }
    }
  }, {
    key: 'setNavigationDefault',
    value: function setNavigationDefault() {
      this._navigationListContainer.style.maxHeight = 'none';
      this._openStatus = false;
    }
  }, {
    key: 'getHeightOfNavigationList',
    value: function getHeightOfNavigationList() {
      var _this4 = this;

      setTimeout(function () {
        _this4._navigationListHeight = Math.round(_this4._navigationList.scrollHeight);
      }, 0);
    }
  }]);

  return ProductNavBar;
}();

exports.default = ProductNavBar;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ProductNavItem = function () {
  function ProductNavItem(element, allNavigationItems, mediaQuery, navBar, isMobile) {
    _classCallCheck(this, ProductNavItem);

    this._element = element;
    this._allNavigationItems = allNavigationItems;
    this._mediaQuery = mediaQuery;
    this._navBar = navBar;
    this._isMobile = isMobile;

    this.init();
  }

  _createClass(ProductNavItem, [{
    key: 'init',
    value: function init() {
      this.toggleFixActiveElement = this.toggleFixActiveElement.bind(this);
      this.changeMobileStatus = this.changeMobileStatus.bind(this);
      this.setFocusOnNextElement = this.setFocusOnNextElement.bind(this);
      this.updateActiveElement = this.updateActiveElement.bind(this);

      this._element.addEventListener('click', this.updateActiveElement);
      this._element.addEventListener('keydown', this.updateActiveElement);
      this._element.addEventListener('touchstart', this.updateActiveElement);
      this._element.addEventListener('keydown', this.setFocusOnNextElement);

      this._mediaQuery.addListener(this.changeMobileStatus);
      this._mediaQuery.addListener(this.toggleFixActiveElement);
    }
  }, {
    key: 'isMatchedKeys',
    value: function isMatchedKeys(e) {
      var keyCode = e.which;
      var KEY_SPACE = 32;
      var KEY_ENTER = 13;
      var KEY_CLICK = 1;
      var matchedKeys = keyCode === KEY_SPACE || keyCode === KEY_ENTER || keyCode === KEY_CLICK;

      return matchedKeys;
    }
  }, {
    key: 'setToActive',
    value: function setToActive(e) {
      if (this.isMatchedKeys(e)) {
        this._element.classList.add('is-active');
      }
    }
  }, {
    key: 'setOthersToInactive',
    value: function setOthersToInactive(e) {
      if (this.isMatchedKeys(e)) {
        for (var i = 0; i < this._allNavigationItems.length; i += 1) {
          this._allNavigationItems[i].classList.remove('is-active');
        }

        (0, _jquery2.default)(this._navBar).find('.c-product-nav-bar__more-link-container .is-active').removeClass('is-active').removeClass('c-nav-product--is-selected');
      }
    }
  }, {
    key: 'updateFixActiveElement',
    value: function updateFixActiveElement(e) {
      if (this._isMobile && this.isMatchedKeys(e)) {
        this.removeOldElement();
        this.buildFixActiveElement();
      }
    }
  }, {
    key: 'buildFixActiveElement',
    value: function buildFixActiveElement() {
      var linkTitle = this._element.innerHTML;
      var fixedLinkItem = document.createElement('span');
      fixedLinkItem.classList.add('c-nav-product__active-item');

      var grid = (0, _jquery2.default)('<div>').addClass('l-grid l-grid--max-width');
      var gridRow = (0, _jquery2.default)('<div>').addClass('l-grid__row');
      var gridColumn = (0, _jquery2.default)('<div>').addClass('l-grid__column');
      gridColumn.append(linkTitle);
      gridRow.append(gridColumn);
      grid.append(gridRow);

      (0, _jquery2.default)(fixedLinkItem).append(grid);
      this._navBar.appendChild(fixedLinkItem);
    }
  }, {
    key: 'removeOldElement',
    value: function removeOldElement() {
      var oldActiveItem = this._navBar.querySelector('.c-nav-product__active-item');

      this._oldActiveItem = oldActiveItem;
      if (this._oldActiveItem != null && !this._isRemoved) {
        this._oldActiveItem.parentNode.removeChild(oldActiveItem);
      }
    }
  }, {
    key: 'changeMobileStatus',
    value: function changeMobileStatus() {
      this._isMobile = !this._isMobile;
    }
  }, {
    key: 'toggleFixActiveElement',
    value: function toggleFixActiveElement() {
      if (this._isMobile) {
        if (this._element.classList.contains('is-active')) {
          this.removeOldElement();
          this.buildFixActiveElement();
          this.showFixActiveElement();
        }
      } else {
        this.removeOldElement();
      }
    }
  }, {
    key: 'showFixActiveElement',
    value: function showFixActiveElement() {
      var fixedItem = this._navBar.querySelector('.c-nav-product__active-item');
      fixedItem.style.display = 'block';
    }
  }, {
    key: 'updateActivePosition',
    value: function updateActivePosition() {
      var activeItemParent = this._navBar.querySelector('.c-nav-product__link.is-active').parentNode;
      var listOfActiveItem = this._navBar.querySelector('.c-product-nav-bar__navigation');
      var firstOffsetOfList = listOfActiveItem.getBoundingClientRect();
      var fixedItem = this._navBar.querySelector('.c-nav-product__active-item');
      var getTopPositionTime = setInterval(function () {
        var activeOffsetY = activeItemParent.getBoundingClientRect().bottom;
        var currentOffsetOfList = listOfActiveItem.getBoundingClientRect();
        var movedDistanceOfList = firstOffsetOfList.top - currentOffsetOfList.top;
        if (activeOffsetY <= movedDistanceOfList) {
          fixedItem.style.display = 'block';
          clearInterval(getTopPositionTime);
        }
      }, 10);
    }
  }, {
    key: 'getOffsetOfFixedElement',
    value: function getOffsetOfFixedElement(e) {
      if (this._isMobile && this.isMatchedKeys(e)) {
        this.updateActivePosition();
      }
    }
  }, {
    key: 'updateActiveElement',
    value: function updateActiveElement(e) {
      this.setOthersToInactive(e);
      this.setToActive(e);
      this.updateFixActiveElement(e);
      this.getOffsetOfFixedElement(e);
    }
  }, {
    key: 'setFocusOnNextElement',
    value: function setFocusOnNextElement(e) {
      var keyCode = e.which;
      var KEY_UP = 38;
      var KEY_DOWN = 40;
      var parent = this._element.parentElement;

      if (keyCode === KEY_DOWN && parent.nextElementSibling) {
        e.preventDefault();
        parent.nextElementSibling.children[0].focus();
      } else if (keyCode === KEY_UP && parent.previousElementSibling) {
        e.preventDefault();
        parent.previousElementSibling.children[0].focus();
      }
    }
  }]);

  return ProductNavItem;
}();

exports.default = ProductNavItem;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var listTableMultiSelectCheckboxEventSelector = '.js-table-list__checkbox--multi-select';

var ListTableMultiSelectHandleEvent = function () {
  function ListTableMultiSelectHandleEvent(element) {
    _classCallCheck(this, ListTableMultiSelectHandleEvent);

    this.$elem = element;
    this.listTableMultiSelectCheckboxEventElements = element.querySelectorAll(listTableMultiSelectCheckboxEventSelector);
    this.init();
  }

  _createClass(ListTableMultiSelectHandleEvent, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var _loop = function _loop(i) {
        var checkBoxElement = _this.listTableMultiSelectCheckboxEventElements[i];
        checkBoxElement.addEventListener('click', function (e) {
          if (e.target.id === "all") {
            _this.toggleAllCheckboxes(checkBoxElement.checked);
          }
        });
      };

      for (var i = 0; i < this.listTableMultiSelectCheckboxEventElements.length; i += 1) {
        _loop(i);
      }
    }
  }, {
    key: 'toggleAllCheckboxes',
    value: function toggleAllCheckboxes(cond) {
      for (var i = 0; i < this.listTableMultiSelectCheckboxEventElements.length; i += 1) {
        var checkBoxElementAl = this.listTableMultiSelectCheckboxEventElements[i];
        checkBoxElementAl.checked = cond;
      }
    }
  }]);

  return ListTableMultiSelectHandleEvent;
}();

exports.default = ListTableMultiSelectHandleEvent;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var listTableSingleSelectCheckboxEventSelector = '.js-table-list__checkbox--single-select';

var ListTableSingleSelectHandleEvent = function () {
  function ListTableSingleSelectHandleEvent(element) {
    _classCallCheck(this, ListTableSingleSelectHandleEvent);

    this.$elem = element;
    this.listTableSingleSelectRadioEventElements = element.querySelectorAll(listTableSingleSelectCheckboxEventSelector);
    this.init();
  }

  _createClass(ListTableSingleSelectHandleEvent, [{
    key: 'init',
    value: function init() {
      for (var i = 0; i < this.listTableSingleSelectRadioEventElements.length; i += 1) {
        var radioButtonElement = this.listTableSingleSelectRadioEventElements[i];
        var tableRow = this.findAncestor(radioButtonElement, 'c-table__row');
        this.removeClass(tableRow, 'c-table__row--highlighted');
        if (radioButtonElement.checked) {
          this.addClass(tableRow, 'c-table__row--highlighted');
        }
      }
    }
  }, {
    key: 'findAncestor',
    value: function findAncestor(el, cls) {
      while ((el = el.parentElement) && !el.classList.contains(cls)) {}
      return el;
    }
  }, {
    key: 'addClass',
    value: function addClass(el, cls) {
      el.className += ' ' + cls;
    }
  }, {
    key: 'removeClass',
    value: function removeClass(el, cls) {
      var elClass = ' ' + el.className + ' ';
      while (elClass.indexOf(' ' + cls + ' ') !== -1) {
        elClass = elClass.replace(' ' + cls + ' ', '');
      }
      el.className = elClass;
    }
  }]);

  return ListTableSingleSelectHandleEvent;
}();

exports.default = ListTableSingleSelectHandleEvent;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var DropdownConstructor = function () {
    function DropdownConstructor($ele) {
        _classCallCheck(this, DropdownConstructor);

        this.$ele = $ele;
        this._$natural = this.$ele.find('.c-select__natural');

        this.id = this._$natural.attr('id') || false;
        this.genId = this.id ? 'generate-' + this.id : false;
        this.labelId = this.genId ? this.genId + '-label' : false;
        this.renderId = this.genId ? this.genId + '-render' : false;

        this.label = this._$natural.data('label');
        this.isGroup = this._$natural.data('group');

        // TODO:: disabled attr support on container c-select should be deprecate in next major release(2.0)
        this.isDisable = this.$ele.attr('disabled') || this._$natural.attr('disabled');
        this.filterPlaceholder = this._$natural.data('filter');

        this.init();
    }

    _createClass(DropdownConstructor, [{
        key: 'init',
        value: function init() {
            var selectionLabelBy = this.genId ? 'aria-labelledby="' + this.renderId + ' ' + this.labelId + '"' : '';
            var htmlMarkup = '<div class="c-select__selection" aria-haspopup="listbox" role="button" ' + selectionLabelBy + ' ' + (!this.isDisable ? 'tabindex="0"' : '') + '>\n                                ' + this.buildSelectLabel() + '\n                                <div class="c-select__selection--rendered" ' + (this.renderId ? 'id=' + this.renderId : '') + '></div>\n                                <span class="c-select__chevron c-icon c-icon--chevron-down"></span>\n                            </div>\n                            <div class="c-select__dropdown">\n                                ' + this.buildDropdownLabel() + '\n                                ' + this.buildFilter() + '\n                                <div class="c-select-results">\n                                ' + this.buildDropdown() + '\n                                </div>\n                            </div>';
            // Build Done Hide default select
            this.$ele.append(htmlMarkup);

            // TODO:: Deprecate in next major release(2.0)
            // If disabled is added to container(Legacy) put it to natural selector as well
            if (this.isDisable) {
                this._$natural.attr('disabled', true);
            }
        }
    }, {
        key: 'buildSelectLabel',
        value: function buildSelectLabel() {
            return this.label ? '<label class="c-select__label" ' + (this.id ? 'for=' + this.id : '') + ' ' + (this.labelId ? 'id=' + this.labelId : '') + '">' + this.label + '</label>' : '';
        }
    }, {
        key: 'buildDropdownLabel',
        value: function buildDropdownLabel() {
            return this.label ? '<div class="c-select__dropdown__label">' + this.label + '</div>' : '';
        }
    }, {
        key: 'buildDropdown',
        value: function buildDropdown() {
            var _this = this;

            var selectResult = '';

            if (!this.isGroup) {
                var optionsMarkup = '';
                (0, _jquery2.default)('option', this._$natural).each(function (index, value) {
                    return optionsMarkup = optionsMarkup + _this.buildOption(value);
                });
                selectResult = '<ul class="c-select-results__options" role="listbox" tabindex="-1">' + optionsMarkup + '</ul>';
            } else {
                // If attribute Group is set to true Then render structure with group container
                var groupMarkup = '';
                var groups = this.sortGroup();
                groups.forEach(function (group) {
                    var optionsMarkup = '';
                    group.options.forEach(function (value) {
                        return optionsMarkup = optionsMarkup + _this.buildOption(value);
                    });
                    groupMarkup = '<div class="c-select-results__group">\n                                <div class="c-select-results__group-label">' + group.groupName + '</div>\n                                <ul class="c-select-results__options" role="listbox">' + optionsMarkup + '</ul>\n                            </div>';
                    selectResult = selectResult + groupMarkup;
                });
            }

            return selectResult;
        }
    }, {
        key: 'buildOption',
        value: function buildOption(value) {
            return '<li class="c-select-results__option" role="option" id="generate-' + (0, _jquery2.default)(value).attr('id') + '" data-value=' + (0, _jquery2.default)(value).val() + '>\n                <div class="c-select-results__option-label">' + (0, _jquery2.default)(value).text() + '</div>\n            </li>';
        }
    }, {
        key: 'buildFilter',
        value: function buildFilter() {
            if (this.filterPlaceholder) {
                return '<div class="c-select__filter">\n                    <input class="c-select__filter-input" type="text" placeholder="' + this.filterPlaceholder + '" />\n                    <span class="c-icon c-icon--close c-select__c-icon c-select__c-icon--hidden"></span>\n                    </div>';
            }

            return '';
        }
    }, {
        key: 'sortGroup',
        value: function sortGroup() {
            // Sort into group 
            var groups = [];

            (0, _jquery2.default)('option', this._$natural).each(function (index, value) {
                var groupName = (0, _jquery2.default)(value).data('groupname');
                var group = groups.filter(function (group) {
                    return group.groupName == groupName;
                });
                if (group[0]) {
                    group[0].options.push(value);
                } else {
                    groups.push({ 'groupName': groupName, options: [] });
                }
            });

            return groups;
        }
    }]);

    return DropdownConstructor;
}();

exports.default = DropdownConstructor;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(12);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_jquery2.default.fn.footerCurtainPanel = function () {
  var _this = this;

  this.shadowHeight = 40;
  this.isLock = false;
  this.$el = (0, _jquery2.default)(this);
  this.$window = (0, _jquery2.default)(window);
  this._lastScroll = this.$window.scrollTop();
  this.$container = this.$el.parents('.c-footer__container--curtain-panel');
  this.$triggerByEl = this.$container.find('.' + this.$el.data('trigger-by-class'));
  this.$footer = this.$container.closest('.c-footer');
  this.$footerCurtainPanel = this.$el.closest('.c-footer__curtain-panel');
  this.isIE11 = function () {
    return window.navigator.userAgent.indexOf('Trident') > 0;
  };

  // Check current browser is Internet explorer
  if (this.isIE11()) {
    this.$footer.css('z-index', 0);
  }

  this.panelHeight = function () {
    var height = 0,
        children = _this.$container.children();
    for (var i = 0; i < children.length; i++) {
      height += (0, _jquery2.default)(children[i]).innerHeight();
    }
    return height;
  };

  this.updateProperty = function () {
    _this.elHeight = _this.$el.outerHeight();
    // Element to trigger when scroll reach
    _this.triggerHeight = _this.$triggerByEl.outerHeight();
    _this.containerHeight = _this.elHeight + _this.triggerHeight;
  };

  this.resetProperty = function () {
    _this.$footer.removeClass('c-footer--active-curtain');
  };

  // Check current device
  this.isMobile = function () {
    return window.matchMedia('(max-width: 767px)').matches;
  };

  // Check for element is entered viewport.
  this.inViewport = function ($el) {
    var tolerance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var elem = $el;
    if (elem.get(0) !== 'undefined' && elem.length > 0) {
      var rect = $el.get(0).getBoundingClientRect();
      return parseInt(rect.bottom, 10) - tolerance <= _this.$window.height();
    }
  };

  // Check for element is leaving viewport.
  this.leaveViewport = function ($el) {
    var tolerance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var rect = $el.get(0).getBoundingClientRect();
    return rect.top + tolerance >= _this.$window.height();
  };

  // Return namespace depend on scroll direction
  this.getScrollDirection = function () {
    var lastScroll = _this._lastScroll;
    var direction = _this.$window.scrollTop() > lastScroll ? 'Down' : 'Up';
    _this._lastScroll = _this.$window.scrollTop();
    return 'onScroll' + direction;
  };

  this.unlockTriggerEl = function () {
    _this.$footer.css({
      'margin-bottom': ''
    });
    _this.$footer.removeClass('c-footer--active-curtain');
    if (_this.isIE11) {
      _this.$footer.prev().css({ position: '', 'z-index': '' });
    }
  };

  this.lockTriggerEl = function () {
    _this.$footer.css({
      'margin-bottom': _this.panelHeight()
    });
    _this.$footer.addClass('c-footer--active-curtain');
    if (_this.isIE11) {
      _this.$footer.prev().css({ position: 'relative', 'z-index': 2 });
    }
  };

  this.onScrollDown = function () {
    // Add shadow when curtain panel slightly open.
    var elem = _this.$container;
    if (elem.get(0) !== 'undefined' && elem.length > 0) {
      var top = _this.$container.get(0).getBoundingClientRect().top;
      var shadowTriggerOffsetY = top + _this.triggerHeight + _this.shadowHeight;

      if (_this.$footer.hasClass('c-footer--active-curtain') && (0, _jquery2.default)(document).height() - (0, _jquery2.default)(window).height() - _this.$footerCurtainPanel.innerHeight() + _this.shadowHeight <= (0, _jquery2.default)(window).scrollTop()) {
        // this.leaveViewport(this.$footer, this.triggerHeight)) {
        _this.$footer.addClass('c-footer--active-shadow');
      }
      // Set fixed position of curtain panel
      if (!_this.isLock && _this.inViewport(_this.$triggerByEl)) {
        _this.lockTriggerEl();
        _this.isLock = true;
      }
    }
  };

  this.onScrollUp = function () {
    // Remove shadow when curtain panel nearly close.
    var elem = _this.$container;
    if (elem.get(0) !== 'undefined' && elem.length > 0) {
      var top = _this.$container.get(0).getBoundingClientRect().top;
      var shadowTriggerOffsetY = top + _this.triggerHeight + _this.shadowHeight;
      if (_this.isLock && (0, _jquery2.default)(document).height() - (0, _jquery2.default)(window).height() - _this.$footerCurtainPanel.innerHeight() + _this.shadowHeight >= (0, _jquery2.default)(window).scrollTop()) {
        // this.leaveViewport(this.$footer, this.triggerHeight)) {
        _this.$footer.removeClass('c-footer--active-shadow');
      }
      // Restore position of curtain panel
      if (_this.isLock && (0, _jquery2.default)(document).height() - (0, _jquery2.default)(window).height() - _this.$footerCurtainPanel.innerHeight() >= (0, _jquery2.default)(window).scrollTop()) {
        // this.leaveViewport(this.$footer, this.triggerHeight)) {
        _this.unlockTriggerEl();
        _this.isLock = false;
      }
    }
  };

  this.onResize = (0, _lodash.throttle)(function () {
    // this.resetProperty();
    if (_this.isMobile()) {
      _this.resetProperty();
    } else {
      _this.updateProperty();
      // Disable curtain panel
      _this.unlockTriggerEl();

      // Enable curtain panel agian if needed.
      if (_this.inViewport(_this.$triggerByEl)) {
        _this.lockTriggerEl();
        _this.isLock = true;
      }
    }
  }, 100);

  this.$window.on({
    scroll: function scroll() {
      if (!_this.isMobile()) {
        _this[_this.getScrollDirection()]();
      }
    },
    resize: this.onResize
  });

  if (this.isMobile()) {
    this.resetProperty();
  } else {
    this.updateProperty();
  }
};

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var navigationHeaderSelector = '.c-footer__navigation-headline';

var FooterShowNavigationList = function () {
  function FooterShowNavigationList(element) {
    _classCallCheck(this, FooterShowNavigationList);

    this.element = element;
    this.navigationListElement = element.nextElementSibling;
    this.init();
  }

  _createClass(FooterShowNavigationList, [{
    key: 'init',
    value: function init() {
      this.element.addEventListener('click', function () {
        if (this.element.classList.contains('c-icon--chevron-down')) {
          this.navigationListElement.style.display = 'block';
          this.element.classList.remove('c-icon--chevron-down');
          this.element.classList.add('c-icon--chevron-up');
        } else {
          this.navigationListElement.style.display = '';
          this.element.classList.remove('c-icon--chevron-up');
          this.element.classList.add('c-icon--chevron-down');
        }
      }.bind(this));
    }
  }]);

  return FooterShowNavigationList;
}();

var navigationHeaderElements = document.querySelectorAll(navigationHeaderSelector);
for (var i = 0; i < navigationHeaderElements.length; i++) {
  var element = navigationHeaderElements[i];
  new FooterShowNavigationList(element);
}

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var showSuperOrdinatedOptionsSelector = '.js-super-ordinated-show-option-button';

var FooterShowOptions = function () {
  function FooterShowOptions(element) {
    _classCallCheck(this, FooterShowOptions);

    this.$elem = element;
    this.superOrdinateButtonElements = element.querySelectorAll(showSuperOrdinatedOptionsSelector);
    this.init();
  }

  _createClass(FooterShowOptions, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var _loop = function _loop(i) {
        _this.superOrdinateButtonElements[i].addEventListener('click', function () {
          var footerActionElement = document.querySelector('.c-footer__actions');
          if (!footerActionElement.classList.contains("is-shown") && !this.superOrdinateButtonElements[i].classList.contains("is-hidden")) {
            footerActionElement.classList.add("is-shown");
            this.superOrdinateButtonElements[i].classList.add("is-hidden");
          }
        }.bind(_this));
      };

      for (var i = 0; i < this.superOrdinateButtonElements.length; i += 1) {
        _loop(i);
      }
    }
  }]);

  return FooterShowOptions;
}();

exports.default = FooterShowOptions;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ThreeLevelNavHandleEvent = function () {
  function ThreeLevelNavHandleEvent(element) {
    _classCallCheck(this, ThreeLevelNavHandleEvent);

    this.$elem = (0, _jquery2.default)(element);
    this.toggleEvent = this.getToggleEvent();
    this.init();
  }

  _createClass(ThreeLevelNavHandleEvent, [{
    key: 'init',
    value: function init() {
      (0, _jquery2.default)('.js-three-level-nav .js-navcontent').hide();
      this.attachListeners();

      if (this.$elem.find('.js-main-navbar').height() > 80) {
        this.$elem.find('.js-nav-extended').addClass('c-navigation--extended-2-lines');
      }
    }
  }, {
    key: 'mainNav',
    value: function mainNav() {
      function navHandler(e) {
        var $scope = (0, _jquery2.default)(this);
        var targetId = $scope.attr('id');

        // clear flyout sub level
        var $flyoutSubNav = (0, _jquery2.default)('.js-flyout--sub-navigation').find('.active').removeClass('active');
        (0, _jquery2.default)('[data-parent-id="' + $flyoutSubNav.attr('id') + '"]').hide().removeClass('active');

        $scope.addClass('active').attr('aria-expanded', true);
        $scope.parent().siblings().each(function () {
          var $target = (0, _jquery2.default)(this).find('.' + e.data.targetClass);
          if ($target.hasClass('active')) {
            $target.removeClass('active');
          } else {
            $target.attr({ tabindex: -1, 'aria-expanded': false });
          }
        });

        (0, _jquery2.default)(".c-main-navbar__item").mouseleave(function () {
          if (!(0, _jquery2.default)('.js-sub-navigation').is(":visible")) {
            var $target = (0, _jquery2.default)(this).find('.' + e.data.targetClass);
            if ($target.hasClass('active')) {
              $target.removeClass('active');
            }
          }
        });

        e.data.contents.each(function () {
          var shouldShow = (0, _jquery2.default)(this).data('parent-id') === targetId;

          if (shouldShow) {
            (0, _jquery2.default)(this).slideDown();
            var $headlines = (0, _jquery2.default)(this).find('.c-navcontent__headline');

            // Checkout headline height if more than one line, margin bottom will change to 21px.
            $headlines.each(function () {
              var lineHeight = (0, _jquery2.default)(this).css('line-height');
              if ((0, _jquery2.default)(this).height() > parseInt(lineHeight, 10)) {
                (0, _jquery2.default)(this).css('margin-bottom', lineHeight);
              } else {
                // Remove inline style when screen size changed and headline transform to one line
                (0, _jquery2.default)(this).attr('style', '');
              }
            });
          } else {
            (0, _jquery2.default)(this).stop(true, true).slideUp(50);
          }
        });
      }

      var $mainNav = this.$elem.find('.js-main-navigation-link');
      var $subNav = this.$elem.find('.js-sub-navigation');
      var $subNavLink = this.$elem.find('.js-sub-navigation-link');
      var $searchOpener = this.$elem.find('.js-search-opener');
      var mainNavData = {
        targetClass: 'js-main-navigation-link',
        contents: $subNav
      };
      var subNavData = {
        targetClass: 'js-sub-navigation-link',
        contents: this.$elem.find('.js-navcontent')
      };

      $mainNav.on(this.toggleEvent, mainNavData, navHandler);
      $subNavLink.on(this.toggleEvent, subNavData, navHandler);
      $mainNav.on('focus', function () {
        var currentId = (0, _jquery2.default)(this).attr('id');

        $searchOpener.attr('tabindex', 0);
        $mainNav.filter(function () {
          return (0, _jquery2.default)(this).attr('id') !== currentId;
        }).attr('tabindex', 0);
      });
      $subNav.on('focus', function () {
        var currentId = (0, _jquery2.default)(this).attr('id');

        $subNavLink.filter(function () {
          return (0, _jquery2.default)(this).attr('id') !== currentId;
        }).attr('tabindex', 0);
      });

      function closeNav() {
        if ((0, _jquery2.default)('.js-three-level-nav').is(':visible')) {
          (0, _jquery2.default)('.js-three-level-nav .js-main-navigation-link').removeClass('active');
          (0, _jquery2.default)('.js-three-level-nav .js-sub-navigation-link').removeClass('active');
          (0, _jquery2.default)('.js-three-level-nav .js-sub-navigation').slideUp(150);
          (0, _jquery2.default)('.js-three-level-nav .js-navcontent').slideUp(150);
        }
      }

      (0, _jquery2.default)(".js-sub-navigation").mouseleave(function () {
        if ((0, _jquery2.default)(this).closest(".js-three-level-nav").attr('data-toggle-on') != "click") {
          closeNav();
        }
      });

      (0, _jquery2.default)(document).click(function (event) {
        if (!(0, _jquery2.default)(event.target).closest('.js-three-level-nav').length) {
          closeNav();
        }
      });
    }
  }, {
    key: 'mobileNav',
    value: function mobileNav() {
      var _this = this;

      function removeActive($scope) {
        var $deactivatedEl = null;
        $scope.each(function (idx, el) {
          var $target = (0, _jquery2.default)(el).parent();
          if ($target.hasClass('active')) {
            $target.find('.accordion__content').stop(true, true).slideUp();
            $target.removeClass('active');
            // Deep remove active in child
            $target.find('.active').removeClass('active');

            $deactivatedEl = $target;
          }
        });

        return $deactivatedEl;
      }

      function setActive($scope) {
        return $scope.addClass('active').find('.accordion__content').first().slideDown();
      }

      function navMobileHandler(e) {
        var $scope = (0, _jquery2.default)(this).parent();
        var $deactivatedEl = removeActive(e.data);
        var shouldActive = !$deactivatedEl || $deactivatedEl[0] !== $scope[0];

        if (shouldActive) {
          setActive($scope);
        }
      }

      var openFindAgentMobile = this.$elem.find('.js-find-agent-link-mobile');
      openFindAgentMobile.on('click', function () {
        openFindAgentMobile.toggleClass('active');
        _this.$elem.find('.js-find-agent-mobile').stop(true, true).slideToggle();
      });

      var openTiedAgentMobile = this.$elem.find('.js-tied-agent-link-mobile');
      openTiedAgentMobile.on('click', function () {
        openTiedAgentMobile.toggleClass('active');
        _this.$elem.find('.js-tied-agent-mobile').stop(true, true).slideToggle();
      });

      var openNavMobile = this.$elem.find('.js-opener-link-mobile');
      openNavMobile.on('click', function () {
        openNavMobile.toggleClass('active');
        _this.$elem.find('.js-navigation-mobile').stop(true, true).slideToggle();
        _this.$elem.find('.js-flyout--sub-navigation').toggleClass('c-flyout--sub-navigation--opened');
      });

      var isDescriptor = this.$elem.parents().find('.c-mobilebar__descriptor .js-descriptor-mobile').length >= 1;
      if (isDescriptor) {
        this.$elem.find('.c-mobilebar__descriptor').removeClass('u-invisible');
        this.$elem.find('.c-navigation--compact').css('border-bottom', 'none');
        this.$elem.find('.c-mobilebar').css('border-bottom', 'none');
      }

      var closeNavMobile = this.$elem.find('.js-flyout--sub-navigation');
      closeNavMobile.on('click', function (e) {
        var isClickOutside = (0, _jquery2.default)(e.target).closest('.c-flyout__layout').length === 0;
        if ((0, _jquery2.default)('.js-three-level-nav').is(':visible') && isClickOutside) {
          _this.$elem.find('.js-navigation-mobile').stop(true, true).slideUp(50);
          _this.$elem.find('.js-flyout--sub-navigation').removeClass('c-flyout--sub-navigation--opened');
          _this.$elem.find('.js-opener-link-mobile').removeClass('active');
        }
      });

      var mainNavMobile = this.$elem.find('.js-main-navigation-link-mobile');
      var subNavMobile = this.$elem.find('.js-sub-navigation-link-mobile');

      mainNavMobile.on('click', mainNavMobile, navMobileHandler);
      subNavMobile.on('click', subNavMobile, navMobileHandler);
    }
  }, {
    key: 'getToggleEvent',
    value: function getToggleEvent() {
      return this.$elem.data('toggle-on') === 'click' ? 'click' : 'mouseenter';
    }
  }, {
    key: 'attachListeners',
    value: function attachListeners() {
      this.mainNav();
      this.mobileNav();
    }
  }]);

  return ThreeLevelNavHandleEvent;
}();

exports.default = ThreeLevelNavHandleEvent;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SearchHandleEvent = function () {
  function SearchHandleEvent(element) {
    _classCallCheck(this, SearchHandleEvent);

    this.$elem = (0, _jquery2.default)(element);
    this.init();
  }

  _createClass(SearchHandleEvent, [{
    key: 'init',
    value: function init() {
      this.mainNavbar = this.$elem.parent().find('.js-main-navbar');
      this.navbar = this.$elem.parent().find('.js-header__wrapper');
      this.headerLogo = this.$elem.parent().find('.js-header__logo');
      this.searchOpener = this.$elem.find('.js-search-opener');
      this.searchbarFlyout = this.$elem.find('.js-flyout--search-bar');
      this.searchbar = this.$elem.find('.js-searchbar');
      this.searchInput = this.$elem.find('.js-searchbar__input');
      this.searchButton = this.$elem.find('.js-searchbar__search-button');
      this.cancelButton = this.$elem.find('.js-searchbar__cancel-button');
      this.clearButtonMobile = this.$elem.find('.js-searchbar__clear-button--mobile');
      this.goButtonMobile = this.$elem.find('.js-searchbar__go-button--mobile');
      this.searchSuggestion = this.$elem.find('.js-search__suggestions');

      this.attachListeners();
    }
  }, {
    key: 'attachListeners',
    value: function attachListeners() {
      var _this = this;

      // Sync search input
      this.$elem.find('.js-searchbar__input').on('input', function () {
        (0, _jquery2.default)(this).parents('.js-search').find('.js-searchbar__input').val((0, _jquery2.default)(this).val());
      });

      this.searchOpener.click(function () {
        // Adjusting width according to logo width
        var searchBarWidth = _this.navbar.width() - _this.headerLogo.outerWidth(true);
        _this.searchbar.show();
        _this.searchOpener.hide();
        _this.mainNavbar.hide();
        _this.searchbar.addClass('c-searchbar--opened');
        _this.searchbarFlyout.css({
          width: searchBarWidth,
          bottom: 0
        });
        _this.searchInput.focus();
      });
      //  Accessibility
      this.searchOpener.keypress(function (e) {
        e.preventDefault();
        var key = e.which;
        if (key === 13 || key === 32) {
          _this.searchOpener.click();
        }
      });

      this.searchInput.on('input', function () {
        var inputVal = _this.searchInput.val();

        if (inputVal !== '') {
          _this.searchSuggestion.show().css('display', 'flex');
          _this.searchSuggestion.addClass('c-search__suggestions--opened');

          var keywords = _this.$elem.find('.c-search__suggestions-item > .c-search__suggestions-link');
          var searchLimit = 10;
          var searchCounter = 0;

          for (var i = 0; i < keywords.length; i += 1) {
            var keywordElem = (0, _jquery2.default)(keywords[i]);
            if (!keywordElem.text().includes(inputVal)) {
              keywordElem.parents('.c-search__suggestions-item').hide();
            } else if (searchCounter < searchLimit) {
              keywordElem.parents('.c-search__suggestions-item').show();
              keywordElem.html(keywordElem.text().replace(inputVal, '<span class="u-highlighted">' + inputVal + '</span>'));
              searchCounter += 1;
            } else {
              keywordElem.parents('.c-search__suggestions-item').hide();
            }
          }
        } else {
          _this.searchSuggestion.removeClass('c-search__suggestions--opened');
          _this.searchSuggestion.hide();
        }
      });

      this.searchButton.click(function () {
        //  Placeholder for real code when implementing
      });
      //  Accessibility
      this.searchButton.keypress(function (e) {
        e.preventDefault();
        var key = e.which;
        if (key === 13 || key === 32) {
          _this.searchButton.click();
        }
      });

      this.performRetoreNaviBarLogic = function () {
        _this.searchInput.val('');
        _this.searchSuggestion.removeClass('c-search__suggestions--opened');
        _this.searchSuggestion.hide();
        _this.searchbar.hide();
        _this.mainNavbar.show();
        _this.searchOpener.show();
        _this.searchbar.removeClass('c-searchbar--opened');
        _this.searchbarFlyout.css('bottom', 'inherit');
      };

      this.cancelButton.click(function () {
        _this.performRetoreNaviBarLogic();
      });

      //  Accessibility
      this.cancelButton.keypress(function (e) {
        e.preventDefault();
        var key = e.which;
        if (key === 13 || key === 32) {
          _this.cancelButton.click();
        }
      });
      this.searchInput.keyup(function (e) {
        var key = e.which;
        if (key === 27) {
          _this.cancelButton.click();
        }
      });

      this.clearButtonMobile.click(function () {
        _this.searchInput.val('');
        _this.searchSuggestion.removeClass('c-search__suggestions--opened');
        _this.searchSuggestion.hide();
      });

      this.goButtonMobile.click(function () {
        //  Placeholder for real code when implementing
      });

      (0, _jquery2.default)(document).click(function (e) {
        if (!(0, _jquery2.default)(e.target).closest('.js-search').length && (0, _jquery2.default)('.js-search').is(':visible') && (0, _jquery2.default)(window).width() < 704) {
          _this.performRetoreNaviBarLogic();
        }
      });

      (0, _jquery2.default)(window).on('resize', function () {
        var searchBarWidth = _this.navbar.width() - _this.headerLogo.outerWidth(true);
        _this.searchbarFlyout.css({
          width: searchBarWidth
        });
      });
    }
  }]);

  return SearchHandleEvent;
}();

exports.default = SearchHandleEvent;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var YoutubeContainer = function () {
  function YoutubeContainer(element) {
    _classCallCheck(this, YoutubeContainer);

    this._element = element;
    this.start = this.start.bind(this);
    this._isCreated = false;

    this.init();
  }

  _createClass(YoutubeContainer, [{
    key: 'init',
    value: function init() {
      this._element.addEventListener('click', this.start);
      this._element.addEventListener('keydown', this.start);
    }
  }, {
    key: 'start',
    value: function start() {
      if (this._isCreated) {
        return;
      }

      this.createIframe();
      this._element.removeEventListener('click', this.start);
      this._element.removeEventListener('keydown', this.start);
    }
  }, {
    key: 'createIframe',
    value: function createIframe() {
      var iframe = document.createElement('iframe');
      iframe.classList.add('c-video__iframe');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('id', 'player');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this._element.dataset.embed + '?rel=0&showinfo=0&autoplay=1&enablejsapi=1');

      this._element.innerHTML = '';
      this._element.appendChild(iframe);

      this._isCreated = true;
    }
  }]);

  return YoutubeContainer;
}();

exports.default = YoutubeContainer;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ToggleContainerItem = function () {
  function ToggleContainerItem(element, selector, toggleAllSelector, toggleItemObjects) {
    _classCallCheck(this, ToggleContainerItem);

    this._element = element;
    this._toggleAllSelector = toggleAllSelector;
    this._toggleAllElement = document.querySelector(toggleAllSelector);
    this._allToggleItemObjects = toggleItemObjects;
    this._currentToggleItemObjects = document.querySelectorAll(selector);

    this.init();
  }

  _createClass(ToggleContainerItem, [{
    key: 'init',
    value: function init() {
      var allToggleItemObjects = [];
      for (var i = 0; i < this._allToggleItemObjects.length; i++) {
        allToggleItemObjects.push(this._allToggleItemObjects[i]._element);
      }

      var currentToggleItemObjects = [];
      for (var i = 0; i < this._currentToggleItemObjects.length; i++) {

        if (allToggleItemObjects.indexOf(this._currentToggleItemObjects[i]) > -1) {
          var currentIndex = allToggleItemObjects.indexOf(this._currentToggleItemObjects[i]);
          currentToggleItemObjects.push(this._allToggleItemObjects[currentIndex]);
        } else {
          return;
        }
      }
      this._currentToggleItemObjectsArray = currentToggleItemObjects;

      this._openStatus = false;

      if (this._toggleAllElement) {
        this._toggleAllElement.classList.remove('is-open');
        (0, _jquery2.default)(this._toggleAllElement).off('click').on('click', this.toggleAllItems.bind(this));
      }
    }
  }, {
    key: 'toggleAllItems',
    value: function toggleAllItems() {
      for (var i = 0; i < this._currentToggleItemObjectsArray.length; i++) {
        if (!this._openStatus) {
          this._currentToggleItemObjectsArray[i].openText();
          this._toggleAllElement.classList.add('is-open');
        } else {
          this._currentToggleItemObjectsArray[i].closeText();
          this._toggleAllElement.classList.remove('is-open');
        }
      }
      this._openStatus = !this._openStatus;
    }
  }]);

  return ToggleContainerItem;
}();

exports.default = ToggleContainerItem;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var toggleItemsContentSelector = '.js-toggle-text__content';
var toggleSelector = '.js-toggle-text__trigger';

var ToggleItemResize = function () {
  function ToggleItemResize(toggleItems) {
    _classCallCheck(this, ToggleItemResize);

    this.contentElement = (0, _jquery2.default)(toggleItemsContentSelector, toggleItems);
    this.toggleElement = (0, _jquery2.default)(toggleSelector, toggleItems);

    this.init();
  }

  _createClass(ToggleItemResize, [{
    key: 'init',
    value: function init() {
      this.hideShortText();
      window.addEventListener('resize', this.hideShortText.bind(this));
    }
  }, {
    key: 'hideShortText',
    value: function hideShortText() {
      var line = this.countLine(this.contentElement);

      if (line <= 2) {
        this.toggleElement.hide();
      } else {
        this.toggleElement.show();
      }
    }
  }, {
    key: 'countLine',
    value: function countLine(contentElement) {
      var maxHeight = contentElement.css('max-height');
      var height = contentElement.prop('scrollHeight');
      var lineHeigth = contentElement.css('line-height');

      return height / Number(lineHeigth.replace('px', ''));
    }
  }]);

  return ToggleItemResize;
}();

exports.default = ToggleItemResize;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var buttonSelector = '.js-toggle-text__trigger';
var infoToShowSelector = '.js-toggle-text__content';

var ToggleItem = function () {
  function ToggleItem(element, maxHeight) {
    _classCallCheck(this, ToggleItem);

    this._element = element;
    this._maxHeight = maxHeight;
    this.toggleText = this.toggleText.bind(this);

    this.init();
  }

  _createClass(ToggleItem, [{
    key: 'init',
    value: function init() {
      this._linkElement = this._element.querySelector(buttonSelector);
      this._linkElement.classList.remove('is-open');
      this._linkElement.addEventListener('click', this.toggleText);
      this._infoToShow = this._element.querySelector(infoToShowSelector);
      this._infoToShow.style.maxHeight = this._maxHeight + 'px';
    }
  }, {
    key: 'toggleText',
    value: function toggleText() {
      if (!this._infoToShow.style.maxHeight || this._infoToShow.style.maxHeight === this._maxHeight + 'px') {
        this.openText();
      } else {
        this.closeText();
      }
    }
  }, {
    key: 'openText',
    value: function openText() {
      var elementHeight = Math.round(this._infoToShow.scrollHeight);
      this._infoToShow.style.maxHeight = elementHeight + 'px';
      this._linkElement.classList.add('is-open');
    }
  }, {
    key: 'closeText',
    value: function closeText() {
      this._infoToShow.style.maxHeight = this._maxHeight + 'px';
      this._linkElement.classList.remove('is-open');
    }
  }]);

  return ToggleItem;
}();

exports.default = ToggleItem;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}(); /*
     * js-tooltip-adaptable     - for auto position adaptable on tooltip
     * js-tooltip-fix-overflow  - fix overflow issue on tooltip when use with table.
     */

var _breakpoint = __webpack_require__(50);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(12);

var _tooltipInbound = __webpack_require__(233);

var _tooltipInbound2 = _interopRequireDefault(_tooltipInbound);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var tooltipLinkClass = '.js-toggle-tooltip__link';
var tooltipClass = '.c-tooltip__item';
var closeToolTipClass = '.js-tooltip-close';
var toggleIconClass = '.js-toggle-icon';
var tooltipAdaptableClass = 'js-tooltip-adaptable';
var tooltipFixOverflow = 'js-tooltip-fix-overflow';

var TooltipContainer = function () {
  function TooltipContainer(element, index) {
    _classCallCheck(this, TooltipContainer);

    this._element = element;
    this.index = index;
    this.positionClasses = { top: 'c-tooltip--top', left: 'c-tooltip--left', right: 'c-tooltip--right', bottom: false };
    this.init();
  }

  _createClass(TooltipContainer, [{
    key: 'init',
    value: function init() {
      this.breakpoint = new _breakpoint2.default();

      this._toggleTooltipLink = this._element.querySelector(tooltipLinkClass);
      this._tooltip = this._element.querySelector(tooltipClass);

      // Check for type of tooltip
      this.isAdaptableTooltip = this._element.classList.contains(tooltipAdaptableClass);
      this.isOverflowFixTooltip = this._element.classList.contains(tooltipFixOverflow);
      this.isEditableTooltip = this._tooltip.classList.contains('c-tooltip__item--editable');
      this.initPosition = this.currentPosition;

      // Clone tooltip to the body and change reference of _tooltip to the clone
      // Add DOM Observer incase this is inside smooth scroll
      if (this.isOverflowFixTooltip) {
        this.cloneToBody();
        this.addObserver('.scroll-content');
      }

      this._closeTooltip = this._tooltip.querySelector(closeToolTipClass);
      this.$toggleIcon = (0, _jquery2.default)(toggleIconClass, (0, _jquery2.default)(this._toggleTooltipLink).parent());

      if (this.isEditableTooltip) {
        this.toggleTooltip = this.toggleEditableTooltip.bind(this);
      } else {
        this.toggleTooltip = this.toggleTooltip.bind(this);
      }

      if (this.isAdaptableTooltip) {
        this.tooltipInbound = new _tooltipInbound2.default(this._tooltip);
        this.findPosition();
      }

      document.addEventListener('click', this.toggleTooltip, true);
      document.addEventListener('keydown', this.toggleTooltip);
      window.addEventListener('resize', (0, _lodash.debounce)(this.handleResizeEvent.bind(this)));
    }

    // Clone popup tooltip the body of document and change reference of _tooltip to clone element

  }, {
    key: 'cloneToBody',
    value: function cloneToBody() {
      var body = document.querySelector('body');
      var tooltipClone = this._tooltip.cloneNode(true);

      this._tooltipOriginal = this._tooltip;
      this._tooltip = tooltipClone;

      this._cloneContainer = document.createElement('div');
      this._cloneContainer.appendChild(tooltipClone);

      body.appendChild(this._cloneContainer);
      this.updateCloneContainerClassList();
      this.clonePositionAdjust();
    }

    // Adjust position of clone container to match with original container

  }, {
    key: 'clonePositionAdjust',
    value: function clonePositionAdjust() {
      var boundingClientRect = this._element.getBoundingClientRect();
      var tooltipElHeight = this._cloneContainer.querySelector('.c-tooltip__item').offsetHeight + 24;
      var calculatedSpaceBelow = window.innerHeight - boundingClientRect.bottom;

      this._cloneContainer.style.width = boundingClientRect.width + 'px';
      this._cloneContainer.style.height = boundingClientRect.height + 'px';
      this._cloneContainer.style.top = boundingClientRect.top + window.pageYOffset + 'px';

      // Update Position
      if (!this.breakpoint.isMobile()) {
        this._cloneContainer.style.left = boundingClientRect.left + window.pageXOffset + 'px';
      } else {
        this._cloneContainer.style.left = '50%';
        if (tooltipElHeight > calculatedSpaceBelow) {
          this.setPosition(this.positionClasses.top);
        } else {
          this.setPosition(false);
        }
      }
      this.updateCloneContainerClassList();
    }

    // Sync class of original container to the clone one

  }, {
    key: 'updateCloneContainerClassList',
    value: function updateCloneContainerClassList() {
      var classList = this._element.classList;
      var elementClassList = [];

      for (var i = 0; i < classList.length; i++) {
        var className = classList[i];
        elementClassList.push(className);
      }

      var stringClassList = elementClassList.join(" ");
      this._cloneContainer.className = stringClassList;
      this._cloneContainer.classList.add('c-tooltip--clone');
    }
  }, {
    key: 'handleResizeEvent',
    value: function handleResizeEvent() {
      if (this.isAdaptableTooltip) {
        this.findPosition();
      }

      if (this.isOverflowFixTooltip) {
        this.clonePositionAdjust();
      }
    }
  }, {
    key: 'toggleTooltip',
    value: function toggleTooltip(e) {
      var keyCode = e.keyCode;
      var matchedKeys = keyCode === 32 || keyCode === 13 || keyCode === undefined || keyCode === 0;
      this.openTooltip(e, matchedKeys);

      if (this.isOverflowFixTooltip) {
        this.updateCloneContainerClassList();
        setTimeout(this.findPosition.bind(this), 250); // recalculate position after open transition time is 0.25sec
      }
    }
  }, {
    key: 'toggleEditableTooltip',
    value: function toggleEditableTooltip(e) {
      var keyCode = e.keyCode;
      var matchedKeys = keyCode >= 48 || keyCode === 32 || keyCode === 13 || keyCode === 16 || keyCode === 8 || keyCode === undefined || keyCode === 0;
      this.openTooltip(e, matchedKeys);

      if (this.isOverflowFixTooltip) {
        this.updateCloneContainerClassList();
        this.findPosition();
      }
    }
  }, {
    key: 'openTooltip',
    value: function openTooltip(e, matchedKeys) {
      var keyCode = e.keyCode;
      var tabKey = keyCode === 9;
      var isTooltipEl = e.target === this._toggleTooltipLink;
      var isCloseTooltip = e.target == this._closeTooltip;

      if (!isTooltipEl) {
        isTooltipEl = (0, _jquery2.default)(e.target).closest(tooltipLinkClass)[0] === this._toggleTooltipLink;
      }

      if (!isCloseTooltip) {
        isCloseTooltip = (0, _jquery2.default)(e.target).closest(closeToolTipClass)[0] === this._closeTooltip;
      }

      if (isTooltipEl) {
        e.stopPropagation();
      }

      if (isTooltipEl && matchedKeys) {
        if (this.isAdaptableTooltip && !this._tooltip.classList.contains('is-open')) {
          this.findPosition();
        }

        if (this.isOverflowFixTooltip) {
          this.clonePositionAdjust();
        }

        var ariaHidden = this._tooltip.getAttribute('aria-hidden') === 'false' ? 'true' : 'false';
        this._tooltip.classList.toggle('is-open');
        this._element.classList.toggle('is-open');

        this._toggleTooltipLink.classList.toggle('has-open-tooltip');
        this._tooltip.setAttribute('aria-hidden', ariaHidden);

        e.preventDefault();

        if (this.$toggleIcon.hasClass('c-icon--info-circle')) {
          this.$toggleIcon.removeClass('c-icon--info-circle');
          this.$toggleIcon.addClass('c-icon--info-circle-o');
        } else if (this.$toggleIcon.hasClass('c-icon--info-circle-o')) {
          this.$toggleIcon.removeClass('c-icon--info-circle-o');
          this.$toggleIcon.addClass('c-icon--info-circle');
        }
      } else if ((e.target === this._tooltip || this._tooltip.contains(e.target)) && (matchedKeys || tabKey)) {
        e.stopPropagation();
      } else {
        this.closeTooltip();
      }

      if (isCloseTooltip) {
        this.closeTooltip();
      }
    }
  }, {
    key: 'closeTooltip',
    value: function closeTooltip() {
      if (this._tooltip.classList.contains('is-open')) {
        this._tooltip.classList.remove('is-open');
        this._element.classList.remove('is-open');
        this._toggleTooltipLink.classList.remove('has-open-tooltip');

        this._tooltip.setAttribute('aria-hidden', 'true');

        this.$toggleIcon.removeClass('c-icon--info-circle');
        this.$toggleIcon.addClass('c-icon--info-circle-o');
      }
    }
  }, {
    key: 'findPosition',
    value: function findPosition() {
      var possibleFallback = this.tooltipInbound.getPossibleFallback();

      if (possibleFallback[this.initPosition] === true) {
        this.setPosition(this.positionClasses[this.initPosition]);
      } else {
        this.setPosition(this.getFallBackClass());
      }
    }
  }, {
    key: 'getFallBackClass',
    value: function getFallBackClass() {
      var possibleFallback = this.tooltipInbound.getPossibleFallback();

      if (possibleFallback.bottom) {
        return this.positionClasses.bottom;
      }

      for (var key in possibleFallback) {
        if (possibleFallback.hasOwnProperty(key)) {
          if (possibleFallback[key] == true) {
            return this.positionClasses[key];
          }
        }
      }
    }
  }, {
    key: 'setPosition',
    value: function setPosition(positionClass) {
      this.removeAllPosition();
      if (positionClass) this._element.classList.add(positionClass);
    }
  }, {
    key: 'removeAllPosition',
    value: function removeAllPosition() {
      for (var key in this.positionClasses) {
        if (this.positionClasses.hasOwnProperty(key)) {
          this._element.classList.remove(this.positionClasses[key]);
        }
      }
    }
  }, {
    key: 'addObserver',
    value: function addObserver(selector) {
      var observeElement = this._element.closest(selector);
      if (observeElement) {
        var observer = new MutationObserver((0, _lodash.debounce)(this.clonePositionAdjust.bind(this)));
        observer.observe(observeElement, { attributes: true, childList: true, subtree: true });
      }
    }
  }, {
    key: 'currentPosition',
    get: function get() {
      var positionClass = this._element.classList.contains(this.positionClasses.top) ? 'top' : false;
      positionClass = this._element.classList.contains(this.positionClasses.left) && !positionClass ? 'left' : positionClass;
      positionClass = this._element.classList.contains(this.positionClasses.right) && !positionClass ? 'right' : positionClass;

      if (positionClass) {
        return positionClass;
      } else {
        return 'bottom';
      }
    }
  }]);

  return TooltipContainer;
}();

exports.default = TooltipContainer;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var TooltipInBound = function () {
    function TooltipInBound(element) {
        _classCallCheck(this, TooltipInBound);

        this._tooltipSpacing = 16;

        if (element) {
            this._element = element;
            this.init();
        }
    }

    _createClass(TooltipInBound, [{
        key: "init",
        value: function init() {
            this.top = this._element.offsetTop;
            this.left = this._element.offsetLeft;
            this.width = this._element.offsetWidth;
            this.height = this._element.offsetHeight;

            this.tooltipOffset = this._element.getBoundingClientRect();
            this.parentOffset = this._element.offsetParent.getBoundingClientRect();
        }
    }, {
        key: "getPossibleFallback",
        value: function getPossibleFallback() {
            var _this = this;

            this.init();

            var topCase = function topCase() {
                return _this.topSpace > _this.height + _this._tooltipSpacing && document.documentElement.clientWidth > _this.width && _this.leftSpace + _this.parentOffset.width / 2 > _this.width / 2 && _this.rightSpace + _this.parentOffset.width / 2 > _this.width / 2;
            };

            var bottomCase = function bottomCase() {
                return _this.bottomSpace > _this.height + _this._tooltipSpacing && document.documentElement.clientWidth > _this.width && _this.leftSpace + _this.parentOffset.width / 2 > _this.width / 2 && _this.rightSpace + _this.parentOffset.width / 2 > _this.width / 2;
            };

            var leftCase = function leftCase() {
                return _this.leftSpace > _this.width + _this._tooltipSpacing && document.documentElement.clientHeight > _this.height && _this.bottomSpace > _this.height / 2 && _this.topSpace > _this.height / 2;
            };

            var rightCase = function rightCase() {
                return _this.rightSpace > _this.width + _this._tooltipSpacing && document.documentElement.clientHeight > _this.height && _this.bottomSpace > _this.height / 2 && _this.topSpace > _this.height / 2;
            };

            var possibleFallback = {
                top: topCase(),
                bottom: bottomCase(),
                left: leftCase(),
                right: rightCase()
            };

            return possibleFallback;
        }
    }, {
        key: "topSpace",
        get: function get() {
            return this.parentOffset.top;
        }
    }, {
        key: "bottomSpace",
        get: function get() {
            return document.documentElement.clientHeight - this.parentOffset.top - this.parentOffset.height;
        }
    }, {
        key: "leftSpace",
        get: function get() {
            return this.parentOffset.left;
        }
    }, {
        key: "rightSpace",
        get: function get() {
            return document.documentElement.clientWidth - (this.parentOffset.left + this.parentOffset.width);
        }
    }]);

    return TooltipInBound;
}();

exports.default = TooltipInBound;

/***/ }),
/* 234 */,
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
// TODO file need to refactor
var $ = __webpack_require__(1);
var breakpoint_1 = __webpack_require__(50);
var smallModifierFormClass = 'c-natural-language-form--small';
var TextFieldSel = '.js-natural-form-text-field-handler';
var NaturalFormSel = '.js-natural-form-selector-handler';
var SubmitSel = '.js-natural-form-submit-handler';
var JsNaturalFormTextFieldClass = 'js-natural-form-text-field-handler';
var shortTextFieldClass = 'c-natural-language-form__form-body__text-field--short';
var mediumTextFieldClass = 'c-natural-language-form__form-body__text-field--medium';
var filedDefaultSize = {
    'long': { desktop: '160', tablet: '160', mobile: '120' },
    'medium': { desktop: '120', tablet: '120', mobile: '80' },
    'short': { desktop: '80', tablet: '80', mobile: '60' }
};
// For natural language form small modifier
var filedSmallSize = {
    'long': { desktop: '120', tablet: '120', mobile: '120' },
    'medium': { desktop: '80', tablet: '80', mobile: '80' },
    'short': { desktop: '60', tablet: '60', mobile: '60' }
};

var NaturalFormHandleEvent = function () {
    function NaturalFormHandleEvent(element) {
        _classCallCheck(this, NaturalFormHandleEvent);

        this.$elem = $(element);
        this.$TextField = this.$elem.find(TextFieldSel);
        this.$NaturalForm = this.$elem.find(NaturalFormSel);
        this.init();
    }

    _createClass(NaturalFormHandleEvent, [{
        key: "init",
        value: function init() {
            var breakpoint = new breakpoint_1.default();
            var inputLength = [2, 3, 4, 3];
            var hasSmallModifierClass = this.$elem.hasClass(smallModifierFormClass);
            var self = this;
            this.$TextField.each(function (index) {
                var initialWidth = $(this).innerWidth();
                var filedType = $(this).hasClass(shortTextFieldClass) ? 'short' : $(this).hasClass(mediumTextFieldClass) ? 'medium' : 'long';
                $(this).parent().append("<span id=" + index + " class='c-natural-language-span'></span>");
                $(this).on('keyup', setTextFieldsWidth);
                function setTextFieldsWidth(e) {
                    var minWidth = hasSmallModifierClass ? filedSmallSize[filedType][breakpoint.getScreenType()] : filedDefaultSize[filedType][breakpoint.getScreenType()];
                    var $input = $(e.target);
                    var state = $input.val() !== '';
                    var width = initialWidth;
                    var inputText = $input.val();
                    //  Active text field handling
                    if (!$(this).hasClass('c-natural-language-form__form-body__text-field--negative')) {
                        $(this).toggleClass('c-natural-language-form__form-body__text-field--active', state);
                    }
                    if ($input.val().length > inputLength[index]) {
                        var spanElem = $(this).parent().children('span#' + index + '');
                        spanElem.html(inputText);
                        width = spanElem.innerWidth();
                    } else {
                        width = initialWidth;
                    }
                    if (width >= minWidth) $(this).width(width);
                }
            });
            //  Selector handling
            this.$NaturalForm.on('click', function (e) {
                if ($(this).data('value') !== undefined) {
                    if (!$(this).hasClass("c-natural-language-form__form-body__selector--negative")) {
                        $(this).addClass("c-natural-language-form__form-body__selector--active");
                    }
                }
            });
        }
    }]);

    return NaturalFormHandleEvent;
}();

exports.default = NaturalFormHandleEvent;

/***/ }),
/* 236 */,
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(149);
module.exports = __webpack_require__(9).Array.from;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
__webpack_require__(76);
__webpack_require__(77);
__webpack_require__(110);
__webpack_require__(154);
__webpack_require__(153);
__webpack_require__(152);
module.exports = __webpack_require__(9).Map;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(150);
module.exports = __webpack_require__(9).Object.assign;


/***/ }),
/* 240 */,
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
__webpack_require__(76);
__webpack_require__(77);
__webpack_require__(111);
__webpack_require__(157);
__webpack_require__(156);
__webpack_require__(155);
module.exports = __webpack_require__(9).Set;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
__webpack_require__(77);
__webpack_require__(112);
__webpack_require__(159);
__webpack_require__(158);
module.exports = __webpack_require__(9).WeakMap;


/***/ }),
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

/* harmony default export */ __webpack_exports__["a"] = baseClamp;


/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(443);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = baseGetTag;


/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(54)))

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(161);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = getRawTag;


/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = objectToString;


/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = isObjectLike;


/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(444);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["a"] = isSymbol;


/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(162);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Date.now();
};

/* harmony default export */ __webpack_exports__["a"] = now;


/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = boolean;
function boolean(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
        get: function () {
            return this[alias];
        },
        set: function (val) {
            Object.defineProperty(this, alias, {
                value: !!val,
                enumerable: false,
                writable: true,
                configurable: true,
            });
        },
        enumerable: true,
        configurable: true,
    });
}
//# sourceMappingURL=boolean.js.map

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_debounce__ = __webpack_require__(163);
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;

function debounce() {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    return function (_proto, key, descriptor) {
        var fn = descriptor.value;
        return {
            get: function () {
                if (!this.hasOwnProperty(key)) {
                    Object.defineProperty(this, key, {
                        value: __WEBPACK_IMPORTED_MODULE_0_lodash_es_debounce__["a" /* default */].apply(void 0, [fn].concat(options)),
                    });
                }
                return this[key];
            },
        };
    };
}
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__ = __webpack_require__(48);
/* harmony export (immutable) */ __webpack_exports__["a"] = range;

function range(min, max) {
    if (min === void 0) { min = -Infinity; }
    if (max === void 0) { max = Infinity; }
    return function (proto, key) {
        var alias = "_" + key;
        Object.defineProperty(proto, key, {
            get: function () {
                return this[alias];
            },
            set: function (val) {
                Object.defineProperty(this, alias, {
                    value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__["a" /* default */])(val, min, max),
                    enumerable: false,
                    writable: true,
                    configurable: true,
                });
            },
            enumerable: true,
            configurable: true,
        });
    };
}
//# sourceMappingURL=range.js.map

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keyboard__ = __webpack_require__(451);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "keyboardHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__keyboard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mouse__ = __webpack_require__(452);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mouseHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize__ = __webpack_require__(453);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "resizeHandler", function() { return __WEBPACK_IMPORTED_MODULE_2__resize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select__ = __webpack_require__(454);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selectHandler", function() { return __WEBPACK_IMPORTED_MODULE_3__select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__touch__ = __webpack_require__(455);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "touchHandler", function() { return __WEBPACK_IMPORTED_MODULE_4__touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wheel__ = __webpack_require__(456);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wheelHandler", function() { return __WEBPACK_IMPORTED_MODULE_5__wheel__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___ = __webpack_require__(29);
/* harmony export (immutable) */ __webpack_exports__["a"] = keyboardHandler;

var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["SPACE"] = 32] = "SPACE";
    KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
    KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    KEY_CODE[KEY_CODE["END"] = 35] = "END";
    KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
    KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
    KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
    KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
    KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));
function keyboardHandler(scrollbar) {
    var addEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils___["c" /* eventScope */])(scrollbar);
    var container = scrollbar.containerEl;
    addEvent(container, 'keydown', function (evt) {
        if (document.activeElement !== container) {
            return;
        }
        var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
        if (!delta) {
            return;
        }
        var x = delta[0], y = delta[1];
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
            }
            else {
                scrollbar.containerEl.blur();
                if (scrollbar.parent) {
                    scrollbar.parent.containerEl.focus();
                }
            }
        });
    });
}
function getKeyDelta(scrollbar, keyCode) {
    var size = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    switch (keyCode) {
        case KEY_CODE.SPACE:
            return [0, 200];
        case KEY_CODE.PAGE_UP:
            return [0, -size.container.height + 40];
        case KEY_CODE.PAGE_DOWN:
            return [0, size.container.height - 40];
        case KEY_CODE.END:
            return [0, limit.y - offset.y];
        case KEY_CODE.HOME:
            return [0, -offset.y];
        case KEY_CODE.LEFT:
            return [-40, 0];
        case KEY_CODE.UP:
            return [0, -40];
        case KEY_CODE.RIGHT:
            return [40, 0];
        case KEY_CODE.DOWN:
            return [0, 40];
        default:
            return null;
    }
}
//# sourceMappingURL=keyboard.js.map

/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___ = __webpack_require__(29);
/* harmony export (immutable) */ __webpack_exports__["a"] = mouseHandler;


var Direction;
(function (Direction) {
    Direction[Direction["X"] = 0] = "X";
    Direction[Direction["Y"] = 1] = "Y";
})(Direction || (Direction = {}));
function mouseHandler(scrollbar) {
    var addEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["c" /* eventScope */])(scrollbar);
    var container = scrollbar.containerEl;
    var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
    function calcOffset(direction, clickPosition) {
        var size = scrollbar.size;
        if (direction === Direction.X) {
            var totalWidth = size.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
            return clickPosition / totalWidth * size.content.width;
        }
        if (direction === Direction.Y) {
            var totalHeight = size.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
            return clickPosition / totalHeight * size.content.height;
        }
        return 0;
    }
    function getTrackDirection(elem) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["f" /* isOneOf */])(elem, [xAxis.element, xAxis.thumb.element])) {
            return Direction.X;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["f" /* isOneOf */])(elem, [yAxis.element, yAxis.thumb.element])) {
            return Direction.Y;
        }
        return void 0;
    }
    var isMouseDown;
    var isMouseMoving;
    var startOffsetToThumb;
    var startTrackDirection;
    var containerRect;
    addEvent(container, 'click', function (evt) {
        if (isMouseMoving || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["f" /* isOneOf */])(evt.target, [xAxis.element, yAxis.element])) {
            return;
        }
        var track = evt.target;
        var direction = getTrackDirection(track);
        var rect = track.getBoundingClientRect();
        var clickPos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["e" /* getPosition */])(evt);
        var offset = scrollbar.offset, limit = scrollbar.limit;
        if (direction === Direction.X) {
            var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__["a" /* default */])(calcOffset(direction, offsetOnTrack) - offset.x, -offset.x, limit.x - offset.x), 0);
        }
        if (direction === Direction.Y) {
            var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
            scrollbar.setMomentum(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__["a" /* default */])(calcOffset(direction, offsetOnTrack) - offset.y, -offset.y, limit.y - offset.y));
        }
    });
    addEvent(container, 'mousedown', function (evt) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["f" /* isOneOf */])(evt.target, [xAxis.thumb.element, yAxis.thumb.element])) {
            return;
        }
        isMouseDown = true;
        var thumb = evt.target;
        var cursorPos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["e" /* getPosition */])(evt);
        var thumbRect = thumb.getBoundingClientRect();
        startTrackDirection = getTrackDirection(thumb);
        // pointer offset to thumb
        startOffsetToThumb = {
            x: cursorPos.x - thumbRect.left,
            y: cursorPos.y - thumbRect.top,
        };
        // container bounding rectangle
        containerRect = container.getBoundingClientRect();
        // prevent selection, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/48
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["a" /* setStyle */])(scrollbar.containerEl, {
            '-user-select': 'none',
        });
    });
    addEvent(window, 'mousemove', function (evt) {
        if (!isMouseDown)
            return;
        isMouseMoving = true;
        var offset = scrollbar.offset;
        var cursorPos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["e" /* getPosition */])(evt);
        if (startTrackDirection === Direction.X) {
            // get percentage of pointer position in track
            // then tranform to px
            // don't need easing
            var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
            scrollbar.setPosition(calcOffset(startTrackDirection, offsetOnTrack), offset.y);
        }
        if (startTrackDirection === Direction.Y) {
            var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
            scrollbar.setPosition(offset.x, calcOffset(startTrackDirection, offsetOnTrack));
        }
    });
    addEvent(window, 'mouseup blur', function () {
        isMouseDown = isMouseMoving = false;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["a" /* setStyle */])(scrollbar.containerEl, {
            '-user-select': '',
        });
    });
}
//# sourceMappingURL=mouse.js.map

/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_debounce__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___ = __webpack_require__(29);
/* harmony export (immutable) */ __webpack_exports__["a"] = resizeHandler;


function resizeHandler(scrollbar) {
    var addEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["c" /* eventScope */])(scrollbar);
    addEvent(window, 'resize', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_debounce__["a" /* default */])(scrollbar.update.bind(scrollbar), 300));
}
//# sourceMappingURL=resize.js.map

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___ = __webpack_require__(29);
/* harmony export (immutable) */ __webpack_exports__["a"] = selectHandler;


function selectHandler(scrollbar) {
    var addEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["c" /* eventScope */])(scrollbar);
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl, offset = scrollbar.offset, limit = scrollbar.limit;
    var isSelected = false;
    var animationID;
    function scroll(_a) {
        var x = _a.x, y = _a.y;
        if (!x && !y)
            return;
        // DISALLOW delta transformation
        scrollbar.setMomentum(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__["a" /* default */])(offset.x + x, 0, limit.x) - offset.x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__["a" /* default */])(offset.y + y, 0, limit.y) - offset.y);
        animationID = requestAnimationFrame(function () {
            scroll({ x: x, y: y });
        });
    }
    addEvent(window, 'mousemove', function (evt) {
        if (!isSelected)
            return;
        cancelAnimationFrame(animationID);
        var dir = calcMomentum(scrollbar, evt);
        scroll(dir);
    });
    addEvent(contentEl, 'selectstart', function (evt) {
        evt.stopPropagation();
        cancelAnimationFrame(animationID);
        isSelected = true;
    });
    addEvent(window, 'mouseup blur', function () {
        cancelAnimationFrame(animationID);
        isSelected = false;
    });
    // patch for touch devices
    addEvent(containerEl, 'scroll', function (evt) {
        evt.preventDefault();
        containerEl.scrollTop = containerEl.scrollLeft = 0;
    });
}
function calcMomentum(scrollbar, evt) {
    var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
    var _b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["e" /* getPosition */])(evt), x = _b.x, y = _b.y;
    var res = {
        x: 0,
        y: 0,
    };
    var padding = 20;
    if (x === 0 && y === 0)
        return res;
    if (x > right - padding) {
        res.x = (x - right + padding);
    }
    else if (x < left + padding) {
        res.x = (x - left - padding);
    }
    if (y > bottom - padding) {
        res.y = (y - bottom + padding);
    }
    else if (y < top + padding) {
        res.y = (y - top - padding);
    }
    res.x *= 2;
    res.y *= 2;
    return res;
}
//# sourceMappingURL=select.js.map

/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___ = __webpack_require__(29);
/* harmony export (immutable) */ __webpack_exports__["a"] = touchHandler;

var activeScrollbar;
function touchHandler(scrollbar) {
    var MIN_EAING_MOMENTUM = 50;
    var EASING_MULTIPLIER = /Android/.test(navigator.userAgent) ? 3 : 2;
    var container = scrollbar.containerEl;
    var touchRecord = new __WEBPACK_IMPORTED_MODULE_0__utils___["d" /* TouchRecord */]();
    var addEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils___["c" /* eventScope */])(scrollbar);
    var damping;
    var pointerCount = 0;
    addEvent(container, 'touchstart', function (evt) {
        // start records
        touchRecord.track(evt);
        // stop scrolling
        scrollbar.setMomentum(0, 0);
        // save damping
        if (pointerCount === 0) {
            damping = scrollbar.options.damping;
            scrollbar.options.damping = Math.max(damping, 0.5); // less frames on touchmove
        }
        pointerCount++;
    });
    addEvent(container, 'touchmove', function (evt) {
        if (activeScrollbar && activeScrollbar !== scrollbar)
            return;
        touchRecord.update(evt);
        var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
                activeScrollbar = scrollbar;
            }
        });
    });
    addEvent(container, 'touchcancel touchend', function (evt) {
        var velocity = touchRecord.getVelocity();
        var momentum = { x: 0, y: 0 };
        Object.keys(velocity).forEach(function (dir) {
            var s = velocity[dir] / damping;
            // throw small values
            momentum[dir] = Math.abs(s) < MIN_EAING_MOMENTUM ? 0 : s * EASING_MULTIPLIER;
        });
        scrollbar.addTransformableMomentum(momentum.x, momentum.y, evt);
        pointerCount--;
        // restore damping
        if (pointerCount === 0) {
            scrollbar.options.damping = damping;
        }
        touchRecord.release(evt);
        activeScrollbar = null;
    });
}
//# sourceMappingURL=touch.js.map

/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___ = __webpack_require__(29);
/* harmony export (immutable) */ __webpack_exports__["a"] = wheelHandler;

function wheelHandler(scrollbar) {
    var addEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils___["c" /* eventScope */])(scrollbar);
    var target = scrollbar.options.wheelEventTarget || scrollbar.containerEl;
    var eventName = ('onwheel' in window || document.implementation.hasFeature('Events.wheel', '3.0')) ? 'wheel' : 'mousewheel';
    addEvent(target, eventName, function (evt) {
        var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
        scrollbar.addTransformableMomentum(x, y, evt, function (willScroll) {
            if (willScroll) {
                evt.preventDefault();
            }
        });
    });
}
// Normalizing wheel delta
var DELTA_SCALE = {
    STANDARD: 1,
    OTHERS: -3,
};
var DELTA_MODE = [1.0, 28.0, 500.0];
var getDeltaMode = function (mode) { return DELTA_MODE[mode] || DELTA_MODE[0]; };
function normalizeDelta(evt) {
    if ('deltaX' in evt) {
        var mode = getDeltaMode(evt.deltaMode);
        return {
            x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
            y: evt.deltaY / DELTA_SCALE.STANDARD * mode,
        };
    }
    if ('wheelDeltaX' in evt) {
        return {
            x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
            y: evt.wheelDeltaY / DELTA_SCALE.OTHERS,
        };
    }
    // ie with touchpad
    return {
        x: 0,
        y: evt.wheelDelta / DELTA_SCALE.OTHERS,
    };
}
//# sourceMappingURL=wheel.js.map

/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSize;
function getSize(scrollbar) {
    var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
    return {
        container: {
            // requires `overflow: hidden`
            width: containerEl.clientWidth,
            height: containerEl.clientHeight,
        },
        content: {
            // border width should be included
            width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth,
            height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight,
        },
    };
}
//# sourceMappingURL=get-size.js.map

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_size__ = __webpack_require__(457);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__get_size__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_visible__ = __webpack_require__(459);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__is_visible__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update__ = __webpack_require__(460);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__update__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isVisible;
function isVisible(scrollbar, elem) {
    var bounding = scrollbar.bounding;
    var targetBounding = elem.getBoundingClientRect();
    // check overlapping
    var top = Math.max(bounding.top, targetBounding.top);
    var left = Math.max(bounding.left, targetBounding.left);
    var right = Math.min(bounding.right, targetBounding.right);
    var bottom = Math.min(bounding.bottom, targetBounding.bottom);
    return top < bottom && left < right;
}
//# sourceMappingURL=is-visible.js.map

/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = update;
function update(scrollbar) {
    var newSize = scrollbar.getSize();
    var limit = {
        x: Math.max(newSize.content.width - newSize.container.width, 0),
        y: Math.max(newSize.content.height - newSize.container.height, 0),
    };
    // metrics
    var containerBounding = scrollbar.containerEl.getBoundingClientRect();
    var bounding = {
        top: Math.max(containerBounding.top, 0),
        right: Math.min(containerBounding.right, window.innerWidth),
        bottom: Math.min(containerBounding.bottom, window.innerHeight),
        left: Math.max(containerBounding.left, 0),
    };
    // assign props
    scrollbar.size = newSize;
    scrollbar.limit = limit;
    scrollbar.bounding = bounding;
    // update tracks
    scrollbar.track.update();
    // re-positioning
    scrollbar.setPosition();
}
//# sourceMappingURL=update.js.map

/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorators___ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Options; });


var Options = /** @class */ (function () {
    function Options(config) {
        if (config === void 0) { config = {}; }
        var _this = this;
        /**
         * Momentum reduction damping factor, a float value between `(0, 1)`.
         * The lower the value is, the more smooth the scrolling will be
         * (also the more paint frames).
         */
        this.damping = 0.1;
        /**
         * Minimal size for scrollbar thumbs.
         */
        this.thumbMinSize = 20;
        /**
         * Render every frame in integer pixel values
         * set to `true` to improve scrolling performance.
         */
        this.renderByPixels = true;
        /**
         * Keep scrollbar tracks visible
         */
        this.alwaysShowTracks = false;
        /**
         * Set to `true` to allow outer scrollbars continue scrolling
         * when current scrollbar reaches edge.
         */
        this.continuousScrolling = true;
        /**
         * Element to be used as a listener for mouse wheel scroll events.
         * By default, the container element is used.
         * This option will be useful for dealing with fixed elements.
         */
        this.wheelEventTarget = null;
        /**
         * Options for plugins. Syntax:
         *   plugins[pluginName] = pluginOptions: any
         */
        this.plugins = {};
        Object.keys(config).forEach(function (prop) {
            _this[prop] = config[prop];
        });
    }
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__decorators___["b" /* range */])(0, 1)
    ], Options.prototype, "damping", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__decorators___["b" /* range */])(0, Infinity)
    ], Options.prototype, "thumbMinSize", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1__decorators___["c" /* boolean */]
    ], Options.prototype, "renderByPixels", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1__decorators___["c" /* boolean */]
    ], Options.prototype, "alwaysShowTracks", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_1__decorators___["c" /* boolean */]
    ], Options.prototype, "continuousScrolling", void 0);
    return Options;
}());

//# sourceMappingURL=options.js.map

/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_map__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_fn_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_fn_set__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_fn_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_fn_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_fn_weak_map__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_fn_weak_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_fn_weak_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_fn_array_from__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_fn_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_fn_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_fn_object_assign__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_fn_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_fn_object_assign__);





//# sourceMappingURL=polyfills.js.map

/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_clamp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils___ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__decorators___ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__track___ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geometry___ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scrolling___ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plugin__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__events___ = __webpack_require__(450);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrollbarMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Scrollbar; });










// DO NOT use WeakMap here
// .getAll() methods requires `scrollbarMap.values()`
var scrollbarMap = new Map();
var Scrollbar = /** @class */ (function () {
    function Scrollbar(containerEl, options) {
        var _this = this;
        /**
         * Current scrolling offsets
         */
        this.offset = {
            x: 0,
            y: 0,
        };
        /**
         * Max-allowed scrolling offsets
         */
        this.limit = {
            x: Infinity,
            y: Infinity,
        };
        /**
         * Container bounding rect
         */
        this.bounding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };
        this._plugins = [];
        this._momentum = { x: 0, y: 0 };
        this._listeners = new Set();
        this.containerEl = containerEl;
        var contentEl = this.contentEl = document.createElement('div');
        this.options = new __WEBPACK_IMPORTED_MODULE_2__options__["a" /* Options */](options);
        // mark as a scroll element
        containerEl.setAttribute('data-scrollbar', 'true');
        // make container focusable
        containerEl.setAttribute('tabindex', '1');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils___["a" /* setStyle */])(containerEl, {
            overflow: 'hidden',
            outline: 'none',
        });
        // enable touch event capturing in IE, see:
        // https://github.com/idiotWu/smooth-scrollbar/issues/39
        if (window.navigator.msPointerEnabled) {
            containerEl.style.msTouchAction = 'none';
        }
        // mount content
        contentEl.className = 'scroll-content';
        Array.from(containerEl.childNodes).forEach(function (node) {
            contentEl.appendChild(node);
        });
        containerEl.appendChild(contentEl);
        // attach track
        this.track = new __WEBPACK_IMPORTED_MODULE_5__track___["a" /* TrackController */](this);
        // initial measuring
        this.size = this.getSize();
        // init plugins
        this._plugins = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__plugin__["c" /* initPlugins */])(this, this.options.plugins);
        // preserve scroll offset
        var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
        containerEl.scrollLeft = containerEl.scrollTop = 0;
        this.setPosition(scrollLeft, scrollTop, {
            withoutCallbacks: true,
        });
        var global = window;
        var MutationObserver = global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver;
        // observe
        if (typeof MutationObserver === 'function') {
            this._observer = new MutationObserver(function () {
                _this.update();
            });
            this._observer.observe(contentEl, {
                subtree: true,
                childList: true,
            });
        }
        scrollbarMap.set(containerEl, this);
        // wait for DOM ready
        requestAnimationFrame(function () {
            _this._init();
        });
    }
    Object.defineProperty(Scrollbar.prototype, "parent", {
        /**
         * Parent scrollbar
         */
        get: function () {
            var elem = this.containerEl.parentElement;
            while (elem) {
                var parentScrollbar = scrollbarMap.get(elem);
                if (parentScrollbar) {
                    return parentScrollbar;
                }
                elem = elem.parentElement;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollTop", {
        /**
         * Gets or sets `scrollbar.offset.y`
         */
        get: function () {
            return this.offset.y;
        },
        set: function (y) {
            this.setPosition(this.scrollLeft, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "scrollLeft", {
        /**
         * Gets or sets `scrollbar.offset.x`
         */
        get: function () {
            return this.offset.x;
        },
        set: function (x) {
            this.setPosition(x, this.scrollTop);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the size of the scrollbar container element
     * and the content wrapper element
     */
    Scrollbar.prototype.getSize = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__geometry___["a" /* getSize */])(this);
    };
    /**
     * Forces scrollbar to update geometry infomation.
     *
     * By default, scrollbars are automatically updated with `100ms` debounce (or `MutationObserver` fires).
     * You can call this method to force an update when you modified contents
     */
    Scrollbar.prototype.update = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__geometry___["b" /* update */])(this);
        this._plugins.forEach(function (plugin) {
            plugin.onUpdate();
        });
    };
    /**
     * Checks if an element is visible in the current view area
     */
    Scrollbar.prototype.isVisible = function (elem) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__geometry___["c" /* isVisible */])(this, elem);
    };
    /**
     * Sets the scrollbar to the given offset without easing
     */
    Scrollbar.prototype.setPosition = function (x, y, options) {
        var _this = this;
        if (x === void 0) { x = this.offset.x; }
        if (y === void 0) { y = this.offset.y; }
        if (options === void 0) { options = {}; }
        var status = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__scrolling___["a" /* setPosition */])(this, x, y);
        if (!status || options.withoutCallbacks) {
            return;
        }
        this._listeners.forEach(function (fn) {
            fn.call(_this, status);
        });
    };
    /**
     * Scrolls to given position with easing function
     */
    Scrollbar.prototype.scrollTo = function (x, y, duration, options) {
        if (x === void 0) { x = this.offset.x; }
        if (y === void 0) { y = this.offset.y; }
        if (duration === void 0) { duration = 0; }
        if (options === void 0) { options = {}; }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__scrolling___["b" /* scrollTo */])(this, x, y, duration, options);
    };
    /**
     * Scrolls the target element into visible area of scrollbar,
     * likes the DOM method `element.scrollIntoView().
     */
    Scrollbar.prototype.scrollIntoView = function (elem, options) {
        if (options === void 0) { options = {}; }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__scrolling___["c" /* scrollIntoView */])(this, elem, options);
    };
    /**
     * Adds scrolling listener
     */
    Scrollbar.prototype.addListener = function (fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('[smooth-scrollbar] scrolling listener should be a function');
        }
        this._listeners.add(fn);
    };
    /**
     * Removes listener previously registered with `scrollbar.addListener()`
     */
    Scrollbar.prototype.removeListener = function (fn) {
        this._listeners.delete(fn);
    };
    /**
     * Adds momentum and applys delta transformers.
     */
    Scrollbar.prototype.addTransformableMomentum = function (x, y, fromEvent, callback) {
        this._updateDebounced();
        var finalDelta = this._plugins.reduce(function (delta, plugin) {
            return plugin.transformDelta(delta, fromEvent) || delta;
        }, { x: x, y: y });
        var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
        if (willScroll) {
            this.addMomentum(finalDelta.x, finalDelta.y);
        }
        if (callback) {
            callback.call(this, willScroll);
        }
    };
    /**
     * Increases scrollbar's momentum
     */
    Scrollbar.prototype.addMomentum = function (x, y) {
        this.setMomentum(this._momentum.x + x, this._momentum.y + y);
    };
    /**
     * Sets scrollbar's momentum to given value
     */
    Scrollbar.prototype.setMomentum = function (x, y) {
        if (this.limit.x === 0) {
            x = 0;
        }
        if (this.limit.y === 0) {
            y = 0;
        }
        if (this.options.renderByPixels) {
            x = Math.round(x);
            y = Math.round(y);
        }
        this._momentum.x = x;
        this._momentum.y = y;
    };
    /**
     * Update options for specific plugin
     *
     * @param pluginName Name of the plugin
     * @param [options] An object includes the properties that you want to update
     */
    Scrollbar.prototype.updatePluginOptions = function (pluginName, options) {
        this._plugins.forEach(function (plugin) {
            if (plugin.name === pluginName) {
                Object.assign(plugin.options, options);
            }
        });
    };
    Scrollbar.prototype.destroy = function () {
        var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils___["b" /* clearEventsOn */])(this);
        this._listeners.clear();
        this.setMomentum(0, 0);
        cancelAnimationFrame(this._renderID);
        if (this._observer) {
            this._observer.disconnect();
        }
        scrollbarMap.delete(this.containerEl);
        // restore contents
        var childNodes = Array.from(contentEl.childNodes);
        while (containerEl.firstChild) {
            containerEl.removeChild(containerEl.firstChild);
        }
        childNodes.forEach(function (el) {
            containerEl.appendChild(el);
        });
        // reset scroll position
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils___["a" /* setStyle */])(containerEl, {
            overflow: '',
        });
        containerEl.scrollTop = this.scrollTop;
        containerEl.scrollLeft = this.scrollLeft;
        // invoke plugin.onDestory
        this._plugins.forEach(function (plugin) {
            plugin.onDestory();
        });
        this._plugins.length = 0;
    };
    Scrollbar.prototype._init = function () {
        var _this = this;
        this.update();
        // init evet handlers
        Object.keys(__WEBPACK_IMPORTED_MODULE_9__events___).forEach(function (prop) {
            __WEBPACK_IMPORTED_MODULE_9__events___[prop](_this);
        });
        // invoke `plugin.onInit`
        this._plugins.forEach(function (plugin) {
            plugin.onInit();
        });
        this._render();
    };
    Scrollbar.prototype._updateDebounced = function () {
        this.update();
    };
    // check whether to propagate monmentum to parent scrollbar
    // the following situations are considered as `true`:
    //         1. continuous scrolling is enabled (automatically disabled when overscroll is enabled)
    //         2. scrollbar reaches one side and is not about to scroll on the other direction
    Scrollbar.prototype._shouldPropagateMomentum = function (deltaX, deltaY) {
        if (deltaX === void 0) { deltaX = 0; }
        if (deltaY === void 0) { deltaY = 0; }
        var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
        if (!options.continuousScrolling)
            return false;
        // force an update when scrollbar is "unscrollable", see #106
        if (limit.x === 0 && limit.y === 0) {
            this._updateDebounced();
        }
        var destX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_clamp__["a" /* default */])(deltaX + offset.x, 0, limit.x);
        var destY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_clamp__["a" /* default */])(deltaY + offset.y, 0, limit.y);
        var res = true;
        // offsets are not about to change
        // `&=` operator is not allowed for boolean types
        res = res && (destX === offset.x);
        res = res && (destY === offset.y);
        // current offsets are on the edge
        res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
        return res;
    };
    Scrollbar.prototype._render = function () {
        var _momentum = this._momentum;
        if (_momentum.x || _momentum.y) {
            var nextX = this._nextTick('x');
            var nextY = this._nextTick('y');
            _momentum.x = nextX.momentum;
            _momentum.y = nextY.momentum;
            this.setPosition(nextX.position, nextY.position);
        }
        var remain = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __assign */]({}, this._momentum);
        this._plugins.forEach(function (plugin) {
            plugin.onRender(remain);
        });
        this._renderID = requestAnimationFrame(this._render.bind(this));
    };
    Scrollbar.prototype._nextTick = function (direction) {
        var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
        var current = offset[direction];
        var remain = _momentum[direction];
        if (Math.abs(remain) <= 0.1) {
            return {
                momentum: 0,
                position: current + remain,
            };
        }
        var nextMomentum = remain * (1 - options.damping);
        if (options.renderByPixels) {
            nextMomentum |= 0;
        }
        return {
            momentum: nextMomentum,
            position: current + remain - nextMomentum,
        };
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__decorators___["a" /* debounce */])(100, { leading: true })
    ], Scrollbar.prototype, "_updateDebounced", null);
    return Scrollbar;
}());

//# sourceMappingURL=scrollbar.js.map

/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__set_position__ = __webpack_require__(467);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__set_position__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_to__ = __webpack_require__(466);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__scroll_to__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scroll_into_view__ = __webpack_require__(465);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__scroll_into_view__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 465 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__ = __webpack_require__(48);
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollIntoView;

function scrollIntoView(scrollbar, elem, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
    var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
    if (!elem || !containerEl.contains(elem))
        return;
    var targetBounding = elem.getBoundingClientRect();
    if (onlyScrollIfNeeded && scrollbar.isVisible(elem))
        return;
    var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom - offsetBottom;
    scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__["a" /* default */])(delta, -offset.y, limit.y - offset.y));
}
//# sourceMappingURL=scroll-into-view.js.map

/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__ = __webpack_require__(48);
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollTo;

function scrollTo(scrollbar, x, y, duration, _a) {
    if (duration === void 0) { duration = 0; }
    var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, _d = _b.callback, callback = _d === void 0 ? null : _d;
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
    if (options.renderByPixels) {
        // ensure resolved with integer
        x = Math.round(x);
        y = Math.round(y);
    }
    var startX = offset.x;
    var startY = offset.y;
    var disX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__["a" /* default */])(x, 0, limit.x) - startX;
    var disY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_clamp__["a" /* default */])(y, 0, limit.y) - startY;
    var start = Date.now();
    function scroll() {
        var elapse = Date.now() - start;
        var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
        scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
        if (elapse >= duration) {
            if (typeof callback === 'function') {
                callback.call(scrollbar);
            }
        }
        else {
            requestAnimationFrame(scroll);
        }
    }
    scroll();
}
/**
 * easeOutCubic
 */
function defaultEasing(t) {
    return Math.pow((t - 1), 3) + 1;
}
//# sourceMappingURL=scroll-to.js.map

/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_clamp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils___ = __webpack_require__(29);
/* harmony export (immutable) */ __webpack_exports__["a"] = setPosition;



function setPosition(scrollbar, x, y) {
    var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
    if (options.renderByPixels) {
        x = Math.round(x);
        y = Math.round(y);
    }
    x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_clamp__["a" /* default */])(x, 0, limit.x);
    y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_clamp__["a" /* default */])(y, 0, limit.y);
    // position changed -> show track for 300ms
    if (x !== offset.x)
        track.xAxis.show();
    if (y !== offset.y)
        track.yAxis.show();
    if (!options.alwaysShowTracks) {
        track.autoHideOnIdle();
    }
    if (x === offset.x && y === offset.y) {
        return null;
    }
    offset.x = x;
    offset.y = y;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils___["a" /* setStyle */])(contentEl, {
        '-transform': "translate3d(" + -x + "px, " + -y + "px, 0)",
    });
    track.update();
    return {
        offset: __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __assign */]({}, offset),
        limit: __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __assign */]({}, limit),
    };
}
//# sourceMappingURL=set-position.js.map

/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = attachStyle;
/* harmony export (immutable) */ __webpack_exports__["b"] = detachStyle;
var TRACK_BG = 'rgba(222, 222, 222, .75)';
var THUMB_BG = 'rgba(0, 0, 0, .5)';
var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var STYLE_ID = 'smooth-scrollbar-style';
var isStyleAttached = false;
function attachStyle() {
    if (isStyleAttached || typeof window === 'undefined') {
        return;
    }
    var styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    styleEl.textContent = SCROLLBAR_STYLE;
    document.head.appendChild(styleEl);
    isStyleAttached = true;
}
function detachStyle() {
    if (!isStyleAttached || typeof window === 'undefined') {
        return;
    }
    var styleEl = document.getElementById(STYLE_ID);
    if (!styleEl || !styleEl.parentNode) {
        return;
    }
    styleEl.parentNode.removeChild(styleEl);
    isStyleAttached = false;
}
//# sourceMappingURL=style.js.map

/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__track__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__direction__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators___ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackController; });




var TrackController = /** @class */ (function () {
    function TrackController(_scrollbar) {
        this._scrollbar = _scrollbar;
        var thumbMinSize = _scrollbar.options.thumbMinSize;
        this.xAxis = new __WEBPACK_IMPORTED_MODULE_1__track__["a" /* ScrollbarTrack */](__WEBPACK_IMPORTED_MODULE_2__direction__["a" /* TrackDirection */].X, thumbMinSize);
        this.yAxis = new __WEBPACK_IMPORTED_MODULE_1__track__["a" /* ScrollbarTrack */](__WEBPACK_IMPORTED_MODULE_2__direction__["a" /* TrackDirection */].Y, thumbMinSize);
        this.xAxis.attachTo(_scrollbar.containerEl);
        this.yAxis.attachTo(_scrollbar.containerEl);
        if (_scrollbar.options.alwaysShowTracks) {
            this.xAxis.show();
            this.yAxis.show();
        }
    }
    /**
     * Updates track appearance
     */
    TrackController.prototype.update = function () {
        var _a = this._scrollbar, size = _a.size, offset = _a.offset;
        this.xAxis.update(offset.x, size.container.width, size.content.width);
        this.yAxis.update(offset.y, size.container.height, size.content.height);
    };
    /**
     * Automatically hide tracks when scrollbar is in idle state
     */
    TrackController.prototype.autoHideOnIdle = function () {
        if (this._scrollbar.options.alwaysShowTracks) {
            return;
        }
        this.xAxis.hide();
        this.yAxis.hide();
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__decorators___["a" /* debounce */])(300)
    ], TrackController.prototype, "autoHideOnIdle", null);
    return TrackController;
}());

//# sourceMappingURL=index.js.map

/***/ }),
/* 470 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__direction__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollbarThumb; });


var ScrollbarThumb = /** @class */ (function () {
    function ScrollbarThumb(_direction, _minSize) {
        if (_minSize === void 0) { _minSize = 0; }
        this._direction = _direction;
        this._minSize = _minSize;
        /**
         * Thumb element
         */
        this.element = document.createElement('div');
        /**
         * Display size of the thumb
         * will always be greater than `scrollbar.options.thumbMinSize`
         */
        this.displaySize = 0;
        /**
         * Actual size of the thumb
         */
        this.realSize = 0;
        /**
         * Thumb offset to the top
         */
        this.offset = 0;
        this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction;
    }
    /**
     * Attach to track element
     *
     * @param trackEl Track element
     */
    ScrollbarThumb.prototype.attachTo = function (trackEl) {
        trackEl.appendChild(this.element);
    };
    ScrollbarThumb.prototype.update = function (scrollOffset, containerSize, pageSize) {
        // calculate thumb size
        // pageSize > containerSize -> scrollable
        this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
        this.displaySize = Math.max(this.realSize, this._minSize);
        // calculate thumb offset
        this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["a" /* setStyle */])(this.element, this._getStyle());
    };
    ScrollbarThumb.prototype._getStyle = function () {
        switch (this._direction) {
            case __WEBPACK_IMPORTED_MODULE_0__direction__["a" /* TrackDirection */].X:
                return {
                    width: this.displaySize + "px",
                    '-transform': "translate3d(" + this.offset + "px, 0, 0)",
                };
            case __WEBPACK_IMPORTED_MODULE_0__direction__["a" /* TrackDirection */].Y:
                return {
                    height: this.displaySize + "px",
                    '-transform': "translate3d(0, " + this.offset + "px, 0)",
                };
            default:
                return null;
        }
    };
    return ScrollbarThumb;
}());

//# sourceMappingURL=thumb.js.map

/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumb__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollbarTrack; });


var ScrollbarTrack = /** @class */ (function () {
    function ScrollbarTrack(direction, thumbMinSize) {
        if (thumbMinSize === void 0) { thumbMinSize = 0; }
        /**
         * Track element
         */
        this.element = document.createElement('div');
        this._isShown = false;
        this.element.className = "scrollbar-track scrollbar-track-" + direction;
        this.thumb = new __WEBPACK_IMPORTED_MODULE_0__thumb__["a" /* ScrollbarThumb */](direction, thumbMinSize);
        this.thumb.attachTo(this.element);
    }
    /**
     * Attach to scrollbar container element
     *
     * @param scrollbarContainer Scrollbar container element
     */
    ScrollbarTrack.prototype.attachTo = function (scrollbarContainer) {
        scrollbarContainer.appendChild(this.element);
    };
    /**
     * Show track immediately
     */
    ScrollbarTrack.prototype.show = function () {
        if (this._isShown) {
            return;
        }
        this._isShown = true;
        this.element.classList.add('show');
    };
    /**
     * Hide track immediately
     */
    ScrollbarTrack.prototype.hide = function () {
        if (!this._isShown) {
            return;
        }
        this._isShown = false;
        this.element.classList.remove('show');
    };
    ScrollbarTrack.prototype.update = function (scrollOffset, containerSize, pageSize) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils___["a" /* setStyle */])(this.element, {
            display: pageSize <= containerSize ? 'none' : 'block',
        });
        this.thumb.update(scrollOffset, containerSize, pageSize);
    };
    return ScrollbarTrack;
}());

//# sourceMappingURL=track.js.map

/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = eventScope;
/* harmony export (immutable) */ __webpack_exports__["a"] = clearEventsOn;
var eventMap = new WeakMap();
function eventScope(scrollbar) {
    var configs = eventMap.get(scrollbar) || [];
    eventMap.set(scrollbar, configs);
    return function addEvent(elem, events, fn) {
        function handler(event) {
            // ignore default prevented events
            if (event.defaultPrevented) {
                return;
            }
            fn(event);
        }
        events.split(/\s+/g).forEach(function (eventName) {
            configs.push({ elem: elem, eventName: eventName, handler: handler });
            elem.addEventListener(eventName, handler);
        });
    };
}
function clearEventsOn(scrollbar) {
    var configs = eventMap.get(scrollbar);
    if (!configs) {
        return;
    }
    configs.forEach(function (_a) {
        var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
        elem.removeEventListener(eventName, handler);
    });
    eventMap.delete(scrollbar);
}
//# sourceMappingURL=event-hub.js.map

/***/ }),
/* 473 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isOneOf;
/**
 * Check if `a` is one of `[...b]`
 */
function isOneOf(a, b) {
    if (b === void 0) { b = []; }
    return b.some(function (v) { return a === v; });
}
//# sourceMappingURL=is-one-of.js.map

/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setStyle;
var VENDOR_PREFIX = [
    'webkit',
    'moz',
    'ms',
    'o',
];
var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join('|') + ")-)");
function autoPrefix(styles) {
    var res = {};
    Object.keys(styles).forEach(function (prop) {
        if (!RE.test(prop)) {
            res[prop] = styles[prop];
            return;
        }
        var val = styles[prop];
        prop = prop.replace(/^-/, '');
        res[prop] = val;
        VENDOR_PREFIX.forEach(function (prefix) {
            res["-" + prefix + "-" + prop] = val;
        });
    });
    return res;
}
function setStyle(elem, styles) {
    styles = autoPrefix(styles);
    Object.keys(styles).forEach(function (prop) {
        var cssProp = prop.replace(/^-/, '').replace(/-([a-z])/g, function (_, $1) { return $1.toUpperCase(); });
        elem.style[cssProp] = styles[prop];
    });
}
//# sourceMappingURL=set-style.js.map

/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_position__ = __webpack_require__(169);
/* unused harmony export Tracker */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchRecord; });


var Tracker = /** @class */ (function () {
    function Tracker(touch) {
        this.updateTime = Date.now();
        this.delta = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
        this.lastPosition = { x: 0, y: 0 };
        this.lastPosition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__get_position__["a" /* getPosition */])(touch);
    }
    Tracker.prototype.update = function (touch) {
        var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
        var now = Date.now();
        var position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__get_position__["a" /* getPosition */])(touch);
        var delta = {
            x: -(position.x - lastPosition.x),
            y: -(position.y - lastPosition.y),
        };
        var duration = (now - updateTime) || 16;
        var vx = delta.x / duration * 16;
        var vy = delta.y / duration * 16;
        velocity.x = vx * 0.9 + velocity.x * 0.1;
        velocity.y = vy * 0.9 + velocity.y * 0.1;
        this.delta = delta;
        this.updateTime = now;
        this.lastPosition = position;
    };
    return Tracker;
}());

var TouchRecord = /** @class */ (function () {
    function TouchRecord() {
        this._touchList = {};
    }
    Object.defineProperty(TouchRecord.prototype, "_primitiveValue", {
        get: function () {
            return { x: 0, y: 0 };
        },
        enumerable: true,
        configurable: true
    });
    TouchRecord.prototype.isActive = function () {
        return this._activeTouchID !== undefined;
    };
    TouchRecord.prototype.getDelta = function () {
        var tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __assign */]({}, tracker.delta);
    };
    TouchRecord.prototype.getVelocity = function () {
        var tracker = this._getActiveTracker();
        if (!tracker) {
            return this._primitiveValue;
        }
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __assign */]({}, tracker.velocity);
    };
    TouchRecord.prototype.track = function (evt) {
        var _this = this;
        var targetTouches = evt.targetTouches;
        Array.from(targetTouches).forEach(function (touch) {
            _this._add(touch);
        });
        return this._touchList;
    };
    TouchRecord.prototype.update = function (evt) {
        var _this = this;
        var touches = evt.touches, changedTouches = evt.changedTouches;
        Array.from(touches).forEach(function (touch) {
            _this._renew(touch);
        });
        this._setActiveID(changedTouches);
        return this._touchList;
    };
    TouchRecord.prototype.release = function (evt) {
        var _this = this;
        delete this._activeTouchID;
        Array.from(evt.changedTouches).forEach(function (touch) {
            _this._delete(touch);
        });
    };
    TouchRecord.prototype._add = function (touch) {
        if (this._has(touch)) {
            return;
        }
        var tracker = new Tracker(touch);
        this._touchList[touch.identifier] = tracker;
    };
    TouchRecord.prototype._renew = function (touch) {
        if (!this._has(touch)) {
            return;
        }
        var tracker = this._touchList[touch.identifier];
        tracker.update(touch);
    };
    TouchRecord.prototype._delete = function (touch) {
        delete this._touchList[touch.identifier];
    };
    TouchRecord.prototype._has = function (touch) {
        return this._touchList.hasOwnProperty(touch.identifier);
    };
    TouchRecord.prototype._setActiveID = function (touches) {
        this._activeTouchID = touches[touches.length - 1].identifier;
        this._lastTouch = this._touchList[this._activeTouchID];
    };
    TouchRecord.prototype._getActiveTracker = function () {
        var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
        return _touchList[_activeTouchID];
    };
    return TouchRecord;
}());

//# sourceMappingURL=touch-record.js.map

/***/ }),
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */
/***/ (function(module, exports) {

module.exports = {"theme":"allianz","paths":{"source":{"root":"./source/","patterns":"./source/_patterns/","data":"./source/_data/","meta":"./source/_meta/","annotations":"./source/_annotations/","styleguide":"./styleguidekits/styleguidekit-assets-default/dist/","patternlabFiles":"./styleguidekits/styleguidekit-mustache-default/views/","js":"./source/js","images":"./source/images","fonts":"./source/stylesheets/themes/allianz/fonts","iconfont":"./node_modules/allianz-icons/dist/iconfont","allianzNeo":"./node_modules/allianz-neo/dist/allianz-neo","css":"./source/stylesheets/"},"public":{"root":"./public/","patterns":"./public/patterns/","data":"./public/styleguide/data/","annotations":"./public/annotations/","styleguide":"./public/styleguide/","js":"./public/js","images":"./public/images","fonts":"./public/fonts","css":"./public/css"}},"styleGuideExcludes":[],"defaultPattern":"global-introduction","defaultShowPatternInfo":false,"cleanPublic":true,"patternExtension":"mustache","ignored-extensions":["scss","DS_Store","less"],"ignored-directories":["scss"],"debug":false,"ishControlsHide":{"s":false,"m":false,"l":false,"full":false,"random":true,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":true,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false},"ishMinimum":"320","ishMaximum":"2880","ishViewportRange":{"s":[320,703],"m":[704,991],"l":[992,1440]},"patternStateCascade":["inprogress","inreview","complete"],"patternStates":{},"patternExportPatternPartials":[],"patternExportDirectory":"./pattern_exports/","cacheBust":true,"starterkitSubDir":"dist","outputFileSuffixes":{"rendered":".rendered","rawTemplate":"","markupOnly":".markup-only"}}

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(81);
__webpack_require__(202);
__webpack_require__(201);
var close_button_1 = __webpack_require__(200);
var slider_1 = __webpack_require__(196);
__webpack_require__(80);
var image_1 = __webpack_require__(173);
var Carousel = __webpack_require__(209);
var checkbox_1 = __webpack_require__(195);
var youtube_player_1 = __webpack_require__(192);
var author_profiles_1 = __webpack_require__(184);
var textarea_1 = __webpack_require__(197);
var textinput_1 = __webpack_require__(198);
var accordion_1 = __webpack_require__(180);
var whatinput_1 = __webpack_require__(204);
var $ = __webpack_require__(1);
var toggle_text_1 = __webpack_require__(114);
var toggle_tooltip_1 = __webpack_require__(203);
__webpack_require__(80);
var _04_toggle_product_nav_1 = __webpack_require__(175);
var table_1 = __webpack_require__(171);
var natural_language_form_1 = __webpack_require__(174);
var list_table_1 = __webpack_require__(176);
var _01_social_sharing_1 = __webpack_require__(177);
__webpack_require__(179);
__webpack_require__(178);
__webpack_require__(172);
__webpack_require__(181);
__webpack_require__(207);
var footer_1 = __webpack_require__(183);
var comparison_columns_1 = __webpack_require__(213);
__webpack_require__(208);
var two_level_navigation_1 = __webpack_require__(185);
var teaser_press_release_1 = __webpack_require__(191);
__webpack_require__(211);
__webpack_require__(190);
var search_form_1 = __webpack_require__(189);
__webpack_require__(206);
var three_level_navigation_1 = __webpack_require__(186);
var search_1 = __webpack_require__(188);
var _05_stage_carousel_1 = __webpack_require__(212);
__webpack_require__(205);
__webpack_require__(182);
__webpack_require__(210);
__webpack_require__(193);
__webpack_require__(187);
__webpack_require__(194);
// Add Event Emitter when screen type is change 
var breakpoint_emitter_1 = __webpack_require__(199);
new breakpoint_emitter_1.default(window, 'breakpoint');
document.addEventListener('DOMContentLoaded', function (e) {
    whatinput_1.default();
    two_level_navigation_1.default.attach();
    youtube_player_1.default.attach();
    Carousel.attach();
    Carousel.attachTeaser();
    Carousel.attachTeaserEvent();
    Carousel.attachTwoColumn();
    Carousel.attachThreeColumn();
    checkbox_1.default.attach();
    close_button_1.default.attach();
    textarea_1.default.attach();
    textinput_1.default.attach();
    _04_toggle_product_nav_1.default.attach();
    table_1.default.attach();
    footer_1.default.attach();
    natural_language_form_1.default.attach();
    list_table_1.default.attach();
    search_form_1.default.attach();
    teaser_press_release_1.default.attach();
    slider_1.default.attach();
    author_profiles_1.default.attach();
    accordion_1.default.attach();
    image_1.default.polyfillObjectFit();
    toggle_text_1.default.attach();
    toggle_tooltip_1.default.attach();
    // attachFilterDropdown();
    comparison_columns_1.default.attach();
    _01_social_sharing_1.default.attach();
    // SearchResult.attach();
    // ProductTile.attach();
    three_level_navigation_1.default.attach();
    search_1.default.attach();
    _05_stage_carousel_1.default.attachNavigation();
    _05_stage_carousel_1.default.attachFullWidth();
    $('.js-process-star-rating').starRating();
    $('.js-footer-curtain-panel').footerCurtainPanel();
    $('.js-select').formSelect();
    // $('.js-toggle-filter-dropdown').filterDropdown();
    $('.js-cut-text').cutText();
    $('.js-tabs').tabs();
    $('.js-stepper').stepper();
    $('.js-top-product-teaser-carousel').topProductTeaserCarousel();
    $('.js-carousel-agent-card-tile').agentCardTileCarousel();
    $('.js-carousel--product-tile').productTileCarousel();
});

/***/ })
]),[480]);