
const fooReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FOO_INCR':
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    case 'FOO_DECR':
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) - 1,
      };
    default: return state;
  }
};

export default fooReducer;
