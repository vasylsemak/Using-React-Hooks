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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ToggleScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ToggleScroll */ \"./src/ToggleScroll.js\");\n/* harmony import */ var _src_ToggleScrollClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/ToggleScrollClass */ \"./src/ToggleScrollClass.js\");\nvar _this = undefined;\n\n\n\n\nvar speakersArr = [\n    187,\n    823,\n    1124,\n    1269,\n    1530,\n    1725,\n    5996,\n    6548,\n    8367,\n    8590,\n    10803,\n    10808,\n    18805,\n    41808\n];\nvar ScrollUseEffect = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: speakersArr.map(function(speakerId) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ToggleScrollClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    primaryImg: \"/static/speakers/bw/Speaker-\".concat(speakerId, \".jpg\"),\n                    secondaryImg: \"/static/speakers/Speaker-\".concat(speakerId, \".jpg\"),\n                    alt: \"speaker\"\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/pages/ScrollUseEffect.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, _this1)\n            }, speakerId, false, {\n                fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/pages/ScrollUseEffect.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false);\n};\n_c = ScrollUseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollUseEffect);\nvar _c;\n$RefreshReg$(_c, \"ScrollUseEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TY3JvbGxVc2VFZmZlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUF5QjtBQUNxQjtBQUNVO0FBRXhELElBQU1HLFdBQVcsR0FBRztBQUFDLE9BQUc7QUFBRSxPQUFHO0FBQUUsUUFBSTtBQUFFLFFBQUk7QUFBRSxRQUFJO0FBQUUsUUFBSTtBQUFFLFFBQUk7QUFBRSxRQUFJO0FBQUUsUUFBSTtBQUFFLFFBQUk7QUFBRSxTQUFLO0FBQUUsU0FBSztBQUFFLFNBQUs7QUFBRSxTQUFLO0NBQUM7QUFFMUcsSUFBTUMsZUFBZSxHQUFHLFdBQU07O0lBRTVCLHFCQUNFO2tCQUNHRCxXQUFXLENBQUNFLEdBQUcsQ0FBQ0MsU0FBQUEsU0FBUztpQ0FDeEIsOERBQUNDLEtBQUc7MEJBQ0YsNEVBQUNMLDhEQUFpQjtvQkFDaEJNLFVBQVUsRUFBRSw4QkFBNkIsQ0FBWSxNQUFJLENBQWRGLFNBQVMsRUFBQyxNQUFJLENBQUM7b0JBQzFERyxZQUFZLEVBQUUsMkJBQTBCLENBQVksTUFBSSxDQUFkSCxTQUFTLEVBQUMsTUFBSSxDQUFDO29CQUN6REksR0FBRyxFQUFDLFNBQVM7Ozs7OzBCQUNiO2VBTE1KLFNBQVM7Ozs7c0JBTWI7U0FDUCxDQUFDO3FCQUNELENBQ0o7Q0FDRjtBQWZLRixLQUFBQSxlQUFlO0FBaUJyQiwrREFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9TY3JvbGxVc2VFZmZlY3QuanM/ODBlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVG9nZ2xlU2Nyb2xsIGZyb20gJy4uL3NyYy9Ub2dnbGVTY3JvbGwnXG5pbXBvcnQgVG9nZ2xlU2Nyb2xsQ2xhc3MgZnJvbSAnLi4vc3JjL1RvZ2dsZVNjcm9sbENsYXNzJ1xuXG5jb25zdCBzcGVha2Vyc0FyciA9IFsxODcsIDgyMywgMTEyNCwgMTI2OSwgMTUzMCwgMTcyNSwgNTk5NiwgNjU0OCwgODM2NywgODU5MCwgMTA4MDMsIDEwODA4LCAxODgwNSwgNDE4MDhdXG5cbmNvbnN0IFNjcm9sbFVzZUVmZmVjdCA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c3BlYWtlcnNBcnIubWFwKHNwZWFrZXJJZCA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzcGVha2VySWR9PlxuICAgICAgICAgIDxUb2dnbGVTY3JvbGxDbGFzc1xuICAgICAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0ke3NwZWFrZXJJZH0uanBnYH1cbiAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke3NwZWFrZXJJZH0uanBnYH1cbiAgICAgICAgICAgIGFsdD0nc3BlYWtlcidcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFVzZUVmZmVjdCJdLCJuYW1lcyI6WyJSZWFjdCIsIlRvZ2dsZVNjcm9sbCIsIlRvZ2dsZVNjcm9sbENsYXNzIiwic3BlYWtlcnNBcnIiLCJTY3JvbGxVc2VFZmZlY3QiLCJtYXAiLCJzcGVha2VySWQiLCJkaXYiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ScrollUseEffect.js\n");

