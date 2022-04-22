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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ToggleScroll = function(param) {\n    var primaryImg = param.primaryImg, secondaryImg = param.secondaryImg;\n    _s();\n    var imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inView = ref[0], setInView = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref1[0], setIsLoading = ref1[1];\n    // check if current img is in window view\n    var isInView = function() {\n        var windowRect = imageRef.current.getBoundingClientRect();\n        return windowRect.top >= 0 && windowRect.bottom <= window.innerHeight;\n    };\n    // update inView state of each img\n    var handleScroll = function() {\n        return setInView(isInView());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsLoading(false);\n        // set images in view colored before scrolling\n        setInView(isInView());\n        // listen to scroll event when component mounts and run handling f-n\n        window.addEventListener(\"scroll\", handleScroll);\n        // remove event listener when unmounted\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n            setIsLoading(true);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: isLoading ? \"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\" : inView ? secondaryImg : primaryImg,\n        ref: imageRef,\n        height: \"340\"\n    }, void 0, false, {\n        fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/ToggleScroll.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(ToggleScroll, \"y6qp71yUp5n2wY6ef8j3yTYqNsE=\");\n_c = ToggleScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleScroll);\nvar _c;\n$RefreshReg$(_c, \"ToggleScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVG9nZ2xlU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQW1EOztBQUVuRCxJQUFNRyxZQUFZLEdBQUcsZ0JBQWtDO1FBQS9CQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsWUFBWSxTQUFaQSxZQUFZOztJQUM5QyxJQUFNQyxRQUFRLEdBQUdOLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQTRCQyxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSjdDLE1BSWUsR0FBZUEsR0FBZSxHQUE5QixFQUpmLFNBSTBCLEdBQUlBLEdBQWUsR0FBbkI7SUFDeEIsSUFBa0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFMbEQsU0FLa0IsR0FBa0JBLElBQWMsR0FBaEMsRUFMbEIsWUFLZ0MsR0FBSUEsSUFBYyxHQUFsQjtJQUU5Qix5Q0FBeUM7SUFDekMsSUFBTVUsUUFBUSxHQUFHLFdBQU07UUFDckIsSUFBTUMsVUFBVSxHQUFHTixRQUFRLENBQUNPLE9BQU8sQ0FBQ0MscUJBQXFCLEVBQUU7UUFDM0QsT0FBT0YsVUFBVSxDQUFDRyxHQUFHLElBQUksQ0FBQyxJQUFJSCxVQUFVLENBQUNJLE1BQU0sSUFBSUMsTUFBTSxDQUFDQyxXQUFXO0tBQ3RFO0lBRUQsa0NBQWtDO0lBQ2xDLElBQU1DLFlBQVksR0FBRztlQUFNWCxTQUFTLENBQUNHLFFBQVEsRUFBRSxDQUFDO0tBQUE7SUFFaERULGdEQUFTLENBQUMsV0FBTTtRQUNkUSxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25CLDhDQUE4QztRQUM5Q0YsU0FBUyxDQUFDRyxRQUFRLEVBQUUsQ0FBQztRQUNyQixvRUFBb0U7UUFDcEVNLE1BQU0sQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7UUFDL0MsdUNBQXVDO1FBQ3ZDLE9BQU8sV0FBTTtZQUNYRixNQUFNLENBQUNJLG1CQUFtQixDQUFDLFFBQVEsRUFBRUYsWUFBWSxDQUFDO1lBQ2xEVCxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQ25CO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ1ksS0FBRztRQUNGQyxHQUFHLEVBQUVkLFNBQVMsR0FBRyxvRkFBb0YsR0FDakdGLE1BQU0sR0FBR0YsWUFBWSxHQUNyQkQsVUFBVTtRQUVkb0IsR0FBRyxFQUFFbEIsUUFBUTtRQUNibUIsTUFBTSxFQUFDLEtBQUs7Ozs7O2FBQ1osQ0FDSDtDQUNGO0dBckNLdEIsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBdUNsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvVG9nZ2xlU2Nyb2xsLmpzPzc5MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFRvZ2dsZVNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgLy8gY2hlY2sgaWYgY3VycmVudCBpbWcgaXMgaW4gd2luZG93IHZpZXdcbiAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93UmVjdCA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gd2luZG93UmVjdC50b3AgPj0gMCAmJiB3aW5kb3dSZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfVxuXG4gIC8vIHVwZGF0ZSBpblZpZXcgc3RhdGUgb2YgZWFjaCBpbWdcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4gc2V0SW5WaWV3KGlzSW5WaWV3KCkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgLy8gc2V0IGltYWdlcyBpbiB2aWV3IGNvbG9yZWQgYmVmb3JlIHNjcm9sbGluZ1xuICAgIHNldEluVmlldyhpc0luVmlldygpKVxuICAgIC8vIGxpc3RlbiB0byBzY3JvbGwgZXZlbnQgd2hlbiBjb21wb25lbnQgbW91bnRzIGFuZCBydW4gaGFuZGxpbmcgZi1uXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXIgd2hlbiB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBzcmM9e2lzTG9hZGluZyA/ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09J1xuICAgICAgICA6IGluVmlldyA/IHNlY29uZGFyeUltZ1xuICAgICAgICA6IHByaW1hcnlJbWdcbiAgICAgIH1cbiAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgICBoZWlnaHQ9JzM0MCdcbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZVNjcm9sbCJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRvZ2dsZVNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsImluVmlldyIsInNldEluVmlldyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzSW5WaWV3Iiwid2luZG93UmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW1nIiwic3JjIiwicmVmIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ToggleScroll.js\n");

/***/ })

});