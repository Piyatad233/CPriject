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
    Object(_service_products__WEBPACK_IMPORTED_MODULE_9__["getProducts"])().then(function (res) {
      console.log(res);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
        children: "Hero Data Edit "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form_add,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Add Hero"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        onChange: function onChange(e) {
          return setName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, _this), "Status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "status",
        onChange: function onChange(e) {
          return setStatus(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, _this), "Rank:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "rank",
        onChange: function onChange(e) {
          return setRank(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, _this), "Number:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "number",
        onChange: function onChange(e) {
          return setNumber(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, _this), "Picture :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        accept: "image/*",
        onChange: handlerChangeFile
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_add,
        onClick: handlerCreate,
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: showHerolist()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_student_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
            children: "(selected Hero)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 43
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 40
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 37
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "  Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 78
      }, _this), herolists.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "  Status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 108
      }, _this), herolists.status, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "  Rank:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 143
      }, _this), herolists.rank, "  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Number:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 175
      }, _this), herolists.number, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Picture:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 208
      }, _this), herolists.imgeurl]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVyb2xpc3QuanMiXSwibmFtZXMiOlsiVVJMIiwiYWRtaW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJoZXJvbGlzdHMiLCJzZXRIZXJvbGlzdHMiLCJuYW1lIiwic2V0TmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInJhbmsiLCJzZXRSYW5rIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiaGVyb2xpc3QiLCJzZXRIZXJvbGlzdCIsImltZ2V1cmwiLCJzZXRJbWFnZVVybCIsInVzZUVmZmVjdCIsImdldEhlcm9saXN0cyIsInByb2ZpbGVVc2VyIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRIZXJvbGlzdCIsImlkIiwicmVzdWx0IiwibGlzdCIsImFkZEhlcm9saXN0IiwicG9zdCIsImRlbGV0ZUhlcm9saXN0IiwidXBkYXRlSGVyb2xpc3QiLCJwdXQiLCJzaG93SGVyb2xpc3QiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImVkaXRfYnV0dG9uIiwiYnV0dG9uX2dldCIsImJ1dHRvbl91cGRhdGUiLCJidXR0b25fZGVsZXRlIiwiaGFuZGxlckNoYW5nZUZpbGUiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRhcmdldCIsImZpbGVzIiwicmVhZEFzRGF0YVVSTCIsImhhbmRsZXJDcmVhdGUiLCJhZGRQcm9kdWN0IiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwidGhlbiIsInNuYXBzaG90IiwiZm9yRWFjaCIsInJlcyIsImdldFByb2R1Y3RzIiwiY29udGFpbmVyIiwiZm9ybV9hZGQiLCJ2YWx1ZSIsImJ1dHRvbl9hZGQiLCJsaXN0MSIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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LFlBQVk7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFDRixlQTJDRTtBQUFLLGVBQVMsRUFBRUssaUVBQU0sQ0FBQzRCLEtBQXZCO0FBQUEsOEJBQThCO0FBQUEsK0JBQUc7QUFBQSxpQ0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlCLG9CQUF1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF2RSxFQUFzRnBFLFNBQVMsQ0FBQ0UsSUFBaEcsZUFBcUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBckcsRUFBc0hGLFNBQVMsQ0FBQ0ksTUFBaEksb0JBQXdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXhJLEVBQXVKSixTQUFTLENBQUNNLElBQWpLLHFCQUF3SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF4SyxFQUF1TE4sU0FBUyxDQUFDUSxNQUFqTSxvQkFBeU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBek0sRUFBeU5SLFNBQVMsQ0FBQ1ksT0FBbk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0NELENBckxEOztHQUFNakIsSzs7O0FBc0xTMEUsbUlBQVEsQ0FBQzFFLEtBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGVyb2xpc3QuNDY0ODRkMmI5ZDUzNGIyZTE2YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0dWRlbnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL3BhZ2VzL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgYWRkUHJvZHVjdCwgZ2V0UHJvZHVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlL3Byb2R1Y3RzXCI7XHJcbmNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdC9hcGkvaGVyb2xpc3RzXCI7XHJcbmNvbnN0IGFkbWluID0gKHsgdG9rZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaGVyb2xpc3RzLCBzZXRIZXJvbGlzdHNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmFuaywgc2V0UmFua10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2hlcm9saXN0LCBzZXRIZXJvbGlzdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2ltZ2V1cmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRIZXJvbGlzdHMoKTtcclxuICAgIHByb2ZpbGVVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHByb2ZpbGVVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2NvbmZpZy5VUkx9L3Byb2ZpbGVgLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG4gICAgICB9KTtcclxuICAgICBcclxuICAgICAgc2V0VXNlcih1c2Vycy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SGVyb2xpc3QgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgJHtVUkx9LyR7aWR9YClcclxuICAgIGNvbnNvbGUubG9nKCdoZXJvbGlzdCBpZDogJywgcmVzdWx0LmRhdGEpXHJcbiAgICBzZXRIZXJvbGlzdChyZXN1bHQuZGF0YSlcclxufVxyXG4gXHJcbiAgY29uc3QgZ2V0SGVyb2xpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpO1xyXG4gICAgc2V0SGVyb2xpc3RzKHJlc3VsdC5kYXRhLmxpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEhlcm9saXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcmFuayxcclxuICAgICAgbnVtYmVyLFxyXG4gICAgICBpbWdldXJsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBnZXRIZXJvbGlzdHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVIZXJvbGlzdCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtVUkx9LyR7aWR9YCk7XHJcbiAgICBnZXRIZXJvbGlzdHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVIZXJvbGlzdCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dChgJHtVUkx9LyR7aWR9YCwge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHJhbmssXHJcbiAgICAgIG51bWJlcixcclxuICAgICAgaW1nZXVybFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgZ2V0SGVyb2xpc3RzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0hlcm9saXN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGhlcm9saXN0cyAmJiBoZXJvbGlzdHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBoZXJvbGlzdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGI+UGljdHVyZTo8L2I+IHtpdGVtLmltZ2V1cmx9PGJyIC8+XHJcbiAgICAgICAgICAgIDxiPk5hbWU6PC9iPiB7aXRlbS5uYW1lfSA8YnIgLz5cclxuICAgICAgICAgICAgPGI+U3RhdHVzOjwvYj4ge2l0ZW0uc3RhdHVzfSA8YnIgLz5cclxuICAgICAgICAgICAgPGI+UmFuazo8L2I+IHtpdGVtLnJhbmt9IDxiciAvPlxyXG4gICAgICAgICAgICA8Yj5OdW1iZXI6PC9iPiB7aXRlbS5udW1iZXJ9PGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdF9idXR0b259PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9nZXR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRIZXJvbGlzdChpdGVtLmlkKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fdXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlSGVyb2xpc3QoaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2RlbGV0ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUhlcm9saXN0KGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJDaGFuZ2VGaWxlID0gZSA9PntcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICByZWFkZXIub25sb2FkID0gZSA9PiB7XHJcbiAgICAgICAgICBzZXRJbWFnZVVybChlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGUudGFyZ2V0LmZpbGVzWzBdKVxyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJDcmVhdGUgPSAoKSA9PntcclxuICAgIGFkZFByb2R1Y3Qoe25hbWUsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcmFuayxcclxuICAgICAgbnVtYmVyLFxyXG4gICAgICBpbWdldXJsfSlcclxuICB9XHJcblxyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignSGVyb2xpc3QnKS5nZXQoKS50aGVuKHNuYXBzaG90ID0+eyBjb25zb2xlLmxvZygnc25hcHNob3QnLHNuYXBzaG90LmZvckVhY2goKHJlcyA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIH0pKSk7fSlcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0JylcclxuXHJcbiAgICAgIGdldFByb2R1Y3RzKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8aDE+PGlucz5IZXJvIERhdGEgRWRpdCA8L2lucz48L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fYWRkfT5cclxuICAgICAgICA8aDI+QWRkIEhlcm88L2gyPlxyXG4gICAgICAgIE5hbWU6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIFN0YXR1czpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIFJhbms6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwicmFua1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJhbmsoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIE51bWJlcjpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIFBpY3R1cmUgOiBcclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgYWNjZXB0PSdpbWFnZS8qJ1xyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVyQ2hhbmdlRmlsZX0vPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9hZGR9XHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVyQ3JlYXRlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e3Nob3dIZXJvbGlzdCgpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3QxfT48Yj48aT48aW5zPihzZWxlY3RlZCBIZXJvKTwvaW5zPjwvaT48L2I+IDxiPiAgTmFtZTo8L2I+e2hlcm9saXN0cy5uYW1lfTxiPiAgU3RhdHVzOjwvYj57aGVyb2xpc3RzLnN0YXR1c30gPGI+ICBSYW5rOjwvYj57aGVyb2xpc3RzLnJhbmt9ICA8Yj5OdW1iZXI6PC9iPntoZXJvbGlzdHMubnVtYmVyfSA8Yj5QaWN0dXJlOjwvYj57aGVyb2xpc3RzLmltZ2V1cmx9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChhZG1pbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB8fCBcIlwiIH0gfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9