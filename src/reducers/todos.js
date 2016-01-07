const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
];

function createReducer(initial, handlers) {
  return function todosReducer(state = initial, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    // do nothing by default
    return state;
  };
}

const assign = Object.assign;
export default createReducer(initialState, {
  ADD_TODO(state, action) {
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

  DELETE_TODO(state, action) {
    const id = action.payload;
    // state minus todo item
    return state.filter(todo => todo.id !== id);
  },

  DELETE_COMPLETED(state) {
    // state minus completed todos
    return state.filter(todo => todo.completed === false);
  },

  EDIT_TODO(state, action) {
    const { id, text } = action.payload;
    // state w/ modified text todo item
    return state.map(todo =>
      todo.id === id ?
        assign({}, todo, { text }) :
        todo
    );
  },

  COMPLETE_TODO(state, action) {
    const id = action.payload;
    // state w/ toggled completed todo item
    return state.map(todo =>
      todo.id === id ?
        assign({}, todo, { completed: !todo.completed }) :
        todo
    );
  },

  COMPLETE_ALL(state) {
    const areAllCompleted = state.every(todo => todo.completed);
    // state w/ modified completed todos
    return state.map(todo => assign({}, todo, {
      completed: !!areAllCompleted,
    }));
  },

});
