webpackHotUpdate("static/development/pages/phat-am/trac-nghiem.js",{

/***/ "./components/hoctaphieuan/constantsSoHoc.js":
/*!***************************************************!*\
  !*** ./components/hoctaphieuan/constantsSoHoc.js ***!
  \***************************************************/
/*! exports provided: getExercisesCongPv10, getExercisesCongSoNhoHon10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExercisesCongPv10", function() { return getExercisesCongPv10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExercisesCongSoNhoHon10", function() { return getExercisesCongSoNhoHon10; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constantsPhatAm */ "./components/hoctaphieuan/constantsPhatAm.js");



function getChoices(a, b) {
  var choices = [];
  choices.push(a + b);

  for (var i = a + (a > 2 ? 1 : 3); i > 0 && choices.length < 4; i--) {
    for (var j = b + 1; j > 0 && choices.length < 4; j--) {
      if (!choices.find(function (e) {
        return e === i + j;
      })) {
        choices.push(i + j);
      }
    }
  }

  choices = Object(_constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["shuffleArray"])(choices);
  return choices;
}

function getExercisesCongPv10() {
  var exercises = [];

  for (var i = 0; i < 10; i++) {
    for (var j = 10 - i; j > 0; j--) {
      exercises.push({
        id: "".concat(i, "_").concat(j),
        question: "".concat(i, " + ").concat(j, " = ?"),
        choices: getChoices(i, j),
        correctAnswer: i + j
      });
    }
  }

  return Object(_constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["shuffleArray"])(exercises);
}
function getExercisesCongSoNhoHon10() {
  var exercises = [];

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      exercises.push({
        id: "".concat(i, "_").concat(j),
        question: "".concat(i, " + ").concat(j, " = ?"),
        choices: getChoices(i, j),
        correctAnswer: i + j
      });
    }
  } // console.log('getExercisesCongSoNhoHon10',exercises);


  return Object(_constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["shuffleArray"])(exercises);
}
;

/***/ })

})
//# sourceMappingURL=trac-nghiem.js.242af9bd6ed39b3d5489.hot-update.js.map