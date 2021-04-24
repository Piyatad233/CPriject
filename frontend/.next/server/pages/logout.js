module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/logout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\client\\lab8\\Lab08\\next-nodejs-auth\\frontend\\components\\layout.js";
function Layout({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_service_jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/service/jquery */ "./pages/service/jquery.js");
/* harmony import */ var _pages_service_jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_service_jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_service_scripts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/service/scripts */ "./pages/service/scripts.js");
/* harmony import */ var _pages_service_scripts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_service_scripts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/navbar.module.css */ "./styles/navbar.module.css");
/* harmony import */ var _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\client\\lab8\\Lab08\\next-nodejs-auth\\frontend\\components\\navbar.js";





const Navbar = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hamburgur,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.line
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.line
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.line
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menu,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menuitem,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Home "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 56
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 52
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), " |", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/register",
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menuitem,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 64
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 60
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), "  |", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/login",
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menuitem,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 61
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 57
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), " |", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/profile",
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menuitem,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 62
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 58
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), " |", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/boader",
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menuitem,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Boader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 61
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 57
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined), " |", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/herolist",
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menuitem,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Hero Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 63
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 59
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), " |", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/getConfig",
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menuitem,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: " Config"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 63
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 60
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, undefined), " |", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/logout",
      className: _styles_navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.menuitem,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 61
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 57
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "service/jquery.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "service/scripts.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const LOCAL_URL = 'http://localhost/api';
const PROD_URL = 'https://production.werapun.com/api';
console.log('node env', "development");
const common = {
  PORT: 80
};

const development = _objectSpread(_objectSpread({}, common), {}, {
  URL: LOCAL_URL
});

const production = _objectSpread(_objectSpread({}, common), {}, {
  URL: PROD_URL
});

const config = false ? undefined : development;
module.exports = config;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/logout.js":
/*!*************************!*\
  !*** ./pages/logout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "D:\\client\\lab8\\Lab08\\next-nodejs-auth\\frontend\\pages\\logout.js";







function Logout({
  token
}) {
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    logout();
  }, []);

  const logout = async () => {
    console.log('remove token: ', token);
    let result = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`${_config_config__WEBPACK_IMPORTED_MODULE_7___default.a.URL}/logout`, {
      withCredentials: true
    });
    setStatus("Logout successful");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Logout Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: [" ", status, "  "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/service/jquery.js":
/*!*********************************!*\
  !*** ./pages/service/jquery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

   true && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}(false ? undefined : this, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function (e) {
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
  },
      x = function (e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
  }

  var f = "3.6.0",
      S = function (e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return S.each(this, e);
    },
    map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function (e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function (e) {
      var t;

      for (t in e) return !1;

      return !0;
    },
    globalEval: function (e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function (e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;

      return e;
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];

      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);

      return r;
    },
    map: function (e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function (e, t) {
      return e === t && (l = !0), 0;
    },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
      return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function () {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]);

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) b.attrHandle[n[r]] = t;
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) a.unshift(n);

        n = t;

        while (n = n.parentNode) s.unshift(n);

        while (a[r] === s[r]) r++;

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));

        while (r--) e.splice(n[r], 1);
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) n += o(t);

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = [k, s, d];
                  break;
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function (e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === a;
        },
        focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;

          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return J.test(e.nodeName);
        },
        input: function (e) {
          return Q.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = de(e);

    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = he(e);

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
          if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
          if ((i[c] = a)[2] = s(e, t, n)) return !0;
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) if (!i[r](e, t, n)) return !1;

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) (a = p[o]) && i.push(f[o] = a);

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;

          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
        }

        c.push(t);
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) if (s(o, t || C, n)) {
                r.push(o);
                break;
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) s(c, f, t, n);

            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f);
            }

            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function (e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
      if (i && S(e).is(n)) break;
      r.push(e);
    }

    return r;
  },
      T = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function (e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function (e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);

    return e;
  }

  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return h(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function (e) {
      return O(e, "nextSibling");
    },
    prev: function (e) {
      return O(e, "previousSibling");
    },
    nextAll: function (e) {
      return h(e, "nextSibling");
    },
    prevAll: function (e) {
      return h(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function (e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return T(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function () {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function () {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function () {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
        }), this;
      },
      has: function (e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function () {
        return s && (s = []), this;
      },
      disable: function () {
        return a = u = [], s = t = "", this;
      },
      disabled: function () {
        return !s;
      },
      lock: function () {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function () {
        return !!a;
      },
      fireWith: function (e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function () {
        return f.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function () {
          return i;
        },
        always: function () {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function (e) {
          return a.then(null, e);
        },
        pipe: function () {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function (t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function () {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function (e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function (e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) I(i[t], a(t), o.reject);

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function (e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) i[X(r)] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) delete r[t[n]];
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == typeof n ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function (e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function (e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));

    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);

    return e;
  }

  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

      while (c--) a = a.lastChild;

      S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));

    f.textContent = "", d = 0;

    while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
      c = 0;

      while (o = a[c++]) he.test(o.type || "") && n.push(o);
    }

    return f;
  }

  var be = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0;
  }

  function Te() {
    return !1;
  }

  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ee(e, t, n, r, i, o) {
    var a, s;

    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function (e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }

  S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && S.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));

          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);

        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function () {
        return Se(this, e, Ce), !1;
      },
      trigger: function () {
        return Se(this, e), !0;
      },
      _default: function () {
        return !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function (e, t, n, r) {
      return Ee(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return Ee(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Le(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function He(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : b(u.textContent.replace(Ne, ""), u, l));
    }

    return n;
  }

  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));

    return e;
  }

  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
        if (t = n[Y.expando]) {
          if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
          n[Y.expando] = void 0;
        }

        n[Q.expando] && (n[Q.expando] = void 0);
      }
    }
  }), S.fn.extend({
    detach: function (e) {
      return Oe(this, e, !0);
    },
    remove: function (e) {
      return Oe(this, e);
    },
    text: function (e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");

      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function (e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());

      return this.pushStack(n);
    };
  });

  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Me = function (e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) o[i] = e.style[i], e.style[i] = t[i];

    for (i in r = n.call(e), t) e.style[i] = o[i];

    return r;
  },
      Ie = new RegExp(ne.join("|"), "i");

  function We(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function () {
        return e(), r;
      },
      pixelBoxStyles: function () {
        return e(), o;
      },
      pixelPosition: function () {
        return e(), n;
      },
      reliableMarginLeft: function () {
        return e(), s;
      },
      scrollboxSize: function () {
        return e(), i;
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var Be = ["Webkit", "Moz", "ms"],
      $e = E.createElement("div").style,
      _e = {};

  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Be.length;

      while (n--) if ((e = Be[n] + t) in $e) return e;
    }(e) || e);
  }

  var Ue = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ve = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ge = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Je(e, t, n) {
    var r = Re(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = We(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n);
        });
      },
      set: function (e, t, n) {
        var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye);
  }), S.fn.extend({
    css: function (e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
          n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze,
      et,
      tt,
      nt,
      rt = /^(?:toggle|show|hide)$/,
      it = /queueHooks$/;

  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }

  function at() {
    return C.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }

  function st(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;

    return t && (i.opacity = i.width = e), i;
  }

  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }

  function lt(o, e, t) {
    var n,
        a,
        r = 0,
        i = lt.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function () {
      if (a) return !1;

      for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: Ze || at(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function (e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) l.tweens[t].run(1);

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;

    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], rt.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }

        d[r] = v && v[r] || S.style(e, r);
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
        for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]);
      })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
        var e = lt(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);

        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));

        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);

    n.length || S.fx.stop(), Ze = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot());
  }, S.fx.stop = function () {
    et = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct,
      ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), ct = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;

    ft[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;

  function ht(e) {
    return (e.match(P) || []).join(" ");
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)));
      });
      if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
        a = 0;

        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");

        i !== (s = ht(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    removeClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
        a = 0;

        while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");

        i !== (s = ht(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function (i, t) {
      var o = typeof i,
          a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = vt(i);

          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;

      return !1;
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (t = S(n).val(), a) return t;
            s.push(t);
          }

          return s;
        },
        set: function (e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var mt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function (e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function (e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var bt = C.location,
      wt = {
    guid: Date.now()
  },
      Tt = /\?/;

  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}

    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };

  var Ct = /\[\]$/,
      Et = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function (e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        };
      }).get();
    }
  });
  var Nt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      Ht = /^\/\//,
      Ot = {},
      Pt = {},
      Rt = "*/".concat("*"),
      Mt = E.createElement("a");

  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }

  function Wt(t, i, o, a) {
    var s = {},
        u = t === Pt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function Ft(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);

    return r && S.extend(!0, e, r), e;
  }

  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function () {
          return h ? p : null;
        },
        setRequestHeader: function (e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function (e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function (e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
          return this;
        },
        abort: function (e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));

          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();

          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) e = e.firstElementChild;

        return e;
      }).append(this)), this;
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Bt = {
    0: 200,
    1223: 204
  },
      $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || $t && !i.crossDomain) return {
      send: function (e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);

        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a();
          });
        }, o = o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (o) throw e;
        }
      },
      abort: function () {
        o && o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function () {
        i && i();
      }
    };
  });

  var _t,
      zt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;

  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) e = e.offsetParent;

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "");
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return S;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Vt = C.jQuery,
      Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});

/***/ }),

/***/ "./pages/service/scripts.js":
/*!**********************************!*\
  !*** ./pages/service/scripts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const document = () => function () {
  var menu = $(".menu");
  var hamburgur = $(".hamburger");
  var line = $(".line");
  var menuOpen;

  function openMenu() {
    menu.css("left", "0px");
    line.css("background", "#fff");
    menuOpen = true;
  }

  function closeMenu() {
    menu.css("left", "-320px");
    line.css("background", "#bcad90");
    menuOpen = false;
  }

  function toggleMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburgur.on({
    mouseenter: function () {
      openMenu();
    }
  });
  menu.on({
    mouseleave: function () {
      closeMenu();
    }
  });
  hamburgur.on({
    click: function () {
      toggleMenu();
    }
  });
};

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"content": "Home_content__2fqOz",
	"gridContainer": "Home_gridContainer__39Dc1",
	"btucopy": "Home_btucopy__gz5Lv",
	"btulogin": "Home_btulogin__3d47o",
	"bturegister": "Home_bturegister__3Uygj",
	"text": "Home_text__1sCQa",
	"btn": "Home_btn__3Pfip",
	"btn1": "Home_btn1__4juDG",
	"btn2": "Home_btn2__wI8yv"
};


/***/ }),

