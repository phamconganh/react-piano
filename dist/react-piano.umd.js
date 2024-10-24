(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactPiano = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var propTypes = {exports: {}};

  var reactIs = {exports: {}};

  var reactIs_production_min = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_production_min;

  function requireReactIs_production_min () {
  	if (hasRequiredReactIs_production_min) return reactIs_production_min;
  	hasRequiredReactIs_production_min = 1;

  	var b = "function" === typeof Symbol && Symbol.for,
  	  c = b ? Symbol.for("react.element") : 60103,
  	  d = b ? Symbol.for("react.portal") : 60106,
  	  e = b ? Symbol.for("react.fragment") : 60107,
  	  f = b ? Symbol.for("react.strict_mode") : 60108,
  	  g = b ? Symbol.for("react.profiler") : 60114,
  	  h = b ? Symbol.for("react.provider") : 60109,
  	  k = b ? Symbol.for("react.context") : 60110,
  	  l = b ? Symbol.for("react.async_mode") : 60111,
  	  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  	  n = b ? Symbol.for("react.forward_ref") : 60112,
  	  p = b ? Symbol.for("react.suspense") : 60113,
  	  q = b ? Symbol.for("react.suspense_list") : 60120,
  	  r = b ? Symbol.for("react.memo") : 60115,
  	  t = b ? Symbol.for("react.lazy") : 60116,
  	  v = b ? Symbol.for("react.block") : 60121,
  	  w = b ? Symbol.for("react.fundamental") : 60117,
  	  x = b ? Symbol.for("react.responder") : 60118,
  	  y = b ? Symbol.for("react.scope") : 60119;
  	function z(a) {
  	  if ("object" === typeof a && null !== a) {
  	    var u = a.$$typeof;
  	    switch (u) {
  	      case c:
  	        switch (a = a.type, a) {
  	          case l:
  	          case m:
  	          case e:
  	          case g:
  	          case f:
  	          case p:
  	            return a;
  	          default:
  	            switch (a = a && a.$$typeof, a) {
  	              case k:
  	              case n:
  	              case t:
  	              case r:
  	              case h:
  	                return a;
  	              default:
  	                return u;
  	            }
  	        }
  	      case d:
  	        return u;
  	    }
  	  }
  	}
  	function A(a) {
  	  return z(a) === m;
  	}
  	reactIs_production_min.AsyncMode = l;
  	reactIs_production_min.ConcurrentMode = m;
  	reactIs_production_min.ContextConsumer = k;
  	reactIs_production_min.ContextProvider = h;
  	reactIs_production_min.Element = c;
  	reactIs_production_min.ForwardRef = n;
  	reactIs_production_min.Fragment = e;
  	reactIs_production_min.Lazy = t;
  	reactIs_production_min.Memo = r;
  	reactIs_production_min.Portal = d;
  	reactIs_production_min.Profiler = g;
  	reactIs_production_min.StrictMode = f;
  	reactIs_production_min.Suspense = p;
  	reactIs_production_min.isAsyncMode = function (a) {
  	  return A(a) || z(a) === l;
  	};
  	reactIs_production_min.isConcurrentMode = A;
  	reactIs_production_min.isContextConsumer = function (a) {
  	  return z(a) === k;
  	};
  	reactIs_production_min.isContextProvider = function (a) {
  	  return z(a) === h;
  	};
  	reactIs_production_min.isElement = function (a) {
  	  return "object" === typeof a && null !== a && a.$$typeof === c;
  	};
  	reactIs_production_min.isForwardRef = function (a) {
  	  return z(a) === n;
  	};
  	reactIs_production_min.isFragment = function (a) {
  	  return z(a) === e;
  	};
  	reactIs_production_min.isLazy = function (a) {
  	  return z(a) === t;
  	};
  	reactIs_production_min.isMemo = function (a) {
  	  return z(a) === r;
  	};
  	reactIs_production_min.isPortal = function (a) {
  	  return z(a) === d;
  	};
  	reactIs_production_min.isProfiler = function (a) {
  	  return z(a) === g;
  	};
  	reactIs_production_min.isStrictMode = function (a) {
  	  return z(a) === f;
  	};
  	reactIs_production_min.isSuspense = function (a) {
  	  return z(a) === p;
  	};
  	reactIs_production_min.isValidElementType = function (a) {
  	  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  	};
  	reactIs_production_min.typeOf = z;
  	return reactIs_production_min;
  }

  var reactIs_development = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_development;

  function requireReactIs_development () {
  	if (hasRequiredReactIs_development) return reactIs_development;
  	hasRequiredReactIs_development = 1;

  	if (undefined !== "production") {
  	  (function () {

  	    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  	    // nor polyfill, then a plain number is used for performance.
  	    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  	    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
  	    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
  	    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
  	    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
  	    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
  	    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
  	    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
  	    // (unstable) APIs that have been removed. Can we remove the symbols?

  	    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
  	    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
  	    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
  	    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
  	    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
  	    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
  	    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
  	    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
  	    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
  	    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
  	    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
  	    function isValidElementType(type) {
  	      return typeof type === 'string' || typeof type === 'function' ||
  	      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  	      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  	    }
  	    function typeOf(object) {
  	      if (typeof object === 'object' && object !== null) {
  	        var $$typeof = object.$$typeof;
  	        switch ($$typeof) {
  	          case REACT_ELEMENT_TYPE:
  	            var type = object.type;
  	            switch (type) {
  	              case REACT_ASYNC_MODE_TYPE:
  	              case REACT_CONCURRENT_MODE_TYPE:
  	              case REACT_FRAGMENT_TYPE:
  	              case REACT_PROFILER_TYPE:
  	              case REACT_STRICT_MODE_TYPE:
  	              case REACT_SUSPENSE_TYPE:
  	                return type;
  	              default:
  	                var $$typeofType = type && type.$$typeof;
  	                switch ($$typeofType) {
  	                  case REACT_CONTEXT_TYPE:
  	                  case REACT_FORWARD_REF_TYPE:
  	                  case REACT_LAZY_TYPE:
  	                  case REACT_MEMO_TYPE:
  	                  case REACT_PROVIDER_TYPE:
  	                    return $$typeofType;
  	                  default:
  	                    return $$typeof;
  	                }
  	            }
  	          case REACT_PORTAL_TYPE:
  	            return $$typeof;
  	        }
  	      }
  	      return undefined;
  	    } // AsyncMode is deprecated along with isAsyncMode

  	    var AsyncMode = REACT_ASYNC_MODE_TYPE;
  	    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  	    var ContextConsumer = REACT_CONTEXT_TYPE;
  	    var ContextProvider = REACT_PROVIDER_TYPE;
  	    var Element = REACT_ELEMENT_TYPE;
  	    var ForwardRef = REACT_FORWARD_REF_TYPE;
  	    var Fragment = REACT_FRAGMENT_TYPE;
  	    var Lazy = REACT_LAZY_TYPE;
  	    var Memo = REACT_MEMO_TYPE;
  	    var Portal = REACT_PORTAL_TYPE;
  	    var Profiler = REACT_PROFILER_TYPE;
  	    var StrictMode = REACT_STRICT_MODE_TYPE;
  	    var Suspense = REACT_SUSPENSE_TYPE;
  	    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

  	    function isAsyncMode(object) {
  	      {
  	        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
  	          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

  	          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
  	        }
  	      }
  	      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
  	    }
  	    function isConcurrentMode(object) {
  	      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
  	    }
  	    function isContextConsumer(object) {
  	      return typeOf(object) === REACT_CONTEXT_TYPE;
  	    }
  	    function isContextProvider(object) {
  	      return typeOf(object) === REACT_PROVIDER_TYPE;
  	    }
  	    function isElement(object) {
  	      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  	    }
  	    function isForwardRef(object) {
  	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
  	    }
  	    function isFragment(object) {
  	      return typeOf(object) === REACT_FRAGMENT_TYPE;
  	    }
  	    function isLazy(object) {
  	      return typeOf(object) === REACT_LAZY_TYPE;
  	    }
  	    function isMemo(object) {
  	      return typeOf(object) === REACT_MEMO_TYPE;
  	    }
  	    function isPortal(object) {
  	      return typeOf(object) === REACT_PORTAL_TYPE;
  	    }
  	    function isProfiler(object) {
  	      return typeOf(object) === REACT_PROFILER_TYPE;
  	    }
  	    function isStrictMode(object) {
  	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
  	    }
  	    function isSuspense(object) {
  	      return typeOf(object) === REACT_SUSPENSE_TYPE;
  	    }
  	    reactIs_development.AsyncMode = AsyncMode;
  	    reactIs_development.ConcurrentMode = ConcurrentMode;
  	    reactIs_development.ContextConsumer = ContextConsumer;
  	    reactIs_development.ContextProvider = ContextProvider;
  	    reactIs_development.Element = Element;
  	    reactIs_development.ForwardRef = ForwardRef;
  	    reactIs_development.Fragment = Fragment;
  	    reactIs_development.Lazy = Lazy;
  	    reactIs_development.Memo = Memo;
  	    reactIs_development.Portal = Portal;
  	    reactIs_development.Profiler = Profiler;
  	    reactIs_development.StrictMode = StrictMode;
  	    reactIs_development.Suspense = Suspense;
  	    reactIs_development.isAsyncMode = isAsyncMode;
  	    reactIs_development.isConcurrentMode = isConcurrentMode;
  	    reactIs_development.isContextConsumer = isContextConsumer;
  	    reactIs_development.isContextProvider = isContextProvider;
  	    reactIs_development.isElement = isElement;
  	    reactIs_development.isForwardRef = isForwardRef;
  	    reactIs_development.isFragment = isFragment;
  	    reactIs_development.isLazy = isLazy;
  	    reactIs_development.isMemo = isMemo;
  	    reactIs_development.isPortal = isPortal;
  	    reactIs_development.isProfiler = isProfiler;
  	    reactIs_development.isStrictMode = isStrictMode;
  	    reactIs_development.isSuspense = isSuspense;
  	    reactIs_development.isValidElementType = isValidElementType;
  	    reactIs_development.typeOf = typeOf;
  	  })();
  	}
  	return reactIs_development;
  }

  var hasRequiredReactIs;

  function requireReactIs () {
  	if (hasRequiredReactIs) return reactIs.exports;
  	hasRequiredReactIs = 1;

  	if (undefined === 'production') {
  	  reactIs.exports = requireReactIs_production_min();
  	} else {
  	  reactIs.exports = requireReactIs_development();
  	}
  	return reactIs.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  var objectAssign;
  var hasRequiredObjectAssign;

  function requireObjectAssign () {
  	if (hasRequiredObjectAssign) return objectAssign;
  	hasRequiredObjectAssign = 1;

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
  	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
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
  	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
  	      return false;
  	    }
  	    return true;
  	  } catch (err) {
  	    // We don't expect any of the above to throw, but better to be safe.
  	    return false;
  	  }
  	}
  	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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
  	return objectAssign;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;

  function requireReactPropTypesSecret () {
  	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  	hasRequiredReactPropTypesSecret = 1;

  	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  	ReactPropTypesSecret_1 = ReactPropTypesSecret;
  	return ReactPropTypesSecret_1;
  }

  var has;
  var hasRequiredHas;

  function requireHas () {
  	if (hasRequiredHas) return has;
  	hasRequiredHas = 1;
  	has = Function.call.bind(Object.prototype.hasOwnProperty);
  	return has;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var checkPropTypes_1;
  var hasRequiredCheckPropTypes;

  function requireCheckPropTypes () {
  	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  	hasRequiredCheckPropTypes = 1;

  	var printWarning = function () {};
  	if (undefined !== 'production') {
  	  var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
  	  var loggedTypeFailures = {};
  	  var has = /*@__PURE__*/ requireHas();
  	  printWarning = function (text) {
  	    var message = 'Warning: ' + text;
  	    if (typeof console !== 'undefined') {
  	      console.error(message);
  	    }
  	    try {
  	      // --- Welcome to debugging React ---
  	      // This error was thrown as a convenience so that you can use this stack
  	      // to find the callsite that caused this warning to fire.
  	      throw new Error(message);
  	    } catch (x) {/**/}
  	  };
  	}

  	/**
  	 * Assert that the values match with the type specs.
  	 * Error messages are memorized and will only be shown once.
  	 *
  	 * @param {object} typeSpecs Map of name to a ReactPropType
  	 * @param {object} values Runtime values that need to be type-checked
  	 * @param {string} location e.g. "prop", "context", "child context"
  	 * @param {string} componentName Name of the component for error messages.
  	 * @param {?Function} getStack Returns the component stack.
  	 * @private
  	 */
  	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  	  if (undefined !== 'production') {
  	    for (var typeSpecName in typeSpecs) {
  	      if (has(typeSpecs, typeSpecName)) {
  	        var error;
  	        // Prop type validation may throw. In case they do, we don't want to
  	        // fail the render phase where it didn't fail before. So we log it.
  	        // After these have been cleaned up, we'll let them throw.
  	        try {
  	          // This is intentionally an invariant that gets caught. It's the same
  	          // behavior as without this statement except with a better message.
  	          if (typeof typeSpecs[typeSpecName] !== 'function') {
  	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
  	            err.name = 'Invariant Violation';
  	            throw err;
  	          }
  	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
  	        } catch (ex) {
  	          error = ex;
  	        }
  	        if (error && !(error instanceof Error)) {
  	          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
  	        }
  	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
  	          // Only monitor this failure once because there tends to be a lot of the
  	          // same error.
  	          loggedTypeFailures[error.message] = true;
  	          var stack = getStack ? getStack() : '';
  	          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
  	        }
  	      }
  	    }
  	  }
  	}

  	/**
  	 * Resets warning cache when testing.
  	 *
  	 * @private
  	 */
  	checkPropTypes.resetWarningCache = function () {
  	  if (undefined !== 'production') {
  	    loggedTypeFailures = {};
  	  }
  	};
  	checkPropTypes_1 = checkPropTypes;
  	return checkPropTypes_1;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var factoryWithTypeCheckers;
  var hasRequiredFactoryWithTypeCheckers;

  function requireFactoryWithTypeCheckers () {
  	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  	hasRequiredFactoryWithTypeCheckers = 1;

  	var ReactIs = requireReactIs();
  	var assign = requireObjectAssign();
  	var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
  	var has = /*@__PURE__*/ requireHas();
  	var checkPropTypes = /*@__PURE__*/ requireCheckPropTypes();
  	var printWarning = function () {};
  	if (undefined !== 'production') {
  	  printWarning = function (text) {
  	    var message = 'Warning: ' + text;
  	    if (typeof console !== 'undefined') {
  	      console.error(message);
  	    }
  	    try {
  	      // --- Welcome to debugging React ---
  	      // This error was thrown as a convenience so that you can use this stack
  	      // to find the callsite that caused this warning to fire.
  	      throw new Error(message);
  	    } catch (x) {}
  	  };
  	}
  	function emptyFunctionThatReturnsNull() {
  	  return null;
  	}
  	factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
  	  /* global Symbol */
  	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  	  /**
  	   * Returns the iterator method function contained on the iterable object.
  	   *
  	   * Be sure to invoke the function with the iterable as context:
  	   *
  	   *     var iteratorFn = getIteratorFn(myIterable);
  	   *     if (iteratorFn) {
  	   *       var iterator = iteratorFn.call(myIterable);
  	   *       ...
  	   *     }
  	   *
  	   * @param {?object} maybeIterable
  	   * @return {?function}
  	   */
  	  function getIteratorFn(maybeIterable) {
  	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  	    if (typeof iteratorFn === 'function') {
  	      return iteratorFn;
  	    }
  	  }

  	  /**
  	   * Collection of methods that allow declaration and validation of props that are
  	   * supplied to React components. Example usage:
  	   *
  	   *   var Props = require('ReactPropTypes');
  	   *   var MyArticle = React.createClass({
  	   *     propTypes: {
  	   *       // An optional string prop named "description".
  	   *       description: Props.string,
  	   *
  	   *       // A required enum prop named "category".
  	   *       category: Props.oneOf(['News','Photos']).isRequired,
  	   *
  	   *       // A prop named "dialog" that requires an instance of Dialog.
  	   *       dialog: Props.instanceOf(Dialog).isRequired
  	   *     },
  	   *     render: function() { ... }
  	   *   });
  	   *
  	   * A more formal specification of how these methods are used:
  	   *
  	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
  	   *   decl := ReactPropTypes.{type}(.isRequired)?
  	   *
  	   * Each and every declaration produces a function with the same signature. This
  	   * allows the creation of custom validation functions. For example:
  	   *
  	   *  var MyLink = React.createClass({
  	   *    propTypes: {
  	   *      // An optional string or URI prop named "href".
  	   *      href: function(props, propName, componentName) {
  	   *        var propValue = props[propName];
  	   *        if (propValue != null && typeof propValue !== 'string' &&
  	   *            !(propValue instanceof URI)) {
  	   *          return new Error(
  	   *            'Expected a string or an URI for ' + propName + ' in ' +
  	   *            componentName
  	   *          );
  	   *        }
  	   *      }
  	   *    },
  	   *    render: function() {...}
  	   *  });
  	   *
  	   * @internal
  	   */

  	  var ANONYMOUS = '<<anonymous>>';

  	  // Important!
  	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  	  var ReactPropTypes = {
  	    array: createPrimitiveTypeChecker('array'),
  	    bigint: createPrimitiveTypeChecker('bigint'),
  	    bool: createPrimitiveTypeChecker('boolean'),
  	    func: createPrimitiveTypeChecker('function'),
  	    number: createPrimitiveTypeChecker('number'),
  	    object: createPrimitiveTypeChecker('object'),
  	    string: createPrimitiveTypeChecker('string'),
  	    symbol: createPrimitiveTypeChecker('symbol'),
  	    any: createAnyTypeChecker(),
  	    arrayOf: createArrayOfTypeChecker,
  	    element: createElementTypeChecker(),
  	    elementType: createElementTypeTypeChecker(),
  	    instanceOf: createInstanceTypeChecker,
  	    node: createNodeChecker(),
  	    objectOf: createObjectOfTypeChecker,
  	    oneOf: createEnumTypeChecker,
  	    oneOfType: createUnionTypeChecker,
  	    shape: createShapeTypeChecker,
  	    exact: createStrictShapeTypeChecker
  	  };

  	  /**
  	   * inlined Object.is polyfill to avoid requiring consumers ship their own
  	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  	   */
  	  /*eslint-disable no-self-compare*/
  	  function is(x, y) {
  	    // SameValue algorithm
  	    if (x === y) {
  	      // Steps 1-5, 7-10
  	      // Steps 6.b-6.e: +0 != -0
  	      return x !== 0 || 1 / x === 1 / y;
  	    } else {
  	      // Step 6.a: NaN == NaN
  	      return x !== x && y !== y;
  	    }
  	  }
  	  /*eslint-enable no-self-compare*/

  	  /**
  	   * We use an Error-like object for backward compatibility as people may call
  	   * PropTypes directly and inspect their output. However, we don't use real
  	   * Errors anymore. We don't inspect their stack anyway, and creating them
  	   * is prohibitively expensive if they are created too often, such as what
  	   * happens in oneOfType() for any type before the one that matched.
  	   */
  	  function PropTypeError(message, data) {
  	    this.message = message;
  	    this.data = data && typeof data === 'object' ? data : {};
  	    this.stack = '';
  	  }
  	  // Make `instanceof Error` still work for returned errors.
  	  PropTypeError.prototype = Error.prototype;
  	  function createChainableTypeChecker(validate) {
  	    if (undefined !== 'production') {
  	      var manualPropTypeCallCache = {};
  	      var manualPropTypeWarningCount = 0;
  	    }
  	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
  	      componentName = componentName || ANONYMOUS;
  	      propFullName = propFullName || propName;
  	      if (secret !== ReactPropTypesSecret) {
  	        if (throwOnDirectAccess) {
  	          // New behavior only for users of `prop-types` package
  	          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  	          err.name = 'Invariant Violation';
  	          throw err;
  	        } else if (undefined !== 'production' && typeof console !== 'undefined') {
  	          // Old behavior for people using React.PropTypes
  	          var cacheKey = componentName + ':' + propName;
  	          if (!manualPropTypeCallCache[cacheKey] &&
  	          // Avoid spamming the console because they are often not actionable except for lib authors
  	          manualPropTypeWarningCount < 3) {
  	            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
  	            manualPropTypeCallCache[cacheKey] = true;
  	            manualPropTypeWarningCount++;
  	          }
  	        }
  	      }
  	      if (props[propName] == null) {
  	        if (isRequired) {
  	          if (props[propName] === null) {
  	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
  	          }
  	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
  	        }
  	        return null;
  	      } else {
  	        return validate(props, propName, componentName, location, propFullName);
  	      }
  	    }
  	    var chainedCheckType = checkType.bind(null, false);
  	    chainedCheckType.isRequired = checkType.bind(null, true);
  	    return chainedCheckType;
  	  }
  	  function createPrimitiveTypeChecker(expectedType) {
  	    function validate(props, propName, componentName, location, propFullName, secret) {
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== expectedType) {
  	        // `propValue` being instance of, say, date/regexp, pass the 'object'
  	        // check, but we can offer a more precise error message here rather than
  	        // 'of type `object`'.
  	        var preciseType = getPreciseType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
  	          expectedType: expectedType
  	        });
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function createAnyTypeChecker() {
  	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  	  }
  	  function createArrayOfTypeChecker(typeChecker) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (typeof typeChecker !== 'function') {
  	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
  	      }
  	      var propValue = props[propName];
  	      if (!Array.isArray(propValue)) {
  	        var propType = getPropType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
  	      }
  	      for (var i = 0; i < propValue.length; i++) {
  	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
  	        if (error instanceof Error) {
  	          return error;
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function createElementTypeChecker() {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      if (!isValidElement(propValue)) {
  	        var propType = getPropType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function createElementTypeTypeChecker() {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      if (!ReactIs.isValidElementType(propValue)) {
  	        var propType = getPropType(propValue);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function createInstanceTypeChecker(expectedClass) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (!(props[propName] instanceof expectedClass)) {
  	        var expectedClassName = expectedClass.name || ANONYMOUS;
  	        var actualClassName = getClassName(props[propName]);
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function createEnumTypeChecker(expectedValues) {
  	    if (!Array.isArray(expectedValues)) {
  	      if (undefined !== 'production') {
  	        if (arguments.length > 1) {
  	          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
  	        } else {
  	          printWarning('Invalid argument supplied to oneOf, expected an array.');
  	        }
  	      }
  	      return emptyFunctionThatReturnsNull;
  	    }
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      for (var i = 0; i < expectedValues.length; i++) {
  	        if (is(propValue, expectedValues[i])) {
  	          return null;
  	        }
  	      }
  	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
  	        var type = getPreciseType(value);
  	        if (type === 'symbol') {
  	          return String(value);
  	        }
  	        return value;
  	      });
  	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function createObjectOfTypeChecker(typeChecker) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (typeof typeChecker !== 'function') {
  	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
  	      }
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== 'object') {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
  	      }
  	      for (var key in propValue) {
  	        if (has(propValue, key)) {
  	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
  	          if (error instanceof Error) {
  	            return error;
  	          }
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function createUnionTypeChecker(arrayOfTypeCheckers) {
  	    if (!Array.isArray(arrayOfTypeCheckers)) {
  	      undefined !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
  	      return emptyFunctionThatReturnsNull;
  	    }
  	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
  	      var checker = arrayOfTypeCheckers[i];
  	      if (typeof checker !== 'function') {
  	        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
  	        return emptyFunctionThatReturnsNull;
  	      }
  	    }
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var expectedTypes = [];
  	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
  	        var checker = arrayOfTypeCheckers[i];
  	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
  	        if (checkerResult == null) {
  	          return null;
  	        }
  	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
  	          expectedTypes.push(checkerResult.data.expectedType);
  	        }
  	      }
  	      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
  	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function createNodeChecker() {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      if (!isNode(props[propName])) {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function invalidValidatorError(componentName, location, propFullName, key, type) {
  	    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  	  }
  	  function createShapeTypeChecker(shapeTypes) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== 'object') {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
  	      }
  	      for (var key in shapeTypes) {
  	        var checker = shapeTypes[key];
  	        if (typeof checker !== 'function') {
  	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
  	        }
  	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
  	        if (error) {
  	          return error;
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function createStrictShapeTypeChecker(shapeTypes) {
  	    function validate(props, propName, componentName, location, propFullName) {
  	      var propValue = props[propName];
  	      var propType = getPropType(propValue);
  	      if (propType !== 'object') {
  	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
  	      }
  	      // We need to check all keys in case some are required but missing from props.
  	      var allKeys = assign({}, props[propName], shapeTypes);
  	      for (var key in allKeys) {
  	        var checker = shapeTypes[key];
  	        if (has(shapeTypes, key) && typeof checker !== 'function') {
  	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
  	        }
  	        if (!checker) {
  	          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
  	        }
  	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
  	        if (error) {
  	          return error;
  	        }
  	      }
  	      return null;
  	    }
  	    return createChainableTypeChecker(validate);
  	  }
  	  function isNode(propValue) {
  	    switch (typeof propValue) {
  	      case 'number':
  	      case 'string':
  	      case 'undefined':
  	        return true;
  	      case 'boolean':
  	        return !propValue;
  	      case 'object':
  	        if (Array.isArray(propValue)) {
  	          return propValue.every(isNode);
  	        }
  	        if (propValue === null || isValidElement(propValue)) {
  	          return true;
  	        }
  	        var iteratorFn = getIteratorFn(propValue);
  	        if (iteratorFn) {
  	          var iterator = iteratorFn.call(propValue);
  	          var step;
  	          if (iteratorFn !== propValue.entries) {
  	            while (!(step = iterator.next()).done) {
  	              if (!isNode(step.value)) {
  	                return false;
  	              }
  	            }
  	          } else {
  	            // Iterator will provide entry [k,v] tuples rather than values.
  	            while (!(step = iterator.next()).done) {
  	              var entry = step.value;
  	              if (entry) {
  	                if (!isNode(entry[1])) {
  	                  return false;
  	                }
  	              }
  	            }
  	          }
  	        } else {
  	          return false;
  	        }
  	        return true;
  	      default:
  	        return false;
  	    }
  	  }
  	  function isSymbol(propType, propValue) {
  	    // Native Symbol.
  	    if (propType === 'symbol') {
  	      return true;
  	    }

  	    // falsy value can't be a Symbol
  	    if (!propValue) {
  	      return false;
  	    }

  	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
  	    if (propValue['@@toStringTag'] === 'Symbol') {
  	      return true;
  	    }

  	    // Fallback for non-spec compliant Symbols which are polyfilled.
  	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
  	      return true;
  	    }
  	    return false;
  	  }

  	  // Equivalent of `typeof` but with special handling for array and regexp.
  	  function getPropType(propValue) {
  	    var propType = typeof propValue;
  	    if (Array.isArray(propValue)) {
  	      return 'array';
  	    }
  	    if (propValue instanceof RegExp) {
  	      // Old webkits (at least until Android 4.0) return 'function' rather than
  	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
  	      // passes PropTypes.object.
  	      return 'object';
  	    }
  	    if (isSymbol(propType, propValue)) {
  	      return 'symbol';
  	    }
  	    return propType;
  	  }

  	  // This handles more types than `getPropType`. Only used for error messages.
  	  // See `createPrimitiveTypeChecker`.
  	  function getPreciseType(propValue) {
  	    if (typeof propValue === 'undefined' || propValue === null) {
  	      return '' + propValue;
  	    }
  	    var propType = getPropType(propValue);
  	    if (propType === 'object') {
  	      if (propValue instanceof Date) {
  	        return 'date';
  	      } else if (propValue instanceof RegExp) {
  	        return 'regexp';
  	      }
  	    }
  	    return propType;
  	  }

  	  // Returns a string that is postfixed to a warning about an invalid type.
  	  // For example, "undefined" or "of type array"
  	  function getPostfixForTypeWarning(value) {
  	    var type = getPreciseType(value);
  	    switch (type) {
  	      case 'array':
  	      case 'object':
  	        return 'an ' + type;
  	      case 'boolean':
  	      case 'date':
  	      case 'regexp':
  	        return 'a ' + type;
  	      default:
  	        return type;
  	    }
  	  }

  	  // Returns class name of the object, if any.
  	  function getClassName(propValue) {
  	    if (!propValue.constructor || !propValue.constructor.name) {
  	      return ANONYMOUS;
  	    }
  	    return propValue.constructor.name;
  	  }
  	  ReactPropTypes.checkPropTypes = checkPropTypes;
  	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  	  ReactPropTypes.PropTypes = ReactPropTypes;
  	  return ReactPropTypes;
  	};
  	return factoryWithTypeCheckers;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var factoryWithThrowingShims;
  var hasRequiredFactoryWithThrowingShims;

  function requireFactoryWithThrowingShims () {
  	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  	hasRequiredFactoryWithThrowingShims = 1;

  	var ReactPropTypesSecret = /*@__PURE__*/ requireReactPropTypesSecret();
  	function emptyFunction() {}
  	function emptyFunctionWithReset() {}
  	emptyFunctionWithReset.resetWarningCache = emptyFunction;
  	factoryWithThrowingShims = function () {
  	  function shim(props, propName, componentName, location, propFullName, secret) {
  	    if (secret === ReactPropTypesSecret) {
  	      // It is still safe when called from React.
  	      return;
  	    }
  	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  	    err.name = 'Invariant Violation';
  	    throw err;
  	  }
  	  shim.isRequired = shim;
  	  function getShim() {
  	    return shim;
  	  }
  	  // Important!
  	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  	  var ReactPropTypes = {
  	    array: shim,
  	    bigint: shim,
  	    bool: shim,
  	    func: shim,
  	    number: shim,
  	    object: shim,
  	    string: shim,
  	    symbol: shim,
  	    any: shim,
  	    arrayOf: getShim,
  	    element: shim,
  	    elementType: shim,
  	    instanceOf: getShim,
  	    node: shim,
  	    objectOf: getShim,
  	    oneOf: getShim,
  	    oneOfType: getShim,
  	    shape: getShim,
  	    exact: getShim,
  	    checkPropTypes: emptyFunctionWithReset,
  	    resetWarningCache: emptyFunction
  	  };
  	  ReactPropTypes.PropTypes = ReactPropTypes;
  	  return ReactPropTypes;
  	};
  	return factoryWithThrowingShims;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredPropTypes;

  function requirePropTypes () {
  	if (hasRequiredPropTypes) return propTypes.exports;
  	hasRequiredPropTypes = 1;
  	if (undefined !== 'production') {
  	  var ReactIs = requireReactIs();

  	  // By explicitly using `prop-types` you are opting into new development behavior.
  	  // http://fb.me/prop-types-in-prod
  	  var throwOnDirectAccess = true;
  	  propTypes.exports = /*@__PURE__*/ requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
  	} else {
  	  // By explicitly using `prop-types` you are opting into new production behavior.
  	  // http://fb.me/prop-types-in-prod
  	  propTypes.exports = /*@__PURE__*/ requireFactoryWithThrowingShims()();
  	}
  	return propTypes.exports;
  }

  var propTypesExports = /*@__PURE__*/ requirePropTypes();
  var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

  var classnames = {exports: {}};

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */

  var hasRequiredClassnames;

  function requireClassnames () {
  	if (hasRequiredClassnames) return classnames.exports;
  	hasRequiredClassnames = 1;
  	(function (module) {
  		/* global define */

  		(function () {

  		  var hasOwn = {}.hasOwnProperty;
  		  function classNames() {
  		    var classes = '';
  		    for (var i = 0; i < arguments.length; i++) {
  		      var arg = arguments[i];
  		      if (arg) {
  		        classes = appendClass(classes, parseValue(arg));
  		      }
  		    }
  		    return classes;
  		  }
  		  function parseValue(arg) {
  		    if (typeof arg === 'string' || typeof arg === 'number') {
  		      return arg;
  		    }
  		    if (typeof arg !== 'object') {
  		      return '';
  		    }
  		    if (Array.isArray(arg)) {
  		      return classNames.apply(null, arg);
  		    }
  		    if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  		      return arg.toString();
  		    }
  		    var classes = '';
  		    for (var key in arg) {
  		      if (hasOwn.call(arg, key) && arg[key]) {
  		        classes = appendClass(classes, key);
  		      }
  		    }
  		    return classes;
  		  }
  		  function appendClass(value, newClass) {
  		    if (!newClass) {
  		      return value;
  		    }
  		    if (value) {
  		      return value + ' ' + newClass;
  		    }
  		    return value + newClass;
  		  }
  		  if (module.exports) {
  		    classNames.default = classNames;
  		    module.exports = classNames;
  		  } else {
  		    window.classNames = classNames;
  		  }
  		})(); 
  	} (classnames));
  	return classnames.exports;
  }

  var classnamesExports = requireClassnames();
  var classNames = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  var lodash_difference;
  var hasRequiredLodash_difference;

  function requireLodash_difference () {
  	if (hasRequiredLodash_difference) return lodash_difference;
  	hasRequiredLodash_difference = 1;
  	/** Used as the size to enable large array optimizations. */
  	var LARGE_ARRAY_SIZE = 200;

  	/** Used to stand-in for `undefined` hash values. */
  	var HASH_UNDEFINED = '__lodash_hash_undefined__';

  	/** Used as references for various `Number` constants. */
  	var MAX_SAFE_INTEGER = 9007199254740991;

  	/** `Object#toString` result references. */
  	var argsTag = '[object Arguments]',
  	  funcTag = '[object Function]',
  	  genTag = '[object GeneratorFunction]';

  	/**
  	 * Used to match `RegExp`
  	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
  	 */
  	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  	/** Used to detect host constructors (Safari). */
  	var reIsHostCtor = /^\[object .+?Constructor\]$/;

  	/** Detect free variable `global` from Node.js. */
  	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  	/** Detect free variable `self`. */
  	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  	/** Used as a reference to the global object. */
  	var root = freeGlobal || freeSelf || Function('return this')();

  	/**
  	 * A faster alternative to `Function#apply`, this function invokes `func`
  	 * with the `this` binding of `thisArg` and the arguments of `args`.
  	 *
  	 * @private
  	 * @param {Function} func The function to invoke.
  	 * @param {*} thisArg The `this` binding of `func`.
  	 * @param {Array} args The arguments to invoke `func` with.
  	 * @returns {*} Returns the result of `func`.
  	 */
  	function apply(func, thisArg, args) {
  	  switch (args.length) {
  	    case 0:
  	      return func.call(thisArg);
  	    case 1:
  	      return func.call(thisArg, args[0]);
  	    case 2:
  	      return func.call(thisArg, args[0], args[1]);
  	    case 3:
  	      return func.call(thisArg, args[0], args[1], args[2]);
  	  }
  	  return func.apply(thisArg, args);
  	}

  	/**
  	 * A specialized version of `_.includes` for arrays without support for
  	 * specifying an index to search from.
  	 *
  	 * @private
  	 * @param {Array} [array] The array to inspect.
  	 * @param {*} target The value to search for.
  	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
  	 */
  	function arrayIncludes(array, value) {
  	  var length = array ? array.length : 0;
  	  return !!length && baseIndexOf(array, value, 0) > -1;
  	}

  	/**
  	 * Appends the elements of `values` to `array`.
  	 *
  	 * @private
  	 * @param {Array} array The array to modify.
  	 * @param {Array} values The values to append.
  	 * @returns {Array} Returns `array`.
  	 */
  	function arrayPush(array, values) {
  	  var index = -1,
  	    length = values.length,
  	    offset = array.length;
  	  while (++index < length) {
  	    array[offset + index] = values[index];
  	  }
  	  return array;
  	}

  	/**
  	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
  	 * support for iteratee shorthands.
  	 *
  	 * @private
  	 * @param {Array} array The array to inspect.
  	 * @param {Function} predicate The function invoked per iteration.
  	 * @param {number} fromIndex The index to search from.
  	 * @param {boolean} [fromRight] Specify iterating from right to left.
  	 * @returns {number} Returns the index of the matched value, else `-1`.
  	 */
  	function baseFindIndex(array, predicate, fromIndex, fromRight) {
  	  var length = array.length,
  	    index = fromIndex + (-1);
  	  while (++index < length) {
  	    if (predicate(array[index], index, array)) {
  	      return index;
  	    }
  	  }
  	  return -1;
  	}

  	/**
  	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
  	 *
  	 * @private
  	 * @param {Array} array The array to inspect.
  	 * @param {*} value The value to search for.
  	 * @param {number} fromIndex The index to search from.
  	 * @returns {number} Returns the index of the matched value, else `-1`.
  	 */
  	function baseIndexOf(array, value, fromIndex) {
  	  if (value !== value) {
  	    return baseFindIndex(array, baseIsNaN, fromIndex);
  	  }
  	  var index = fromIndex - 1,
  	    length = array.length;
  	  while (++index < length) {
  	    if (array[index] === value) {
  	      return index;
  	    }
  	  }
  	  return -1;
  	}

  	/**
  	 * The base implementation of `_.isNaN` without support for number objects.
  	 *
  	 * @private
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
  	 */
  	function baseIsNaN(value) {
  	  return value !== value;
  	}

  	/**
  	 * Checks if a cache value for `key` exists.
  	 *
  	 * @private
  	 * @param {Object} cache The cache to query.
  	 * @param {string} key The key of the entry to check.
  	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
  	 */
  	function cacheHas(cache, key) {
  	  return cache.has(key);
  	}

  	/**
  	 * Gets the value at `key` of `object`.
  	 *
  	 * @private
  	 * @param {Object} [object] The object to query.
  	 * @param {string} key The key of the property to get.
  	 * @returns {*} Returns the property value.
  	 */
  	function getValue(object, key) {
  	  return object == null ? undefined : object[key];
  	}

  	/**
  	 * Checks if `value` is a host object in IE < 9.
  	 *
  	 * @private
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
  	 */
  	function isHostObject(value) {
  	  // Many host objects are `Object` objects that can coerce to strings
  	  // despite having improperly defined `toString` methods.
  	  var result = false;
  	  if (value != null && typeof value.toString != 'function') {
  	    try {
  	      result = !!(value + '');
  	    } catch (e) {}
  	  }
  	  return result;
  	}

  	/** Used for built-in method references. */
  	var arrayProto = Array.prototype,
  	  funcProto = Function.prototype,
  	  objectProto = Object.prototype;

  	/** Used to detect overreaching core-js shims. */
  	var coreJsData = root['__core-js_shared__'];

  	/** Used to detect methods masquerading as native. */
  	var maskSrcKey = function () {
  	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  	  return uid ? 'Symbol(src)_1.' + uid : '';
  	}();

  	/** Used to resolve the decompiled source of functions. */
  	var funcToString = funcProto.toString;

  	/** Used to check objects for own properties. */
  	var hasOwnProperty = objectProto.hasOwnProperty;

  	/**
  	 * Used to resolve the
  	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
  	 * of values.
  	 */
  	var objectToString = objectProto.toString;

  	/** Used to detect if a method is native. */
  	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  	/** Built-in value references. */
  	var Symbol = root.Symbol,
  	  propertyIsEnumerable = objectProto.propertyIsEnumerable,
  	  splice = arrayProto.splice,
  	  spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

  	/* Built-in method references for those with the same name as other `lodash` methods. */
  	var nativeMax = Math.max;

  	/* Built-in method references that are verified to be native. */
  	var Map = getNative(root, 'Map'),
  	  nativeCreate = getNative(Object, 'create');

  	/**
  	 * Creates a hash object.
  	 *
  	 * @private
  	 * @constructor
  	 * @param {Array} [entries] The key-value pairs to cache.
  	 */
  	function Hash(entries) {
  	  var index = -1,
  	    length = entries ? entries.length : 0;
  	  this.clear();
  	  while (++index < length) {
  	    var entry = entries[index];
  	    this.set(entry[0], entry[1]);
  	  }
  	}

  	/**
  	 * Removes all key-value entries from the hash.
  	 *
  	 * @private
  	 * @name clear
  	 * @memberOf Hash
  	 */
  	function hashClear() {
  	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  	}

  	/**
  	 * Removes `key` and its value from the hash.
  	 *
  	 * @private
  	 * @name delete
  	 * @memberOf Hash
  	 * @param {Object} hash The hash to modify.
  	 * @param {string} key The key of the value to remove.
  	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
  	 */
  	function hashDelete(key) {
  	  return this.has(key) && delete this.__data__[key];
  	}

  	/**
  	 * Gets the hash value for `key`.
  	 *
  	 * @private
  	 * @name get
  	 * @memberOf Hash
  	 * @param {string} key The key of the value to get.
  	 * @returns {*} Returns the entry value.
  	 */
  	function hashGet(key) {
  	  var data = this.__data__;
  	  if (nativeCreate) {
  	    var result = data[key];
  	    return result === HASH_UNDEFINED ? undefined : result;
  	  }
  	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
  	}

  	/**
  	 * Checks if a hash value for `key` exists.
  	 *
  	 * @private
  	 * @name has
  	 * @memberOf Hash
  	 * @param {string} key The key of the entry to check.
  	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
  	 */
  	function hashHas(key) {
  	  var data = this.__data__;
  	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  	}

  	/**
  	 * Sets the hash `key` to `value`.
  	 *
  	 * @private
  	 * @name set
  	 * @memberOf Hash
  	 * @param {string} key The key of the value to set.
  	 * @param {*} value The value to set.
  	 * @returns {Object} Returns the hash instance.
  	 */
  	function hashSet(key, value) {
  	  var data = this.__data__;
  	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  	  return this;
  	}

  	// Add methods to `Hash`.
  	Hash.prototype.clear = hashClear;
  	Hash.prototype['delete'] = hashDelete;
  	Hash.prototype.get = hashGet;
  	Hash.prototype.has = hashHas;
  	Hash.prototype.set = hashSet;

  	/**
  	 * Creates an list cache object.
  	 *
  	 * @private
  	 * @constructor
  	 * @param {Array} [entries] The key-value pairs to cache.
  	 */
  	function ListCache(entries) {
  	  var index = -1,
  	    length = entries ? entries.length : 0;
  	  this.clear();
  	  while (++index < length) {
  	    var entry = entries[index];
  	    this.set(entry[0], entry[1]);
  	  }
  	}

  	/**
  	 * Removes all key-value entries from the list cache.
  	 *
  	 * @private
  	 * @name clear
  	 * @memberOf ListCache
  	 */
  	function listCacheClear() {
  	  this.__data__ = [];
  	}

  	/**
  	 * Removes `key` and its value from the list cache.
  	 *
  	 * @private
  	 * @name delete
  	 * @memberOf ListCache
  	 * @param {string} key The key of the value to remove.
  	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
  	 */
  	function listCacheDelete(key) {
  	  var data = this.__data__,
  	    index = assocIndexOf(data, key);
  	  if (index < 0) {
  	    return false;
  	  }
  	  var lastIndex = data.length - 1;
  	  if (index == lastIndex) {
  	    data.pop();
  	  } else {
  	    splice.call(data, index, 1);
  	  }
  	  return true;
  	}

  	/**
  	 * Gets the list cache value for `key`.
  	 *
  	 * @private
  	 * @name get
  	 * @memberOf ListCache
  	 * @param {string} key The key of the value to get.
  	 * @returns {*} Returns the entry value.
  	 */
  	function listCacheGet(key) {
  	  var data = this.__data__,
  	    index = assocIndexOf(data, key);
  	  return index < 0 ? undefined : data[index][1];
  	}

  	/**
  	 * Checks if a list cache value for `key` exists.
  	 *
  	 * @private
  	 * @name has
  	 * @memberOf ListCache
  	 * @param {string} key The key of the entry to check.
  	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
  	 */
  	function listCacheHas(key) {
  	  return assocIndexOf(this.__data__, key) > -1;
  	}

  	/**
  	 * Sets the list cache `key` to `value`.
  	 *
  	 * @private
  	 * @name set
  	 * @memberOf ListCache
  	 * @param {string} key The key of the value to set.
  	 * @param {*} value The value to set.
  	 * @returns {Object} Returns the list cache instance.
  	 */
  	function listCacheSet(key, value) {
  	  var data = this.__data__,
  	    index = assocIndexOf(data, key);
  	  if (index < 0) {
  	    data.push([key, value]);
  	  } else {
  	    data[index][1] = value;
  	  }
  	  return this;
  	}

  	// Add methods to `ListCache`.
  	ListCache.prototype.clear = listCacheClear;
  	ListCache.prototype['delete'] = listCacheDelete;
  	ListCache.prototype.get = listCacheGet;
  	ListCache.prototype.has = listCacheHas;
  	ListCache.prototype.set = listCacheSet;

  	/**
  	 * Creates a map cache object to store key-value pairs.
  	 *
  	 * @private
  	 * @constructor
  	 * @param {Array} [entries] The key-value pairs to cache.
  	 */
  	function MapCache(entries) {
  	  var index = -1,
  	    length = entries ? entries.length : 0;
  	  this.clear();
  	  while (++index < length) {
  	    var entry = entries[index];
  	    this.set(entry[0], entry[1]);
  	  }
  	}

  	/**
  	 * Removes all key-value entries from the map.
  	 *
  	 * @private
  	 * @name clear
  	 * @memberOf MapCache
  	 */
  	function mapCacheClear() {
  	  this.__data__ = {
  	    'hash': new Hash(),
  	    'map': new (Map || ListCache)(),
  	    'string': new Hash()
  	  };
  	}

  	/**
  	 * Removes `key` and its value from the map.
  	 *
  	 * @private
  	 * @name delete
  	 * @memberOf MapCache
  	 * @param {string} key The key of the value to remove.
  	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
  	 */
  	function mapCacheDelete(key) {
  	  return getMapData(this, key)['delete'](key);
  	}

  	/**
  	 * Gets the map value for `key`.
  	 *
  	 * @private
  	 * @name get
  	 * @memberOf MapCache
  	 * @param {string} key The key of the value to get.
  	 * @returns {*} Returns the entry value.
  	 */
  	function mapCacheGet(key) {
  	  return getMapData(this, key).get(key);
  	}

  	/**
  	 * Checks if a map value for `key` exists.
  	 *
  	 * @private
  	 * @name has
  	 * @memberOf MapCache
  	 * @param {string} key The key of the entry to check.
  	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
  	 */
  	function mapCacheHas(key) {
  	  return getMapData(this, key).has(key);
  	}

  	/**
  	 * Sets the map `key` to `value`.
  	 *
  	 * @private
  	 * @name set
  	 * @memberOf MapCache
  	 * @param {string} key The key of the value to set.
  	 * @param {*} value The value to set.
  	 * @returns {Object} Returns the map cache instance.
  	 */
  	function mapCacheSet(key, value) {
  	  getMapData(this, key).set(key, value);
  	  return this;
  	}

  	// Add methods to `MapCache`.
  	MapCache.prototype.clear = mapCacheClear;
  	MapCache.prototype['delete'] = mapCacheDelete;
  	MapCache.prototype.get = mapCacheGet;
  	MapCache.prototype.has = mapCacheHas;
  	MapCache.prototype.set = mapCacheSet;

  	/**
  	 *
  	 * Creates an array cache object to store unique values.
  	 *
  	 * @private
  	 * @constructor
  	 * @param {Array} [values] The values to cache.
  	 */
  	function SetCache(values) {
  	  var index = -1,
  	    length = values ? values.length : 0;
  	  this.__data__ = new MapCache();
  	  while (++index < length) {
  	    this.add(values[index]);
  	  }
  	}

  	/**
  	 * Adds `value` to the array cache.
  	 *
  	 * @private
  	 * @name add
  	 * @memberOf SetCache
  	 * @alias push
  	 * @param {*} value The value to cache.
  	 * @returns {Object} Returns the cache instance.
  	 */
  	function setCacheAdd(value) {
  	  this.__data__.set(value, HASH_UNDEFINED);
  	  return this;
  	}

  	/**
  	 * Checks if `value` is in the array cache.
  	 *
  	 * @private
  	 * @name has
  	 * @memberOf SetCache
  	 * @param {*} value The value to search for.
  	 * @returns {number} Returns `true` if `value` is found, else `false`.
  	 */
  	function setCacheHas(value) {
  	  return this.__data__.has(value);
  	}

  	// Add methods to `SetCache`.
  	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  	SetCache.prototype.has = setCacheHas;

  	/**
  	 * Gets the index at which the `key` is found in `array` of key-value pairs.
  	 *
  	 * @private
  	 * @param {Array} array The array to inspect.
  	 * @param {*} key The key to search for.
  	 * @returns {number} Returns the index of the matched value, else `-1`.
  	 */
  	function assocIndexOf(array, key) {
  	  var length = array.length;
  	  while (length--) {
  	    if (eq(array[length][0], key)) {
  	      return length;
  	    }
  	  }
  	  return -1;
  	}

  	/**
  	 * The base implementation of methods like `_.difference` without support
  	 * for excluding multiple arrays or iteratee shorthands.
  	 *
  	 * @private
  	 * @param {Array} array The array to inspect.
  	 * @param {Array} values The values to exclude.
  	 * @param {Function} [iteratee] The iteratee invoked per element.
  	 * @param {Function} [comparator] The comparator invoked per element.
  	 * @returns {Array} Returns the new array of filtered values.
  	 */
  	function baseDifference(array, values, iteratee, comparator) {
  	  var index = -1,
  	    includes = arrayIncludes,
  	    isCommon = true,
  	    length = array.length,
  	    result = [],
  	    valuesLength = values.length;
  	  if (!length) {
  	    return result;
  	  }
  	  if (values.length >= LARGE_ARRAY_SIZE) {
  	    includes = cacheHas;
  	    isCommon = false;
  	    values = new SetCache(values);
  	  }
  	  outer: while (++index < length) {
  	    var value = array[index],
  	      computed = value;
  	    value = value !== 0 ? value : 0;
  	    if (isCommon && computed === computed) {
  	      var valuesIndex = valuesLength;
  	      while (valuesIndex--) {
  	        if (values[valuesIndex] === computed) {
  	          continue outer;
  	        }
  	      }
  	      result.push(value);
  	    } else if (!includes(values, computed, comparator)) {
  	      result.push(value);
  	    }
  	  }
  	  return result;
  	}

  	/**
  	 * The base implementation of `_.flatten` with support for restricting flattening.
  	 *
  	 * @private
  	 * @param {Array} array The array to flatten.
  	 * @param {number} depth The maximum recursion depth.
  	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
  	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
  	 * @param {Array} [result=[]] The initial result value.
  	 * @returns {Array} Returns the new flattened array.
  	 */
  	function baseFlatten(array, depth, predicate, isStrict, result) {
  	  var index = -1,
  	    length = array.length;
  	  predicate || (predicate = isFlattenable);
  	  result || (result = []);
  	  while (++index < length) {
  	    var value = array[index];
  	    if (predicate(value)) {
  	      {
  	        arrayPush(result, value);
  	      }
  	    }
  	  }
  	  return result;
  	}

  	/**
  	 * The base implementation of `_.isNative` without bad shim checks.
  	 *
  	 * @private
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is a native function,
  	 *  else `false`.
  	 */
  	function baseIsNative(value) {
  	  if (!isObject(value) || isMasked(value)) {
  	    return false;
  	  }
  	  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  	  return pattern.test(toSource(value));
  	}

  	/**
  	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
  	 *
  	 * @private
  	 * @param {Function} func The function to apply a rest parameter to.
  	 * @param {number} [start=func.length-1] The start position of the rest parameter.
  	 * @returns {Function} Returns the new function.
  	 */
  	function baseRest(func, start) {
  	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  	  return function () {
  	    var args = arguments,
  	      index = -1,
  	      length = nativeMax(args.length - start, 0),
  	      array = Array(length);
  	    while (++index < length) {
  	      array[index] = args[start + index];
  	    }
  	    index = -1;
  	    var otherArgs = Array(start + 1);
  	    while (++index < start) {
  	      otherArgs[index] = args[index];
  	    }
  	    otherArgs[start] = array;
  	    return apply(func, this, otherArgs);
  	  };
  	}

  	/**
  	 * Gets the data for `map`.
  	 *
  	 * @private
  	 * @param {Object} map The map to query.
  	 * @param {string} key The reference key.
  	 * @returns {*} Returns the map data.
  	 */
  	function getMapData(map, key) {
  	  var data = map.__data__;
  	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  	}

  	/**
  	 * Gets the native function at `key` of `object`.
  	 *
  	 * @private
  	 * @param {Object} object The object to query.
  	 * @param {string} key The key of the method to get.
  	 * @returns {*} Returns the function if it's native, else `undefined`.
  	 */
  	function getNative(object, key) {
  	  var value = getValue(object, key);
  	  return baseIsNative(value) ? value : undefined;
  	}

  	/**
  	 * Checks if `value` is a flattenable `arguments` object or array.
  	 *
  	 * @private
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
  	 */
  	function isFlattenable(value) {
  	  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  	}

  	/**
  	 * Checks if `value` is suitable for use as unique object key.
  	 *
  	 * @private
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
  	 */
  	function isKeyable(value) {
  	  var type = typeof value;
  	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  	}

  	/**
  	 * Checks if `func` has its source masked.
  	 *
  	 * @private
  	 * @param {Function} func The function to check.
  	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
  	 */
  	function isMasked(func) {
  	  return !!maskSrcKey && maskSrcKey in func;
  	}

  	/**
  	 * Converts `func` to its source code.
  	 *
  	 * @private
  	 * @param {Function} func The function to process.
  	 * @returns {string} Returns the source code.
  	 */
  	function toSource(func) {
  	  if (func != null) {
  	    try {
  	      return funcToString.call(func);
  	    } catch (e) {}
  	    try {
  	      return func + '';
  	    } catch (e) {}
  	  }
  	  return '';
  	}

  	/**
  	 * Creates an array of `array` values not included in the other given arrays
  	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
  	 * for equality comparisons. The order of result values is determined by the
  	 * order they occur in the first array.
  	 *
  	 * **Note:** Unlike `_.pullAll`, this method returns a new array.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 0.1.0
  	 * @category Array
  	 * @param {Array} array The array to inspect.
  	 * @param {...Array} [values] The values to exclude.
  	 * @returns {Array} Returns the new array of filtered values.
  	 * @see _.without, _.xor
  	 * @example
  	 *
  	 * _.difference([2, 1], [2, 3]);
  	 * // => [1]
  	 */
  	var difference = baseRest(function (array, values) {
  	  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject)) : [];
  	});

  	/**
  	 * Performs a
  	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
  	 * comparison between two values to determine if they are equivalent.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.0.0
  	 * @category Lang
  	 * @param {*} value The value to compare.
  	 * @param {*} other The other value to compare.
  	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
  	 * @example
  	 *
  	 * var object = { 'a': 1 };
  	 * var other = { 'a': 1 };
  	 *
  	 * _.eq(object, object);
  	 * // => true
  	 *
  	 * _.eq(object, other);
  	 * // => false
  	 *
  	 * _.eq('a', 'a');
  	 * // => true
  	 *
  	 * _.eq('a', Object('a'));
  	 * // => false
  	 *
  	 * _.eq(NaN, NaN);
  	 * // => true
  	 */
  	function eq(value, other) {
  	  return value === other || value !== value && other !== other;
  	}

  	/**
  	 * Checks if `value` is likely an `arguments` object.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 0.1.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
  	 *  else `false`.
  	 * @example
  	 *
  	 * _.isArguments(function() { return arguments; }());
  	 * // => true
  	 *
  	 * _.isArguments([1, 2, 3]);
  	 * // => false
  	 */
  	function isArguments(value) {
  	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  	}

  	/**
  	 * Checks if `value` is classified as an `Array` object.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 0.1.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
  	 * @example
  	 *
  	 * _.isArray([1, 2, 3]);
  	 * // => true
  	 *
  	 * _.isArray(document.body.children);
  	 * // => false
  	 *
  	 * _.isArray('abc');
  	 * // => false
  	 *
  	 * _.isArray(_.noop);
  	 * // => false
  	 */
  	var isArray = Array.isArray;

  	/**
  	 * Checks if `value` is array-like. A value is considered array-like if it's
  	 * not a function and has a `value.length` that's an integer greater than or
  	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.0.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
  	 * @example
  	 *
  	 * _.isArrayLike([1, 2, 3]);
  	 * // => true
  	 *
  	 * _.isArrayLike(document.body.children);
  	 * // => true
  	 *
  	 * _.isArrayLike('abc');
  	 * // => true
  	 *
  	 * _.isArrayLike(_.noop);
  	 * // => false
  	 */
  	function isArrayLike(value) {
  	  return value != null && isLength(value.length) && !isFunction(value);
  	}

  	/**
  	 * This method is like `_.isArrayLike` except that it also checks if `value`
  	 * is an object.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.0.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is an array-like object,
  	 *  else `false`.
  	 * @example
  	 *
  	 * _.isArrayLikeObject([1, 2, 3]);
  	 * // => true
  	 *
  	 * _.isArrayLikeObject(document.body.children);
  	 * // => true
  	 *
  	 * _.isArrayLikeObject('abc');
  	 * // => false
  	 *
  	 * _.isArrayLikeObject(_.noop);
  	 * // => false
  	 */
  	function isArrayLikeObject(value) {
  	  return isObjectLike(value) && isArrayLike(value);
  	}

  	/**
  	 * Checks if `value` is classified as a `Function` object.
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 0.1.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
  	 * @example
  	 *
  	 * _.isFunction(_);
  	 * // => true
  	 *
  	 * _.isFunction(/abc/);
  	 * // => false
  	 */
  	function isFunction(value) {
  	  // The use of `Object#toString` avoids issues with the `typeof` operator
  	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  	  var tag = isObject(value) ? objectToString.call(value) : '';
  	  return tag == funcTag || tag == genTag;
  	}

  	/**
  	 * Checks if `value` is a valid array-like length.
  	 *
  	 * **Note:** This method is loosely based on
  	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.0.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
  	 * @example
  	 *
  	 * _.isLength(3);
  	 * // => true
  	 *
  	 * _.isLength(Number.MIN_VALUE);
  	 * // => false
  	 *
  	 * _.isLength(Infinity);
  	 * // => false
  	 *
  	 * _.isLength('3');
  	 * // => false
  	 */
  	function isLength(value) {
  	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  	}

  	/**
  	 * Checks if `value` is the
  	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
  	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 0.1.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
  	 * @example
  	 *
  	 * _.isObject({});
  	 * // => true
  	 *
  	 * _.isObject([1, 2, 3]);
  	 * // => true
  	 *
  	 * _.isObject(_.noop);
  	 * // => true
  	 *
  	 * _.isObject(null);
  	 * // => false
  	 */
  	function isObject(value) {
  	  var type = typeof value;
  	  return !!value && (type == 'object' || type == 'function');
  	}

  	/**
  	 * Checks if `value` is object-like. A value is object-like if it's not `null`
  	 * and has a `typeof` result of "object".
  	 *
  	 * @static
  	 * @memberOf _
  	 * @since 4.0.0
  	 * @category Lang
  	 * @param {*} value The value to check.
  	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
  	 * @example
  	 *
  	 * _.isObjectLike({});
  	 * // => true
  	 *
  	 * _.isObjectLike([1, 2, 3]);
  	 * // => true
  	 *
  	 * _.isObjectLike(_.noop);
  	 * // => false
  	 *
  	 * _.isObjectLike(null);
  	 * // => false
  	 */
  	function isObjectLike(value) {
  	  return !!value && typeof value == 'object';
  	}
  	lodash_difference = difference;
  	return lodash_difference;
  }

  var lodash_differenceExports = requireLodash_difference();
  var difference = /*@__PURE__*/getDefaultExportFromCjs(lodash_differenceExports);

  var arrayRange = range;

  /*
    range(0, 5); // [0, 1, 2, 3, 4]
    range(5); // [0, 1, 2, 3, 4]
    range(-5); // [0, -1, -2, -3, -4]
    range(0, 20, 5) // [0, 5, 10, 15]
    range(0, -20, -5) // [0, -5, -10, -15]
  */

  function range(start, stop, step) {
    if (start != null && typeof start != 'number') {
      throw new Error('start must be a number or null');
    }
    if (stop != null && typeof stop != 'number') {
      throw new Error('stop must be a number or null');
    }
    if (step != null && typeof step != 'number') {
      throw new Error('step must be a number or null');
    }
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (step == null) {
      step = stop > start ? 1 : -1;
    }
    var toReturn = [];
    var increasing = start < stop; //← here’s the change
    for (; increasing ? start < stop : start > stop; start += step) {
      toReturn.push(start);
    }
    return toReturn;
  }

  var SORTED_PITCHES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  var ACCIDENTAL_PITCHES = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];
  var PITCH_INDEXES = {
    C: 0,
    'C#': 1,
    Db: 1,
    D: 2,
    'D#': 3,
    Eb: 3,
    E: 4,
    F: 5,
    'F#': 6,
    Gb: 6,
    G: 7,
    'G#': 8,
    Ab: 8,
    A: 9,
    'A#': 10,
    Bb: 10,
    B: 11
  };
  var MIDI_NUMBER_C0 = 12;
  var MIN_MIDI_NUMBER = MIDI_NUMBER_C0;
  var MAX_MIDI_NUMBER = 127;
  var NOTE_REGEX = /([a-g])([#b]?)(\d+)/;
  var NOTES_IN_OCTAVE = 12;

  // Converts string notes in scientific pitch notation to a MIDI number, or null.
  //
  // Example: "c#0" => 13, "eb5" => 75, "abc" => null
  //
  // References:
  // - http://www.flutopedia.com/octave_notation.htm
  // - https://github.com/danigb/tonal/blob/master/packages/note/index.js
  function fromNote(note) {
    if (!note) {
      throw Error('Invalid note argument');
    }
    var match = NOTE_REGEX.exec(note.toLowerCase());
    if (!match) {
      throw Error('Invalid note argument');
    }
    var _match = _slicedToArray(match, 4),
      letter = _match[1],
      accidental = _match[2],
      octave = _match[3];
    var pitchName = "".concat(letter.toUpperCase()).concat(accidental);
    var pitchIndex = PITCH_INDEXES[pitchName];
    if (pitchIndex == null) {
      throw Error('Invalid note argument');
    }
    return MIDI_NUMBER_C0 + pitchIndex + NOTES_IN_OCTAVE * parseInt(octave, 10);
  }

  //
  // Build cache for getAttributes
  //
  function buildMidiNumberAttributes(midiNumber) {
    var pitchIndex = (midiNumber - MIDI_NUMBER_C0) % NOTES_IN_OCTAVE;
    var octave = Math.floor((midiNumber - MIDI_NUMBER_C0) / NOTES_IN_OCTAVE);
    var pitchName = SORTED_PITCHES[pitchIndex];
    return {
      note: "".concat(pitchName).concat(octave),
      pitchName: pitchName,
      octave: octave,
      midiNumber: midiNumber,
      isAccidental: ACCIDENTAL_PITCHES.includes(pitchName)
    };
  }
  function buildMidiNumberAttributesCache() {
    return arrayRange(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).reduce(function (cache, midiNumber) {
      cache[midiNumber] = buildMidiNumberAttributes(midiNumber);
      return cache;
    }, {});
  }
  var midiNumberAttributesCache = buildMidiNumberAttributesCache();

  // Returns an object containing various attributes for a given MIDI number.
  // Throws error for invalid midiNumbers.
  function getAttributes(midiNumber) {
    var attrs = midiNumberAttributesCache[midiNumber];
    if (!attrs) {
      throw Error('Invalid MIDI number');
    }
    return attrs;
  }

  // Returns all MIDI numbers corresponding to natural notes, e.g. C and not C# or Bb.
  var NATURAL_MIDI_NUMBERS = arrayRange(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).filter(function (midiNumber) {
    return !getAttributes(midiNumber).isAccidental;
  });
  var MidiNumbers = {
    fromNote: fromNote,
    getAttributes: getAttributes,
    MIN_MIDI_NUMBER: MIN_MIDI_NUMBER,
    MAX_MIDI_NUMBER: MAX_MIDI_NUMBER,
    NATURAL_MIDI_NUMBERS: NATURAL_MIDI_NUMBERS
  };

  var Key = /*#__PURE__*/function (_React$Component) {
    function Key() {
      var _this;
      _classCallCheck(this, Key);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper(this, Key, [].concat(args));
      _defineProperty(_this, "onPlayNoteInput", function () {
        _this.props.onPlayNoteInput(_this.props.midiNumber);
      });
      _defineProperty(_this, "onStopNoteInput", function () {
        _this.props.onStopNoteInput(_this.props.midiNumber);
      });
      return _this;
    }
    _inherits(Key, _React$Component);
    return _createClass(Key, [{
      key: "getAbsoluteKeyPosition",
      value:
      // Key position is represented by the number of natural key widths from the left
      function getAbsoluteKeyPosition(midiNumber) {
        var OCTAVE_WIDTH = 7;
        var _MidiNumbers$getAttri = MidiNumbers.getAttributes(midiNumber),
          octave = _MidiNumbers$getAttri.octave,
          pitchName = _MidiNumbers$getAttri.pitchName;
        var pitchPosition = this.props.pitchPositions[pitchName];
        var octavePosition = OCTAVE_WIDTH * octave;
        return pitchPosition + octavePosition;
      }
    }, {
      key: "getRelativeKeyPosition",
      value: function getRelativeKeyPosition(midiNumber) {
        return this.getAbsoluteKeyPosition(midiNumber) - this.getAbsoluteKeyPosition(this.props.noteRange.first);
      }
    }, {
      key: "getLayout",
      value: function getLayout() {
        return this.layout;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          naturalKeyWidth = _this$props.naturalKeyWidth,
          accidentalWidthRatio = _this$props.accidentalWidthRatio,
          midiNumber = _this$props.midiNumber,
          gliss = _this$props.gliss,
          useTouchEvents = _this$props.useTouchEvents,
          accidental = _this$props.accidental,
          active = _this$props.active,
          disabled = _this$props.disabled,
          children = _this$props.children;
        var left = ratioToPercentage(this.getRelativeKeyPosition(midiNumber) * naturalKeyWidth);
        var width = ratioToPercentage(accidental ? accidentalWidthRatio * naturalKeyWidth : naturalKeyWidth);
        if (this.props.exportLayout) this.layout = {
          midiNumber: midiNumber,
          left: left,
          width: width
        };

        // Need to conditionally include/exclude handlers based on useTouchEvents,
        // because otherwise mobile taps double fire events.
        return /*#__PURE__*/React.createElement("div", {
          className: classNames('ReactPiano__Key', {
            'ReactPiano__Key--accidental': accidental,
            'ReactPiano__Key--natural': !accidental,
            'ReactPiano__Key--disabled': disabled,
            'ReactPiano__Key--active': active
          }),
          style: {
            left: left,
            width: width
          },
          onMouseDown: useTouchEvents ? null : this.onPlayNoteInput,
          onMouseUp: useTouchEvents ? null : this.onStopNoteInput,
          onMouseEnter: gliss ? this.onPlayNoteInput : null,
          onMouseLeave: this.onStopNoteInput,
          onTouchStart: useTouchEvents ? this.onPlayNoteInput : null,
          onTouchCancel: useTouchEvents ? this.onStopNoteInput : null,
          onTouchEnd: useTouchEvents ? this.onStopNoteInput : null
        }, /*#__PURE__*/React.createElement("div", {
          className: "ReactPiano__NoteLabelContainer"
        }, children));
      }
    }]);
  }(React.Component);
  _defineProperty(Key, "propTypes", {
    midiNumber: PropTypes.number.isRequired,
    naturalKeyWidth: PropTypes.number.isRequired,
    // Width as a ratio between 0 and 1
    gliss: PropTypes.bool.isRequired,
    useTouchEvents: PropTypes.bool.isRequired,
    accidental: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    onPlayNoteInput: PropTypes.func.isRequired,
    onStopNoteInput: PropTypes.func.isRequired,
    accidentalWidthRatio: PropTypes.number.isRequired,
    pitchPositions: PropTypes.object.isRequired,
    children: PropTypes.node,
    exportLayout: PropTypes.bool
  });
  _defineProperty(Key, "defaultProps", {
    accidentalWidthRatio: 0.65,
    pitchPositions: {
      C: 0,
      Db: 0.55,
      D: 1,
      Eb: 1.8,
      E: 2,
      F: 3,
      Gb: 3.5,
      G: 4,
      Ab: 4.7,
      A: 5,
      Bb: 5.85,
      B: 6
    }
  });
  function ratioToPercentage(ratio) {
    return "".concat(ratio * 100, "%");
  }

  var Keyboard = /*#__PURE__*/function (_React$Component) {
    function Keyboard(props) {
      var _this;
      _classCallCheck(this, Keyboard);
      _this = _callSuper(this, Keyboard, [props]);
      _this.updateMidiKeys();
      return _this;
    }

    // Range of midi numbers on keyboard
    _inherits(Keyboard, _React$Component);
    return _createClass(Keyboard, [{
      key: "getMidiNumbers",
      value: function getMidiNumbers() {
        return arrayRange(this.props.noteRange.first, this.props.noteRange.last + 1);
      }
    }, {
      key: "getNaturalKeyCount",
      value: function getNaturalKeyCount() {
        return this.getMidiNumbers().filter(function (number) {
          var _MidiNumbers$getAttri = MidiNumbers.getAttributes(number),
            isAccidental = _MidiNumbers$getAttri.isAccidental;
          return !isAccidental;
        }).length;
      }

      // Returns a ratio between 0 and 1
    }, {
      key: "getNaturalKeyWidth",
      value: function getNaturalKeyWidth() {
        return 1 / this.getNaturalKeyCount();
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.props.width ? this.props.width : '100%';
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        if (!this.props.width) {
          return '100%';
        }
        var keyWidth = this.props.width * this.getNaturalKeyWidth();
        return "".concat(keyWidth / this.props.keyWidthToHeight, "px");
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.props.onLayoutChange) return;
        this.resizeObserver = new ResizeObserver(this.measureKeys.bind(this)); // Sử dụng bind để giữ nguyên context
        this.resizeObserver.observe(this.keyboardRef.current); // Bắt đầu lắng nghe sự kiện resize
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (!this.resizeObserver) return;
        this.resizeObserver.disconnect(); // Hủy lắng nghe sự kiện resize
        delete this.resizeObserver;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // Cập nhật midiKeys và refs nếu noteRange thay đổi
        if (prevProps.noteRange !== this.props.noteRange) this.updateMidiKeys();
        if (this.props.onLayoutChange && !this.resizeObserver) {
          // Kiểm tra xem có cần khởi tạo lại ResizeObserver không
          this.resizeObserver = new ResizeObserver(this.measureKeys.bind(this)); // Sử dụng bind để giữ nguyên context
          this.resizeObserver.observe(this.keyboardRef.current);
        } else if (!this.props.onLayoutChange && this.resizeObserver) {
          this.resizeObserver.disconnect(); // Hủy lắng nghe sự kiện resize
          delete this.resizeObserver;
        }
      }
    }, {
      key: "updateMidiKeys",
      value: function updateMidiKeys() {
        var _this2 = this;
        var tempMidiKeys = this.getMidiNumbers(); // Cập nhật midiKeys

        // Nếu midiKeys không thay đổi thì không cần cập nhật refs
        var isChange = !arraysEqual(tempMidiKeys, this.midiKeys);
        if (isChange) this.midiKeys = tempMidiKeys;

        // Chỉ khởi tạo lại keyRefs và keyLayouts khi onLayoutChange không phải là null
        if (this.props.onLayoutChange) {
          if (this.keyboardRef == null) this.keyboardRef = /*#__PURE__*/React.createRef();
          if (this.keyRefs == null) this.keyRefs = {}; // Khởi tạo refs

          if (isChange) {
            // Tạo refs cho từng midiKey
            this.midiKeys.forEach(function (midiNumber) {
              _this2.keyRefs[midiNumber] = /*#__PURE__*/React.createRef();
            });
          }
        } else if (this.keyRefs) {
          delete this.keyRefs;
        }
      }
    }, {
      key: "measureKeys",
      value: function measureKeys() {
        var _this3 = this;
        var layouts = this.midiKeys.map(function (midiNumber) {
          var keyComponent = _this3.keyRefs[midiNumber];
          if (keyComponent) return keyComponent.current.getLayout();
          return null;
        }).filter(function (layout) {
          return layout !== null;
        });
        if (this.props.onLayoutChange) this.props.onLayoutChange(layouts); // Gọi callback với layouts mới
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;
        var naturalKeyWidth = this.getNaturalKeyWidth();
        return /*#__PURE__*/React.createElement("div", {
          ref: this.keyboardRef,
          className: classNames('ReactPiano__Keyboard', this.props.className),
          style: {
            width: this.getWidth(),
            height: this.getHeight()
          }
        }, this.midiKeys.map(function (midiNumber) {
          var _MidiNumbers$getAttri2 = MidiNumbers.getAttributes(midiNumber);
            _MidiNumbers$getAttri2.note;
            var isAccidental = _MidiNumbers$getAttri2.isAccidental;
          var isActive = !_this4.props.disabled && _this4.props.activeNotes.includes(midiNumber);
          return /*#__PURE__*/React.createElement(Key, {
            ref: _this4.keyRefs != null ? _this4.keyRefs[midiNumber] : null // Gán ref cho Key
            ,
            naturalKeyWidth: naturalKeyWidth,
            midiNumber: midiNumber,
            noteRange: _this4.props.noteRange,
            active: isActive,
            accidental: isAccidental,
            disabled: _this4.props.disabled,
            onPlayNoteInput: _this4.props.onPlayNoteInput,
            onStopNoteInput: _this4.props.onStopNoteInput,
            gliss: _this4.props.gliss,
            useTouchEvents: _this4.props.useTouchEvents,
            key: midiNumber,
            exportLayout: _this4.props.onLayoutChange != null
          }, _this4.props.disabled ? null : _this4.props.renderNoteLabel({
            isActive: isActive,
            isAccidental: isAccidental,
            midiNumber: midiNumber
          }));
        }));
      }
    }]);
  }(React.Component);
  _defineProperty(Keyboard, "propTypes", {
    noteRange: noteRangePropType,
    activeNotes: PropTypes.arrayOf(PropTypes.number),
    onPlayNoteInput: PropTypes.func.isRequired,
    onStopNoteInput: PropTypes.func.isRequired,
    renderNoteLabel: PropTypes.func.isRequired,
    keyWidthToHeight: PropTypes.number.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    gliss: PropTypes.bool,
    useTouchEvents: PropTypes.bool,
    // If width is not provided, must have fixed width and height in parent container
    width: PropTypes.number,
    onLayoutChange: PropTypes.func
  });
  _defineProperty(Keyboard, "defaultProps", {
    disabled: false,
    gliss: false,
    useTouchEvents: false,
    keyWidthToHeight: 0.33,
    renderNoteLabel: function renderNoteLabel() {}
  });
  function arraysEqual(arr1, arr2) {
    if (arr1 == null || arr2 == null || arr1.length !== arr2.length) {
      return false;
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  function isNaturalMidiNumber(value) {
    if (typeof value !== 'number') {
      return false;
    }
    return MidiNumbers.NATURAL_MIDI_NUMBERS.includes(value);
  }
  function noteRangePropType(props, propName, componentName) {
    var _props$propName = props[propName],
      first = _props$propName.first,
      last = _props$propName.last;
    if (!first || !last) {
      return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, " must be an object with .first and .last values."));
    }
    if (!isNaturalMidiNumber(first) || !isNaturalMidiNumber(last)) {
      return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, " values must be valid MIDI numbers, and should not be accidentals (sharp or flat notes)."));
    }
    if (first >= last) {
      return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, ".first must be smaller than ").concat(propName, ".last."));
    }
  }

  var ControlledPiano = /*#__PURE__*/function (_React$Component) {
    function ControlledPiano() {
      var _this;
      _classCallCheck(this, ControlledPiano);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper(this, ControlledPiano, [].concat(args));
      _defineProperty(_this, "state", {
        isMouseDown: false,
        useTouchEvents: false
      });
      // This function is responsible for diff'ing activeNotes
      // and playing or stopping notes accordingly.
      _defineProperty(_this, "handleNoteChanges", function (_ref) {
        var prevActiveNotes = _ref.prevActiveNotes,
          nextActiveNotes = _ref.nextActiveNotes;
        if (_this.props.disabled) {
          return;
        }
        var notesStopped = difference(prevActiveNotes, nextActiveNotes);
        var notesStarted = difference(nextActiveNotes, prevActiveNotes);
        notesStarted.forEach(function (midiNumber) {
          _this.props.playNote(midiNumber);
        });
        notesStopped.forEach(function (midiNumber) {
          _this.props.stopNote(midiNumber);
        });
      });
      _defineProperty(_this, "getMidiNumberForKey", function (key) {
        if (!_this.props.keyboardShortcuts) {
          return null;
        }
        var shortcut = _this.props.keyboardShortcuts.find(function (sh) {
          return sh.key === key;
        });
        return shortcut && shortcut.midiNumber;
      });
      _defineProperty(_this, "getKeyForMidiNumber", function (midiNumber) {
        if (!_this.props.keyboardShortcuts) {
          return null;
        }
        var shortcut = _this.props.keyboardShortcuts.find(function (sh) {
          return sh.midiNumber === midiNumber;
        });
        return shortcut && shortcut.key;
      });
      _defineProperty(_this, "onKeyDown", function (event) {
        // Don't conflict with existing combinations like ctrl + t
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          return;
        }
        var midiNumber = _this.getMidiNumberForKey(event.key);
        if (midiNumber) {
          _this.onPlayNoteInput(midiNumber);
        }
      });
      _defineProperty(_this, "onKeyUp", function (event) {
        // This *should* also check for event.ctrlKey || event.metaKey || event.ShiftKey like onKeyDown does,
        // but at least on Mac Chrome, when mashing down many alphanumeric keystrokes at once,
        // ctrlKey is fired unexpectedly, which would cause onStopNote to NOT be fired, which causes problematic
        // lingering notes. Since it's fairly safe to call onStopNote even when not necessary,
        // the ctrl/meta/shift check is removed to fix that issue.
        var midiNumber = _this.getMidiNumberForKey(event.key);
        if (midiNumber) {
          _this.onStopNoteInput(midiNumber);
        }
      });
      _defineProperty(_this, "onPlayNoteInput", function (midiNumber) {
        if (_this.props.disabled) {
          return;
        }
        // Pass in previous activeNotes for recording functionality
        _this.props.onPlayNoteInput(midiNumber, _this.props.activeNotes);
      });
      _defineProperty(_this, "onStopNoteInput", function (midiNumber) {
        if (_this.props.disabled) {
          return;
        }
        // Pass in previous activeNotes for recording functionality
        _this.props.onStopNoteInput(midiNumber, _this.props.activeNotes);
      });
      _defineProperty(_this, "onMouseDown", function () {
        _this.setState({
          isMouseDown: true
        });
      });
      _defineProperty(_this, "onMouseUp", function () {
        _this.setState({
          isMouseDown: false
        });
      });
      _defineProperty(_this, "onTouchStart", function () {
        _this.setState({
          useTouchEvents: true
        });
      });
      _defineProperty(_this, "renderNoteLabel", function (_ref2) {
        var midiNumber = _ref2.midiNumber,
          isActive = _ref2.isActive,
          isAccidental = _ref2.isAccidental;
        var keyboardShortcut = _this.getKeyForMidiNumber(midiNumber);
        return _this.props.renderNoteLabel({
          keyboardShortcut: keyboardShortcut,
          midiNumber: midiNumber,
          isActive: isActive,
          isAccidental: isAccidental
        });
      });
      return _this;
    }
    _inherits(ControlledPiano, _React$Component);
    return _createClass(ControlledPiano, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.props.activeNotes !== prevProps.activeNotes) {
          this.handleNoteChanges({
            prevActiveNotes: prevProps.activeNotes || [],
            nextActiveNotes: this.props.activeNotes || []
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            height: '100%'
          },
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          onTouchStart: this.onTouchStart,
          "data-testid": "container"
        }, /*#__PURE__*/React.createElement(Keyboard, {
          noteRange: this.props.noteRange,
          onPlayNoteInput: this.onPlayNoteInput,
          onStopNoteInput: this.onStopNoteInput,
          activeNotes: this.props.activeNotes,
          className: this.props.className,
          disabled: this.props.disabled,
          width: this.props.width,
          keyWidthToHeight: this.props.keyWidthToHeight,
          gliss: this.state.isMouseDown,
          useTouchEvents: this.state.useTouchEvents,
          renderNoteLabel: this.renderNoteLabel,
          onLayoutChange: this.props.onLayoutChange
        }));
      }
    }]);
  }(React.Component);
  _defineProperty(ControlledPiano, "propTypes", {
    noteRange: PropTypes.object.isRequired,
    activeNotes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    playNote: PropTypes.func.isRequired,
    stopNote: PropTypes.func.isRequired,
    onPlayNoteInput: PropTypes.func.isRequired,
    onStopNoteInput: PropTypes.func.isRequired,
    renderNoteLabel: PropTypes.func.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    width: PropTypes.number,
    keyWidthToHeight: PropTypes.number,
    keyboardShortcuts: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      midiNumber: PropTypes.number.isRequired
    })),
    onLayoutChange: PropTypes.func
  });
  _defineProperty(ControlledPiano, "defaultProps", {
    renderNoteLabel: function renderNoteLabel(_ref3) {
      var keyboardShortcut = _ref3.keyboardShortcut;
        _ref3.midiNumber;
        var isActive = _ref3.isActive,
        isAccidental = _ref3.isAccidental;
      return keyboardShortcut ? /*#__PURE__*/React.createElement("div", {
        className: classNames('ReactPiano__NoteLabel', {
          'ReactPiano__NoteLabel--active': isActive,
          'ReactPiano__NoteLabel--accidental': isAccidental,
          'ReactPiano__NoteLabel--natural': !isAccidental
        })
      }, keyboardShortcut) : null;
    }
  });

  var _excluded = ["activeNotes", "onPlayNoteInput", "onStopNoteInput"];
  // import Keyboard from './Keyboard';
  var Piano = /*#__PURE__*/function (_React$Component) {
    function Piano() {
      var _this;
      _classCallCheck(this, Piano);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper(this, Piano, [].concat(args));
      _defineProperty(_this, "state", {
        activeNotes: _this.props.activeNotes || []
      });
      _defineProperty(_this, "handlePlayNoteInput", function (midiNumber) {
        _this.setState(function (prevState) {
          // Need to be handled inside setState in order to set prevActiveNotes without
          // race conditions.
          if (_this.props.onPlayNoteInput) {
            _this.props.onPlayNoteInput(midiNumber, {
              prevActiveNotes: prevState.activeNotes
            });
          }

          // Don't append note to activeNotes if it's already present
          if (prevState.activeNotes.includes(midiNumber)) {
            return null;
          }
          return {
            activeNotes: prevState.activeNotes.concat(midiNumber)
          };
        });
      });
      _defineProperty(_this, "handleStopNoteInput", function (midiNumber) {
        _this.setState(function (prevState) {
          // Need to be handled inside setState in order to set prevActiveNotes without
          // race conditions.
          if (_this.props.onStopNoteInput) {
            _this.props.onStopNoteInput(midiNumber, {
              prevActiveNotes: _this.state.activeNotes
            });
          }
          return {
            activeNotes: prevState.activeNotes.filter(function (note) {
              return midiNumber !== note;
            })
          };
        });
      });
      return _this;
    }
    _inherits(Piano, _React$Component);
    return _createClass(Piano, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // Make activeNotes "controllable" by using internal
        // state by default, but allowing prop overrides.
        if (prevProps.activeNotes !== this.props.activeNotes && this.state.activeNotes !== this.props.activeNotes) {
          this.setState({
            activeNotes: this.props.activeNotes || []
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props;
          _this$props.activeNotes;
          _this$props.onPlayNoteInput;
          _this$props.onStopNoteInput;
          var otherProps = _objectWithoutProperties(_this$props, _excluded);
        return /*#__PURE__*/React.createElement(ControlledPiano, _extends({
          activeNotes: this.state.activeNotes,
          onPlayNoteInput: this.handlePlayNoteInput,
          onStopNoteInput: this.handleStopNoteInput
        }, otherProps));
      }
    }]);
  }(React.Component);
  _defineProperty(Piano, "propTypes", {
    noteRange: PropTypes.object.isRequired,
    activeNotes: PropTypes.arrayOf(PropTypes.number.isRequired),
    playNote: PropTypes.func.isRequired,
    stopNote: PropTypes.func.isRequired,
    onPlayNoteInput: PropTypes.func,
    onStopNoteInput: PropTypes.func,
    renderNoteLabel: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    width: PropTypes.number,
    keyWidthToHeight: PropTypes.number,
    keyboardShortcuts: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      midiNumber: PropTypes.number.isRequired
    })),
    onLayoutChange: PropTypes.func
  });

  function createKeyboardShortcuts(_ref) {
    var firstNote = _ref.firstNote,
      lastNote = _ref.lastNote,
      keyboardConfig = _ref.keyboardConfig;
    var currentMidiNumber = firstNote;
    var naturalKeyIndex = 0;
    var keyboardShortcuts = [];
    while (
    // There are still keys to be assigned
    naturalKeyIndex < keyboardConfig.length &&
    // Note to be assigned does not surpass range
    currentMidiNumber <= lastNote) {
      var key = keyboardConfig[naturalKeyIndex];
      var _MidiNumbers$getAttri = MidiNumbers.getAttributes(currentMidiNumber),
        isAccidental = _MidiNumbers$getAttri.isAccidental;
      if (isAccidental) {
        keyboardShortcuts.push({
          key: key.flat,
          midiNumber: currentMidiNumber
        });
      } else {
        keyboardShortcuts.push({
          key: key.natural,
          midiNumber: currentMidiNumber
        });
        naturalKeyIndex += 1;
      }
      currentMidiNumber += 1;
    }
    return keyboardShortcuts;
  }
  var KeyboardShortcuts = {
    create: createKeyboardShortcuts,
    // Preset configurations
    BOTTOM_ROW: [{
      natural: 'z',
      flat: 'a',
      sharp: 's'
    }, {
      natural: 'x',
      flat: 's',
      sharp: 'd'
    }, {
      natural: 'c',
      flat: 'd',
      sharp: 'f'
    }, {
      natural: 'v',
      flat: 'f',
      sharp: 'g'
    }, {
      natural: 'b',
      flat: 'g',
      sharp: 'h'
    }, {
      natural: 'n',
      flat: 'h',
      sharp: 'j'
    }, {
      natural: 'm',
      flat: 'j',
      sharp: 'k'
    }, {
      natural: ',',
      flat: 'k',
      sharp: 'l'
    }, {
      natural: '.',
      flat: 'l',
      sharp: ';'
    }, {
      natural: '/',
      flat: ';',
      sharp: "'"
    }],
    HOME_ROW: [{
      natural: 'a',
      flat: 'q',
      sharp: 'w'
    }, {
      natural: 's',
      flat: 'w',
      sharp: 'e'
    }, {
      natural: 'd',
      flat: 'e',
      sharp: 'r'
    }, {
      natural: 'f',
      flat: 'r',
      sharp: 't'
    }, {
      natural: 'g',
      flat: 't',
      sharp: 'y'
    }, {
      natural: 'h',
      flat: 'y',
      sharp: 'u'
    }, {
      natural: 'j',
      flat: 'u',
      sharp: 'i'
    }, {
      natural: 'k',
      flat: 'i',
      sharp: 'o'
    }, {
      natural: 'l',
      flat: 'o',
      sharp: 'p'
    }, {
      natural: ';',
      flat: 'p',
      sharp: '['
    }, {
      natural: "'",
      flat: '[',
      sharp: ']'
    }],
    QWERTY_ROW: [{
      natural: 'q',
      flat: '1',
      sharp: '2'
    }, {
      natural: 'w',
      flat: '2',
      sharp: '3'
    }, {
      natural: 'e',
      flat: '3',
      sharp: '4'
    }, {
      natural: 'r',
      flat: '4',
      sharp: '5'
    }, {
      natural: 't',
      flat: '5',
      sharp: '6'
    }, {
      natural: 'y',
      flat: '6',
      sharp: '7'
    }, {
      natural: 'u',
      flat: '7',
      sharp: '8'
    }, {
      natural: 'i',
      flat: '8',
      sharp: '9'
    }, {
      natural: 'o',
      flat: '9',
      sharp: '0'
    }, {
      natural: 'p',
      flat: '0',
      sharp: '-'
    }, {
      natural: '[',
      flat: '-',
      sharp: '='
    }]
  };

  exports.ControlledPiano = ControlledPiano;
  exports.Keyboard = Keyboard;
  exports.KeyboardShortcuts = KeyboardShortcuts;
  exports.MidiNumbers = MidiNumbers;
  exports.Piano = Piano;

}));
//# sourceMappingURL=react-piano.umd.js.map
