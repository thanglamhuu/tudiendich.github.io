webpackHotUpdate("static\\development\\pages\\dich-truyen-gg-trans.js",{

/***/ "./components/tuDien/DichTruyenGoogleTransComponent.js":
/*!*************************************************************!*\
  !*** ./components/tuDien/DichTruyenGoogleTransComponent.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DictComponent; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chinese-to-pinyin */ "./node_modules/chinese-to-pinyin/index.js");
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var translation_google__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translation-google */ "./node_modules/translation-google/index.js");
/* harmony import */ var translation_google__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(translation_google__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loader */ "./components/tuDien/loader.js");
/* harmony import */ var _ChuHanKhongBacKinh__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ChuHanKhongBacKinh */ "./components/tuDien/ChuHanKhongBacKinh.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");
/* harmony import */ var _dict_book_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dict-book-data */ "./components/tuDien/dict-book-data.js");
/* harmony import */ var _utils_analystics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/analystics */ "./utils/analystics.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;











 // var sample = 'Quacking và giết! Nghe những lời của Dao Gushu, vẻ mặt của Shenqi.\n\n Mở một mình giống như một con kiến! Nó đã hoàn toàn vượt quá nhận.';

var sample = '在他左右两边,有七位九成神性境强者。';
var pathDictHanVietThayThe = '/static/dictHanVietGoogleTransTaCoNhatKiem.json';
var pathDictThayThe = '/static/googleTransTaCoNhatKiem.json';

function updateNghiaViet(that) {
  var _that$state = that.state,
      typingChinesse = _that$state.typingChinesse,
      dict = _that$state.dict;
  var nghiaViet = '';
  if (!typingChinesse) return;
  nghiaViet = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["xoaKiTuThuaCopyTuTrang"])(typingChinesse);

  for (var word in dict) {
    nghiaViet = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(nghiaViet, word, dict[word].nghia);
  }

  that.setState({
    nghiaViet: nghiaViet
  });
}

function updateDictThayThe(that, dictThayThe) {
  var dict = that.state.dict;
  that.setState({
    dict: dictThayThe,
    newNghia: '',
    newWord: '',
    loading: false
  });
}

