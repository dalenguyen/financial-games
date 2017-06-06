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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 42:
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
    responses: [{ text: 'Statement Of Operations', correct: false }, { text: 'Statement Of Financial Position', correct: true }],
    hint: 'The balance sheet is also referred to as the statement of financial position or the statement of financial condition.',
    showHint: false
  }, {
    text: "2. The balance sheet heading will specify a",
    responses: [{ text: 'Point In Time', correct: true }, { text: 'Period Of Time', correct: false }],
    hint: 'The balance sheet is at an instant or point in time.',
    showHint: false
  }, {
    text: "3. Which of the following is a category or element of the balance sheet?",
    responses: [{ text: 'Expenses', correct: false }, { text: 'Gains', correct: false }, { text: 'Liabilities', correct: true }, { text: 'Losses', correct: false }],
    hint: 'Liabilities are an element of the balance sheet along with assets and owner\'s/stockholders\' equity.',
    showHint: false
  }, {
    text: "4. Which of the following is an asset account?",
    responses: [{ text: 'Accounts Payable', correct: false }, { text: 'Prepaid Insurance', correct: true }, { text: 'Unearned Revenue', correct: false }],
    hint: 'Prepaid Insurance is a current asset. Prepaid costs that have not yet expired are considered to be assets.',
    showHint: false
  }, {
    text: "5. Which of the following is a contra account?",
    responses: [{ text: 'Accumulated Depreciation', correct: true }, { text: 'Mary Smith, Capital', correct: false }],
    hint: 'Accumulated Depreciation is a contra asset account. It is located in the long-term asset section of the balance sheet under the heading of property, plant, and equipment.',
    showHint: false
  }, {
    text: "6. What is the normal balance for an asset account?",
    responses: [{ text: 'Debit', correct: true }, { text: 'Credit', correct: false }],
    hint: 'Accumulated Depreciation is a contra asset account. It is located in the long-term asset section of the balance sheet under the heading of property, plant, and equipment.',
    showHint: false
  }, {
    text: "7. What is the normal balance for liability accounts?",
    responses: [{ text: 'Debit', correct: false }, { text: 'Credit', correct: true }],
    hint: 'Liability accounts normally have credit balances.',
    showHint: false
  }, {
    text: "8. What is the normal balance for stockholders' equity and owner's equity accounts?",
    responses: [{ text: 'Debit', correct: false }, { text: 'Credit', correct: true }],
    hint: 'Owner\'s/stockholders\' accounts normally have credit balances.',
    showHint: false
  }, {
    text: "9. Which of the following would not be a current asset?",
    responses: [{ text: 'Accounts Receivable', correct: false }, { text: 'Land', correct: true }, { text: 'Prepaid Insurance', correct: false }, { text: 'Supplies', correct: false }],
    hint: 'Land is not a current asset, because land will NOT turn to cash within one year of the balance sheet date, or within the operating cycle if the operating cycle is longer than one year.',
    showHint: false
  }, {
    text: "10. Which of the following would normally be a current liability?",
    responses: [{ text: 'Note Payable Due In Two Years', correct: false }, { text: 'Unearned Revenue', correct: true }],
    hint: 'Unearned Revenue will most likely be earned within one year of the balance sheet date. Therefore it is a current liability. (As it is earned, it moves from the balance sheet to the income statement as revenue.)',
    showHint: false
  }, {
    text: "11. Deferred credits will appear on the balance sheet with the",
    responses: [{ text: 'Assets', correct: false }, { text: 'Liabilities', correct: true }, { text: 'Owner\'s Stockholders\' Equity', correct: false }],
    hint: 'Deferred credits appear with the liabilities.',
    showHint: false
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
      var correctCount = 0;
      var self = this;

      this.quiz.questions.filter(function (val, i) {
        val.userAnswerCorrect = false;
        val.userAnswer = self.userResponses[i];

        val.responses.filter(function (ans, j) {
          if (ans.correct == true && val.userAnswer == ans.text) {
            correctCount++;
          }
        });
      });

      return correctCount;
    },

    // Restart quiz
    start: function start() {
      this.userResponses = [];
      this.questionIndex = 0;
    }
  }
});

/***/ })

/******/ });