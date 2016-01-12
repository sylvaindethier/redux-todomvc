// initialize w/ no editing
const initialState = false;

function createReducer(handlers) {
  return function editing(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    // do nothing by default
    return state;
  };
}

export default createReducer({
  EDITING(state, action) {
    const editing = action.payload;
    return editing;
  },
});
