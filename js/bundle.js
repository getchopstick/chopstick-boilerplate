/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mobilenav = __webpack_require__(1);

	var _mobilenav2 = _interopRequireDefault(_mobilenav);

	var _toggle = __webpack_require__(2);

	var _toggle2 = _interopRequireDefault(_toggle);

	var _hide = __webpack_require__(3);

	var _hide2 = _interopRequireDefault(_hide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _mobilenav2.default)();
	(0, _toggle2.default)();
	(0, _hide2.default)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = mobileNav;
	function mobileNav() {
	    var navigation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.js-nav');
	    var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $('.js-nav-trigger');


	    trigger.on('click', function () {
	        navigation.toggleClass('is-visible');
	        trigger.toggleClass('is-active');
	    });
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = toggle;
	function toggle() {
	    var showHideToggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.js-show-hide');

	    showHideToggle.on('touchstart click', function (e) {
	        var trigger = $(this);
	        // Check if action needs to be prevented
	        if (trigger.data("action") == "none") {
	            e.preventDefault();
	        }
	        showHide(trigger.data("target-selector"));
	        trigger.toggleClass('is-toggled');
	    });
	}

	function showHide(targets) {
	    $(targets).toggleClass('is-hidden');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = hide;
	function hide() {
	    var hide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.js-hide');

	    hide.on('click', function (e) {
	        e.preventDefault();
	        $(this).closest(hide).parent().addClass('is-hidden');
	    });
	}

/***/ }
/******/ ]);