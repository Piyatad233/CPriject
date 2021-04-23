webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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




var _jsxFileName = "D:\\client\\lab8\\Lab08\\next-nodejs-auth\\frontend\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var URL = "http://localhost/api/herolists";
var URL_SEL = "http://localhost/api/purchase";

var fetcher = function fetcher(key) {
  return fetch(key).then(function (res) {
    return res.json();
  });
};

var index = function index() {
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
            children: "Picture :"
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
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 79
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
        children: "Home Page"
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
        className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.title,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("marquee", {
          bgcolor: "#A9E0B8",
          direction: "lefe",
          scrollamount: "5",
          width: "100%",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ins", {
            children: "Welcome to My HeroWorld"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 81
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.list,
        children: showHerolist()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_Index_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.list1,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ins", {
              children: "(selected Hero)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 43
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 40
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 37
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "  Name:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 78
        }, _this), herolists.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "  Status:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 108
        }, _this), herolists.status, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "  Rank:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 143
        }, _this), herolists.rank, "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Number:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 175
        }, _this), herolists.number, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: "Picture:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 208
        }, _this), herolists.imgeurl]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
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

_s(index, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVVJMIiwiVVJMX1NFTCIsImZldGNoZXIiLCJrZXkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaW5kZXgiLCJ1c2VTV1IiLCJyZXZhbGlkYXRlT25Gb2N1cyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZWxTdHUiLCJpZCIsImF4aW9zIiwicG9zdCIsInJlc3VsdCIsIm11dGF0ZSIsInNob3dIZXJvbGlzdCIsImxpc3QiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwic3R5bGVzIiwibGlzdEl0ZW0iLCJpbWdldXJsIiwibmFtZSIsInN0YXR1cyIsInJhbmsiLCJudW1iZXIiLCJidG4iLCJjb250YWluZXIiLCJ0aXRsZSIsImxpc3QxIiwiaGVyb2xpc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHLGdDQUFaO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLCtCQUFoQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxHQUFoQixDQUFUO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGdCQUNNQyxtREFBTSxDQUFDVCxHQUFELEVBQU1FLE9BQU4sRUFBZTtBQUFFUSxxQkFBaUIsRUFBRTtBQUFyQixHQUFmLENBRFo7QUFBQSxNQUNWQyxJQURVLFdBQ1ZBLElBRFU7QUFBQSxNQUNKQyxLQURJLFdBQ0pBLEtBREk7O0FBRWxCLE1BQUlBLEtBQUosRUFBVyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ1gsTUFBSSxDQUFDRCxJQUFMLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNYRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CSCxJQUFwQjs7QUFFQSxNQUFNSSxNQUFNO0FBQUEsb1RBQUcsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTUMsNENBQUssQ0FBQ0MsSUFBTixXQUFjakIsT0FBZCxjQUF5QmUsRUFBekIsRUFETjs7QUFBQTtBQUNURyxvQkFEUztBQUViQyxnRUFBTSxDQUFDcEIsR0FBRCxFQUFNVyxJQUFOLENBQU47O0FBRmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTkksTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUtBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSVYsSUFBSSxDQUFDVyxJQUFMLElBQWFYLElBQUksQ0FBQ1csSUFBTCxDQUFVQyxNQUEzQixFQUFtQztBQUNqQyxhQUFPWixJQUFJLENBQUNXLElBQUwsQ0FBVUUsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT2pCLEtBQVAsRUFBaUI7QUFDcEMsNEJBQ0U7QUFBSyxtQkFBUyxFQUFFa0IsK0RBQU0sQ0FBQ0MsUUFBdkI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUNrQjtBQUFLLGVBQUcsRUFBRUYsSUFBSSxDQUFDRyxPQUFmO0FBQXdCLGlCQUFLLEVBQUUsR0FBL0I7QUFBb0MsaUJBQUssRUFBRTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURsQixlQUNvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURwRSxlQUVFO0FBQUEsb0NBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUwsT0FBbUJILElBQUksQ0FBQ0ksSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxvQ0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBTCxPQUFxQkosSUFBSSxDQUFDSyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRztBQUFBLHlDQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFOLE9BQW9CTCxJQUFJLENBQUNNLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSCxlQUtFO0FBQUEsb0NBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUwsT0FBcUJOLElBQUksQ0FBQ08sTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBT0U7QUFBQSxtQ0FDQTtBQUNFLHVCQUFTLEVBQUVOLCtEQUFNLENBQUNPLEdBRHBCO0FBRUUscUJBQU8sRUFBRTtBQUFBLHVCQUFNbEIsTUFBTSxDQUFDVSxJQUFJLENBQUNULEVBQU4sQ0FBWjtBQUFBLGVBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUEsV0FBc0NSLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFpQkQsT0FsQk0sQ0FBUDtBQW1CRCxLQXBCRCxNQW9CTztBQUNMLDBCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDtBQUNGLEdBeEJEOztBQXlCQSxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDRCQUNHLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREgsZUFJQTtBQUFLLGVBQVMsRUFBRWtCLCtEQUFNLENBQUNRLFNBQXZCO0FBQUEsOEJBQWtDLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBbEMsZUFDRTtBQUFLLGlCQUFTLEVBQUVSLCtEQUFNLENBQUNTLEtBQXZCO0FBQUEsK0JBQ0E7QUFBUyxpQkFBTyxFQUFDLFNBQWpCO0FBQTJCLG1CQUFTLEVBQUMsTUFBckM7QUFBNEMsc0JBQVksRUFBQyxHQUF6RDtBQUE2RCxlQUFLLEVBQUMsTUFBbkU7QUFBQSxpQ0FBMEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQUssaUJBQVMsRUFBRVQsK0RBQU0sQ0FBQ0osSUFBdkI7QUFBQSxrQkFDR0QsWUFBWTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQU1FO0FBQUssaUJBQVMsRUFBRUssK0RBQU0sQ0FBQ1UsS0FBdkI7QUFBQSxnQ0FBOEI7QUFBQSxpQ0FBRztBQUFBLG1DQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTlCLG9CQUF1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdkUsRUFBc0ZDLFNBQVMsQ0FBQ1IsSUFBaEcsZUFBcUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXJHLEVBQXNIUSxTQUFTLENBQUNQLE1BQWhJLG9CQUF3STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBeEksRUFBdUpPLFNBQVMsQ0FBQ04sSUFBaksscUJBQXdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF4SyxFQUF1TE0sU0FBUyxDQUFDTCxNQUFqTSxvQkFBeU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXpNLEVBQXlOSyxTQUFTLENBQUNULE9BQW5PO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBcEREOztHQUFNcEIsSztVQUNvQkMsMkM7OztBQW9EWEQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTY5ZjVjNGZlMWVmOTZiZTJhNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCcgXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnIFxyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0luZGV4Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuY29uc3QgVVJMID0gXCJodHRwOi8vbG9jYWxob3N0L2FwaS9oZXJvbGlzdHNcIjtcclxuY29uc3QgVVJMX1NFTCA9IFwiaHR0cDovL2xvY2FsaG9zdC9hcGkvcHVyY2hhc2VcIjtcclxuY29uc3QgZmV0Y2hlciA9IChrZXkpID0+IGZldGNoKGtleSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFVSTCwgZmV0Y2hlciwgeyByZXZhbGlkYXRlT25Gb2N1czogZmFsc2UgfSk7XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWlsZWQgdG8gbG9hZDwvZGl2PjtcclxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gIFxyXG4gIGNvbnN0IHNlbFN0dSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7VVJMX1NFTH0vJHtpZH1gKVxyXG4gICAgbXV0YXRlKFVSTCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93SGVyb2xpc3QgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5saXN0ICYmIGRhdGEubGlzdC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGRhdGEubGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8Yj5QaWN0dXJlIDo8L2I+PGltZyBzcmM9e2l0ZW0uaW1nZXVybH0gd2lkdGg9ezIwMH0gaGlnaHQ9ezIwMH0gLz48YnIgLz5cclxuICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj4ge2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Yj5TdGF0dXM6PC9iPiB7aXRlbS5zdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgICA8ZGl2PiA8Yj5SYW5rOjwvYj4ge2l0ZW0ucmFua30gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+TnVtYmVyOjwvYj4ge2l0ZW0ubnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWxTdHUoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZWxlY3RcclxuICAgICAgICAgICAgPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhvbWUgUGFnZTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+PE5hdmJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgPG1hcnF1ZWUgYmdjb2xvcj1cIiNBOUUwQjhcIiBkaXJlY3Rpb249XCJsZWZlXCIgc2Nyb2xsYW1vdW50PVwiNVwiIHdpZHRoPVwiMTAwJVwiPjxpbnM+V2VsY29tZSB0byBNeSBIZXJvV29ybGQ8L2lucz48L21hcnF1ZWU+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAge3Nob3dIZXJvbGlzdCgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0MX0+PGI+PGk+PGlucz4oc2VsZWN0ZWQgSGVybyk8L2lucz48L2k+PC9iPiA8Yj4gIE5hbWU6PC9iPntoZXJvbGlzdHMubmFtZX08Yj4gIFN0YXR1czo8L2I+e2hlcm9saXN0cy5zdGF0dXN9IDxiPiAgUmFuazo8L2I+e2hlcm9saXN0cy5yYW5rfSAgPGI+TnVtYmVyOjwvYj57aGVyb2xpc3RzLm51bWJlcn0gPGI+UGljdHVyZTo8L2I+e2hlcm9saXN0cy5pbWdldXJsfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9