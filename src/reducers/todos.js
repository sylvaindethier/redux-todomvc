import { create, updateText, toggleDone, updateDone } from '../model';

// initialize w/ empty collection (array)
const initialState = [];

function createReducer(handlers) {
  return function todos(state = initialState, action) {
    // call handler if exists
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    // do nothing by default
    return state;
  };
}


export default createReducer({
  CREATE_TEXT(state, action) {
    const { text } = action.payload;
    // prepend new todo to state
    return [create(text), ...state];
  },

  UPDATE_TODO_TEXT(state, action) {
    const { id, text } = action.payload;
    // state w/ modified text todo item
    return state.map(todo =>
      todo.id === id ? updateText(todo, text) : todo
    );
  },

  DELETE_TODO(state, action) {
    const { id } = action.payload;
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
    const { id } = action.payload;
    // state w/ toggled completed todo item
    return state.map(todo =>
      todo.id === id ? toggleDone(todo) : todo
    );
  },

  TOGGLE_ALL_DONE(state) {
    const areAllDone = state.every(todo => todo.done);
    // state w/ modified completed todos
    return state.map(todo => updateDone(todo, !areAllDone));
  },
});
