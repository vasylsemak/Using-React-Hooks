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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InputUseStateClass; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\nvar InputUseStateClass = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(InputUseStateClass, Component1);\n    var _super = _createSuper(InputUseStateClass);\n    function InputUseStateClass() {\n        _classCallCheck(this, InputUseStateClass);\n        var _this;\n        _this = _super.call(this);\n        _this.state = {\n            inputText: \"\",\n            historyList: []\n        };\n        return _this;\n    }\n    _createClass(InputUseStateClass, [\n        {\n            // state = {\n            //   inputText: '',\n            //   historyList: []\n            // }\n            key: \"handleChange\",\n            value: function handleChange(e) {\n                var val = e.target.value;\n                this.setState(function(prevState) {\n                    return {\n                        inputText: val,\n                        historyList: _toConsumableArray(prevState.historyList).concat([\n                            val\n                        ])\n                    };\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var _state = this.state, inputText = _state.inputText, historyList = _state.historyList;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: inputText,\n                            onChange: this.handleChange,\n                            placeholder: \"Enter text here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 38,\n                            columnNumber: 14\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: historyList.map(function(item, idx) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: item\n                                }, idx, false, {\n                                    fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/InputUseStateClass.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return InputUseStateClass;\n} // const InputUseState = () => {\n //   const [ inputText, setInputText ] = useState('')\n //   const [ historyList, setHistoryList ] = useState([])\n //   const handleChange = (e) => {\n //     setInputText(e.target.value)\n //     setHistoryList([...historyList, e.target.value])\n //   }\n //   return (\n //     <>\n //       <input\n //         type='text'\n //         value={inputText}\n //         onChange={handleChange}\n //         placeholder='Enter text here'\n //       />\n //       <hr/><br/>\n //       <ul>\n //         {historyList.map((item, idx) =>\n //           <li key={idx}>{item}</li>\n //         )}\n //       </ul>\n //     </>\n //   )\n // }\n(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW5wdXRVc2VTdGF0ZUNsYXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUVsQixzQkFBd0IsaUJBK0NyQzs7OzthQS9DbUJDLGtCQUFrQjs7O2lDQUZ2QyxDQUlXO1FBQ1AsTUFBS0MsS0FBSyxHQUFHO1lBQ1hDLFNBQVMsRUFBRSxFQUFFO1lBQ2JDLFdBQVcsRUFBRSxFQUFFO1NBQ2hCOzs7OztZQUdILFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLElBQUk7WUFFSkMsR0FBWSxFQUFaQSxjQUFZO21CQUFaQSxTQUFBQSxZQUFZLENBQUNDLENBQUMsRUFBRTtnQkFDZCxJQUFNQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO2dCQUMxQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsU0FBQUEsU0FBUyxFQUFJO29CQUN6QixPQUFPO3dCQUNMUixTQUFTLEVBQUVJLEdBQUc7d0JBQ2RILFdBQVcsRUFBRSxtQkFBSU8sU0FBUyxDQUFDUCxXQUFXLENBQXJCTyxRQUFKOzRCQUEyQkosR0FBRzt5QkFBQztxQkFDN0M7aUJBQ0YsQ0FBQzthQUNIOzs7WUFFREssR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7O2dCQUNQLElBQWlDLE1BQVUsR0FBVixJQUFJLENBQUNWLEtBQUssRUFBcENDLFNBQVMsR0FBaUIsTUFBVSxDQUFwQ0EsU0FBUyxFQUFFQyxXQUFXLEdBQUksTUFBVSxDQUF6QkEsV0FBVztnQkFFN0IscUJBQ0U7O3NDQUNFLDhEQUFDUyxPQUFLOzRCQUNKQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEwsS0FBSyxFQUFFTixTQUFTOzRCQUNoQlksUUFBUSxFQUFFLElBQUksQ0FBQ1YsWUFBWTs0QkFDM0JXLFdBQVcsRUFBQyxpQkFBaUI7Ozs7O2dDQUM3QjtzQ0FDRiw4REFBQ0MsSUFBRTs7OztnQ0FBRTtzQ0FBQSw4REFBQ0MsSUFBRTs7OztnQ0FBRTtzQ0FDViw4REFBQ0MsSUFBRTtzQ0FDQWYsV0FBVyxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsR0FBRztxREFDekIsOERBQUNDLElBQUU7OENBQVlGLElBQUk7bUNBQVZDLEdBQUc7Ozs7eUNBQWE7NkJBQUEsQ0FDMUI7Ozs7O2dDQUNFOztnQ0FDSixDQUNKO2FBQ0Y7Ozs7Q0FDRixDQUdELGdDQUFnQztDQUNoQyxxREFBcUQ7Q0FDckQseURBQXlEO0NBRXpELGtDQUFrQztDQUNsQyxtQ0FBbUM7Q0FDbkMsdURBQXVEO0NBQ3ZELE1BQU07Q0FFTixhQUFhO0NBQ2IsU0FBUztDQUNULGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsNEJBQTRCO0NBQzVCLGtDQUFrQztDQUNsQyx3Q0FBd0M7Q0FDeEMsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsMENBQTBDO0NBQzFDLHNDQUFzQztDQUN0QyxhQUFhO0NBQ2IsY0FBYztDQUNkLFVBQVU7Q0FDVixNQUFNO0NBQ04sSUFBSTtDQXhFNEN0Qiw0Q0FBUyxDQTRDeEQ7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvSW5wdXRVc2VTdGF0ZUNsYXNzLmpzP2VjZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VXNlU3RhdGVDbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXRUZXh0OiAnJyxcbiAgICAgIGhpc3RvcnlMaXN0OiBbXVxuICAgIH1cbiAgfVxuXG4gIC8vIHN0YXRlID0ge1xuICAvLyAgIGlucHV0VGV4dDogJycsXG4gIC8vICAgaGlzdG9yeUxpc3Q6IFtdXG4gIC8vIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXRUZXh0OiB2YWwsXG4gICAgICAgIGhpc3RvcnlMaXN0OiBbLi4ucHJldlN0YXRlLmhpc3RvcnlMaXN0LCB2YWxdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aW5wdXRUZXh0LCBoaXN0b3J5TGlzdH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCBoZXJlJ1xuICAgICAgICAvPlxuICAgICAgICA8aHIvPjxici8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7aGlzdG9yeUxpc3QubWFwKChpdGVtLCBpZHgpID0+XG4gICAgICAgICAgICA8bGkga2V5PXtpZHh9PntpdGVtfTwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5cbi8vIGNvbnN0IElucHV0VXNlU3RhdGUgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IFsgaW5wdXRUZXh0LCBzZXRJbnB1dFRleHQgXSA9IHVzZVN0YXRlKCcnKVxuLy8gICBjb25zdCBbIGhpc3RvcnlMaXN0LCBzZXRIaXN0b3J5TGlzdCBdID0gdXNlU3RhdGUoW10pXG5cbi8vICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbi8vICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpXG4vLyAgICAgc2V0SGlzdG9yeUxpc3QoWy4uLmhpc3RvcnlMaXN0LCBlLnRhcmdldC52YWx1ZV0pXG4vLyAgIH1cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8aW5wdXRcbi8vICAgICAgICAgdHlwZT0ndGV4dCdcbi8vICAgICAgICAgdmFsdWU9e2lucHV0VGV4dH1cbi8vICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbi8vICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQgaGVyZSdcbi8vICAgICAgIC8+XG4vLyAgICAgICA8aHIvPjxici8+XG4vLyAgICAgICA8dWw+XG4vLyAgICAgICAgIHtoaXN0b3J5TGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT5cbi8vICAgICAgICAgICA8bGkga2V5PXtpZHh9PntpdGVtfTwvbGk+XG4vLyAgICAgICAgICl9XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIklucHV0VXNlU3RhdGVDbGFzcyIsInN0YXRlIiwiaW5wdXRUZXh0IiwiaGlzdG9yeUxpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJlbmRlciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJociIsImJyIiwidWwiLCJtYXAiLCJpdGVtIiwiaWR4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/InputUseStateClass.js\n");

/***/ })

});