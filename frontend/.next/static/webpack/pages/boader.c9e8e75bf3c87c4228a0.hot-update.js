webpackHotUpdate_N_E("pages/boader",{

/***/ "./pages/boader.js":
/*!*************************!*\
  !*** ./pages/boader.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Index.module.css */ "./styles/Index.module.css");
/* harmony import */ var _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");




var _jsxFileName = "D:\\client\\lab8\\Lab08\\next-nodejs-auth\\frontend\\pages\\boader.js",
    _this = undefined,
    _s = $RefreshSig$();








var URL = "http://localhost/api/herolists";
var URL_SEL = "http://localhost/api/purchase";

var fetcher = function fetcher(key) {
  return fetch(key).then(function (res) {
    return res.json();
  });
};

var boader = function boader() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])(URL, fetcher, {
    revalidateOnFocus: false
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: "failed to load"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 21
  }, _this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 21
  }, _this);
  console.log("data", data);

  var selStu = /*#__PURE__*/function () {
    var _ref = Object(D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      var result;
      return D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat(URL_SEL, "/").concat(id));

            case 2:
              result = _context.sent;
              Object(swr__WEBPACK_IMPORTED_MODULE_5__["mutate"])(URL, data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function selStu(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var showHerolist = function showHerolist() {
    if (data.list && data.list.length) {
      return data.list.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
            children: "Picture"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: item.imgeurl,
            width: 200,
            hight: 200
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 27
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 77
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 18
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 18
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
              children: "Rank:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 20
            }, _this), " ", item.rank, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 14
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
              children: "Number:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 18
            }, _this), " ", item.number]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.btn,
              onClick: function onClick() {
                return selStu(item.id);
              },
              children: "Select"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 14
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "ScollBoard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 8
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 39
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.list,
        children: showHerolist()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_s(boader, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

/* harmony default export */ __webpack_exports__["default"] = (boader);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9hZGVyLmpzIl0sIm5hbWVzIjpbIlVSTCIsIlVSTF9TRUwiLCJmZXRjaGVyIiwia2V5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImJvYWRlciIsInVzZVNXUiIsInJldmFsaWRhdGVPbkZvY3VzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlbFN0dSIsImlkIiwiYXhpb3MiLCJwb3N0IiwicmVzdWx0IiwibXV0YXRlIiwic2hvd0hlcm9saXN0IiwibGlzdCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInN0eWxlcyIsImxpc3RJdGVtIiwiaW1nZXVybCIsIm5hbWUiLCJzdGF0dXMiLCJyYW5rIiwibnVtYmVyIiwiYnRuIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHLGdDQUFaO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLCtCQUFoQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQUFoQixDQUFUO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGdCQUNLQyxtREFBTSxDQUFDVCxHQUFELEVBQU1FLE9BQU4sRUFBZTtBQUFFUSxxQkFBaUIsRUFBRTtBQUFyQixHQUFmLENBRFg7QUFBQSxNQUNYQyxJQURXLFdBQ1hBLElBRFc7QUFBQSxNQUNMQyxLQURLLFdBQ0xBLEtBREs7O0FBRW5CLE1BQUlBLEtBQUosRUFBVyxvQkFBTztBQUFBO0FBQUE7QUFBQTtB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LENBQUNMLElBQXZCO0FBQUEsa0JBQ0dELFlBQVk7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQWxERDs7R0FBTWIsTTtVQUNvQkMsMkM7OztBQWtEWEQscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hZGVyLmM5ZThlNzViZjNjODdjNDIyOGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnIFxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JyBcclxuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9JbmRleC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdC9hcGkvaGVyb2xpc3RzXCI7XHJcbmNvbnN0IFVSTF9TRUwgPSBcImh0dHA6Ly9sb2NhbGhvc3QvYXBpL3B1cmNoYXNlXCI7XHJcbmNvbnN0IGZldGNoZXIgPSAoa2V5KSA9PiBmZXRjaChrZXkpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XHJcbmNvbnN0IGJvYWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoVVJMLCBmZXRjaGVyLCB7IHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSB9KTtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+O1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgXHJcbiAgY29uc3Qgc2VsU3R1ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgJHtVUkxfU0VMfS8ke2lkfWApXHJcbiAgICBtdXRhdGUoVVJMLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dIZXJvbGlzdCA9ICgpID0+IHtcclxuICAgIGlmIChkYXRhLmxpc3QgJiYgZGF0YS5saXN0Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZGF0YS5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxiPlBpY3R1cmU8L2I+PGltZyBzcmM9e2l0ZW0uaW1nZXVybH0gd2lkdGg9ezIwMH0gaGlnaHQ9ezIwMH0gLz48YnIgLz5cclxuICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj4ge2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Yj5TdGF0dXM6PC9iPiB7aXRlbS5zdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgICA8ZGl2PiA8Yj5SYW5rOjwvYj4ge2l0ZW0ucmFua30gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+TnVtYmVyOjwvYj4ge2l0ZW0ubnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxTdHUoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZWxlY3RcclxuICAgICAgICAgICAgPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNjb2xsQm9hcmQ8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PjxOYXZiYXIgLz5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAge3Nob3dIZXJvbGlzdCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGJvYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==