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
      inputValue: '000000',
      inputRange: [0, 0],
    };
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
    if (str.length > 6) str = str.slice(-6);
    str = str.padStart(6, 0);
    return str;
  }

  stringToSeconds(str) {
    str = this.normalizeString(str);
    const h = Number(str.slice(0, 2)) * 60 * 60;
    const m = Number(str.slice(2, 3)) * 60;
    const s = Number(str.slice(4));
    return h + m + s;
  }

  render() {
    console.log('inputRange', this.state.inputRange);
    const timeData = this.getTimeData();
    return (
      <div className="TimeInput">
        <ControlledInput
          value={this.state.inputValue}
          range={this.state.inputRange}
          onChange={(raw, inputRange) => {
            const inputValue = this.normalizeString(raw);
            this.props.onChange(this.stringToSeconds(inputValue));
            this.setState({inputValue, inputRange})
          }}
          onRangeChange={inputRange => this.setState({inputRange})}
        />
        <ControlledInput
          className="TimeInput__Input"
          type="tel"
          pattern="\\d+"
          ref={input => this.input = input}
          // value={this.state.inputValue}
          // range={this.state.range}
          // onChange={inputValue => this.setState({inputValue})}
          // onRangeChange={inputRange => this.setState({inputRange})}
        />
        <div className="TimeInput__Display" onClick={e => this.handleDisplayClick(e)}>
          {this.getDigit(0, timeData)}
          {this.getDigit(1, timeData)}
          <div className={cssItemSmall}>
            :
          </div>
          {this.getDigit(2, timeData)}
          {this.getDigit(3, timeData)}
          <div className={cssItemSmall}>
            :
          </div>
          {this.getDigit(4, timeData)}
          {this.getDigit(5, timeData)}
          <div className="TimeInput__Display__Cursor" />
        </div>
      </div>
    );
  }

  getDigit(index, {str, firstIndex}) {
    let className = index >= firstIndex ? cssItem : cssItemPlaceholder;

    const range = this.state.inputRange;
    if (index >= range[0] && index < range[1]) {
      className = `${className} TimeInput__Display__Item--selected`;
    }

    return (
      <div className={className}>
        {str[index]}
      </div>
    );
  }
}

export default TimeInput;
