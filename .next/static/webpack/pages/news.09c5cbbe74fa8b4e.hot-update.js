"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar News = function(param) {\n    var news = param.news;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('react'), searchQuery = ref[0], setSearchQuery = ref[1];\n    var handleTextChange = function(e) {\n        setSearchQuery(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/news/?searchTerm=\".concat(searchQuery));\n    };\n    // const searchForm = () => {\n    // }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \" NEWS PAGE\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                    lineNumber: 36,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                lineNumber: 35,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                title: \"News\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: \"List of News\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 43,\n                            columnNumber: 41\n                        }, _this),\n                        searchForm(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 45,\n                            columnNumber: 41\n                        }, _this),\n                        news.map(function(n, i) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: n.url,\n                                    children: n.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 57\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                lineNumber: 48,\n                                columnNumber: 49\n                            }, _this1);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                    lineNumber: 41,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                lineNumber: 39,\n                columnNumber: 25\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(News, \"O+k93MpkFykgQoIvj0SMcVYqLM8=\");\n_c = News;\nNews.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var query, news, res;\n        return C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    query = param.query;\n                    ;\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default()(\"https://hn.algolia.com/api/v1/search?query=\".concat(query.searchTerm));\n                case 5:\n                    res = _ctx.sent;\n                    _ctx.next = 8;\n                    return res.json();\n                case 8:\n                    news = _ctx.sent;\n                    _ctx.next = 15;\n                    break;\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    console.log(\"ERROR\", _ctx.t0);\n                    news = [];\n                case 15:\n                    return _ctx.abrupt(\"return\", {\n                        news: news.hits\n                    });\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                11\n            ]\n        ]);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUNBO0FBQ0k7QUFDSTtBQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QyxHQUFLLENBQUNNLElBQUksR0FBRyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7OztJQUdaLEdBQUssQ0FBbUNQLEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFDLENBQU8sU0FBaERRLFdBQVcsR0FBcUJSLEdBQWlCLEtBQXBDUyxjQUFjLEdBQUtULEdBQWlCO0lBR3pELEdBQUssQ0FBQ1UsZ0JBQWdCLEdBQUdDLFFBQ2pDLENBRGlDQSxDQUFDLEVBQUksQ0FBQztRQUN2QkYsY0FBYyxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztJQUNyQyxDQUFDO0lBRUQsR0FBSyxDQUFDQyxZQUFZLEdBQUlILFFBQzlCLENBRDhCQSxDQUFDLEVBQUksQ0FBQztRQUNwQkEsQ0FBQyxDQUFDSSxjQUFjO1FBQ2hCWix1REFBVyxDQUFFLENBQWtCLG9CQUFjLE9BQVpLLFdBQVc7SUFDcEQsQ0FBQztJQUVELEVBQTZCO0lBSTdCLEVBQUk7SUFHSixNQUFNOzt3RkFFV04sa0RBQUk7c0dBQ0llLENBQUs7OEJBQUMsQ0FBVTs7Ozs7Ozs7Ozs7d0ZBR3hCWiwwREFBTTtnQkFBQ1ksS0FBSyxFQUFDLENBQU07c0dBRVhDLENBQUc7O29HQUVLQyxDQUFFO3NDQUFDLENBQVk7Ozs7Ozt3QkFDZkMsVUFBVTtvR0FDVkMsQ0FBSzs7Ozs7d0JBQ0xkLElBQUksQ0FBQ2UsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxDQUFDOzBDQUVQLE1BQU0sK0RBQUxDLENBQUM7c0hBRU9DLENBQUM7b0NBQUNDLElBQUksRUFBRUosQ0FBQyxDQUFDSyxHQUFHOzhDQUFHTCxDQUFDLENBQUNOLEtBQUs7Ozs7OzsrQkFGeEJPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnpELENBQUM7R0FyREtsQixJQUFJO0tBQUpBLElBQUk7QUF3RFZBLElBQUksQ0FBQ3VCLGVBQWU7b0xBQUcsUUFBUUMsZ0JBQVcsQ0FBQztZQUFaQSxLQUFLLEVBRXhCdkIsSUFBSSxFQUdNd0IsR0FBRzs7OztvQkFMTUQsS0FBSyxTQUFMQSxLQUFLOzs7OzJCQUtGMUIsdURBQUssQ0FBRSxDQUEyQyw2Q0FBbUIsT0FBakIwQixLQUFLLENBQUNFLFVBQVU7O29CQUFoRkQsR0FBRzs7MkJBRUlBLEdBQUcsQ0FBQ0UsSUFBSTs7b0JBQXJCMUIsSUFBSTs7Ozs7O29CQUdKMkIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTztvQkFDbkI1QixJQUFJLEdBQUcsQ0FBQyxDQUFDOztpREFFVixDQUFDO3dCQUNBQSxJQUFJLEVBQUdBLElBQUksQ0FBQzZCLElBQUk7b0JBQ3hCLENBQUM7Ozs7Ozs7Ozs7O0lBRVQsQ0FBQzs7Ozs7QUFLRCwrREFBZTlCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzLmpzP2IyOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBOZXdzID0gKHsgbmV3cyB9KSA9PiB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBbIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSBdID0gdXNlU3RhdGUoJ3JlYWN0JylcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ICA9IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL25ld3MvP3NlYXJjaFRlcm09JHtzZWFyY2hRdWVyeX1gKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+IE5FV1MgUEFHRTwvdGl0bGU+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCB0aXRsZT1cIk5ld3NcIj4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TGlzdCBvZiBOZXdzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdzLm1hcCgobiwgaSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bi51cmx9PntuLnRpdGxlfTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbk5ld3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtxdWVyeX0pID0+IHtcclxuXHJcbiAgICAgICAgbGV0IG5ld3M7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PSR7cXVlcnkuc2VhcmNoVGVybX1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICBuZXdzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuZXdzIDogbmV3cy5oaXRzXHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3czsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSGVhZCIsIlJvdXRlciIsImZldGNoIiwiTGF5b3V0IiwiTmV3cyIsIm5ld3MiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiaGFuZGxlVGV4dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRpdGxlIiwiZGl2IiwiaDIiLCJzZWFyY2hGb3JtIiwiaW5wdXQiLCJtYXAiLCJuIiwiaSIsInAiLCJhIiwiaHJlZiIsInVybCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVzIiwic2VhcmNoVGVybSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaGl0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

});