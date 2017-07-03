import React from 'react';
import Tabs from './Tabs.js';

const styles = {
  fontFamily: 'sans-serif',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 'aTab'};
  }
  render() {
    const content = {
      aTab: 'Tab A',
      bTab: 'Tab B',
      cTab: 'Tab C',
    };
    return (
      <div style={styles}>
        <h1>Tabs Example</h1>
        <Tabs
          active={this.state.active}
          onChange={active => this.setState({active})}
        >
          <div key="aTab">A Title</div>
          <div key="bTab">B Very Long Title</div>
          <div key="cTab">{this.state.active === 'bTab' ? 'Title' : 'Very Long Title'}</div>
        </Tabs>
        <h2>Content</h2>
        <p>{content[this.state.active]}</p>
      </div>
    );
  }
};
export default App;
