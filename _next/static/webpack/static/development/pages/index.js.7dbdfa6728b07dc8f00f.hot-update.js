webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/tuDien/DictComponent.js":
/*!********************************************!*\
  !*** ./components/tuDien/DictComponent.js ***!
  \********************************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chinese-to-pinyin */ "./node_modules/chinese-to-pinyin/index.js");
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loader */ "./components/tuDien/loader.js");
/* harmony import */ var _ChuHan__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ChuHan */ "./components/tuDien/ChuHan.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");
/* harmony import */ var _dict_book_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dict-book-data */ "./components/tuDien/dict-book-data.js");
/* harmony import */ var _utils_analystics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/analystics */ "./utils/analystics.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;












function getDisplayHanViet(mean) {
  if (mean && mean["hv"]) {
    mean = mean["hv"].split(',');

    if (mean.length === 0) {
      mean = '';
    } else if (mean.length === 1) {
      mean = mean[0];
    } else {
      mean = "".concat(mean[0]);
    }

    return mean;
  } else {
    _utils_analystics__WEBPACK_IMPORTED_MODULE_18__["trackEvent"]('ThieuTu', 'Han', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(mean));
    return '';
  }
}

function processWord(chinessArray, i, dict, textScripts) {
  var mean;
  var word;

  if (i < chinessArray.length - 5) {
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 2]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 3]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 4]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 5]);
    mean = dict[word];

    if (mean) {
      textScripts.push({
        id: i,
        chinesse: word,
        hanViet: mean["hv"],
        bacKinh: '',
        nghiaViet: getDisplayHanViet(mean),
        nghias: mean["nghia"]
      });
      return 6;
    }
  }

  if (i < chinessArray.length - 4) {
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 2]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 3]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 4]);
    mean = dict[word];

    if (mean) {
      textScripts.push({
        id: i,
        chinesse: word,
        hanViet: mean["hv"],
        bacKinh: '',
        nghiaViet: getDisplayHanViet(mean),
        nghias: mean["nghia"]
      });
      return 5;
    }
  }

  if (i < chinessArray.length - 3) {
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 2]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 3]);
    mean = dict[word];

    if (mean) {
      textScripts.push({
        id: i,
        chinesse: word,
        hanViet: mean["hv"],
        bacKinh: '',
        nghiaViet: getDisplayHanViet(mean),
        nghias: mean["nghia"]
      });
      return 4;
    }
  }

  if (i < chinessArray.length - 2) {
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 2]);
    mean = dict[word];

    if (mean) {
      textScripts.push({
        id: i,
        chinesse: word,
        hanViet: mean["hv"],
        bacKinh: '',
        nghiaViet: getDisplayHanViet(mean),
        nghias: mean["nghia"]
      });
      return 3;
    }
  }

  if (i < chinessArray.length - 1) {
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]);
    mean = dict[word];

    if (mean) {
      textScripts.push({
        id: i,
        chinesse: word,
        hanViet: mean["hv"],
        bacKinh: '',
        nghiaViet: getDisplayHanViet(mean),
        nghias: mean["nghia"]
      });
      return 2;
    }
  }

  mean = dict[Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i])];
  var hv = '';

  if (mean) {
    hv = mean["hv"];
  }

  textScripts.push({
    id: i,
    chinesse: chinessArray[i],
    hanViet: hv,
    bacKinh: '',
    nghiaViet: getDisplayHanViet(mean),
    nghias: mean ? mean["nghia"] : ''
  });
  return 1;
}

function getChuHanOneWord(chinesse, dict) {
  var chinessArray = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinesseV2"])(chinesse);
  var textScripts = [];
  var mean;
  var word;
  var i = 0;

  for (i = 0; i < chinessArray.length; i++) {
    mean = dict[Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinneseNoSign"])(chinessArray[i])];
    var hv = '';

    if (mean) {
      hv = mean["hv"];
    }

    textScripts.push({
      id: i,
      chinesse: chinessArray[i],
      hanViet: hv,
      bacKinh: '',
      nghiaViet: getDisplayHanViet(mean),
      nghias: mean ? mean["nghia"] : ''
    });
  }

  return textScripts;
}

function parserScript(chinesse, dict) {
  var chinessArray = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["chuanHoaChinesseV2"])(chinesse);
  var textScripts = [];
  var i = 0;

  for (i = 0; i < chinessArray.length;) {
    i += processWord(chinessArray, i, dict, textScripts);
  }

  return textScripts;
}

function getDotWord(key) {
  return [{
    id: key,
    chinesse: '.',
    hanViet: '.',
    bacKinh: '.',
    nghiaViet: '.',
    nghias: '.'
  }];
}

