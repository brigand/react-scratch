import React from 'react';
import ControlledInput from './ControlledInput';
import './TimeInput.css';

const cssItem = `TimeInput__Display__Item`;
const cssItemPlaceholder = `${cssItem} ${cssItem}--placeholder`;
const cssItemSmall = `${cssItem} ${cssItem}--small`;

class TimeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: this.getTimeData().str,
      inputRange: [0, 0],
    };
    this.offsets = [null, null, null, null, null, null];
  }

  handleDisplayClick(e) {
    this.input.public.focus();
  }

  getTimeData(n = this.props.seconds) {
    const hours = Math.floor(n / 60 / 60);
    const minutes = Math.floor(n / 60) % 60;
    const seconds = Math.floor(n % 60);
    const str = String(hours).padStart(2, '0')
      + String(minutes).padStart(2, '0')
      + String(seconds).padStart(2, '0');

    // figure out where the first non-zero character is
    const firstIndex = [...str].findIndex(c => c !== '0');
    return {str, firstIndex};
  }

  normalizeString(str) {
    if (!str) return '000000';
    str = str.replace(/\D+/g, '');
    if (str.length > 6) str = str.slice(-6);
    str = str.padStart(6, 0);
    return str;
  }

  stringToSeconds(str) {
    str = this.normalizeString(str);
    const h = Number(str.slice(0, 2)) * 60 * 60;
    const m = Number(str.slice(2, 4)) * 60;
    const s = Number(str.slice(4));
    return h + m + s;
  }

  onInputChange(raw, inputRange) {
    if (raw.length === 7 || raw.length === 5) {
      const next = this.state.inputRange[0];
      console.log(`raw.length is 7, ticking up range`);
      inputRange = [next, next];
      setTimeout(() => {
        this.setState({inputRange});
      }, 10);
    }
    const inputValue = this.normalizeString(raw);
    const seconds = this.stringToSeconds(inputValue);
    const fixed = this.getTimeData(seconds).str;
    this.props.onChange(seconds);
    this.setState({inputValue: fixed, inputRange})
  }

  render() {
    const timeData = this.getTimeData();
    return (
      <div className="TimeInput">
        <ControlledInput
          className="TimeInput__Input"
          ref={input => this.input = input}
          type="tel"
          pattern="\\d+"
          value={this.state.inputValue}
          range={this.state.inputRange}
          onChange={this.onInputChange.bind(this)}
          onRangeChange={inputRange => this.setState({inputRange})}
        />
        <div className="TimeInput__Display" onClick={e => this.handleDisplayClick(e)}>
          {this.getDigit(0, timeData)}
          {this.getDigit(1, timeData)}
          <div className={cssItemSmall}>
            h
          </div>
          {this.getDigit(2, timeData)}
          {this.getDigit(3, timeData)}
          <div className={cssItemSmall}>
            m
          </div>
          {this.getDigit(4, timeData)}
          {this.getDigit(5, timeData)}
          <div className={cssItemSmall}>
            s
          </div>
          {this.renderCursor()}
        </div>
      </div>
    );
  }

  getDigit(index, {str, firstIndex}) {
    let className = firstIndex !== -1 && index >= firstIndex ? cssItem : cssItemPlaceholder;

    const range = this.state.inputRange;
    if (index >= range[0] && index < range[1]) {
      className = `${className} TimeInput__Display__Item--selected`;
    }

    return (
      <div
        className={className}
        ref={el => {
          if (el) {
            this.offsets[index] = el.offsetLeft + el.offsetWidth;
            if (index === 0) {
              this.offsets[-1] = el.offsetLeft;
            }
          }
        }}
        onClick={() => {
          setTimeout(() => {
            this.setState({inputRange: [index + 1, index + 1]})
          }, 15);
        }}
      >
        {str[index]}
      </div>
    );

  }

  renderCursor() {
    const start = this.state.inputRange[0];
    const active = this.offsets[start - 1];
    if (active == null) {
      return null;
    }
    const left = `${active - 1}px`;
    return (
      <div
        className="TimeInput__Display__Cursor"
        style={{left}}
      />
    )
  }
}

export default TimeInput;
