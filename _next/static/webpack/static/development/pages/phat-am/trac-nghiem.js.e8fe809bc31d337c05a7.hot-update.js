webpackHotUpdate("static/development/pages/phat-am/trac-nghiem.js",{

/***/ "./components/hoctaphieuan/constantsPhatAm.js":
/*!****************************************************!*\
  !*** ./components/hoctaphieuan/constantsPhatAm.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));

var syllablesTable = [["am", "ap", "ăm", "ăp", "âm", "âp", "em", "ep", "im", "ip"], ["iêm", "yêm", "iêp", "om", "op", "ôm", "ôp", "ơm", "ơp", "um"], ["up", "uôm", "ươm", "ươp", "an", "at", "ăn", "ăt", "ân", "ât"], ["en", "et", "ên", "êt", "in", "it", "iên", "iêt", "yên", "yêt"], ["on", "ot", "ôn", "ôt", "ơn", "ơt", "un", "ut", "ưt", "uôn"], ["uôt", "ươn", "ươt", "ang", "ac", "ăng", "ăc", "âng", "âc", "eng"], ["ec", "iêng", "yêng", "iêc", "ong", "oc", "ông", "ôc", "ung", "uc"], ["ưng", "ưc", "uông", "uôc", "ương", "ươc", "anh", "ach", "ênh", "êch"], ["inh", "ich", "ai", "ay", "oi", "ây", "ôi", "ơi", "ui", "ưi"], ["uôi", "ươi", "ao", "eo", "au", "âu", "êu", "iu", "iêu", "yêu"], ["ưu", "ươu", "oa", "oe", "uê", "ươ", "uy", "uya", "oam", "oăm"], ["oan", "oat", "oăn", "oăt", "uân", "uât", "oen", "oet", "uyên", "uyêt"], ["uyn", "uyt", "oang", "oac", "oăng", "oăc", "oanh", "oach", "uênh", "uêch"], ["uynh", "uych", "oai", "oay", "uây", "oong", "ooc", "uyp", "oeo", "uêu"], ["oao", "oap", "uyu", "uâng", "", "", "", "", "", ""]];
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
}]; // Hàm chuyển âm sang tiếng Việt không dấu

var removeVietnameseTones = function removeVietnameseTones(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
};

module.exports = {
  exercises: exercises,
  removeVietnameseTones: removeVietnameseTones
};

/***/ })

})
//# sourceMappingURL=trac-nghiem.js.e8fe809bc31d337c05a7.hot-update.js.map