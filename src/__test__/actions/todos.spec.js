import expect from 'expect';
import * as types from '../../constants/actions';
import * as actions from '../../actions/todos';
import { uuid } from '../../utils';


describe('todos actions', () => {
  // CREATE_TEXT
  it('createText should create CREATE_TEXT action', () => {
    const payload = { text: 'createText action test' };
    expect(actions.createText(payload)).toEqual({
      type: types.CREATE_TEXT,
      payload,
    });
  });

  // UPDATE_TODO_TEXT
  it('updateTodoText should create UPDATE_TODO_TEXT action', () => {
    const payload = {
      id: uuid(),
      text: 'updateTodoText action test',
    };
    expect(actions.updateTodoText(payload)).toEqual({
      type: types.UPDATE_TODO_TEXT,
      payload,
    });
  });

  // DELETE_TODO
  it('deleteTodo should create DELETE_TODO action', () => {
    const payload = { id: uuid() };
    expect(actions.deleteTodo(payload)).toEqual({
      type: types.DELETE_TODO,
      payload,
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
    const payload = { id: uuid() };
    expect(actions.toggleTodoDone(payload)).toEqual({
      type: types.TOGGLE_TODO_DONE,
      payload,
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
