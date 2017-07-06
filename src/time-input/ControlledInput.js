import React from 'react';

const DEBUG = true;

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.public = {};
    this.public.focus = () => {
      this.input.focus();
      if (this.props.range) {
        this.updateSelection(this.props.range);
      } else {
        this.public.select();
      }
    };
    this.public.select = () => {
      this.input.select();
      this.propagateSelection();
    };
  }

  updateSelection(range) {
    this.input.focus();
    if (this.input.selectionStart !== range[0] || this.input.selectionEnd !== range[1]) {
      this.input.setSelectionRange(range[0], range[1]);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (DEBUG) console.log(`componentWillReceiveProps`, nextProps.range);
    if (!nextProps.range) {
      this.updateSelection([0, 0]);
    }
    else {
      this.updateSelection(nextProps.range);
    }
  }

  componentDidMount() {
    this.updateSelection(this.props.range || [0, 0]);
  }

  handleKeyPress(e) {
    this.props.onKeyPress && this.props.onKeyPress(e);
  }

  getSelection() {
    const range = [this.input.selectionStart, this.input.selectionEnd];
    return range;
  }

  propagateSelection() {
    this.props.onRangeChange && this.props.onRangeChange(this.getSelection());
  }

  render() {
    const makeHandler = (name) => {
      handlers[name] = (event) => {
        if (DEBUG) console.log(`makeHandler('${name}')(event)`);
        this.props[name] && this.props[name](event);
        this.propagateSelection();
      };
    };
    const handlers = {};

    makeHandler('onKeyUp');
    makeHandler('onClick');
    makeHandler('onFocus');

    const {range, onRangeChange, onChange, ...props} = this.props;

    return (
      <input
        ref={el => this.input = el}
        {...props}
        {...handlers}
        onChange={e => {
          if (DEBUG) console.log(`onChange`);
          const range = this.getSelection();
          const value = e.target.value;
          this.props.onChange(value, range);
        }}
      />
    );
  }
}

export default ControlledInput;
