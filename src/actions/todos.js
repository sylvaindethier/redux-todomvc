// FSA compliant, see https://github.com/acdlite/flux-standard-action
import { createAction } from 'redux-actions';
import {
  CREATE_TEXT,
  EDIT_TODO,
  UPDATE_TODO_TEXT,
  DELETE_TODO,
  DELETE_ALL,
  DELETE_ALL_DONE,
  TOGGLE_TODO_DONE,
  TOGGLE_ALL_DONE,
} from '../constants/actions';

// createText payload: text
export const createText = createAction(CREATE_TEXT, text => text);

// editTodo payload: id
export const editTodo = createAction(EDIT_TODO, id => id);

// updateTodo payload: { id, text }
export const updateTodoText = createAction(UPDATE_TODO_TEXT, (id, text) => ({ id, text }));

// deleteTodo payload: id
export const deleteTodo = createAction(DELETE_TODO, id => id);

// deleteAll payload: undefined (none)
export const deleteAll = createAction(DELETE_ALL, () => undefined);

// deleteAllDone payload: undefined (none)
export const deleteAllDone = createAction(DELETE_ALL_DONE, () => undefined);

// toggleTodoDone payload: id
export const toggleTodoDone = createAction(TOGGLE_TODO_DONE, id => id);

// toggleAllDone payload: undefined (none)
export const toggleAllDone = createAction(TOGGLE_ALL_DONE, () => undefined);
