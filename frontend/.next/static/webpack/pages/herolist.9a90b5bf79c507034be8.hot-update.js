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
/* harmony import */ var _service_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/products */ "./pages/service/products.js");




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
            lineNumber: 80,
            columnNumber: 13
          }, _this), " ", item.imgeurl, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 43
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), " ", item.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 38
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), " ", item.status, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 42
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Rank:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), " ", item.rank, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 38
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Number:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), " ", item.number, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
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
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_update,
              onClick: function onClick() {
                return updateHerolist(item.id);
              },
              children: "Update"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_delete,
              onClick: function onClick() {
                return deleteHerolist(item.id);
              },
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
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

  var handlerCreate = function handlerCreate() {
    Object(_service_products__WEBPACK_IMPORTED_MODULE_9__["addProduct"])({
      name: name,
      status: status,
      rank: rank,
      number: number,
      imgeurl: imgeurl
    });
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
      lineNumber: 140,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
        children: "Hero Data Edit "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form_add,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Add Hero"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, _this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        onChange: function onChange(e) {
          return setName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, _this), "Status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "status",
        onChange: function onChange(e) {
          return setStatus(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, _this), "Rank:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "rank",
        onChange: function onChange(e) {
          return setRank(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, _this), "Number:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "number",
        onChange: function onChange(e) {
          return setNumber(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this), "Picture :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        accept: "image/*",
        onChange: handlerChangeFile
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_add,
        onClick: handlerCreate,
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: showHerolist()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
            children: "(selected Hero)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 43
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 40
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 37
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "  Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 78
      }, _this), herolists.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "  Status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 108
      }, _this), herolists.status, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "  Rank:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 143
      }, _this), herolists.rank, "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Number:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 175
      }, _this), herolists.number, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Picture:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 208
      }, _this), herolists.imgeurl]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 139,
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

/***/ }),

/***/ "./pages/service/products.js":
/*!***********************************!*\
  !*** ./pages/service/products.js ***!
  \***********************************/
/*! exports provided: addProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase */ "./pages/firebase/index.js");

