import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import difference from 'lodash.difference';
import range from 'just-range';

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
  return range(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).reduce(function (cache, midiNumber) {
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
var NATURAL_MIDI_NUMBERS = range(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).filter(function (midiNumber) {
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
      return range(this.props.noteRange.first, this.props.noteRange.last + 1);
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

export { ControlledPiano, Keyboard, KeyboardShortcuts, MidiNumbers, Piano };
//# sourceMappingURL=react-piano.esm.js.map
