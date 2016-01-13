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
  EDIT_TODO(state, action) {
    const id = action.payload;
    return id;
  },
});
