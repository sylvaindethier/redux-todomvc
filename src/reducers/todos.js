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
  CREATE_TODO(state, action) {
    const text = action.payload;
    return [
      // prepend new todo item
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text,
      },
      ...state,
    ];
  },

  UPDATE_TODO(state, action) {
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
    return state.filter(todo => todo.completed === false);
  },

  TOGGLEDONE_TODO(state, action) {
    const id = action.payload;
    // state w/ toggled completed todo item
    return state.map(todo =>
      todo.id === id ?
        Object.assign({}, todo, { completed: !todo.completed }) :
        todo
    );
  },

  TOGGLEDONE_ALL(state) {
    const areAllCompleted = state.every(todo => todo.completed);
    // state w/ modified completed todos
    return state.map(todo => Object.assign({}, todo, {
      completed: !areAllCompleted,
    }));
  },
});
