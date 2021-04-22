webpackHotUpdate_N_E("pages/herolist",{

/***/ "./pages/herolist.js":
/*!***************************!*\
  !*** ./pages/herolist.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/student.module.css */ "./styles/student.module.css");
/* harmony import */ var _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_student_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/withAuth */ "./components/withAuth.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _pages_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/firebase */ "./pages/firebase/index.js");




var _jsxFileName = "D:\\client\\lab8\\Lab08\\next-nodejs-auth\\frontend\\pages\\herolist.js",
    _this = undefined,
    _s = $RefreshSig$();







var URL = "http://localhost/api/herolists";

var admin = function admin(_ref) {
  _s();

  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      herolists = _useState2[0],
      setHerolists = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      rank = _useState5[0],
      setRank = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      number = _useState6[0],
      setNumber = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      herolist = _useState7[0],
      setHerolist = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      imgeurl = _useState8[0],
      setImageUrl = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getHerolists();
    profileUser();
  }, []);

  var profileUser = /*#__PURE__*/function () {
    var _ref2 = Object(D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var users;
      return D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(config.URL, "/profile"), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 3:
              users = _context.sent;
              setUser(users.data);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function profileUser() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getHerolist = /*#__PURE__*/function () {
    var _ref3 = Object(D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
      var result;
      return D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(URL, "/").concat(id));

            case 2:
              result = _context2.sent;
              console.log('herolist id: ', result.data);
              setHerolist(result.data);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getHerolist(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getHerolists = /*#__PURE__*/function () {
    var _ref4 = Object(D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var result;
      return D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(URL);

            case 2:
              result = _context3.sent;
              setHerolists(result.data.list);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getHerolists() {
      return _ref4.apply(this, arguments);
    };
  }();

  var addHerolist = /*#__PURE__*/function () {
    var _ref5 = Object(D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var result;
      return D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(URL, {
                name: name,
                status: status,
                rank: rank,
                number: number,
                imgeurl: imgeurl
              });

            case 2:
              result = _context4.sent;
              console.log(result);
              getHerolists();

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function addHerolist() {
      return _ref5.apply(this, arguments);
    };
  }();

  var deleteHerolist = /*#__PURE__*/function () {
    var _ref6 = Object(D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(id) {
      var result;
      return D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("".concat(URL, "/").concat(id));

            case 2:
              result = _context5.sent;
              getHerolists();

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function deleteHerolist(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  var updateHerolist = /*#__PURE__*/function () {
    var _ref7 = Object(D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(id) {
      var result;
      return D_client_lab8_Lab08_next_nodejs_auth_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("".concat(URL, "/").concat(id), {
                name: name,
                status: status,
                rank: rank,
                number: number,
                imgeurl: imgeurl
              });

            case 2:
              result = _context6.sent;
              console.log(result);
              getHerolists();

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function updateHerolist(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();

  var showHerolist = function showHerolist() {
    if (herolists && herolists.length) {
      return herolists.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.listItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Picture:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this), " ", item.imgeurl, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 43
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), " ", item.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 38
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), " ", item.status, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 42
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Rank:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), " ", item.rank, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 38
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Number:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), " ", item.number, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 41
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.edit_button,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_get,
              onClick: function onClick() {
                return getHerolist(item.id);
              },
              children: "Get"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_update,
              onClick: function onClick() {
                return updateHerolist(item.id);
              },
              children: "Update"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_delete,
              onClick: function onClick() {
                return deleteHerolist(item.id);
              },
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 14
      }, _this);
    }
  };

  var handlerChangeFile = function handlerChangeFile(e) {
    var reader = new FileReader();

    reader.onload = function (e) {
      setImageUrl(e.target.result);
    };

    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _pages_firebase__WEBPACK_IMPORTED_MODULE_8__["default"].firestore().collection('Herolist').get().then(function (snapshot) {
      console.log('snapshot', snapshot.forEach(function (res) {
        console.log(res);
      }));
    });
    console.log('test');
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
        children: "Hero Data Edit "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form_add,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Add Hero"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        onChange: function onChange(e) {
          return setName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this), "Status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "status",
        onChange: function onChange(e) {
          return setStatus(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this), "Rank:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "rank",
        onChange: function onChange(e) {
          return setRank(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this), "Number:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "number",
        onChange: function onChange(e) {
          return setNumber(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, _this), "Picture :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        accept: "image/*",
        onChange: handlerChangeFile
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_add,
        onClick: function onClick() {
          return addHerolist(name, status, rank, number, imgeurl);
        },
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: showHerolist()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
            children: "(selected Hero)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 43
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 40
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 37
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "  Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 78
      }, _this), herolists.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "  Status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 108
      }, _this), herolists.status, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "  Rank:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 143
      }, _this), herolists.rank, "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Number:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 175
      }, _this), herolists.number, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Picture:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 208
      }, _this), herolists.imgeurl]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 5
  }, _this);
};

_s(admin, "uRCQGwaaSfVH+tA1aYv0++texRY=");

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_6__["default"])(admin));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVyb2xpc3QuanMiXSwibmFtZXMiOlsiVVJMIiwiYWRtaW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJoZXJvbGlzdHMiLCJzZXRIZXJvbGlzdHMiLCJuYW1lIiwic2V0TmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInJhbmsiLCJzZXRSYW5rIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiaGVyb2xpc3QiLCJzZXRIZXJvbGlzdCIsImltZ2V1cmwiLCJzZXRJbWFnZVVybCIsInVzZUVmZmVjdCIsImdldEhlcm9saXN0cyIsInByb2ZpbGVVc2VyIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRIZXJvbGlzdCIsImlkIiwicmVzdWx0IiwibGlzdCIsImFkZEhlcm9saXN0IiwicG9zdCIsImRlbGV0ZUhlcm9saXN0IiwidXBkYXRlSGVyb2xpc3QiLCJwdXQiLCJzaG93SGVyb2xpc3QiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImVkaXRfYnV0dG9uIiwiYnV0dG9uX2dldCIsImJ1dHRvbl91cGRhdGUiLCJidXR0b25fZGVsZXRlIiwiaGFuZGxlckNoYW5nZUZpbGUiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRhcmdldCIsImZpbGVzIiwicmVhZEFzRGF0YVVSTCIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsInRoZW4iLCJzbmFwc2hvdCIsImZvckVhY2giLCJyZXMiLCJjb250YWluZXIiLCJmb3JtX2FkZCIsInZhbHVlIiwiYnV0dG9uX2FkZCIsImxpc3QxIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUcsZ0NBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUNwQkMsSUFEb0I7QUFBQSxNQUNkQyxPQURjOztBQUFBLG1CQUVPRixzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRXBCRyxTQUZvQjtBQUFBLE1BRVRDLFlBRlM7O0FBQUEsbUJBR0hKLHNEQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHcEJLLElBSG9CO0FBQUEsTUFHZEMsT0FIYzs7QUFBQSxtQkFJQ04sc0RBQVEsQ0FBQyxFQUFELENBSlQ7QUFBQSxNQUlwQk8sTUFKb0I7QUFBQSxNQUlaQyxTQUpZOztBQUFBLG1CQUtIUixzREFBUSxDQUFDLEVBQUQsQ0FMTDtBQUFBLE1BS3BCUyxJQUxvQjtBQUFBLE1BS2RDLE9BTGM7O0FBQUEsbUJBTUNWLHNEQUFRLENBQUMsRUFBRCxDQU5UO0FBQUEsTUFNcEJXLE1BTm9CO0FBQUEsTUFNWkMsU0FOWTs7QUFBQSxtQkFPS1osc0RBQVEsQ0FBQyxFQUFELENBUGI7QUFBQSxNQU9wQmEsUUFQb0I7QUFBQSxNQU9WQyxXQVBVOztBQUFBLG1CQVFJZCxzREFBUSxDQUFDLEVBQUQsQ0FSWjtBQUFBLE1BUXBCZSxPQVJvQjtBQUFBLE1BUVhDLFdBUlc7O0FBUzNCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZ0JBQVk7QUFDWkMsZUFBVztBQUNaLEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBSUEsTUFBTUEsV0FBVztBQUFBLHFUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHSUMsNENBQUssQ0FBQ0MsR0FBTixXQUFhQyxNQUFNLENBQUN6QixHQUFwQixlQUFtQztBQUNyRDBCLHVCQUFPLEVBQUU7QUFBRUMsK0JBQWEsbUJBQVl6QixLQUFaO0FBQWY7QUFENEMsZUFBbkMsQ0FISjs7QUFBQTtBQUdWMEIsbUJBSFU7QUFPaEJ2QixxQkFBTyxDQUFDdUIsS0FBSyxDQUFDQyxJQUFQLENBQVA7QUFQZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTaEJDLHFCQUFPLENBQUNDLEdBQVI7O0FBVGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhULFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBYUEsTUFBTVUsV0FBVztBQUFBLHFUQUFHLGtCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0dWLDRDQUFLLENBQUNDLEdBQU4sV0FBYXhCLEdBQWIsY0FBb0JpQyxFQUFwQixFQURIOztBQUFBO0FBQ1pDLG9CQURZO0FBRWxCSixxQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkcsTUFBTSxDQUFDTCxJQUFwQztBQUNBWix5QkFBVyxDQUFDaUIsTUFBTSxDQUFDTCxJQUFSLENBQVg7O0FBSGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhHLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBTUEsTUFBTVgsWUFBWTtBQUFBLHFUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0FFLDRDQUFLLENBQUNDLEdBQU4sQ0FBVXhCLEdBQVYsQ0FEQTs7QUFBQTtBQUNma0Msb0JBRGU7QUFFbkIzQiwwQkFBWSxDQUFDMkIsTUFBTSxDQUFDTCxJQUFQLENBQVlNLElBQWIsQ0FBWjs7QUFGbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWmQsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFLQSxNQUFNZSxXQUFXO0FBQUEscVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ2IsNENBQUssQ0FBQ2MsSUFBTixDQUFXckMsR0FBWCxFQUFnQjtBQUNqQ1Esb0JBQUksRUFBSkEsSUFEaUM7QUFFakNFLHNCQUFNLEVBQU5BLE1BRmlDO0FBR2pDRSxvQkFBSSxFQUFKQSxJQUhpQztBQUlqQ0Usc0JBQU0sRUFBTkEsTUFKaUM7QUFLakNJLHVCQUFPLEVBQVBBO0FBTGlDLGVBQWhCLENBREQ7O0FBQUE7QUFDZGdCLG9CQURjO0FBUWxCSixxQkFBTyxDQUFDQyxHQUFSLENBQVlHLE1BQVo7QUFDQWIsMEJBQVk7O0FBVE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWGUsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFZQSxNQUFNRSxjQUFjO0FBQUEscVRBQUcsa0JBQU9MLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRlYsNENBQUssVUFBTCxXQUFnQnZCLEdBQWhCLGNBQXVCaUMsRUFBdkIsRUFERTs7QUFBQTtBQUNqQkMsb0JBRGlCO0FBRXJCYiwwQkFBWTs7QUFGUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkaUIsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFLQSxNQUFNQyxjQUFjO0FBQUEscVRBQUcsa0JBQU9OLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRlYsNENBQUssQ0FBQ2lCLEdBQU4sV0FBYXhDLEdBQWIsY0FBb0JpQyxFQUFwQixHQUEwQjtBQUMzQ3pCLG9CQUFJLEVBQUpBLElBRDJDO0FBRTNDRSxzQkFBTSxFQUFOQSxNQUYyQztBQUczQ0Usb0JBQUksRUFBSkEsSUFIMkM7QUFJM0NFLHNCQUFNLEVBQU5BLE1BSjJDO0FBSzNDSSx1QkFBTyxFQUFQQTtBQUwyQyxlQUExQixDQURFOztBQUFBO0FBQ2pCZ0Isb0JBRGlCO0FBUXJCSixxQkFBTyxDQUFDQyxHQUFSLENBQVlHLE1BQVo7QUFDQWIsMEJBQVk7O0FBVFM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZGtCLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBWUEsTUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJbkMsU0FBUyxJQUFJQSxTQUFTLENBQUNvQyxNQUEzQixFQUFtQztBQUNqQyxhQUFPcEMsU0FBUyxDQUFDcUMsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNwQyw0QkFDRTtBQUFLLG1CQUFTLEVBQUVDLGlFQUFNLENBQUNDLFFBQXZCO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsT0FDbUJILElBQUksQ0FBQzFCLE9BRHhCLGVBQ2dDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGhDLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsT0FFZ0IwQixJQUFJLENBQUNwQyxJQUZyQixvQkFFMkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGM0IsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixPQUdrQm9DLElBQUksQ0FBQ2xDLE1BSHZCLG9CQUcrQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUgvQixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLE9BSWdCa0MsSUFBSSxDQUFDaEMsSUFKckIsb0JBSTJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSjNCLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsT0FLa0JnQyxJQUFJLENBQUM5QixNQUx2QixlQUs4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUw5QixlQU1FO0FBQUsscUJBQVMsRUFBRWdDLGlFQUFNLENBQUNFLFdBQXZCO0FBQUEsb0NBQ0U7QUFDRSx1QkFBUyxFQUFFRixpRUFBTSxDQUFDRyxVQURwQjtBQUVFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTWpCLFdBQVcsQ0FBQ1ksSUFBSSxDQUFDWCxFQUFOLENBQWpCO0FBQUEsZUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQ0UsdUJBQVMsRUFBRWEsaUVBQU0sQ0FBQ0ksYUFEcEI7QUFFRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1YLGNBQWMsQ0FBQ0ssSUFBSSxDQUFDWCxFQUFOLENBQXBCO0FBQUEsZUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQWFFO0FBQ0UsdUJBQVMsRUFBRWEsaUVBQU0sQ0FBQ0ssYUFEcEI7QUFFRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1iLGNBQWMsQ0FBQ00sSUFBSSxDQUFDWCxFQUFOLENBQXBCO0FBQUEsZUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQSxXQUFzQ1ksS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQTZCRCxPQTlCTSxDQUFQO0FBK0JELEtBaENELE1BZ0NPO0FBQ0wsMEJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNEO0FBQ0YsR0FwQ0Q7O0FBc0NBLE1BQU1PLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsQ0FBQyxFQUFHO0FBQzVCLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7O0FBRUVELFVBQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFBSCxDQUFDLEVBQUk7QUFDakJsQyxpQkFBVyxDQUFDa0MsQ0FBQyxDQUFDSSxNQUFGLENBQVN2QixNQUFWLENBQVg7QUFDSCxLQUZEOztBQUdBLFFBQUdtQixDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBSCxFQUNFSixNQUFNLENBQUNLLGFBQVAsQ0FBcUJOLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFyQjtBQUNMLEdBUkQ7O0FBVUF0Qyx5REFBUyxDQUFDLFlBQU07QUFDWndDLDJEQUFRLENBQUNDLFNBQVQsR0FBcUJDLFVBQXJCLENBQWdDLFVBQWhDLEVBQTRDdEMsR0FBNUMsR0FBa0R1QyxJQUFsRCxDQUF1RCxVQUFBQyxRQUFRLEVBQUc7QUFBRWxDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBdUJpQyxRQUFRLENBQUNDLE9BQVQsQ0FBa0IsVUFBQUMsR0FBRyxFQUFHO0FBQ2pIcEMsZUFBTyxDQUFDQyxHQUFSLENBQVltQyxHQUFaO0FBQ0QsT0FGMEYsQ0FBdkI7QUFFOUQsS0FGTjtBQUlBcEMsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNILEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWUsaUVBQU0sQ0FBQ3FCLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSw2QkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUssZUFBUyxFQUFFckIsaUVBQU0sQ0FBQ3NCLFFBQXZCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERix3QkFHRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxnQkFBUSxFQUFFLGtCQUFDZixDQUFEO0FBQUEsaUJBQU81QyxPQUFPLENBQUM0QyxDQUFDLENBQUNJLE1BQUYsQ0FBU1ksS0FBVixDQUFkO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsMEJBU0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ2hCLENBQUQ7QUFBQSxpQkFBTzFDLFNBQVMsQ0FBQzBDLENBQUMsQ0FBQ0ksTUFBRixDQUFTWSxLQUFWLENBQWhCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsd0JBZUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ2hCLENBQUQ7QUFBQSxpQkFBT3hDLE9BQU8sQ0FBQ3dDLENBQUMsQ0FBQ0ksTUFBRixDQUFTWSxLQUFWLENBQWQ7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRiwwQkFxQkU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ2hCLENBQUQ7QUFBQSxpQkFBT3RDLFNBQVMsQ0FBQ3NDLENBQUMsQ0FBQ0ksTUFBRixDQUFTWSxLQUFWLENBQWhCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGLDRCQTJCRTtBQUNBLFlBQUksRUFBQyxNQURMO0FBRUEsY0FBTSxFQUFDLFNBRlA7QUFHQSxnQkFBUSxFQUFFakI7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGLGVBK0JFO0FBQ0UsaUJBQVMsRUFBRU4saUVBQU0sQ0FBQ3dCLFVBRHBCO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU1sQyxXQUFXLENBQUM1QixJQUFELEVBQU9FLE1BQVAsRUFBZUUsSUFBZixFQUFxQkUsTUFBckIsRUFBNEJJLE9BQTVCLENBQWpCO0FBQUEsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQTBDRTtBQUFLLGVBQVMsRUFBRTRCLGlFQUFNLENBQUNYLElBQXZCO0FBQUEsZ0JBQThCTSxZQUFZO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQ0YsZUEyQ0U7QUFBSyxlQUFTLEVBQUVLLGlFQUFNLENBQUN5QixLQUF2QjtBQUFBLDhCQUE4QjtBQUFBLCtCQUFHO0FBQUEsaUNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE5QixvQkFBdUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdkUsRUFBc0ZqRSxTQUFTLENBQUNFLElBQWhHLGVBQXFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXJHLEVBQXNIRixTQUFTLENBQUNJLE1BQWhJLG9CQUF3STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4SSxFQUF1SkosU0FBUyxDQUFDTSxJQUFqSyxxQkFBd0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBeEssRUFBdUxOLFNBQVMsQ0FBQ1EsTUFBak0sb0JBQXlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXpNLEVBQXlOUixTQUFTLENBQUNZLE9BQW5PO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStDRCxDQXhLRDs7R0FBTWpCLEs7OztBQXlLU3VFLG1JQUFRLENBQUN2RSxLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hlcm9saXN0LmFhNWQwNGJhZDY3MDczOGJhMWNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHVkZW50Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi9wYWdlcy9maXJlYmFzZSc7XHJcbmNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdC9hcGkvaGVyb2xpc3RzXCI7XHJcbmNvbnN0IGFkbWluID0gKHsgdG9rZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaGVyb2xpc3RzLCBzZXRIZXJvbGlzdHNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmFuaywgc2V0UmFua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2hlcm9saXN0LCBzZXRIZXJvbGlzdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2ltZ2V1cmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRIZXJvbGlzdHMoKTtcclxuICAgIHByb2ZpbGVVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHByb2ZpbGVVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2NvbmZpZy5VUkx9L3Byb2ZpbGVgLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG4gICAgICB9KTtcclxuICAgICBcclxuICAgICAgc2V0VXNlcih1c2Vycy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SGVyb2xpc3QgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgJHtVUkx9LyR7aWR9YClcclxuICAgIGNvbnNvbGUubG9nKCdoZXJvbGlzdCBpZDogJywgcmVzdWx0LmRhdGEpXHJcbiAgICBzZXRIZXJvbGlzdChyZXN1bHQuZGF0YSlcclxufVxyXG4gXHJcbiAgY29uc3QgZ2V0SGVyb2xpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpO1xyXG4gICAgc2V0SGVyb2xpc3RzKHJlc3VsdC5kYXRhLmxpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEhlcm9saXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcmFuayxcclxuICAgICAgbnVtYmVyLFxyXG4gICAgICBpbWdldXJsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBnZXRIZXJvbGlzdHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVIZXJvbGlzdCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtVUkx9LyR7aWR9YCk7XHJcbiAgICBnZXRIZXJvbGlzdHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVIZXJvbGlzdCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dChgJHtVUkx9LyR7aWR9YCwge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHJhbmssXHJcbiAgICAgIG51bWJlcixcclxuICAgICAgaW1nZXVybFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgZ2V0SGVyb2xpc3RzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0hlcm9saXN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGhlcm9saXN0cyAmJiBoZXJvbGlzdHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBoZXJvbGlzdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGI+UGljdHVyZTo8L2I+IHtpdGVtLmltZ2V1cmx9PGJyIC8+XHJcbiAgICAgICAgICAgIDxiPk5hbWU6PC9iPiB7aXRlbS5uYW1lfSA8YnIgLz5cclxuICAgICAgICAgICAgPGI+U3RhdHVzOjwvYj4ge2l0ZW0uc3RhdHVzfSA8YnIgLz5cclxuICAgICAgICAgICAgPGI+UmFuazo8L2I+IHtpdGVtLnJhbmt9IDxiciAvPlxyXG4gICAgICAgICAgICA8Yj5OdW1iZXI6PC9iPiB7aXRlbS5udW1iZXJ9PGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdF9idXR0b259PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9nZXR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRIZXJvbGlzdChpdGVtLmlkKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fdXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlSGVyb2xpc3QoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2RlbGV0ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUhlcm9saXN0KGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJDaGFuZ2VGaWxlID0gZSA9PntcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkID0gZSA9PiB7XHJcbiAgICAgICAgICBzZXRJbWFnZVVybChlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGUudGFyZ2V0LmZpbGVzWzBdKVxyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ0hlcm9saXN0JykuZ2V0KCkudGhlbihzbmFwc2hvdCA9PnsgY29uc29sZS5sb2coJ3NuYXBzaG90JyxzbmFwc2hvdC5mb3JFYWNoKChyZXMgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9KSkpO30pXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8aDE+PGlucz5IZXJvIERhdGEgRWRpdCA8L2lucz48L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fYWRkfT5cclxuICAgICAgICA8aDI+QWRkIEhlcm88L2gyPlxyXG4gICAgICAgIE5hbWU6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIFN0YXR1czpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIFJhbms6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwicmFua1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJhbmsoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIE51bWJlcjpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIFBpY3R1cmUgOiBcclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgYWNjZXB0PSdpbWFnZS8qJ1xyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyQ2hhbmdlRmlsZX0vPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9hZGR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRIZXJvbGlzdChuYW1lLCBzdGF0dXMsIHJhbmssIG51bWJlcixpbWdldXJsKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PntzaG93SGVyb2xpc3QoKX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0MX0+PGI+PGk+PGlucz4oc2VsZWN0ZWQgSGVybyk8L2lucz48L2k+PC9iPiA8Yj4gIE5hbWU6PC9iPntoZXJvbGlzdHMubmFtZX08Yj4gIFN0YXR1czo8L2I+e2hlcm9saXN0cy5zdGF0dXN9IDxiPiAgUmFuazo8L2I+e2hlcm9saXN0cy5yYW5rfSAgPGI+TnVtYmVyOjwvYj57aGVyb2xpc3RzLm51bWJlcn0gPGI+UGljdHVyZTo8L2I+e2hlcm9saXN0cy5pbWdldXJsfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoYWRtaW4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==