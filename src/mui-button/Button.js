import React from 'react';
import PropTypes from 'prop-types';
import Ripple from './Ripple';
import './Button.css';

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {ripples: []};
  }

  render() {
    return (
      <div
        ref={el => this.el = el}
        className="Button"
        onClick={(e) => {
          const left = e.pageX - this.el.offsetLeft;
          const top = e.pageY - this.el.offsetTop;
          this.setState({
            ripples: [...this.state.ripples, {left, top, id: Math.random().toString()}],
          });
        }}
      >
        {this.props.children}
        {this.state.ripples.map(({top, left, id}) =>
          <Ripple
            top={`${top}px`}
            left={`${left}px`}
            onRequestRemove={() => {
              this.setState(state => ({
                ripples: state.ripples.filter(x => x.id !== id),
              }));
            }}
          />
        )}
      </div>
    );
  }
}

export default Button;
