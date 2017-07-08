import {Provider} from 'react-redux';
import React from 'react';
import store from './store';
import Posts from './Posts';
import Counter from './Counter';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Reselect Redux</h1>
        <Posts />
        <Counter />
      </div>
    );
  }
}

export default () => <Provider store={store}><App /></Provider>;
