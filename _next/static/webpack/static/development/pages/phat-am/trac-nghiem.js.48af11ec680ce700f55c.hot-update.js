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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      selectedExercies = _useState[0],
      setSelectedExercies = _useState[1]; // useEffect(() => {
  //   // Reset state when the question changes
  //   setSelectedAnswer(null);
  //   setIsAnswered(false);
  // }, [currentIndex]);


  return __jsx("div", null, __jsx("div", {
    className: "divRow"
  }, __jsx("button", {
    key: index,
    onClick: function onClick() {
      return handleAnswerSelection(choice);
    },
    disabled: isAnswered,
    style: {
      padding: '12px 25px',
      margin: '10px',
      backgroundColor: selectedAnswer === choice ? choice === correctAnswer ? 'green' : 'red' : '#f0f0f0',
      color: selectedAnswer === choice ? 'white' : 'black',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      border: 'none'
    }
  }, choice)), __jsx(_QuizComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    exercises: exercises1
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QuizList);

/***/ })

})
//# sourceMappingURL=trac-nghiem.js.48af11ec680ce700f55c.hot-update.js.map