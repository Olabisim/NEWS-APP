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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar News = function(param) {\n    var news = param.news;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('react'), searchQuery = ref[0], setSearchQuery = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var handleTextChange = function(e) {\n        setSearchQuery(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/news/?searchTerm=\".concat(searchQuery));\n    };\n    // const searchForm = () => {\n    //         <form onSubmit={handleSubmit()}>\n    //         <input type=\"text\" value={searchQuery} onChange={handleTextChange()} />\n    // </form>\n    // }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \" NEWS PAGE\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                    lineNumber: 39,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                lineNumber: 38,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                title: \"News\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: \"List of News\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 46,\n                            columnNumber: 41\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: searchQuery,\n                                    onChange: handleTextChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 49\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: \"search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 49\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 48,\n                            columnNumber: 41\n                        }, _this),\n                        news.map(function(n, i) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                                    class: \"page-content\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        class: \"card\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            class: \"content\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                                    class: \"title\",\n                                                    children: n.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 55\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                    class: \"copy\",\n                                                    children: \"Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 55\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    class: \"btn\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                        href: n.url,\n                                                        target: \"_blank\",\n                                                        children: \"View link \"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 75\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 55\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 53\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 51\n                                    }, _this1)\n                                }, i, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 49\n                                }, _this1)\n                            }, void 0, false);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                    lineNumber: 44,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                lineNumber: 42,\n                columnNumber: 25\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(News, \"OzBcnwlPFF4zRZ0M0Cvto51AIh4=\");\n_c = News;\nNews.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var query, news, res;\n        return C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    query = param.query;\n                    ;\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default()(\"https://hn.algolia.com/api/v1/search?query=\".concat(query.searchTerm));\n                case 5:\n                    res = _ctx.sent;\n                    _ctx.next = 8;\n                    return res.json();\n                case 8:\n                    news = _ctx.sent;\n                    _ctx.next = 15;\n                    break;\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    console.log(\"ERROR\", _ctx.t0);\n                    news = [];\n                case 15:\n                    return _ctx.abrupt(\"return\", {\n                        news: news.hits\n                    });\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                11\n            ]\n        ]);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (News); // <main class=\"page-content\">\n //   <div class=\"card\">\n //     <div class=\"content\">\n //       <h2 class=\"title\">Mountain View</h2>\n //       <p class=\"copy\">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>\n //       <button class=\"btn\">View Trips</button>\n //     </div>\n //   </div>\n //   <div class=\"card\">\n //     <div class=\"content\">\n //       <h2 class=\"title\">To The Beach</h2>\n //       <p class=\"copy\">Plan your next beach trip with these fabulous destinations</p>\n //       <button class=\"btn\">View Trips</button>\n //     </div>\n //   </div>\n //   <div class=\"card\">\n //     <div class=\"content\">\n //       <h2 class=\"title\">Desert Destinations</h2>\n //       <p class=\"copy\">It's the desert you've always dreamed of</p>\n //       <button class=\"btn\">Book Now</button>\n //     </div>\n //   </div>\n //   <div class=\"card\">\n //     <div class=\"content\">\n //       <h2 class=\"title\">Explore The Galaxy</h2>\n //       <p class=\"copy\">Seriously, straight up, just blast off into outer space today</p>\n //       <button class=\"btn\">Book Now</button>\n //     </div>\n //   </div>\n // </main>\n // <p key={i}>\n //         <a href={n.url}>{n.title}</a>\n // </p>\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzt3QkFDQUEsSUFBSSxFQUFHQSxJQUFJLENBQUNxQyxJQUFJO29CQUN4QixDQUFDOzs7Ozs7Ozs7OztJQUVULENBQUM7Ozs7O0FBS0QsK0RBQWV0QyxJQUFJLEVBSW5CLENBQThCO0FBQzlCLENBQXVCO0FBQ3ZCLENBQTRCO0FBQzVCLENBQTZDO0FBQzdDLENBQWtJO0FBQ2xJLENBQWdEO0FBQ2hELENBQWE7QUFDYixDQUFXO0FBQ1gsQ0FBdUI7QUFDdkIsQ0FBNEI7QUFDNUIsQ0FBNEM7QUFDNUMsQ0FBdUY7QUFDdkYsQ0FBZ0Q7QUFDaEQsQ0FBYTtBQUNiLENBQVc7QUFDWCxDQUF1QjtBQUN2QixDQUE0QjtBQUM1QixDQUFtRDtBQUNuRCxDQUFxRTtBQUNyRSxDQUE4QztBQUM5QyxDQUFhO0FBQ2IsQ0FBVztBQUNYLENBQXVCO0FBQ3ZCLENBQTRCO0FBQzVCLENBQWtEO0FBQ2xELENBQTBGO0FBQzFGLENBQThDO0FBQzlDLENBQWE7QUFDYixDQUFXO0FBQ1gsQ0FBVTtBQU1zQyxDQUFjO0FBRWQsQ0FBd0M7QUFFeEMsQ0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzLmpzP2IyOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBOZXdzID0gKHsgbmV3cyB9KSA9PiB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBbIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSBdID0gdXNlU3RhdGUoJ3JlYWN0JylcclxuICAgICAgICBjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlVGV4dENoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvbmV3cy8/c2VhcmNoVGVybT0ke3NlYXJjaFF1ZXJ5fWApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zdCBzZWFyY2hGb3JtID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoKX0+XHJcbiAgICAgICAgLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlKCl9IC8+XHJcbiAgICAgICAgLy8gPC9mb3JtPlxyXG5cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPiBORVdTIFBBR0U8L3RpdGxlPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9XCJOZXdzXCI+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxpc3Qgb2YgTmV3czwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPnNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3cy5tYXAoKG4sIGkpID0+IChcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJwYWdlLWNvbnRlbnRcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPntuLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29weVwiPkNoZWNrIG91dCBhbGwgb2YgdGhlc2UgZ29yZ2VvdXMgbW91bnRhaW4gdHJpcHMgd2l0aCBiZWF1dGlmdWwgdmlld3Mgb2YsIHlvdSBndWVzc2VkIGl0LCB0aGUgbW91bnRhaW5zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+PGEgaHJlZj17bi51cmx9IHRhcmdldD1cIl9ibGFua1wiPlZpZXcgbGluayA8L2E+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbk5ld3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtxdWVyeX0pID0+IHtcclxuXHJcbiAgICAgICAgbGV0IG5ld3M7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PSR7cXVlcnkuc2VhcmNoVGVybX1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICBuZXdzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuZXdzIDogbmV3cy5oaXRzXHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuXHJcblxyXG5cclxuLy8gPG1haW4gY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cclxuLy8gICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuLy8gICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5Nb3VudGFpbiBWaWV3PC9oMj5cclxuLy8gICAgICAgPHAgY2xhc3M9XCJjb3B5XCI+Q2hlY2sgb3V0IGFsbCBvZiB0aGVzZSBnb3JnZW91cyBtb3VudGFpbiB0cmlwcyB3aXRoIGJlYXV0aWZ1bCB2aWV3cyBvZiwgeW91IGd1ZXNzZWQgaXQsIHRoZSBtb3VudGFpbnM8L3A+XHJcbi8vICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5WaWV3IFRyaXBzPC9idXR0b24+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuLy8gICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5UbyBUaGUgQmVhY2g8L2gyPlxyXG4vLyAgICAgICA8cCBjbGFzcz1cImNvcHlcIj5QbGFuIHlvdXIgbmV4dCBiZWFjaCB0cmlwIHdpdGggdGhlc2UgZmFidWxvdXMgZGVzdGluYXRpb25zPC9wPlxyXG4vLyAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+VmlldyBUcmlwczwvYnV0dG9uPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbi8vICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+RGVzZXJ0IERlc3RpbmF0aW9uczwvaDI+XHJcbi8vICAgICAgIDxwIGNsYXNzPVwiY29weVwiPkl0J3MgdGhlIGRlc2VydCB5b3UndmUgYWx3YXlzIGRyZWFtZWQgb2Y8L3A+XHJcbi8vICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5Cb29rIE5vdzwvYnV0dG9uPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbi8vICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+RXhwbG9yZSBUaGUgR2FsYXh5PC9oMj5cclxuLy8gICAgICAgPHAgY2xhc3M9XCJjb3B5XCI+U2VyaW91c2x5LCBzdHJhaWdodCB1cCwganVzdCBibGFzdCBvZmYgaW50byBvdXRlciBzcGFjZSB0b2RheTwvcD5cclxuLy8gICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPkJvb2sgTm93PC9idXR0b24+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gPC9tYWluPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxhIGhyZWY9e24udXJsfT57bi50aXRsZX08L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L3A+Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIkhlYWQiLCJSb3V0ZXIiLCJmZXRjaCIsIkxheW91dCIsIk5ld3MiLCJuZXdzIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlVGV4dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRpdGxlIiwiZGl2IiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm1hcCIsIm4iLCJpIiwibWFpbiIsImNsYXNzIiwicCIsImEiLCJocmVmIiwidXJsIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZXMiLCJzZWFyY2hUZXJtIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJoaXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

});