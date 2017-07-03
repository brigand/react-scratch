import React from 'react';
// import {findDOMNode} from 'react-dom';

import './Tabs.css';

const transitionTime = 200;
const transitionStyle = `left ${transitionTime}ms, right ${transitionTime}ms`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: {},
    };
    this.els = {};
  }
  componentDidMount() {
    this.getSizes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children && prevProps.active !== this.props.active) {
      this.getSizes();
    }
  }

  getSizes() {
    const rootBounds = this.root.getBoundingClientRect();

    const sizes = {};

    Object.keys(this.els).forEach((key) => {
      const el = this.els[key];
      const bounds = el.getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      sizes[key] = {left, right};
    });

    this.setState({sizes});
    return sizes;
  }

  render() {
    console.log(JSON.stringify(this.state, null, 2));
    return (
      <div
        className="Tabs"
        ref={el => this.root = el}
      >
        {React.Children.map(this.props.children, (child, i) => {
          let className = `Tabs__Tab`;
          if (child.key === this.props.active) {
            className = `${className} Tabs__Tab--active`;
          }
          return (
            <div
              className={className}
              onClick={() => {
                this.props.onChange(child.key);
              }}
              ref={el => this.els[child.key] = el}
            >
              {child}
            </div>
          );
        })}
        <div
          className="Tabs__Underline"
          style={this.getUnderlineStyle()}
        />
      </div>
    );
  }

  getUnderlineStyle() {
    if (this.props.active == null || Object.keys(this.state.sizes).length === 0) {
      return {left: '0', right: '100%'};
    }

    const size = this.state.sizes[this.props.active];

    return {
      left: `${size.left}px`,
      right: `${size.right}px`,
      transition: transitionStyle,
    }
  }
}

export default Tabs;
