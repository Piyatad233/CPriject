webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/service/scripts.js":
/*!**********************************!*\
  !*** ./pages/service/scripts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {$(document).ready(function () {
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
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZS9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibWVudSIsImhhbWJ1cmd1ciIsImxpbmUiLCJtZW51T3BlbiIsIm9wZW5NZW51IiwiY3NzIiwiY2xvc2VNZW51IiwidG9nZ2xlTWVudSIsIm9uIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUFBLCtDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFFekIsTUFBSUMsSUFBSSxHQUFFSCxDQUFDLENBQUMsT0FBRCxDQUFYO0FBQ0EsTUFBSUksU0FBUyxHQUFFSixDQUFDLENBQUMsWUFBRCxDQUFoQjtBQUNBLE1BQUlLLElBQUksR0FBR0wsQ0FBQyxDQUFDLE9BQUQsQ0FBWjtBQUNBLE1BQUlNLFFBQUo7O0FBRUEsV0FBU0MsUUFBVCxHQUFtQjtBQUNmSixRQUFJLENBQUNLLEdBQUwsQ0FBUyxNQUFULEVBQWlCLEtBQWpCO0FBQ0FILFFBQUksQ0FBQ0csR0FBTCxDQUFTLFlBQVQsRUFBc0IsTUFBdEI7QUFDQUYsWUFBUSxHQUFHLElBQVg7QUFDSDs7QUFFRCxXQUFTRyxTQUFULEdBQW9CO0FBQ2hCTixRQUFJLENBQUNLLEdBQUwsQ0FBUyxNQUFULEVBQWlCLFFBQWpCO0FBQ0FILFFBQUksQ0FBQ0csR0FBTCxDQUFTLFlBQVQsRUFBdUIsU0FBdkI7QUFDQUYsWUFBUSxHQUFHLEtBQVg7QUFDSDs7QUFFRCxXQUFTSSxVQUFULEdBQXFCO0FBQ2pCLFFBQUdKLFFBQUgsRUFBWTtBQUNSRyxlQUFTO0FBQ1osS0FGRCxNQUdJO0FBQ0FGLGNBQVE7QUFDWDtBQUVKOztBQUVESCxXQUFTLENBQUNPLEVBQVYsQ0FBYTtBQUNUQyxjQUFVLEVBQUUsc0JBQVU7QUFDbEJMLGNBQVE7QUFDWDtBQUhRLEdBQWI7QUFNQUosTUFBSSxDQUFDUSxFQUFMLENBQVE7QUFDSkUsY0FBVSxFQUFFLHNCQUFVO0FBQ2xCSixlQUFTO0FBQ1o7QUFIRyxHQUFSO0FBTUFMLFdBQVMsQ0FBQ08sRUFBVixDQUFhO0FBQ1RHLFNBQUssRUFBRSxpQkFBVTtBQUNiSixnQkFBVTtBQUNiO0FBSFEsR0FBYjtBQUtILENBOUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUwYzI3NjUxZTM0MGI2YjUyMGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgbWVudSA9JChcIi5tZW51XCIpO1xyXG4gICAgdmFyIGhhbWJ1cmd1ciA9JChcIi5oYW1idXJnZXJcIik7XHJcbiAgICB2YXIgbGluZSA9ICQoXCIubGluZVwiKTtcclxuICAgIHZhciBtZW51T3BlbjtcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTWVudSgpe1xyXG4gICAgICAgIG1lbnUuY3NzKFwibGVmdFwiLCBcIjBweFwiKTtcclxuICAgICAgICBsaW5lLmNzcyhcImJhY2tncm91bmRcIixcIiNmZmZcIik7XHJcbiAgICAgICAgbWVudU9wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudSgpe1xyXG4gICAgICAgIG1lbnUuY3NzKFwibGVmdFwiLCBcIi0zMjBweFwiKTtcclxuICAgICAgICBsaW5lLmNzcyhcImJhY2tncm91bmRcIiwgXCIjYmNhZDkwXCIpO1xyXG4gICAgICAgIG1lbnVPcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpe1xyXG4gICAgICAgIGlmKG1lbnVPcGVuKXtcclxuICAgICAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIG9wZW5NZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFtYnVyZ3VyLm9uKHtcclxuICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBvcGVuTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnUub24oe1xyXG4gICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9KTtcclxuXHJcbiAgICBoYW1idXJndXIub24oe1xyXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==