import React from 'react';
import PropTypes from 'prop-types';
import range from 'just-range';
import classNames from 'classnames';

import Key from './Key';
import MidiNumbers from './MidiNumbers';

class Keyboard extends React.Component {
  static propTypes = {
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
    onLayoutChange: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    gliss: false,
    useTouchEvents: false,
    keyWidthToHeight: 0.33,
    renderNoteLabel: () => { },
  };

  constructor(props) {
    super(props);
    this.updateMidiKeys();
  }

  // Range of midi numbers on keyboard
  getMidiNumbers() {
    return range(this.props.noteRange.first, this.props.noteRange.last + 1);
  }

  getNaturalKeyCount() {
    return this.getMidiNumbers().filter((number) => {
      const { isAccidental } = MidiNumbers.getAttributes(number);
      return !isAccidental;
    }).length;
  }

  // Returns a ratio between 0 and 1
  getNaturalKeyWidth() {
    return 1 / this.getNaturalKeyCount();
  }

  getWidth() {
    return this.props.width ? this.props.width : '100%';
  }

  getHeight() {
    if (!this.props.width) {
      return '100%';
    }
    const keyWidth = this.props.width * this.getNaturalKeyWidth();
    return `${keyWidth / this.props.keyWidthToHeight}px`;
  }

  componentDidMount() {
    if (!this.props.onLayoutChange) return;
    this.resizeObserver = new ResizeObserver(this.measureKeys.bind(this)); // Sử dụng bind để giữ nguyên context
    this.resizeObserver.observe(this.keyboardRef.current); // Bắt đầu lắng nghe sự kiện resize
  }

  componentWillUnmount() {
    if (!this.resizeObserver) return;
    this.resizeObserver.disconnect(); // Hủy lắng nghe sự kiện resize
    delete this.resizeObserver;
  }

  componentDidUpdate(prevProps) {
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

  updateMidiKeys() {
    const tempMidiKeys = this.getMidiNumbers(); // Cập nhật midiKeys

    // Nếu midiKeys không thay đổi thì không cần cập nhật refs
    const isChange = !arraysEqual(tempMidiKeys, this.midiKeys);
    if (isChange) this.midiKeys = tempMidiKeys;

    // Chỉ khởi tạo lại keyRefs và keyLayouts khi onLayoutChange không phải là null
    if (this.props.onLayoutChange) {
      if (this.keyboardRef == null) this.keyboardRef = React.createRef();
      if (this.keyRefs == null) this.keyRefs = {}; // Khởi tạo refs

      if (isChange) {
        // Tạo refs cho từng midiKey
        this.midiKeys.forEach(midiNumber => {
          this.keyRefs[midiNumber] = React.createRef();
        });
      }
    } else if (this.keyRefs) {
      delete this.keyRefs;
    }
  }

  measureKeys() {
    const layouts = this.midiKeys.map((midiNumber) => {
      const keyComponent = this.keyRefs[midiNumber];
      if (keyComponent) return keyComponent.current.getLayout();
      return null;
    }).filter(layout => layout !== null);

    if (this.props.onLayoutChange) this.props.onLayoutChange(layouts); // Gọi callback với layouts mới
  }

  render() {
    const naturalKeyWidth = this.getNaturalKeyWidth();
    return (
      <div
        ref={this.keyboardRef}
        className={classNames('ReactPiano__Keyboard', this.props.className)}
        style={{ width: this.getWidth(), height: this.getHeight() }}
      >
        {this.midiKeys.map((midiNumber) => {
          const { note, isAccidental } = MidiNumbers.getAttributes(midiNumber);
          const isActive = !this.props.disabled && this.props.activeNotes.includes(midiNumber);
          return (
            <Key
              ref={this.keyRefs != null ? this.keyRefs[midiNumber] : null} // Gán ref cho Key
              naturalKeyWidth={naturalKeyWidth}
              midiNumber={midiNumber}
              noteRange={this.props.noteRange}
              active={isActive}
              accidental={isAccidental}
              disabled={this.props.disabled}
              onPlayNoteInput={this.props.onPlayNoteInput}
              onStopNoteInput={this.props.onStopNoteInput}
              gliss={this.props.gliss}
              useTouchEvents={this.props.useTouchEvents}
              key={midiNumber}
              exportLayout={this.props.onLayoutChange != null}
            >
              {this.props.disabled
                ? null
                : this.props.renderNoteLabel({
                  isActive,
                  isAccidental,
                  midiNumber,
                })}
            </Key>
          );
        })}
      </div>
    );
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1 == null || arr2 == null || arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
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
  const { first, last } = props[propName];
  if (!first || !last) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propName} must be an object with .first and .last values.`,
    );
  }
  if (!isNaturalMidiNumber(first) || !isNaturalMidiNumber(last)) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propName} values must be valid MIDI numbers, and should not be accidentals (sharp or flat notes).`,
    );
  }
  if (first >= last) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propName}.first must be smaller than ${propName}.last.`,
    );
  }
}

export default Keyboard;