function parserScriptCau(cau, dict) {
  var cacDoan = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(cau, ',', ',#'), '，', ',#'), '：', ':#'), ':', ':#').split('#');
  var j = 0;
  var textScripts = [];

  for (j = 0; j < cacDoan.length; j++) {
    var doan = parserScript(cacDoan[j], dict);
    console.log(cacDoan[j], doan);

    if (cacDoan[j]) {
      var word = doan[doan.length - 1];
      doan[doan.length - 1]['dot'] = cacDoan[j].substr(cacDoan[j].length - 1);
      textScripts = textScripts.concat(doan);
    }
  }

  if (textScripts && textScripts[0]) {
    textScripts[0]["nghiaViet"] = "".concat(textScripts[0]["nghiaViet"].substr(0, 1).toUpperCase()).concat(textScripts[0]["nghiaViet"].substr(1));
  }

  return textScripts;
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
                _context.next = 12;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_dict_book_data__WEBPACK_IMPORTED_MODULE_17__["default"].getDictBookData());

            case 6:
              props.dictBook = _context.sent;
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              props.error = "Unable to fetch AsyncData on server";

            case 12:
              return _context.abrupt("return", props);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 9]]);
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
      typingChinesse: '',
      chinesse: '',
      hanViet: '',
      bacKinh: '',
      dict: {}
    }; // axios.get('https://tv.nhidonghocphat.com/dictClient.json').then((res) => {

    axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('https://raw.githubusercontent.com/thanglamhuu/nddhp.github.io/master/dictClient.json').then(function (res) {
      _this.setState({
        dict: res.data,
        newNghia: '',
        newWord: '',
        loading: false
      });
    });
    _this.onChangeHandlerNewWord = _this.onChangeHandlerNewWord.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeHandlerNewHanViet = _this.onChangeHandlerNewHanViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeHandlerNewNghia = _this.onChangeHandlerNewNghia.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeHandlerChuHan = _this.onChangeHandlerChuHan.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeHandlerHanViet = _this.onChangeHandlerHanViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChangeHandlerBacKinh = _this.onChangeHandlerBacKinh.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onHtmlChangeNghiaViet = _this.onHtmlChangeNghiaViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.transToHanViet = _this.transToHanViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.trans = _this.trans.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.updateNghia = _this.updateNghia.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
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
    key: "onChangeHandlerNewWord",
    value: function onChangeHandlerNewWord(e) {
      var chuHan = e.target.value;
      var dict = this.state.dict;
      var textScripts = getChuHanOneWord(chuHan, dict);
      var hanViet = '';
      textScripts.map(function (item) {
        hanViet += ' ' + item.hanViet;
        return '';
      });
      this.setState({
        newWord: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["correctTyping"])(chuHan),
        newHanViet: hanViet.trim()
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
    key: "transToHanViet",
    value: function transToHanViet() {
      var _this$state = this.state,
          typingChinesse = _this$state.typingChinesse,
          dict = _this$state.dict;
      var textScripts = [];
      var cacCau = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["replaceAll"])(typingChinesse, '.', '.#'), '. ', '.#'), '? ', '?#'), '。', '.#').split('#');
      var i = 0;

      for (i = 0; i < cacCau.length; i++) {
        var cau = parserScriptCau(cacCau[i], dict);

        if (cacCau[i]) {
          console.log(cacCau[i]);
          var word = cau[cau.length - 1];
          cau[cau.length - 1]['dot'] = cacCau[i].substr(cacCau[i].length - 1);
          textScripts = textScripts.concat(cau);
        }
      }

      this.setState({
        chinesse: textScripts
      });
    }
  }, {
    key: "reportNew",
    value: function reportNew() {
      var _this$state2 = this.state,
          newWord = _this$state2.newWord,
          newHanViet = _this$state2.newHanViet,
          newNghia = _this$state2.newNghia;
      var json = "{\"chuHan\":\"".concat(newWord, "\",\"hanViet\":\"").concat(newHanViet, "\",\"bacKinh\":\"").concat(chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_9___default()(newWord), "\",\"nghia\":\"").concat(newNghia, "\"},");
      _utils_analystics__WEBPACK_IMPORTED_MODULE_18__["trackEvent"]("Report", "newWord", json);
      this.setState({
        newWord: '',
        newHanViet: '',
        newNghia: ''
      });
      return json;
    }
  }, {
    key: "trans",
    value: function trans() {
      var _this$state3 = this.state,
          chinesse = _this$state3.chinesse,
          dict = _this$state3.dict;
      var nghiaViet = ''; // Build Cards for Listing

      var chuHans = chinesse.map(function (item) {
        var nghiaViet_lastest = item.nghiaViet || item.hanViet || '';

        if (item.dot) {
          nghiaViet += "".concat(nghiaViet_lastest).concat(item.dot, " ");
        } else {
          nghiaViet += "".concat(nghiaViet_lastest, " ");
        }
      });
      this.setState({
        nghiaViet: nghiaViet
      });
      _utils_analystics__WEBPACK_IMPORTED_MODULE_18__["trackEvent"]('DichDoan', 'trans', this.state.chinesse);
    }
  }, {
    key: "updateNghia",
    value: function updateNghia(i, nghia) {
      var chinesse = this.state.chinesse;
      chinesse[i].nghiaViet = nghia;
      this.setState({
        chinesse: chinesse
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          nghiaViet = _this$state4.nghiaViet,
          typingChinesse = _this$state4.typingChinesse,
          chinesse = _this$state4.chinesse,
          bacKinh = _this$state4.bacKinh,
          loading = _this$state4.loading,
          dict = _this$state4.dict,
          newWord = _this$state4.newWord,
          newHanViet = _this$state4.newHanViet,
          newNghia = _this$state4.newNghia;
      console.log(chinesse); // Build Cards for Listing

      var chuHans = '',
          i = 0;

      if (loading) {
        chuHans = __jsx(_loader__WEBPACK_IMPORTED_MODULE_14__["default"], null);
      } else if (chinesse) {
        chuHans = chinesse.map(function (item) {
          return __jsx(_ChuHan__WEBPACK_IMPORTED_MODULE_15__["default"], {
            id: i++,
            key: Math.random(),
            chinesse: item.chinesse,
            hanViet: item.hanViet,
            bacKinh: item.bacKinh,
            nghias: item.nghias,
            nghiaViet: item.nghiaViet,
            updateNghia: _this2.updateNghia,
            dot: item.dot
          });
        });
      }

      return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx("h2", {
        className: "h1Title"
      }, "Tra \u0111o\u1EA1n ch\u1EEF H\xE1n")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
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
      })), __jsx("button", {
        className: "btnProcess",
        onClick: this.transToHanViet
      }, "L\u1EA5y t\u1EEB \u0111i\u1EC3n")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
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
        onClick: this.trans,
        style: {
          marginLeft: 100
        }
      }, "L\u1EA5y k\u1EBFt qu\u1EA3 sang ngh\u0129a Vi\u1EC7t"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx("div", {
        className: "divResult"
      }, __jsx("h5", null, "Click l\xEAn ch\u1EEF \u0111\u1EC3 xem t\u1EEB \u0111i\u1EC3n v\xE0 ch\u1ECDn ngh\u0129a Vi\u1EC7t"), __jsx("div", {
        className: "chuHanList"
      }, chuHans)), __jsx("div", {
        className: "divResult"
      }, __jsx("h4", null, "Ch\u1EC9nh s\u1EEDa l\u1EA1i n\u1ED9i dung b\u1EA3n d\u1ECBch t\u1EA1i \u0111\xE2y"), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "txtAutoSize",
        id: "inputNghiaViet",
        placeholder: "d\u1ECBch ngh\u0129a",
        value: nghiaViet,
        onChange: this.onHtmlChangeNghiaViet
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        style: {
          paddingTop: '10px'
        }
      }, __jsx("h5", null, "Y\xEAu c\u1EA7u th\xEAm t\u1EEB m\u1EDBi"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], null, __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "txtInput",
        id: "newWord",
        placeholder: "t\u1EEB m\u1EDBi",
        value: newWord,
        onChange: this.onChangeHandlerNewWord
      }), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "txtInput",
        id: "newHanViet",
        placeholder: "\xE2m H\xE1n Vi\u1EC7t",
        value: newHanViet,
        onChange: this.onChangeHandlerNewHanViet
      }), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "txtInput",
        id: "newNghia",
        placeholder: "ngh\u0129a",
        value: newNghia,
        onChange: this.onChangeHandlerNewNghia
      }), __jsx("button", {
        className: "btnProcess",
        onClick: this.reportNew,
        style: {
          marginTop: '-50px'
        }
      }, "\u0110\u1EC1 ngh\u1ECB th\xEAm"))));
    }
  }]);

  return DictComponent;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);


DictComponent.defaultProps = {
  error: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {};

/***/ })

})
//# sourceMappingURL=index.js.7dbdfa6728b07dc8f00f.hot-update.js.map