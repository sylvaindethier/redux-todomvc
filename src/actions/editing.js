// FSA compliant, see https://github.com/acdlite/flux-standard-action
import { createAction } from 'redux-actions';
import {
  EDIT_TODO_TEXT,
  CANCEL_EDIT_TODO_TEXT,
} from '../constants/actions';

// editTodoText payload: { id, text }
export const editTodoText = createAction(EDIT_TODO_TEXT, ({ id, text }) => ({ id, text }));

// cancelEditTodoText payload: undefined (none)
export const cancelEditTodoText = createAction(CANCEL_EDIT_TODO_TEXT, () => undefined);
