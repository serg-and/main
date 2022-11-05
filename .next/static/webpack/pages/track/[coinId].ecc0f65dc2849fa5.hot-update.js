"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/track/[coinId]",{

/***/ "./pages/track/[coinId].js":
/*!*********************************!*\
  !*** ./pages/track/[coinId].js ***!
  \*********************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TrackCoin; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/firebaseConfig */ \"./utils/firebaseConfig.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TrackCoin() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var coinId = router.query.coinId;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), amount = ref[0], setAmount = ref[1];\n    function startTracking() {\n        return _startTracking.apply(this, arguments);\n    }\n    function _startTracking() {\n        _startTracking = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            var coinSnapshot, coin, currrentlyTracking;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"coins\", coinId))\n                        ];\n                    case 1:\n                        coinSnapshot = _state.sent();\n                        if (!coinSnapshot.exists()) {\n                            console.log(\"Coin id \".concat(coinId, \" doesn't exist\"));\n                            return [\n                                2\n                            ];\n                        }\n                        coin = coinSnapshot.data();\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"tracked\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)(\"endTimestamp\", \"==\", null)))\n                        ];\n                    case 2:\n                        currrentlyTracking = _state.sent();\n                        currrentlyTracking.forEach(function() {\n                            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(tracked) {\n                                var trackedData, coinSnap, coinData;\n                                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                                    switch(_state.label){\n                                        case 0:\n                                            trackedData = tracked.data();\n                                            return [\n                                                4,\n                                                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"coins\", trackedData.coinId))\n                                            ];\n                                        case 1:\n                                            coinSnap = _state.sent();\n                                            coinData = coinSnap.data();\n                                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"coins\", tracked.id), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, tracked.data()), {\n                                                endTimestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.Timestamp.now(),\n                                                endPrice: coinData.price\n                                            }));\n                                            return [\n                                                2\n                                            ];\n                                    }\n                                });\n                            });\n                            return function(tracked) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }());\n                        return [\n                            4,\n                            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_utils_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"tracked\"), {\n                                amount: amount,\n                                coinId: coinId,\n                                startPrice: coin.price,\n                                endPrice: null,\n                                startTimestamp: firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.Timestamp.now(),\n                                endTimestamp: null\n                            })\n                        ];\n                    case 3:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _startTracking.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Box, {\n        align: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Box, {\n            gap: \"medium\",\n            width: \"20rem\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Start tracking \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                            color: \"focus\",\n                            size: \"1.5rem\",\n                            weight: 600,\n                            children: coinId\n                        }, void 0, false, {\n                            fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                            lineNumber: 47,\n                            columnNumber: 28\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.TextInput, {\n                    type: \"number\",\n                    placeholder: \"Enter an amount to track\",\n                    onChange: function(e) {\n                        return setAmount(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                    color: \"focus\",\n                    disabled: !amount,\n                    label: \"Start Tracking\",\n                    style: {\n                        color: \"white\"\n                    },\n                    onClick: startTracking\n                }, void 0, false, {\n                    fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/serge/School/dev/next-fire/pages/track/[coinId].js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(TrackCoin, \"8rEA9WF8QVIQ5bPWdaAuvZoALlg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = TrackCoin;\nvar _c;\n$RefreshReg$(_c, \"TrackCoin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTs7d0JBQUMsaUJBQWU7c0NBQUEsOERBQUM5Qix5Q0FBSTs0QkFBQytCLEtBQUssRUFBQyxPQUFPOzRCQUFDQyxJQUFJLEVBQUMsUUFBUTs0QkFBQ0MsTUFBTSxFQUFFLEdBQUc7c0NBQUc3QixNQUFNOzs7OztnQ0FBUTs7Ozs7O3dCQUFLOzhCQUN0Riw4REFBQ0gsOENBQVM7b0JBQ1JpQyxJQUFJLEVBQUMsUUFBUTtvQkFDYkMsV0FBVyxFQUFDLDBCQUEwQjtvQkFDdENDLFFBQVEsRUFBRUMsU0FBQUEsQ0FBQzsrQkFBSS9CLFNBQVMsQ0FBQytCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7cUJBQUE7Ozs7O3dCQUN4Qzs4QkFDRiw4REFBQ3hDLDJDQUFNO29CQUNMZ0MsS0FBSyxFQUFDLE9BQU87b0JBQ2JTLFFBQVEsRUFBRSxDQUFDbkMsTUFBTTtvQkFDakJvQyxLQUFLLEVBQUMsZ0JBQWdCO29CQUN0QkMsS0FBSyxFQUFFO3dCQUFFWCxLQUFLLEVBQUUsT0FBTztxQkFBRTtvQkFDekJZLE9BQU8sRUFBRXBDLGFBQWE7Ozs7O3dCQUN0Qjs7Ozs7O2dCQUNFOzs7OztZQUNGLENBQ1A7QUFDSCxDQUFDO0dBeER1QkwsU0FBUzs7UUFDaEJoQixrREFBUzs7O0FBREZnQixLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RyYWNrL1tjb2luSWRdLmpzP2ZkMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWRkRG9jLCBjb2xsZWN0aW9uLCBkb2MsIGdldERvYywgZ2V0RG9jcywgcXVlcnksIHNldERvYywgVGltZXN0YW1wLCB3aGVyZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dElucHV0IH0gZnJvbSBcImdyb21tZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhY2tDb2luKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGNvaW5JZCB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnRUcmFja2luZygpIHtcbiAgICBjb25zdCBjb2luU25hcHNob3QgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCAnY29pbnMnLCBjb2luSWQpKVxuICAgIGlmICghY29pblNuYXBzaG90LmV4aXN0cygpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ29pbiBpZCAke2NvaW5JZH0gZG9lc24ndCBleGlzdGApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY29pbiA9IGNvaW5TbmFwc2hvdC5kYXRhKClcblxuICAgIC8vIHN0b3AgdHJhY2tpbmcgYW55IGN1cnJlbnRseSB0cmFja2luZyBjb2lucyBhbmQgc2V0IGVuZCBwcmljZSBhbmQgdGltZXN0YW1wXG4gICAgY29uc3QgY3VycnJlbnRseVRyYWNraW5nID0gYXdhaXQgZ2V0RG9jcyhxdWVyeShjb2xsZWN0aW9uKGRiLCAndHJhY2tlZCcpLCB3aGVyZSgnZW5kVGltZXN0YW1wJywgJz09JywgbnVsbCkpKVxuICAgIGN1cnJyZW50bHlUcmFja2luZy5mb3JFYWNoKGFzeW5jIHRyYWNrZWQgPT4ge1xuICAgICAgY29uc3QgdHJhY2tlZERhdGEgPSB0cmFja2VkLmRhdGEoKVxuICAgICAgY29uc3QgY29pblNuYXAgPSBhd2FpdCBnZXREb2MoZG9jKGRiLCAnY29pbnMnLCB0cmFja2VkRGF0YS5jb2luSWQpKVxuICAgICAgY29uc3QgY29pbkRhdGEgPSBjb2luU25hcC5kYXRhKClcblxuICAgICAgc2V0RG9jKGRvYyhkYiwgJ2NvaW5zJywgdHJhY2tlZC5pZCksIHtcbiAgICAgICAgLi4udHJhY2tlZC5kYXRhKCksXG4gICAgICAgIGVuZFRpbWVzdGFtcDogVGltZXN0YW1wLm5vdygpLFxuICAgICAgICBlbmRQcmljZTogY29pbkRhdGEucHJpY2VcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCAndHJhY2tlZCcpLCB7XG4gICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgIGNvaW5JZDogY29pbklkLFxuICAgICAgc3RhcnRQcmljZTogY29pbi5wcmljZSxcbiAgICAgIGVuZFByaWNlOiBudWxsLFxuICAgICAgc3RhcnRUaW1lc3RhbXA6IFRpbWVzdGFtcC5ub3coKSxcbiAgICAgIGVuZFRpbWVzdGFtcDogbnVsbCxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICA8Qm94IGdhcD0nbWVkaXVtJyB3aWR0aD0nMjByZW0nPlxuICAgICAgICA8aDI+U3RhcnQgdHJhY2tpbmcgPFRleHQgY29sb3I9J2ZvY3VzJyBzaXplPScxLjVyZW0nIHdlaWdodD17NjAwfT57Y29pbklkfTwvVGV4dD48L2gyPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhbiBhbW91bnQgdG8gdHJhY2snXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPSdmb2N1cydcbiAgICAgICAgICBkaXNhYmxlZD17IWFtb3VudH1cbiAgICAgICAgICBsYWJlbD0nU3RhcnQgVHJhY2tpbmcnXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICBvbkNsaWNrPXtzdGFydFRyYWNraW5nfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwic2V0RG9jIiwiVGltZXN0YW1wIiwid2hlcmUiLCJkYiIsIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0SW5wdXQiLCJUcmFja0NvaW4iLCJyb3V0ZXIiLCJjb2luSWQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJzdGFydFRyYWNraW5nIiwiY29pblNuYXBzaG90IiwiY29pbiIsImN1cnJyZW50bHlUcmFja2luZyIsImV4aXN0cyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZm9yRWFjaCIsInRyYWNrZWQiLCJ0cmFja2VkRGF0YSIsImNvaW5TbmFwIiwiY29pbkRhdGEiLCJpZCIsImVuZFRpbWVzdGFtcCIsIm5vdyIsImVuZFByaWNlIiwicHJpY2UiLCJzdGFydFByaWNlIiwic3RhcnRUaW1lc3RhbXAiLCJhbGlnbiIsImdhcCIsIndpZHRoIiwiaDIiLCJjb2xvciIsInNpemUiLCJ3ZWlnaHQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc2FibGVkIiwibGFiZWwiLCJzdHlsZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/track/[coinId].js\n"));

/***/ })

});