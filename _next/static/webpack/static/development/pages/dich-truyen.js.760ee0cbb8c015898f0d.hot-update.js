webpackHotUpdate("static\\development\\pages\\dich-truyen.js",{

/***/ "./components/tuDien/DichTruyenGoogleTransComponent.js":
/*!*************************************************************!*\
  !*** ./components/tuDien/DichTruyenGoogleTransComponent.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DictComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! chinese-to-pinyin */ "./node_modules/chinese-to-pinyin/index.js");
/* harmony import */ var chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var translation_google__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! translation-google */ "./node_modules/translation-google/index.js");
/* harmony import */ var translation_google__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(translation_google__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/firebase */ "./utils/firebase.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/esm/index.esm.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-clipboard.js */ "./node_modules/react-clipboard.js/dist/react-clipboard.js");
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_clipboard_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./loader */ "./components/tuDien/loader.js");
/* harmony import */ var _ChuHan__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ChuHan */ "./components/tuDien/ChuHan.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");
/* harmony import */ var _dict_book_data__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dict-book-data */ "./components/tuDien/dict-book-data.js");
/* harmony import */ var _utils_analystics__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../utils/analystics */ "./utils/analystics.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;














 // import ChuHan from './ChuHanKhongBacKinh';




 // var sample = 'Quacking và giết! Nghe những lời của Dao Gushu, vẻ mặt của Shenqi.\n\n Mở một mình giống như một con kiến! Nó đã hoàn toàn vượt quá nhận.';

var sample = '在他左右两边,有七位九成神性境强者。';
var dbPathHdkt = "dictTruyenHanViet";
var dbPathNdhp = "dictDichNdhp";
var pathDictHanVietThayThe = '/static/dictHanVietGoogleTransTaCoNhatKiem.json';
var pathDictThayThe = '/static/googleTransTaCoNhatKiem.json';

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
    _utils_analystics__WEBPACK_IMPORTED_MODULE_27__["trackEvent"]('ThieuTu', 'Han', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(mean));
    return '';
  }
}

function processWord(chinessArray, i, dict, textScripts, bacKinhs) {
  var mean;
  var word;
  console.log('processWord , chinessArray, lenWord, textScripts', chinessArray, i, textScripts);

  if (i < chinessArray.length - 5) {
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 2]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 3]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 4]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 5]);
    mean = dict[word];
    console.log('processWord word, mean', word, mean);

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
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 2]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 3]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 4]);
    mean = dict[word];
    console.log('processWord word, mean', word, mean);

    if (mean) {
      textScripts.push({
        id: i,
        chinesse: word,
        hanViet: mean["hv"],
        bacKinh: bacKinhs[i] + ' ' + bacKinhs[i + 1] + ' ' + bacKinhs[i + 2] + ' ' + bacKinhs[i + 3] + ' ' + bacKinhs[i + 4],
        nghiaViet: getDisplayHanViet(mean),
        nghias: mean["nghia"]
      });
      return 5;
    }
  }

  if (i < chinessArray.length - 3) {
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 2]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 3]);
    mean = dict[word];
    console.log('processWord word, mean', word, mean);

    if (mean) {
      textScripts.push({
        id: i,
        chinesse: word,
        hanViet: mean["hv"],
        bacKinh: bacKinhs[i] + ' ' + bacKinhs[i + 1] + ' ' + bacKinhs[i + 2] + ' ' + bacKinhs[i + 3],
        nghiaViet: getDisplayHanViet(mean),
        nghias: mean["nghia"]
      });
      return 4;
    }
  }

  if (i < chinessArray.length - 2) {
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 2]);
    mean = dict[word];

    if (mean) {
      textScripts.push({
        id: i,
        chinesse: word,
        hanViet: mean["hv"],
        bacKinh: bacKinhs[i] + ' ' + bacKinhs[i + 1] + ' ' + bacKinhs[i + 2],
        nghiaViet: getDisplayHanViet(mean),
        nghias: mean["nghia"]
      });
      return 3;
    }
  }

  if (i < chinessArray.length - 1) {
    word = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i]) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i + 1]);
    mean = dict[word];

    if (mean) {
      textScripts.push({
        id: i,
        chinesse: word,
        hanViet: mean["hv"],
        bacKinh: bacKinhs[i] + ' ' + bacKinhs[i + 1],
        nghiaViet: getDisplayHanViet(mean),
        nghias: mean["nghia"]
      });
      return 2;
    }
  }

  mean = dict[Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i])];
  var hv = '';

  if (mean) {
    hv = mean["hv"];
  }

  textScripts.push({
    id: i,
    chinesse: chinessArray[i],
    hanViet: hv,
    bacKinh: bacKinhs[i],
    nghiaViet: getDisplayHanViet(mean),
    nghias: mean ? mean["nghia"] : ''
  });
  return 1;
}

