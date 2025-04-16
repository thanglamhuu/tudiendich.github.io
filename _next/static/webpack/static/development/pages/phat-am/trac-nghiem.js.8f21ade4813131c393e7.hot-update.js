webpackHotUpdate("static/development/pages/phat-am/trac-nghiem.js",{

/***/ "./components/hoctaphieuan/QuizComponent.js":
/*!**************************************************!*\
  !*** ./components/hoctaphieuan/QuizComponent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
  // Sound arrays for correct and incorrect answers


  var soundDung = ['/static/sounds/anime-wow.mp3', '/static/sounds/woooooaah.mp3', '/static/sounds/wow.mp3'];
  var soundSai = ['/static/sounds/babylaugh.mp3', '/static/sounds/bad.mp3', '/static/sounds/fail.mp3', '/static/sounds/laughing-man.mp3', '/static/sounds/whip.mp3'];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      audio = _useState5[0],
      setAudio = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Initialize Audio only in the client-side
    var currentAudio = new Audio(exercises[currentIndex].mp3);
    setAudio(currentAudio); // Cleanup audio when the component is unmounted or when currentIndex changes

    return function () {
      currentAudio.pause();
    };
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

    if (answer === exercises[currentIndex].correctAnswer) {
      setCorrectCount(correctCount + 1); // Play a random sound for correct answer

      var randomCorrectSound = soundDung[Math.floor(Math.random() * soundDung.length)];
      new Audio(randomCorrectSound).play();
    } else {
      // Play a random sound for incorrect answer
      var randomIncorrectSound = soundSai[Math.floor(Math.random() * soundSai.length)];
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

  var _exercises$currentInd = exercises[currentIndex],
      choices = _exercises$currentInd.choices,
      correctAnswer = _exercises$currentInd.correctAnswer;
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
  }, "H\xE3y ch\u1ECDn t\u1EEB b\u1EA1n nghe th\u1EA5y"), __jsx("button", {
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
  }, "\u25B6\uFE0F Ph\xE1t \xE2m"), __jsx("div", {
    style: {
      marginTop: '20px',
      textAlign: 'center'
    }
  }, choices.map(function (choice, index) {
    return __jsx("button", {
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
    }, choice);
  })), isAnswered && __jsx("div", {
    style: {
      marginTop: '20px',
      textAlign: 'center'
    }
  }, __jsx("strong", {
    style: {
      color: selectedAnswer === correctAnswer ? 'green' : 'red'
    }
  }, selectedAnswer === correctAnswer ? 'Bạn đã chọn đúng!' : 'Bạn đã chọn sai!')), __jsx("div", {
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

function App() {
  var exercises = [{
    id: 1,
    mp3: '/static/phatam/01aip.mp3',
    choices: ['ip', 'ap', 'iêm', 'yêm'],
    correctAnswer: 'ip'
  }, {
    id: 2,
    mp3: '/static/phatam/10ayeu.mp3',
    choices: ['yêu', 'ap', 'iêm', 'yêm'],
    correctAnswer: 'yêu'
  }, {
    id: 3,
    mp3: '/static/phatam/015am.mp3',
    choices: ['âm', 'ap', 'iêm', 'yêm'],
    correctAnswer: 'âm'
  }];
  return __jsx("div", null, __jsx(QuizComponent, {
    exercises: exercises
  }));
}

/***/ })

})
//# sourceMappingURL=trac-nghiem.js.8f21ade4813131c393e7.hot-update.js.map