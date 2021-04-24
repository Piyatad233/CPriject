webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/service/scripts.js":
/*!**********************************!*\
  !*** ./pages/service/scripts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var document = function document() {
  return function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwibWVudSIsIiQiLCJoYW1idXJndXIiLCJsaW5lIiwibWVudU9wZW4iLCJvcGVuTWVudSIsImNzcyIsImNsb3NlTWVudSIsInRvZ2dsZU1lbnUiLCJvbiIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtEQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFNBQ2pCLFlBQVU7QUFFTixRQUFJQyxJQUFJLEdBQUVDLENBQUMsQ0FBQyxPQUFELENBQVg7QUFDQSxRQUFJQyxTQUFTLEdBQUVELENBQUMsQ0FBQyxZQUFELENBQWhCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHRixDQUFDLENBQUMsT0FBRCxDQUFaO0FBQ0EsUUFBSUcsUUFBSjs7QUFFQSxhQUFTQyxRQUFULEdBQW1CO0FBQ2ZMLFVBQUksQ0FBQ00sR0FBTCxDQUFTLE1BQVQsRUFBaUIsS0FBakI7QUFDQUgsVUFBSSxDQUFDRyxHQUFMLENBQVMsWUFBVCxFQUFzQixNQUF0QjtBQUNBRixjQUFRLEdBQUcsSUFBWDtBQUNIOztBQUVELGFBQVNHLFNBQVQsR0FBb0I7QUFDaEJQLFVBQUksQ0FBQ00sR0FBTCxDQUFTLE1BQVQsRUFBaUIsUUFBakI7QUFDQUgsVUFBSSxDQUFDRyxHQUFMLENBQVMsWUFBVCxFQUF1QixTQUF2QjtBQUNBRixjQUFRLEdBQUcsS0FBWDtBQUNIOztBQUVELGFBQVNJLFVBQVQsR0FBcUI7QUFDakIsVUFBR0osUUFBSCxFQUFZO0FBQ1JHLGlCQUFTO0FBQ1osT0FGRCxNQUdJO0FBQ0FGLGdCQUFRO0FBQ1g7QUFFSjs7QUFFREgsYUFBUyxDQUFDTyxFQUFWLENBQWE7QUFDVEMsZ0JBQVUsRUFBRSxzQkFBVTtBQUNsQkwsZ0JBQVE7QUFDWDtBQUhRLEtBQWI7QUFNQUwsUUFBSSxDQUFDUyxFQUFMLENBQVE7QUFDSkUsZ0JBQVUsRUFBRSxzQkFBVTtBQUNsQkosaUJBQVM7QUFDWjtBQUhHLEtBQVI7QUFNQUwsYUFBUyxDQUFDTyxFQUFWLENBQWE7QUFDVEcsV0FBSyxFQUFFLGlCQUFVO0FBQ2JKLGtCQUFVO0FBQ2I7QUFIUSxLQUFiO0FBS0gsR0EvQ2dCO0FBQUEsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdhZDZhODFhMGJiNWNkZTc5NmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvY3VtZW50ID0gKCkgPT4gKFxyXG5mdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBtZW51ID0kKFwiLm1lbnVcIik7XHJcbiAgICB2YXIgaGFtYnVyZ3VyID0kKFwiLmhhbWJ1cmdlclwiKTtcclxuICAgIHZhciBsaW5lID0gJChcIi5saW5lXCIpO1xyXG4gICAgdmFyIG1lbnVPcGVuO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5NZW51KCl7XHJcbiAgICAgICAgbWVudS5jc3MoXCJsZWZ0XCIsIFwiMHB4XCIpO1xyXG4gICAgICAgIGxpbmUuY3NzKFwiYmFja2dyb3VuZFwiLFwiI2ZmZlwiKTtcclxuICAgICAgICBtZW51T3BlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNZW51KCl7XHJcbiAgICAgICAgbWVudS5jc3MoXCJsZWZ0XCIsIFwiLTMyMHB4XCIpO1xyXG4gICAgICAgIGxpbmUuY3NzKFwiYmFja2dyb3VuZFwiLCBcIiNiY2FkOTBcIik7XHJcbiAgICAgICAgbWVudU9wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNZW51KCl7XHJcbiAgICAgICAgaWYobWVudU9wZW4pe1xyXG4gICAgICAgICAgICBjbG9zZU1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgb3Blbk1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW1idXJndXIub24oe1xyXG4gICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIG9wZW5NZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWVudS5vbih7XHJcbiAgICAgICAgbW91c2VsZWF2ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICAgICAgfSBcclxuICAgIH0pO1xyXG5cclxuICAgIGhhbWJ1cmd1ci5vbih7XHJcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9