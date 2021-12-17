"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/components/sidebar/sidebar";
exports.ids = ["pages/components/sidebar/sidebar"];
exports.modules = {

/***/ "./pages/components/sidebar/sidebar.tsx":
/*!**********************************************!*\
  !*** ./pages/components/sidebar/sidebar.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Sidebar(props) {\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/giacomodigiuseppe/Desktop/portfolio2022/frontend/pages/components/sidebar/sidebar.tsx\",\n            lineNumber: 6,\n            columnNumber: 11\n        },\n        __self: this\n    }));\n}\nconst getServerSideProps = async ()=>{\n    const res = await fetch('http://localhost:5000/api/rage/projects/NeyonArt');\n    const data = await res.json();\n    console.log(data);\n    return {\n        props: {\n            data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7U0FHU0EsT0FBTyxDQUFFQyxLQUFLLEVBQUcsQ0FBQztJQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7SUFDakIsTUFBTSxzRUFBR0csQ0FBRzs7Ozs7Ozs7QUFDZCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxrQkFBa0IsYUFBbUMsQ0FBQztJQUMvRCxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFrRDtJQUMxRSxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0csSUFBSTtJQUUzQlAsT0FBTyxDQUFDQyxHQUFHLENBQUNLLElBQUk7SUFDaEIsTUFBTSxDQUFDLENBQUM7UUFDTlAsS0FBSyxFQUFFLENBQUM7WUFDTk8sSUFBSTtRQUNOLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlUixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnRzeD9kZDM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCJcblxuXG5mdW5jdGlvbiBTaWRlYmFyKCBwcm9wcyApIHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICByZXR1cm4gKDxkaXY+PC9kaXY+KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3JhZ2UvcHJvamVjdHMvTmV5b25BcnQnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIFxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGRhdGEsXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG5cbiJdLCJuYW1lcyI6WyJTaWRlYmFyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/sidebar/sidebar.tsx\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/components/sidebar/sidebar.tsx"));
module.exports = __webpack_exports__;

})();