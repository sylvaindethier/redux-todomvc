import expect from 'expect';
import * as types from '../../constants/actions';
import * as actions from '../../actions/editing';
import { uuid } from '../../utils';


describe('editing actions', () => {
  // EDIT_TODO_TEXT
  it('editTodoText should create EDIT_TODO_TEXT action', () => {
    const payload = {
      id: uuid(),
      text: 'editTodoText action test',
    };
    expect(actions.editTodoText(payload)).toEqual({
      type: types.EDIT_TODO_TEXT,
      payload,
    });
  });

  // CANCEL_EDIT_TODO_TEXT
  it('cancelEditTodoText should create CANCEL_EDIT_TODO_TEXT action', () => {
    expect(actions.cancelEditTodoText()).toEqual({
      type: types.CANCEL_EDIT_TODO_TEXT,
      payload: undefined,
    });
  });
});
