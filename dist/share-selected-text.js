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

	__webpack_require__(1);
	__webpack_require__(3);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _popover = __webpack_require__(2);

	var _popover2 = _interopRequireDefault(_popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SelectedText = function () {

		/* @param {Array} selection_areas */

		function SelectedText(selection_areas) {
			_classCallCheck(this, SelectedText);

			/* Validate screen size */

			if (!this.isSmallerScreen()) this.init(selection_areas, ['twitter']);
		}

		_createClass(SelectedText, [{
			key: 'init',
			value: function init(selection_areas, social) {

				if (!Array.isArray(selection_areas)) throw new TypeError("The selection areas must be array");

				new _popover2.default(selection_areas, social);
			}
		}, {
			key: 'isSmallerScreen',
			value: function isSmallerScreen() {

				var screenWidth = window.innerWidth,
				    isSmall = screenWidth < 768 ? true : false;

				return isSmall;
			}
		}]);

		return SelectedText;
	}();

	exports.default = SelectedText;


	window.SelectedText = SelectedText;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	Popover Template:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	<div class="hl-sel-text">
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		<div class='hl-sel-text__btn'>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     			<a href='' class='hl-sel-text__btn--tt'></a>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     		</div>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	</div>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

	var _event = __webpack_require__(3);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Popover = function () {
		function Popover(selection_areas, socials) {
			_classCallCheck(this, Popover);

			this.socials = socials;

			this.hlSelectedText();
			this.Event = new _event2.default(selection_areas, 'data-hl-sel-text');
		}

		/* Mount Twitter Button */

		_createClass(Popover, [{
			key: 'twitterButton',
			value: function twitterButton() {
				var _this = this;

				var ttButton = document.createElement('A');
				ttButton.className = "hl-sel-text__btn--tt";
				ttButton.addEventListener("click", function (event) {
					_this.Event.twitterEventClick(event);
				});

				return ttButton;
			}

			/* Popover template */

		}, {
			key: 'hlSelectedText',
			value: function hlSelectedText() {

				var wrap = document.createElement('DIV'),
				    btns = document.createElement('DIV');

				wrap.className = "hl-sel-text";
				wrap.setAttribute("data-hl-sel-text", "");

				btns.className = "hl-sel-text__btn";

				var socials = this.socials;

				var funcs = socials.map(function (social) {
					return 'this.' + social.toLowerCase() + 'Button()';
				});

				var i = 0;

				for (i; i < funcs.length; i++) {
					btns.appendChild(eval(funcs[i]));
				}wrap.appendChild(btns);

				document.body.appendChild(wrap);
			}
		}]);

		return Popover;
	}();

	exports.default = Popover;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Event = function () {
		function Event(selection_areas, selected_text_wrap) {
			_classCallCheck(this, Event);

			this.selection_areas = selection_areas;

			this.selected_text_wrap = {

				ref: document.querySelector("[" + selected_text_wrap + "]"),
				width: document.querySelector("[" + selected_text_wrap + "]").offsetWidth,
				height: document.querySelector("[" + selected_text_wrap + "]").offsetHeight

			};

			this.currentSelection = "";

			this.init();
		}

		_createClass(Event, [{
			key: "init",
			value: function init() {
				var _this = this;

				document.addEventListener("mouseup", function (event) {

					var selection_parent_node = window.getSelection().getRangeAt(0).startContainer.parentNode,
					    i = _this.selection_areas.length;

					var can_show = false;

					while (i--) {

						if (selection_parent_node.id == _this.selection_areas[i].substring(1) || selection_parent_node.classList.contains(_this.selection_areas[i].substring(1)) || document.querySelector(_this.selection_areas[i]).contains(selection_parent_node)) {

							can_show = true;
							break;
						}
					}

					if (can_show === true) {

						_this.setSelection(window.getSelection().toString());

						if (_this.getSelection() !== '') {

							/* Center the selected text wrap */
							_this.selected_text_wrap.ref.style.left = _this.getSelectionDimensions().posx + _this.getSelectionDimensions().width / 2 - _this.selected_text_wrap.width / 2 + "px";
							_this.selected_text_wrap.ref.style.top = _this.getSelectionDimensions().posy - _this.selected_text_wrap.height - 10 + "px";
							_this.selected_text_wrap.ref.style.visibility = 'visible';
							_this.selected_text_wrap.ref.classList.add("hl-sel-text--active");
						} else {

							_this.selected_text_wrap.ref.classList.remove("hl-sel-text--active");
							_this.selected_text_wrap.ref.style.visibility = 'hidden';
						}
					}
				});

				document.addEventListener("mousedown", function (event) {

					if (event.target !== document.querySelector(".hl-sel-text__btn--tt")) {

						_this.selected_text_wrap.ref.classList.remove("hl-sel-text--active");
						_this.selected_text_wrap.ref.style.visibility = 'hidden';

						if (window.getSelection().empty) {
							// Chrome

							window.getSelection().empty();
						} else if (window.getSelection().removeAllRanges) {
							// Firefox

							window.getSelection().removeAllRanges();
						}
					}
				});
			}
		}, {
			key: "setSelection",
			value: function setSelection(currentSelection) {

				this.currentSelection = currentSelection;
			}
		}, {
			key: "getSelection",
			value: function getSelection() {

				var selection = this.currentSelection;

				if (selection.length > 140) selection = selection.substring(0, 137) + "...";

				return selection;
			}
		}, {
			key: "getSelectionDimensions",
			value: function getSelectionDimensions() {

				/* http://jsfiddle.net/UFkjy/ */

				var sel = document.selection,
				    range = undefined;
				var width = 0,
				    height = 0,
				    posx = 0,
				    posy = 0;

				if (sel) {

					if (sel.type != "Control") {

						range = sel.createRange();
						width = range.boundingWidth;
						height = range.boundingHeight;
					}
				} else if (window.getSelection) {

					sel = window.getSelection();

					if (sel.rangeCount) {

						range = sel.getRangeAt(0).cloneRange();

						if (range.getBoundingClientRect) {

							var rect = range.getBoundingClientRect();

							posx = rect.left;
							posy = rect.top + window.scrollY;
							width = rect.right - rect.left;
							height = rect.bottom - rect.top;
						}
					}
				}

				return { width: width, height: height, posx: posx, posy: posy };
			}

			/* Buttons events */

			// Mouseover

		}, {
			key: "twitterEventClick",
			value: function twitterEventClick(event) {

				event.preventDefault();

				var center_pos = (window.innerWidth - 600) / 2;

				this.selected_text_wrap.ref.classList.remove("hl-sel-text--active");
				this.selected_text_wrap.ref.style.visibility = 'hidden';

				window.open("https://twitter.com/intent/tweet?text=" + this.getSelection(), '_blank', "toolbar=no,scrollbars=yes,resizable=no,top=100,left=" + center_pos + ",width=600,height=400");
			}
		}]);

		return Event;
	}();

	exports.default = Event;

/***/ }
/******/ ]);