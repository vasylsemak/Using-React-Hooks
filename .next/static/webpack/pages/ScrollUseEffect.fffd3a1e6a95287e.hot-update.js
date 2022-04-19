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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ToggleScroll = function(param) {\n    var primaryImg = param.primaryImg, secondaryImg = param.secondaryImg;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inView = ref[0], setInView = ref[1];\n    var imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // check if current img is in window view\n    var isInView = function() {\n        var windowRect = imageRef.current.getBoundingClientRect();\n        return windowRect.top >= 0 && windowRect.bottom <= window.innerHeight;\n    };\n    // update inView state of each img\n    var handleScroll = function() {\n        return setInView(isInView());\n    };\n    // listen to scroll event when component mounts and run handling f-n\n    // remove event listener when unmounted\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setInView(isInView());\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: inView ? secondaryImg : primaryImg,\n        ref: imageRef,\n        height: \"360\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/ToggleScroll.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(ToggleScroll, \"dB/7zEXywd5JmxuW5nA6UfRbL4A=\");\n_c = ToggleScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleScroll);\nvar _c;\n$RefreshReg$(_c, \"ToggleScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVG9nZ2xlU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQW1EOztBQUVuRCxJQUFNRyxZQUFZLEdBQUcsZ0JBQWtDO1FBQS9CQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsWUFBWSxTQUFaQSxZQUFZOztJQUM5QyxJQUE0QkosR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUg3QyxNQUdlLEdBQWVBLEdBQWUsR0FBOUIsRUFIZixTQUcwQixHQUFJQSxHQUFlLEdBQW5CO0lBQ3hCLElBQU1PLFFBQVEsR0FBR1IsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFN0IseUNBQXlDO0lBQ3pDLElBQU1TLFFBQVEsR0FBRyxXQUFNO1FBQ3JCLElBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxPQUFPLENBQUNDLHFCQUFxQixFQUFFO1FBQzNELE9BQU9GLFVBQVUsQ0FBQ0csR0FBRyxJQUFJLENBQUMsSUFBSUgsVUFBVSxDQUFDSSxNQUFNLElBQUlDLE1BQU0sQ0FBQ0MsV0FBVztLQUN0RTtJQUVELGtDQUFrQztJQUNsQyxJQUFNQyxZQUFZLEdBQUc7ZUFBTVYsU0FBUyxDQUFDRSxRQUFRLEVBQUUsQ0FBQztLQUFBO0lBRWhELG9FQUFvRTtJQUNwRSx1Q0FBdUM7SUFDdkNQLGdEQUFTLENBQUMsV0FBTTtRQUNkSyxTQUFTLENBQUNFLFFBQVEsRUFBRSxDQUFDO1FBQ3JCTSxNQUFNLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRUQsWUFBWSxDQUFDO1FBQy9DLE9BQU8sV0FBTTtZQUNYRixNQUFNLENBQUNJLG1CQUFtQixDQUFDLFFBQVEsRUFBRUYsWUFBWSxDQUFDO1NBQ25EO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ0csS0FBRztRQUNGQyxHQUFHLEVBQUVmLE1BQU0sR0FBR0QsWUFBWSxHQUFHRCxVQUFVO1FBQ3ZDa0IsR0FBRyxFQUFFZCxRQUFRO1FBQ2JlLE1BQU0sRUFBQyxLQUFLOzs7OzthQUNaLENBQ0g7Q0FDRjtHQTlCS3BCLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQWdDbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1RvZ2dsZVNjcm9sbC5qcz83OTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBUb2dnbGVTY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xuICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgLy8gY2hlY2sgaWYgY3VycmVudCBpbWcgaXMgaW4gd2luZG93IHZpZXdcbiAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93UmVjdCA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gd2luZG93UmVjdC50b3AgPj0gMCAmJiB3aW5kb3dSZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfVxuXG4gIC8vIHVwZGF0ZSBpblZpZXcgc3RhdGUgb2YgZWFjaCBpbWdcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4gc2V0SW5WaWV3KGlzSW5WaWV3KCkpXG5cbiAgLy8gbGlzdGVuIHRvIHNjcm9sbCBldmVudCB3aGVuIGNvbXBvbmVudCBtb3VudHMgYW5kIHJ1biBoYW5kbGluZyBmLW5cbiAgLy8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdW5tb3VudGVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPXtpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nfVxuICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAgIGhlaWdodD0nMzYwJ1xuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlU2Nyb2xsIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVG9nZ2xlU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImluVmlldyIsInNldEluVmlldyIsImltYWdlUmVmIiwiaXNJblZpZXciLCJ3aW5kb3dSZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbWciLCJzcmMiLCJyZWYiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ToggleScroll.js\n");

/***/ })

});