webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/HeaderContainer/index.js":
/*!*********************************************!*\
  !*** ./containers/HeaderContainer/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GithubLoginButtonContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GithubLoginButtonContainer */ "./containers/GithubLoginButtonContainer/index.js");
var _jsxFileName = "C:\\Users\\Admin\\Documents\\github-client\\containers\\HeaderContainer\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function HeaderContainer(props) {
  console.log('props----', props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      leftMenuIsOpened = _useState[0],
      setLeftMenuIsOpened = _useState[1];

  var toggleLeftMenuShow = function toggleLeftMenuShow(status) {
    console.log('status..', status);
    setLeftMenuIsOpened(status);
  };

  return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["HeaderWithSwipeableMenu"], {
    title: props.title,
    leftMenuIsOpened: leftMenuIsOpened,
    openMenu: function openMenu() {
      return toggleLeftMenuShow(true);
    },
    closeMenu: function closeMenu() {
      return toggleLeftMenuShow(false);
    },
    loginButtonContainer: __jsx(_GithubLoginButtonContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  });
}

HeaderContainer.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderContainer);

/***/ })

})
//# sourceMappingURL=index.js.c81d374c6ea59b841a36.hot-update.js.map