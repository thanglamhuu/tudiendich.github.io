webpackHotUpdate("static/development/pages/phat-am/trac-nghiem.js",{

/***/ "./components/hoctaphieuan/QuizList.js":
/*!*********************************************!*\
  !*** ./components/hoctaphieuan/QuizList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constantsPhatAm */ "./components/hoctaphieuan/constantsPhatAm.js");
/* harmony import */ var _QuizComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizComponent */ "./components/hoctaphieuan/QuizComponent.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var exercisesCong10 = [{
  id: 1,
  question: "2 + 3 =",
  choices: ['4', '5', '6', '7'],
  correctAnswer: '5'
}, {
  id: 2,
  question: "2 + 4 =",
  choices: ['4', '5', '6', '7'],
  correctAnswer: '6'
}];

var QuizList = function QuizList() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["exercisesPhatAm"]),
      selectedExercies = _useState[0],
      setSelectedExercies = _useState[1]; // useEffect(() => {
  //   // Reset state when the question changes
  //   setSelectedAnswer(null);
  //   setIsAnswered(false);
  // }, [currentIndex]);


  return __jsx("div", {
    className: "divCol"
  }, __jsx("div", {
    className: "divRow"
  }, __jsx("button", {
    key: index,
    onClick: function onClick() {
      return selectedExercies(_constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["exercisesPhatAm"]);
    },
    disabled: isAnswered,
    className: "btnChonBaiTap" // style={{
    //   color: selectedAnswer === choice ? 'white' : 'black',
    //   backgroundColor: selectedAnswer === choice ? (choice === correctAnswer ? 'green' : 'red') : '#f0f0f0'
    // }}

  }, "\u0110\xE1nh v\u1EA7n")), __jsx(_QuizComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    exercises: _constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["exercisesPhatAm"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QuizList);

/***/ }),

/***/ "./components/hoctaphieuan/constantsPhatAm.js":
/*!****************************************************!*\
  !*** ./components/hoctaphieuan/constantsPhatAm.js ***!
  \****************************************************/
/*! exports provided: soundDung, soundSai, syllablesTable, exercisesPhatAm, getExercises, removeVietnameseTones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soundDung", function() { return soundDung; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soundSai", function() { return soundSai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syllablesTable", function() { return syllablesTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exercisesPhatAm", function() { return exercisesPhatAm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExercises", function() { return getExercises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeVietnameseTones", function() { return removeVietnameseTones; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

 // Sound arrays for correct and incorrect answers

var soundDung = ['/static/sounds/d_anime-wow.mp3', '/static/sounds/d_Bright_UI_.aac', '/static/sounds/d_Bubble_Click.aac', '/static/sounds/d_Coin_Collecting.aac', '/static/sounds/d_CONCERT_CROWD_CLAP.mp3', '/static/sounds/d_General_UI.aac', '/static/sounds/d_Menu_Appear_Double_Bubble_.aac', '/static/sounds/d_woooooaah.mp3', '/static/sounds/d_wow.mp3'];
var soundSai = ['/static/sounds/s_AirHorn-DJ_Horns.mp3', '/static/sounds/s_Alarm-Mid-High.aac', '/static/sounds/s_AS_Synth_Ramp_Upl.aac', '/static/sounds/s_babylaugh.mp3', '/static/sounds/s_bad.mp3', '/static/sounds/s_Cartoon_Boing_.aac', '/static/sounds/s_fail.mp3', '/static/sounds/s_laughing-man.mp3', '/static/sounds/s_Meow_Farm_Game.aac', '/static/sounds/s_Ni_Sound_Cartoon.aac', '/static/sounds/s_Regular_Braam.mp3', '/static/sounds/s_Vintage_Scream.mp3', '/static/sounds/s_whip.mp3'];

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
var exercisesPhatAm = getExercises(); // export const exercises = [
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

  choices = shuffleArray(choices);
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
//# sourceMappingURL=trac-nghiem.js.eb094c3c1c73b238e6a2.hot-update.js.map