/***/ "./styles/navbar.module.css":
/*!**********************************!*\
  !*** ./styles/navbar.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"section": "navbar_section__2UMCb",
	"hamburgur": "navbar_hamburgur__1ov5b",
	"line": "navbar_line__2oOPu",
	"menu": "navbar_menu__2ff2q",
	"menuitem": "navbar_menuitem__2Nevj",
	"menu--open": "navbar_menu--open__1R_v5"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VydmljZS9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VydmljZS9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL25hdmJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiTmF2YmFyIiwic3R5bGVzIiwiaGFtYnVyZ3VyIiwibGluZSIsIm1lbnUiLCJtZW51aXRlbSIsIkxPQ0FMX1VSTCIsIlBST0RfVVJMIiwiY29uc29sZSIsImxvZyIsImNvbW1vbiIsIlBPUlQiLCJkZXZlbG9wbWVudCIsIlVSTCIsInByb2R1Y3Rpb24iLCJjb25maWciLCJtb2R1bGUiLCJleHBvcnRzIiwicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiZGF0YSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkxvZ291dCIsInRva2VuIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsb2dvdXQiLCJheGlvcyIsIndpdGhDcmVkZW50aWFscyIsImNvbnRhaW5lciIsInQiLCJFcnJvciIsIkMiLCJnZXRQcm90b3R5cGVPZiIsInMiLCJzbGljZSIsImZsYXQiLCJjYWxsIiwiY29uY2F0IiwiYXBwbHkiLCJ1IiwiaW5kZXhPZiIsIm4iLCJvIiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImEiLCJsIiwibm9kZVR5cGUiLCJFIiwiYyIsInR5cGUiLCJub25jZSIsIm5vTW9kdWxlIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ3IiwiZiIsIlMiLCJpbml0IiwibGVuZ3RoIiwicHJvdG90eXBlIiwianF1ZXJ5IiwidG9BcnJheSIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsImVhY2giLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImV2ZW4iLCJncmVwIiwib2RkIiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzUGxhaW5PYmplY3QiLCJpc0FycmF5IiwiZXhwYW5kbyIsInJhbmRvbSIsIm5vb3AiLCJpc0VtcHR5T2JqZWN0IiwiZ2xvYmFsRXZhbCIsIm1ha2VBcnJheSIsImluQXJyYXkiLCJndWlkIiwic3VwcG9ydCIsIml0ZXJhdG9yIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsImQiLCJoIiwiVCIsImsiLCJ1ZSIsIkEiLCJOIiwiaiIsIkQiLCJxIiwicG9wIiwiTCIsIkgiLCJPIiwiUCIsIlIiLCJNIiwiSSIsIlciLCJGIiwiQiIsIlJlZ0V4cCIsIiQiLCJ6IiwiVSIsIlgiLCJWIiwiRyIsIklEIiwiQ0xBU1MiLCJUQUciLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJib29sIiwibmVlZHNDb250ZXh0IiwiWSIsIlEiLCJKIiwiSyIsIloiLCJlZSIsInRlIiwibmUiLCJmcm9tQ2hhckNvZGUiLCJpZSIsImNoYXJDb2RlQXQiLCJvZSIsImFlIiwiYmUiLCJkaXIiLCJuZXh0IiwiY2hpbGROb2RlcyIsInNlIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsInRlc3QiLCJ5ZSIsInNjb3BlIiwieGUiLCJqb2luIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUF0dHJpYnV0ZSIsImNhY2hlTGVuZ3RoIiwic2hpZnQiLCJsZSIsImNlIiwiZmUiLCJhdHRySGFuZGxlIiwicGUiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwiZGUiLCJoZSIsImdlIiwidmUiLCJpc1hNTCIsIm5hbWVzcGFjZVVSSSIsImRvY3VtZW50RWxlbWVudCIsInNldERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiaW5uZXJIVE1MIiwibWF0Y2hlc1NlbGVjdG9yIiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImRpc2Nvbm5lY3RlZE1hdGNoIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJjb250YWlucyIsInNvcnREZXRhY2hlZCIsInVuc2hpZnQiLCJhdHRyIiwic3BlY2lmaWVkIiwiZXNjYXBlIiwidW5pcXVlU29ydCIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwiZ2V0VGV4dCIsInRleHRDb250ZW50IiwiZmlyc3RDaGlsZCIsIm5vZGVWYWx1ZSIsInNlbGVjdG9ycyIsImNyZWF0ZVBzZXVkbyIsIm1hdGNoIiwicmVsYXRpdmUiLCJwcmVGaWx0ZXIiLCJsYXN0Q2hpbGQiLCJ1bmlxdWVJRCIsInBzZXVkb3MiLCJzZXRGaWx0ZXJzIiwibm90IiwiaGFzIiwibGFuZyIsImxvY2F0aW9uIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwidGFiSW5kZXgiLCJlbmFibGVkIiwiY2hlY2tlZCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsImVtcHR5IiwicGFyZW50IiwiaGVhZGVyIiwiYnV0dG9uIiwibHQiLCJndCIsIm50aCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwibWUiLCJ3ZSIsIlRlIiwiQ2UiLCJFZSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3RvciIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImVzY2FwZVNlbGVjdG9yIiwiaXMiLCJwYXJzZUhUTUwiLCJjb250ZW50cyIsInByZXYiLCJjbG9zZXN0IiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkIiwiYWRkQmFjayIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwic2libGluZ3MiLCJjb250ZW50RG9jdW1lbnQiLCJyZXZlcnNlIiwicHJvbWlzZSIsImRvbmUiLCJmYWlsIiwidGhlbiIsIkNhbGxiYWNrcyIsIm9uY2UiLCJzdG9wT25GYWxzZSIsIm1lbW9yeSIsInJlbW92ZSIsImRpc2FibGUiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsImFsd2F5cyIsInBpcGUiLCJwcm9ncmVzcyIsIlR5cGVFcnJvciIsIm5vdGlmeVdpdGgiLCJyZXNvbHZlV2l0aCIsImV4Y2VwdGlvbkhvb2siLCJzdGFja1RyYWNlIiwicmVqZWN0V2l0aCIsImdldFN0YWNrSG9vayIsIndoZW4iLCJ3YXJuIiwicmVhZHlFeGNlcHRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVhZHlXYWl0IiwicmVhZHlTdGF0ZSIsImRvU2Nyb2xsIiwidG9VcHBlckNhc2UiLCJ1aWQiLCJjYWNoZSIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiYWNjZXNzIiwiaGFzRGF0YSIsIkpTT04iLCJwYXJzZSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjdXIiLCJjc3NOdW1iZXIiLCJ1bml0IiwiYm9keSIsInNob3ciLCJoaWRlIiwidG9nZ2xlIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNoZWNrQ2xvbmUiLCJjbG9uZU5vZGUiLCJub0Nsb25lQ2hlY2tlZCIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIl9kZWZhdWx0IiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwib3B0Z3JvdXAiLCJodG1sUHJlZmlsdGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJTZSIsIm5hbWVzcGFjZSIsImlzVHJpZ2dlciIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJub3ciLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY29kZSIsImNoYXJDb2RlIiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJibHVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvbmUiLCJrZSIsIkFlIiwiTmUiLCJqZSIsIkRlIiwicWUiLCJMZSIsIkhlIiwiaHRtbCIsImNsb25lIiwiX2V2YWxVcmwiLCJPZSIsImNsZWFuRGF0YSIsImRldGFjaCIsImFwcGVuZCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJhZnRlciIsInJlcGxhY2VXaXRoIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG8iLCJpbnNlcnRBZnRlciIsInJlcGxhY2VBbGwiLCJQZSIsIlJlIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIk1lIiwiSWUiLCJXZSIsImdldFByb3BlcnR5VmFsdWUiLCJwaXhlbEJveFN0eWxlcyIsIndpZHRoIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIkZlIiwiY3NzVGV4dCIsIm1hcmdpbkxlZnQiLCJyaWdodCIsInBvc2l0aW9uIiwib2Zmc2V0V2lkdGgiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJiYWNrZ3JvdW5kQ2xpcCIsImNsZWFyQ2xvbmVTdHlsZSIsImJveFNpemluZ1JlbGlhYmxlIiwicGl4ZWxQb3NpdGlvbiIsInJlbGlhYmxlTWFyZ2luTGVmdCIsInNjcm9sbGJveFNpemUiLCJyZWxpYWJsZVRyRGltZW5zaW9ucyIsImhlaWdodCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJCZSIsIiRlIiwiX2UiLCJ6ZSIsImNzc1Byb3BzIiwiVWUiLCJYZSIsIlZlIiwidmlzaWJpbGl0eSIsIkdlIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJZZSIsIm1heCIsIlFlIiwiY2VpbCIsIkplIiwiZ2V0Q2xpZW50UmVjdHMiLCJLZSIsImNzc0hvb2tzIiwib3BhY2l0eSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiY29sdW1uQ291bnQiLCJmaWxsT3BhY2l0eSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImdyaWRBcmVhIiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTdGFydCIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwicHJvcEhvb2tzIiwicnVuIiwiZHVyYXRpb24iLCJzdGVwIiwiZngiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwibGluZWFyIiwic3dpbmciLCJjb3MiLCJQSSIsIlplIiwiZXQiLCJ0dCIsIm50IiwicnQiLCJpdCIsIm90IiwiaGlkZGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW50ZXJ2YWwiLCJ0aWNrIiwiYXQiLCJzdCIsInV0IiwidHdlZW5lcnMiLCJwcmVmaWx0ZXJzIiwic3RhcnRUaW1lIiwidHdlZW5zIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsImN0IiwiZnQiLCJyZW1vdmVBdHRyIiwiYXR0ckhvb2tzIiwicHQiLCJkdCIsImh0IiwidnQiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwieXQiLCJ2YWwiLCJ2YWxIb29rcyIsImZvY3VzaW4iLCJtdCIsInh0IiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsImJ0Iiwid3QiLCJUdCIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiQ3QiLCJFdCIsIlN0Iiwia3QiLCJBdCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5IiwiTnQiLCJqdCIsIkR0IiwicXQiLCJMdCIsIkh0IiwiT3QiLCJQdCIsIlJ0IiwiTXQiLCJJdCIsIld0IiwiZGF0YVR5cGVzIiwiRnQiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsImFjdGl2ZSIsImxhc3RNb2RpZmllZCIsImV0YWciLCJpc0xvY2FsIiwicHJvY2Vzc0RhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwiYWNjZXB0cyIsInhtbCIsImpzb24iLCJyZXNwb25zZUZpZWxkcyIsImNvbnZlcnRlcnMiLCJjb250ZXh0IiwiYWpheFNldHVwIiwiYWpheFByZWZpbHRlciIsImFqYXhUcmFuc3BvcnQiLCJhamF4Iiwic3RhdHVzQ29kZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIm92ZXJyaWRlTWltZVR5cGUiLCJtaW1lVHlwZSIsImFib3J0IiwiZGF0YVR5cGUiLCJjcm9zc0RvbWFpbiIsInRyYWRpdGlvbmFsIiwiaGFzQ29udGVudCIsImlmTW9kaWZpZWQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJ0aW1lb3V0Iiwic2VuZCIsImRhdGFGaWx0ZXIiLCJzdGF0dXNUZXh0IiwiZ2V0SlNPTiIsImdldFNjcmlwdCIsIndyYXBBbGwiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndyYXBJbm5lciIsIndyYXAiLCJ1bndyYXAiLCJ2aXNpYmxlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJCdCIsIiR0IiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInhockZpZWxkcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib250aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VUZXh0IiwiYmluYXJ5IiwicmVzcG9uc2UiLCJzY3JpcHRBdHRycyIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiX3QiLCJ6dCIsIlV0IiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJhbmltYXRlZCIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJ1bmJpbmQiLCJkZWxlZ2F0ZSIsInVuZGVsZWdhdGUiLCJob3ZlciIsIlh0IiwicHJveHkiLCJob2xkUmVhZHkiLCJwYXJzZUpTT04iLCJpc0Z1bmN0aW9uIiwiaXNXaW5kb3ciLCJjYW1lbENhc2UiLCJpc051bWVyaWMiLCJ0cmltIiwiZGVmaW5lIiwiVnQiLCJqUXVlcnkiLCJHdCIsIm5vQ29uZmxpY3QiLCJtZW51T3BlbiIsIm9wZW5NZW51IiwiY2xvc2VNZW51IiwidG9nZ2xlTWVudSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7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O0FBQ2I7QUFIUSxHQUFiO0FBS0gsQ0EvQ0QsQzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9sb2dvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ291dC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gPGRpdj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgfSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGpxdWVyeSBmcm9tICcuLi9wYWdlcy9zZXJ2aWNlL2pxdWVyeSdcclxuaW1wb3J0IHNjcmlwdHMgZnJvbSAnLi4vcGFnZXMvc2VydmljZS9zY3JpcHRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbmF2YmFyLm1vZHVsZS5jc3NcIjtcclxuY29uc3QgTmF2YmFyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGFtYnVyZ3VyfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGluZX0+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmV9PjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5lfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVpdGVtfT48YT4gPGI+SG9tZSA8L2I+PC9hPjwvTGluaz4gfFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5tZW51aXRlbX0+PGE+IDxiPlJlZ2lzdGVyPC9iPiA8L2E+PC9MaW5rPiAgfFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9e3N0eWxlcy5tZW51aXRlbX0+PGE+IDxiPkxvZ2luPC9iPiA8L2E+PC9MaW5rPiB8XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCJjbGFzc05hbWU9e3N0eWxlcy5tZW51aXRlbX0+PGE+IDxiPlByb2ZpbGU8L2I+IDwvYT48L0xpbms+IHwgXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9ib2FkZXJcImNsYXNzTmFtZT17c3R5bGVzLm1lbnVpdGVtfT48YT4gPGI+Qm9hZGVyPC9iPiA8L2E+PC9MaW5rPiB8IFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvaGVyb2xpc3RcImNsYXNzTmFtZT17c3R5bGVzLm1lbnVpdGVtfT48YT4gPGI+SGVybyBFZGl0PC9iPiA8L2E+PC9MaW5rPiB8XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9nZXRDb25maWdcImNsYXNzTmFtZT17c3R5bGVzLm1lbnVpdGVtfT48YT48Yj4gQ29uZmlnPC9iPiA8L2E+PC9MaW5rPiB8IFxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9nb3V0XCJjbGFzc05hbWU9e3N0eWxlcy5tZW51aXRlbX0+PGE+IDxiPkxvZ291dDwvYj4gPC9hPjwvTGluaz4gXHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJzZXJ2aWNlL2pxdWVyeS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwic2VydmljZS9zY3JpcHRzLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJcclxuY29uc3QgTE9DQUxfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpJztcclxuY29uc3QgUFJPRF9VUkwgPSAnaHR0cHM6Ly9wcm9kdWN0aW9uLndlcmFwdW4uY29tL2FwaSc7XHJcblxyXG5jb25zb2xlLmxvZygnbm9kZSBlbnYnLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XHJcblxyXG5jb25zdCBjb21tb24gPSB7XHJcbiAgICBQT1JUOiA4MCBcclxufVxyXG5cclxuY29uc3QgZGV2ZWxvcG1lbnQgPSB7XHJcbiAgICAuLi5jb21tb24sIFxyXG4gICAgVVJMOiBMT0NBTF9VUkwsICBcclxufVxyXG5cclxuY29uc3QgcHJvZHVjdGlvbiA9IHtcclxuICAgIC4uLmNvbW1vbiwgXHJcbiAgICBVUkw6IFBST0RfVVJMLCBcclxufVxyXG5cclxuY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IHByb2R1Y3Rpb24gOiBkZXZlbG9wbWVudDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29uZmlnO1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvdXQoeyB0b2tlbiB9KSB7XHJcblxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9nb3V0KClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlIHRva2VuOiAnLCB0b2tlbilcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2NvbmZpZy5VUkx9L2xvZ291dGAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgc2V0U3RhdHVzKFwiTG9nb3V0IHN1Y2Nlc3NmdWxcIilcclxuICAgIH1cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2dvdXQgUGFnZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvZ291dDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4ge3N0YXR1c30gIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuIiwiLyohIGpRdWVyeSB2My42LjAgfCAoYykgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xyXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZS5kb2N1bWVudD90KGUsITApOmZ1bmN0aW9uKGUpe2lmKCFlLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIHQoZSl9OnQoZSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oQyxlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1bXSxyPU9iamVjdC5nZXRQcm90b3R5cGVPZixzPXQuc2xpY2UsZz10LmZsYXQ/ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZmxhdC5jYWxsKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gdC5jb25jYXQuYXBwbHkoW10sZSl9LHU9dC5wdXNoLGk9dC5pbmRleE9mLG49e30sbz1uLnRvU3RyaW5nLHY9bi5oYXNPd25Qcm9wZXJ0eSxhPXYudG9TdHJpbmcsbD1hLmNhbGwoT2JqZWN0KSx5PXt9LG09ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmXCJudW1iZXJcIiE9dHlwZW9mIGUubm9kZVR5cGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGUuaXRlbX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxFPUMuZG9jdW1lbnQsYz17dHlwZTohMCxzcmM6ITAsbm9uY2U6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIGIoZSx0LG4pe3ZhciByLGksbz0obj1ufHxFKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKG8udGV4dD1lLHQpZm9yKHIgaW4gYykoaT10W3JdfHx0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUocikpJiZvLnNldEF0dHJpYnV0ZShyLGkpO24uaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25bby5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgZj1cIjMuNi4wXCIsUz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUy5mbi5pbml0KGUsdCl9O2Z1bmN0aW9uIHAoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj13KGUpO3JldHVybiFtKGUpJiYheChlKSYmKFwiYXJyYXlcIj09PW58fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmMDx0JiZ0LTEgaW4gZSl9Uy5mbj1TLnByb3RvdHlwZT17anF1ZXJ5OmYsY29uc3RydWN0b3I6UyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3MuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMubWFwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbi5jYWxsKGUsdCxlKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2socy5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxldmVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQrMSklMn0pKX0sb2RkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQlMn0pKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKDA8PW4mJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6dSxzb3J0OnQuc29ydCxzcGxpY2U6dC5zcGxpY2V9LFMuZXh0ZW5kPVMuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmKGw9YSxhPWFyZ3VtZW50c1tzXXx8e30scysrKSxcIm9iamVjdFwiPT10eXBlb2YgYXx8bShhKXx8KGE9e30pLHM9PT11JiYoYT10aGlzLHMtLSk7czx1O3MrKylpZihudWxsIT0oZT1hcmd1bWVudHNbc10pKWZvcih0IGluIGUpcj1lW3RdLFwiX19wcm90b19fXCIhPT10JiZhIT09ciYmKGwmJnImJihTLmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8obj1hW3RdLG89aSYmIUFycmF5LmlzQXJyYXkobik/W106aXx8Uy5pc1BsYWluT2JqZWN0KG4pP246e30saT0hMSxhW3RdPVMuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSxTLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhmK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PW8uY2FsbChlKSkmJighKHQ9cihlKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG49di5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcikmJmEuY2FsbChuKT09PWwpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oZSx0LG4pe2IoZSx7bm9uY2U6dCYmdC5ub25jZX0sbil9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7aWYocChlKSl7Zm9yKG49ZS5sZW5ndGg7cjxuO3IrKylpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWt9ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihwKE9iamVjdChlKSk/Uy5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTp1LmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6aS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPVtdLGk9MCxvPWUubGVuZ3RoLGE9IW47aTxvO2krKykhdChlW2ldLGkpIT09YSYmci5wdXNoKGVbaV0pO3JldHVybiByfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLGE9W107aWYocChlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtyZXR1cm4gZyhhKX0sZ3VpZDoxLHN1cHBvcnQ6eX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKFMuZm5bU3ltYm9sLml0ZXJhdG9yXT10W1N5bWJvbC5pdGVyYXRvcl0pLFMuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bltcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7dmFyIGQ9ZnVuY3Rpb24obil7dmFyIGUsZCxiLG8saSxoLGYsZyx3LHUsbCxULEMsYSxFLHYscyxjLHksUz1cInNpenpsZVwiKzEqbmV3IERhdGUscD1uLmRvY3VtZW50LGs9MCxyPTAsbT11ZSgpLHg9dWUoKSxBPXVlKCksTj11ZSgpLGo9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXQmJihsPSEwKSwwfSxEPXt9Lmhhc093blByb3BlcnR5LHQ9W10scT10LnBvcCxMPXQucHVzaCxIPXQucHVzaCxPPXQuc2xpY2UsUD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylpZihlW25dPT09dClyZXR1cm4gbjtyZXR1cm4tMX0sUj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTT1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsST1cIig/OlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFxbXlxcXFxyXFxcXG5cXFxcZl18W1xcXFx3LV18W15cXDAtXFxcXHg3Zl0pK1wiLFc9XCJcXFxcW1wiK00rXCIqKFwiK0krXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrSStcIikpfClcIitNK1wiKlxcXFxdXCIsRj1cIjooXCIrSStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrVytcIikqKXwuKilcXFxcKXwpXCIsQj1uZXcgUmVnRXhwKE0rXCIrXCIsXCJnXCIpLCQ9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksXz1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLHo9bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLFU9bmV3IFJlZ0V4cChNK1wifD5cIiksWD1uZXcgUmVnRXhwKEYpLFY9bmV3IFJlZ0V4cChcIl5cIitJK1wiJFwiKSxHPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrSStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitJK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrSStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitXKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitGKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitNK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTStcIiooPzooWystXXwpXCIrTStcIiooXFxcXGQrKXwpKVwiK00rXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrUitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK00rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK00rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK00rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFk9L0hUTUwkL2ksUT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLEo9L15oXFxkJC9pLEs9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGVlPS9bK35dLyx0ZT1uZXcgUmVnRXhwKFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXChbXlxcXFxyXFxcXG5cXFxcZl0pXCIsXCJnXCIpLG5lPWZ1bmN0aW9uKGUsdCl7dmFyIG49XCIweFwiK2Uuc2xpY2UoMSktNjU1MzY7cmV0dXJuIHR8fChuPDA/U3RyaW5nLmZyb21DaGFyQ29kZShuKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKG4+PjEwfDU1Mjk2LDEwMjMmbnw1NjMyMCkpfSxyZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxpZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P1wiXFwwXCI9PT1lP1wiXFx1ZmZmZFwiOmUuc2xpY2UoMCwtMSkrXCJcXFxcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIitlfSxvZT1mdW5jdGlvbigpe1QoKX0sYWU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiZcImZpZWxkc2V0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0guYXBwbHkodD1PLmNhbGwocC5jaGlsZE5vZGVzKSxwLmNoaWxkTm9kZXMpLHRbcC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7SD17YXBwbHk6dC5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsTy5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gc2UodCxlLG4scil7dmFyIGksbyxhLHMsdSxsLGMsZj1lJiZlLm93bmVyRG9jdW1lbnQscD1lP2Uubm9kZVR5cGU6OTtpZihuPW58fFtdLFwic3RyaW5nXCIhPXR5cGVvZiB0fHwhdHx8MSE9PXAmJjkhPT1wJiYxMSE9PXApcmV0dXJuIG47aWYoIXImJihUKGUpLGU9ZXx8QyxFKSl7aWYoMTEhPT1wJiYodT1aLmV4ZWModCkpKWlmKGk9dVsxXSl7aWYoOT09PXApe2lmKCEoYT1lLmdldEVsZW1lbnRCeUlkKGkpKSlyZXR1cm4gbjtpZihhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZSBpZihmJiYoYT1mLmdldEVsZW1lbnRCeUlkKGkpKSYmeShlLGEpJiZhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZXtpZih1WzJdKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KSksbjtpZigoaT11WzNdKSYmZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaSkpLG59aWYoZC5xc2EmJiFOW3QrXCIgXCJdJiYoIXZ8fCF2LnRlc3QodCkpJiYoMSE9PXB8fFwib2JqZWN0XCIhPT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtpZihjPXQsZj1lLDE9PT1wJiYoVS50ZXN0KHQpfHx6LnRlc3QodCkpKXsoZj1lZS50ZXN0KHQpJiZ5ZShlLnBhcmVudE5vZGUpfHxlKT09PWUmJmQuc2NvcGV8fCgocz1lLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXMucmVwbGFjZShyZSxpZSk6ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHM9UykpLG89KGw9aCh0KSkubGVuZ3RoO3doaWxlKG8tLSlsW29dPShzP1wiI1wiK3M6XCI6c2NvcGVcIikrXCIgXCIreGUobFtvXSk7Yz1sLmpvaW4oXCIsXCIpfXRyeXtyZXR1cm4gSC5hcHBseShuLGYucXVlcnlTZWxlY3RvckFsbChjKSksbn1jYXRjaChlKXtOKHQsITApfWZpbmFsbHl7cz09PVMmJmUucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gZyh0LnJlcGxhY2UoJCxcIiQxXCIpLGUsbixyKX1mdW5jdGlvbiB1ZSgpe3ZhciByPVtdO3JldHVybiBmdW5jdGlvbiBlKHQsbil7cmV0dXJuIHIucHVzaCh0K1wiIFwiKT5iLmNhY2hlTGVuZ3RoJiZkZWxldGUgZVtyLnNoaWZ0KCldLGVbdCtcIiBcIl09bn19ZnVuY3Rpb24gbGUoZSl7cmV0dXJuIGVbU109ITAsZX1mdW5jdGlvbiBjZShlKXt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFlKHQpfWNhdGNoKGUpe3JldHVybiExfWZpbmFsbHl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksdD1udWxsfX1mdW5jdGlvbiBmZShlLHQpe3ZhciBuPWUuc3BsaXQoXCJ8XCIpLHI9bi5sZW5ndGg7d2hpbGUoci0tKWIuYXR0ckhhbmRsZVtuW3JdXT10fWZ1bmN0aW9uIHBlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZlLnR5cGU9PT10fX1mdW5jdGlvbiBoZShuKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT10fHxcImJ1dHRvblwiPT09dCkmJmUudHlwZT09PW59fWZ1bmN0aW9uIGdlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImZvcm1cImluIGU/ZS5wYXJlbnROb2RlJiYhMT09PWUuZGlzYWJsZWQ/XCJsYWJlbFwiaW4gZT9cImxhYmVsXCJpbiBlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmRpc2FibGVkPT09dDplLmRpc2FibGVkPT09dDplLmlzRGlzYWJsZWQ9PT10fHxlLmlzRGlzYWJsZWQhPT0hdCYmYWUoZSk9PT10OmUuZGlzYWJsZWQ9PT10OlwibGFiZWxcImluIGUmJmUuZGlzYWJsZWQ9PT10fX1mdW5jdGlvbiB2ZShhKXtyZXR1cm4gbGUoZnVuY3Rpb24obyl7cmV0dXJuIG89K28sbGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoW10sZS5sZW5ndGgsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPXJbaV1dJiYoZVtuXT0hKHRbbl09ZVtuXSkpfSl9KX1mdW5jdGlvbiB5ZShlKXtyZXR1cm4gZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmV9Zm9yKGUgaW4gZD1zZS5zdXBwb3J0PXt9LGk9c2UuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5uYW1lc3BhY2VVUkksbj1lJiYoZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIVkudGVzdCh0fHxuJiZuLm5vZGVOYW1lfHxcIkhUTUxcIil9LFQ9c2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWU/ZS5vd25lckRvY3VtZW50fHxlOnA7cmV0dXJuIHIhPUMmJjk9PT1yLm5vZGVUeXBlJiZyLmRvY3VtZW50RWxlbWVudCYmKGE9KEM9cikuZG9jdW1lbnRFbGVtZW50LEU9IWkoQykscCE9QyYmKG49Qy5kZWZhdWx0VmlldykmJm4udG9wIT09biYmKG4uYWRkRXZlbnRMaXN0ZW5lcj9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixvZSwhMSk6bi5hdHRhY2hFdmVudCYmbi5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsb2UpKSxkLnNjb3BlPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKEMuY3JlYXRlRWxlbWVudChcImRpdlwiKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbCYmIWUucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSBmaWVsZHNldCBkaXZcIikubGVuZ3RofSksZC5hdHRyaWJ1dGVzPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxkLmdldEVsZW1lbnRzQnlUYWdOYW1lPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKEMuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1LLnRlc3QoQy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxkLmdldEJ5SWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuaWQ9UywhQy5nZXRFbGVtZW50c0J5TmFtZXx8IUMuZ2V0RWxlbWVudHNCeU5hbWUoUykubGVuZ3RofSksZC5nZXRCeUlkPyhiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbj9bbl06W119fSk6KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciBuPWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiB0JiZ0LnZhbHVlPT09bn19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbixyLGksbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2k9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxyPTA7d2hpbGUobz1pW3IrK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb119cmV0dXJuW119fSksYi5maW5kLlRBRz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTpkLnFzYT90LnF1ZXJ5U2VsZWN0b3JBbGwoZSk6dm9pZCAwfTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGIuZmluZC5DTEFTUz1kLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmRSlyZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSxzPVtdLHY9W10sKGQucXNhPUsudGVzdChDLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGNlKGZ1bmN0aW9uKGUpe3ZhciB0O2EuYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK1MrXCInPjwvYT48c2VsZWN0IGlkPSdcIitTK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZ2LnB1c2goXCJbKl4kXT1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8di5wdXNoKFwiXFxcXFtcIitNK1wiKig/OnZhbHVlfFwiK1IrXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrUytcIi1dXCIpLmxlbmd0aHx8di5wdXNoKFwifj1cIiksKHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIlwiKSxlLmFwcGVuZENoaWxkKHQpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPScnXVwiKS5sZW5ndGh8fHYucHVzaChcIlxcXFxbXCIrTStcIipuYW1lXCIrTStcIio9XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHx2LnB1c2goXCI6Y2hlY2tlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK1MrXCIrKlwiKS5sZW5ndGh8fHYucHVzaChcIi4jLitbK35dXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIlxcXFxcXGZcIiksdi5wdXNoKFwiW1xcXFxyXFxcXG5cXFxcZl1cIil9KSxjZShmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnYucHVzaChcIm5hbWVcIitNK1wiKlsqXiR8IX5dPz1cIiksMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLmFwcGVuZENoaWxkKGUpLmRpc2FibGVkPSEwLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZ2LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIiksdi5wdXNoKFwiLC4qOlwiKX0pKSwoZC5tYXRjaGVzU2VsZWN0b3I9Sy50ZXN0KGM9YS5tYXRjaGVzfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8YS5tb3pNYXRjaGVzU2VsZWN0b3J8fGEub01hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3RvcikpJiZjZShmdW5jdGlvbihlKXtkLmRpc2Nvbm5lY3RlZE1hdGNoPWMuY2FsbChlLFwiKlwiKSxjLmNhbGwoZSxcIltzIT0nJ106eFwiKSxzLnB1c2goXCIhPVwiLEYpfSksdj12Lmxlbmd0aCYmbmV3IFJlZ0V4cCh2LmpvaW4oXCJ8XCIpKSxzPXMubGVuZ3RoJiZuZXcgUmVnRXhwKHMuam9pbihcInxcIikpLHQ9Sy50ZXN0KGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHk9dHx8Sy50ZXN0KGEuY29udGFpbnMpP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0saj10P2Z1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbj0hZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gbnx8KDEmKG49KGUub3duZXJEb2N1bWVudHx8ZSk9PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFkLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PW4/ZT09Q3x8ZS5vd25lckRvY3VtZW50PT1wJiZ5KHAsZSk/LTE6dD09Q3x8dC5vd25lckRvY3VtZW50PT1wJiZ5KHAsdCk/MTp1P1AodSxlKS1QKHUsdCk6MDo0Jm4/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbixyPTAsaT1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUsYT1bZV0scz1bdF07aWYoIWl8fCFvKXJldHVybiBlPT1DPy0xOnQ9PUM/MTppPy0xOm8/MTp1P1AodSxlKS1QKHUsdCk6MDtpZihpPT09bylyZXR1cm4gcGUoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP3BlKGFbcl0sc1tyXSk6YVtyXT09cD8tMTpzW3JdPT1wPzE6MH0pLEN9LHNlLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc2UoZSxudWxsLG51bGwsdCl9LHNlLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKFQoZSksZC5tYXRjaGVzU2VsZWN0b3ImJkUmJiFOW3QrXCIgXCJdJiYoIXN8fCFzLnRlc3QodCkpJiYoIXZ8fCF2LnRlc3QodCkpKXRyeXt2YXIgbj1jLmNhbGwoZSx0KTtpZihufHxkLmRpc2Nvbm5lY3RlZE1hdGNofHxlLmRvY3VtZW50JiYxMSE9PWUuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIG59Y2F0Y2goZSl7Tih0LCEwKX1yZXR1cm4gMDxzZSh0LEMsbnVsbCxbZV0pLmxlbmd0aH0sc2UuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKSx5KGUsdCl9LHNlLmF0dHI9ZnVuY3Rpb24oZSx0KXsoZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKTt2YXIgbj1iLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxyPW4mJkQuY2FsbChiLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9uKGUsdCwhRSk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1yP3I6ZC5hdHRyaWJ1dGVzfHwhRT9lLmdldEF0dHJpYnV0ZSh0KToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9LHNlLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHJlLGllKX0sc2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHNlLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTAsaT0wO2lmKGw9IWQuZGV0ZWN0RHVwbGljYXRlcyx1PSFkLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KGopLGwpe3doaWxlKHQ9ZVtpKytdKXQ9PT1lW2ldJiYocj1uLnB1c2goaSkpO3doaWxlKHItLSllLnNwbGljZShuW3JdLDEpfXJldHVybiB1PW51bGwsZX0sbz1zZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsaT1lLm5vZGVUeXBlO2lmKGkpe2lmKDE9PT1pfHw5PT09aXx8MTE9PT1pKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9byhlKX1lbHNlIGlmKDM9PT1pfHw0PT09aSlyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbcisrXSluKz1vKHQpO3JldHVybiBufSwoYj1zZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpsZSxtYXRjaDpHLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKHRlLG5lKSxlWzNdPShlWzNdfHxlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKHRlLG5lKSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gRy5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHxcIlwiOm4mJlgudGVzdChuKSYmKHQ9aChuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1tW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIitlK1wiKFwiK00rXCJ8JClcIikpJiZtKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24obixyLGkpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1zZS5hdHRyKGUsbik7cmV0dXJuIG51bGw9PXQ/XCIhPVwiPT09cjohcnx8KHQrPVwiXCIsXCI9XCI9PT1yP3Q9PT1pOlwiIT1cIj09PXI/dCE9PWk6XCJePVwiPT09cj9pJiYwPT09dC5pbmRleE9mKGkpOlwiKj1cIj09PXI/aSYmLTE8dC5pbmRleE9mKGkpOlwiJD1cIj09PXI/aSYmdC5zbGljZSgtaS5sZW5ndGgpPT09aTpcIn49XCI9PT1yPy0xPChcIiBcIit0LnJlcGxhY2UoQixcIiBcIikrXCIgXCIpLmluZGV4T2YoaSk6XCJ8PVwiPT09ciYmKHQ9PT1pfHx0LnNsaWNlKDAsaS5sZW5ndGgrMSk9PT1pK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihoLGUsdCxnLHYpe3ZhciB5PVwibnRoXCIhPT1oLnNsaWNlKDAsMyksbT1cImxhc3RcIiE9PWguc2xpY2UoLTQpLHg9XCJvZi10eXBlXCI9PT1lO3JldHVybiAxPT09ZyYmMD09PXY/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD15IT09bT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixjPWUucGFyZW50Tm9kZSxmPXgmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxwPSFuJiYheCxkPSExO2lmKGMpe2lmKHkpe3doaWxlKGwpe2E9ZTt3aGlsZShhPWFbbF0paWYoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKXJldHVybiExO3U9bD1cIm9ubHlcIj09PWgmJiF1JiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYodT1bbT9jLmZpcnN0Q2hpbGQ6Yy5sYXN0Q2hpbGRdLG0mJnApe2Q9KHM9KHI9KGk9KG89KGE9YylbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pJiZyWzJdLGE9cyYmYy5jaGlsZE5vZGVzW3NdO3doaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKDE9PT1hLm5vZGVUeXBlJiYrK2QmJmE9PT1lKXtpW2hdPVtrLHMsZF07YnJlYWt9fWVsc2UgaWYocCYmKGQ9cz0ocj0oaT0obz0oYT1lKVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSksITE9PT1kKXdoaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKCh4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpJiYrK2QmJihwJiYoKGk9KG89YVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXT1bayxkXSksYT09PWUpKWJyZWFrO3JldHVybihkLT12KT09PWd8fGQlZz09MCYmMDw9ZC9nfX19LFBTRVVETzpmdW5jdGlvbihlLG8pe3ZhciB0LGE9Yi5wc2V1ZG9zW2VdfHxiLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBhW1NdP2Eobyk6MTxhLmxlbmd0aD8odD1bZSxlLFwiXCIsb10sYi5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/bGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoZSxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249UChlLHJbaV0pXT0hKHRbbl09cltpXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gYShlLDAsdCl9KTphfX0scHNldWRvczp7bm90OmxlKGZ1bmN0aW9uKGUpe3ZhciByPVtdLGk9W10scz1mKGUucmVwbGFjZSgkLFwiJDFcIikpO3JldHVybiBzW1NdP2xlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG89cyhlLG51bGwscixbXSksYT1lLmxlbmd0aDt3aGlsZShhLS0pKGk9b1thXSkmJihlW2FdPSEodFthXT1pKSl9KTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHJbMF09ZSxzKHIsbnVsbCxuLGkpLHJbMF09bnVsbCwhaS5wb3AoKX19KSxoYXM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiAwPHNlKHQsZSkubGVuZ3RofX0pLGNvbnRhaW5zOmxlKGZ1bmN0aW9uKHQpe3JldHVybiB0PXQucmVwbGFjZSh0ZSxuZSksZnVuY3Rpb24oZSl7cmV0dXJuLTE8KGUudGV4dENvbnRlbnR8fG8oZSkpLmluZGV4T2YodCl9fSksbGFuZzpsZShmdW5jdGlvbihuKXtyZXR1cm4gVi50ZXN0KG58fFwiXCIpfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK24pLG49bi5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGUpe3ZhciB0O2Rve2lmKHQ9RT9lLmxhbmc6ZS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybih0PXQudG9Mb3dlckNhc2UoKSk9PT1ufHwwPT09dC5pbmRleE9mKG4rXCItXCIpfXdoaWxlKChlPWUucGFyZW50Tm9kZSkmJjE9PT1lLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5sb2NhdGlvbiYmbi5sb2NhdGlvbi5oYXNoO3JldHVybiB0JiZ0LnNsaWNlKDEpPT09ZS5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWF9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Qy5hY3RpdmVFbGVtZW50JiYoIUMuaGFzRm9jdXN8fEMuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6Z2UoITEpLGRpc2FibGVkOmdlKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBKLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6dmUoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnZlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTp2ZShmdW5jdGlvbihlLHQsbil7cmV0dXJuW248MD9uK3Q6bl19KSxldmVuOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksb2RkOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTE7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0OnQ8bj90Om47MDw9LS1yOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDp2ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjsrK3I8dDspZS5wdXNoKHIpO3JldHVybiBlfSl9fSkucHNldWRvcy5udGg9Yi5wc2V1ZG9zLmVxLHtyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSliLnBzZXVkb3NbZV09ZGUoZSk7Zm9yKGUgaW57c3VibWl0OiEwLHJlc2V0OiEwfSliLnBzZXVkb3NbZV09aGUoZSk7ZnVuY3Rpb24gbWUoKXt9ZnVuY3Rpb24geGUoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7dDxuO3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGJlKHMsZSx0KXt2YXIgdT1lLmRpcixsPWUubmV4dCxjPWx8fHUsZj10JiZcInBhcmVudE5vZGVcIj09PWMscD1yKys7cmV0dXJuIGUuZmlyc3Q/ZnVuY3Rpb24oZSx0LG4pe3doaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilyZXR1cm4gcyhlLHQsbik7cmV0dXJuITF9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT1bayxwXTtpZihuKXt3aGlsZShlPWVbdV0paWYoKDE9PT1lLm5vZGVUeXBlfHxmKSYmcyhlLHQsbikpcmV0dXJuITB9ZWxzZSB3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpaWYoaT0obz1lW1NdfHwoZVtTXT17fSkpW2UudW5pcXVlSURdfHwob1tlLnVuaXF1ZUlEXT17fSksbCYmbD09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSllPWVbdV18fGU7ZWxzZXtpZigocj1pW2NdKSYmclswXT09PWsmJnJbMV09PT1wKXJldHVybiBhWzJdPXJbMl07aWYoKGlbY109YSlbMl09cyhlLHQsbikpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHdlKGkpe3JldHVybiAxPGkubGVuZ3RoP2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj1pLmxlbmd0aDt3aGlsZShyLS0paWYoIWlbcl0oZSx0LG4pKXJldHVybiExO3JldHVybiEwfTppWzBdfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O3M8dTtzKyspKG89ZVtzXSkmJihuJiYhbihvLHIsaSl8fChhLnB1c2gobyksbCYmdC5wdXNoKHMpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gQ2UoZCxoLGcsdix5LGUpe3JldHVybiB2JiYhdltTXSYmKHY9Q2UodikpLHkmJiF5W1NdJiYoeT1DZSh5LGUpKSxsZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1bXSx1PVtdLGw9dC5sZW5ndGgsYz1lfHxmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXNlKGUsdFtyXSxuKTtyZXR1cm4gbn0oaHx8XCIqXCIsbi5ub2RlVHlwZT9bbl06bixbXSksZj0hZHx8IWUmJmg/YzpUZShjLHMsZCxuLHIpLHA9Zz95fHwoZT9kOmx8fHYpP1tdOnQ6ZjtpZihnJiZnKGYscCxuLHIpLHYpe2k9VGUocCx1KSx2KGksW10sbixyKSxvPWkubGVuZ3RoO3doaWxlKG8tLSkoYT1pW29dKSYmKHBbdVtvXV09IShmW3Vbb11dPWEpKX1pZihlKXtpZih5fHxkKXtpZih5KXtpPVtdLG89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiZpLnB1c2goZltvXT1hKTt5KG51bGwscD1bXSxpLHIpfW89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiYtMTwoaT15P1AoZSxhKTpzW29dKSYmKGVbaV09ISh0W2ldPWEpKX19ZWxzZSBwPVRlKHA9PT10P3Auc3BsaWNlKGwscC5sZW5ndGgpOnApLHk/eShudWxsLHQscCxyKTpILmFwcGx5KHQscCl9KX1mdW5jdGlvbiBFZShlKXtmb3IodmFyIGksdCxuLHI9ZS5sZW5ndGgsbz1iLnJlbGF0aXZlW2VbMF0udHlwZV0sYT1vfHxiLnJlbGF0aXZlW1wiIFwiXSxzPW8/MTowLHU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1pfSxhLCEwKSxsPWJlKGZ1bmN0aW9uKGUpe3JldHVybi0xPFAoaSxlKX0sYSwhMCksYz1bZnVuY3Rpb24oZSx0LG4pe3ZhciByPSFvJiYobnx8dCE9PXcpfHwoKGk9dCkubm9kZVR5cGU/dShlLHQsbik6bChlLHQsbikpO3JldHVybiBpPW51bGwscn1dO3M8cjtzKyspaWYodD1iLnJlbGF0aXZlW2Vbc10udHlwZV0pYz1bYmUod2UoYyksdCldO2Vsc2V7aWYoKHQ9Yi5maWx0ZXJbZVtzXS50eXBlXS5hcHBseShudWxsLGVbc10ubWF0Y2hlcykpW1NdKXtmb3Iobj0rK3M7bjxyO24rKylpZihiLnJlbGF0aXZlW2Vbbl0udHlwZV0pYnJlYWs7cmV0dXJuIENlKDE8cyYmd2UoYyksMTxzJiZ4ZShlLnNsaWNlKDAscy0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVtzLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKCQsXCIkMVwiKSx0LHM8biYmRWUoZS5zbGljZShzLG4pKSxuPHImJkVlKGU9ZS5zbGljZShuKSksbjxyJiZ4ZShlKSl9Yy5wdXNoKHQpfXJldHVybiB3ZShjKX1yZXR1cm4gbWUucHJvdG90eXBlPWIuZmlsdGVycz1iLnBzZXVkb3MsYi5zZXRGaWx0ZXJzPW5ldyBtZSxoPXNlLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbD14W2UrXCIgXCJdO2lmKGwpcmV0dXJuIHQ/MDpsLnNsaWNlKDApO2E9ZSxzPVtdLHU9Yi5wcmVGaWx0ZXI7d2hpbGUoYSl7Zm9yKG8gaW4gbiYmIShyPV8uZXhlYyhhKSl8fChyJiYoYT1hLnNsaWNlKHJbMF0ubGVuZ3RoKXx8YSkscy5wdXNoKGk9W10pKSxuPSExLChyPXouZXhlYyhhKSkmJihuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoJCxcIiBcIil9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKSxiLmZpbHRlcikhKHI9R1tvXS5leGVjKGEpKXx8dVtvXSYmIShyPXVbb10ocikpfHwobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6byxtYXRjaGVzOnJ9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9hLmxlbmd0aDphP3NlLmVycm9yKGUpOngoZSxzKS5zbGljZSgwKX0sZj1zZS5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4sdix5LG0seCxyLGk9W10sbz1bXSxhPUFbZStcIiBcIl07aWYoIWEpe3R8fCh0PWgoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShhPUVlKHRbbl0pKVtTXT9pLnB1c2goYSk6by5wdXNoKGEpOyhhPUEoZSwodj1vLG09MDwoeT1pKS5sZW5ndGgseD0wPHYubGVuZ3RoLHI9ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdT0wLGw9XCIwXCIsYz1lJiZbXSxmPVtdLHA9dyxkPWV8fHgmJmIuZmluZC5UQUcoXCIqXCIsaSksaD1rKz1udWxsPT1wPzE6TWF0aC5yYW5kb20oKXx8LjEsZz1kLmxlbmd0aDtmb3IoaSYmKHc9dD09Q3x8dHx8aSk7bCE9PWcmJm51bGwhPShvPWRbbF0pO2wrKyl7aWYoeCYmbyl7YT0wLHR8fG8ub3duZXJEb2N1bWVudD09Q3x8KFQobyksbj0hRSk7d2hpbGUocz12W2ErK10paWYocyhvLHR8fEMsbikpe3IucHVzaChvKTticmVha31pJiYoaz1oKX1tJiYoKG89IXMmJm8pJiZ1LS0sZSYmYy5wdXNoKG8pKX1pZih1Kz1sLG0mJmwhPT11KXthPTA7d2hpbGUocz15W2ErK10pcyhjLGYsdCxuKTtpZihlKXtpZigwPHUpd2hpbGUobC0tKWNbbF18fGZbbF18fChmW2xdPXEuY2FsbChyKSk7Zj1UZShmKX1ILmFwcGx5KHIsZiksaSYmIWUmJjA8Zi5sZW5ndGgmJjE8dSt5Lmxlbmd0aCYmc2UudW5pcXVlU29ydChyKX1yZXR1cm4gaSYmKGs9aCx3PXApLGN9LG0/bGUocik6cikpKS5zZWxlY3Rvcj1lfXJldHVybiBhfSxnPXNlLnNlbGVjdD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSxjPSFyJiZoKGU9bC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09Yy5sZW5ndGgpe2lmKDI8KG89Y1swXT1jWzBdLnNsaWNlKDApKS5sZW5ndGgmJlwiSURcIj09PShhPW9bMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiZFJiZiLnJlbGF0aXZlW29bMV0udHlwZV0pe2lmKCEodD0oYi5maW5kLklEKGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtsJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZShvLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPUcubmVlZHNDb250ZXh0LnRlc3QoZSk/MDpvLmxlbmd0aDt3aGlsZShpLS0pe2lmKGE9b1tpXSxiLnJlbGF0aXZlW3M9YS50eXBlXSlicmVhaztpZigodT1iLmZpbmRbc10pJiYocj11KGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSxlZS50ZXN0KG9bMF0udHlwZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYoby5zcGxpY2UoaSwxKSwhKGU9ci5sZW5ndGgmJnhlKG8pKSlyZXR1cm4gSC5hcHBseShuLHIpLG47YnJlYWt9fX1yZXR1cm4obHx8ZihlLGMpKShyLHQsIUUsbiwhdHx8ZWUudGVzdChlKSYmeWUodC5wYXJlbnROb2RlKXx8dCksbn0sZC5zb3J0U3RhYmxlPVMuc3BsaXQoXCJcIikuc29ydChqKS5qb2luKFwiXCIpPT09UyxkLmRldGVjdER1cGxpY2F0ZXM9ISFsLFQoKSxkLnNvcnREZXRhY2hlZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKEMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGZlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksZC5hdHRyaWJ1dGVzJiZjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8ZmUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGZlKFIsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSksc2V9KEMpO1MuZmluZD1kLFMuZXhwcj1kLnNlbGVjdG9ycyxTLmV4cHJbXCI6XCJdPVMuZXhwci5wc2V1ZG9zLFMudW5pcXVlU29ydD1TLnVuaXF1ZT1kLnVuaXF1ZVNvcnQsUy50ZXh0PWQuZ2V0VGV4dCxTLmlzWE1MRG9jPWQuaXNYTUwsUy5jb250YWlucz1kLmNvbnRhaW5zLFMuZXNjYXBlU2VsZWN0b3I9ZC5lc2NhcGU7dmFyIGg9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJlMoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxUPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxrPVMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQShlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIE49L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7ZnVuY3Rpb24gaihlLG4scil7cmV0dXJuIG0obik/Uy5ncmVwKGUsZnVuY3Rpb24oZSx0KXtyZXR1cm4hIW4uY2FsbChlLHQsZSkhPT1yfSk6bi5ub2RlVHlwZT9TLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PW4hPT1yfSk6XCJzdHJpbmdcIiE9dHlwZW9mIG4/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuLTE8aS5jYWxsKG4sZSkhPT1yfSk6Uy5maWx0ZXIobixlLHIpfVMuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09ci5ub2RlVHlwZT9TLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsZSk/W3JdOltdOlMuZmluZC5tYXRjaGVzKGUsUy5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSxTLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayhTKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7dDxyO3QrKylpZihTLmNvbnRhaW5zKGlbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PHI7dCsrKVMuZmluZChlLGlbdF0sbik7cmV0dXJuIDE8cj9TLnVuaXF1ZVNvcnQobik6bn0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFqKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGUmJmsudGVzdChlKT9TKGUpOmV8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEQscT0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLzsoUy5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8RCxcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoIShyPVwiPFwiPT09ZVswXSYmXCI+XCI9PT1lW2UubGVuZ3RoLTFdJiYzPD1lLmxlbmd0aD9bbnVsbCxlLG51bGxdOnEuZXhlYyhlKSl8fCFyWzFdJiZ0KXJldHVybiF0fHx0LmpxdWVyeT8odHx8bikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKHQpLmZpbmQoZSk7aWYoclsxXSl7aWYodD10IGluc3RhbmNlb2YgUz90WzBdOnQsUy5tZXJnZSh0aGlzLFMucGFyc2VIVE1MKHJbMV0sdCYmdC5ub2RlVHlwZT90Lm93bmVyRG9jdW1lbnR8fHQ6RSwhMCkpLE4udGVzdChyWzFdKSYmUy5pc1BsYWluT2JqZWN0KHQpKWZvcihyIGluIHQpbSh0aGlzW3JdKT90aGlzW3JdKHRbcl0pOnRoaXMuYXR0cihyLHRbcl0pO3JldHVybiB0aGlzfXJldHVybihpPUUuZ2V0RWxlbWVudEJ5SWQoclsyXSkpJiYodGhpc1swXT1pLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXNbMF09ZSx0aGlzLmxlbmd0aD0xLHRoaXMpOm0oZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUoUyk6Uy5tYWtlQXJyYXkoZSx0aGlzKX0pLnByb3RvdHlwZT1TLmZuLEQ9UyhFKTt2YXIgTD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxIPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O2Z1bmN0aW9uIE8oZSx0KXt3aGlsZSgoZT1lW3RdKSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfVMuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oZSl7dmFyIHQ9UyhlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZihTLmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXRoaXMubGVuZ3RoLG89W10sYT1cInN0cmluZ1wiIT10eXBlb2YgZSYmUyhlKTtpZighay50ZXN0KGUpKWZvcig7cjxpO3IrKylmb3Iobj10aGlzW3JdO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihhPy0xPGEuaW5kZXgobik6MT09PW4ubm9kZVR5cGUmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSkpe28ucHVzaChuKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soMTxvLmxlbmd0aD9TLnVuaXF1ZVNvcnQobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP2kuY2FsbChTKGUpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy51bmlxdWVTb3J0KFMubWVyZ2UodGhpcy5nZXQoKSxTKGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLFMuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBPKGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIFQoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lLmNvbnRlbnREb2N1bWVudCYmcihlLmNvbnRlbnREb2N1bWVudCk/ZS5jb250ZW50RG9jdW1lbnQ6KEEoZSxcInRlbXBsYXRlXCIpJiYoZT1lLmNvbnRlbnR8fGUpLFMubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihyLGkpe1MuZm5bcl09ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLm1hcCh0aGlzLGksZSk7cmV0dXJuXCJVbnRpbFwiIT09ci5zbGljZSgtNSkmJih0PWUpLHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1TLmZpbHRlcih0LG4pKSwxPHRoaXMubGVuZ3RoJiYoSFtyXXx8Uy51bmlxdWVTb3J0KG4pLEwudGVzdChyKSYmbi5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBQPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBSKGUpe3JldHVybiBlfWZ1bmN0aW9uIE0oZSl7dGhyb3cgZX1mdW5jdGlvbiBJKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZtKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJm0oaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1TLkNhbGxiYWNrcz1mdW5jdGlvbihyKXt2YXIgZSxuO3I9XCJzdHJpbmdcIj09dHlwZW9mIHI/KGU9cixuPXt9LFMuZWFjaChlLm1hdGNoKFApfHxbXSxmdW5jdGlvbihlLHQpe25bdF09ITB9KSxuKTpTLmV4dGVuZCh7fSxyKTt2YXIgaSx0LG8sYSxzPVtdLHU9W10sbD0tMSxjPWZ1bmN0aW9uKCl7Zm9yKGE9YXx8ci5vbmNlLG89aT0hMDt1Lmxlbmd0aDtsPS0xKXt0PXUuc2hpZnQoKTt3aGlsZSgrK2w8cy5sZW5ndGgpITE9PT1zW2xdLmFwcGx5KHRbMF0sdFsxXSkmJnIuc3RvcE9uRmFsc2UmJihsPXMubGVuZ3RoLHQ9ITEpfXIubWVtb3J5fHwodD0hMSksaT0hMSxhJiYocz10P1tdOlwiXCIpfSxmPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHQmJiFpJiYobD1zLmxlbmd0aC0xLHUucHVzaCh0KSksZnVuY3Rpb24gbihlKXtTLmVhY2goZSxmdW5jdGlvbihlLHQpe20odCk/ci51bmlxdWUmJmYuaGFzKHQpfHxzLnB1c2godCk6dCYmdC5sZW5ndGgmJlwic3RyaW5nXCIhPT13KHQpJiZuKHQpfSl9KGFyZ3VtZW50cyksdCYmIWkmJmMoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIFMuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgtMTwobj1TLmluQXJyYXkodCxzLG4pKSlzLnNwbGljZShuLDEpLG48PWwmJmwtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT8tMTxTLmluQXJyYXkoZSxzKTowPHMubGVuZ3RofSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBzJiYocz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBhPXU9W10scz10PVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hc30sbG9jazpmdW5jdGlvbigpe3JldHVybiBhPXU9W10sdHx8aXx8KHM9dD1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWF9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGF8fCh0PVtlLCh0PXR8fFtdKS5zbGljZT90LnNsaWNlKCk6dF0sdS5wdXNoKHQpLGl8fGMoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBmLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhb319O3JldHVybiBmfSxTLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oZSl7dmFyIG89W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxpPVwicGVuZGluZ1wiLGE9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBzLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiBhLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBpPWFyZ3VtZW50cztyZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihyKXtTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPW0oaVt0WzRdXSkmJmlbdFs0XV07c1t0WzFdXShmdW5jdGlvbigpe3ZhciBlPW4mJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJm0oZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyhyLm5vdGlmeSkuZG9uZShyLnJlc29sdmUpLmZhaWwoci5yZWplY3QpOnJbdFswXStcIldpdGhcIl0odGhpcyxuP1tlXTphcmd1bWVudHMpfSl9KSxpPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24odCxuLHIpe3ZhciB1PTA7ZnVuY3Rpb24gbChpLG8sYSxzKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj10aGlzLHI9YXJndW1lbnRzLGU9ZnVuY3Rpb24oKXt2YXIgZSx0O2lmKCEoaTx1KSl7aWYoKGU9YS5hcHBseShuLHIpKT09PW8ucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7dD1lJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZlLnRoZW4sbSh0KT9zP3QuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSk6KHUrKyx0LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scyksbCh1LG8sUixvLm5vdGlmeVdpdGgpKSk6KGEhPT1SJiYobj12b2lkIDAscj1bZV0pLChzfHxvLnJlc29sdmVXaXRoKShuLHIpKX19LHQ9cz9lOmZ1bmN0aW9uKCl7dHJ5e2UoKX1jYXRjaChlKXtTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJlMuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLHQuc3RhY2tUcmFjZSksdTw9aSsxJiYoYSE9PU0mJihuPXZvaWQgMCxyPVtlXSksby5yZWplY3RXaXRoKG4scikpfX07aT90KCk6KFMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYodC5zdGFja1RyYWNlPVMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLEMuc2V0VGltZW91dCh0KSl9fXJldHVybiBTLkRlZmVycmVkKGZ1bmN0aW9uKGUpe29bMF1bM10uYWRkKGwoMCxlLG0ocik/cjpSLGUubm90aWZ5V2l0aCkpLG9bMV1bM10uYWRkKGwoMCxlLG0odCk/dDpSKSksb1syXVszXS5hZGQobCgwLGUsbShuKT9uOk0pKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT9TLmV4dGVuZChlLGEpOmF9fSxzPXt9O3JldHVybiBTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPXRbMl0scj10WzVdO2FbdFsxXV09bi5hZGQsciYmbi5hZGQoZnVuY3Rpb24oKXtpPXJ9LG9bMy1lXVsyXS5kaXNhYmxlLG9bMy1lXVszXS5kaXNhYmxlLG9bMF1bMl0ubG9jayxvWzBdWzNdLmxvY2spLG4uYWRkKHRbM10uZmlyZSksc1t0WzBdXT1mdW5jdGlvbigpe3JldHVybiBzW3RbMF0rXCJXaXRoXCJdKHRoaXM9PT1zP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sc1t0WzBdK1wiV2l0aFwiXT1uLmZpcmVXaXRofSksYS5wcm9taXNlKHMpLGUmJmUuY2FsbChzLHMpLHN9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCx0PW4scj1BcnJheSh0KSxpPXMuY2FsbChhcmd1bWVudHMpLG89Uy5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JbdF09dGhpcyxpW3RdPTE8YXJndW1lbnRzLmxlbmd0aD9zLmNhbGwoYXJndW1lbnRzKTplLC0tbnx8by5yZXNvbHZlV2l0aChyLGkpfX07aWYobjw9MSYmKEkoZSxvLmRvbmUoYSh0KSkucmVzb2x2ZSxvLnJlamVjdCwhbiksXCJwZW5kaW5nXCI9PT1vLnN0YXRlKCl8fG0oaVt0XSYmaVt0XS50aGVuKSkpcmV0dXJuIG8udGhlbigpO3doaWxlKHQtLSlJKGlbdF0sYSh0KSxvLnJlamVjdCk7cmV0dXJuIG8ucHJvbWlzZSgpfX0pO3ZhciBXPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO1MuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihlLHQpe0MuY29uc29sZSYmQy5jb25zb2xlLndhcm4mJmUmJlcudGVzdChlLm5hbWUpJiZDLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2UubWVzc2FnZSxlLnN0YWNrLHQpfSxTLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGUpe0Muc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGV9KX07dmFyIEY9Uy5EZWZlcnJlZCgpO2Z1bmN0aW9uIEIoKXtFLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpLFMucmVhZHkoKX1TLmZuLnJlYWR5PWZ1bmN0aW9uKGUpe3JldHVybiBGLnRoZW4oZSlbXCJjYXRjaFwiXShmdW5jdGlvbihlKXtTLnJlYWR5RXhjZXB0aW9uKGUpfSksdGhpc30sUy5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oZSl7KCEwPT09ZT8tLVMucmVhZHlXYWl0OlMuaXNSZWFkeSl8fChTLmlzUmVhZHk9ITApIT09ZSYmMDwtLVMucmVhZHlXYWl0fHxGLnJlc29sdmVXaXRoKEUsW1NdKX19KSxTLnJlYWR5LnRoZW49Ri50aGVuLFwiY29tcGxldGVcIj09PUUucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1FLnJlYWR5U3RhdGUmJiFFLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9DLnNldFRpbWVvdXQoUy5yZWFkeSk6KEUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixCKSxDLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsQikpO3ZhciAkPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEpe3ZhciBzPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoXCJvYmplY3RcIj09PXcobikpZm9yKHMgaW4gaT0hMCxuKSQoZSx0LHMsbltzXSwhMCxvLGEpO2Vsc2UgaWYodm9pZCAwIT09ciYmKGk9ITAsbShyKXx8KGE9ITApLGwmJihhPyh0LmNhbGwoZSxyKSx0PW51bGwpOihsPXQsdD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGwuY2FsbChTKGUpLG4pfSkpLHQpKWZvcig7czx1O3MrKyl0KGVbc10sbixhP3I6ci5jYWxsKGVbc10scyx0KGVbc10sbikpKTtyZXR1cm4gaT9lOmw/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LF89L14tbXMtLyx6PS8tKFthLXpdKS9nO2Z1bmN0aW9uIFUoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIGUucmVwbGFjZShfLFwibXMtXCIpLnJlcGxhY2UoeixVKX12YXIgVj1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIEcoKXt0aGlzLmV4cGFuZG89Uy5leHBhbmRvK0cudWlkKyt9Ry51aWQ9MSxHLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxWKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpW1godCldPW47ZWxzZSBmb3IociBpbiB0KWlbWChyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtYKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09cil7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKFgpOih0PVgodCkpaW4gcj9bdF06dC5tYXRjaChQKXx8W10pLmxlbmd0aDt3aGlsZShuLS0pZGVsZXRlIHJbdFtuXV19KHZvaWQgMD09PXR8fFMuaXNFbXB0eU9iamVjdChyKSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGVbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09dCYmIVMuaXNFbXB0eU9iamVjdCh0KX19O3ZhciBZPW5ldyBHLFE9bmV3IEcsSj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sSz0vW0EtWl0vZztmdW5jdGlvbiBaKGUsdCxuKXt2YXIgcixpO2lmKHZvaWQgMD09PW4mJjE9PT1lLm5vZGVUeXBlKWlmKHI9XCJkYXRhLVwiK3QucmVwbGFjZShLLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksXCJzdHJpbmdcIj09dHlwZW9mKG49ZS5nZXRBdHRyaWJ1dGUocikpKXt0cnl7bj1cInRydWVcIj09PShpPW4pfHxcImZhbHNlXCIhPT1pJiYoXCJudWxsXCI9PT1pP251bGw6aT09PStpK1wiXCI/K2k6Si50ZXN0KGkpP0pTT04ucGFyc2UoaSk6aSl9Y2F0Y2goZSl7fVEuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufVMuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBRLmhhc0RhdGEoZSl8fFkuaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFEuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1EucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gWS5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1kucmVtb3ZlKGUsdCl9fSksUy5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24obixlKXt2YXIgdCxyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PW4pe2lmKHRoaXMubGVuZ3RoJiYoaT1RLmdldChvKSwxPT09by5ub2RlVHlwZSYmIVkuZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXt0PWEubGVuZ3RoO3doaWxlKHQtLSlhW3RdJiYwPT09KHI9YVt0XS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPVgoci5zbGljZSg1KSksWihvLHIsaVtyXSkpO1kuc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGl9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG4/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuKX0pOiQodGhpcyxmdW5jdGlvbihlKXt2YXIgdDtpZihvJiZ2b2lkIDA9PT1lKXJldHVybiB2b2lkIDAhPT0odD1RLmdldChvLG4pKT90OnZvaWQgMCE9PSh0PVoobyxuKSk/dDp2b2lkIDA7dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuLGUpfSl9LG51bGwsZSwxPGFyZ3VtZW50cy5sZW5ndGgsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1EucmVtb3ZlKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKGUpcmV0dXJuIHQ9KHR8fFwiZnhcIikrXCJxdWV1ZVwiLHI9WS5nZXQoZSx0KSxuJiYoIXJ8fEFycmF5LmlzQXJyYXkobik/cj1ZLmFjY2VzcyhlLHQsUy5tYWtlQXJyYXkobikpOnIucHVzaChuKSkscnx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj1TLnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPVMuX3F1ZXVlSG9va3MoZSx0KTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLGkmJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3AsaS5jYWxsKGUsZnVuY3Rpb24oKXtTLmRlcXVldWUoZSx0KX0sbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBZLmdldChlLG4pfHxZLmFjY2VzcyhlLG4se2VtcHR5OlMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7WS5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSxTLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24odCxuKXt2YXIgZT0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCJmeFwiLGUtLSksYXJndW1lbnRzLmxlbmd0aDxlP1MucXVldWUodGhpc1swXSx0KTp2b2lkIDA9PT1uP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9Uy5xdWV1ZSh0aGlzLHQsbik7Uy5fcXVldWVIb29rcyh0aGlzLHQpLFwiZnhcIj09PXQmJlwiaW5wcm9ncmVzc1wiIT09ZVswXSYmUy5kZXF1ZXVlKHRoaXMsdCl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9Uy5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksZT1lfHxcImZ4XCI7d2hpbGUoYS0tKShuPVkuZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgZWU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLHRlPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2VlK1wiKShbYS16JV0qKSRcIixcImlcIiksbmU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLHJlPUUuZG9jdW1lbnRFbGVtZW50LGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX0sb2U9e2NvbXBvc2VkOiEwfTtyZS5nZXRSb290Tm9kZSYmKGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8ZS5nZXRSb290Tm9kZShvZSk9PT1lLm93bmVyRG9jdW1lbnR9KTt2YXIgYWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJmllKGUpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIpfTtmdW5jdGlvbiBzZShlLHQsbixyKXt2YXIgaSxvLGE9MjAscz1yP2Z1bmN0aW9uKCl7cmV0dXJuIHIuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIFMuY3NzKGUsdCxcIlwiKX0sdT1zKCksbD1uJiZuWzNdfHwoUy5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9ZS5ub2RlVHlwZSYmKFMuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJnRlLmV4ZWMoUy5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe3UvPTIsbD1sfHxjWzNdLGM9K3V8fDE7d2hpbGUoYS0tKVMuc3R5bGUoZSx0LGMrbCksKDEtbykqKDEtKG89cygpL3V8fC41KSk8PTAmJihhPTApLGMvPW87Yyo9MixTLnN0eWxlKGUsdCxjK2wpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrdXx8MCxpPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLHImJihyLnVuaXQ9bCxyLnN0YXJ0PWMsci5lbmQ9aSkpLGl9dmFyIHVlPXt9O2Z1bmN0aW9uIGxlKGUsdCl7Zm9yKHZhciBuLHIsaSxvLGEscyx1LGw9W10sYz0wLGY9ZS5sZW5ndGg7YzxmO2MrKykocj1lW2NdKS5zdHlsZSYmKG49ci5zdHlsZS5kaXNwbGF5LHQ/KFwibm9uZVwiPT09biYmKGxbY109WS5nZXQocixcImRpc3BsYXlcIil8fG51bGwsbFtjXXx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmYWUocikmJihsW2NdPSh1PWE9bz12b2lkIDAsYT0oaT1yKS5vd25lckRvY3VtZW50LHM9aS5ub2RlTmFtZSwodT11ZVtzXSl8fChvPWEuYm9keS5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnQocykpLHU9Uy5jc3MobyxcImRpc3BsYXlcIiksby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLFwibm9uZVwiPT09dSYmKHU9XCJibG9ja1wiKSx1ZVtzXT11KSkpKTpcIm5vbmVcIiE9PW4mJihsW2NdPVwibm9uZVwiLFkuc2V0KHIsXCJkaXNwbGF5XCIsbikpKTtmb3IoYz0wO2M8ZjtjKyspbnVsbCE9bFtjXSYmKGVbY10uc3R5bGUuZGlzcGxheT1sW2NdKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZT9lP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2FlKHRoaXMpP1ModGhpcykuc2hvdygpOlModGhpcykuaGlkZSgpfSl9fSk7dmFyIGNlLGZlLHBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGRlPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSxoZT0vXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pO2NlPUUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcImRpdlwiKSksKGZlPUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxmZS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGZlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksY2UuYXBwZW5kQ2hpbGQoZmUpLHkuY2hlY2tDbG9uZT1jZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsY2UuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLHkubm9DbG9uZUNoZWNrZWQ9ISFjZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWUsY2UuaW5uZXJIVE1MPVwiPG9wdGlvbj48L29wdGlvbj5cIix5Lm9wdGlvbj0hIWNlLmxhc3RDaGlsZDt2YXIgZ2U9e3RoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2Z1bmN0aW9uIHZlKGUsdCl7dmFyIG47cmV0dXJuIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbD9lLnF1ZXJ5U2VsZWN0b3JBbGwodHx8XCIqXCIpOltdLHZvaWQgMD09PXR8fHQmJkEoZSx0KT9TLm1lcmdlKFtlXSxuKTpufWZ1bmN0aW9uIHllKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKVkuc2V0KGVbbl0sXCJnbG9iYWxFdmFsXCIsIXR8fFkuZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX1nZS50Ym9keT1nZS50Zm9vdD1nZS5jb2xncm91cD1nZS5jYXB0aW9uPWdlLnRoZWFkLGdlLnRoPWdlLnRkLHkub3B0aW9ufHwoZ2Uub3B0Z3JvdXA9Z2Uub3B0aW9uPVsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdKTt2YXIgbWU9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHhlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGEscyx1LGwsYyxmPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHA9W10sZD0wLGg9ZS5sZW5ndGg7ZDxoO2QrKylpZigobz1lW2RdKXx8MD09PW8paWYoXCJvYmplY3RcIj09PXcobykpUy5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYobWUudGVzdChvKSl7YT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkscz0oZGUuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXStTLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKWE9YS5sYXN0Q2hpbGQ7Uy5tZXJnZShwLGEuY2hpbGROb2RlcyksKGE9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD1cIlwifWVsc2UgcC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO2YudGV4dENvbnRlbnQ9XCJcIixkPTA7d2hpbGUobz1wW2QrK10paWYociYmLTE8Uy5pbkFycmF5KG8scikpaSYmaS5wdXNoKG8pO2Vsc2UgaWYobD1pZShvKSxhPXZlKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmeWUoYSksbil7Yz0wO3doaWxlKG89YVtjKytdKWhlLnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBmfXZhciBiZT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIHdlKCl7cmV0dXJuITB9ZnVuY3Rpb24gVGUoKXtyZXR1cm4hMX1mdW5jdGlvbiBDZShlLHQpe3JldHVybiBlPT09ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEUuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fSgpPT0oXCJmb2N1c1wiPT09dCl9ZnVuY3Rpb24gRWUoZSx0LG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe2ZvcihzIGluXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj12b2lkIDApLHQpRWUoZSxzLG4scix0W3NdLG8pO3JldHVybiBlfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dm9pZCAwKTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXZvaWQgMCk6KGk9cixyPW4sbj12b2lkIDApKSwhMT09PWkpaT1UZTtlbHNlIGlmKCFpKXJldHVybiBlO3JldHVybiAxPT09byYmKGE9aSwoaT1mdW5jdGlvbihlKXtyZXR1cm4gUygpLm9mZihlKSxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLmd1aWQ9YS5ndWlkfHwoYS5ndWlkPVMuZ3VpZCsrKSksZS5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC5hZGQodGhpcyx0LGkscixuKX0pfWZ1bmN0aW9uIFNlKGUsaSxvKXtvPyhZLnNldChlLGksITEpLFMuZXZlbnQuYWRkKGUsaSx7bmFtZXNwYWNlOiExLGhhbmRsZXI6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPVkuZ2V0KHRoaXMsaSk7aWYoMSZlLmlzVHJpZ2dlciYmdGhpc1tpXSl7aWYoci5sZW5ndGgpKFMuZXZlbnQuc3BlY2lhbFtpXXx8e30pLmRlbGVnYXRlVHlwZSYmZS5zdG9wUHJvcGFnYXRpb24oKTtlbHNlIGlmKHI9cy5jYWxsKGFyZ3VtZW50cyksWS5zZXQodGhpcyxpLHIpLHQ9byh0aGlzLGkpLHRoaXNbaV0oKSxyIT09KG49WS5nZXQodGhpcyxpKSl8fHQ/WS5zZXQodGhpcyxpLCExKTpuPXt9LHIhPT1uKXJldHVybiBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLGUucHJldmVudERlZmF1bHQoKSxuJiZuLnZhbHVlfWVsc2Ugci5sZW5ndGgmJihZLnNldCh0aGlzLGkse3ZhbHVlOlMuZXZlbnQudHJpZ2dlcihTLmV4dGVuZChyWzBdLFMuRXZlbnQucHJvdG90eXBlKSxyLnNsaWNlKDEpLHRoaXMpfSksZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSl9fSkpOnZvaWQgMD09PVkuZ2V0KGUsaSkmJlMuZXZlbnQuYWRkKGUsaSx3ZSl9Uy5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbih0LGUsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcsdj1ZLmdldCh0KTtpZihWKHQpKXtuLmhhbmRsZXImJihuPShvPW4pLmhhbmRsZXIsaT1vLnNlbGVjdG9yKSxpJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJlLGkpLG4uZ3VpZHx8KG4uZ3VpZD1TLmd1aWQrKyksKHU9di5ldmVudHMpfHwodT12LmV2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpKSwoYT12LmhhbmRsZSl8fChhPXYuaGFuZGxlPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBTJiZTLmV2ZW50LnRyaWdnZXJlZCE9PWUudHlwZT9TLmV2ZW50LmRpc3BhdGNoLmFwcGx5KHQsYXJndW1lbnRzKTp2b2lkIDB9KSxsPShlPShlfHxcIlwiKS5tYXRjaChQKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWQ9Zz0ocz1iZS5leGVjKGVbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkJiYoZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGQsZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGM9Uy5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6cixoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6aSxuZWVkc0NvbnRleHQ6aSYmUy5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGkpLG5hbWVzcGFjZTpoLmpvaW4oXCIuXCIpfSxvKSwocD11W2RdKXx8KChwPXVbZF09W10pLmRlbGVnYXRlQ291bnQ9MCxmLnNldHVwJiYhMSE9PWYuc2V0dXAuY2FsbCh0LHIsaCxhKXx8dC5hZGRFdmVudExpc3RlbmVyJiZ0LmFkZEV2ZW50TGlzdGVuZXIoZCxhKSksZi5hZGQmJihmLmFkZC5jYWxsKHQsYyksYy5oYW5kbGVyLmd1aWR8fChjLmhhbmRsZXIuZ3VpZD1uLmd1aWQpKSxpP3Auc3BsaWNlKHAuZGVsZWdhdGVDb3VudCsrLDAsYyk6cC5wdXNoKGMpLFMuZXZlbnQuZ2xvYmFsW2RdPSEwKX19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcsdj1ZLmhhc0RhdGEoZSkmJlkuZ2V0KGUpO2lmKHYmJih1PXYuZXZlbnRzKSl7bD0odD0odHx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlpZihkPWc9KHM9YmUuZXhlYyh0W2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCl7Zj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHA9dVtkPShyP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkXXx8W10scz1zWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksYT1vPXAubGVuZ3RoO3doaWxlKG8tLSljPXBbb10sIWkmJmchPT1jLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1jLmd1aWR8fHMmJiFzLnRlc3QoYy5uYW1lc3BhY2UpfHxyJiZyIT09Yy5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFjLnNlbGVjdG9yKXx8KHAuc3BsaWNlKG8sMSksYy5zZWxlY3RvciYmcC5kZWxlZ2F0ZUNvdW50LS0sZi5yZW1vdmUmJmYucmVtb3ZlLmNhbGwoZSxjKSk7YSYmIXAubGVuZ3RoJiYoZi50ZWFyZG93biYmITEhPT1mLnRlYXJkb3duLmNhbGwoZSxoLHYuaGFuZGxlKXx8Uy5yZW1vdmVFdmVudChlLGQsdi5oYW5kbGUpLGRlbGV0ZSB1W2RdKX1lbHNlIGZvcihkIGluIHUpUy5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtTLmlzRW1wdHlPYmplY3QodSkmJlkucmVtb3ZlKGUsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHM9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLHU9Uy5ldmVudC5maXgoZSksbD0oWS5nZXQodGhpcyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbdS50eXBlXXx8W10sYz1TLmV2ZW50LnNwZWNpYWxbdS50eXBlXXx8e307Zm9yKHNbMF09dSx0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylzW3RdPWFyZ3VtZW50c1t0XTtpZih1LmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsdSkpe2E9Uy5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsdSxsKSx0PTA7d2hpbGUoKGk9YVt0KytdKSYmIXUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7dS5jdXJyZW50VGFyZ2V0PWkuZWxlbSxuPTA7d2hpbGUoKG89aS5oYW5kbGVyc1tuKytdKSYmIXUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSl1LnJuYW1lc3BhY2UmJiExIT09by5uYW1lc3BhY2UmJiF1LnJuYW1lc3BhY2UudGVzdChvLm5hbWVzcGFjZSl8fCh1LmhhbmRsZU9iaj1vLHUuZGF0YT1vLmRhdGEsdm9pZCAwIT09KHI9KChTLmV2ZW50LnNwZWNpYWxbby5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fG8uaGFuZGxlcikuYXBwbHkoaS5lbGVtLHMpKSYmITE9PT0odS5yZXN1bHQ9cikmJih1LnByZXZlbnREZWZhdWx0KCksdS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHUpLHUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHM9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmMTw9ZS5idXR0b24pKWZvcig7bCE9PXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fCEwIT09bC5kaXNhYmxlZCkpe2ZvcihvPVtdLGE9e30sbj0wO248dTtuKyspdm9pZCAwPT09YVtpPShyPXRbbl0pLnNlbGVjdG9yK1wiIFwiXSYmKGFbaV09ci5uZWVkc0NvbnRleHQ/LTE8UyhpLHRoaXMpLmluZGV4KGwpOlMuZmluZChpLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksYVtpXSYmby5wdXNoKHIpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksc30sYWRkUHJvcDpmdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShTLkV2ZW50LnByb3RvdHlwZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6bShlKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gZSh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W3RdfSxzZXQ6ZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZX0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGUpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sY2xpY2s6e3NldHVwOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJlNlKHQsXCJjbGlja1wiLHdlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZTZSh0LFwiY2xpY2tcIiksITB9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZZLmdldCh0LFwiY2xpY2tcIil8fEEodCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXt2b2lkIDAhPT1lLnJlc3VsdCYmZS5vcmlnaW5hbEV2ZW50JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fX0sUy5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0sUy5FdmVudD1mdW5jdGlvbihlLHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIFMuRXZlbnQpKXJldHVybiBuZXcgUy5FdmVudChlLHQpO2UmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWUuZGVmYXVsdFByZXZlbnRlZCYmITE9PT1lLnJldHVyblZhbHVlP3dlOlRlLHRoaXMudGFyZ2V0PWUudGFyZ2V0JiYzPT09ZS50YXJnZXQubm9kZVR5cGU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9ZS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1lLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1lLHQmJlMuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fERhdGUubm93KCksdGhpc1tTLmV4cGFuZG9dPSEwfSxTLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6Uy5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6VGUsaXNQcm9wYWdhdGlvblN0b3BwZWQ6VGUsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6VGUsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9d2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9d2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXdlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxTLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY29kZTohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDohMH0sUy5ldmVudC5hZGRQcm9wKSxTLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihlLHQpe1MuZXZlbnQuc3BlY2lhbFtlXT17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gU2UodGhpcyxlLENlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBTZSh0aGlzLGUpLCEwfSxfZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybiEwfSxkZWxlZ2F0ZVR5cGU6dH19KSxTLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oZSxpKXtTLmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTppLGJpbmRUeXBlOmksaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZS5yZWxhdGVkVGFyZ2V0LHI9ZS5oYW5kbGVPYmo7cmV0dXJuIG4mJihuPT09dGhpc3x8Uy5jb250YWlucyh0aGlzLG4pKXx8KGUudHlwZT1yLm9yaWdUeXBlLHQ9ci5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxlLnR5cGU9aSksdH19fSksUy5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBFZSh0aGlzLGUsdCxuLHIpfSxvbmU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIEVlKHRoaXMsZSx0LG4sciwxKX0sb2ZmOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKGUmJmUucHJldmVudERlZmF1bHQmJmUuaGFuZGxlT2JqKXJldHVybiByPWUuaGFuZGxlT2JqLFMoZS5kZWxlZ2F0ZVRhcmdldCkub2ZmKHIubmFtZXNwYWNlP3Iub3JpZ1R5cGUrXCIuXCIrci5uYW1lc3BhY2U6ci5vcmlnVHlwZSxyLnNlbGVjdG9yLHIuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7Zm9yKGkgaW4gZSl0aGlzLm9mZihpLHQsZVtpXSk7cmV0dXJuIHRoaXN9cmV0dXJuITEhPT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0fHwobj10LHQ9dm9pZCAwKSwhMT09PW4mJihuPVRlKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pfX0pO3ZhciBrZT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxBZT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLE5lPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBqZShlLHQpe3JldHVybiBBKGUsXCJ0YWJsZVwiKSYmQSgxMSE9PXQubm9kZVR5cGU/dDp0LmZpcnN0Q2hpbGQsXCJ0clwiKSYmUyhlKS5jaGlsZHJlbihcInRib2R5XCIpWzBdfHxlfWZ1bmN0aW9uIERlKGUpe3JldHVybiBlLnR5cGU9KG51bGwhPT1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2UudHlwZSxlfWZ1bmN0aW9uIHFlKGUpe3JldHVyblwidHJ1ZS9cIj09PShlLnR5cGV8fFwiXCIpLnNsaWNlKDAsNSk/ZS50eXBlPWUudHlwZS5zbGljZSg1KTplLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksZX1mdW5jdGlvbiBMZShlLHQpe3ZhciBuLHIsaSxvLGEscztpZigxPT09dC5ub2RlVHlwZSl7aWYoWS5oYXNEYXRhKGUpJiYocz1ZLmdldChlKS5ldmVudHMpKWZvcihpIGluIFkucmVtb3ZlKHQsXCJoYW5kbGUgZXZlbnRzXCIpLHMpZm9yKG49MCxyPXNbaV0ubGVuZ3RoO248cjtuKyspUy5ldmVudC5hZGQodCxpLHNbaV1bbl0pO1EuaGFzRGF0YShlKSYmKG89US5hY2Nlc3MoZSksYT1TLmV4dGVuZCh7fSxvKSxRLnNldCh0LGEpKX19ZnVuY3Rpb24gSGUobixyLGksbyl7cj1nKHIpO3ZhciBlLHQsYSxzLHUsbCxjPTAsZj1uLmxlbmd0aCxwPWYtMSxkPXJbMF0saD1tKGQpO2lmKGh8fDE8ZiYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJiF5LmNoZWNrQ2xvbmUmJkFlLnRlc3QoZCkpcmV0dXJuIG4uZWFjaChmdW5jdGlvbihlKXt2YXIgdD1uLmVxKGUpO2gmJihyWzBdPWQuY2FsbCh0aGlzLGUsdC5odG1sKCkpKSxIZSh0LHIsaSxvKX0pO2lmKGYmJih0PShlPXhlKHIsblswXS5vd25lckRvY3VtZW50LCExLG4sbykpLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPXQpLHR8fG8pKXtmb3Iocz0oYT1TLm1hcCh2ZShlLFwic2NyaXB0XCIpLERlKSkubGVuZ3RoO2M8ZjtjKyspdT1lLGMhPT1wJiYodT1TLmNsb25lKHUsITAsITApLHMmJlMubWVyZ2UoYSx2ZSh1LFwic2NyaXB0XCIpKSksaS5jYWxsKG5bY10sdSxjKTtpZihzKWZvcihsPWFbYS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxTLm1hcChhLHFlKSxjPTA7YzxzO2MrKyl1PWFbY10saGUudGVzdCh1LnR5cGV8fFwiXCIpJiYhWS5hY2Nlc3ModSxcImdsb2JhbEV2YWxcIikmJlMuY29udGFpbnMobCx1KSYmKHUuc3JjJiZcIm1vZHVsZVwiIT09KHUudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKT9TLl9ldmFsVXJsJiYhdS5ub01vZHVsZSYmUy5fZXZhbFVybCh1LnNyYyx7bm9uY2U6dS5ub25jZXx8dS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKX0sbCk6Yih1LnRleHRDb250ZW50LnJlcGxhY2UoTmUsXCJcIiksdSxsKSl9cmV0dXJuIG59ZnVuY3Rpb24gT2UoZSx0LG4pe2Zvcih2YXIgcixpPXQ/Uy5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fFMuY2xlYW5EYXRhKHZlKHIpKSxyLnBhcmVudE5vZGUmJihuJiZpZShyKSYmeWUodmUocixcInNjcmlwdFwiKSksci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtyZXR1cm4gZX1TLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sY2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGM9ZS5jbG9uZU5vZGUoITApLGY9aWUoZSk7aWYoISh5Lm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHxTLmlzWE1MRG9jKGUpKSlmb3IoYT12ZShjKSxyPTAsaT0obz12ZShlKSkubGVuZ3RoO3I8aTtyKyspcz1vW3JdLHU9YVtyXSx2b2lkIDAsXCJpbnB1dFwiPT09KGw9dS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSYmcGUudGVzdChzLnR5cGUpP3UuY2hlY2tlZD1zLmNoZWNrZWQ6XCJpbnB1dFwiIT09bCYmXCJ0ZXh0YXJlYVwiIT09bHx8KHUuZGVmYXVsdFZhbHVlPXMuZGVmYXVsdFZhbHVlKTtpZih0KWlmKG4pZm9yKG89b3x8dmUoZSksYT1hfHx2ZShjKSxyPTAsaT1vLmxlbmd0aDtyPGk7cisrKUxlKG9bcl0sYVtyXSk7ZWxzZSBMZShlLGMpO3JldHVybiAwPChhPXZlKGMsXCJzY3JpcHRcIikpLmxlbmd0aCYmeWUoYSwhZiYmdmUoZSxcInNjcmlwdFwiKSksY30sY2xlYW5EYXRhOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuLHIsaT1TLmV2ZW50LnNwZWNpYWwsbz0wO3ZvaWQgMCE9PShuPWVbb10pO28rKylpZihWKG4pKXtpZih0PW5bWS5leHBhbmRvXSl7aWYodC5ldmVudHMpZm9yKHIgaW4gdC5ldmVudHMpaVtyXT9TLmV2ZW50LnJlbW92ZShuLHIpOlMucmVtb3ZlRXZlbnQobixyLHQuaGFuZGxlKTtuW1kuZXhwYW5kb109dm9pZCAwfW5bUS5leHBhbmRvXSYmKG5bUS5leHBhbmRvXT12b2lkIDApfX19KSxTLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiBPZSh0aGlzLGUsITApfSxyZW1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIE9lKHRoaXMsZSl9LHRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT9TLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9ZSl9KX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fGplKHRoaXMsZSkuYXBwZW5kQ2hpbGQoZSl9KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIHQ9amUodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBIZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PTA7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKTE9PT1lLm5vZGVUeXBlJiYoUy5jbGVhbkRhdGEodmUoZSwhMSkpLGUudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bnVsbCE9ZSYmZSx0PW51bGw9PXQ/ZTp0LHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIFMuY2xvbmUodGhpcyxlLHQpfSl9LGh0bWw6ZnVuY3Rpb24oZSl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlKXt2YXIgdD10aGlzWzBdfHx7fSxuPTAscj10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1lJiYxPT09dC5ub2RlVHlwZSlyZXR1cm4gdC5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiFrZS50ZXN0KGUpJiYhZ2VbKGRlLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7ZT1TLmh0bWxQcmVmaWx0ZXIoZSk7dHJ5e2Zvcig7bjxyO24rKykxPT09KHQ9dGhpc1tuXXx8e30pLm5vZGVUeXBlJiYoUy5jbGVhbkRhdGEodmUodCwhMSkpLHQuaW5uZXJIVE1MPWUpO3Q9MH1jYXRjaChlKXt9fXQmJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgbj1bXTtyZXR1cm4gSGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJlbnROb2RlO1MuaW5BcnJheSh0aGlzLG4pPDAmJihTLmNsZWFuRGF0YSh2ZSh0aGlzKSksdCYmdC5yZXBsYWNlQ2hpbGQoZSx0aGlzKSl9LG4pfX0pLFMuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLGEpe1MuZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49W10scj1TKGUpLGk9ci5sZW5ndGgtMSxvPTA7bzw9aTtvKyspdD1vPT09aT90aGlzOnRoaXMuY2xvbmUoITApLFMocltvXSlbYV0odCksdS5hcHBseShuLHQuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUGU9bmV3IFJlZ0V4cChcIl4oXCIrZWUrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksUmU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiB0JiZ0Lm9wZW5lcnx8KHQ9QyksdC5nZXRDb21wdXRlZFN0eWxlKGUpfSxNZT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9O2ZvcihpIGluIHQpb1tpXT1lLnN0eWxlW2ldLGUuc3R5bGVbaV09dFtpXTtmb3IoaSBpbiByPW4uY2FsbChlKSx0KWUuc3R5bGVbaV09b1tpXTtyZXR1cm4gcn0sSWU9bmV3IFJlZ0V4cChuZS5qb2luKFwifFwiKSxcImlcIik7ZnVuY3Rpb24gV2UoZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5zdHlsZTtyZXR1cm4obj1ufHxSZShlKSkmJihcIlwiIT09KGE9bi5nZXRQcm9wZXJ0eVZhbHVlKHQpfHxuW3RdKXx8aWUoZSl8fChhPVMuc3R5bGUoZSx0KSksIXkucGl4ZWxCb3hTdHlsZXMoKSYmUGUudGVzdChhKSYmSWUudGVzdCh0KSYmKHI9cy53aWR0aCxpPXMubWluV2lkdGgsbz1zLm1heFdpZHRoLHMubWluV2lkdGg9cy5tYXhXaWR0aD1zLndpZHRoPWEsYT1uLndpZHRoLHMud2lkdGg9cixzLm1pbldpZHRoPWkscy5tYXhXaWR0aD1vKSksdm9pZCAwIT09YT9hK1wiXCI6YX1mdW5jdGlvbiBGZShlLHQpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtpZighZSgpKXJldHVybih0aGlzLmdldD10KS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZGVsZXRlIHRoaXMuZ2V0fX19IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2lmKGwpe3Uuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDttYXJnaW4tdG9wOjFweDtwYWRkaW5nOjA7Ym9yZGVyOjBcIixsLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo2MCU7dG9wOjElXCIscmUuYXBwZW5kQ2hpbGQodSkuYXBwZW5kQ2hpbGQobCk7dmFyIGU9Qy5nZXRDb21wdXRlZFN0eWxlKGwpO249XCIxJVwiIT09ZS50b3Ascz0xMj09PXQoZS5tYXJnaW5MZWZ0KSxsLnN0eWxlLnJpZ2h0PVwiNjAlXCIsbz0zNj09PXQoZS5yaWdodCkscj0zNj09PXQoZS53aWR0aCksbC5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsaT0xMj09PXQobC5vZmZzZXRXaWR0aC8zKSxyZS5yZW1vdmVDaGlsZCh1KSxsPW51bGx9fWZ1bmN0aW9uIHQoZSl7cmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChlKSl9dmFyIG4scixpLG8sYSxzLHU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGw9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2wuc3R5bGUmJihsLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixsLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIix5LmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1sLnN0eWxlLmJhY2tncm91bmRDbGlwLFMuZXh0ZW5kKHkse2JveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxyfSxwaXhlbEJveFN0eWxlczpmdW5jdGlvbigpe3JldHVybiBlKCksb30scGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBlKCksbn0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxzfSxzY3JvbGxib3hTaXplOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxpfSxyZWxpYWJsZVRyRGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciBlLHQsbixyO3JldHVybiBudWxsPT1hJiYoZT1FLmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSx0PUUuY3JlYXRlRWxlbWVudChcInRyXCIpLG49RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlXCIsdC5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjFweCBzb2xpZFwiLHQuc3R5bGUuaGVpZ2h0PVwiMXB4XCIsbi5zdHlsZS5oZWlnaHQ9XCI5cHhcIixuLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLHJlLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKHQpLmFwcGVuZENoaWxkKG4pLHI9Qy5nZXRDb21wdXRlZFN0eWxlKHQpLGE9cGFyc2VJbnQoci5oZWlnaHQsMTApK3BhcnNlSW50KHIuYm9yZGVyVG9wV2lkdGgsMTApK3BhcnNlSW50KHIuYm9yZGVyQm90dG9tV2lkdGgsMTApPT09dC5vZmZzZXRIZWlnaHQscmUucmVtb3ZlQ2hpbGQoZSkpLGF9fSkpfSgpO3ZhciBCZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sJGU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLF9lPXt9O2Z1bmN0aW9uIHplKGUpe3ZhciB0PVMuY3NzUHJvcHNbZV18fF9lW2VdO3JldHVybiB0fHwoZSBpbiAkZT9lOl9lW2VdPWZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49QmUubGVuZ3RoO3doaWxlKG4tLSlpZigoZT1CZVtuXSt0KWluICRlKXJldHVybiBlfShlKXx8ZSl9dmFyIFVlPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxYZT0vXi0tLyxWZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sR2U9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifTtmdW5jdGlvbiBZZShlLHQsbil7dmFyIHI9dGUuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMl0tKG58fDApKSsoclszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIFFlKGUsdCxuLHIsaSxvKXt2YXIgYT1cIndpZHRoXCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO2E8NDthKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9Uy5jc3MoZSxuK25lW2FdLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJih1LT1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKHUtPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpKToodSs9Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4/dSs9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKTpzKz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKTtyZXR1cm4hciYmMDw9byYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKXx8MCksdX1mdW5jdGlvbiBKZShlLHQsbil7dmFyIHI9UmUoZSksaT0oIXkuYm94U2l6aW5nUmVsaWFibGUoKXx8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLG89aSxhPVdlKGUsdCxyKSxzPVwib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7aWYoUGUudGVzdChhKSl7aWYoIW4pcmV0dXJuIGE7YT1cImF1dG9cIn1yZXR1cm4oIXkuYm94U2l6aW5nUmVsaWFibGUoKSYmaXx8IXkucmVsaWFibGVUckRpbWVuc2lvbnMoKSYmQShlLFwidHJcIil8fFwiYXV0b1wiPT09YXx8IXBhcnNlRmxvYXQoYSkmJlwiaW5saW5lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiLCExLHIpKSYmZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmKGk9XCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksKG89cyBpbiBlKSYmKGE9ZVtzXSkpLChhPXBhcnNlRmxvYXQoYSl8fDApK1FlKGUsdCxufHwoaT9cImJvcmRlclwiOlwiY29udGVudFwiKSxvLHIsYSkrXCJweFwifWZ1bmN0aW9uIEtlKGUsdCxuLHIsaSl7cmV0dXJuIG5ldyBLZS5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfVMuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49V2UoZSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PW4/XCIxXCI6bn19fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsZ3JpZEFyZWE6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TdGFydDohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1N0YXJ0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4scil7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgaSxvLGEscz1YKHQpLHU9WGUudGVzdCh0KSxsPWUuc3R5bGU7aWYodXx8KHQ9emUocykpLGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSx2b2lkIDA9PT1uKXJldHVybiBhJiZcImdldFwiaW4gYSYmdm9pZCAwIT09KGk9YS5nZXQoZSwhMSxyKSk/aTpsW3RdO1wic3RyaW5nXCI9PT0obz10eXBlb2YgbikmJihpPXRlLmV4ZWMobikpJiZpWzFdJiYobj1zZShlLHQsaSksbz1cIm51bWJlclwiKSxudWxsIT1uJiZuPT1uJiYoXCJudW1iZXJcIiE9PW98fHV8fChuKz1pJiZpWzNdfHwoUy5jc3NOdW1iZXJbc10/XCJcIjpcInB4XCIpKSx5LmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PW58fDAhPT10LmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFt0XT1cImluaGVyaXRcIiksYSYmXCJzZXRcImluIGEmJnZvaWQgMD09PShuPWEuc2V0KGUsbixyKSl8fCh1P2wuc2V0UHJvcGVydHkodCxuKTpsW3RdPW4pKX19LGNzczpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1YKHQpO3JldHVybiBYZS50ZXN0KHQpfHwodD16ZShzKSksKGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSkmJlwiZ2V0XCJpbiBhJiYoaT1hLmdldChlLCEwLG4pKSx2b2lkIDA9PT1pJiYoaT1XZShlLHQscikpLFwibm9ybWFsXCI9PT1pJiZ0IGluIEdlJiYoaT1HZVt0XSksXCJcIj09PW58fG4/KG89cGFyc2VGbG9hdChpKSwhMD09PW58fGlzRmluaXRlKG8pP298fDA6aSk6aX19KSxTLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHUpe1MuY3NzSG9va3NbdV09e2dldDpmdW5jdGlvbihlLHQsbil7aWYodClyZXR1cm4hVWUudGVzdChTLmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/SmUoZSx1LG4pOk1lKGUsVmUsZnVuY3Rpb24oKXtyZXR1cm4gSmUoZSx1LG4pfSl9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT1SZShlKSxvPSF5LnNjcm9sbGJveFNpemUoKSYmXCJhYnNvbHV0ZVwiPT09aS5wb3NpdGlvbixhPShvfHxuKSYmXCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsaSkscz1uP1FlKGUsdSxuLGEsaSk6MDtyZXR1cm4gYSYmbyYmKHMtPU1hdGguY2VpbChlW1wib2Zmc2V0XCIrdVswXS50b1VwcGVyQ2FzZSgpK3Uuc2xpY2UoMSldLXBhcnNlRmxvYXQoaVt1XSktUWUoZSx1LFwiYm9yZGVyXCIsITEsaSktLjUpKSxzJiYocj10ZS5leGVjKHQpKSYmXCJweFwiIT09KHJbM118fFwicHhcIikmJihlLnN0eWxlW3VdPXQsdD1TLmNzcyhlLHUpKSxZZSgwLHQscyl9fX0pLFMuY3NzSG9va3MubWFyZ2luTGVmdD1GZSh5LnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuKHBhcnNlRmxvYXQoV2UoZSxcIm1hcmdpbkxlZnRcIikpfHxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtTWUoZSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksUy5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oaSxvKXtTLmNzc0hvb2tzW2krb109e2V4cGFuZDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPXt9LHI9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5zcGxpdChcIiBcIik6W2VdO3Q8NDt0KyspbltpK25lW3RdK29dPXJbdF18fHJbdC0yXXx8clswXTtyZXR1cm4gbn19LFwibWFyZ2luXCIhPT1pJiYoUy5jc3NIb29rc1tpK29dLnNldD1ZZSl9KSxTLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9LGE9MDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3Iocj1SZShlKSxpPXQubGVuZ3RoO2E8aTthKyspb1t0W2FdXT1TLmNzcyhlLHRbYV0sITEscik7cmV0dXJuIG99cmV0dXJuIHZvaWQgMCE9PW4/Uy5zdHlsZShlLHQsbik6Uy5jc3MoZSx0KX0sZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9fSksKChTLlR3ZWVuPUtlKS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOktlLGluaXQ6ZnVuY3Rpb24oZSx0LG4scixpLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPWl8fFMuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz10LHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1yLHRoaXMudW5pdD1vfHwoUy5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT1LZS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gZSYmZS5nZXQ/ZS5nZXQodGhpcyk6S2UucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0LG49S2UucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz10PVMuZWFzaW5nW3RoaXMuZWFzaW5nXShlLHRoaXMub3B0aW9ucy5kdXJhdGlvbiplLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPXQ9ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpLZS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSkuaW5pdC5wcm90b3R5cGU9S2UucHJvdG90eXBlLChLZS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIDEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGwhPWUuZWxlbVtlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXToodD1TLmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpKSYmXCJhdXRvXCIhPT10P3Q6MH0sc2V0OmZ1bmN0aW9uKGUpe1MuZnguc3RlcFtlLnByb3BdP1MuZnguc3RlcFtlLnByb3BdKGUpOjEhPT1lLmVsZW0ubm9kZVR5cGV8fCFTLmNzc0hvb2tzW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVt6ZShlLnByb3ApXT9lLmVsZW1bZS5wcm9wXT1lLm5vdzpTLnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSkuc2Nyb2xsVG9wPUtlLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LFMuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxTLmZ4PUtlLnByb3RvdHlwZS5pbml0LFMuZnguc3RlcD17fTt2YXIgWmUsZXQsdHQsbnQscnQ9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGl0PS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gb3QoKXtldCYmKCExPT09RS5oaWRkZW4mJkMucmVxdWVzdEFuaW1hdGlvbkZyYW1lP0MucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG90KTpDLnNldFRpbWVvdXQob3QsUy5meC5pbnRlcnZhbCksUy5meC50aWNrKCkpfWZ1bmN0aW9uIGF0KCl7cmV0dXJuIEMuc2V0VGltZW91dChmdW5jdGlvbigpe1plPXZvaWQgMH0pLFplPURhdGUubm93KCl9ZnVuY3Rpb24gc3QoZSx0KXt2YXIgbixyPTAsaT17aGVpZ2h0OmV9O2Zvcih0PXQ/MTowO3I8NDtyKz0yLXQpaVtcIm1hcmdpblwiKyhuPW5lW3JdKV09aVtcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoaS5vcGFjaXR5PWkud2lkdGg9ZSksaX1mdW5jdGlvbiB1dChlLHQsbil7Zm9yKHZhciByLGk9KGx0LnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KGx0LnR3ZWVuZXJzW1wiKlwiXSksbz0wLGE9aS5sZW5ndGg7bzxhO28rKylpZihyPWlbb10uY2FsbChuLHQsZSkpcmV0dXJuIHJ9ZnVuY3Rpb24gbHQobyxlLHQpe3ZhciBuLGEscj0wLGk9bHQucHJlZmlsdGVycy5sZW5ndGgscz1TLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihhKXJldHVybiExO2Zvcih2YXIgZT1aZXx8YXQoKSx0PU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi1lKSxuPTEtKHQvbC5kdXJhdGlvbnx8MCkscj0wLGk9bC50d2VlbnMubGVuZ3RoO3I8aTtyKyspbC50d2VlbnNbcl0ucnVuKG4pO3JldHVybiBzLm5vdGlmeVdpdGgobyxbbCxuLHRdKSxuPDEmJmk/dDooaXx8cy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTpvLHByb3BzOlMuZXh0ZW5kKHt9LGUpLG9wdHM6Uy5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOlMuZWFzaW5nLl9kZWZhdWx0fSx0KSxvcmlnaW5hbFByb3BlcnRpZXM6ZSxvcmlnaW5hbE9wdGlvbnM6dCxzdGFydFRpbWU6WmV8fGF0KCksZHVyYXRpb246dC5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLlR3ZWVuKG8sbC5vcHRzLGUsdCxsLm9wdHMuc3BlY2lhbEVhc2luZ1tlXXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gobiksbn0sc3RvcDpmdW5jdGlvbihlKXt2YXIgdD0wLG49ZT9sLnR3ZWVucy5sZW5ndGg6MDtpZihhKXJldHVybiB0aGlzO2ZvcihhPSEwO3Q8bjt0KyspbC50d2VlbnNbdF0ucnVuKDEpO3JldHVybiBlPyhzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2wsZV0pKTpzLnJlamVjdFdpdGgobyxbbCxlXSksdGhpc319KSxjPWwucHJvcHM7Zm9yKCFmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKG4gaW4gZSlpZihpPXRbcj1YKG4pXSxvPWVbbl0sQXJyYXkuaXNBcnJheShvKSYmKGk9b1sxXSxvPWVbbl09b1swXSksbiE9PXImJihlW3JdPW8sZGVsZXRlIGVbbl0pLChhPVMuY3NzSG9va3Nbcl0pJiZcImV4cGFuZFwiaW4gYSlmb3IobiBpbiBvPWEuZXhwYW5kKG8pLGRlbGV0ZSBlW3JdLG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09aSk7ZWxzZSB0W3JdPWl9KGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO3I8aTtyKyspaWYobj1sdC5wcmVmaWx0ZXJzW3JdLmNhbGwobCxvLGMsbC5vcHRzKSlyZXR1cm4gbShuLnN0b3ApJiYoUy5fcXVldWVIb29rcyhsLmVsZW0sbC5vcHRzLnF1ZXVlKS5zdG9wPW4uc3RvcC5iaW5kKG4pKSxuO3JldHVybiBTLm1hcChjLHV0LGwpLG0obC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwobyxsKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSxTLmZ4LnRpbWVyKFMuZXh0ZW5kKHUse2VsZW06byxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGx9Uy5BbmltYXRpb249Uy5leHRlbmQobHQse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIHNlKG4uZWxlbSxlLHRlLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7bShlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLm1hdGNoKFApO2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW49ZVtyXSxsdC50d2VlbmVyc1tuXT1sdC50d2VlbmVyc1tuXXx8W10sbHQudHdlZW5lcnNbbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyczpbZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMsZj1cIndpZHRoXCJpbiB0fHxcImhlaWdodFwiaW4gdCxwPXRoaXMsZD17fSxoPWUuc3R5bGUsZz1lLm5vZGVUeXBlJiZhZShlKSx2PVkuZ2V0KGUsXCJmeHNob3dcIik7Zm9yKHIgaW4gbi5xdWV1ZXx8KG51bGw9PShhPVMuX3F1ZXVlSG9va3MoZSxcImZ4XCIpKS51bnF1ZXVlZCYmKGEudW5xdWV1ZWQ9MCxzPWEuZW1wdHkuZmlyZSxhLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXthLnVucXVldWVkfHxzKCl9KSxhLnVucXVldWVkKysscC5hbHdheXMoZnVuY3Rpb24oKXtwLmFsd2F5cyhmdW5jdGlvbigpe2EudW5xdWV1ZWQtLSxTLnF1ZXVlKGUsXCJmeFwiKS5sZW5ndGh8fGEuZW1wdHkuZmlyZSgpfSl9KSksdClpZihpPXRbcl0scnQudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHxcInRvZ2dsZVwiPT09aSxpPT09KGc/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWl8fCF2fHx2b2lkIDA9PT12W3JdKWNvbnRpbnVlO2c9ITB9ZFtyXT12JiZ2W3JdfHxTLnN0eWxlKGUscil9aWYoKHU9IVMuaXNFbXB0eU9iamVjdCh0KSl8fCFTLmlzRW1wdHlPYmplY3QoZCkpZm9yKHIgaW4gZiYmMT09PWUubm9kZVR5cGUmJihuLm92ZXJmbG93PVtoLm92ZXJmbG93LGgub3ZlcmZsb3dYLGgub3ZlcmZsb3dZXSxudWxsPT0obD12JiZ2LmRpc3BsYXkpJiYobD1ZLmdldChlLFwiZGlzcGxheVwiKSksXCJub25lXCI9PT0oYz1TLmNzcyhlLFwiZGlzcGxheVwiKSkmJihsP2M9bDoobGUoW2VdLCEwKSxsPWUuc3R5bGUuZGlzcGxheXx8bCxjPVMuY3NzKGUsXCJkaXNwbGF5XCIpLGxlKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT1sKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZmxvYXRcIikmJih1fHwocC5kb25lKGZ1bmN0aW9uKCl7aC5kaXNwbGF5PWx9KSxudWxsPT1sJiYoYz1oLmRpc3BsYXksbD1cIm5vbmVcIj09PWM/XCJcIjpjKSksaC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoaC5vdmVyZmxvdz1cImhpZGRlblwiLHAuYWx3YXlzKGZ1bmN0aW9uKCl7aC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGgub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0saC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKSx1PSExLGQpdXx8KHY/XCJoaWRkZW5cImluIHYmJihnPXYuaGlkZGVuKTp2PVkuYWNjZXNzKGUsXCJmeHNob3dcIix7ZGlzcGxheTpsfSksbyYmKHYuaGlkZGVuPSFnKSxnJiZsZShbZV0sITApLHAuZG9uZShmdW5jdGlvbigpe2ZvcihyIGluIGd8fGxlKFtlXSksWS5yZW1vdmUoZSxcImZ4c2hvd1wiKSxkKVMuc3R5bGUoZSxyLGRbcl0pfSkpLHU9dXQoZz92W3JdOjAscixwKSxyIGluIHZ8fCh2W3JdPXUuc3RhcnQsZyYmKHUuZW5kPXUuc3RhcnQsdS5zdGFydD0wKSl9XSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P2x0LnByZWZpbHRlcnMudW5zaGlmdChlKTpsdC5wcmVmaWx0ZXJzLnB1c2goZSl9fSksUy5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/Uy5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxtKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiFtKHQpJiZ0fTtyZXR1cm4gUy5meC5vZmY/ci5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiByLmR1cmF0aW9uJiYoci5kdXJhdGlvbiBpbiBTLmZ4LnNwZWVkcz9yLmR1cmF0aW9uPVMuZnguc3BlZWRzW3IuZHVyYXRpb25dOnIuZHVyYXRpb249Uy5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPXIucXVldWUmJiEwIT09ci5xdWV1ZXx8KHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXttKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZTLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sUy5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIoYWUpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9Uy5pc0VtcHR5T2JqZWN0KHQpLG89Uy5zcGVlZChlLG4sciksYT1mdW5jdGlvbigpe3ZhciBlPWx0KHRoaXMsUy5leHRlbmQoe30sdCksbyk7KGl8fFkuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZlLnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHwhMT09PW8ucXVldWU/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihpLGUsbyl7dmFyIGE9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChvKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGkmJihvPWUsZT1pLGk9dm9pZCAwKSxlJiZ0aGlzLnF1ZXVlKGl8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9ITAsdD1udWxsIT1pJiZpK1wicXVldWVIb29rc1wiLG49Uy50aW1lcnMscj1ZLmdldCh0aGlzKTtpZih0KXJbdF0mJnJbdF0uc3RvcCYmYShyW3RdKTtlbHNlIGZvcih0IGluIHIpclt0XSYmclt0XS5zdG9wJiZpdC50ZXN0KHQpJiZhKHJbdF0pO2Zvcih0PW4ubGVuZ3RoO3QtLTspblt0XS5lbGVtIT09dGhpc3x8bnVsbCE9aSYmblt0XS5xdWV1ZSE9PWl8fChuW3RdLmFuaW0uc3RvcChvKSxlPSExLG4uc3BsaWNlKHQsMSkpOyFlJiZvfHxTLmRlcXVldWUodGhpcyxpKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuITEhPT1hJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQ9WS5nZXQodGhpcyksbj10W2ErXCJxdWV1ZVwiXSxyPXRbYStcInF1ZXVlSG9va3NcIl0saT1TLnRpbWVycyxvPW4/bi5sZW5ndGg6MDtmb3IodC5maW5pc2g9ITAsUy5xdWV1ZSh0aGlzLGEsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksZT1pLmxlbmd0aDtlLS07KWlbZV0uZWxlbT09PXRoaXMmJmlbZV0ucXVldWU9PT1hJiYoaVtlXS5hbmltLnN0b3AoITApLGkuc3BsaWNlKGUsMSkpO2ZvcihlPTA7ZTxvO2UrKyluW2VdJiZuW2VdLmZpbmlzaCYmbltlXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgdC5maW5pc2h9KX19KSxTLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUscil7dmFyIGk9Uy5mbltyXTtTLmZuW3JdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP2kuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShzdChyLCEwKSxlLHQsbil9fSksUy5lYWNoKHtzbGlkZURvd246c3QoXCJzaG93XCIpLHNsaWRlVXA6c3QoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOnN0KFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSxyKXtTLmZuW2VdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5hbmltYXRlKHIsZSx0LG4pfX0pLFMudGltZXJzPVtdLFMuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLHQ9MCxuPVMudGltZXJzO2ZvcihaZT1EYXRlLm5vdygpO3Q8bi5sZW5ndGg7dCsrKShlPW5bdF0pKCl8fG5bdF0hPT1lfHxuLnNwbGljZSh0LS0sMSk7bi5sZW5ndGh8fFMuZnguc3RvcCgpLFplPXZvaWQgMH0sUy5meC50aW1lcj1mdW5jdGlvbihlKXtTLnRpbWVycy5wdXNoKGUpLFMuZnguc3RhcnQoKX0sUy5meC5pbnRlcnZhbD0xMyxTLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7ZXR8fChldD0hMCxvdCgpKX0sUy5meC5zdG9wPWZ1bmN0aW9uKCl7ZXQ9bnVsbH0sUy5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sUy5mbi5kZWxheT1mdW5jdGlvbihyLGUpe3JldHVybiByPVMuZngmJlMuZnguc3BlZWRzW3JdfHxyLGU9ZXx8XCJmeFwiLHRoaXMucXVldWUoZSxmdW5jdGlvbihlLHQpe3ZhciBuPUMuc2V0VGltZW91dChlLHIpO3Quc3RvcD1mdW5jdGlvbigpe0MuY2xlYXJUaW1lb3V0KG4pfX0pfSx0dD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxudD1FLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIikuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSx0dC50eXBlPVwiY2hlY2tib3hcIix5LmNoZWNrT249XCJcIiE9PXR0LnZhbHVlLHkub3B0U2VsZWN0ZWQ9bnQuc2VsZWN0ZWQsKHR0PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS52YWx1ZT1cInRcIix0dC50eXBlPVwicmFkaW9cIix5LnJhZGlvVmFsdWU9XCJ0XCI9PT10dC52YWx1ZTt2YXIgY3QsZnQ9Uy5leHByLmF0dHJIYW5kbGU7Uy5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLFMuYXR0cixlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5yZW1vdmVBdHRyKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/Uy5wcm9wKGUsdCxuKTooMT09PW8mJlMuaXNYTUxEb2MoZSl8fChpPVMuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fChTLmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP2N0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCBTLnJlbW92ZUF0dHIoZSx0KTppJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPVMuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZigheS5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZBKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goUCk7aWYoaSYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1pW3IrK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSksY3Q9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P1MucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LFMuZWFjaChTLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oZSx0KXt2YXIgYT1mdFt0XXx8Uy5maW5kLmF0dHI7ZnRbdF09ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIG58fChpPWZ0W29dLGZ0W29dPXIscj1udWxsIT1hKGUsdCxuKT9vOm51bGwsZnRbb109aSkscn19KTt2YXIgcHQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxkdD0vXig/OmF8YXJlYSkkL2k7ZnVuY3Rpb24gaHQoZSl7cmV0dXJuKGUubWF0Y2goUCl8fFtdKS5qb2luKFwiIFwiKX1mdW5jdGlvbiBndChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ZnVuY3Rpb24gdnQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZTpcInN0cmluZ1wiPT10eXBlb2YgZSYmZS5tYXRjaChQKXx8W119Uy5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLFMucHJvcCxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbUy5wcm9wRml4W2VdfHxlXX0pfX0pLFMuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmUy5pc1hNTERvYyhlKXx8KHQ9Uy5wcm9wRml4W3RdfHx0LGk9Uy5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjplW3RdPW46aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOmVbdF19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6cHQudGVzdChlLm5vZGVOYW1lKXx8ZHQudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSx5Lm9wdFNlbGVjdGVkfHwoUy5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTt0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLFMuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtTLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSksUy5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLHU9MDtpZihtKHQpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS5hZGRDbGFzcyh0LmNhbGwodGhpcyxlLGd0KHRoaXMpKSl9KTtpZigoZT12dCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9Z3Qobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIraHQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPWVbYSsrXSlyLmluZGV4T2YoXCIgXCIrbytcIiBcIik8MCYmKHIrPW8rXCIgXCIpO2khPT0ocz1odChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsdT0wO2lmKG0odCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLGUsZ3QodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKChlPXZ0KHQpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT1ndChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIitodChpKStcIiBcIil7YT0wO3doaWxlKG89ZVthKytdKXdoaWxlKC0xPHIuaW5kZXhPZihcIiBcIitvK1wiIFwiKSlyPXIucmVwbGFjZShcIiBcIitvK1wiIFwiLFwiIFwiKTtpIT09KHM9aHQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGksdCl7dmFyIG89dHlwZW9mIGksYT1cInN0cmluZ1wiPT09b3x8QXJyYXkuaXNBcnJheShpKTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHQmJmE/dD90aGlzLmFkZENsYXNzKGkpOnRoaXMucmVtb3ZlQ2xhc3MoaSk6bShpKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS50b2dnbGVDbGFzcyhpLmNhbGwodGhpcyxlLGd0KHRoaXMpLHQpLHQpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7aWYoYSl7dD0wLG49Uyh0aGlzKSxyPXZ0KGkpO3doaWxlKGU9clt0KytdKW4uaGFzQ2xhc3MoZSk/bi5yZW1vdmVDbGFzcyhlKTpuLmFkZENsYXNzKGUpfWVsc2Ugdm9pZCAwIT09aSYmXCJib29sZWFuXCIhPT1vfHwoKGU9Z3QodGhpcykpJiZZLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGUpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZXx8ITE9PT1pP1wiXCI6WS5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHI9MDt0PVwiIFwiK2UrXCIgXCI7d2hpbGUobj10aGlzW3IrK10paWYoMT09PW4ubm9kZVR5cGUmJi0xPChcIiBcIitodChndChuKSkrXCIgXCIpLmluZGV4T2YodCkpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHl0PS9cXHIvZztTLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKG4pe3ZhciByLGUsaSx0PXRoaXNbMF07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9bShuKSx0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0odD1pP24uY2FsbCh0aGlzLGUsUyh0aGlzKS52YWwoKSk6bik/dD1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiB0P3QrPVwiXCI6QXJyYXkuaXNBcnJheSh0KSYmKHQ9Uy5tYXAodCxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwocj1TLnZhbEhvb2tzW3RoaXMudHlwZV18fFMudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiByJiZ2b2lkIDAhPT1yLnNldCh0aGlzLHQsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9dCkpfSkpOnQ/KHI9Uy52YWxIb29rc1t0LnR5cGVdfHxTLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gciYmdm9pZCAwIT09KGU9ci5nZXQodCxcInZhbHVlXCIpKT9lOlwic3RyaW5nXCI9PXR5cGVvZihlPXQudmFsdWUpP2UucmVwbGFjZSh5dCxcIlwiKTpudWxsPT1lP1wiXCI6ZTp2b2lkIDB9fSksUy5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDpodChTLnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUscz1hP251bGw6W10sdT1hP28rMTppLmxlbmd0aDtmb3Iocj1vPDA/dTphP286MDtyPHU7cisrKWlmKCgobj1pW3JdKS5zZWxlY3RlZHx8cj09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFBKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD1TKG4pLnZhbCgpLGEpcmV0dXJuIHQ7cy5wdXNoKHQpfXJldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9ZS5vcHRpb25zLG89Uy5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDt3aGlsZShhLS0pKChyPWlbYV0pLnNlbGVjdGVkPS0xPFMuaW5BcnJheShTLnZhbEhvb2tzLm9wdGlvbi5nZXQociksbykpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSxTLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7Uy52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPS0xPFMuaW5BcnJheShTKGUpLnZhbCgpLHQpfX0seS5jaGVja09ufHwoUy52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KSx5LmZvY3VzaW49XCJvbmZvY3VzaW5cImluIEM7dmFyIG10PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyx4dD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtTLmV4dGVuZChTLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGYscD1bbnx8RV0sZD12LmNhbGwoZSxcInR5cGVcIik/ZS50eXBlOmUsaD12LmNhbGwoZSxcIm5hbWVzcGFjZVwiKT9lLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobz1mPWE9bj1ufHxFLDMhPT1uLm5vZGVUeXBlJiY4IT09bi5ub2RlVHlwZSYmIW10LnRlc3QoZCtTLmV2ZW50LnRyaWdnZXJlZCkmJigtMTxkLmluZGV4T2YoXCIuXCIpJiYoZD0oaD1kLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitkLChlPWVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGQsXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9biksdD1udWxsPT10P1tlXTpTLm1ha2VBcnJheSh0LFtlXSksYz1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHJ8fCFjLnRyaWdnZXJ8fCExIT09Yy50cmlnZ2VyLmFwcGx5KG4sdCkpKXtpZighciYmIWMubm9CdWJibGUmJiF4KG4pKXtmb3Iocz1jLmRlbGVnYXRlVHlwZXx8ZCxtdC50ZXN0KHMrZCl8fChvPW8ucGFyZW50Tm9kZSk7bztvPW8ucGFyZW50Tm9kZSlwLnB1c2gobyksYT1vO2E9PT0obi5vd25lckRvY3VtZW50fHxFKSYmcC5wdXNoKGEuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93fHxDKX1pPTA7d2hpbGUoKG89cFtpKytdKSYmIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlmPW8sZS50eXBlPTE8aT9zOmMuYmluZFR5cGV8fGQsKGw9KFkuZ2V0KG8sXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW2UudHlwZV0mJlkuZ2V0KG8sXCJoYW5kbGVcIikpJiZsLmFwcGx5KG8sdCksKGw9dSYmb1t1XSkmJmwuYXBwbHkmJlYobykmJihlLnJlc3VsdD1sLmFwcGx5KG8sdCksITE9PT1lLnJlc3VsdCYmZS5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gZS50eXBlPWQscnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Yy5fZGVmYXVsdCYmITEhPT1jLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksdCl8fCFWKG4pfHx1JiZtKG5bZF0pJiYheChuKSYmKChhPW5bdV0pJiYoblt1XT1udWxsKSxTLmV2ZW50LnRyaWdnZXJlZD1kLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5hZGRFdmVudExpc3RlbmVyKGQseHQpLG5bZF0oKSxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHh0KSxTLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsYSYmKG5bdV09YSkpLGUucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVMuZXh0ZW5kKG5ldyBTLkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMH0pO1MuZXZlbnQudHJpZ2dlcihyLG51bGwsdCl9fSksUy5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXNbMF07aWYobilyZXR1cm4gUy5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSx5LmZvY3VzaW58fFMuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7Uy5ldmVudC5zaW11bGF0ZShyLGUudGFyZ2V0LFMuZXZlbnQuZml4KGUpKX07Uy5ldmVudC5zcGVjaWFsW3JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUscik7dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4saSwhMCksWS5hY2Nlc3MoZSxyLCh0fHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpLTE7dD9ZLmFjY2VzcyhlLHIsdCk6KGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGksITApLFkucmVtb3ZlKGUscikpfX19KTt2YXIgYnQ9Qy5sb2NhdGlvbix3dD17Z3VpZDpEYXRlLm5vdygpfSxUdD0vXFw/LztTLnBhcnNlWE1MPWZ1bmN0aW9uKGUpe3ZhciB0LG47aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO3RyeXt0PShuZXcgQy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9Y2F0Y2goZSl7fXJldHVybiBuPXQmJnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKVswXSx0JiYhbnx8Uy5lcnJvcihcIkludmFsaWQgWE1MOiBcIisobj9TLm1hcChuLmNoaWxkTm9kZXMsZnVuY3Rpb24oZSl7cmV0dXJuIGUudGV4dENvbnRlbnR9KS5qb2luKFwiXFxuXCIpOmUpKSx0fTt2YXIgQ3Q9L1xcW1xcXSQvLEV0PS9cXHI/XFxuL2csU3Q9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLGt0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBBdChuLGUscixpKXt2YXIgdDtpZihBcnJheS5pc0FycmF5KGUpKVMuZWFjaChlLGZ1bmN0aW9uKGUsdCl7cnx8Q3QudGVzdChuKT9pKG4sdCk6QXQobitcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQ/ZTpcIlwiKStcIl1cIix0LHIsaSl9KTtlbHNlIGlmKHJ8fFwib2JqZWN0XCIhPT13KGUpKWkobixlKTtlbHNlIGZvcih0IGluIGUpQXQobitcIltcIit0K1wiXVwiLGVbdF0scixpKX1TLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49bSh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhUy5pc1BsYWluT2JqZWN0KGUpKVMuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpQXQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LFMuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPVMucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/Uy5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhUyh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYma3QudGVzdCh0aGlzLm5vZGVOYW1lKSYmIVN0LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPVModGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP1MubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShFdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKEV0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBOdD0vJTIwL2csanQ9LyMuKiQvLER0PS8oWz8mXSlfPVteJl0qLyxxdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLEx0PS9eKD86R0VUfEhFQUQpJC8sSHQ9L15cXC9cXC8vLE90PXt9LFB0PXt9LFJ0PVwiKi9cIi5jb25jYXQoXCIqXCIpLE10PUUuY3JlYXRlRWxlbWVudChcImFcIik7ZnVuY3Rpb24gSXQobyl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cIipcIik7dmFyIG4scj0wLGk9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXTtpZihtKHQpKXdoaWxlKG49aVtyKytdKVwiK1wiPT09blswXT8obj1uLnNsaWNlKDEpfHxcIipcIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uIFd0KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PVB0O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsUy5lYWNoKHRbZV18fFtdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dChpLG8sYSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIG58fHV8fHNbbl0/dT8hKHI9bik6dm9pZCAwOihpLmRhdGFUeXBlcy51bnNoaWZ0KG4pLGwobiksITEpfSkscn1yZXR1cm4gbChpLmRhdGFUeXBlc1swXSl8fCFzW1wiKlwiXSYmbChcIipcIil9ZnVuY3Rpb24gRnQoZSx0KXt2YXIgbixyLGk9Uy5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmUy5leHRlbmQoITAsZSxyKSxlfU10LmhyZWY9YnQuaHJlZixTLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6YnQuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDovXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLy50ZXN0KGJ0LnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpSdCx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6Uy5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/RnQoRnQoZSxTLmFqYXhTZXR0aW5ncyksdCk6RnQoUy5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6SXQoT3QpLGFqYXhUcmFuc3BvcnQ6SXQoUHQpLGFqYXg6ZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksdD10fHx7fTt2YXIgYyxmLHAsbixkLHIsaCxnLGksbyx2PVMuYWpheFNldHVwKHt9LHQpLHk9di5jb250ZXh0fHx2LG09di5jb250ZXh0JiYoeS5ub2RlVHlwZXx8eS5qcXVlcnkpP1MoeSk6Uy5ldmVudCx4PVMuRGVmZXJyZWQoKSxiPVMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdz12LnN0YXR1c0NvZGV8fHt9LGE9e30scz17fSx1PVwiY2FuY2VsZWRcIixUPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoaCl7aWYoIW4pe249e307d2hpbGUodD1xdC5leGVjKHApKW5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXT0oblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdfHxbXSkuY29uY2F0KHRbMl0pfXQ9bltlLnRvTG93ZXJDYXNlKCkrXCIgXCJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKFwiLCBcIil9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBoP3A6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1oJiYoZT1zW2UudG9Mb3dlckNhc2UoKV09c1tlLnRvTG93ZXJDYXNlKCldfHxlLGFbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09aCYmKHYubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGgpVC5hbHdheXMoZVtULnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl3W3RdPVt3W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHx1O3JldHVybiBjJiZjLmFib3J0KHQpLGwoMCx0KSx0aGlzfX07aWYoeC5wcm9taXNlKFQpLHYudXJsPSgoZXx8di51cmx8fGJ0LmhyZWYpK1wiXCIpLnJlcGxhY2UoSHQsYnQucHJvdG9jb2wrXCIvL1wiKSx2LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8di5tZXRob2R8fHYudHlwZSx2LmRhdGFUeXBlcz0odi5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtcIlwiXSxudWxsPT12LmNyb3NzRG9tYWluKXtyPUUuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3IuaHJlZj12LnVybCxyLmhyZWY9ci5ocmVmLHYuY3Jvc3NEb21haW49TXQucHJvdG9jb2wrXCIvL1wiK010Lmhvc3QhPXIucHJvdG9jb2wrXCIvL1wiK3IuaG9zdH1jYXRjaChlKXt2LmNyb3NzRG9tYWluPSEwfX1pZih2LmRhdGEmJnYucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiB2LmRhdGEmJih2LmRhdGE9Uy5wYXJhbSh2LmRhdGEsdi50cmFkaXRpb25hbCkpLFd0KE90LHYsdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9Uy5ldmVudCYmdi5nbG9iYWwpJiYwPT1TLmFjdGl2ZSsrJiZTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksdi50eXBlPXYudHlwZS50b1VwcGVyQ2FzZSgpLHYuaGFzQ29udGVudD0hTHQudGVzdCh2LnR5cGUpLGY9di51cmwucmVwbGFjZShqdCxcIlwiKSx2Lmhhc0NvbnRlbnQ/di5kYXRhJiZ2LnByb2Nlc3NEYXRhJiYwPT09KHYuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJih2LmRhdGE9di5kYXRhLnJlcGxhY2UoTnQsXCIrXCIpKToobz12LnVybC5zbGljZShmLmxlbmd0aCksdi5kYXRhJiYodi5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIHYuZGF0YSkmJihmKz0oVHQudGVzdChmKT9cIiZcIjpcIj9cIikrdi5kYXRhLGRlbGV0ZSB2LmRhdGEpLCExPT09di5jYWNoZSYmKGY9Zi5yZXBsYWNlKER0LFwiJDFcIiksbz0oVHQudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK3d0Lmd1aWQrKytvKSx2LnVybD1mK28pLHYuaWZNb2RpZmllZCYmKFMubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLFMubGFzdE1vZGlmaWVkW2ZdKSxTLmV0YWdbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixTLmV0YWdbZl0pKSwodi5kYXRhJiZ2Lmhhc0NvbnRlbnQmJiExIT09di5jb250ZW50VHlwZXx8dC5jb250ZW50VHlwZSkmJlQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHYuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHYuZGF0YVR5cGVzWzBdJiZ2LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dP3YuYWNjZXB0c1t2LmRhdGFUeXBlc1swXV0rKFwiKlwiIT09di5kYXRhVHlwZXNbMF0/XCIsIFwiK1J0K1wiOyBxPTAuMDFcIjpcIlwiKTp2LmFjY2VwdHNbXCIqXCJdKSx2LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGksdi5oZWFkZXJzW2ldKTtpZih2LmJlZm9yZVNlbmQmJighMT09PXYuYmVmb3JlU2VuZC5jYWxsKHksVCx2KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PVwiYWJvcnRcIixiLmFkZCh2LmNvbXBsZXRlKSxULmRvbmUodi5zdWNjZXNzKSxULmZhaWwodi5lcnJvciksYz1XdChQdCx2LHQsVCkpe2lmKFQucmVhZHlTdGF0ZT0xLGcmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW1Qsdl0pLGgpcmV0dXJuIFQ7di5hc3luYyYmMDx2LnRpbWVvdXQmJihkPUMuc2V0VGltZW91dChmdW5jdGlvbigpe1QuYWJvcnQoXCJ0aW1lb3V0XCIpfSx2LnRpbWVvdXQpKTt0cnl7aD0hMSxjLnNlbmQoYSxsKX1jYXRjaChlKXtpZihoKXRocm93IGU7bCgtMSxlKX19ZWxzZSBsKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXQ7aHx8KGg9ITAsZCYmQy5jbGVhclRpbWVvdXQoZCksYz12b2lkIDAscD1yfHxcIlwiLFQucmVhZHlTdGF0ZT0wPGU/NDowLGk9MjAwPD1lJiZlPDMwMHx8MzA0PT09ZSxuJiYocz1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX0odixULG4pKSwhaSYmLTE8Uy5pbkFycmF5KFwic2NyaXB0XCIsdi5kYXRhVHlwZXMpJiZTLmluQXJyYXkoXCJqc29uXCIsdi5kYXRhVHlwZXMpPDAmJih2LmNvbnZlcnRlcnNbXCJ0ZXh0IHNjcmlwdFwiXT1mdW5jdGlvbigpe30pLHM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXt9LGM9ZS5kYXRhVHlwZXMuc2xpY2UoKTtpZihjWzFdKWZvcihhIGluIGUuY29udmVydGVycylsW2EudG9Mb3dlckNhc2UoKV09ZS5jb252ZXJ0ZXJzW2FdO289Yy5zaGlmdCgpO3doaWxlKG8paWYoZS5yZXNwb25zZUZpZWxkc1tvXSYmKG5bZS5yZXNwb25zZUZpZWxkc1tvXV09dCksIXUmJnImJmUuZGF0YUZpbHRlciYmKHQ9ZS5kYXRhRmlsdGVyKHQsZS5kYXRhVHlwZSkpLHU9byxvPWMuc2hpZnQoKSlpZihcIipcIj09PW8pbz11O2Vsc2UgaWYoXCIqXCIhPT11JiZ1IT09byl7aWYoIShhPWxbdStcIiBcIitvXXx8bFtcIiogXCIrb10pKWZvcihpIGluIGwpaWYoKHM9aS5zcGxpdChcIiBcIikpWzFdPT09byYmKGE9bFt1K1wiIFwiK3NbMF1dfHxsW1wiKiBcIitzWzBdXSkpeyEwPT09YT9hPWxbaV06ITAhPT1sW2ldJiYobz1zWzBdLGMudW5zaGlmdChzWzFdKSk7YnJlYWt9aWYoITAhPT1hKWlmKGEmJmVbXCJ0aHJvd3NcIl0pdD1hKHQpO2Vsc2UgdHJ5e3Q9YSh0KX1jYXRjaChlKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmE/ZTpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIit1K1wiIHRvIFwiK299fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTp0fX0odixzLFQsaSksaT8odi5pZk1vZGlmaWVkJiYoKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIikpJiYoUy5sYXN0TW9kaWZpZWRbZl09dSksKHU9VC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpJiYoUy5ldGFnW2ZdPXUpKSwyMDQ9PT1lfHxcIkhFQURcIj09PXYudHlwZT9sPVwibm9jb250ZW50XCI6MzA0PT09ZT9sPVwibm90bW9kaWZpZWRcIjoobD1zLnN0YXRlLG89cy5kYXRhLGk9IShhPXMuZXJyb3IpKSk6KGE9bCwhZSYmbHx8KGw9XCJlcnJvclwiLGU8MCYmKGU9MCkpKSxULnN0YXR1cz1lLFQuc3RhdHVzVGV4dD0odHx8bCkrXCJcIixpP3gucmVzb2x2ZVdpdGgoeSxbbyxsLFRdKTp4LnJlamVjdFdpdGgoeSxbVCxsLGFdKSxULnN0YXR1c0NvZGUodyksdz12b2lkIDAsZyYmbS50cmlnZ2VyKGk/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW1QsdixpP286YV0pLGIuZmlyZVdpdGgoeSxbVCxsXSksZyYmKG0udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFtULHZdKSwtLVMuYWN0aXZlfHxTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiBUfSxnZXRKU09OOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUy5nZXQoZSx0LG4sXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUy5nZXQoZSx2b2lkIDAsdCxcInNjcmlwdFwiKX19KSxTLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGUsaSl7U1tpXT1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbSh0KSYmKHI9cnx8bixuPXQsdD12b2lkIDApLFMuYWpheChTLmV4dGVuZCh7dXJsOmUsdHlwZTppLGRhdGFUeXBlOnIsZGF0YTp0LHN1Y2Nlc3M6bn0sUy5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUuaGVhZGVycylcImNvbnRlbnQtdHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpJiYoZS5jb250ZW50VHlwZT1lLmhlYWRlcnNbdF18fFwiXCIpfSksUy5fZXZhbFVybD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbigpe319LGRhdGFGaWx0ZXI6ZnVuY3Rpb24oZSl7Uy5nbG9iYWxFdmFsKGUsdCxuKX19KX0sUy5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJihtKGUpJiYoZT1lLmNhbGwodGhpc1swXSkpLHQ9UyhlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RFbGVtZW50Q2hpbGQpZT1lLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24obil7cmV0dXJuIG0obik/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcElubmVyKG4uY2FsbCh0aGlzLGUpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVModGhpcyksdD1lLmNvbnRlbnRzKCk7dC5sZW5ndGg/dC53cmFwQWxsKG4pOmUuYXBwZW5kKG4pfSl9LHdyYXA6ZnVuY3Rpb24odCl7dmFyIG49bSh0KTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcEFsbChuP3QuY2FsbCh0aGlzLGUpOnQpfSl9LHVud3JhcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wYXJlbnQoZSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7Uyh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxTLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIVMuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LFMuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxTLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBDLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBCdD17MDoyMDAsMTIyMzoyMDR9LCR0PVMuYWpheFNldHRpbmdzLnhocigpO3kuY29ycz0hISR0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4gJHQseS5hamF4PSR0PSEhJHQsUy5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGkpe3ZhciBvLGE7aWYoeS5jb3JzfHwkdCYmIWkuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkueGhyKCk7aWYoci5vcGVuKGkudHlwZSxpLnVybCxpLmFzeW5jLGkudXNlcm5hbWUsaS5wYXNzd29yZCksaS54aHJGaWVsZHMpZm9yKG4gaW4gaS54aHJGaWVsZHMpcltuXT1pLnhockZpZWxkc1tuXTtmb3IobiBpbiBpLm1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZShpLm1pbWVUeXBlKSxpLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIiksZSlyLnNldFJlcXVlc3RIZWFkZXIobixlW25dKTtvPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe28mJihvPWE9ci5vbmxvYWQ9ci5vbmVycm9yPXIub25hYm9ydD1yLm9udGltZW91dD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWU/ci5hYm9ydCgpOlwiZXJyb3JcIj09PWU/XCJudW1iZXJcIiE9dHlwZW9mIHIuc3RhdHVzP3QoMCxcImVycm9yXCIpOnQoci5zdGF0dXMsci5zdGF0dXNUZXh0KTp0KEJ0W3Iuc3RhdHVzXXx8ci5zdGF0dXMsci5zdGF0dXNUZXh0LFwidGV4dFwiIT09KHIucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiByLnJlc3BvbnNlVGV4dD97YmluYXJ5OnIucmVzcG9uc2V9Ont0ZXh0OnIucmVzcG9uc2VUZXh0fSxyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxyLm9ubG9hZD1vKCksYT1yLm9uZXJyb3I9ci5vbnRpbWVvdXQ9byhcImVycm9yXCIpLHZvaWQgMCE9PXIub25hYm9ydD9yLm9uYWJvcnQ9YTpyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1yLnJlYWR5U3RhdGUmJkMuc2V0VGltZW91dChmdW5jdGlvbigpe28mJmEoKX0pfSxvPW8oXCJhYm9ydFwiKTt0cnl7ci5zZW5kKGkuaGFzQ29udGVudCYmaS5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihvKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe28mJm8oKX19fSksUy5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe2UuY3Jvc3NEb21haW4mJihlLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxTLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gUy5nbG9iYWxFdmFsKGUpLGV9fX0pLFMuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuY2FjaGUmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIpfSksUy5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24obil7dmFyIHIsaTtpZihuLmNyb3NzRG9tYWlufHxuLnNjcmlwdEF0dHJzKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7cj1TKFwiPHNjcmlwdD5cIikuYXR0cihuLnNjcmlwdEF0dHJzfHx7fSkucHJvcCh7Y2hhcnNldDpuLnNjcmlwdENoYXJzZXQsc3JjOm4udXJsfSkub24oXCJsb2FkIGVycm9yXCIsaT1mdW5jdGlvbihlKXtyLnJlbW92ZSgpLGk9bnVsbCxlJiZ0KFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxFLmhlYWQuYXBwZW5kQ2hpbGQoclswXSl9LGFib3J0OmZ1bmN0aW9uKCl7aSYmaSgpfX19KTt2YXIgX3QsenQ9W10sVXQ9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztTLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZT16dC5wb3AoKXx8Uy5leHBhbmRvK1wiX1wiK3d0Lmd1aWQrKztyZXR1cm4gdGhpc1tlXT0hMCxlfX0pLFMuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9ITEhPT1lLmpzb25wJiYoVXQudGVzdChlLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYwPT09KGUuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlV0LnRlc3QoZS5kYXRhKSYmXCJkYXRhXCIpO2lmKGF8fFwianNvbnBcIj09PWUuZGF0YVR5cGVzWzBdKXJldHVybiByPWUuanNvbnBDYWxsYmFjaz1tKGUuanNvbnBDYWxsYmFjayk/ZS5qc29ucENhbGxiYWNrKCk6ZS5qc29ucENhbGxiYWNrLGE/ZVthXT1lW2FdLnJlcGxhY2UoVXQsXCIkMVwiK3IpOiExIT09ZS5qc29ucCYmKGUudXJsKz0oVHQudGVzdChlLnVybCk/XCImXCI6XCI/XCIpK2UuanNvbnArXCI9XCIrciksZS5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gb3x8Uy5lcnJvcihyK1wiIHdhcyBub3QgY2FsbGVkXCIpLG9bMF19LGUuZGF0YVR5cGVzWzBdPVwianNvblwiLGk9Q1tyXSxDW3JdPWZ1bmN0aW9uKCl7bz1hcmd1bWVudHN9LG4uYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09aT9TKEMpLnJlbW92ZVByb3Aocik6Q1tyXT1pLGVbcl0mJihlLmpzb25wQ2FsbGJhY2s9dC5qc29ucENhbGxiYWNrLHp0LnB1c2gocikpLG8mJm0oaSkmJmkob1swXSksbz1pPXZvaWQgMH0pLFwic2NyaXB0XCJ9KSx5LmNyZWF0ZUhUTUxEb2N1bWVudD0oKF90PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHkpLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PV90LmNoaWxkTm9kZXMubGVuZ3RoKSxTLnBhcnNlSFRNTD1mdW5jdGlvbihlLHQsbil7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGU/W106KFwiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKSx0fHwoeS5jcmVhdGVIVE1MRG9jdW1lbnQ/KChyPSh0PUUuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpKS5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKSkuaHJlZj1FLmxvY2F0aW9uLmhyZWYsdC5oZWFkLmFwcGVuZENoaWxkKHIpKTp0PUUpLG89IW4mJltdLChpPU4uZXhlYyhlKSk/W3QuY3JlYXRlRWxlbWVudChpWzFdKV06KGk9eGUoW2VdLHQsbyksbyYmby5sZW5ndGgmJlMobykucmVtb3ZlKCksUy5tZXJnZShbXSxpLmNoaWxkTm9kZXMpKSk7dmFyIHIsaSxvfSxTLmZuLmxvYWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPXRoaXMscz1lLmluZGV4T2YoXCIgXCIpO3JldHVybi0xPHMmJihyPWh0KGUuc2xpY2UocykpLGU9ZS5zbGljZSgwLHMpKSxtKHQpPyhuPXQsdD12b2lkIDApOnQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYoaT1cIlBPU1RcIiksMDxhLmxlbmd0aCYmUy5hamF4KHt1cmw6ZSx0eXBlOml8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTp0fSkuZG9uZShmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxhLmh0bWwocj9TKFwiPGRpdj5cIikuYXBwZW5kKFMucGFyc2VIVE1MKGUpKS5maW5kKHIpOmUpfSkuYWx3YXlzKG4mJmZ1bmN0aW9uKGUsdCl7YS5lYWNoKGZ1bmN0aW9uKCl7bi5hcHBseSh0aGlzLG98fFtlLnJlc3BvbnNlVGV4dCx0LGVdKX0pfSksdGhpc30sUy5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIFMuZ3JlcChTLnRpbWVycyxmdW5jdGlvbihlKXtyZXR1cm4gdD09PWUuZWxlbX0pLmxlbmd0aH0sUy5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9Uy5jc3MoZSxcInBvc2l0aW9uXCIpLGM9UyhlKSxmPXt9O1wic3RhdGljXCI9PT1sJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLHM9Yy5vZmZzZXQoKSxvPVMuY3NzKGUsXCJ0b3BcIiksdT1TLmNzcyhlLFwibGVmdFwiKSwoXCJhYnNvbHV0ZVwiPT09bHx8XCJmaXhlZFwiPT09bCkmJi0xPChvK3UpLmluZGV4T2YoXCJhdXRvXCIpPyhhPShyPWMucG9zaXRpb24oKSkudG9wLGk9ci5sZWZ0KTooYT1wYXJzZUZsb2F0KG8pfHwwLGk9cGFyc2VGbG9hdCh1KXx8MCksbSh0KSYmKHQ9dC5jYWxsKGUsbixTLmV4dGVuZCh7fSxzKSkpLG51bGwhPXQudG9wJiYoZi50b3A9dC50b3Atcy50b3ArYSksbnVsbCE9dC5sZWZ0JiYoZi5sZWZ0PXQubGVmdC1zLmxlZnQraSksXCJ1c2luZ1wiaW4gdD90LnVzaW5nLmNhbGwoZSxmKTpjLmNzcyhmKX19LFMuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24odCl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihlKXtTLm9mZnNldC5zZXRPZmZzZXQodGhpcyx0LGUpfSk7dmFyIGUsbixyPXRoaXNbMF07cmV0dXJuIHI/ci5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZT1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49ci5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LHt0b3A6ZS50b3Arbi5wYWdlWU9mZnNldCxsZWZ0OmUubGVmdCtuLnBhZ2VYT2Zmc2V0fSk6e3RvcDowLGxlZnQ6MH06dm9pZCAwfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbixyPXRoaXNbMF0saT17dG9wOjAsbGVmdDowfTtpZihcImZpeGVkXCI9PT1TLmNzcyhyLFwicG9zaXRpb25cIikpdD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2Vsc2V7dD10aGlzLm9mZnNldCgpLG49ci5vd25lckRvY3VtZW50LGU9ci5vZmZzZXRQYXJlbnR8fG4uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJihlPT09bi5ib2R5fHxlPT09bi5kb2N1bWVudEVsZW1lbnQpJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5wYXJlbnROb2RlO2UmJmUhPT1yJiYxPT09ZS5ub2RlVHlwZSYmKChpPVMoZSkub2Zmc2V0KCkpLnRvcCs9Uy5jc3MoZSxcImJvcmRlclRvcFdpZHRoXCIsITApLGkubGVmdCs9Uy5jc3MoZSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSl9cmV0dXJue3RvcDp0LnRvcC1pLnRvcC1TLmNzcyhyLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6dC5sZWZ0LWkubGVmdC1TLmNzcyhyLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShlJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fHJlfSl9fSksUy5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbih0LGkpe3ZhciBvPVwicGFnZVlPZmZzZXRcIj09PWk7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih4KGUpP3I9ZTo5PT09ZS5ub2RlVHlwZSYmKHI9ZS5kZWZhdWx0Vmlldyksdm9pZCAwPT09bilyZXR1cm4gcj9yW2ldOmVbdF07cj9yLnNjcm9sbFRvKG8/ci5wYWdlWE9mZnNldDpuLG8/bjpyLnBhZ2VZT2Zmc2V0KTplW3RdPW59LHQsZSxhcmd1bWVudHMubGVuZ3RoKX19KSxTLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7Uy5jc3NIb29rc1tuXT1GZSh5LnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybiB0PVdlKGUsbiksUGUudGVzdCh0KT9TKGUpLnBvc2l0aW9uKClbbl0rXCJweFwiOnR9KX0pLFMuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLHMpe1MuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OnMsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24ocixvKXtTLmZuW29dPWZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCYmKHJ8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaT1yfHwoITA9PT1lfHwhMD09PXQ/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtyZXR1cm4geChlKT8wPT09by5pbmRleE9mKFwib3V0ZXJcIik/ZVtcImlubmVyXCIrYV06ZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09ZS5ub2RlVHlwZT8ocj1lLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChlLmJvZHlbXCJzY3JvbGxcIithXSxyW1wic2Nyb2xsXCIrYV0sZS5ib2R5W1wib2Zmc2V0XCIrYV0scltcIm9mZnNldFwiK2FdLHJbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PW4/Uy5jc3MoZSx0LGkpOlMuc3R5bGUoZSx0LG4saSl9LHMsbj9lOnZvaWQgMCxuKX19KX0pLFMuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLFMuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LGhvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLFMuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSxuKXtTLmZuW25dPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDA8YXJndW1lbnRzLmxlbmd0aD90aGlzLm9uKG4sbnVsbCxlLHQpOnRoaXMudHJpZ2dlcihuKX19KTt2YXIgWHQ9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nO1MucHJveHk9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPWVbdF0sdD1lLGU9biksbShlKSlyZXR1cm4gcj1zLmNhbGwoYXJndW1lbnRzLDIpLChpPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodHx8dGhpcyxyLmNvbmNhdChzLmNhbGwoYXJndW1lbnRzKSkpfSkuZ3VpZD1lLmd1aWQ9ZS5ndWlkfHxTLmd1aWQrKyxpfSxTLmhvbGRSZWFkeT1mdW5jdGlvbihlKXtlP1MucmVhZHlXYWl0Kys6Uy5yZWFkeSghMCl9LFMuaXNBcnJheT1BcnJheS5pc0FycmF5LFMucGFyc2VKU09OPUpTT04ucGFyc2UsUy5ub2RlTmFtZT1BLFMuaXNGdW5jdGlvbj1tLFMuaXNXaW5kb3c9eCxTLmNhbWVsQ2FzZT1YLFMudHlwZT13LFMubm93PURhdGUubm93LFMuaXNOdW1lcmljPWZ1bmN0aW9uKGUpe3ZhciB0PVMudHlwZShlKTtyZXR1cm4oXCJudW1iZXJcIj09PXR8fFwic3RyaW5nXCI9PT10KSYmIWlzTmFOKGUtcGFyc2VGbG9hdChlKSl9LFMudHJpbT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoWHQsXCJcIil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gU30pO3ZhciBWdD1DLmpRdWVyeSxHdD1DLiQ7cmV0dXJuIFMubm9Db25mbGljdD1mdW5jdGlvbihlKXtyZXR1cm4gQy4kPT09UyYmKEMuJD1HdCksZSYmQy5qUXVlcnk9PT1TJiYoQy5qUXVlcnk9VnQpLFN9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoQy5qUXVlcnk9Qy4kPVMpLFN9KTsiLCJjb25zdCBkb2N1bWVudCA9ICgpID0+IChcclxuZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgbWVudSA9JChcIi5tZW51XCIpO1xyXG4gICAgdmFyIGhhbWJ1cmd1ciA9JChcIi5oYW1idXJnZXJcIik7XHJcbiAgICB2YXIgbGluZSA9ICQoXCIubGluZVwiKTtcclxuICAgIHZhciBtZW51T3BlbjtcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTWVudSgpe1xyXG4gICAgICAgIG1lbnUuY3NzKFwibGVmdFwiLCBcIjBweFwiKTtcclxuICAgICAgICBsaW5lLmNzcyhcImJhY2tncm91bmRcIixcIiNmZmZcIik7XHJcbiAgICAgICAgbWVudU9wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudSgpe1xyXG4gICAgICAgIG1lbnUuY3NzKFwibGVmdFwiLCBcIi0zMjBweFwiKTtcclxuICAgICAgICBsaW5lLmNzcyhcImJhY2tncm91bmRcIiwgXCIjYmNhZDkwXCIpO1xyXG4gICAgICAgIG1lbnVPcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpe1xyXG4gICAgICAgIGlmKG1lbnVPcGVuKXtcclxuICAgICAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIG9wZW5NZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFtYnVyZ3VyLm9uKHtcclxuICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBvcGVuTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnUub24oe1xyXG4gICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9KTtcclxuXHJcbiAgICBoYW1idXJndXIub24oe1xyXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiY29udGVudFwiOiBcIkhvbWVfY29udGVudF9fMmZxT3pcIixcblx0XCJncmlkQ29udGFpbmVyXCI6IFwiSG9tZV9ncmlkQ29udGFpbmVyX18zOURjMVwiLFxuXHRcImJ0dWNvcHlcIjogXCJIb21lX2J0dWNvcHlfX2d6NUx2XCIsXG5cdFwiYnR1bG9naW5cIjogXCJIb21lX2J0dWxvZ2luX18zZDQ3b1wiLFxuXHRcImJ0dXJlZ2lzdGVyXCI6IFwiSG9tZV9idHVyZWdpc3Rlcl9fM1V5Z2pcIixcblx0XCJ0ZXh0XCI6IFwiSG9tZV90ZXh0X18xc0NRYVwiLFxuXHRcImJ0blwiOiBcIkhvbWVfYnRuX18zUGZpcFwiLFxuXHRcImJ0bjFcIjogXCJIb21lX2J0bjFfXzRqdURHXCIsXG5cdFwiYnRuMlwiOiBcIkhvbWVfYnRuMl9fd0k4eXZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlY3Rpb25cIjogXCJuYXZiYXJfc2VjdGlvbl9fMlVNQ2JcIixcblx0XCJoYW1idXJndXJcIjogXCJuYXZiYXJfaGFtYnVyZ3VyX18xb3Y1YlwiLFxuXHRcImxpbmVcIjogXCJuYXZiYXJfbGluZV9fMm9PUHVcIixcblx0XCJtZW51XCI6IFwibmF2YmFyX21lbnVfXzJmZjJxXCIsXG5cdFwibWVudWl0ZW1cIjogXCJuYXZiYXJfbWVudWl0ZW1fXzJOZXZqXCIsXG5cdFwibWVudS0tb3BlblwiOiBcIm5hdmJhcl9tZW51LS1vcGVuX18xUl92NVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9