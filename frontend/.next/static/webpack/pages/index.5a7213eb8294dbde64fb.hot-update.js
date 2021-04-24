webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/service/scripts.js":
/*!**********************************!*\
  !*** ./pages/service/scripts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var document = function document() {
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
    mouseenter: function mouseenter() {
      openMenu();
    }
  });
  menu.on({
    mouseleave: function mouseleave() {
      closeMenu();
    }
  });
  hamburgur.on({
    click: function click() {
      toggleMenu();
    }
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwibWVudSIsIiQiLCJoYW1idXJndXIiLCJsaW5lIiwibWVudU9wZW4iLCJvcGVuTWVudSIsImNzcyIsImNsb3NlTWVudSIsInRvZ2dsZU1lbnUiLCJvbiIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtEQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBRW5CLE1BQUlDLElBQUksR0FBRUMsQ0FBQyxDQUFDLE9BQUQsQ0FBWDtBQUNBLE1BQUlDLFNBQVMsR0FBRUQsQ0FBQyxDQUFDLFlBQUQsQ0FBaEI7QUFDQSxNQUFJRSxJQUFJLEdBQUdGLENBQUMsQ0FBQyxPQUFELENBQVo7QUFDQSxNQUFJRyxRQUFKOztBQUVBLFdBQVNDLFFBQVQsR0FBbUI7QUFDZkwsUUFBSSxDQUFDTSxHQUFMLENBQVMsTUFBVCxFQUFpQixLQUFqQjtBQUNBSCxRQUFJLENBQUNHLEdBQUwsQ0FBUyxZQUFULEVBQXNCLE1BQXRCO0FBQ0FGLFlBQVEsR0FBRyxJQUFYO0FBQ0g7O0FBRUQsV0FBU0csU0FBVCxHQUFvQjtBQUNoQlAsUUFBSSxDQUFDTSxHQUFMLENBQVMsTUFBVCxFQUFpQixRQUFqQjtBQUNBSCxRQUFJLENBQUNHLEdBQUwsQ0FBUyxZQUFULEVBQXVCLFNBQXZCO0FBQ0FGLFlBQVEsR0FBRyxLQUFYO0FBQ0g7O0FBRUQsV0FBU0ksVUFBVCxHQUFxQjtBQUNqQixRQUFHSixRQUFILEVBQVk7QUFDUkcsZUFBUztBQUNaLEtBRkQsTUFHSTtBQUNBRixjQUFRO0FBQ1g7QUFFSjs7QUFFREgsV0FBUyxDQUFDTyxFQUFWLENBQWE7QUFDVEMsY0FBVSxFQUFFLHNCQUFVO0FBQ2xCTCxjQUFRO0FBQ1g7QUFIUSxHQUFiO0FBTUFMLE1BQUksQ0FBQ1MsRUFBTCxDQUFRO0FBQ0pFLGNBQVUsRUFBRSxzQkFBVTtBQUNsQkosZUFBUztBQUNaO0FBSEcsR0FBUjtBQU1BTCxXQUFTLENBQUNPLEVBQVYsQ0FBYTtBQUNURyxTQUFLLEVBQUUsaUJBQVU7QUFDYkosZ0JBQVU7QUFDYjtBQUhRLEdBQWI7QUFLSCxDQTlDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YTcyMTNlYjgyOTRkYmRlNjRmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG9jdW1lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgdmFyIG1lbnUgPSQoXCIubWVudVwiKTtcclxuICAgIHZhciBoYW1idXJndXIgPSQoXCIuaGFtYnVyZ2VyXCIpO1xyXG4gICAgdmFyIGxpbmUgPSAkKFwiLmxpbmVcIik7XHJcbiAgICB2YXIgbWVudU9wZW47XHJcblxyXG4gICAgZnVuY3Rpb24gb3Blbk1lbnUoKXtcclxuICAgICAgICBtZW51LmNzcyhcImxlZnRcIiwgXCIwcHhcIik7XHJcbiAgICAgICAgbGluZS5jc3MoXCJiYWNrZ3JvdW5kXCIsXCIjZmZmXCIpO1xyXG4gICAgICAgIG1lbnVPcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUoKXtcclxuICAgICAgICBtZW51LmNzcyhcImxlZnRcIiwgXCItMzIwcHhcIik7XHJcbiAgICAgICAgbGluZS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwiI2JjYWQ5MFwiKTtcclxuICAgICAgICBtZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKXtcclxuICAgICAgICBpZihtZW51T3Blbil7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBvcGVuTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbWJ1cmd1ci5vbih7XHJcbiAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgb3Blbk1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZW51Lm9uKHtcclxuICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjbG9zZU1lbnUoKTtcclxuICAgICAgICB9IFxyXG4gICAgfSk7XHJcblxyXG4gICAgaGFtYnVyZ3VyLm9uKHtcclxuICAgICAgICBjbGljazogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdG9nZ2xlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9