"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ScrollUseEffect",{

/***/ "./pages/ScrollUseEffect.js":
/*!**********************************!*\
  !*** ./pages/ScrollUseEffect.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ToggleScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ToggleScroll */ \"./src/ToggleScroll.js\");\n/* harmony import */ var _src_ToggleScrollClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/ToggleScrollClass */ \"./src/ToggleScrollClass.js\");\nvar _this = undefined;\n\n\n\n\nvar speakersArr = [\n    187,\n    823,\n    1124,\n    1269,\n    1530,\n    1725,\n    5996,\n    6548,\n    8367,\n    8590,\n    10803,\n    10808,\n    18805,\n    41808\n];\nvar ScrollUseEffect = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: speakersArr.map(function(speakerId) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ToggleScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    primaryImg: \"/static/speakers/bw/Speaker-\".concat(speakerId, \".jpg\"),\n                    secondaryImg: \"/static/speakers/Speaker-\".concat(speakerId, \".jpg\"),\n                    alt: \"speaker\"\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/pages/ScrollUseEffect.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, _this1)\n            }, speakerId, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/pages/ScrollUseEffect.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false);\n};\n_c = ScrollUseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollUseEffect);\nvar _c;\n$RefreshReg$(_c, \"ScrollUseEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TY3JvbGxVc2VFZmZlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUF5QjtBQUNxQjtBQUNVO0FBRXhELElBQU1HLFdBQVcsR0FBRztBQUFDLE9BQUc7QUFBRSxPQUFHO0FBQUUsUUFBSTtBQUFFLFFBQUk7QUFBRSxRQUFJO0FBQUUsUUFBSTtBQUFFLFFBQUk7QUFBRSxRQUFJO0FBQUUsUUFBSTtBQUFFLFFBQUk7QUFBRSxTQUFLO0FBQUUsU0FBSztBQUFFLFNBQUs7QUFBRSxTQUFLO0NBQUM7QUFFMUcsSUFBTUMsZUFBZSxHQUFHLFdBQU07O0lBRTVCLHFCQUNFO2tCQUNHRCxXQUFXLENBQUNFLEdBQUcsQ0FBQ0MsU0FBQUEsU0FBUztpQ0FDeEIsOERBQUNDLEtBQUc7MEJBQ0YsNEVBQUNOLHlEQUFZO29CQUNYTyxVQUFVLEVBQUUsOEJBQTZCLENBQVksTUFBSSxDQUFkRixTQUFTLEVBQUMsTUFBSSxDQUFDO29CQUMxREcsWUFBWSxFQUFFLDJCQUEwQixDQUFZLE1BQUksQ0FBZEgsU0FBUyxFQUFDLE1BQUksQ0FBQztvQkFDekRJLEdBQUcsRUFBQyxTQUFTOzs7OzswQkFDYjtlQUxNSixTQUFTOzs7O3NCQU1iO1NBQ1AsQ0FBQztxQkFDRCxDQUNKO0NBQ0Y7QUFmS0YsS0FBQUEsZUFBZTtBQWlCckIsK0RBQWVBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU2Nyb2xsVXNlRWZmZWN0LmpzPzgwZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvZ2dsZVNjcm9sbCBmcm9tICcuLi9zcmMvVG9nZ2xlU2Nyb2xsJ1xuaW1wb3J0IFRvZ2dsZVNjcm9sbENsYXNzIGZyb20gJy4uL3NyYy9Ub2dnbGVTY3JvbGxDbGFzcydcblxuY29uc3Qgc3BlYWtlcnNBcnIgPSBbMTg3LCA4MjMsIDExMjQsIDEyNjksIDE1MzAsIDE3MjUsIDU5OTYsIDY1NDgsIDgzNjcsIDg1OTAsIDEwODAzLCAxMDgwOCwgMTg4MDUsIDQxODA4XVxuXG5jb25zdCBTY3JvbGxVc2VFZmZlY3QgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3NwZWFrZXJzQXJyLm1hcChzcGVha2VySWQgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3BlYWtlcklkfT5cbiAgICAgICAgICA8VG9nZ2xlU2Nyb2xsXG4gICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxuICAgICAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxuICAgICAgICAgICAgYWx0PSdzcGVha2VyJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVXNlRWZmZWN0Il0sIm5hbWVzIjpbIlJlYWN0IiwiVG9nZ2xlU2Nyb2xsIiwiVG9nZ2xlU2Nyb2xsQ2xhc3MiLCJzcGVha2Vyc0FyciIsIlNjcm9sbFVzZUVmZmVjdCIsIm1hcCIsInNwZWFrZXJJZCIsImRpdiIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ScrollUseEffect.js\n");

/***/ })

});