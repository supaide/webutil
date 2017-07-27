/*!
 * webutil v1.0.0 (https://github.com/supaide/webutil#readme)
 * Copyright 2017, cyij
 * MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webutil"] = factory();
	else
		root["webutil"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.event = exports.$ = undefined;

var _string = __webpack_require__(1);

var _string2 = _interopRequireDefault(_string);

var _dom = __webpack_require__(2);

var _dom2 = _interopRequireDefault(_dom);

var _event = __webpack_require__(6);

var _event2 = _interopRequireDefault(_event);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.$ = _dom2.default;
exports.event = _event2.default;
exports.util = _util2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
if (!String.prototype.trim) {
  String.prototype.trim = function (str) {
    return str == null ? '' : (str + '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

String.prototype.truncate = function (len, padding) {
  var str = this;
  if (!padding) {
    padding = '...';
  }
  if (len < padding.length) {
    return '';
  }
  len -= padding.length;
  var c = void 0,
      l = 1,
      len0 = 0,
      stopInd = -1,
      leftLen = 0;
  for (var i = 0; i < str.length; i++) {
    c = str[i].charCodeAt();
    if (c <= 127) {
      l = 1;
    } else {
      l = 2;
    }
    len0 += l;
    if (len0 > len) {
      leftLen += l;
    } else {
      stopInd = i;
    }
  }
  if (stopInd < 0) {
    return '';
  }
  if (leftLen <= padding.length) {
    return str;
  } else {
    return str.substr(0, stopInd + 1) + padding;
  }
};

exports.default = String;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
                                                                                                                                                                                                                                                                              * 
                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
                                                                                                                                                                                                                                                                              * 
                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
                                                                                                                                                                                                                                                                              * 
                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
                                                                                                                                                                                                                                                                              * 
                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                              * limitations under the License.
                                                                                                                                                                                                                                                                              */

__webpack_require__(3);

var _objectAssign = __webpack_require__(4);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _balajs = __webpack_require__(5);