var productCol = _firebase__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('product');
function addProduct(data) {
  return productCol.add(data);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVyb2xpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlcnZpY2UvcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiVVJMIiwiYWRtaW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJoZXJvbGlzdHMiLCJzZXRIZXJvbGlzdHMiLCJuYW1lIiwic2V0TmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInJhbmsiLCJzZXRSYW5rIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiaGVyb2xpc3QiLCJzZXRIZXJvbGlzdCIsImltZ2V1cmwiLCJzZXRJbWFnZVVybCIsInVzZUVmZmVjdCIsImdldEhlcm9saXN0cyIsInByb2ZpbGVVc2VyIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRIZXJvbGlzdCIsImlkIiwicmVzdWx0IiwibGlzdCIsImFkZEhlcm9saXN0IiwicG9zdCIsImRlbGV0ZUhlcm9saXN0IiwidXBkYXRlSGVyb2xpc3QiLCJwdXQiLCJzaG93SGVyb2xpc3QiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImVkaXRfYnV0dG9uIiwiYnV0dG9uX2dldCIsImJ1dHRvbl91cGRhdGUiLCJidXR0b25fZGVsZXRlIiwiaGFuZGxlckNoYW5nZUZpbGUiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRhcmdldCIsImZpbGVzIiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZXJDcmVhdGUiLCJhZGRQcm9kdWN0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwidGhlbiIsInNuYXBzaG90IiwiZm9yRWFjaCIsInJlcyIsImNvbnRhaW5lciIsImZvcm1fYWRkIiwidmFsdWUiLCJidXR0b25fYWRkIiwibGlzdDEiLCJ3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YmY3OWM1MDcwMzRiZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0dWRlbnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL3BhZ2VzL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgYWRkUHJvZHVjdCB9IGZyb20gXCIuL3NlcnZpY2UvcHJvZHVjdHNcIjtcclxuY29uc3QgVVJMID0gXCJodHRwOi8vbG9jYWxob3N0L2FwaS9oZXJvbGlzdHNcIjtcclxuY29uc3QgYWRtaW4gPSAoeyB0b2tlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtoZXJvbGlzdHMsIHNldEhlcm9saXN0c10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyYW5rLCBzZXRSYW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaGVyb2xpc3QsIHNldEhlcm9saXN0XSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaW1nZXVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEhlcm9saXN0cygpO1xyXG4gICAgcHJvZmlsZVVzZXIoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgcHJvZmlsZVVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBcclxuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBheGlvcy5nZXQoYCR7Y29uZmlnLlVSTH0vcHJvZmlsZWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgIFxyXG4gICAgICBzZXRVc2VyKHVzZXJzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRIZXJvbGlzdCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke1VSTH0vJHtpZH1gKVxyXG4gICAgY29uc29sZS5sb2coJ2hlcm9saXN0IGlkOiAnLCByZXN1bHQuZGF0YSlcclxuICAgIHNldEhlcm9saXN0KHJlc3VsdC5kYXRhKVxyXG59XHJcbiBcclxuICBjb25zdCBnZXRIZXJvbGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTCk7XHJcbiAgICBzZXRIZXJvbGlzdHMocmVzdWx0LmRhdGEubGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkSGVyb2xpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHtcclxuICAgICAgbmFtZSxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICByYW5rLFxyXG4gICAgICBudW1iZXIsXHJcbiAgICAgIGltZ2V1cmxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGdldEhlcm9saXN0cygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUhlcm9saXN0ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke1VSTH0vJHtpZH1gKTtcclxuICAgIGdldEhlcm9saXN0cygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUhlcm9saXN0ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucHV0KGAke1VSTH0vJHtpZH1gLCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcmFuayxcclxuICAgICAgbnVtYmVyLFxyXG4gICAgICBpbWdldXJsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBnZXRIZXJvbGlzdHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93SGVyb2xpc3QgPSAoKSA9PiB7XHJcbiAgICBpZiAoaGVyb2xpc3RzICYmIGhlcm9saXN0cy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGhlcm9saXN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8Yj5QaWN0dXJlOjwvYj4ge2l0ZW0uaW1nZXVybH08YnIgLz5cclxuICAgICAgICAgICAgPGI+TmFtZTo8L2I+IHtpdGVtLm5hbWV9IDxiciAvPlxyXG4gICAgICAgICAgICA8Yj5TdGF0dXM6PC9iPiB7aXRlbS5zdGF0dXN9IDxiciAvPlxyXG4gICAgICAgICAgICA8Yj5SYW5rOjwvYj4ge2l0ZW0ucmFua30gPGJyIC8+XHJcbiAgICAgICAgICAgIDxiPk51bWJlcjo8L2I+IHtpdGVtLm51bWJlcn08YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0X2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2dldH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldEhlcm9saXN0KGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEdldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl91cGRhdGV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVIZXJvbGlzdChpdGVtLmlkKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fZGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlSGVyb2xpc3QoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlckNoYW5nZUZpbGUgPSBlID0+e1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcclxuICAgICAgICAgIHNldEltYWdlVXJsKGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoZS50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlckNyZWF0ZSA9ICgpID0+e1xyXG4gICAgYWRkUHJvZHVjdCh7bmFtZSxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICByYW5rLFxyXG4gICAgICBudW1iZXIsXHJcbiAgICAgIGltZ2V1cmx9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignSGVyb2xpc3QnKS5nZXQoKS50aGVuKHNuYXBzaG90ID0+eyBjb25zb2xlLmxvZygnc25hcHNob3QnLHNuYXBzaG90LmZvckVhY2goKHJlcyA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIH0pKSk7fSlcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0JylcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxoMT48aW5zPkhlcm8gRGF0YSBFZGl0IDwvaW5zPjwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGR9PlxyXG4gICAgICAgIDxoMj5BZGQgSGVybzwvaDI+XHJcbiAgICAgICAgTmFtZTpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgU3RhdHVzOlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgUmFuazpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJyYW5rXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmFuayhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgTnVtYmVyOlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgUGljdHVyZSA6IFxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICB0eXBlPSdmaWxlJyBcclxuICAgICAgICBhY2NlcHQ9J2ltYWdlLyonXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJDaGFuZ2VGaWxlfS8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2FkZH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZXJDcmVhdGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57c2hvd0hlcm9saXN0KCl9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdDF9PjxiPjxpPjxpbnM+KHNlbGVjdGVkIEhlcm8pPC9pbnM+PC9pPjwvYj4gPGI+ICBOYW1lOjwvYj57aGVyb2xpc3RzLm5hbWV9PGI+ICBTdGF0dXM6PC9iPntoZXJvbGlzdHMuc3RhdHVzfSA8Yj4gIFJhbms6PC9iPntoZXJvbGlzdHMucmFua30gIDxiPk51bWJlcjo8L2I+e2hlcm9saXN0cy5udW1iZXJ9IDxiPlBpY3R1cmU6PC9iPntoZXJvbGlzdHMuaW1nZXVybH08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGFkbWluKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi9maXJlYmFzZSc7XHJcblxyXG5jb25zdCBwcm9kdWN0Q29sID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdCcpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3QoZGF0YSl7XHJcbiAgICByZXR1cm4gcHJvZHVjdENvbC5hZGQoZGF0YSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=