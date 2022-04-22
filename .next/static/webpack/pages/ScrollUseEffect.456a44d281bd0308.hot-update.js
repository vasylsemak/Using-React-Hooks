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

/***/ "./src/ToggleScrollClass.js":
/*!**********************************!*\
  !*** ./src/ToggleScrollClass.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToggleScrollClass; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\nvar ToggleScrollClass = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(ToggleScrollClass, Component1);\n    var _super = _createSuper(ToggleScrollClass);\n    function ToggleScrollClass(props) {\n        _classCallCheck(this, ToggleScrollClass);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            isLoading: true,\n            inView: false\n        };\n        _this.imageRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();\n        return _this;\n    }\n    _createClass(ToggleScrollClass, [\n        {\n            key: \"isInView\",\n            value: function isInView() {\n                var rect = this.imageRef.current.getBoundingClientRect();\n                return rect.top >= 0 && rect.bottom <= window.innerHeight;\n            }\n        },\n        {\n            key: \"scrollHandler\",\n            value: function scrollHandler() {\n                this.setState({\n                    inView: this.isInView()\n                });\n            }\n        },\n        {\n            key: \"componentDidUpdate\",\n            value: function componentDidUpdate(prevProps, prevState) {}\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                window.removeEventListener(\"scroll\", this.scrollHandler);\n            }\n        },\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                window.addEventListener(\"scroll\", this.scrollHandler);\n                this.setState({\n                    isLoading: !this.isLoading,\n                    inView: this.isInView()\n                });\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _props = this.props, primaryImg = _props.primaryImg, secondaryImg = _props.secondaryImg;\n                var _state = this.state, isLoading = _state.isLoading, inView = _state.inView;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: // isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='\n                    // : inView ? secondaryImg\n                    // : primaryImg\n                    inView ? secondaryImg : primaryImg,\n                    ref: this.imageRef,\n                    height: \"340\"\n                }, void 0, false, {\n                    fileName: \"/Users/vsemak/Desktop/gridU/Using-React-Hooks/src/ToggleScrollClass.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return ToggleScrollClass;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVG9nZ2xlU2Nyb2xsQ2xhc3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFN0IscUJBQXVCLGlCQUZuQzs7OzthQUVrQkUsaUJBQWlCLENBQ3hCQyxLQUFLOzs7a0NBQ1RBLEtBQUssQ0FKZixDQUlnQjtRQUNaLE1BQUtDLEtBQUssR0FBRztZQUNYQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsTUFBS0MsUUFBUSxpQkFBR04sZ0RBQVMsRUFBRTs7Ozs7WUFLN0JPLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQU1DLElBQUksR0FBRyxJQUFJLENBQUNGLFFBQVEsQ0FBQ0csT0FBTyxDQUFDQyxxQkFBcUIsRUFBRTtnQkFDMUQsT0FBT0YsSUFBSSxDQUFDRyxHQUFHLElBQUksQ0FBQyxJQUFJSCxJQUFJLENBQUNJLE1BQU0sSUFBSUMsTUFBTSxDQUFDQyxXQUFXO2FBQzFEOzs7WUFFREMsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBSSxDQUFDQyxRQUFRLENBQUM7b0JBQ1pYLE1BQU0sRUFBRSxJQUFJLENBQUNFLFFBQVEsRUFBRTtpQkFDeEIsQ0FBQzthQUNIOzs7WUFFRFUsR0FBa0IsRUFBbEJBLG9CQUFrQjttQkFBbEJBLFNBQUFBLGtCQUFrQixDQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxFQUN4Qzs7O1lBRURDLEdBQW9CLEVBQXBCQSxzQkFBb0I7bUJBQXBCQSxTQUFBQSxvQkFBb0IsR0FBRztnQkFDckJQLE1BQU0sQ0FBQ1EsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ04sYUFBYSxDQUFDO2FBQ3pEOzs7WUFDRE8sR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBakJBLFNBQUFBLGlCQUFpQixHQUFHO2dCQUNsQlQsTUFBTSxDQUFDVSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDUixhQUFhLENBQUM7Z0JBQ3JELElBQUksQ0FBQ0MsUUFBUSxDQUFDO29CQUNaWixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUNBLFNBQVM7b0JBQzFCQyxNQUFNLEVBQUUsSUFBSSxDQUFDRSxRQUFRLEVBQUU7aUJBQ3hCLENBQUM7YUFDSDs7O1lBSURpQixHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxJQUFxQyxNQUFVLEdBQVYsSUFBSSxDQUFDdEIsS0FBSyxFQUF2Q3VCLFVBQVUsR0FBbUIsTUFBVSxDQUF2Q0EsVUFBVSxFQUFFQyxZQUFZLEdBQUssTUFBVSxDQUEzQkEsWUFBWTtnQkFDaEMsSUFBOEIsTUFBVSxHQUFWLElBQUksQ0FBQ3ZCLEtBQUssRUFBaENDLFNBQVMsR0FBYSxNQUFVLENBQWhDQSxTQUFTLEVBQUVDLE1BQU0sR0FBSyxNQUFVLENBQXJCQSxNQUFNO2dCQUV6QixxQkFDRSw4REFBQ3NCLEtBQUc7b0JBQ0ZDLEdBQUcsRUFDRCxtR0FBbUc7b0JBQ25HLDBCQUEwQjtvQkFDMUIsZUFBZTtvQkFDZnZCLE1BQU0sR0FBR3FCLFlBQVksR0FDbkJELFVBQVU7b0JBRWRJLEdBQUcsRUFBRSxJQUFJLENBQUN2QixRQUFRO29CQUNsQndCLE1BQU0sRUFBQyxLQUFLOzs7Ozt3QkFDWixDQUNIO2FBQ0Y7Ozs7Q0FDRixDQXpEOEMvQiw0Q0FBUyxDQXlEdkQ7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvVG9nZ2xlU2Nyb2xsQ2xhc3MuanM/NzNjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVTY3JvbGxDbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIGluVmlldzogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5pbWFnZVJlZiA9IGNyZWF0ZVJlZigpXG4gICAgLy8gdGhpcy5pc0luVmlldyA9IHRoaXMuaXNJblZpZXcuYmluZCh0aGlzKVxuICAgIC8vIHRoaXMuc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpXG4gIH1cblxuICBpc0luVmlldygpIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5pbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5WaWV3OiB0aGlzLmlzSW5WaWV3KClcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0xvYWRpbmc6ICF0aGlzLmlzTG9hZGluZyxcbiAgICAgIGluVmlldzogdGhpcy5pc0luVmlldygpLFxuICAgIH0pXG4gIH1cblxuXG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGlzTG9hZGluZywgaW5WaWV3IH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e1xuICAgICAgICAgIC8vIGlzTG9hZGluZyA/ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09J1xuICAgICAgICAgIC8vIDogaW5WaWV3ID8gc2Vjb25kYXJ5SW1nXG4gICAgICAgICAgLy8gOiBwcmltYXJ5SW1nXG4gICAgICAgICAgaW5WaWV3ID8gc2Vjb25kYXJ5SW1nXG4gICAgICAgICAgOiBwcmltYXJ5SW1nXG4gICAgICAgIH1cbiAgICAgICAgcmVmPXt0aGlzLmltYWdlUmVmfVxuICAgICAgICBoZWlnaHQ9JzM0MCdcbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY3JlYXRlUmVmIiwiVG9nZ2xlU2Nyb2xsQ2xhc3MiLCJwcm9wcyIsInN0YXRlIiwiaXNMb2FkaW5nIiwiaW5WaWV3IiwiaW1hZ2VSZWYiLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIYW5kbGVyIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRNb3VudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1nIiwic3JjIiwicmVmIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ToggleScrollClass.js\n");

/***/ })

});