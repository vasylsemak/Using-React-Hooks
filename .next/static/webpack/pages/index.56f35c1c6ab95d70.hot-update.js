"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/InputUseStateClass.js":
/*!***********************************!*\
  !*** ./src/InputUseStateClass.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InputUseStateClass; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\nvar InputUseStateClass = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(InputUseStateClass, Component1);\n    var _super = _createSuper(InputUseStateClass);\n    function InputUseStateClass() {\n        _classCallCheck(this, InputUseStateClass);\n        var _this;\n        _this = _super.call(this);\n        _this.state = {\n            inputText: \"\",\n            historyList: []\n        };\n        _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(InputUseStateClass, [\n        {\n            // state = {\n            //   inputText: '',\n            //   historyList: []\n            // }\n            key: \"handleChange\",\n            value: function handleChange(e) {\n                var val = e.target.value;\n                this.setState(function(prevState) {\n                    return {\n                        inputText: val,\n                        historyList: _toConsumableArray(prevState.historyList).concat([\n                            val\n                        ])\n                    };\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: this.state.inputText,\n                            onChange: this.handleChange,\n                            placeholder: \"Enter text here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 37,\n                            columnNumber: 14\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: this.state.historyList.map(function(item, idx) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: item\n                                }, idx, false, {\n                                    fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return InputUseStateClass;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW5wdXRVc2VTdGF0ZUNsYXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUVsQixzQkFBd0IsaUJBRnBDOzs7O2FBRWtCQyxrQkFBa0I7OztpQ0FGdkMsQ0FJVztRQUNQLE1BQUtDLEtBQUssR0FBRztZQUNYQyxTQUFTLEVBQUUsRUFBRTtZQUNiQyxXQUFXLEVBQUUsRUFBRTtTQUNoQjtRQUNELE1BQUtDLFlBQVksR0FBRyxNQUFLQSxZQUFZLENBQUNDLElBQUksK0JBQU07Ozs7O1lBR2xELFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLElBQUk7WUFFSkQsR0FBWSxFQUFaQSxjQUFZO21CQUFaQSxTQUFBQSxZQUFZLENBQUNFLENBQUMsRUFBRTtnQkFDZCxJQUFNQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO2dCQUMxQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsU0FBQUEsU0FBUyxFQUFJO29CQUN6QixPQUFPO3dCQUNMVCxTQUFTLEVBQUVLLEdBQUc7d0JBQ2RKLFdBQVcsRUFBRSxtQkFBSVEsU0FBUyxDQUFDUixXQUFXLENBQXJCUSxRQUFKOzRCQUEyQkosR0FBRzt5QkFBQztxQkFDN0M7aUJBQ0YsQ0FBQzthQUNIOzs7WUFFREssR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7O2dCQUNQLHFCQUNFOztzQ0FDRSw4REFBQ0MsT0FBSzs0QkFDSkMsSUFBSSxFQUFDLE1BQU07NEJBQ1hMLEtBQUssRUFBRSxJQUFJLENBQUNSLEtBQUssQ0FBQ0MsU0FBUzs0QkFDM0JhLFFBQVEsRUFBRSxJQUFJLENBQUNYLFlBQVk7NEJBQzNCWSxXQUFXLEVBQUMsaUJBQWlCOzs7OztnQ0FDN0I7c0NBQ0YsOERBQUNDLElBQUU7Ozs7Z0NBQUU7c0NBQUEsOERBQUNDLElBQUU7Ozs7Z0NBQUU7c0NBQ1YsOERBQUNDLElBQUU7c0NBQ0EsSUFBSSxDQUFDbEIsS0FBSyxDQUFDRSxXQUFXLENBQUNpQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxHQUFHO3FEQUNwQyw4REFBQ0MsSUFBRTs4Q0FBWUYsSUFBSTttQ0FBVkMsR0FBRzs7Ozt5Q0FBYTs2QkFBQSxDQUMxQjs7Ozs7Z0NBQ0U7O2dDQUNKLENBQ0o7YUFDRjs7OztDQUNGLENBM0MrQ3ZCLDRDQUFTLENBMkN4RDtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9JbnB1dFVzZVN0YXRlQ2xhc3MuanM/ZWNmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRVc2VTdGF0ZUNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dFRleHQ6ICcnLFxuICAgICAgaGlzdG9yeUxpc3Q6IFtdXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgLy8gc3RhdGUgPSB7XG4gIC8vICAgaW5wdXRUZXh0OiAnJyxcbiAgLy8gICBoaXN0b3J5TGlzdDogW11cbiAgLy8gfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dFRleHQ6IHZhbCxcbiAgICAgICAgaGlzdG9yeUxpc3Q6IFsuLi5wcmV2U3RhdGUuaGlzdG9yeUxpc3QsIHZhbF1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQgaGVyZSdcbiAgICAgICAgLz5cbiAgICAgICAgPGhyLz48YnIvPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaGlzdG9yeUxpc3QubWFwKChpdGVtLCBpZHgpID0+XG4gICAgICAgICAgICA8bGkga2V5PXtpZHh9PntpdGVtfTwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIklucHV0VXNlU3RhdGVDbGFzcyIsInN0YXRlIiwiaW5wdXRUZXh0IiwiaGlzdG9yeUxpc3QiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInZhbCIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJyZW5kZXIiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiaHIiLCJiciIsInVsIiwibWFwIiwiaXRlbSIsImlkeCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/InputUseStateClass.js\n");

/***/ })

});