function getChuHanOneWord(chinesse, dict) {
  var chinessArray = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinesseV2"])(chinesse);
  var textScripts = [];
  var mean;
  var word;
  var i = 0;

  for (i = 0; i < chinessArray.length; i++) {
    mean = dict[Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinneseNoSign"])(chinessArray[i])];
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

function parserScript(chinesse, dict, bacKinh) {
  var chinessArray = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["chuanHoaChinesseV2"])(chinesse);
  var textScripts = [];
  var bacKinhs = bacKinh.split(' ');
  var i = 0;

  for (i = 0; i < chinessArray.length;) {
    i += processWord(chinessArray, i, dict, textScripts, bacKinhs);
  }

  return textScripts;
}

function parserScriptCau(cau, dict) {
  var cacDoan = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(cau, ',', ',#'), '，', ',#'), '：', ':#'), ':', ':#').split('#');
  var j = 0;
  var textScripts = [];

  for (j = 0; j < cacDoan.length; j++) {
    var bacKinh = chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_10___default()(cacDoan[j]);
    var doan = parserScript(cacDoan[j], dict, bacKinh);
    console.log(cacDoan[j], doan, bacKinh);

    if (cacDoan[j]) {
      var word = doan[doan.length - 1];
      if (word) word['dot'] = cacDoan[j].substr(cacDoan[j].length - 1);
      textScripts = textScripts.concat(doan);
    }
  }

  if (textScripts && textScripts[0]) {
    textScripts[0]["nghiaViet"] = "".concat(textScripts[0]["nghiaViet"].substr(0, 1).toUpperCase()).concat(textScripts[0]["nghiaViet"].substr(1));
  }

  return textScripts;
}

function updateNghiaViet(that) {
  var _that$state = that.state,
      typingChinesse = _that$state.typingChinesse,
      dict = _that$state.dict;
  var nghiaViet = '';
  if (!typingChinesse) return;
  nghiaViet = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["xoaKiTuThuaCopyTuTrang"])(typingChinesse);

  for (var word in dict) {
    nghiaViet = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(nghiaViet, word, dict[word].nghia);
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

function clearPtag(content) {
  content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '<p>', '\n');
  content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '</p>', '');
  content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '\n\n\n', '\n');
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '\n', '\n');
}

