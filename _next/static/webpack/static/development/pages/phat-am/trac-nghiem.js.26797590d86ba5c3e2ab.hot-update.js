webpackHotUpdate("static/development/pages/phat-am/trac-nghiem.js",{

/***/ "./components/hoctaphieuan/constantsSoHoc.js":
/*!***************************************************!*\
  !*** ./components/hoctaphieuan/constantsSoHoc.js ***!
  \***************************************************/
/*! exports provided: getExercisesCong10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExercisesCong10", function() { return getExercisesCong10; });
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
}

function getChoices(a, b) {
  var choices = [];
  choices.push(a + b);

  for (var i = a + 1; i > 0 && choices.length < 4; i--) {
    for (var j = b + 1; j > 0 && choices.length < 4; j--) {
      if (!choices.find(function (e) {
        return e === i + j;
      })) {
        choices.push(i + j);
      }
    }
  }

  choices = shuffleArray(choices);
  return choices;
} // Hàm chuyển âm sang tiếng Việt không dấu


function getExercisesCong10() {
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
  }

  return exercises;
}
;

/***/ })

})
//# sourceMappingURL=trac-nghiem.js.26797590d86ba5c3e2ab.hot-update.js.map