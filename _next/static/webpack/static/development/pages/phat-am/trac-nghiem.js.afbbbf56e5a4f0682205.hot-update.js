webpackHotUpdate("static/development/pages/phat-am/trac-nghiem.js",{

/***/ "./components/hoctaphieuan/QuizComponent.js":
/*!**************************************************!*\
  !*** ./components/hoctaphieuan/QuizComponent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constantsPhatAm */ "./components/hoctaphieuan/constantsPhatAm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var QuizComponent = function QuizComponent(_ref) {
  var exercises = _ref.exercises;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      currentIndex = _useState[0],
      setCurrentIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      selectedAnswer = _useState2[0],
      setSelectedAnswer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAnswered = _useState3[0],
      setIsAnswered = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      correctCount = _useState4[0],
      setCorrectCount = _useState4[1]; // Track the number of correct answers


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      audio = _useState5[0],
      setAudio = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCorrectCount(0);
  }, [exercises]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _exercises = exercises[currentIndex < exercises.length ? currentIndex : 0],
        choices = _exercises.choices,
        correctAnswer = _exercises.correctAnswer,
        question = _exercises.question,
        mp3 = _exercises.mp3; // Initialize Audio only for exercises with mp3

    if (mp3) {
      var currentAudio = new Audio(exercises[currentIndex].mp3);
      setAudio(currentAudio); // Play the audio as soon as the question is changed or first loaded

      currentAudio.play(); // Cleanup audio when the component is unmounted or when currentIndex changes

      return function () {
        currentAudio.pause();
      };
    } else {
      setAudio(null); // No audio for this exercise
    }
  }, [currentIndex, exercises]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Reset state when the question changes
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [currentIndex]);

  var handlePlayAudio = function handlePlayAudio() {
    if (audio) {
      audio.play();
    }
  };

  var handleAnswerSelection = function handleAnswerSelection(answer) {
    setSelectedAnswer(answer);
    setIsAnswered(true); // Check if the selected answer is correct

    var correctAnswer = exercises[currentIndex].correctAnswer;

    if (answer === correctAnswer) {
      setCorrectCount(correctCount + 1); // Play a random sound for correct answer

      var randomCorrectSound = _constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["soundDung"][Math.floor(Math.random() * _constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["soundDung"].length)];
      new Audio(randomCorrectSound).play();
    } else {
      // Play a random sound for incorrect answer
      var randomIncorrectSound = _constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["soundSai"][Math.floor(Math.random() * _constantsPhatAm__WEBPACK_IMPORTED_MODULE_1__["soundSai"].length)];
      new Audio(randomIncorrectSound).play();
    }
  };

  var handleNext = function handleNext() {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  var handlePrevious = function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  var _exercises2 = exercises[currentIndex < exercises.length ? currentIndex : 0],
      choices = _exercises2.choices,
      correctAnswer = _exercises2.correctAnswer,
      question = _exercises2.question,
      mp3 = _exercises2.mp3;
  return __jsx("div", {
    style: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: 'auto'
    }
  }, __jsx("h2", {
    style: {
      color: '#007BFF',
      fontSize: '28px',
      textAlign: 'center'
    }
  }, question ? question : 'Hãy chọn từ bạn nghe thấy'), mp3 && __jsx("div", {
    className: "divRow"
  }, __jsx("button", {
    onClick: handlePlayAudio,
    style: {
      padding: '12px 25px',
      backgroundColor: '#007BFF',
      color: '#fff',
      borderRadius: '10px',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'block',
      margin: '20px auto'
    }
  }, "\u25B6\uFE0F Ph\xE1t \xE2m")), choices && __jsx("div", {
    style: {
      marginTop: '20px',
      textAlign: 'center'
    }
  }, choices.map(function (choice, index) {
    return __jsx("button", {
      key: choice,
      onClick: function onClick() {
        return handleAnswerSelection(choice);
      },
      disabled: isAnswered,
      style: {
        padding: '10px 20px',
        margin: '10px',
        backgroundColor: selectedAnswer === choice ? choice === correctAnswer ? 'green' : 'red' : '#f0f0f0',
        color: selectedAnswer === choice ? 'white' : 'black',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        border: 'none'
      }
    }, choice);
  })), question && isAnswered && __jsx("div", {
    style: {
      marginTop: '20px',
      textAlign: 'center'
    }
  }, __jsx("strong", {
    style: {
      color: selectedAnswer === correctAnswer ? 'green' : 'red'
    }
  }, selectedAnswer === correctAnswer ? "\u0110\xFAng! C\xE2u tr\u1EA3 l\u1EDDi l\xE0: ".concat(correctAnswer) : "Sai! C\xE2u tr\u1EA3 l\u1EDDi \u0111\xFAng l\xE0: ".concat(correctAnswer))), __jsx("div", {
    style: {
      marginTop: '20px',
      textAlign: 'center'
    }
  }, __jsx("strong", null, "C\xE2u tr\u1EA3 l\u1EDDi \u0111\xFAng: ", correctCount)), __jsx("div", {
    style: {
      marginTop: '20px',
      textAlign: 'center'
    }
  }, __jsx("button", {
    onClick: handlePrevious,
    disabled: currentIndex === 0,
    style: {
      padding: '10px 20px',
      marginRight: '10px',
      backgroundColor: '#ccc',
      borderRadius: '5px'
    }
  }, "\u25C0\uFE0F Tr\u01B0\u1EDBc"), __jsx("button", {
    onClick: handleNext,
    disabled: currentIndex === exercises.length - 1,
    style: {
      padding: '10px 20px',
      backgroundColor: '#ccc',
      borderRadius: '5px'
    }
  }, "Sau \u25B6\uFE0F")));
};

/* harmony default export */ __webpack_exports__["default"] = (QuizComponent);

/***/ })

})
//# sourceMappingURL=trac-nghiem.js.afbbbf56e5a4f0682205.hot-update.js.map