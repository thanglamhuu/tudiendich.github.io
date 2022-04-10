webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/tuDien/ChuHan.js":
/*!*************************************!*\
  !*** ./components/tuDien/ChuHan.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChuHan; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_analystics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/analystics */ "./utils/analystics.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  width: 100%;\n  line-height: 1;\n  border-radius: 0.2rem;\n  min-height: 400px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  font-family: 'KaiTi', \"Hiragino Sans GB\", \"Microsoft YaHei\",\"WenQuanYi Micro Hei\", sans-serif;\n  font-size: 300%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  max-width: 220px;\n  padding: 2px 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  display:none;\n  display:block;\n  width:100%;\n  height:0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var BreakLine = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
var AudioD = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].audio(_templateObject2());
var BigText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span(_templateObject3());
var IframeI = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].iframe(_templateObject4());

function getDisplayHanViet(mean) {
  if (mean) {
    mean = mean.split(',');

    if (mean.length === 0) {
      mean = '';
    } else if (mean.length === 1) {
      mean = mean[0];
    } else {
      mean = "".concat(mean[0], " ...");
    }
  }

  return mean;
}

var ChuHan =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ChuHan, _Component);

  function ChuHan(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChuHan);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChuHan).call(this, props));
    _this.state = {
      modal: false,
      nghiaViet: _this.props.nghiaViet,
      bacKinh: _this.props.bacKinh
    };
    _this.onHtmlChangeNghiaViet = _this.onHtmlChangeNghiaViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.nghiaButtonClick = _this.nghiaButtonClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChuHan, [{
    key: "onHtmlChangeNghiaViet",
    value: function onHtmlChangeNghiaViet(e) {
      var nghiaViet = e.target.value;

      if (nghiaViet.indexOf('\n') >= 0) {
        this.setState({
          modal: !this.state.modal
        });
      } else {
        this.setState({
          nghiaViet: nghiaViet
        });
        this.props.updateNghia(this.props.id, nghiaViet);
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
      _utils_analystics__WEBPACK_IMPORTED_MODULE_9__["trackEvent"]('ChuHan', 'Han', this.props.chinesse);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var mp3Link = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["getSoundFile"])(this.props.bacKinh);
      var bacKinh = this.bacKinh.bacKinh;
      var au = new Audio("http://tv.nhidonghocphat.com/BasicSound/".concat(mp3Link));
      au.play();
      _utils_analystics__WEBPACK_IMPORTED_MODULE_9__["trackEvent"]('ChuHan', 'BacKinh', this.props.bacKinh);
    }
  }, {
    key: "nghiaButtonClick",
    value: function nghiaButtonClick(nghia) {
      this.setState({
        nghiaViet: nghia
      });
      this.props.updateNghia(this.props.id, nghia);
      _utils_analystics__WEBPACK_IMPORTED_MODULE_9__["trackEvent"]('ChuHan', 'BacKinh', this.props.bacKinh);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      try {
        var _this$props = this.props,
            id = _this$props.id,
            chinesse = _this$props.chinesse,
            hanViet = _this$props.hanViet,
            bacKinh = _this$props.bacKinh,
            nghiaViet = _this$props.nghiaViet,
            dot = _this$props.dot; // console.log(chinesse, bacKinh);

        if (dot) {
          nghiaViet = "".concat(nghiaViet).concat(dot, " ");
        }

        var nghias = this.props.nghias;
        var modal = this.state.modal;

        if (chinesse === '\n') {
          return __jsx(BreakLine, null);
        }

        if (chinesse.includes('.mp3')) {
          return __jsx(AudioD, {
            className: "no-print",
            controls: true,
            loop: true,
            src: "https://tv.nhidonghocphat.com/".concat(chinesse),
            type: "audio/mp3"
          });
        }

        if (chinesse === '#B') {
          return '';
        }

        var bkCom = bacKinh && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          style: {
            padding: 1,
            margin: 1
          }
        }, __jsx("button", {
          className: "btnBacKinh",
          onClick: this.handleClick
        }, bacKinh));

        var nghiaButtons = '',
            i = 0;

        if (nghias) {
          nghias = "".concat(nghias, ",").concat(hanViet);
          nghiaButtons = nghias.split(',').map(function (item) {
            return __jsx("button", {
              key: i++,
              className: "btnBacKinh",
              onClick: function onClick() {
                return _this2.nghiaButtonClick(item);
              }
            }, item);
          });
        }

        return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
          key: "".concat(id),
          className: "chuHanPrint",
          style: {
            borderLeftWidth: 0,
            borderRightWidth: 0
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], {
          style: {
            padding: 0
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], {
          style: {
            padding: 0
          }
        }, __jsx("button", {
          className: "btnChuHan",
          id: "btnChuHan".concat(id),
          onClick: this.toggle
        }, chinesse)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          className: "lblGray",
          style: {
            padding: 1,
            margin: 1,
            fontSize: 18
          }
        }, __jsx("small", null, getDisplayHanViet(hanViet))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          style: {
            padding: 1,
            margin: 1,
            fontSize: 18
          }
        }, __jsx("small", null, nghiaViet)), bkCom)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
          isOpen: modal,
          toggle: this.toggle,
          className: this.props.className
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
          toggle: this.toggle
        }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["chuanHoaChinneseNoSign"])(chinesse)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], null, "Ch\u1ECDn l\u1EA1i ngh\u0129a v\xE0 ch\u1EC9nh n\u1EBFu c\u1EA7n", nghiaButtons, "Ngh\u0129a \u0111\u01B0\u1EE3c ch\u1ECDn \u0111\u1EC3 d\u1ECBch l\xE0 (Enter \u0111\u1EC3 \u0111\xF3ng)", __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "txtAutoSize",
          id: "inputChuHan",
          placeholder: "Ngh\u0129a Vi\u1EC7t",
          value: nghiaViet,
          onChange: this.onHtmlChangeNghiaViet
        }), __jsx("br", null), __jsx("h3", null, "Ngh\u0129a chi ti\u1EBFt"), __jsx(IframeI, {
          src: "https://tv.nhidonghocphat.com/dictHtmls/".concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_11__["chuanHoaChinneseNoSign"])(chinesse), ".htm")
        }))));
      } catch (e) {
        console.log('error', e);
        return __jsx(Error, {
          title: "Ch\u1EEF H\xE1n",
          content: e + ''
        });
      }
    }
  }]);

  return ChuHan;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


ChuHan.defaultProps = {
  error: null,
  chinesse: '',
  chinessNoSign: '',
  hanViet: '',
  bacKinh: '',
  id: ''
};

/***/ })

})
//# sourceMappingURL=index.js.52af1de4a54ed4287f6e.hot-update.js.map