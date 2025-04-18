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
/* harmony import */ var _constantsSoHoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constantsSoHoc */ "./components/hoctaphieuan/constantsSoHoc.js");
/* harmony import */ var _QuizComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuizComponent */ "./components/hoctaphieuan/QuizComponent.js");
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
var danhSachExercies = [{
  t: "Cộng phạm vi 10",
  e: exercisesCong10
}, {
  t: 'Đánh vần',
  e: _constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["exercisesPhatAm"]
}];

var QuizList = function QuizList() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      indexBaiTap = _useState[0],
      setindexBaiTap = _useState[1]; // useEffect(() => {
  //   // Reset state when the question changes
  //   setSelectedAnswer(null);
  //   setIsAnswered(false);
  // }, [currentIndex]);


  return __jsx("div", {
    className: "divCol"
  }, __jsx("div", {
    className: "divRow"
  }, danhSachExercies.map(function (_ref, index) {
    var t = _ref.t,
        e = _ref.e;
    return __jsx("button", {
      key: index,
      onClick: function onClick() {
        return setindexBaiTap(index);
      },
      className: "btnChonBaiTap ".concat(indexBaiTap === index ? 'btnChonBaiTapActive' : '')
    }, t);
  })), __jsx(_QuizComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    exercises: danhSachExercies[indexBaiTap].e
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QuizList);

/***/ }),

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
        id: rowIndex * 100 + colIndex,
        question: "".concat(i, " + ").concat(j, " =?}"),
        choices: getChoices(i + j),
        correctAnswer: i + j
      });
    }
  }

  return exercises;
}
;

/***/ })

})
//# sourceMappingURL=trac-nghiem.js.e2f13e923e0ef31481bb.hot-update.js.map