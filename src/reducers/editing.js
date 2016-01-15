// initialize w/ no editing
const initialState = { id: '', text: '' };

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
  EDIT_TODO_TEXT(state, action) {
    const { id, text } = action.payload;
    return { id, text };
  },

  CANCEL_EDIT_TODO_TEXT() {
    return { id: '', text: '' };
  },
});
