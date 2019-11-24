webpackHotUpdate("static\\development\\pages\\top_ruby.js",{

/***/ "./components/molecules/SwipeableMenu/index.js":
/*!*****************************************************!*\
  !*** ./components/molecules/SwipeableMenu/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ "./components/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\github-client\\components\\molecules\\SwipeableMenu\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SwipeableMenu = function SwipeableMenu(props) {
  var menuItems = props.menuItems,
      openMenu = props.openMenu,
      closeMenu = props.closeMenu,
      isOpenedByDefault = props.isOpenedByDefault;
  return __jsx(___WEBPACK_IMPORTED_MODULE_3__["SwipeableDrawer"], {
    open: isOpenedByDefault,
    onClose: closeMenu,
    onOpen: openMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, menuItems.map(function (item) {
    return __jsx(___WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      button: true,
      component: "a",
      href: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
      primary: item.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  })));
};

SwipeableMenu.propTypes = {
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape()).isRequired,
  openMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  closeMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isOpenedByDefault: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
SwipeableMenu.defaultProps = {
  isOpenedByDefault: false
};
/* harmony default export */ __webpack_exports__["default"] = (SwipeableMenu);

/***/ })

})
//# sourceMappingURL=top_ruby.js.6631a8c141c8cd6e84a5.hot-update.js.map