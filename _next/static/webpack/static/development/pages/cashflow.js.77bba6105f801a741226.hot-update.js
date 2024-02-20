webpackHotUpdate("static/development/pages/cashflow.js",{

/***/ "./components/board/BangKeThuNhap.js":
/*!*******************************************!*\
  !*** ./components/board/BangKeThuNhap.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/media */ "./utils/media.js");
/* harmony import */ var _utils_media__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_media__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/cashFlowUtils */ "./utils/cashFlowUtils.js");
/* harmony import */ var _utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_cashFlowUtils__WEBPACK_IMPORTED_MODULE_11__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    text-align: center;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  text-align: right;\n  background-color: #fafafa; \n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable linebreak-style */






var Bound = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject(), _utils_media__WEBPACK_IMPORTED_MODULE_10___default.a.md(_templateObject2()));

var BangKeTaiSan =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BangKeTaiSan, _React$Component);

  function BangKeTaiSan() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BangKeTaiSan);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BangKeTaiSan).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BangKeTaiSan, [{
    key: "render",
    value: function render() {
      var _this$props$cashFlowR = this.props.cashFlowReducer,
          indexPlayer = _this$props$cashFlowR.indexPlayer,
          players = _this$props$cashFlowR.players;
      var _players$indexPlayer = players[indexPlayer],
          name = _players$indexPlayer.name,
          luong = _players$indexPlayer.luong,
          laiNganHang = _players$indexPlayer.laiNganHang,
          laiCoPhan = _players$indexPlayer.laiCoPhan,
          thuNhapThuDong = _players$indexPlayer.thuNhapThuDong,
          tongThuNhap = _players$indexPlayer.tongThuNhap,
          batDongSans = _players$indexPlayer.batDongSans,
          congTys = _players$indexPlayer.congTys;
      return __jsx(Bound, {
        className: "panel-left"
      }, __jsx("div", {
        className: "main-title"
      }, name), __jsx("div", {
        className: "main-title"
      }, "Thu nh\u1EADp"), __jsx("div", {
        className: "body-table"
      }, __jsx("div", {
        className: "block-row"
      }, __jsx("div", {
        className: "nomal-text"
      }, "L\u01B0\u01A1ng"), __jsx("div", {
        className: "so-tien"
      }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["formatNumber0"])(luong))), __jsx("div", {
        className: "block-row"
      }, __jsx("div", {
        className: "nomal-text"
      }, "T\u1EEB B\u1EA5t \u0111\u1ED9ng s\u1EA3n"), __jsx("div", {
        className: "so-tien"
      })), batDongSans && batDongSans.map(function (item, index) {
        return __jsx("div", {
          className: "block-row",
          key: index
        }, __jsx("div", {
          className: "subitem-text"
        }, item.title), __jsx("div", {
          className: "subitem-so-tien"
        }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["formatNumber0"])(item.thuNhap)));
      }), __jsx("div", {
        className: "block-row"
      }, __jsx("div", {
        className: "nomal-text"
      }, "L\u1EE3i t\u1EE9c"), __jsx("div", {
        className: "so-tien"
      }, laiNganHang)), __jsx("div", {
        className: "block-row"
      }, __jsx("div", {
        className: "nomal-text"
      }, "C\u1ED5 t\u1EE9c"), __jsx("div", {
        className: "so-tien"
      }, laiCoPhan)), __jsx("div", {
        className: "block-row"
      }, __jsx("div", {
        className: "nomal-text"
      }, "C\u1EEDa h\xE0ng")), congTys && congTys.map(function (item, index) {
        return __jsx("div", {
          className: "block-row",
          key: index
        }, __jsx("div", {
          className: "subitem-text"
        }, item.title), __jsx("div", {
          className: "subitem-so-tien"
        }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["formatNumber0"])(item.thuNhap)));
      }), __jsx("div", {
        className: "block-row"
      }, __jsx("div", {
        className: "nomal-text"
      }, "T\xE0i s\u1EA3n kh\xE1c"), __jsx("div", {
        className: "so-tien"
      }, "0")), __jsx("div", {
        className: "block-row"
      }, __jsx("div", {
        className: "nomal-text"
      }, "Kh\xE1c"), __jsx("div", {
        className: "so-tien"
      }, "0")), __jsx("div", {
        className: "block-row"
      }, __jsx("div", {
        className: "main-title"
      }, "T\u1ED5ng thu nh\u1EADp"), __jsx("div", {
        className: "so-tong"
      }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["formatNumber0"])(tongThuNhap)))));
    }
  }]);

  return BangKeTaiSan;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cashFlowReducer: state.cashFlowReducer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(BangKeTaiSan));

/***/ })

})
//# sourceMappingURL=cashflow.js.77bba6105f801a741226.hot-update.js.map