var _balajs2 = _interopRequireDefault(_balajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 其实，$ 的原型就是一个数组，拥有数组的各种方法
// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

(0, _objectAssign2.default)(_balajs2.default.fn, {
    /**
     * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
     * @param {Element|Element[]} $child
     * @returns {append}
     */
    append: function append($child) {
        if (!($child instanceof HTMLElement)) {
            $child = $child[0];
        }
        this.forEach(function ($element) {
            $element.appendChild($child);
        });
        return this;
    },
    /**
     *
     * @returns {remove}
     */
    remove: function remove() {
        this.forEach(function ($element) {
            $element.parentNode.removeChild($element);
        });
        return this;
    },
    /**
     *
     * @param selector
     * @returns {HTMLElement}
     */
    find: function find(selector) {
        return (0, _balajs2.default)(selector, this);
    },
    /**
     *
     * @param {String} className
     * @returns {addClass}
     */
    addClass: function addClass(className) {
        this.forEach(function ($element) {
            // http://caniuse.com/#search=classList
            $element.classList.add(className);
        });
        return this;
    },
    /**
     *
     * @param {String} className
     * @returns {removeClass}
     */
    removeClass: function removeClass(className) {
        this.forEach(function ($element) {
            // http://caniuse.com/#search=classList
            $element.classList.remove(className);
        });
        return this;
    },
    /**
     *
     * @param index
     * @returns {*|jQuery|HTMLElement}
     */
    eq: function eq(index) {
        return (0, _balajs2.default)(this[index]);
    },
    /**
     *
     * @returns {show}
     */
    show: function show() {
        this.forEach(function ($element) {
            $element.style.display = 'block';
        });
        return this;
    },
    /**
     *
     * @returns {hide}
     */
    hide: function hide() {
        this.forEach(function ($element) {
            $element.style.display = 'none';
        });
        return this;
    },
    /**
     *
     * @param html 目前只能接受字符串
     * @returns {html}
     */
    html: function html(_html) {
        this.forEach(function ($element) {
            $element.innerHTML = _html;
        });
        return this;
    },
    /**
     *
     * @param {Object} obj 目前只能接受object
     * @returns {css}
     */
    css: function css(obj) {
        var _this = this;

        Object.keys(obj).forEach(function (key) {
            _this.forEach(function ($element) {
                $element.style[key] = obj[key];
            });
        });
        return this;
    },
    /**
     *
     * @param eventType
     * @param selector
     * @param handler
     */
    on: function on(eventType, selector, handler) {
        var isDelegate = typeof selector === 'string' && typeof handler === 'function';
        if (!isDelegate) {
            handler = selector;
        }
        this.forEach(function ($element) {
            eventType.split(' ').forEach(function (event) {
                $element.addEventListener(event, function (evt) {
                    if (isDelegate) {
                        // http://caniuse.com/#search=closest
                        if (this.contains(evt.target.closest(selector))) {
                            handler.call(evt.target, evt);
                        }
                    } else {
                        handler.call(this, evt);
                    }
                });
            });
        });
        return this;
    },
    /**
     *
     * @param {String} eventType
     * @param {String|Function} selector
     * @param {Function=} handler
     * @returns {off}
     */
    off: function off(eventType, selector, handler) {
        if (typeof selector === 'function') {
            handler = selector;
            selector = null;
        }

        this.forEach(function ($element) {
            eventType.split(' ').forEach(function (event) {
                if (typeof selector === 'string') {
                    $element.querySelectorAll(selector).forEach(function ($element) {
                        $element.removeEventListener(event, handler);
                    });
                } else {
                    $element.removeEventListener(event, handler);
                }
            });
        });
        return this;
    },
    /**
     *
     * @returns {Number}
     */
    index: function index() {
        var $element = this[0];
        var $parent = $element.parentNode;
        return Array.prototype.indexOf.call($parent.children, $element);
    },
    /**
     * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
     * @returns {offAll}
     */
    offAll: function offAll() {
        var _this2 = this;

        this.forEach(function ($element, index) {
            var clone = $element.cloneNode(true);
            $element.parentNode.replaceChild(clone, $element);

            _this2[index] = clone;
        });
        return this;
    },
    /**
     *
     * @returns {*}
     */
    val: function val() {
        var _arguments = arguments;

        if (arguments.length) {
            this.forEach(function ($element) {
                $element.value = _arguments[0];
            });
            return this;
        }
        return this[0].value;
    },
    /**
     *
     * @returns {*}
     */
    attr: function attr() {
        var _arguments2 = arguments;

        if (_typeof(arguments[0]) == 'object') {
            var attrsObj = arguments[0];
            var that = this;
            Object.keys(attrsObj).forEach(function (attr) {
                that.forEach(function ($element) {
                    $element.setAttribute(attr, attrsObj[attr]);
                });
            });
            return this;
        }

        if (typeof arguments[0] == 'string' && arguments.length < 2) {
            return this[0].getAttribute(arguments[0]);
        }

        this.forEach(function ($element) {
            $element.setAttribute(_arguments2[0], _arguments2[1]);
        });
        return this;
    }
});

(0, _objectAssign2.default)(_balajs2.default, {
    extend: _objectAssign2.default,
    /**
     * noop
     */
    noop: function noop() {},
    /**
     * render
     * 取值：<%= variable %>
     * 表达式：<% if {} %>
     * 例子：
     *  <div>
     *    <div class="weui-mask"></div>
     *    <div class="weui-dialog">
     *    <% if(typeof title === 'string'){ %>
     *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
     *    <% } %>
     *    <div class="weui-dialog__bd"><%=content%></div>
     *    <div class="weui-dialog__ft">
     *    <% for(var i = 0; i < buttons.length; i++){ %>
     *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
     *    <% } %>
     *    </div>
     *    </div>
     *  </div>
     * A very simple template engine
     * @param {String} tpl
     * @param {Object=} data
     * @returns {String}
     */
    render: function render(tpl, data) {
        var code = 'var p=[];with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');';
        return new Function(code).apply(data);
    },
    /**
     * getStyle 获得元素计算后的样式值
     * (from http://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript)
     */
    getStyle: function getStyle(el, styleProp) {
        var value,
            defaultView = (el.ownerDocument || document).defaultView;
        // W3C standard way:
        if (defaultView && defaultView.getComputedStyle) {
            // sanitize property name to css notation
            // (hypen separated words eg. font-Size)
            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        } else if (el.currentStyle) {
            // IE
            // sanitize property name to camelCase
            styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
                return letter.toUpperCase();
            });
            value = el.currentStyle[styleProp];
            // convert other units to pixels on IE
            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
                return function (value) {
                    var oldLeft = el.style.left,
                        oldRsLeft = el.runtimeStyle.left;
                    el.runtimeStyle.left = el.currentStyle.left;
                    el.style.left = value || 0;
                    value = el.style.pixelLeft + 'px';
                    el.style.left = oldLeft;
                    el.runtimeStyle.left = oldRsLeft;
                    return value;
                }(value);
            }
            return value;
        }
    }
});

