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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InputUseStateClass; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\nvar InputUseStateClass = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(InputUseStateClass, Component1);\n    var _super = _createSuper(InputUseStateClass);\n    function InputUseStateClass() {\n        _classCallCheck(this, InputUseStateClass);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            inputText: \"\",\n            historyList: []\n        });\n        _defineProperty(_assertThisInitialized(_this), \"handleChange\", function(e) {\n            _this.setState(function(prevState) {\n                return {\n                    inputText: e.target.value,\n                    historyList: _toConsumableArray(prevState.historyList).concat([\n                        e.target.value\n                    ])\n                };\n            });\n        });\n        return _this;\n    }\n    _createClass(InputUseStateClass, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: this.state.inputText,\n                            onChange: this.handleChange,\n                            placeholder: \"Enter text here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 25,\n                            columnNumber: 14\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: this.state.historyList.map(function(item, idx) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: item\n                                }, idx, false, {\n                                    fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return InputUseStateClass;\n} // before ES6 classes\n // constructor() {\n //   super()\n //   this.state = {\n //     inputText: '',\n //     historyList: []\n //   }\n //   this.handleChange = this.handleChange.bind(this)\n // }\n // handleChange(e) {\n //   const val = e.target.value\n //   this.setState(prevState => {\n //     return {\n //       inputText: val,\n //       historyList: [...prevState.historyList, val]\n //     }\n //   })\n // }\n(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW5wdXRVc2VTdGF0ZUNsYXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFbEIsc0JBQXdCLGlCQWlDcEM7Ozs7YUFqQ2tCQyxrQkFBa0I7Ozs7UUFDckNDLCtDQUFBQSxPQUFLLEVBQUc7WUFDTkMsU0FBUyxFQUFFLEVBQUU7WUFDYkMsV0FBVyxFQUFFLEVBQUU7U0FDaEI7UUFFREMsK0NBQUFBLGNBQVksRUFBR0MsU0FBQUEsQ0FBQyxFQUFJO1lBQ2xCLE1BQUtDLFFBQVEsQ0FBQ0MsU0FBQUEsU0FBUzt1QkFBSztvQkFDMUJMLFNBQVMsRUFBRUcsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLEtBQUs7b0JBQ3pCTixXQUFXLEVBQUUsbUJBQUlJLFNBQVMsQ0FBQ0osV0FBVyxDQUFyQkksUUFBSjt3QkFBMkJGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLO3FCQUFDO2lCQUN4RDthQUFDLENBQUM7U0FDSjs7Ozs7WUFFREMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7O2dCQUNQLHFCQUNFOztzQ0FDRSw4REFBQ0MsT0FBSzs0QkFDSkMsSUFBSSxFQUFDLE1BQU07NEJBQ1hILEtBQUssRUFBRSxJQUFJLENBQUNSLEtBQUssQ0FBQ0MsU0FBUzs0QkFDM0JXLFFBQVEsRUFBRSxJQUFJLENBQUNULFlBQVk7NEJBQzNCVSxXQUFXLEVBQUMsaUJBQWlCOzs7OztnQ0FDN0I7c0NBQ0YsOERBQUNDLElBQUU7Ozs7Z0NBQUU7c0NBQUEsOERBQUNDLElBQUU7Ozs7Z0NBQUU7c0NBQ1YsOERBQUNDLElBQUU7c0NBQ0EsSUFBSSxDQUFDaEIsS0FBSyxDQUFDRSxXQUFXLENBQUNlLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEdBQUc7cURBQ3BDLDhEQUFDQyxJQUFFOzhDQUFZRixJQUFJO21DQUFWQyxHQUFHOzs7O3lDQUFhOzZCQUFBLENBQzFCOzs7OztnQ0FDRTs7Z0NBQ0osQ0FDSjthQUNGOzs7O0NBQ0YsQ0FFRCxxQkFBcUI7Q0FFckIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLHNCQUFzQjtDQUN0QixNQUFNO0NBQ04scURBQXFEO0NBQ3JELElBQUk7Q0FFSixvQkFBb0I7Q0FDcEIsK0JBQStCO0NBQy9CLGlDQUFpQztDQUNqQyxlQUFlO0NBQ2Ysd0JBQXdCO0NBQ3hCLHFEQUFxRDtDQUNyRCxRQUFRO0NBQ1IsT0FBTztDQUNQLElBQUk7Q0FwRDRDckIsNENBQVMsQ0ErQnhEO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0lucHV0VXNlU3RhdGVDbGFzcy5qcz9lY2Y0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFVzZVN0YXRlQ2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBpbnB1dFRleHQ6ICcnLFxuICAgIGhpc3RvcnlMaXN0OiBbXVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlucHV0VGV4dDogZS50YXJnZXQudmFsdWUsXG4gICAgICBoaXN0b3J5TGlzdDogWy4uLnByZXZTdGF0ZS5oaXN0b3J5TGlzdCwgZS50YXJnZXQudmFsdWVdXG4gICAgfSkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCBoZXJlJ1xuICAgICAgICAvPlxuICAgICAgICA8aHIvPjxici8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5oaXN0b3J5TGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT5cbiAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+e2l0ZW19PC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbi8vIGJlZm9yZSBFUzYgY2xhc3Nlc1xuXG4vLyBjb25zdHJ1Y3RvcigpIHtcbi8vICAgc3VwZXIoKVxuLy8gICB0aGlzLnN0YXRlID0ge1xuLy8gICAgIGlucHV0VGV4dDogJycsXG4vLyAgICAgaGlzdG9yeUxpc3Q6IFtdXG4vLyAgIH1cbi8vICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4vLyB9XG5cbi8vIGhhbmRsZUNoYW5nZShlKSB7XG4vLyAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXG4vLyAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgaW5wdXRUZXh0OiB2YWwsXG4vLyAgICAgICBoaXN0b3J5TGlzdDogWy4uLnByZXZTdGF0ZS5oaXN0b3J5TGlzdCwgdmFsXVxuLy8gICAgIH1cbi8vICAgfSlcbi8vIH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJJbnB1dFVzZVN0YXRlQ2xhc3MiLCJzdGF0ZSIsImlucHV0VGV4dCIsImhpc3RvcnlMaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiaHIiLCJiciIsInVsIiwibWFwIiwiaXRlbSIsImlkeCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/InputUseStateClass.js\n");

/***/ })

});