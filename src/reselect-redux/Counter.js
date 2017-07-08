import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.props.increment();
    }, 500);
  }
  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
      </div>
    );
  }
}

const mapState = (state) => ({count: state.count});
const mapDispatch = {
  increment: () => ({type: 'INCREMENT'}),
};


export default connect(mapState, mapDispatch)(Counter);
