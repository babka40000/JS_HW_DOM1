/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_widget_game_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-widget/game-widget */ \"./src/js/game-widget/game-widget.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const gameWidget = new _game_widget_game_widget__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('.playing-field'));\n  gameWidget.generateGoblin();\n  setInterval(() => {\n    gameWidget.generateGoblin();\n  }, 1000);\n});\n\n//# sourceURL=webpack://js_hw_dom1/./src/js/app.js?");

/***/ }),

/***/ "./src/js/game-widget/game-widget.js":
/*!*******************************************!*\
  !*** ./src/js/game-widget/game-widget.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameWiget; }\n/* harmony export */ });\n/* harmony import */ var _img_goblin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/goblin.png */ \"./src/js/game-widget/img/goblin.png\");\n\nclass GameWiget {\n  constructor(element) {\n    this._xPosition = 0;\n    this._yPosition = 0;\n    this._element = element;\n  }\n  _getFieldByPosition() {\n    const row = this._element.querySelectorAll('.playing-field-row')[this._yPosition - 1];\n    const fieldItem = row.querySelectorAll('.playing-field-item')[this._xPosition - 1];\n    return fieldItem;\n  }\n  _destroyGoblin() {\n    this._getFieldByPosition().querySelector('.goblin-img').remove();\n  }\n  _generatePositions() {\n    let x;\n    let y;\n    do {\n      x = Math.round(Math.random() * 3 + 1);\n      y = Math.round(Math.random() * 3 + 1);\n    } while (x === this._xPosition && y === this._yPosition);\n    this._xPosition = x;\n    this._yPosition = y;\n  }\n  generateGoblin() {\n    if (this._xPosition !== 0 || this._xPosition !== 0) {\n      this._destroyGoblin();\n    }\n    this._generatePositions();\n    this._getFieldByPosition().insertAdjacentHTML('afterBegin', `<img class=\"goblin-img\" src=\"${_img_goblin_png__WEBPACK_IMPORTED_MODULE_0__}\"></img>`);\n  }\n}\n\n//# sourceURL=webpack://js_hw_dom1/./src/js/game-widget/game-widget.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n//# sourceURL=webpack://js_hw_dom1/./src/index.js?");

/***/ }),

/***/ "./src/js/game-widget/img/goblin.png":
/*!*******************************************!*\
  !*** ./src/js/game-widget/img/goblin.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2dbd01ce16c0fa83cb67.png\";\n\n//# sourceURL=webpack://js_hw_dom1/./src/js/game-widget/img/goblin.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;