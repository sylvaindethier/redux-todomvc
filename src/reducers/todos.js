// initialize w/ empty collection (array)
const initialState = [];

function createReducer(handlers) {
  return function todos(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    // do nothing by default
    return state;
  };
}


export default createReducer({
  CREATE_TEXT(state, action) {
    const text = action.payload;
    return [
      // prepend new todo item
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        done: false,
        text,
      },
      ...state,
    ];
  },

  UPDATE_TODO_TEXT(state, action) {
    const { id, text } = action.payload;
    // state w/ modified text todo item
    return state.map(todo =>
      todo.id === id ?
        Object.assign({}, todo, { text }) :
        todo
    );
  },

  DELETE_TODO(state, action) {
    const id = action.payload;
    // state minus todo item
    return state.filter(todo => todo.id !== id);
  },

  DELETE_ALL() {
    // empty collection
    return [];
  },

  DELETE_ALL_DONE(state) {
    // state minus completed todos
    return state.filter(todo => todo.done === false);
  },

  TOGGLE_TODO_DONE(state, action) {
    const id = action.payload;
    // state w/ toggled completed todo item
    return state.map(todo =>
      todo.id === id ?
        Object.assign({}, todo, { done: !todo.done }) :
        todo
    );
  },

  TOGGLE_ALL_DONE(state) {
    const areAllDone = state.every(todo => todo.done);
    // state w/ modified completed todos
    return state.map(todo => Object.assign({}, todo, {
      done: !areAllDone,
    }));
  },
});
