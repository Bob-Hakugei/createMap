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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/bob/Bureau/with-electron-app/renderer/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst Home = () => {\n  _s();\n\n  const {\n    0: input,\n    1: setInput\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const {\n    0: message,\n    1: setMessage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const handleMessage = (event, message) => setMessage(message);\n\n    window.electron.message.on(handleMessage);\n    return () => {\n      window.electron.message.off(handleMessage);\n    };\n  }, []);\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    window.electron.message.send(input);\n    setMessage(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"jsx-2378457364\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n      className: \"jsx-2378457364\",\n      children: \"Hello Electron!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), message && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      className: \"jsx-2378457364\",\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 19\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      className: \"jsx-2378457364\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: input,\n        onChange: e => setInput(e.target.value),\n        className: \"jsx-2378457364\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {\n      id: \"2378457364\",\n      children: \"body.jsx-2378457364{background-color:black;}h1.jsx-2378457364{color:black;font-size:50px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvYi9CdXJlYXUvd2l0aC1lbGVjdHJvbi1hcHAvcmVuZGVyZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUlrQyxBQUdYLFlBQ0csV0FIakIsSUFJQSIsImZpbGUiOiIvaG9tZS9ib2IvQnVyZWF1L3dpdGgtZWxlY3Ryb24tYXBwL3JlbmRlcmVyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSkgPT4gc2V0TWVzc2FnZShtZXNzYWdlKVxuICAgIHdpbmRvdy5lbGVjdHJvbi5tZXNzYWdlLm9uKGhhbmRsZU1lc3NhZ2UpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LmVsZWN0cm9uLm1lc3NhZ2Uub2ZmKGhhbmRsZU1lc3NhZ2UpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgd2luZG93LmVsZWN0cm9uLm1lc3NhZ2Uuc2VuZChpbnB1dClcbiAgICBzZXRNZXNzYWdlKG51bGwpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SGVsbG8gRWxlY3Ryb24hPC9oMT5cblxuICAgICAge21lc3NhZ2UgJiYgPHA+e21lc3NhZ2V9PC9wPn1cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgIFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\\n/*@ sourceURL=/home/bob/Bureau/with-electron-app/renderer/pages/index.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Home, \"t4/+bYkit9k8CBu5GD/b0higbHI=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxNQUFNRSxJQUFJLEdBQUcsTUFBTTtFQUFBOztFQUNqQixNQUFNO0lBQUEsR0FBQ0MsS0FBRDtJQUFBLEdBQVFDO0VBQVIsSUFBb0JKLCtDQUFRLENBQUMsRUFBRCxDQUFsQztFQUNBLE1BQU07SUFBQSxHQUFDSyxPQUFEO0lBQUEsR0FBVUM7RUFBVixJQUF3Qk4sK0NBQVEsQ0FBQyxJQUFELENBQXRDO0VBRUFDLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1NLGFBQWEsR0FBRyxDQUFDQyxLQUFELEVBQVFILE9BQVIsS0FBb0JDLFVBQVUsQ0FBQ0QsT0FBRCxDQUFwRDs7SUFDQUksTUFBTSxDQUFDQyxRQUFQLENBQWdCTCxPQUFoQixDQUF3Qk0sRUFBeEIsQ0FBMkJKLGFBQTNCO0lBRUEsT0FBTyxNQUFNO01BQ1hFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkwsT0FBaEIsQ0FBd0JPLEdBQXhCLENBQTRCTCxhQUE1QjtJQUNELENBRkQ7RUFHRCxDQVBRLEVBT04sRUFQTSxDQUFUOztFQVNBLE1BQU1NLFlBQVksR0FBSUwsS0FBRCxJQUFXO0lBQzlCQSxLQUFLLENBQUNNLGNBQU47SUFDQUwsTUFBTSxDQUFDQyxRQUFQLENBQWdCTCxPQUFoQixDQUF3QlUsSUFBeEIsQ0FBNkJaLEtBQTdCO0lBQ0FHLFVBQVUsQ0FBQyxJQUFELENBQVY7RUFDRCxDQUpEOztFQU1BLG9CQUNFO0lBQUE7SUFBQSx3QkFDRTtNQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREYsRUFHR0QsT0FBTyxpQkFBSTtNQUFBO01BQUEsVUFBSUE7SUFBSjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBSGQsZUFLRTtNQUFNLFFBQVEsRUFBRVEsWUFBaEI7TUFBQTtNQUFBLHVCQUNFO1FBQ0UsSUFBSSxFQUFDLE1BRFA7UUFFRSxLQUFLLEVBQUVWLEtBRlQ7UUFHRSxRQUFRLEVBQUdhLENBQUQsSUFBT1osUUFBUSxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUgzQjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFMRjtNQUFBO01BQUE7SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQTBCRCxDQTdDRDs7R0FBTWhCOztLQUFBQTtBQStDTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQsIG1lc3NhZ2UpID0+IHNldE1lc3NhZ2UobWVzc2FnZSlcbiAgICB3aW5kb3cuZWxlY3Ryb24ubWVzc2FnZS5vbihoYW5kbGVNZXNzYWdlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5lbGVjdHJvbi5tZXNzYWdlLm9mZihoYW5kbGVNZXNzYWdlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHdpbmRvdy5lbGVjdHJvbi5tZXNzYWdlLnNlbmQoaW5wdXQpXG4gICAgc2V0TWVzc2FnZShudWxsKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhlbGxvIEVsZWN0cm9uITwvaDE+XG5cbiAgICAgIHttZXNzYWdlICYmIDxwPnttZXNzYWdlfTwvcD59XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICBcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiaW5wdXQiLCJzZXRJbnB1dCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlTWVzc2FnZSIsImV2ZW50Iiwid2luZG93IiwiZWxlY3Ryb24iLCJvbiIsIm9mZiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2VuZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});