var DictComponent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DictComponent, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DictComponent, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, props;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _ref.req;
              // Inherit standard props from the Page (i.e. with session data)
              props = {}; // If running on server, perform Async call

              if (true) {
                _context.next = 15;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_dict_book_data__WEBPACK_IMPORTED_MODULE_17__["default"].getDictBookData());

            case 6:
              props.dictBook = _context.sent;
              _context.next = 9;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_dict_book_data__WEBPACK_IMPORTED_MODULE_17__["default"].getDictTruyenData());

            case 9:
              props.dictTruyen = _context.sent;
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              props.error = "Unable to fetch AsyncData on server";

            case 15:
              return _context.abrupt("return", props);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 12]]);
    }
  }]);

  function DictComponent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DictComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DictComponent).call(this, props));
    var words = props.words;
    _this.state = {
      loading: true,
      nghiaViet: '',
      typingChinesse: sample,
      chinesse: '',
      hanViet: '',
      bacKinh: '',
      dictHv: {},
      dict: {}
    }; // axios.get('https://tv.nhidonghocphat.com/dictClient.json').then((res) => {
    // axios.get('https://raw.githubusercontent.com/thanglamhuu/nddhp.github.io/master/dictClient.json').then((res) => {

    axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(pathDictHanVietThayThe).then(function (res) {
      _this.setState({
        dictHv: res.data,
        loading: false
      });
    });
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(pathDictThayThe).then(function (res) {
      updateDictThayThe(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), res.data);
    });
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('/static/baiChuHan.txt').then(function (res) {
      _this.setState({
        typingChinesse: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["xoaKiTuThuaCopyTuTrang"])(res.data)
      });
    });
    _this.onChangeHandlerNewHanViet = _this.onChangeHandlerNewHanViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeHandlerNewNghia = _this.onChangeHandlerNewNghia.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeHandlerChuHan = _this.onChangeHandlerChuHan.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeHandlerHanViet = _this.onChangeHandlerHanViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeHandlerBacKinh = _this.onChangeHandlerBacKinh.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onHtmlChangeNghiaViet = _this.onHtmlChangeNghiaViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.lamMinVanBan = _this.lamMinVanBan.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.trans = _this.trans.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.updateNghia = _this.updateNghia.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.updateTudien = _this.updateTudien.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.reportNew = _this.reportNew.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DictComponent, [{
    key: "onHtmlChangeNghiaViet",
    value: function onHtmlChangeNghiaViet(e) {
      this.setState({
        nghiaViet: e.target.value
      });
    }
  }, {
    key: "onChangeHandlerChuHan",
    value: function onChangeHandlerChuHan(e) {
      this.setState({
        typingChinesse: e.target.value
      });
    }
  }, {
    key: "onChangeHandlerHanViet",
    value: function onChangeHandlerHanViet(e) {
      this.setState({
        hanViet: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["correctTyping"])(e.target.value)
      });
    }
  }, {
    key: "onChangeHandlerNewNghia",
    value: function onChangeHandlerNewNghia(e) {
      this.setState({
        newNghia: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["correctTyping"])(e.target.value)
      });
    }
  }, {
    key: "onChangeHandlerNewHanViet",
    value: function onChangeHandlerNewHanViet(e) {
      this.setState({
        newHanViet: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["correctTyping"])(e.target.value)
      });
    }
  }, {
    key: "onChangeHandlerBacKinh",
    value: function onChangeHandlerBacKinh(e) {
      this.setState({
        bacKinh: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["correctTyping"])(e.target.value)
      });
    }
  }, {
    key: "lamMinVanBan",
    value: function lamMinVanBan() {
      var _this$state = this.state,
          typingChinesse = _this$state.typingChinesse,
          dict = _this$state.dict;
      typingChinesse = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["xoaKiTuThuaCopyTuTrang"])(typingChinesse);
      this.setState({
        typingChinesse: typingChinesse
      });
      console.log("lamMinVanBan");
      _utils_analystics__WEBPACK_IMPORTED_MODULE_18__["trackEvent"]('Dich truyen', 'lam min', 'lam min');
    }
  }, {
    key: "reportNew",
    value: function reportNew() {
      var _this$state2 = this.state,
          newWord = _this$state2.newWord,
          newHanViet = _this$state2.newHanViet,
          newNghia = _this$state2.newNghia;
      var json = "{\"chuHan\":\"".concat(newWord, "\",\"hanViet\":\"").concat(newHanViet, "\",\"bacKinh\":\"").concat(chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_8___default()(newWord), "\",\"nghia\":\"").concat(newNghia, "\"},");
      _utils_analystics__WEBPACK_IMPORTED_MODULE_18__["trackEvent"]("Report", "newWord", json);
      this.setState({
        newWord: '',
        newHanViet: '',
        newNghia: ''
      });
      return json;
    }
  }, {
    key: "updateTudien",
    value: function updateTudien() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(pathDictHanVietThayThe).then(function (res) {
        _this2.setState({
          dictHv: res.data
        });
      });
    }
  }, {
    key: "trans",
    value: function trans() {
      var _this3 = this;

      var _this$state3 = this.state,
          typingChinesse = _this$state3.typingChinesse,
          chinesse = _this$state3.chinesse,
          dictHv = _this$state3.dictHv;
      typingChinesse = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["xoaKiTuThuaCopyTuTrang"])(typingChinesse);

      for (var word in dictHv) {
        typingChinesse = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(typingChinesse, word, dictHv[word]);
      }

      console.log('trans typingChinesse', typingChinesse);
      var nghiaViet = '';
      translation_google__WEBPACK_IMPORTED_MODULE_9___default()(typingChinesse, {
        from: 'zh-CN',
        to: 'vi'
      }).then(function (res) {
        nghiaViet = res.text;

        _this3.setState({
          nghiaViet: nghiaViet
        }); //=> 这是Google翻译


        console.log('trans', res.from.language.iso);

        _this3.setState({
          nghiaViet: nghiaViet
        }); //=> en

      })["catch"](function (err) {
        console.error(err);
      }); // updateNghiaViet(this);
    }
  }, {
    key: "updateNghia",
    value: function updateNghia(i, nghia) {
      var chinesse = this.state.chinesse;
      chinesse[i].nghiaViet = nghia;
      this.setState({
        chinesse: chinesse
      });
      updateNghiaViet(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state4 = this.state,
          nghiaViet = _this$state4.nghiaViet,
          typingChinesse = _this$state4.typingChinesse,
          chinesse = _this$state4.chinesse,
          bacKinh = _this$state4.bacKinh,
          loading = _this$state4.loading,
          dict = _this$state4.dict,
          newWord = _this$state4.newWord,
          newHanViet = _this$state4.newHanViet,
          newNghia = _this$state4.newNghia; // Build Cards for Listing

      var chuHans = '',
          i = 0;

      if (loading) {
        chuHans = __jsx(_loader__WEBPACK_IMPORTED_MODULE_14__["default"], null);
      } else if (chinesse) {
        chuHans = chinesse.map(function (item) {
          return __jsx(_ChuHanKhongBacKinh__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: i++,
            key: Math.random(),
            chinesse: item.chinesse,
            hanViet: item.hanViet,
            bacKinh: item.bacKinh,
            nghias: item.nghias,
            nghiaViet: item.nghiaViet,
            updateNghia: _this4.updateNghia,
            dot: item.dot
          });
        });
      }

      return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx("h2", {
        className: "h1Title"
      }, "D\u1ECBch truy\u1EC7n")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        style: {
          paddingTop: '10px'
        }
      }, __jsx("a", {
        href: "http://m.qbyqxs.com/xiaoshuo/70022/all.html?sort=-1&page=5",
        target: "_blank"
      }, "_M\u1EE5c L\u1EE5c"), __jsx("br", null), "...", __jsx("a", {
        href: "https://tamlinh247.vn/truyen-hau-due-kiem-than/",
        target: "_blank"
      }, "_TamLinh247"), "\u0110\u1ED1i chi\u1EBFu", __jsx("a", {
        href: "http://m.qbyqxs.com/xiaoshuo/70022/read_39068387.html",
        target: "_blank"
      }, "_\u7B2C\u4E03\u767E\u4E03\u5341\u7AE0"), "...", __jsx("a", {
        href: "https://tamlinh247.vn/truyen-hau-due-kiem-than/chuong-3376/",
        target: "_blank"
      }, "chuong-3376")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        style: {
          width: '100%'
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
        "for": "inputChuHan"
      }, "Nh\u1EADp n\u1ED9i dung ch\u1EEF H\xE1n"), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "txtAutoSize",
        id: "inputChuHan",
        placeholder: "Ch\u1EEF H\xE1n",
        value: typingChinesse,
        onChange: this.onChangeHandlerChuHan
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        style: {
          paddingTop: '10px'
        }
      }, __jsx("h3", null, "K\u1EBFt qu\u1EA3"), __jsx("div", {
        style: {
          width: '70%',
          textAlign: 'center'
        }
      }, __jsx("button", {
        className: "btnProcess",
        onClick: this.updateTudien,
        style: {
          marginLeft: 100
        }
      }, "L\u1EA5y l\u1EA1i t\u1EEB \u0111i\u1EC3n"), __jsx("button", {
        className: "btnProcess",
        onClick: this.trans,
        style: {
          marginLeft: 100
        }
      }, "L\u1EA5y k\u1EBFt qu\u1EA3 sang ngh\u0129a Vi\u1EC7t")), __jsx("h4", null, "Ch\u1EC9nh s\u1EEDa l\u1EA1i n\u1ED9i dung b\u1EA3n d\u1ECBch t\u1EA1i \u0111\xE2y"), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "txtAutoSize",
        id: "inputNghiaViet",
        placeholder: "d\u1ECBch ngh\u0129a",
        value: nghiaViet,
        onChange: this.onHtmlChangeNghiaViet
      })));
    }
  }]);

  return DictComponent;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


DictComponent.defaultProps = {
  error: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {};

/***/ })

})
//# sourceMappingURL=dich-truyen-gg-trans.js.ada9bbe668c3e2a044aa.hot-update.js.map