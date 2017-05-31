/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// A question has one or more answer, and one or more is valid.
var quiz = {
  title: 'Balance Sheet quiz',
  questions: [{
    text: "1. Another name for the balance sheet is",
    responses: [{ text: 'Statement Of Operations' }, { text: 'Statement Of Financial Position', correct: true }],
    hint: 'This is a hint'
  }, {
    text: "2. The balance sheet heading will specify a",
    responses: [{ text: 'Point In Time', correct: true }, { text: 'Period Of Time' }],
    hint: 'This is a hint'
  }, {
    text: "3. Which of the following is a category or element of the balance sheet?",
    responses: [{ text: 'Expenses' }, { text: 'Gains' }, { text: 'Liabilities', correct: true }, { text: 'Losses' }],
    hint: 'This is a hint'
  }, {
    text: "4. Which of the following is an asset account?",
    responses: [{ text: 'Accounts Payable' }, { text: 'Prepaid Insurance', correct: true }, { text: 'Unearned Revenue' }],
    hint: 'This is a hint'
  }, {
    text: "5. Which of the following is a contra account?",
    responses: [{ text: 'Accumulated Depreciation', correct: true }, { text: 'Mary Smith, Capital' }],
    hint: 'This is a hint'
  }, {
    text: "6. What is the normal balance for an asset account?",
    responses: [{ text: 'Debit', correct: true }, { text: 'Credit' }],
    hint: 'This is a hint'
  }, {
    text: "7. What is the normal balance for liability accounts?",
    responses: [{ text: 'Debit' }, { text: 'Credit', correct: true }],
    hint: 'This is a hint'
  }, {
    text: "8. What is the normal balance for stockholders' equity and owner's equity accounts?",
    responses: [{ text: 'Debit' }, { text: 'Credit', correct: true }],
    hint: 'This is a hint'
  }, {
    text: "9. Which of the following would not be a current asset?",
    responses: [{ text: 'Accounts Receivable' }, { text: 'Land', correct: true }, { text: 'Prepaid Insurance' }, { text: 'Supplies' }],
    hint: 'This is a hint'
  }, {
    text: "10. Which of the following would normally be a current liability?",
    responses: [{ text: 'Note Payable Due In Two Years' }, { text: 'Unearned Revenue', correct: true }],
    hint: 'This is a hint'
  }, {
    text: "11. Deferred credits will appear on the balance sheet with the",
    responses: [{ text: 'Assets' }, { text: 'Liabilities', correct: true }, { text: 'Owner\'s/Stockholders\' Equity' }],
    hint: 'This is a hint'
  }]
};

new Vue({
  el: '#app',
  data: {
    quiz: quiz,
    // Store current question index
    questionIndex: 0,
    // An array initialized with "false" values for each question
    // It means: "did the user answered correctly to the question n?" "no".
    userResponses: Array(quiz.questions.length).fill(false)
  },
  // The view will trigger these methods on click
  methods: {
    // Go to next question
    next: function next() {
      this.questionIndex++;
    },
    // Go to previous question
    prev: function prev() {
      this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function score() {
      return this.userResponses.filter(function (val) {
        return val;
      }).length;
    },

    // Restart quiz
    start: function start() {
      this.questionIndex = 0;
      $('#app').find('label').removeClass('active').end().find('[type="radio"]').prop('checked', false);
    }
  }
});

/***/ })

/******/ });