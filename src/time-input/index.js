import React from 'react';
import TimeInput from './TimeInput';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seconds: 7 + 120};
  }
  render() {
    return (
      <div>
        <h1>Time input</h1>
        <TimeInput
          seconds={this.state.seconds}
          onChange={seconds => this.setState({seconds})}
        />
        <p>Seconds: <strong>{this.state.seconds}</strong></p>
      </div>
    );
  }
}

export default App;