exports.default = _balajs2.default;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// element-closest | CC0-1.0 | github.com/jonathantneal/closest

(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
	var $ = (function(document, s_addEventListener, s_querySelectorAll) {
	function $(s, context, bala) {
		bala = Object.create($.fn);

		s && bala.push.apply(bala, // if s is truly then push the following
			s[s_addEventListener] // if arg is node or window,
				? [s] // then pass [s]
				: "" + s === s // else if arg is a string
					? /</.test(s) // if the string contains "<" (if HTML code is passed)
						// then parse it and return node.children
						// use 'addEventListener' (HTMLUnknownElement) if context is not presented
						? ((context = document.createElement(context)).innerHTML = s
							, context.children)
						: context // else if context is truly
							? ((context = $(context)[0]) // if context element is found
								? context[s_querySelectorAll](s) // then select element from context
								: bala) // else pass [] (context isn't found)
							: document[s_querySelectorAll](s) // else select elements globally
					: s); // else guessing that s variable is array-like Object

		return bala;
	}

	$.fn = [];

	$.one = function(s, context) {
		return $(s, context)[0] || null;
	};

	return $;
})(document, 'addEventListener', 'querySelectorAll');
;

	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return $;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module == 'object' && module.exports) {
		module.exports = $;
	} else {
		root.$ = $;
	}
})(this);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listener = {};
exports.default = {
  on: function on(type, callback, target) {
    if (!listener[type]) {
      listener[type] = [];
    }
    if (target) {
      listener[type].push(function () {
        for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
          data[_key] = arguments[_key];
        }

        callback.apply(target, data);
      });
    } else {
      listener[type].push(callback);
    }
  },
  off: function off(type) {
    delete listener[type];
  },
  emit: function emit(type) {
    if (!listener[type]) {
      return;
    }

    for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      data[_key2 - 1] = arguments[_key2];
    }

    for (var i = 0; i < listener[type].length; i++) {
      listener[type][i].apply({}, data);
    }
  }
};
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var each = function each(obj, cb) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || typeof cb !== 'function') {
    return;
  }
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      if (cb(k, obj[k]) === false) {
        return;
      }
    }
  }
};

var isEmpty = function isEmpty(obj) {
  if (obj === null || obj === undefined) {
    return true;
  }
  if (typeof obj === 'string') {
    return obj.length < 1;
  }
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    var len = 0;
    obj.each(function () {
      len++;
    });
    return len < 1;
  }
  return false;
};

var redefine = function redefine(target, key, obj) {
  var obj0 = target.prototype[key] || {};
  each(obj, function (k) {
    obj0[k] = obj[k];
  });
  Object.defineProperty(target.prototype, key, {
    get: function get() {
      return obj0;
    },

    configurable: true
  });
};

exports.default = {
  each: each,
  isEmpty: isEmpty,
  redefine: redefine
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});