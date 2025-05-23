webpackHotUpdate("static/development/pages/phat-am-tv.js",{

/***/ "./components/hoctaphieuan/VietnameseSyllables.js":
/*!********************************************************!*\
  !*** ./components/hoctaphieuan/VietnameseSyllables.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Hàm chuyển âm sang tiếng Việt không dấu

var removeVietnameseTones = function removeVietnameseTones(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
};

var viDuDict = {
  11: {
    1: 'về hưu',
    2: 'con hươu, con khướu',
    3: 'bông hoa',
    4: 'loè loẹt',
    5: 'hoa huệ, sao khuê',
    6: 'hươ tay',
    7: 'huy chương',
    8: 'khuya khoắt',
    9: 'nhồm nhoàm',
    10: 'khù khoằm'
  },
  12: {
    1: 'mắt trái xoan, hạt xoàn',
    2: 'hoạt bát, sột xoạt',
    3: 'tóc xoăn, thoăn thoắt',
    4: 'tóc xoăn, thoăn thoắt',
    5: 'khuân vác, uẩn khúc',
    6: 'quần quật, xuất chúng',
    7: 'hoen ố, nhoẻn cười',
    8: 'loè loẹt, khoét tổ',
    9: 'khuyên tai, dấu huyền',
    10: 'bông tuyết, trăng khuyết'
  },
  13: {
    1: 'màn tuyn, dầu luyn',
    2: 'xe buýt, tuýt còi, huýt sáo, xoắn xuýt',
    3: 'khoang tàu, áo choàng',
    4: 'áo khoác, xoạc chân',
    5: 'con hoẵng, huyênh hoang',
    6: 'dấu ngoặc, hoặc là',
    7: 'mới toanh, oanh liệt, khoanh tay',
    8: 'oạch, thu hoạch',
    9: 'chuếnh choáng, huyênh hoang',
    10: 'bộc tuệch, rỗng tuyếch, trống huếch'
  },
  14: {
    1: 'Phụ huynh, khuynh thành, huỳnh huỵch, mừng quýnh, hoa quỳnh, luýnh quýnh',
    2: 'huỳnh huỵch',
    3: 'loai choai, chủng loại',
    4: 'xoay sở, loay hoay',
    5: 'quây quần ',
    6: 'xoong nồi, boong tàu',
    7: 'đàn oóc, quần soóc, con voọc, xe rơ moóc',
    8: 'đèn tuýp, tuýp thuốc, tuýp đánh răng',
    9: 'ngoằn ngoèo, nghoẻo, nghoẹo cổ',
    10: 'nguều ngoào'
  },
  15: (_ = {
    1: 'nguều ngoào'
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_, "1", 'ì oạp, ngoáp, ngoạp'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_, 3, 'khúc khuỷu, ngã khuỵu, khuỷu tay'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_, 4, 'bâng khuâng'), _)
};

var VietnameseSyllables = function VietnameseSyllables() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeButton = _useState[0],
      setActiveButton = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      audio = _useState2[0],
      setAudio = _useState2[1]; // Trạng thái lưu Audio object


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      vidu = _useState3[0],
      setVidu = _useState3[1]; // Trạng thái lưu Audio object
  // Mảng 2 chiều thể hiện chính xác layout trong ảnh


  var syllablesTable = [["am", "ap", "ăm", "ăp", "âm", "âp", "em", "ep", "im", "ip"], ["iêm", "yêm", "iêp", "om", "op", "ôm", "ôp", "ơm", "ơp", "um"], ["up", "uôm", "ươm", "ươp", "an", "at", "ăn", "ăt", "ân", "ât"], ["en", "et", "ên", "êt", "in", "it", "iên", "iêt", "yên", "yêt"], ["on", "ot", "ôn", "ôt", "ơn", "ơt", "un", "ut", "ưt", "uôn"], ["uôt", "ươn", "ươt", "ang", "ac", "ăng", "ăc", "âng", "âc", "eng"], ["ec", "iêng", "yêng", "iêc", "ong", "oc", "ông", "ôc", "ung", "uc"], ["ưng", "ưc", "uông", "uôc", "ương", "ươc", "anh", "ach", "ênh", "êch"], ["inh", "ich", "ai", "ay", "oi", "ây", "ôi", "ơi", "ui", "ưi"], ["uôi", "ươi", "ao", "eo", "au", "âu", "êu", "iu", "iêu", "yêu"], ["ưu", "ươu", "oa", "oe", "uê", "ươ", "uy", "uya", "oam", "oăm"], ["oan", "oat", "oăn", "oăt", "uân", "uât", "oen", "oet", "uyên", "uyêt"], ["uyn", "uyt", "oang", "oac", "oăng", "oăc", "oanh", "oach", "uênh", "uêch"], ["uynh", "uych", "oai", "oay", "uây", "oong", "ooc", "uyp", "oeo", "uêu"], ["oao", "oap", "uyu", "uâng", "", "", "", "", "", ""]]; // Xử lý phát âm thanh

  var playSyllable = function playSyllable(rowIndex, colIndex, syllable) {
    if (!audio) return; // if (!syllable) return; // Không làm gì nếu ô trống
    // // Phát âm thanh
    // const utterance = new SpeechSynthesisUtterance(syllable);
    // utterance.lang = 'vi-VN';
    // Hiệu ứng khi click

    setActiveButton(syllable);
    setVidu(viDuDict[rowIndex] && viDuDict[rowIndex][colIndex] ? "V\xED d\u1EE5: ".concat(viDuDict[rowIndex][colIndex]) : ''); // window.speechSynthesis.speak(utterance);

    var filename = "".concat(rowIndex >= 10 ? rowIndex : '0' + rowIndex).concat(colIndex < 10 ? colIndex : 'a').concat(removeVietnameseTones(syllable));
    var fileUrl = "https://td.nhidonghocphat.com/static/phatam/".concat(filename, ".mp3"); // Cập nhật src và play

    audio.src = fileUrl;
    audio.play()["catch"](function (err) {
      console.error('Không thể phát âm thanh:', err);
    }); // Reset trạng thái active sau 1 giây

    setTimeout(function () {
      setActiveButton(null);
    }, 5000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Chạy chỉ trên client
    if (true) {
      var audioInstance = new window.Audio(); // Tránh lỗi SSR

      setAudio(audioInstance);
    }
  }, []); // Lấy các class dựa trên trạng thái nút

  var getSyllableButtonClass = function getSyllableButtonClass(syllable) {
    if (!syllable) {
      return 'ptav_syllable-button ptav_syllable-button-empty';
    }

    if (activeButton === syllable) {
      return 'ptav_syllable-button ptav_syllable-button-active';
    }

    return 'ptav_syllable-button ptav_syllable-button-normal';
  };

  return __jsx("div", {
    className: "ptav_container"
  }, __jsx("div", {
    className: "ptav_header"
  }, __jsx("h1", {
    className: "ptav_title"
  }, "B\u1EA2NG V\u1EA6N TI\u1EBENG VI\u1EC6T"), __jsx("span", {
    className: "ptav_subtitle"
  }, "Nh\u1EA5n v\xE0o c\xE1c n\xFAt \u0111\u1EC3 nghe ph\xE1t \xE2m")), __jsx("div", {
    className: "ptav_table-container"
  }, __jsx("table", {
    className: "ptav_syllable-table"
  }, __jsx("tbody", null, syllablesTable.map(function (row, rowIndex) {
    return __jsx("tr", {
      key: "row-".concat(rowIndex)
    }, row.map(function (syllable, colIndex) {
      return __jsx("td", {
        key: "cell-".concat(rowIndex, "-").concat(colIndex),
        className: "ptav_syllable-cell"
      }, __jsx("button", {
        onClick: function onClick() {
          return syllable && playSyllable(rowIndex + 1, colIndex + 1, syllable);
        },
        className: getSyllableButtonClass(syllable),
        disabled: !syllable
      }, syllable));
    }));
  })))), __jsx("div", {
    className: "ptav_status-area"
  }, activeButton ? __jsx("div", {
    className: "ptav_flex-col"
  }, __jsx("span", {
    className: "ptav_active-syllable"
  }, activeButton), __jsx("span", {
    className: "ptav_status-text"
  }, vidu)) : __jsx("p", {
    className: "ptav_status-placeholder"
  }, "Ch\u1ECDn m\u1ED9t v\u1EA7n \u0111\u1EC3 nghe ph\xE1t \xE2m")), __jsx("div", {
    className: "ptav_footer"
  }, __jsx("p", null, "H\u1ECDc v\u1EA7n ti\u1EBFng Vi\u1EC7t - T\xE0i li\u1EC7u gi\u1EA3ng d\u1EA1y"), __jsx("div", {
    className: "ptav_footer-icon-container"
  }, __jsx("svg", {
    className: "ptav_footer-icon",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  })), __jsx("span", null, "B\u1EA3n 2025"))));
};

/* harmony default export */ __webpack_exports__["default"] = (VietnameseSyllables);

/***/ })

})
//# sourceMappingURL=phat-am-tv.js.7394e65de965f2e7b1b8.hot-update.js.map