var DictComponent =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(DictComponent, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DictComponent, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, props;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getInitialProps$(_context) {
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
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_dict_book_data__WEBPACK_IMPORTED_MODULE_26__["default"].getDictBookData());

            case 6:
              props.dictBook = _context.sent;
              _context.next = 9;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_dict_book_data__WEBPACK_IMPORTED_MODULE_26__["default"].getDictTruyenData());

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

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DictComponent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DictComponent).call(this, props));
    '';
    var words = props.words;
    _this.state = {
      loading: true,
      chuonghdkt: '',
      nghiaViet: '',
      typingChinesse: sample,
      chinesse: '',
      doichieu: '',
      seletedDoiChieu: '',
      hanViet: '',
      bacKinh: '',
      dictChuHan: {},
      dict: {},
      blnchiHienNghiaViet: false,
      tumoiCh: '',
      tumoiNghia: '',
      tumoiReplace: '',
      dictPath: dbPathHdkt
    }; // axios.get('https://tv.nhidonghocphat.com/dictClient.json').then((res) => {

    axios__WEBPACK_IMPORTED_MODULE_20___default.a.get('/static/baiChuHan.txt').then(function (res) {
      _this.setState({
        typingChinesse: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["xoaKiTuThuaCopyTuTrang"])(res.data)
      });
    });
    _this.transDB = _this.transDB.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangeDbPath = _this.onChangeDbPath.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangetumoiCh = _this.onChangetumoiCh.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangetumoiNghia = _this.onChangetumoiNghia.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangetumoiReplace = _this.onChangetumoiReplace.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.btnThemTuMoiClick = _this.btnThemTuMoiClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangeHandlerNewHanViet = _this.onChangeHandlerNewHanViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.btnLayChuong = _this.btnLayChuong.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.btnChuongTruoc = _this.btnChuongTruoc.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.btnChuongTiep = _this.btnChuongTiep.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangeChuongHdkt = _this.onChangeChuongHdkt.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangeHandlerNewNghia = _this.onChangeHandlerNewNghia.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangeHandlerNewHanViet = _this.onChangeHandlerNewHanViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangeHandlerChuHan = _this.onChangeHandlerChuHan.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangeHandlerHanViet = _this.onChangeHandlerHanViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onChangeHandlerBacKinh = _this.onChangeHandlerBacKinh.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onHtmlChangeNghiaViet = _this.onHtmlChangeNghiaViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.lamMinVanBan = _this.lamMinVanBan.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.trans = _this.trans.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.chiHienNghiaViet = _this.chiHienNghiaViet.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onDoiChieuSelect = _this.onDoiChieuSelect.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.updateNghia = _this.updateNghia.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.updateTudien = _this.updateTudien.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.reportNew = _this.reportNew.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));

    _this.updateTudien();

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(DictComponent, [{
    key: "onChangeDbPath",
    value: function onChangeDbPath(e) {
      var _this2 = this;

      var dictPath = e.target.value;
      this.setState({
        dictPath: dictPath
      });
      var dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["ref"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_13__["database"]);
      Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["child"])(dbRef, dictPath)).then(function (snapshot) {
        var dictHanViet = snapshot.val() || {};
        var dictChuHan = {};
        var dict = {};

        for (var word in dictHanViet) {
          var replaceTxt = dictHanViet[word].thaythe.split(',');
          var j = 0;

          for (j = 0; j < replaceTxt.length; j++) {
            dict[replaceTxt[j]] = {
              ch: dictHanViet[word].ch,
              nghia: word
            };
          }
        }

        _this2.setState({
          dict: dict,
          dictChuHan: dictChuHan,
          loading: false
        });

        react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default.a.success('Đã cập nhật từ điển.');
      });
    }
  }, {
    key: "onChangetumoiCh",
    value: function onChangetumoiCh(e) {
      this.setState({
        tumoiCh: e.target.value
      });
    }
  }, {
    key: "onChangetumoiNghia",
    value: function onChangetumoiNghia(e) {
      this.setState({
        tumoiNghia: e.target.value
      });
    }
  }, {
    key: "onChangetumoiReplace",
    value: function onChangetumoiReplace(e) {
      this.setState({
        tumoiReplace: e.target.value
      });
    }
  }, {
    key: "btnThemTuMoiClick",
    value: function btnThemTuMoiClick() {
      var _this3 = this;

      try {
        var _this$state = this.state,
            tumoiCh = _this$state.tumoiCh,
            tumoiNghia = _this$state.tumoiNghia,
            tumoiReplace = _this$state.tumoiReplace,
            dictPath = _this$state.dictPath;
        var dbPath = "".concat(dictPath, "/").concat(tumoiNghia);
        var dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["ref"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_13__["database"]);
        Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["child"])(dbRef, dbPath)).then(function (snapshot) {
          var tuDB = snapshot.val() || {
            ch: tumoiCh,
            thaythe: ''
          };

          if (tumoiCh !== tuDB["ch"]) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default.a.error("T\u1EEB m\u1EDBi c\u0169 chung ngh\u0129a c\xF3 ch\u1EEF H\xE1n l\xE0 ".concat(tuDB.ch, " t\u1EEB m\u1EDBi ch\u1EEF H\xE1n l\xE0 ").concat(tumoiCh));
            return;
          }

          if (tuDB.thaythe.length == 0) tuDB.thaythe = tumoiReplace;else tuDB.thaythe = tuDB.thaythe + ',' + tumoiReplace;
          console.log('btnThemTuMoiClick tumoiCh,tumoiNghia,tumoiReplace,snapshot', tumoiCh, tumoiNghia, tumoiReplace, snapshot, tuDB);
          var updates = {};
          updates[dbPath] = tuDB;
          Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["update"])(dbRef, updates).then(function _callee() {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default.a.success('Đã thêm từ');

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          });

          _this3.updateTudien();
        });
      } catch (err) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default.a.error("Th\xEAm t\u1EEB l\u1ED7i ".concat(err.message));
      }
    }
  }, {
    key: "onChangeChuongHdkt",
    value: function onChangeChuongHdkt(e) {
      this.setState({
        chuonghdkt: e.target.value
      });
    }
  }, {
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
        hanViet: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["correctTyping"])(e.target.value)
      });
    }
  }, {
    key: "onChangeHandlerNewNghia",
    value: function onChangeHandlerNewNghia(e) {
      this.setState({
        newNghia: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["correctTyping"])(e.target.value)
      });
    }
  }, {
    key: "onChangeHandlerNewHanViet",
    value: function onChangeHandlerNewHanViet(e) {
      this.setState({
        newHanViet: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["correctTyping"])(e.target.value)
      });
    }
  }, {
    key: "onChangeHandlerBacKinh",
    value: function onChangeHandlerBacKinh(e) {
      this.setState({
        bacKinh: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["correctTyping"])(e.target.value)
      });
    }
  }, {
    key: "onDoiChieuSelect",
    value: function onDoiChieuSelect(event) {
      console.log("onDoiChieuSelect");
      var selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
      console.log("selection", selection);
      var dict = this.state.dict;
      var textScripts = [];
      var cacCau = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(selection, '.', '.#'), '. ', '.#'), '? ', '?#'), '。', '.#').split('#');
      var i = 0;

      for (i = 0; i < cacCau.length; i++) {
        var cau = parserScriptCau(cacCau[i], dict);

        if (cacCau[i] && cau[cau.length - 1]) {
          console.log(cacCau[i]);
          var _word = cau[cau.length - 1];
          cau[cau.length - 1]['dot'] = cacCau[i].substr(cacCau[i].length - 1);
          textScripts = textScripts.concat(cau);
        }
      }

      console.log("selection", selection);
      var nghiaVietSelect = '';

      for (var word in dict) {
        if (dict[word]["ch"] === selection) nghiaVietSelect = dict[word].nghia;
      }

      this.setState({
        seletedDoiChieu: selection,
        chinesse: textScripts,
        tumoiCh: selection,
        tumoiNghia: nghiaVietSelect
      });
    }
  }, {
    key: "lamMinVanBan",
    value: function lamMinVanBan() {
      var _this$state2 = this.state,
          typingChinesse = _this$state2.typingChinesse,
          dict = _this$state2.dict;
      typingChinesse = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["xoaKiTuThuaCopyTuTrang"])(typingChinesse);
      this.setState({
        typingChinesse: typingChinesse
      });
      console.log("lamMinVanBan");
      _utils_analystics__WEBPACK_IMPORTED_MODULE_27__["trackEvent"]('Dich truyen', 'lam min', 'lam min');
    }
  }, {
    key: "reportNew",
    value: function reportNew() {
      var _this$state3 = this.state,
          newWord = _this$state3.newWord,
          newHanViet = _this$state3.newHanViet,
          newNghia = _this$state3.newNghia;
      var json = "{\"chuHan\":\"".concat(newWord, "\",\"hanViet\":\"").concat(newHanViet, "\",\"bacKinh\":\"").concat(chinese_to_pinyin__WEBPACK_IMPORTED_MODULE_10___default()(newWord), "\",\"nghia\":\"").concat(newNghia, "\"},");
      _utils_analystics__WEBPACK_IMPORTED_MODULE_27__["trackEvent"]("Report", "newWord", json);
      this.setState({
        newWord: '',
        newHanViet: '',
        newNghia: ''
      });
      return json;
    }
  }, {
    key: "btnLayChuong",
    value: function btnLayChuong() {
      var _this4 = this;

      var _this$state4 = this.state,
          chuonghdkt = _this$state4.chuonghdkt,
          typingChinesse = _this$state4.typingChinesse;

      try {
        axios__WEBPACK_IMPORTED_MODULE_20___default.a.get("https://thanglamhuu.github.io/thaz.github.io/feibzw/dataHtml/".concat(chuonghdkt, ".json")).then(function (res) {
          var content = clearPtag(res.data.title + '\n' + res.data.content);

          _this4.setState({
            typingChinesse: content
          });

          var dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["ref"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_13__["database"]);
          var dbPathLastest = "daDich/lastest";
          var dbPath = "daDich/".concat(chuonghdkt);
          Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["child"])(dbRef, dbPath)).then(function (snapshot) {
            var nghiaViet = clearPtag(snapshot.val()) || '';
            var doichieu = '';
            var cauHans = content.split('\n');
            var cauViets = nghiaViet.split('\n');
            var cauPos = 0;

            for (cauPos = 0; cauPos < cauHans.length; cauPos++) {
              doichieu += cauHans[cauPos] + '\n' + cauViets[cauPos] + '\n';
            }

            _this4.setState({
              nghiaViet: nghiaViet,
              doichieu: doichieu
            });
          });
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "btnChuongTruoc",
    value: function btnChuongTruoc() {
      var _this5 = this;

      var chuonghdkt = this.state.chuonghdkt;
      var chuongTiep = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(chuonghdkt) - 1;

      try {
        axios__WEBPACK_IMPORTED_MODULE_20___default.a.get("https://thanglamhuu.github.io/thaz.github.io/feibzw/dataHtml/".concat(chuongTiep, ".json")).then(function (res) {
          var content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(res.data.title + '\n' + res.data.content, '<p>', '\n');
          content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '</p>', '');
          content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '\n\n\n', '\n');
          content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '\n\n', '\n');

          _this5.setState({
            chuonghdkt: chuongTiep,
            typingChinesse: content
          });

          try {
            var dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["ref"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_13__["database"]);
            var dbPath = "daDich/".concat(chuongTiep);
            Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["child"])(dbRef, dbPath)).then(function (snapshot) {
              var nghiaViet = snapshot.val() || '';

              _this5.setState({
                nghiaViet: nghiaViet
              });
            });
          } catch (err) {
            console.log(err);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "btnChuongTiep",
    value: function btnChuongTiep() {
      var _this6 = this;

      var chuonghdkt = this.state.chuonghdkt;
      var chuongTiep = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(chuonghdkt) + 1;

      try {
        axios__WEBPACK_IMPORTED_MODULE_20___default.a.get("https://thanglamhuu.github.io/thaz.github.io/feibzw/dataHtml/".concat(chuongTiep, ".json")).then(function (res) {
          var content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(res.data.title + '\n' + res.data.content, '<p>', '\n');
          content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '</p>', '');
          content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '\n\n\n', '\n');
          content = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(content, '\n\n', '\n');

          _this6.setState({
            chuonghdkt: chuongTiep,
            typingChinesse: content
          });

          try {
            var dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["ref"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_13__["database"]);
            var dbPath = "daDich/".concat(chuongTiep);
            Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["child"])(dbRef, dbPath)).then(function (snapshot) {
              var nghiaViet = snapshot.val() || '';

              _this6.setState({
                nghiaViet: nghiaViet
              });
            });
          } catch (err) {
            console.log(err);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "updateTudien",
    value: function updateTudien() {
      var _this7 = this;

      var dictPath = this.state.dictPath;
      var dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["ref"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_13__["database"]);
      Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["get"])(Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["child"])(dbRef, dictPath)).then(function (snapshot) {
        var dictHanViet = snapshot.val() || {};
        var dictChuHan = {};
        var dict = {};

        for (var word in dictHanViet) {
          var replaceTxt = dictHanViet[word].thaythe.split(',');
          var j = 0;

          for (j = 0; j < replaceTxt.length; j++) {
            dict[replaceTxt[j]] = {
              ch: dictHanViet[word].ch,
              nghia: word
            };
          }
        }

        console.log('updateTudien dictPath', dictPath, 'dict ', dict);

        _this7.setState({
          dict: dict,
          dictChuHan: dictChuHan,
          loading: false
        });

        react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default.a.success('Đã cập nhật từ điển.');
      });
    }
  }, {
    key: "trans",
    value: function trans() {
      var _this8 = this;

      var _this$state5 = this.state,
          typingChinesse = _this$state5.typingChinesse,
          chinesse = _this$state5.chinesse,
          dict = _this$state5.dict,
          dictChuHan = _this$state5.dictChuHan,
          chuonghdkt = _this$state5.chuonghdkt;
      typingChinesse = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["xoaKiTuThuaCopyTuTrang"])(typingChinesse);
      var doichieu = '';
      var nghiaViet = '';
      translation_google__WEBPACK_IMPORTED_MODULE_12___default()(typingChinesse, {
        from: 'zh-CN',
        to: 'vi'
      }).then(function (res) {
        nghiaViet = res.text;
        console.log('dict', dict);

        for (var word in dict) {
          nghiaViet = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(nghiaViet, word, dict[word].nghia);
        } //Ghep cau chu Han voi Chu viet


        var cauHans = typingChinesse.split('\n');
        var cauViets = nghiaViet.split('\n');
        var cauPos = 0;

        for (cauPos = 0; cauPos < cauHans.length; cauPos++) {
          doichieu += cauHans[cauPos] + '\n' + cauViets[cauPos] + '\n';
        }

        _this8.setState({
          nghiaViet: nghiaViet,
          doichieu: doichieu
        });

        try {
          var dbPath = "daDich/".concat(chuonghdkt);
          var dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["ref"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_13__["database"]);
          var updates = {};
          updates[dbPath] = nghiaViet;
          if (chuonghdkt) updates["daDich/lastest"] = chuonghdkt;
          Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["update"])(dbRef, updates).then(function _callee2() {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default.a.success('Đã lưu bản dịch');

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          });
        } catch (err) {
          react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default.a.error("L\u01B0u b\u1EA3n d\u1ECBch l\u1ED7i ".concat(err.message));
        } //=> en

      })["catch"](function (err) {
        console.error(err);
      });
    }
  }, {
    key: "transDB",
    value: function transDB() {
      var _this$state6 = this.state,
          typingChinesse = _this$state6.typingChinesse,
          nghiaViet = _this$state6.nghiaViet,
          dict = _this$state6.dict,
          dictChuHan = _this$state6.dictChuHan,
          chuonghdkt = _this$state6.chuonghdkt;
      var doichieu = '';
      console.log('transDB dict', dict);

      for (var word in dict) {
        nghiaViet = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(nghiaViet, word, dict[word].nghia);
      } //Ghep cau chu Han voi Chu viet


      var cauHans = typingChinesse.split('\n');
      var cauViets = nghiaViet.split('\n');
      var cauPos = 0;

      for (cauPos = 0; cauPos < cauHans.length; cauPos++) {
        doichieu += cauHans[cauPos] + '\n' + cauViets[cauPos] + '\n';
      }

      this.setState({
        nghiaViet: nghiaViet,
        doichieu: doichieu
      });

      try {
        var dbPath = "daDich/".concat(chuonghdkt);
        var dbRef = Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["ref"])(_utils_firebase__WEBPACK_IMPORTED_MODULE_13__["database"]);
        var updates = {};
        updates[dbPath] = nghiaViet;
        if (chuonghdkt) updates["daDich/lastest"] = chuonghdkt;
        Object(firebase_database__WEBPACK_IMPORTED_MODULE_14__["update"])(dbRef, updates).then(function _callee3() {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee3$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default.a.success('Đã lưu bản dịch');

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          });
        });
      } catch (err) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_15___default.a.error("L\u01B0u b\u1EA3n d\u1ECBch l\u1ED7i ".concat(err.message));
      }
    }
  }, {
    key: "chiHienNghiaViet",
    value: function chiHienNghiaViet() {
      var blnchiHienNghiaViet = this.state.blnchiHienNghiaViet;
      this.setState({
        blnchiHienNghiaViet: !blnchiHienNghiaViet
      });
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
      var _this9 = this;

      var _this$state7 = this.state,
          nghiaViet = _this$state7.nghiaViet,
          typingChinesse = _this$state7.typingChinesse,
          chinesse = _this$state7.chinesse,
          bacKinh = _this$state7.bacKinh,
          loading = _this$state7.loading,
          dict = _this$state7.dict,
          newWord = _this$state7.newWord,
          newHanViet = _this$state7.newHanViet,
          doichieu = _this$state7.doichieu,
          seletedDoiChieu = _this$state7.seletedDoiChieu,
          newNghia = _this$state7.newNghia,
          blnchiHienNghiaViet = _this$state7.blnchiHienNghiaViet,
          tumoiCh = _this$state7.tumoiCh,
          tumoiNghia = _this$state7.tumoiNghia,
          tumoiReplace = _this$state7.tumoiReplace,
          chuonghdkt = _this$state7.chuonghdkt,
          dictPath = _this$state7.dictPath; // Build Cards for Listing

      var chuHans = '',
          i = 0;

      if (loading) {
        chuHans = __jsx(_loader__WEBPACK_IMPORTED_MODULE_23__["default"], null);
      } else if (chinesse) {
        chuHans = chinesse.map(function (item) {
          return __jsx(_ChuHan__WEBPACK_IMPORTED_MODULE_24__["default"], {
            id: i++,
            key: Math.random(),
            chinesse: item.chinesse,
            hanViet: item.hanViet,
            bacKinh: item.bacKinh,
            nghias: item.nghias,
            nghiaViet: item.nghiaViet,
            updateNghia: _this9.updateNghia,
            dot: item.dot
          });
        });
      }

      return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_19__["Row"], null, __jsx("h2", {
        className: "h1Title"
      }, "D\u1ECBch truy\u1EC7n"), __jsx("button", {
        className: "btnProcess",
        onClick: this.chiHienNghiaViet
      }, "Nghe"), __jsx("button", {
        className: "btnProcess",
        onClick: this.btnChuongTruoc
      }, "-"), "Ch\u01B0\u01A1ng ", __jsx("input", {
        value: chuonghdkt,
        onChange: this.onChangeChuongHdkt,
        style: {
          width: 50
        }
      }), __jsx("button", {
        className: "btnProcess",
        onClick: this.btnChuongTiep
      }, "+"), __jsx("button", {
        className: "btnProcess",
        onClick: this.btnLayChuong
      }, "L\u1EA5y"), __jsx("button", {
        className: "btnProcess",
        onClick: this.trans
      }, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faLanguage"]
      }), " "), __jsx(react_clipboard_js__WEBPACK_IMPORTED_MODULE_16___default.a, {
        "data-clipboard-text": nghiaViet,
        style: {
          marginLeft: 10
        }
      }, __jsx("i", {
        className: "icon-docs"
      }), " Copy"), __jsx("div", null, blnchiHienNghiaViet && react_render_html__WEBPACK_IMPORTED_MODULE_11___default()(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_25__["replaceAll"])(nghiaViet, '\n', '<br>')))), !blnchiHienNghiaViet && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_19__["Row"], {
        style: {
          paddingTop: '10px'
        }
      }, __jsx("a", {
        href: "https://docs.google.com/document/d/e/2PACX-1vQai_CXAKESaTwRgmoenHEKXP9mymw4NGn7oUVt6_OPwxH663qHs_Pu6K7hjhIVk85IKwR2Wq3Afe0X/pub",
        target: "_blank"
      }, "webE"), "&nbsp", __jsx("a", {
        href: "https://docs.google.com/document/d/1mQTJtYaml0ESJTXzS6-Lheey6maJm_XoH4jY0HcRe1s/edit",
        target: "_blank"
      }, "word"), "&nbsp", __jsx("a", {
        href: "https://www.feibzw.com/html/35181/index.html",
        target: "_blank"
      }, "_M\u1EE5c L\u1EE5c"), __jsx("a", {
        href: "https://tamlinh247.vn/truyen-hau-due-kiem-than/",
        target: "_blank"
      }, "_TamLinh247"), "\u0110\u1ED1i chi\u1EBFu", __jsx("a", {
        href: "https://www.feibzw.com/html/35181/35649573.html",
        target: "_blank"
      }, "\u516B\u767E\u56DB\u5341\u56DB"), __jsx("a", {
        href: "https://tamlinh247.vn/truyen-hau-due-kiem-than/chuong-3376/",
        target: "_blank"
      }, "chuong-3376")), !blnchiHienNghiaViet && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_19__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_19__["FormGroup"], {
        style: {
          width: '100%'
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_19__["Label"], {
        "for": "inputChuHan"
      }, "Nh\u1EADp n\u1ED9i dung ch\u1EEF H\xE1n"), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: "txtAutoSize",
        id: "inputChuHan",
        placeholder: "Ch\u1EEF H\xE1n",
        value: typingChinesse,
        onChange: this.onChangeHandlerChuHan
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_19__["Row"], null, __jsx("div", {
        style: {
          width: '100%',
          textAlign: 'center'
        }
      }, __jsx("button", {
        className: "btnProcess",
        onClick: this.updateTudien,
        style: {
          marginLeft: 5
        }
      }, "Dict"), __jsx("button", {
        className: "btnProcess",
        onClick: this.transDB,
        style: {
          marginLeft: 5
        }
      }, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faLanguage"]
      }), " DB"), __jsx("button", {
        className: "btnProcess",
        onClick: this.chiHienNghiaViet,
        style: {
          marginLeft: 5
        }
      }, "Nghe"), "+ t\u1EEB m\u1EDBi t\xECm ", __jsx("input", {
        value: tumoiReplace,
        onChange: this.onChangetumoiReplace
      }), "chinese ", __jsx("input", {
        value: tumoiCh,
        onChange: this.onChangetumoiCh
      }), "ngh\u0129a ", __jsx("input", {
        value: tumoiNghia,
        onChange: this.onChangetumoiNghia
      }), __jsx("button", {
        className: "btnProcess",
        onClick: this.btnThemTuMoiClick,
        style: {
          marginLeft: 5
        }
      }, "Th\xEAm"), "T\u1EEB \u0111i\u1EC3n", __jsx("select", {
        value: dictPath,
        onChange: this.onChangeDbPath
      }, __jsx("option", {
        value: dbPathHdkt
      }, "Dict HDKT"), __jsx("option", {
        value: dbPathNdhp
      }, "Dict NDHP")))), !blnchiHienNghiaViet && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_19__["Row"], {
        style: {
          paddingTop: '10px'
        }
      }, __jsx("h4", null, "\u0110\u1ED1i Chi\u1EBFu"), chuHans, __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: "txtAutoSize",
        id: "inputDoiChieu",
        placeholder: "d\u1ECBch ngh\u0129a",
        value: doichieu,
        onChange: this.onHtmlChangeNghiaViet,
        onSelect: this.onDoiChieuSelect
      })), !blnchiHienNghiaViet && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_19__["Row"], null, __jsx("h4", null, "Ch\u1EC9nh s\u1EEDa l\u1EA1i n\u1ED9i dung b\u1EA3n d\u1ECBch t\u1EA1i \u0111\xE2y"), __jsx(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: "txtAutoSize",
        id: "inputNghiaViet",
        placeholder: "d\u1ECBch ngh\u0129a",
        value: nghiaViet,
        onChange: this.onHtmlChangeNghiaViet
      })));
    }
  }]);

  return DictComponent;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);


DictComponent.defaultProps = {
  error: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {};

/***/ })

})
//# sourceMappingURL=dich-truyen.js.760ee0cbb8c015898f0d.hot-update.js.map