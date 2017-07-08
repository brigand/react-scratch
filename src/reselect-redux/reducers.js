import {combineReducers} from 'redux';

export const usersByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      const newState = {...state};
      action.payload.users.forEach((user) => {
        newState[user.id] = user;
      });
      return newState;
    default: return state
  }
};

export const usersListingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.payload.users.map(x => x.id);
    default: return state
  }
};


export const postsByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      const newState = {...state};
      action.payload.posts.forEach((post) => {
        newState[post.id] = post;
      });
      return newState;
    default: return state
  }
}

export const postListingReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.payload.posts.map(x => x.id);
    default: return state
  }
}

export const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default: return state;
  }
}

export default combineReducers({
  usersById: usersByIdReducer,
  usersListing: usersListingReducer,
  postsById: postsByIdReducer,
  postListing: postListingReducer,
  count: counterReducer,
});
