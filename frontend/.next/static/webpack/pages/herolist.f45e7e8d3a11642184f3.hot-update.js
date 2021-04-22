webpackHotUpdate_N_E("pages/herolist",{

/***/ "./pages/service/products.js":
/*!***********************************!*\
  !*** ./pages/service/products.js ***!
  \***********************************/
/*! exports provided: addProduct, getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase */ "./pages/firebase/index.js");

var productCol = _firebase__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('product');
function addProduct(data) {
  return productCol.add(data);
}
function getProducts() {
  return new Promise(function (resolve, reject) {
    productCol.get().then(function (snapshot) {
      var arr = [];
      snapshot.forEach(function (res) {
        arr.push(res.data());
      });
      resolve(arr);
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZS9wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0Q29sIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkUHJvZHVjdCIsImRhdGEiLCJhZGQiLCJnZXRQcm9kdWN0cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiYXJyIiwiZm9yRWFjaCIsInJlcyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxpREFBUSxDQUFDQyxTQUFULEdBQXFCQyxVQUFyQixDQUFnQyxTQUFoQyxDQUFuQjtBQUVPLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQXlCO0FBQzVCLFNBQU9MLFVBQVUsQ0FBQ00sR0FBWCxDQUFlRCxJQUFmLENBQVA7QUFDSDtBQUVNLFNBQVNFLFdBQVQsR0FBc0I7QUFDekIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQW9CO0FBQ25DVixjQUFVLENBQUNXLEdBQVgsR0FBaUJDLElBQWpCLENBQXNCLFVBQUFDLFFBQVEsRUFBSTtBQUM5QixVQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBRCxjQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RCRixXQUFHLENBQUNHLElBQUosQ0FBU0QsR0FBRyxDQUFDWCxJQUFKLEVBQVQ7QUFDSCxPQUZEO0FBR0FJLGFBQU8sQ0FBQ0ssR0FBRCxDQUFQO0FBQ0gsS0FORDtBQU9ILEdBUk0sQ0FBUDtBQVVIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hlcm9saXN0LmY0NWU3ZThkM2ExMTY0MjE4NGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5cclxuY29uc3QgcHJvZHVjdENvbCA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb2R1Y3QnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9kdWN0KGRhdGEpe1xyXG4gICAgcmV0dXJuIHByb2R1Y3RDb2wuYWRkKGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0cygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xyXG4gICAgICAgIHByb2R1Y3RDb2wuZ2V0KCkudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgc25hcHNob3QuZm9yRWFjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChyZXMuZGF0YSgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==