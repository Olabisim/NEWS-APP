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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar News = function(param) {\n    var news = param.news;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('react'), /*#__PURE__*/ searchQuery = ref[0], setSearchQuery = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var handleTextChange = function(e) {\n        setSearchQuery(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        next_router__WEBPACK_IMPORTED_MODULE_6___default().push(\"/news/?searchTerm=\".concat(searchQuery));\n    };\n    // const searchForm = () => {\n    //         <form onSubmit={handleSubmit()}>\n    //         <input type=\"text\" value={searchQuery} onChange={handleTextChange()} />\n    // </form>\n    // }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \" NEWS PAGE\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                    lineNumber: 39,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                lineNumber: 38,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                title: \"News\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-a9c4478452553b54\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            className: \"jsx-a9c4478452553b54\",\n                            children: \"search for the latest news\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 46,\n                            columnNumber: 41\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-a9c4478452553b54\" + \" \" + \"group\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                className: \"jsx-a9c4478452553b54\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        required: true,\n                                        className: \"jsx-a9c4478452553b54\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 49\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        class: \"highlight\",\n                                        className: \"jsx-a9c4478452553b54\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 49\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        class: \"bar\",\n                                        className: \"jsx-a9c4478452553b54\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 49\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        className: \"jsx-a9c4478452553b54\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 49\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: searchQuery,\n                                        onChange: handleTextChange,\n                                        className: \"jsx-a9c4478452553b54\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 49\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"jsx-a9c4478452553b54\",\n                                        children: \"search\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 49\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                lineNumber: 48,\n                                columnNumber: 41\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 47,\n                            columnNumber: 41\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-a9c4478452553b54\" + \" \" + \"wrapper_work\",\n                            children: news.map(function(n, i) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                                    style: {\n                                        width: '300px'\n                                    },\n                                    className: \"jsx-a9c4478452553b54\" + \" \" + \"page-content\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"jsx-a9c4478452553b54\" + \" \" + \"card\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"jsx-a9c4478452553b54\" + \" \" + \"content\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                                    className: \"jsx-a9c4478452553b54\" + \" \" + \"title\",\n                                                    children: n.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 55\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-a9c4478452553b54\" + \" \" + \"copy\",\n                                                    children: \"Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 55\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                    href: n.url,\n                                                    target: \"_blank\",\n                                                    className: \"jsx-a9c4478452553b54\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                        className: \"jsx-a9c4478452553b54\" + \" \" + \"btn\",\n                                                        children: \"View link \"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 87\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 55\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 53\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 51\n                                    }, _this1)\n                                }, i, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 49\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 59,\n                            columnNumber: 41\n                        }, _this),\n                        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            id: \"a9c4478452553b54\",\n                            children: \".wrapper_work.jsx-a9c4478452553b54{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nflex-wrap:wrap;\\n-webkit-justify-content:space-around;\\njustify-content:space-around}\\nmain.page-content.jsx-a9c4478452553b54{width:300px!important;\\nheight:400px}\\ndiv.card.jsx-a9c4478452553b54{padding:10px}\"\n                        }, void 0, false, void 0, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                    lineNumber: 44,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                lineNumber: 42,\n                columnNumber: 25\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(News, \"OzBcnwlPFF4zRZ0M0Cvto51AIh4=\");\n_c = News;\nNews.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var query, news, res;\n        return C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    query = param.query;\n                    ;\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default()(\"https://hn.algolia.com/api/v1/search?query=\".concat(query.searchTerm));\n                case 5:\n                    res = _ctx.sent;\n                    _ctx.next = 8;\n                    return res.json();\n                case 8:\n                    news = _ctx.sent;\n                    _ctx.next = 15;\n                    break;\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    console.log(\"ERROR\", _ctx.t0);\n                    news = [];\n                case 15:\n                    return _ctx.abrupt(\"return\", {\n                        news: news.hits\n                    });\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                11\n            ]\n        ]);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (News); // <main className=\"page-content\">\n //   <div className=\"card\">\n //     <div className=\"content\">\n //       <h2 className=\"title\">Mountain View</h2>\n //       <p className=\"copy\">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>\n //       <button className=\"btn\">View Trips</button>\n //     </div>\n //   </div>\n //   <div className=\"card\">\n //     <div className=\"content\">\n //       <h2 className=\"title\">To The Beach</h2>\n //       <p className=\"copy\">Plan your next beach trip with these fabulous destinations</p>\n //       <button className=\"btn\">View Trips</button>\n //     </div>\n //   </div>\n //   <div className=\"card\">\n //     <div className=\"content\">\n //       <h2 className=\"title\">Desert Destinations</h2>\n //       <p className=\"copy\">It's the desert you've always dreamed of</p>\n //       <button className=\"btn\">Book Now</button>\n //     </div>\n //   </div>\n //   <div className=\"card\">\n //     <div className=\"content\">\n //       <h2 className=\"title\">Explore The Galaxy</h2>\n //       <p className=\"copy\">Seriously, straight up, just blast off into outer space today</p>\n //       <button className=\"btn\">Book Now</button>\n //     </div>\n //   </div>\n // </main>\n // <p key={i}>\n //         <a href={n.url}>{n.title}</a>\n // </p>\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBRXhCckMsSUFBSSxFQUdNc0MsR0FBRzs7OztvQkFMTUQsS0FBSyxTQUFMQSxLQUFLOzs7OzJCQUtGeEMsdURBQUssQ0FBRSxDQUEyQyw2Q0FBbUIsT0FBakJ3QyxLQUFLLENBQUNFLFVBQVU7O29CQUFoRkQsR0FBRzs7MkJBRUlBLEdBQUcsQ0FBQ0UsSUFBSTs7b0JBQXJCeEMsSUFBSTs7Ozs7O29CQUdKeUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTztvQkFDbkIxQyxJQUFJLEdBQUcsQ0FBQyxDQUFDOztpREFFVixDQUFDO3dCQUNBQSxJQUFJLEVBQUdBLElBQUksQ0FBQzJDLElBQUk7b0JBQ3hCLENBQUM7Ozs7Ozs7Ozs7O0lBRVQsQ0FBQzs7Ozs7QUFLRCwrREFBZTVDLElBQUksRUFJbkIsQ0FBa0M7QUFDbEMsQ0FBMkI7QUFDM0IsQ0FBZ0M7QUFDaEMsQ0FBaUQ7QUFDakQsQ0FBc0k7QUFDdEksQ0FBb0Q7QUFDcEQsQ0FBYTtBQUNiLENBQVc7QUFDWCxDQUEyQjtBQUMzQixDQUFnQztBQUNoQyxDQUFnRDtBQUNoRCxDQUEyRjtBQUMzRixDQUFvRDtBQUNwRCxDQUFhO0FBQ2IsQ0FBVztBQUNYLENBQTJCO0FBQzNCLENBQWdDO0FBQ2hDLENBQXVEO0FBQ3ZELENBQXlFO0FBQ3pFLENBQWtEO0FBQ2xELENBQWE7QUFDYixDQUFXO0FBQ1gsQ0FBMkI7QUFDM0IsQ0FBZ0M7QUFDaEMsQ0FBc0Q7QUFDdEQsQ0FBOEY7QUFDOUYsQ0FBa0Q7QUFDbEQsQ0FBYTtBQUNiLENBQVc7QUFDWCxDQUFVO0FBTXNDLENBQWM7QUFFZCxDQUF3QztBQUV4QyxDQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MuanM/YjI4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCJcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IE5ld3MgPSAoeyBuZXdzIH0pID0+IHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IFsgc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5IF0gPSB1c2VTdGF0ZSgncmVhY3QnKVxyXG4gICAgICAgIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCAgPSBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9uZXdzLz9zZWFyY2hUZXJtPSR7c2VhcmNoUXVlcnl9YClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHNlYXJjaEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCgpfT5cclxuICAgICAgICAvLyAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2UoKX0gLz5cclxuICAgICAgICAvLyA8L2Zvcm0+XHJcblxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+IE5FV1MgUEFHRTwvdGl0bGU+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCB0aXRsZT1cIk5ld3NcIj4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+c2VhcmNoIGZvciB0aGUgbGF0ZXN0IG5ld3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX3dvcmtcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3cy5tYXAoKG4sIGkpID0+IChcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCIga2V5PXtpfSBzdHlsZT17e3dpZHRoOiAnMzAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e24udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29weVwiPkNoZWNrIG91dCBhbGwgb2YgdGhlc2UgZ29yZ2VvdXMgbW91bnRhaW4gdHJpcHMgd2l0aCBiZWF1dGlmdWwgdmlld3Mgb2YsIHlvdSBndWVzc2VkIGl0LCB0aGUgbW91bnRhaW5zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtuLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5WaWV3IGxpbmsgPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAud3JhcHBlcl93b3JrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW4ucGFnZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5OZXdzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cXVlcnl9KSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBuZXdzO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vaG4uYWxnb2xpYS5jb20vYXBpL3YxL3NlYXJjaD9xdWVyeT0ke3F1ZXJ5LnNlYXJjaFRlcm19YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgbmV3cyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmV3cyA6IG5ld3MuaGl0c1xyXG4gICAgICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcblxyXG5cclxuXHJcbi8vIDxtYWluIGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxyXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbi8vICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1vdW50YWluIFZpZXc8L2gyPlxyXG4vLyAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5XCI+Q2hlY2sgb3V0IGFsbCBvZiB0aGVzZSBnb3JnZW91cyBtb3VudGFpbiB0cmlwcyB3aXRoIGJlYXV0aWZ1bCB2aWV3cyBvZiwgeW91IGd1ZXNzZWQgaXQsIHRoZSBtb3VudGFpbnM8L3A+XHJcbi8vICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+VmlldyBUcmlwczwvYnV0dG9uPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuLy8gICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+VG8gVGhlIEJlYWNoPC9oMj5cclxuLy8gICAgICAgPHAgY2xhc3NOYW1lPVwiY29weVwiPlBsYW4geW91ciBuZXh0IGJlYWNoIHRyaXAgd2l0aCB0aGVzZSBmYWJ1bG91cyBkZXN0aW5hdGlvbnM8L3A+XHJcbi8vICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+VmlldyBUcmlwczwvYnV0dG9uPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuLy8gICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+RGVzZXJ0IERlc3RpbmF0aW9uczwvaDI+XHJcbi8vICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlcIj5JdCdzIHRoZSBkZXNlcnQgeW91J3ZlIGFsd2F5cyBkcmVhbWVkIG9mPC9wPlxyXG4vLyAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPkJvb2sgTm93PC9idXR0b24+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4vLyAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5FeHBsb3JlIFRoZSBHYWxheHk8L2gyPlxyXG4vLyAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5XCI+U2VyaW91c2x5LCBzdHJhaWdodCB1cCwganVzdCBibGFzdCBvZmYgaW50byBvdXRlciBzcGFjZSB0b2RheTwvcD5cclxuLy8gICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5Cb29rIE5vdzwvYnV0dG9uPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vIDwvbWFpbj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8cCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8YSBocmVmPXtuLnVybH0+e24udGl0bGV9PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9wPiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJIZWFkIiwiUm91dGVyIiwiZmV0Y2giLCJMYXlvdXQiLCJOZXdzIiwibmV3cyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVRleHRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJ0aXRsZSIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJzcGFuIiwiY2xhc3MiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwibWFwIiwibiIsImkiLCJjbGFzc05hbWUiLCJtYWluIiwic3R5bGUiLCJ3aWR0aCIsInAiLCJhIiwiaHJlZiIsInVybCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVzIiwic2VhcmNoVGVybSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaGl0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

});