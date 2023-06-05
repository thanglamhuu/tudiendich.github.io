webpackHotUpdate("static\\development\\pages\\dich-truyen-gg-trans.js",{

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: logDebug, logDebug2Val, checkIsServer, chuyenSoSangChuyenDoDai, formatPrice, formatNumber0, replaceAll, correctTyping, correctTypingChinese, xoaKiTuThuaCopyTuTrang, chuanHoaChinesseV2, chuanHoaChinneseNoSign, chuanHoaChinesse, chuanHoaHanVietBacKinh, getMessageError, getSoundFile, getErrorData, isEmptyOrBlank, removeTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logDebug", function() { return logDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logDebug2Val", function() { return logDebug2Val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsServer", function() { return checkIsServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chuyenSoSangChuyenDoDai", function() { return chuyenSoSangChuyenDoDai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber0", function() { return formatNumber0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctTyping", function() { return correctTyping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctTypingChinese", function() { return correctTypingChinese; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xoaKiTuThuaCopyTuTrang", function() { return xoaKiTuThuaCopyTuTrang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chuanHoaChinesseV2", function() { return chuanHoaChinesseV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chuanHoaChinneseNoSign", function() { return chuanHoaChinneseNoSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chuanHoaChinesse", function() { return chuanHoaChinesse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chuanHoaHanVietBacKinh", function() { return chuanHoaHanVietBacKinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessageError", function() { return getMessageError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSoundFile", function() { return getSoundFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorData", function() { return getErrorData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyOrBlank", function() { return isEmptyOrBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTags", function() { return removeTags; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map_error_code_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-error-code.json */ "./utils/map-error-code.json");
var _map_error_code_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./map-error-code.json */ "./utils/map-error-code.json", 1);
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! accounting */ "./node_modules/accounting/accounting.js");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_3__);




var logDebugFlag = true;
function logDebug(step, logValue) {
  if (logDebugFlag) console.log(step, logValue);
}
function logDebug2Val(step, logValue1, logValue2) {
  if (logDebugFlag) console.log(step, logValue1, logValue2);
}
function checkIsServer() {
  try {
    return !window;
  } catch (e) {
    return true;
  }
}
var chuyenSoSangChuyenDoDai = function chuyenSoSangChuyenDoDai(number, len) {
  var e = '000000';
  var s = e + number;
  return s.substr(s.length - len, len);
};
var formatPrice = function formatPrice(price) {
  var numberAfterDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (typeof price !== "number") return "";
  return Object(accounting__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(price / 1000, numberAfterDot);
};
var formatNumber0 = function formatNumber0(price) {
  if (typeof price !== "number") return "";
  return Object(accounting__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(price, 0);
};
var replaceAll = function replaceAll(str, search, replacement) {
  var newStr = '';

  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isString(str)) {
    // maybe add a lodash test? Will not handle numbers now.
    newStr = str.split(search).join(replacement);
  }

  return newStr;
};
var correctTyping = function correctTyping(source) {
  if (!source) return '';
  var result = replaceAll(source, '	', ' '); // result = replaceAll(result, ' ：', ' ：');
  // result = replaceAll(result, '「 ', '「');
  // result = replaceAll(result, ' 」', '」');
  // result = replaceAll(result, '. 」', '.」');
  // result = replaceAll(result, '.」', '」.');
  // result = replaceAll(result, '?', '? ');
  // result = replaceAll(result, '.', '. ');

  result = replaceAll(result, '   ', ' ');
  result = replaceAll(result, '  ', ' ');
  return result;
};
var correctTypingChinese = function correctTypingChinese(source) {
  if (!source) return '';
  var result = replaceAll(source, ' ', '');
  result = replaceAll(result, '	', '');
  result = replaceAll(result, '   ', ' ');
  result = replaceAll(result, '  ', ' ');
  return result;
};

var chuanHoaText = function chuanHoaText(source) {
  if (!source) return '';
  var result = replaceAll(source, '	', ' ');
  result = replaceAll(result, '。', '.');
  result = replaceAll(result, '，', ',');
  result = replaceAll(result, '  ', ' ');
  result = replaceAll(result, '  ', ' ');
  result = replaceAll(result, '   ', ' ');
  result = replaceAll(result, '	', ' ');
  result = replaceAll(result, ' ：', ':');
  result = replaceAll(result, '「 ', '「');
  result = replaceAll(result, '  」', ' 」');
  result = replaceAll(result, '. 」', '.」');
  result = replaceAll(result, '.」', '」.');
  result = replaceAll(result, '?', '? ');
  result = replaceAll(result, '.', '. ');
  return result;
};

var xoaKiTuThuaCopyTuTrang = function xoaKiTuThuaCopyTuTrang(chinesse) {
  var chinesseNonSpace = replaceAll(chinesse, '  ', '');
  chinesseNonSpace = replaceAll(chinesseNonSpace, '  ', '');
  chinesseNonSpace = replaceAll(chinesseNonSpace, '  ', '');
  chinesseNonSpace = replaceAll(chinesseNonSpace, '\n\n', '\n');
  chinesseNonSpace = replaceAll(chinesseNonSpace, '\n\n', '\n');
  chinesseNonSpace = replaceAll(chinesseNonSpace, '\n\n', '\n');
  chinesseNonSpace = replaceAll(chinesseNonSpace, '始祖', 'tổ tiên');
  return chinesseNonSpace;
};
var chuanHoaChinesseV2 = function chuanHoaChinesseV2(chinesse) {
  var chinesseNonSpace = replaceAll(chinesse, ' ', '');
  chinesseNonSpace = replaceAll(chinesseNonSpace, '  ', '');
  var result = [];
  var signsBef = '「(（';
  var signsAfter = '、，,:：;；.。」)）?！';
  var currentWord = '';
  var i = 0;

  for (i = 0; i <= chinesseNonSpace.length; i++) {
    if (signsBef.indexOf(chinesseNonSpace[i]) >= 0) {
      if (currentWord !== '') {
        result.push(currentWord);
      }

      currentWord = chinesseNonSpace[i];
    } else if (signsAfter.indexOf(chinesseNonSpace[i]) >= 0 && i < chinesseNonSpace.length - 1 && signsAfter.indexOf(chinesseNonSpace[i + 1]) >= 0) {
      currentWord += chinesseNonSpace[i] + chinesseNonSpace[i + 1];

      if (currentWord !== '') {
        result.push(currentWord);
      }

      currentWord = '';
      i++;
    } else if (signsAfter.indexOf(chinesseNonSpace[i]) >= 0) {
      currentWord += chinesseNonSpace[i];

      if (currentWord !== '') {
        result.push(currentWord);
      }

      currentWord = '';
    } else {
      if (currentWord !== '' && signsBef.indexOf(currentWord) < 0) {
        result.push(currentWord);
      }

      if (signsBef.indexOf(currentWord) >= 0) {
        currentWord += chinesseNonSpace[i];
      } else {
        currentWord = chinesseNonSpace[i];
      }
    }
  }

  return result;
};
var chuanHoaChinneseNoSign = function chuanHoaChinneseNoSign(source) {
  var result = chuanHoaText(source);
  result = replaceAll(result, '、', '');
  result = replaceAll(result, '，', '');
  result = replaceAll(result, '「', '');
  result = replaceAll(result, '」', '');
  result = replaceAll(result, '(', '');
  result = replaceAll(result, ')', '');
  result = replaceAll(result, '（', '');
  result = replaceAll(result, '）', '');
  result = replaceAll(result, '.', '');
  result = replaceAll(result, ' ', '');
  result = replaceAll(result, '.', '');
  result = replaceAll(result, ',', '');
  result = replaceAll(result, '。', '');
  result = replaceAll(result, ':', '');
  result = replaceAll(result, '：', '');
  result = replaceAll(result, '：', '');
  result = replaceAll(result, '?', '');
  result = replaceAll(result, '!', '');
  result = replaceAll(result, '！', '');
  result = replaceAll(result, ';', '');
  result = replaceAll(result, '；', '');
  return result;
}; // 佛	說	："	人	人	都	可	以	成	佛。"

var chuanHoaChinesse = function chuanHoaChinesse(chinesse) {
  var result = chuanHoaText(chinesse);
  return result.split(' ');
};
var chuanHoaHanVietBacKinh = function chuanHoaHanVietBacKinh(source) {
  var result = replaceAll(source, '\n', ' ');
  result = chuanHoaText(result);
  result = replaceAll(result, '「', '');
  result = replaceAll(result, '」', '');
  result = replaceAll(result, '.', '');
  result = replaceAll(result, ':', '');
  result = replaceAll(result, '。\n', '。 \n');
  result = replaceAll(result, '.\n', '. \n');
  return result.split(' ');
};
function getMessageError(error) {
  var status = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(error, 'response.data.httpStatus') || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(error, 'httpStatus') || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(error, 'code');

  var message = _map_error_code_json__WEBPACK_IMPORTED_MODULE_2__[status];

  var message1 = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(error, 'response.data.message');

  var message2 = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(error, 'message');

  return message || message1 || message2;
}
var getSoundFile = function getSoundFile(phonetic) {
  if (!phonetic) return '';
  var fileName = phonetic.toLowerCase();
  fileName = fileName.replace(':', '');
  fileName = fileName.replace('.', '');
  fileName = fileName.replace(',', '');
  fileName = fileName.replace('?', '');
  fileName = fileName.replace('!', '');
  fileName = fileName.replace('！', '');
  fileName = fileName.replace('"', '');

  if (fileName.indexOf('ā') >= 0) {
    return "".concat(fileName.replace('ā', 'a'), "1.mp3");
  } else if (fileName.indexOf('á') >= 0) {
    return "".concat(fileName.replace('á', 'a'), "2.mp3");
  } else if (fileName.indexOf('ǎ') >= 0) {
    return "".concat(fileName.replace('ǎ', 'a'), "3.mp3");
  } else if (fileName.indexOf('à') >= 0) {
    return "".concat(fileName.replace('à', 'a'), "4.mp3");
  } else if (fileName.indexOf('ō') >= 0) {
    return "".concat(fileName.replace('ō', 'o'), "1.mp3");
  } else if (fileName.indexOf('ó') >= 0) {
    return "".concat(fileName.replace('ó', 'o'), "2.mp3");
  } else if (fileName.indexOf('ǒ') >= 0) {
    return "".concat(fileName.replace('ǒ', 'o'), "3.mp3");
  } else if (fileName.indexOf('ò') >= 0) {
    return "".concat(fileName.replace('ò', 'o'), "4.mp3");
  } else if (fileName.indexOf('ē') >= 0) {
    return "".concat(fileName.replace('ē', 'e'), "1.mp3");
  } else if (fileName.indexOf('é') >= 0) {
    return "".concat(fileName.replace('é', 'e'), "2.mp3");
  } else if (fileName.indexOf('ě') >= 0) {
    return "".concat(fileName.replace('ě', 'e'), "3.mp3");
  } else if (fileName.indexOf('è') >= 0) {
    return "".concat(fileName.replace('è', 'e'), "4.mp3");
  } else if (fileName.indexOf('ī') >= 0) {
    return "".concat(fileName.replace('ī', 'i').replace('yi', 'i'), "}1.mp3");
  } else if (fileName.indexOf('í') >= 0) {
    return "".concat(fileName.replace('í', 'i').replace('yi', 'i'), "2.mp3");
  } else if (fileName.indexOf('ǐ') >= 0) {
    return "".concat(fileName.replace('ǐ', 'i').replace('yi', 'i'), "3.mp3");
  } else if (fileName.indexOf('ì') >= 0) {
    return "".concat(fileName.replace('ì', 'i').replace('yi', 'i'), "4.mp3");
  } else if (fileName.indexOf('ū') >= 0) {
    return "".concat(fileName.replace('ū', 'u').replace('wu', 'u'), "1.mp3");
  } else if (fileName.indexOf('ú') >= 0) {
    return "".concat(fileName.replace('ú', 'u').replace('wu', 'u'), "2.mp3");
  } else if (fileName.indexOf('ǔ') >= 0) {
    return "".concat(fileName.replace('ǔ', 'u').replace('wu', 'u'), "3.mp3");
  } else if (fileName.indexOf('ù') >= 0) {
    return "".concat(fileName.replace('ù', 'u').replace('wu', 'u'), "4.mp3");
  } else if (fileName.indexOf('ü') >= 0) {
    return "".concat(fileName.replace('ü', 'v').replace('yv', 'v'), "1.mp3"); // ü
  } else if (fileName.indexOf('ǖ') >= 0) {
    return "".concat(fileName.replace('ǖ', 'v').replace('yv', 'v'), "1.mp3"); // ü
  } else if (fileName.indexOf('ǘ') >= 0) {
    return "".concat(fileName.replace('ǘ', 'v').replace('yv', 'v'), "1.mp3}2.mp3");
  } else if (fileName.indexOf('ǜ') >= 0) {
    return "".concat(fileName.replace('ǜ', 'v').replace('yv', 'v'), "1.mp3}4.mp3");
  } else if (fileName.indexOf('ǔ') >= 0) {
    return "".concat(fileName.replace('ǔ', 'u').replace('yv', 'v'), "1.mp3}3.mp3");
  }

  return "".concat(fileName, "1.mp3");
};
function getErrorData(error) {
  try {
    return _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(error);
  } catch (e) {
    return 'Không lấy được toàn bộ thông tin lỗi';
  }
}
function isEmptyOrBlank(str) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(str.trim());
}
function removeTags(content) {
  var regex = /(<([^>]+)>)/ig;
  return content.replace(regex, '');
}

/***/ })

})
//# sourceMappingURL=dich-truyen-gg-trans.js.30d907b908f569ad62aa.hot-update.js.map