webpackHotUpdate("static/development/pages/phat-am/phat-am-tv.js",{

/***/ "./components/hoctaphieuan/constantsPhatAm.js":
/*!****************************************************!*\
  !*** ./components/hoctaphieuan/constantsPhatAm.js ***!
  \****************************************************/
/*! exports provided: syllablesTable, exercises, getExercises, removeVietnameseTones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syllablesTable", function() { return syllablesTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exercises", function() { return exercises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExercises", function() { return getExercises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeVietnameseTones", function() { return removeVietnameseTones; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



function shuffleArray(array) {
  var arr = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(array); // tạo bản sao để không làm thay đổi mảng gốc


  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // số ngẫu nhiên từ 0 đến i

    var _ref = [arr[j], arr[i]];
    arr[i] = _ref[0];
    arr[j] = _ref[1];
  }

  return arr;
} // Mảng 2 chiều thể hiện chính xác layout trong ảnh


var syllablesTable = [["am", "ap", "ăm", "ăp", "âm", "âp", "em", "ep", "im", "ip"], ["iêm", "yêm", "iêp", "om", "op", "ôm", "ôp", "ơm", "ơp", "um"], ["up", "uôm", "ươm", "ươp", "an", "at", "ăn", "ăt", "ân", "ât"], ["en", "et", "ên", "êt", "in", "it", "iên", "iêt", "yên", "yêt"], ["on", "ot", "ôn", "ôt", "ơn", "ơt", "un", "ut", "ưt", "uôn"], ["uôt", "ươn", "ươt", "ang", "ac", "ăng", "ăc", "âng", "âc", "eng"], ["ec", "iêng", "yêng", "iêc", "ong", "oc", "ông", "ôc", "ung", "uc"], ["ưng", "ưc", "uông", "uôc", "ương", "ươc", "anh", "ach", "ênh", "êch"], ["inh", "ich", "ai", "ay", "oi", "ây", "ôi", "ơi", "ui", "ưi"], ["uôi", "ươi", "ao", "eo", "au", "âu", "êu", "iu", "iêu", "yêu"], ["ưu", "ươu", "oa", "oe", "uê", "ươ", "uy", "uya", "oam", "oăm"], ["oan", "oat", "oăn", "oăt", "uân", "uât", "oen", "oet", "uyên", "uyêt"], ["uyn", "uyt", "oang", "oac", "oăng", "oăc", "oanh", "oach", "uênh", "uêch"], ["uynh", "uych", "oai", "oay", "uây", "oong", "ooc", "uyp", "oeo", "uêu"], ["oao", "oap", "uyu", "uâng", "", "", "", "", "", ""]];
var exercises = getExercises(); // export const exercises = [
//   { id: 1, mp3: '/static/phatam/01aip.mp3', choices: ['ip', 'ap', 'iêm', 'yêm'], correctAnswer: 'ip' },
//   { id: 2, mp3: '/static/phatam/10ayeu.mp3', choices: ['yêu', 'ap', 'iêm', 'yêm'], correctAnswer: 'yêu' },
//   { id: 3, mp3: '/static/phatam/015am.mp3', choices: ['âm', 'ap', 'iêm', 'yêm'], correctAnswer: 'âm' },
// ]

function getChoices(rowIndex, colIndex) {
  var choices = [];
  choices.push(syllablesTable[rowIndex][colIndex]);

  var _loop = function _loop() {
    var j = Math.floor(Math.random() * 10); // console.log('j',j,'syllablesTable[rowIndex]',syllablesTable[rowIndex],'am', syllablesTable[rowIndex][j]);

    if (!choices.find(function (e) {
      return e === syllablesTable[rowIndex][j];
    })) {
      choices.push(syllablesTable[rowIndex][j]);
    }
  };

  for (var i = 9; i > 0 && choices.length < 4; i--) {
    _loop();
  }

  shuffleArray(choices);
  return choices;
} // Hàm chuyển âm sang tiếng Việt không dấu


function getExercises() {
  var exercises = [];
  syllablesTable.map(function (row, rowIndex) {
    return row.map(function (syllable, colIndex) {
      exercises.push({
        id: rowIndex * 100 + colIndex,
        mp3: "/static/phatam/".concat(rowIndex > 8 ? rowIndex + 1 : '0' + (rowIndex + 1)).concat(colIndex < 9 ? colIndex + 1 : 'a').concat(removeVietnameseTones(syllable), ".mp3"),
        choices: getChoices(rowIndex, colIndex),
        correctAnswer: syllable
      });
    });
  });
  return exercises;
}
; // Hàm chuyển âm sang tiếng Việt không dấu

function removeVietnameseTones(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}
;

/***/ })

})
//# sourceMappingURL=phat-am-tv.js.b2e19ba13d76ce1f98fa.hot-update.js.map