// FSA compliant, see https://github.com/acdlite/flux-standard-action
import { createAction } from 'redux-actions';
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  DELETE_ALL,
  DELETE_ALL_DONE,
  TOGGLEDONE_TODO,
  TOGGLEDONE_ALL,
} from '../constants/actions';

// createTodo payload: text
export const createTodo = createAction(CREATE_TODO, text => text);

// updateTodo payload: { id, text }
export const updateTodo = createAction(UPDATE_TODO, (id, text) => ({ id, text }));

// deleteTodo payload: id
export const deleteTodo = createAction(DELETE_TODO, id => id);

// deleteAll payload: undefined (none)
export const deleteAll = createAction(DELETE_ALL, id => id);

// deleteAllDone payload: undefined (none)
export const deleteAllDone = createAction(DELETE_ALL_DONE, () => undefined);

// toggleDoneTodo payload: id
export const toggleDoneTodo = createAction(TOGGLEDONE_TODO, id => id);

// toggleDoneAll payload: undefined (none)
export const toggleDoneAll = createAction(TOGGLEDONE_ALL, () => undefined);
