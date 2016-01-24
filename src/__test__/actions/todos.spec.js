import expect from 'expect';
import * as types from '../../constants/actions';
import * as actions from '../../actions/todos';
import { uuid } from '../../utils';


describe('todo actions', () => {
  // CREATE_TEXT
  it('createText should create CREATE_TEXT action', () => {
    const text = 'createText action test';
    expect(actions.createText({ text })).toEqual({
      type: types.CREATE_TEXT,
      payload: { text },
    });
  });

  // UPDATE_TODO_TEXT
  it('updateTodoText should create UPDATE_TODO_TEXT action', () => {
    const id = uuid();
    const text = 'updateTodoText action test';
    expect(actions.updateTodoText({ id, text })).toEqual({
      type: types.UPDATE_TODO_TEXT,
      payload: { id, text },
    });
  });

  // DELETE_TODO
  it('deleteTodo should create DELETE_TODO action', () => {
    const id = uuid();
    expect(actions.deleteTodo({ id })).toEqual({
      type: types.DELETE_TODO,
      payload: { id },
    });
  });

  // DELETE_ALL
  it('deleteAll should create DELETE_ALL action', () => {
    expect(actions.deleteAll()).toEqual({
      type: types.DELETE_ALL,
      payload: undefined,
    });
  });

  // DELETE_ALL_DONE
  it('deleteAllDone should create DELETE_ALL_DONE action', () => {
    expect(actions.deleteAllDone()).toEqual({
      type: types.DELETE_ALL_DONE,
      payload: undefined,
    });
  });

  // TOGGLE_TODO_DONE
  it('toggleTodoDone should create TOGGLE_TODO_DONE action', () => {
    const id = uuid();
    expect(actions.toggleTodoDone({ id })).toEqual({
      type: types.TOGGLE_TODO_DONE,
      payload: { id },
    });
  });

  // TOGGLE_ALL_DONE
  it('toggleAllDone should create TOGGLE_ALL_DONE action', () => {
    expect(actions.toggleAllDone()).toEqual({
      type: types.TOGGLE_ALL_DONE,
      payload: undefined,
    });
  });
});
