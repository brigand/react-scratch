import React from 'react';
import Button from './Button';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: 0};
  }
  render() {
    return (
      <div>
        <h1>Material design button</h1>
        <Button
          onClick={() => {
            this.setState({x: this.state.x + 1});
          }}
        >
          {`Click me!`}
        </Button>
        <p>Clicks: <strong>{this.state.x}</strong></p>
      </div>
    );
  }
}

export default App;
