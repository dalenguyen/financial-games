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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

init();

var totalAssetVal = 0,
    totalLiabilityVal = 0;

// Reset button
document.getElementById("reset").addEventListener("click", init);

function init() {
  totalAssetVal = 0;
  totalLiabilityVal = 0;
  $("#totalAsset").html("$" + totalAssetVal);
  $("#totalLiability").html("$" + totalLiabilityVal);

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css({
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  });

  // Reset the game
  $('#assetSlot').html('');
  $('#liabilitySlot').html('');
  $('#equitySlot').html('');
  $('#gameContent').html('');

  // Create the game content
  var gameNumbers = { 500: "Cash", 200: "Account Payable", 300: "Common Stock" };
  for (var k in gameNumbers) {
    if (gameNumbers.hasOwnProperty(k)) {
      // alert("Key is " + k + ", value is" + gameNumbers[k]);
      $('<li class="box" draggable="true" value="' + k + '">' + gameNumbers[k] + '<span class="pull-right">$' + k + "</span>" + '</li>').data('number', k).attr('id', gameNumbers[k]).appendTo('#gameContent');
    }
  }
}

var dragger, parentID;

$('#mainContent').on({
  dragstart: function dragstart(e) {
    dragger = e.target;
    parentID = this.parentNode.id;
  }
}, "li");

$('.target').on({
  dragstart: function dragstart(e) {
    // dragger = e.target;
  },

  dragenter: function dragenter(e) {
    e.preventDefault();
  },

  drop: function drop(e) {
    var draggerValue = dragger.value;
    // Drag item to gameContent
    if (e.target.id === "gameContent" || e.target.children.id === "gameContent" || e.target.id === "gamebox-drag" || e.target.parentNode.id === "gameContent") {
      $("#gameContent").append(dragger);

      if (parentID === "assetSlot") {
        totalAssetVal -= Number(draggerValue);
        $("#totalAsset").html("$" + totalAssetVal);
      } else if (parentID === "liabilitySlot" || parentID === "equitySlot") {
        totalLiabilityVal -= Number(draggerValue);
        $("#totalLiability").html("$" + totalLiabilityVal);
      }
    } else {

      if (e.target.parentNode.id === "assetSlot") {
        $(e.target.parentNode).append(dragger);
        if (parentID === "gameContent") {
          totalAssetVal += Number(draggerValue);
          $("#totalAsset").html("$" + totalAssetVal);
        } else if (parentID === "assetSlot") {
          // Don't add value
        } else {
          totalAssetVal += Number(draggerValue);
          $("#totalAsset").html(totalAssetVal);
          totalLiabilityVal -= Number(draggerValue);
          $("#totalLiability").html("$" + totalLiabilityVal);
        }
      } else if (e.target.children[0]) {
        if (e.target.children[0].id === "assetSlot") {
          $(e.target.children).append(dragger);
          if (parentID === "gameContent") {
            totalAssetVal += Number(draggerValue);
            $("#totalAsset").html("$" + totalAssetVal);
          } else if (parentID === "assetSlot") {
            // Don't add value
          } else {
            totalAssetVal += Number(draggerValue);
            $("#totalAsset").html("$" + totalAssetVal);
            totalLiabilityVal -= Number(draggerValue);
            $("#totalLiability").html("$" + totalLiabilityVal);
          }
        }
      }

      if (e.target.parentNode.id === "liabilitySlot" || e.target.parentNode.id === "equitySlot") {
        console.log(1);
        $(e.target.parentNode).append(dragger);

        if (parentID === "gameContent") {
          totalLiabilityVal += Number(draggerValue);
          $("#totalLiability").html("$" + totalLiabilityVal);
        } else if (parentID === "liabilitySlot" || parentID === "equitySlot") {
          // Don't add value
        } else if (parentID === "assetSlot") {
          totalAssetVal -= Number(draggerValue);
          $("#totalAsset").html("$" + totalAssetVal);
          totalLiabilityVal += Number(draggerValue);
          $("#totalLiability").html("$" + totalLiabilityVal);
        }
      } else if (e.target.children[0]) {
        if (e.target.children[0].id === "liabilitySlot" || e.target.children[0].id === "equitySlot") {
          $(e.target.children).append(dragger);
          if (parentID === "gameContent") {
            totalLiabilityVal += Number(draggerValue);
            $("#totalLiability").html("$" + totalLiabilityVal);
          } else if (parentID === "liabilitySlot" || parentID === "equitySlot") {
            // Don't add value
          } else if (parentID === "assetSlot") {
            totalAssetVal -= Number(draggerValue);
            $("#totalAsset").html("$" + totalAssetVal);
            totalLiabilityVal += Number(draggerValue);
            $("#totalLiability").html("$" + totalLiabilityVal);
          }
        }
      }
    }

    $(this).css("outline", "1px solid #666666");
  },

  dragover: function dragover(e) {
    $(this).css("outline", "2px dashed #666666");
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }

    return false;
  },

  dragleave: function dragleave(e) {
    $(this).css("outline", "1px solid #666666");
  }

});

/***/ })

/******/ });