/***/ }),

/***/ "./src/ToggleScrollClass.js":
/*!**********************************!*\
  !*** ./src/ToggleScrollClass.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToggleScrollClass; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\nvar ToggleScrollClass = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(ToggleScrollClass, Component1);\n    var _super = _createSuper(ToggleScrollClass);\n    function ToggleScrollClass(props) {\n        _classCallCheck(this, ToggleScrollClass);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            isLoading: true,\n            inView: false\n        };\n        _this.imageRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n        _this.isInView = _this.isInView.bind(_assertThisInitialized(_this));\n        _this.scrollHandler = _this.scrollHandler.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(ToggleScrollClass, [\n        {\n            key: \"isInView\",\n            value: function isInView() {\n                var rect = this.imageRef.current.getBoundingClientRect();\n                return rect.top >= 0 && rect.bottom <= window.innerHeight;\n            }\n        },\n        {\n            key: \"scrollHandler\",\n            value: function scrollHandler() {\n                var _this = this;\n                this.setState(function(prev) {\n                    return {\n                        isLoading: !prev.isLoading,\n                        inView: _this.isInView()\n                    };\n                });\n            }\n        },\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                window.addEventListener(\"scroll\", this.scrollHandler);\n            }\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                window.removeEventListener(\"scroll\", this.scrollHandler);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _props = this.props, primaryImg = _props.primaryImg, secondaryImg = _props.secondaryImg;\n                var _state = this.state, isLoading = _state.isLoading, inView = _state.inView;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: isLoading ? \"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\" : inView ? secondaryImg : primaryImg,\n                    ref: this.imageRef,\n                    height: \"340\"\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/ToggleScrollClass.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return ToggleScrollClass;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVG9nZ2xlU2Nyb2xsQ2xhc3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFN0IscUJBQXVCLGlCQUZuQzs7OzthQUVrQkUsaUJBQWlCLENBQ3hCQyxLQUFLOzs7a0NBQ1RBLEtBQUssQ0FKZixDQUlnQjtRQUNaLE1BQUtDLEtBQUssR0FBRztZQUNYQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsTUFBS0MsUUFBUSxpQkFBR04sZ0RBQVMsRUFBRTtRQUMzQixNQUFLTyxRQUFRLEdBQUcsTUFBS0EsUUFBUSxDQUFDQyxJQUFJLCtCQUFNO1FBQ3hDLE1BQUtDLGFBQWEsR0FBRyxNQUFLQSxhQUFhLENBQUNELElBQUksK0JBQU07Ozs7O1lBR3BERCxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxJQUFNRyxJQUFJLEdBQUcsSUFBSSxDQUFDSixRQUFRLENBQUNLLE9BQU8sQ0FBQ0MscUJBQXFCLEVBQUU7Z0JBQzFELE9BQU9GLElBQUksQ0FBQ0csR0FBRyxJQUFJLENBQUMsSUFBSUgsSUFBSSxDQUFDSSxNQUFNLElBQUlDLE1BQU0sQ0FBQ0MsV0FBVzthQUMxRDs7O1lBRURQLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHOztnQkFDZCxJQUFJLENBQUNRLFFBQVEsQ0FBQyxTQUFDQyxJQUFJOzJCQUFNO3dCQUN2QmQsU0FBUyxFQUFFLENBQUNjLElBQUksQ0FBQ2QsU0FBUzt3QkFDMUJDLE1BQU0sRUFBRSxNQUFLRSxRQUFRLEVBQUU7cUJBQ3hCO2lCQUFDLENBQUM7YUFDSjs7O1lBRURZLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDbEJKLE1BQU0sQ0FBQ0ssZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ1gsYUFBYSxDQUFDO2FBQ3REOzs7WUFFRFksR0FBb0IsRUFBcEJBLHNCQUFvQjttQkFBcEJBLFNBQUFBLG9CQUFvQixHQUFHO2dCQUNyQk4sTUFBTSxDQUFDTyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDYixhQUFhLENBQUM7YUFDekQ7OztZQUtEYyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxJQUFxQyxNQUFVLEdBQVYsSUFBSSxDQUFDckIsS0FBSyxFQUF2Q3NCLFVBQVUsR0FBbUIsTUFBVSxDQUF2Q0EsVUFBVSxFQUFFQyxZQUFZLEdBQUssTUFBVSxDQUEzQkEsWUFBWTtnQkFDaEMsSUFBOEIsTUFBVSxHQUFWLElBQUksQ0FBQ3RCLEtBQUssRUFBaENDLFNBQVMsR0FBYSxNQUFVLENBQWhDQSxTQUFTLEVBQUVDLE1BQU0sR0FBSyxNQUFVLENBQXJCQSxNQUFNO2dCQUV6QixxQkFDRSw4REFBQ3FCLEtBQUc7b0JBQ0ZDLEdBQUcsRUFDRHZCLFNBQVMsR0FBRyxvRkFBb0YsR0FDOUZDLE1BQU0sR0FBR29CLFlBQVksR0FDckJELFVBQVU7b0JBRWRJLEdBQUcsRUFBRSxJQUFJLENBQUN0QixRQUFRO29CQUNsQnVCLE1BQU0sRUFBQyxLQUFLOzs7Ozt3QkFDWixDQUNIO2FBQ0Y7Ozs7Q0FDRixDQW5EOEM5Qiw0Q0FBUyxDQW1EdkQ7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvVG9nZ2xlU2Nyb2xsQ2xhc3MuanM/NzNjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVTY3JvbGxDbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIGluVmlldzogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5pbWFnZVJlZiA9IGNyZWF0ZVJlZigpXG4gICAgdGhpcy5pc0luVmlldyA9IHRoaXMuaXNJblZpZXcuYmluZCh0aGlzKVxuICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpXG4gIH1cblxuICBpc0luVmlldygpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5pbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICBpc0xvYWRpbmc6ICFwcmV2LmlzTG9hZGluZyxcbiAgICAgIGluVmlldzogdGhpcy5pc0luVmlldygpXG4gICAgfSkpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcilcbiAgfVxuXG5cblxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGluVmlldyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtcbiAgICAgICAgICBpc0xvYWRpbmcgPyAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PSdcbiAgICAgICAgICA6IGluVmlldyA/IHNlY29uZGFyeUltZ1xuICAgICAgICAgIDogcHJpbWFyeUltZ1xuICAgICAgICB9XG4gICAgICAgIHJlZj17dGhpcy5pbWFnZVJlZn1cbiAgICAgICAgaGVpZ2h0PSczNDAnXG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImNyZWF0ZVJlZiIsIlRvZ2dsZVNjcm9sbENsYXNzIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGluZyIsImluVmlldyIsImltYWdlUmVmIiwiaXNJblZpZXciLCJiaW5kIiwic2Nyb2xsSGFuZGxlciIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzZXRTdGF0ZSIsInByZXYiLCJjb21wb25lbnREaWRNb3VudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1nIiwic3JjIiwicmVmIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ToggleScrollClass.js\n");

/***/ })

});