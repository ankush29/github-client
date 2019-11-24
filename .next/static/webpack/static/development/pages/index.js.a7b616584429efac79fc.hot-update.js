webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/organisms/HeaderWithSwipeableMenu/index.js":
/*!***************************************************************!*\
  !*** ./components/organisms/HeaderWithSwipeableMenu/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.. */ "./components/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\github-client\\components\\organisms\\HeaderWithSwipeableMenu\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var HeaderWithSwipeableMenu = function HeaderWithSwipeableMenu(props) {
  debugger;
  var closeMenu = props.closeMenu,
      openMenu = props.openMenu,
      loginButtonContainer = props.loginButtonContainer,
      leftMenuIsOpened = props.leftMenuIsOpened;
  var MENU_ITEMS = [{
    id: 1,
    url: '/',
    text: 'Home'
  }, {
    id: 2,
    url: '/top_ruby',
    text: 'Top Ruby Repositories'
  }, {
    id: 3,
    url: '/top_js',
    text: 'Top Javascript Repositories'
  }, {
    id: 4,
    url: '/new_js',
    text: 'New Javascript Repositories'
  }];
  return __jsx(___WEBPACK_IMPORTED_MODULE_2__["Header"], {
    openMenu: openMenu,
    title: "Home",
    swipeableMenu: __jsx(___WEBPACK_IMPORTED_MODULE_2__["SwipeableMenu"], {
      isOpenedByDefault: leftMenuIsOpened,
      closeMenu: closeMenu,
      openMenu: openMenu,
      menuItems: MENU_ITEMS,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }),
    loginButton: loginButtonContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  });
};

HeaderWithSwipeableMenu.propTypes = {
  leftMenuIsOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  openMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  closeMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loginButtonContainer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderWithSwipeableMenu);

/***/ })

})
//# sourceMappingURL=index.js.a7b616584429efac79fc.hot-update.js.map