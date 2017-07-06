import React from 'react';
import './TimeInput.css';

const cssItem = `TimeInput__Display__Item`;
const cssItemPlaceholder = `${cssItem} ${cssItem}--placeholder`;
const cssItemSmall = `${cssItem} ${cssItem}--small`;

class TimeInput extends React.Component {
  render() {
    return (
      <div className="TimeInput">
        <input
          ref={el => this.input = el}
          className="TimeInput__Input"
          type="tel"
          pattern="\\d+"
        />
        <div className="TimeInput__Display">
          <div className={cssItemPlaceholder}>
            0
          </div>
          <div className={cssItemPlaceholder}>
            0
          </div>
          <div className={cssItemSmall}>
            :
          </div>
          <div className={cssItemPlaceholder}>
            0
          </div>
          <div className={cssItemPlaceholder}>
            0
          </div>
          <div className={cssItemSmall}>
            :
          </div>
          <div className={cssItemPlaceholder}>
            0
          </div>
          <div className={cssItem}>
            7
          </div>
          <div className="TimeInput__Display__Cursor" />
        </div>
      </div>
    );
  }
}

export default TimeInput;
