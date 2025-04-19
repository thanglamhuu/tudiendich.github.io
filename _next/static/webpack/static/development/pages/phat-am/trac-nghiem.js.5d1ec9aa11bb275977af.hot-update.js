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




var exercisesCongSoNhoHon10 = Object(_constantsSoHoc__WEBPACK_IMPORTED_MODULE_2__["getExercisesCongSoNhoHon10"])();
var exercisesCongPv10 = Object(_constantsSoHoc__WEBPACK_IMPORTED_MODULE_2__["getExercisesCongPv10"])();
; // const exercisesCong10 = [
//   { id: 1, question: "2 + 3 =", choices: ['4', '5', '6', '7'], correctAnswer: '5' },
//   { id: 2, question: "2 + 4 =", choices: ['4', '5', '6', '7'], correctAnswer: '6' },
// ];

var danhSachExercies = [{
  t: "Cộng phạm vi 10",
  e: exercisesCongPv10
}, // {t: "Cộng số nhỏ hơn 10", e: exercisesCongSoNhoHon10},
{
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

/***/ })

})
//# sourceMappingURL=trac-nghiem.js.5d1ec9aa11bb275977af.hot-update.js.map