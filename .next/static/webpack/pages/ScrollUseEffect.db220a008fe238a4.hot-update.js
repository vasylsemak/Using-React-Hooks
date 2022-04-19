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

/***/ "./src/ToggleScroll.js":
/*!*****************************!*\
  !*** ./src/ToggleScroll.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ToggleScroll = function(param) {\n    var primaryImg = param.primaryImg, secondaryImg = param.secondaryImg;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inView = ref[0], setInView = ref[1];\n    var imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    var isInView = function() {\n        var windowRect = imageRef.current.getBoundingClientRect();\n        return windowRect.top >= 0 && windowRect.bottom <= window.innerHeight;\n    };\n    var handleScroll = function() {\n        setInView(isInView());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: inView ? secondaryImg : primaryImg,\n        ref: imageRef\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/ToggleScroll.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(ToggleScroll, \"dB/7zEXywd5JmxuW5nA6UfRbL4A=\");\n_c = ToggleScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleScroll);\nvar _c;\n$RefreshReg$(_c, \"ToggleScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVG9nZ2xlU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQW1EOztBQUVuRCxJQUFNRyxZQUFZLEdBQUcsZ0JBQWtDO1FBQS9CQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsWUFBWSxTQUFaQSxZQUFZOztJQUM5QyxJQUE0QkosR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUg3QyxNQUdlLEdBQWVBLEdBQWUsR0FBOUIsRUFIZixTQUcwQixHQUFJQSxHQUFlLEdBQW5CO0lBQ3hCLElBQU1PLFFBQVEsR0FBR1IsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFN0JFLGdEQUFTLENBQUMsV0FBTTtRQUNkTyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRUMsWUFBWSxDQUFDO1FBQy9DLE9BQU8sV0FBTTtZQUNYRixNQUFNLENBQUNHLG1CQUFtQixDQUFDLFFBQVEsRUFBRUQsWUFBWSxDQUFDO1NBQ25EO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFFTixJQUFNRSxRQUFRLEdBQUcsV0FBTTtRQUNyQixJQUFNQyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ08sT0FBTyxDQUFDQyxxQkFBcUIsRUFBRTtRQUMzRCxPQUFPRixVQUFVLENBQUNHLEdBQUcsSUFBSSxDQUFDLElBQUlILFVBQVUsQ0FBQ0ksTUFBTSxJQUFJVCxNQUFNLENBQUNVLFdBQVc7S0FDdEU7SUFFRCxJQUFNUixZQUFZLEdBQUcsV0FBTTtRQUN6QkosU0FBUyxDQUFDTSxRQUFRLEVBQUUsQ0FBQztLQUN0QjtJQUVELHFCQUNFLDhEQUFDTyxLQUFHO1FBQ0ZDLEdBQUcsRUFBRWYsTUFBTSxHQUFHRCxZQUFZLEdBQUdELFVBQVU7UUFDdkNrQixHQUFHLEVBQUVkLFFBQVE7Ozs7O2FBQ2IsQ0FDSDtDQUNGO0dBMUJLTCxZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUE0QmxCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Ub2dnbGVTY3JvbGwuanM/NzkzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVG9nZ2xlU2Nyb2xsID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcbiAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpbmRvd1JlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIHdpbmRvd1JlY3QudG9wID49IDAgJiYgd2luZG93UmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0XG4gIH1cblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxpbWdcbiAgICAgIHNyYz17aW5WaWV3ID8gc2Vjb25kYXJ5SW1nIDogcHJpbWFyeUltZ31cbiAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVTY3JvbGwiXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUb2dnbGVTY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwiaW1hZ2VSZWYiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzSW5WaWV3Iiwid2luZG93UmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImltZyIsInNyYyIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ToggleScroll.js\n");

/***/ })

});