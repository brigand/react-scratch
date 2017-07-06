import React from 'react';
import Dropdown from './Dropdown';
import './index.css';

const items = [
  {text: 'One', color: 'red'},
  {text: 'One', color: 'blue'},
  {text: 'One', color: 'orange'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
  }
  render() {
    return (
      <div>
        <h1>Dropdown</h1>
        <Dropdown
          onChange={(index) => {
            this.setState({active: items[index]});
          }}
          items={items}
        >
          {this.state.value ? this.state.value.text : `Color`}
        </Dropdown>
        <p>Selected: {this.state.value ? this.state.value.text : null}</p>
      </div>
    );
  }
}

export default App;
