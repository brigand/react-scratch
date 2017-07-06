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
        className="Button"
        {...this.props}
        onClick={(e) => {
          this.props.onClick();
          const left = e.pageX - e.currentTarget.offsetLeft;
          const top = e.pageY - e.currentTarget.offsetTop;
          const id = Math.random().toString();
          const ripples = [...this.state.ripples, {left, top, id}];
          this.setState({ripples});
        }}
      >
        {this.props.children}
        {this.state.ripples.map(({left, top, id}) =>
          <Ripple
            left={`${left}px`}
            top={`${top}px`}
            key={id}
            onRequestRemove={() => {
              this.setState(state => ({
                ripples: state.ripples.filter(x => x.id !== id),
              }))
            }}
          />
        )}
      </div>
    );
  }
}

export default Button;
