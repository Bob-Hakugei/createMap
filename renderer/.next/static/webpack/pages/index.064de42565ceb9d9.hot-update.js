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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/bob/Bureau/with-electron-app/renderer/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst Home = () => {\n  _s();\n\n  const {\n    0: input,\n    1: setInput\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const {\n    0: message,\n    1: setMessage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const handleMessage = (event, message) => setMessage(message);\n\n    window.electron.message.on(handleMessage);\n    return () => {\n      window.electron.message.off(handleMessage);\n    };\n  }, []);\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    window.electron.message.send(input);\n    setMessage(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: style,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Hello Electron!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined), message && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 19\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: input,\n        onChange: e => setInput(e.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Home, \"t4/+bYkit9k8CBu5GD/b0higbHI=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLE1BQU1HLElBQUksR0FBRyxNQUFNO0VBQUE7O0VBQ2pCLE1BQU07SUFBQSxHQUFDQyxLQUFEO0lBQUEsR0FBUUM7RUFBUixJQUFvQkwsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0VBQ0EsTUFBTTtJQUFBLEdBQUNNLE9BQUQ7SUFBQSxHQUFVQztFQUFWLElBQXdCUCwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7RUFFQUMsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTU8sYUFBYSxHQUFHLENBQUNDLEtBQUQsRUFBUUgsT0FBUixLQUFvQkMsVUFBVSxDQUFDRCxPQUFELENBQXBEOztJQUNBSSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JMLE9BQWhCLENBQXdCTSxFQUF4QixDQUEyQkosYUFBM0I7SUFFQSxPQUFPLE1BQU07TUFDWEUsTUFBTSxDQUFDQyxRQUFQLENBQWdCTCxPQUFoQixDQUF3Qk8sR0FBeEIsQ0FBNEJMLGFBQTVCO0lBQ0QsQ0FGRDtFQUdELENBUFEsRUFPTixFQVBNLENBQVQ7O0VBU0EsTUFBTU0sWUFBWSxHQUFJTCxLQUFELElBQVc7SUFDOUJBLEtBQUssQ0FBQ00sY0FBTjtJQUNBTCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JMLE9BQWhCLENBQXdCVSxJQUF4QixDQUE2QlosS0FBN0I7SUFDQUcsVUFBVSxDQUFDLElBQUQsQ0FBVjtFQUNELENBSkQ7O0VBTUEsb0JBQ0U7SUFBSyxTQUFTLEVBQUVVLEtBQWhCO0lBQUEsd0JBQ0U7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFERixFQUdHWCxPQUFPLGlCQUFJO01BQUEsVUFBSUE7SUFBSjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBSGQsZUFLRTtNQUFNLFFBQVEsRUFBRVEsWUFBaEI7TUFBQSx1QkFDRTtRQUNFLElBQUksRUFBQyxNQURQO1FBRUUsS0FBSyxFQUFFVixLQUZUO1FBR0UsUUFBUSxFQUFHYyxDQUFELElBQU9iLFFBQVEsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVY7TUFIM0I7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFMRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQWdCRCxDQW5DRDs7R0FBTWpCOztLQUFBQTtBQXFDTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlKSA9PiBzZXRNZXNzYWdlKG1lc3NhZ2UpXG4gICAgd2luZG93LmVsZWN0cm9uLm1lc3NhZ2Uub24oaGFuZGxlTWVzc2FnZSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cuZWxlY3Ryb24ubWVzc2FnZS5vZmYoaGFuZGxlTWVzc2FnZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB3aW5kb3cuZWxlY3Ryb24ubWVzc2FnZS5zZW5kKGlucHV0KVxuICAgIHNldE1lc3NhZ2UobnVsbClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfT5cbiAgICAgIDxoMT5IZWxsbyBFbGVjdHJvbiE8L2gxPlxuXG4gICAgICB7bWVzc2FnZSAmJiA8cD57bWVzc2FnZX08L3A+fVxuXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkhvbWUiLCJpbnB1dCIsInNldElucHV0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwiZXZlbnQiLCJ3aW5kb3ciLCJlbGVjdHJvbiIsIm9uIiwib2ZmIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZW5kIiwic3R5bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});