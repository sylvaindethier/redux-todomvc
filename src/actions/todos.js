// FSA compliant, see https://github.com/acdlite/flux-standard-action
import { createAction } from 'redux-actions';
import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_COMPLETED,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
} from '../constants/ActionTypes';

// addTodo payload: text
export const addTodo = createAction(ADD_TODO, text => text);

// deleteTodo payload: id
export const deleteTodo = createAction(DELETE_TODO, id => id);

// deleteCompleted payload: undefined (none)
export const deleteCompleted = createAction(DELETE_COMPLETED, () => undefined);

// editTodo payload: { id, text }
export const editTodo = createAction(EDIT_TODO, (id, text) => ({ id, text }));

// completeTodo payload: id
export const completeTodo = createAction(COMPLETE_TODO, id => id);

// completeAll payload: undefined (none)
export const completeAll = createAction(COMPLETE_ALL, () => undefined);

export default {
  addTodo,
  deleteTodo,
  deleteCompleted,
  editTodo,
  completeTodo,
  completeAll,
};
