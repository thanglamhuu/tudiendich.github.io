webpackHotUpdate("static\\development\\pages\\tu-dien\\bt\\thembk.js",{

/***/ "./pages/tu-dien/bt/thembk.js":
/*!************************************!*\
  !*** ./pages/tu-dien/bt/thembk.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/get */ "./node_modules/@babel/runtime-corejs2/helpers/esm/get.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var _components_tuDien_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/tuDien/page */ "./components/tuDien/page.js");
/* harmony import */ var _utils_analystics__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../utils/analystics */ "./utils/analystics.js");
/* harmony import */ var _components_tuDien_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/tuDien/loader */ "./components/tuDien/loader.js");
/* harmony import */ var _components_tuDien_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/tuDien/layout */ "./components/tuDien/layout.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../utils/utils */ "./utils/utils.js");











var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;










function getHanViet(dict, chinesse) {
  var result = '',
      i = 0,
      hanViet;
  var missing, mean;

  for (i = 0; i < chinesse.length; i++) {
    mean = dict[chinesse[i]];

    if (mean) {
      hanViet = mean["hv"].trim();

      if (hanViet.indexOf(' ') > 0) {
        hanViet = '(' + hanViet + ')';
      }
    } else {
      hanViet = '';
      missing += ',' + chinesse[i];
    }

    result += hanViet + ' ';
  }

  if (missing) {
    _utils_analystics__WEBPACK_IMPORTED_MODULE_16__["trackEvent"]("Report", "newWordImport", missing);
    console.log('Từ điển thiếu', missing);
  }

  return result.trim();
}

var _default =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _Page);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, query, props;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _ref.req, query = _ref.query;

              Object(_babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(_default), "getInitialProps", this).call(this, {
                req: req,
                query: query
              });

              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(Object(_babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(_default), "getInitialProps", this).call(this, {
                req: req
              }));

            case 4:
              props = _context.sent;
              return _context.abrupt("return", props);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(_default).call(this, props));
    var words = props.words;
    _this.state = {
      loading: true,
      content: '',
      chinesse: '1	Điện thoại nội hạt	市内电话	shì nèi diànhuà',
      hanViet: '',
      bacKinh: '',
      dict: {}
    };
    axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('https://raw.githubusercontent.com/thanglamhuu/nddhp.github.io/master/dictClient.json').then(function (res) {
      _this.setState({
        dict: res.data,
        loading: false
      });
    });
    _this.onChangeHandlerChuHan = _this.onChangeHandlerChuHan.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, [{
    key: "onChangeHandlerChuHan",
    value: function onChangeHandlerChuHan(e) {
      var dict = this.state.dict;
      var chinesse = e.target.value;
      var chuHans = [];
      var words = chinesse.split('\n');
      var means = [],
          word = '',
          hanViet = '';
      var i = 0;

      for (i = 0; i < words.length; i++) {
        try {
          hanViet = '';
          word = words[i].trim();
          word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_19__["replaceAll"])(word, ') ', '): ');
          word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_19__["replaceAll"])(word, ') :', '): ');
          tuHaiBen = word.split('):');
          chuHans.push({
            "chuHan": means[2].trim(),
            "hanViet": getHanViet(dict, means[2].trim()),
            "bacKinh": means[3].trim(),
            "nghia": means[1].trim()
          });
        } catch (e) {
          console.log(word, means, e);
        }
      }

      this.setState({
        chinesse: chinesse,
        chuHans: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_19__["replaceAll"])(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(chuHans), '},{', '},\n{')
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          chuHans = _this$state.chuHans,
          chinesse = _this$state.chinesse;
      _utils_analystics__WEBPACK_IMPORTED_MODULE_16__["trackPageView"]("bt-convert"); // GA.trackEvent('TraTu', 'Han', word);

      return __jsx(_components_tuDien_layout__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        navmenu: false,
        container: false
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, __jsx("h2", {
        className: "h1Title"
      }, "T\u1EA1o danh s\xE1ch t\u1EEB import")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
        style: {
          width: '100%'
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        "for": "inputChuHan"
      }, "Nh\u1EADp n\u1ED9i dung ch\u1EEF H\xE1n"), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "txtAutoSize",
        id: "inputChuHan",
        placeholder: "Ch\u1EEF H\xE1n",
        value: chinesse,
        onChange: this.onChangeHandlerChuHan
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], null, __jsx("h4", null, "K\u1EBFt qu\u1EA3"), __jsx("span", null, "Vui l\xF2ng click l\xEAn t\u1EEBng ch\u1EEF \u0111\u1EC3 xem t\u1EEB \u0111i\u1EC3n"), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "txtAutoSize",
        id: "inputChuHan",
        placeholder: "Ch\u1EEF H\xE1n",
        value: chuHans
      }))));
    }
  }]);

  return _default;
}(_components_tuDien_page__WEBPACK_IMPORTED_MODULE_15__["default"]);



/***/ })

})
//# sourceMappingURL=thembk.js.54a11c2d445043ce45ac.hot-update.js.map