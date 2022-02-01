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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar News = function(param) {\n    var news = param.news;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('react'), /*#__PURE__*/ searchQuery = ref[0], setSearchQuery = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var handleTextChange = function(e) {\n        setSearchQuery(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        next_router__WEBPACK_IMPORTED_MODULE_6___default().push(\"/news/?searchTerm=\".concat(searchQuery));\n    };\n    // const searchForm = () => {\n    //         <form onSubmit={handleSubmit()}>\n    //         <input type=\"text\" value={searchQuery} onChange={handleTextChange()} />\n    // </form>\n    // }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \" NEWS PAGE\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                    lineNumber: 39,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                lineNumber: 38,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                title: \"News\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-847a95adc533244\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            className: \"jsx-847a95adc533244\",\n                            children: \"List of News\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 46,\n                            columnNumber: 41\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"jsx-847a95adc533244\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: searchQuery,\n                                    onChange: handleTextChange,\n                                    className: \"jsx-847a95adc533244\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 49\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"jsx-847a95adc533244\",\n                                    children: \"search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 49\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 48,\n                            columnNumber: 41\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"jsx-847a95adc533244\" + \" \" + \"wrapper_work\",\n                            children: news.map(function(n, i) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                                    style: {\n                                        width: '300px'\n                                    },\n                                    className: \"jsx-847a95adc533244\" + \" \" + \"page-content\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"jsx-847a95adc533244\" + \" \" + \"card\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"jsx-847a95adc533244\" + \" \" + \"content\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                                    className: \"jsx-847a95adc533244\" + \" \" + \"title\",\n                                                    children: n.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 55\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                    className: \"jsx-847a95adc533244\" + \" \" + \"copy\",\n                                                    children: \"Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 55\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                    href: n.url,\n                                                    target: \"_blank\",\n                                                    className: \"jsx-847a95adc533244\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                        className: \"jsx-847a95adc533244\" + \" \" + \"btn\",\n                                                        children: \"View link \"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 87\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 55\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 53\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 51\n                                    }, _this1)\n                                }, i, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 49\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                            lineNumber: 53,\n                            columnNumber: 41\n                        }, _this),\n                        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            id: \"847a95adc533244\",\n                            children: \".wrapper_work.jsx-847a95adc533244{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nflex-wrap:wrap;\\njus\\r\\n                                        }\\nmain.page-content.jsx-847a95adc533244{width:300px!important}\"\n                        }, void 0, false, void 0, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                    lineNumber: 44,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\CODING\\\\NEXT\\\\NEWS APP\\\\pages\\\\news.js\",\n                lineNumber: 42,\n                columnNumber: 25\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(News, \"OzBcnwlPFF4zRZ0M0Cvto51AIh4=\");\n_c = News;\nNews.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var query, news, res;\n        return C_Users_HP_Desktop_CODING_NEXT_NEWS_APP_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    query = param.query;\n                    ;\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default()(\"https://hn.algolia.com/api/v1/search?query=\".concat(query.searchTerm));\n                case 5:\n                    res = _ctx.sent;\n                    _ctx.next = 8;\n                    return res.json();\n                case 8:\n                    news = _ctx.sent;\n                    _ctx.next = 15;\n                    break;\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    console.log(\"ERROR\", _ctx.t0);\n                    news = [];\n                case 15:\n                    return _ctx.abrupt(\"return\", {\n                        news: news.hits\n                    });\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                11\n            ]\n        ]);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (News); // <main className=\"page-content\">\n //   <div className=\"card\">\n //     <div className=\"content\">\n //       <h2 className=\"title\">Mountain View</h2>\n //       <p className=\"copy\">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>\n //       <button className=\"btn\">View Trips</button>\n //     </div>\n //   </div>\n //   <div className=\"card\">\n //     <div className=\"content\">\n //       <h2 className=\"title\">To The Beach</h2>\n //       <p className=\"copy\">Plan your next beach trip with these fabulous destinations</p>\n //       <button className=\"btn\">View Trips</button>\n //     </div>\n //   </div>\n //   <div className=\"card\">\n //     <div className=\"content\">\n //       <h2 className=\"title\">Desert Destinations</h2>\n //       <p className=\"copy\">It's the desert you've always dreamed of</p>\n //       <button className=\"btn\">Book Now</button>\n //     </div>\n //   </div>\n //   <div className=\"card\">\n //     <div className=\"content\">\n //       <h2 className=\"title\">Explore The Galaxy</h2>\n //       <p className=\"copy\">Seriously, straight up, just blast off into outer space today</p>\n //       <button className=\"btn\">Book Now</button>\n //     </div>\n //   </div>\n // </main>\n // <p key={i}>\n //         <a href={n.url}>{n.title}</a>\n // </p>\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO29CQUNuQnRDLElBQUksR0FBRyxDQUFDLENBQUM7O2lEQUVWLENBQUM7d0JBQ0FBLElBQUksRUFBR0EsSUFBSSxDQUFDdUMsSUFBSTtvQkFDeEIsQ0FBQzs7Ozs7Ozs7Ozs7SUFFVCxDQUFDOzs7OztBQUtELCtEQUFleEMsSUFBSSxFQUluQixDQUFrQztBQUNsQyxDQUEyQjtBQUMzQixDQUFnQztBQUNoQyxDQUFpRDtBQUNqRCxDQUFzSTtBQUN0SSxDQUFvRDtBQUNwRCxDQUFhO0FBQ2IsQ0FBVztBQUNYLENBQTJCO0FBQzNCLENBQWdDO0FBQ2hDLENBQWdEO0FBQ2hELENBQTJGO0FBQzNGLENBQW9EO0FBQ3BELENBQWE7QUFDYixDQUFXO0FBQ1gsQ0FBMkI7QUFDM0IsQ0FBZ0M7QUFDaEMsQ0FBdUQ7QUFDdkQsQ0FBeUU7QUFDekUsQ0FBa0Q7QUFDbEQsQ0FBYTtBQUNiLENBQVc7QUFDWCxDQUEyQjtBQUMzQixDQUFnQztBQUNoQyxDQUFzRDtBQUN0RCxDQUE4RjtBQUM5RixDQUFrRDtBQUNsRCxDQUFhO0FBQ2IsQ0FBVztBQUNYLENBQVU7QUFNc0MsQ0FBYztBQUVkLENBQXdDO0FBRXhDLENBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy5qcz9iMjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgTmV3cyA9ICh7IG5ld3MgfSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgWyBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnkgXSA9IHVzZVN0YXRlKCdyZWFjdCcpXHJcbiAgICAgICAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ICA9IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgL25ld3MvP3NlYXJjaFRlcm09JHtzZWFyY2hRdWVyeX1gKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc3Qgc2VhcmNoRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KCl9PlxyXG4gICAgICAgIC8vICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZSgpfSAvPlxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT4gTkVXUyBQQUdFPC90aXRsZT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiTmV3c1wiPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MaXN0IG9mIE5ld3M8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJfd29ya1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdzLm1hcCgobiwgaSkgPT4gKFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIiBrZXk9e2l9IHN0eWxlPXt7d2lkdGg6ICczMDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57bi50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5XCI+Q2hlY2sgb3V0IGFsbCBvZiB0aGVzZSBnb3JnZW91cyBtb3VudGFpbiB0cmlwcyB3aXRoIGJlYXV0aWZ1bCB2aWV3cyBvZiwgeW91IGd1ZXNzZWQgaXQsIHRoZSBtb3VudGFpbnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e24udXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPlZpZXcgbGluayA8L2J1dHRvbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53cmFwcGVyX3dvcmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbi5wYWdlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuXHJcbk5ld3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtxdWVyeX0pID0+IHtcclxuXHJcbiAgICAgICAgbGV0IG5ld3M7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PSR7cXVlcnkuc2VhcmNoVGVybX1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICBuZXdzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuZXdzIDogbmV3cy5oaXRzXHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuXHJcblxyXG5cclxuLy8gPG1haW4gY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuLy8gICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+TW91bnRhaW4gVmlldzwvaDI+XHJcbi8vICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlcIj5DaGVjayBvdXQgYWxsIG9mIHRoZXNlIGdvcmdlb3VzIG1vdW50YWluIHRyaXBzIHdpdGggYmVhdXRpZnVsIHZpZXdzIG9mLCB5b3UgZ3Vlc3NlZCBpdCwgdGhlIG1vdW50YWluczwvcD5cclxuLy8gICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5WaWV3IFRyaXBzPC9idXR0b24+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4vLyAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5UbyBUaGUgQmVhY2g8L2gyPlxyXG4vLyAgICAgICA8cCBjbGFzc05hbWU9XCJjb3B5XCI+UGxhbiB5b3VyIG5leHQgYmVhY2ggdHJpcCB3aXRoIHRoZXNlIGZhYnVsb3VzIGRlc3RpbmF0aW9uczwvcD5cclxuLy8gICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5WaWV3IFRyaXBzPC9idXR0b24+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4vLyAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5EZXNlcnQgRGVzdGluYXRpb25zPC9oMj5cclxuLy8gICAgICAgPHAgY2xhc3NOYW1lPVwiY29weVwiPkl0J3MgdGhlIGRlc2VydCB5b3UndmUgYWx3YXlzIGRyZWFtZWQgb2Y8L3A+XHJcbi8vICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+Qm9vayBOb3c8L2J1dHRvbj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIDwvZGl2PlxyXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbi8vICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV4cGxvcmUgVGhlIEdhbGF4eTwvaDI+XHJcbi8vICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlcIj5TZXJpb3VzbHksIHN0cmFpZ2h0IHVwLCBqdXN0IGJsYXN0IG9mZiBpbnRvIG91dGVyIHNwYWNlIHRvZGF5PC9wPlxyXG4vLyAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPkJvb2sgTm93PC9idXR0b24+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj5cclxuLy8gPC9tYWluPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxwIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxhIGhyZWY9e24udXJsfT57bi50aXRsZX08L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L3A+Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIkhlYWQiLCJSb3V0ZXIiLCJmZXRjaCIsIkxheW91dCIsIk5ld3MiLCJuZXdzIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlVGV4dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRpdGxlIiwiZGl2IiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm1hcCIsIm4iLCJpIiwiY2xhc3NOYW1lIiwibWFpbiIsInN0eWxlIiwid2lkdGgiLCJwIiwiYSIsImhyZWYiLCJ1cmwiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInJlcyIsInNlYXJjaFRlcm0iLCJqc29uIiwiY29uc29sZSIsImxvZyIsImhpdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

});