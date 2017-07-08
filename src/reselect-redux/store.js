import {createStore} from 'redux';
import reducer from './reducers';
import {getPosts} from './fixtures';

const store = createStore(reducer);

store.dispatch({type: 'RECEIVE_DATA', payload: getPosts()});

export default store;
