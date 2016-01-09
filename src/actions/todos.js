// FSA compliant, see https://github.com/acdlite/flux-standard-action
import { createAction } from 'redux-actions';
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  DELETE_COMPLETED,
  COMPLETE_TODO,
  COMPLETE_ALL,
} from '../constants/actions';

// createTodo payload: text
export const createTodo = createAction(CREATE_TODO, text => text);

// updateTodo payload: { id, text }
export const updateTodo = createAction(UPDATE_TODO, (id, text) => ({ id, text }));

// deleteTodo payload: id
export const deleteTodo = createAction(DELETE_TODO, id => id);

// deleteCompleted payload: undefined (none)
export const deleteCompleted = createAction(DELETE_COMPLETED, () => undefined);

// completeTodo payload: id
export const completeTodo = createAction(COMPLETE_TODO, id => id);

// completeAll payload: undefined (none)
export const completeAll = createAction(COMPLETE_ALL, () => undefined);
