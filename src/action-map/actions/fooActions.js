
export const fooIncr = (id) => {
  return {type: 'FOO_INCR', payload: id};
};

export const fooDecr = (id) => {
  return {type: 'FOO_DECR', payload: id};
};
