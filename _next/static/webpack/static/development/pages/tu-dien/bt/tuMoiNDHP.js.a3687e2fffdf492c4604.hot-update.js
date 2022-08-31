webpackHotUpdate("static\\development\\pages\\tu-dien\\bt\\tuMoiNDHP.js",{

/***/ "./pages/tu-dien/bt/tuMoiNDHP.js":
/*!***************************************!*\
  !*** ./pages/tu-dien/bt/tuMoiNDHP.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/get */ "./node_modules/@babel/runtime-corejs2/helpers/esm/get.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! chinese-to-pinyin */ "./node_modules/chinese-to-pinyin/index.js");
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var _components_tuDien_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/tuDien/page */ "./components/tuDien/page.js");
/* harmony import */ var _utils_analystics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../utils/analystics */ "./utils/analystics.js");
/* harmony import */ var _components_tuDien_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/tuDien/loader */ "./components/tuDien/loader.js");
/* harmony import */ var _components_tuDien_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/tuDien/layout */ "./components/tuDien/layout.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../utils/utils */ "./utils/utils.js");










var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;












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
    console.log('Từ điển thiếu', missing);
  }

  return result.trim();
}

var _default =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _Page);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, query, props;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _ref.req, query = _ref.query;

              Object(_babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(_default), "getInitialProps", this).call(this, {
                req: req,
                query: query
              });

              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_babel_runtime_corejs2_helpers_esm_get__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(_default), "getInitialProps", this).call(this, {
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

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(_default).call(this, props));
    var words = props.words;
    _this.state = {
      loading: true,
      content: '',
      chinesse: '滲透(sấm thấu - shèn tòu): thấm vào\n可是(khả thị - kě shì): chính là\n末法(mạt pháp - mò fǎ): mạt pháp\n保障(bảo chướng - bǎo zhàng): bảo đảm\n大陸(đại lục - dà lù): đại lục\n寺院(tự viện - sì yuàn): chùa chiền\n落還情有可原(đọa lạc hoàn tình hữu khả nguyên - duò luò hái qíng yǒu kě yuán) : đọa lạc còn có thể tha thứ',
      hanViet: '',
      bacKinh: '',
      tuMoisJson: '',
      tuMois: '',
      dict: {}
    };
    axios__WEBPACK_IMPORTED_MODULE_12___default.a.get('https://raw.githubusercontent.com/thanglamhuu/nddhp.github.io/master/dictClient.json').then(function (res) {
      _this.setState({
        dict: res.data,
        loading: false
      });
    });
    _this.onChangeHandlerChuHan = _this.onChangeHandlerChuHan.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, [{
    key: "onChangeHandlerChuHan",
    value: function onChangeHandlerChuHan(e) {
      var dict = this.state.dict;
      var chinesse = e.target.value;
      var chuHans = [];
      var words = chinesse.split('\n');
      var means = [],
          word = '',
          chuHan = '',
          hanViet = '',
          bacKinh = '',
          tuHaiBen = '';
      var j = 0;
      var tuMois = '',
          tuMoisJson = '';
      var i = 0;

      for (i = 0; i < words.length; i++) {
        try {
          word = '', chuHan = '', hanViet = '', bacKinh = '';
          word = words[i].trim(); //滲透(sấm thấu - shèn tòu): thấm vào

          word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_20__["replaceAll"])(word, '：', ':');
          word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_20__["replaceAll"])(word, ' :', ':');
          word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_20__["replaceAll"])(word, ') :', ':');
          word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_20__["replaceAll"])(word, '):', ':');

          if (!lodash__WEBPACK_IMPORTED_MODULE_13___default.a.isEmpty(word)) {
            tuHaiBen = word.split(':'); //視(shì)之(zhī)自(zì)然(rán)

            var hanBks = tuHaiBen[0].split(':');

            for (j = 0; j < hanBks.length; j++) {
              var hanbk = hanBks[j].split('(');
              chuHan = hanbk[0];
              var hvbk = hanbk[1].split(' - ');
              hanViet = hvbk[0];
              bacKinh = hvbk[1]; // console.log('tuHaiBen',tuHaiBen,'hanbk',hanbk, 'chuHan',chuHan,'getHanViet(dict, chuHan)',getHanViet(dict, chuHan),'bacKinh',bacKinh);
            } //{chuHan:'滲透', hanViet:'sấm thấu', bacKinh:'shèn tòu', nghiaViet: 'thấm vào'}
            // tuMois += chuHan + '(' + getHanViet(dict, chuHan) + ' - ' + bacKinh + ') ' + tuHaiBen[1]  + '\n';
            // tuMois += '{"chuHan":"' + chuHan + '", "hanViet":"' + hanViet +'", "bacKinh":"' + bacKinh + '", "nghiaViet": "' + tuHaiBen[1]  + '"},\n';


            tuMoisJson += '{chuHan:"' + chuHan.trim() + '", hanViet:"' + hanViet.trim() + '", bacKinh:"' + bacKinh.trim() + '", nghiaViet: "' + tuHaiBen[1].trim() + '"},\n';
            tuMois += '{"chuHan":"' + chuHan.trim() + '", "hanViet":"' + hanViet.trim() + '", "bacKinh":"' + bacKinh.trim() + '", "nghiaViet": "' + tuHaiBen[1].trim() + '"},\n';
          }
        } catch (e) {
          console.log(word, means, e);
        }
      }

      this.setState({
        chinesse: chinesse,
        tuMois: tuMois,
        tuMoisJson: tuMoisJson
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          chuHans = _this$state.chuHans,
          chinesse = _this$state.chinesse,
          tuMois = _this$state.tuMois;
      _utils_analystics__WEBPACK_IMPORTED_MODULE_17__["trackPageView"]("bt-convert"); // GA.trackEvent('TraTu', 'Han', word);

      return __jsx(_components_tuDien_layout__WEBPACK_IMPORTED_MODULE_19__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        navmenu: false,
        container: false
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("h2", {
        className: "h1Title"
      }, "T\u1EA1o danh s\xE1ch t\u1EEB import")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        style: {
          width: '100%'
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        "for": "inputChuHan"
      }, "Nh\u1EADp n\u1ED9i dung ch\u1EEF H\xE1n"), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "txtAutoSize",
        id: "inputChuHan",
        placeholder: "Ch\u1EEF H\xE1n",
        value: chinesse,
        onChange: this.onChangeHandlerChuHan
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], null, __jsx("h4", null, "K\u1EBFt qu\u1EA3"), __jsx("span", null, "Vui l\xF2ng click l\xEAn t\u1EEBng ch\u1EEF \u0111\u1EC3 xem t\u1EEB \u0111i\u1EC3n"), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "txtAutoSize",
        id: "inputChuHan",
        placeholder: "T\u1EEB m\u1EDBi",
        value: tuMois
      }), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "txtAutoSize",
        id: "inputChuHan",
        placeholder: "T\u1EEB m\u1EDBi",
        value: tuMoisJson
      }))));
    }
  }]);

  return _default;
}(_components_tuDien_page__WEBPACK_IMPORTED_MODULE_16__["default"]);



/***/ })

})
//# sourceMappingURL=tuMoiNDHP.js.a3687e2fffdf492c4604.hot-update.js.map