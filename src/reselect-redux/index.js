import {Provider} from 'react-redux';
import React from 'react';
import store from './store';
import Posts from './Posts';
import PostsByUser from './PostsByUser';
import Counter from './Counter';
import './index.css';

const initial = store.getState();

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Reselect Redux</h1>
        <Posts />
        <Counter />

        <h2>User 1</h2>
        <PostsByUser user={'user-1'} />
        <h2>User 2</h2>
        <PostsByUser user={'user-2'} />

        <pre>{JSON.stringify(initial, null, 2)}</pre>
      </div>
    );
  }
}

export default () => <Provider store={store}><App /></Provider>;
