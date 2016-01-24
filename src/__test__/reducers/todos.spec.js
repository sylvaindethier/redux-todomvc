import expect from 'expect';
import * as types from '../../constants/actions';
import reducer from '../../reducers/todos';
import * as model from '../../model';


const initialState = [];
const defaultState = [
  Object.assign(model.create('todo-1'), { done: true }),
  model.create('todo-2'),
  model.create('todo-3'),
];

describe('todos reducer', () => {
  // initialize state
  it('should return the initial state', () => {
    const action = {}; // no action
    expect(reducer(undefined, action)).toEqual(initialState);
  });

  // unknown action type
  it('should return the same state', () => {
    const action = {};
    expect(reducer(defaultState, action)).toEqual(defaultState);
  });

  // CREATE_TEXT
  it('should handle CREATE_TEXT', () => {
    const text = 'CREATE_TEXT todos reducer test';
    const done = false;
    const action = {
      type: types.CREATE_TEXT,
      payload: { text },
    };
    // todo.id is generated so we have to extract it
    let state = reducer(initialState, action);
    expect(state).toEqual([{ id: state[0].id, text, done }]);

    state = reducer(defaultState, action);
    expect(state).toEqual([{ id: state[0].id, text, done }, ...defaultState]);
  });

  // UPDATE_TODO_TEXT
  it('should handle UPDATE_TODO_TEXT', () => {
    // update the second todo
    const { id, done } = defaultState[1];
    const text = 'UPDATE_TODO_TEXT todos reducer test';
    const action = {
      type: types.UPDATE_TODO_TEXT,
      payload: { id, text },
    };
    expect(reducer(defaultState, action)).toEqual([
      defaultState[0],
      { id, text, done },
      defaultState[2],
    ]);
  });

  // DELETE_TODO
  it('should handle DELETE_TODO', () => {
    // delete the second todo
    const { id } = defaultState[1];
    const action = {
      type: types.DELETE_TODO,
      payload: { id },
    };
    expect(reducer(defaultState, action)).toEqual([
      defaultState[0],
      defaultState[2],
    ]);
  });

  // DELETE_ALL
  it('should handle DELETE_ALL', () => {
    const action = {
      type: types.DELETE_ALL,
    };
    expect(reducer(defaultState, action)).toEqual([]);
  });

  // DELETE_ALL_DONE
  it('should handle DELETE_ALL_DONE', () => {
    const action = {
      type: types.DELETE_ALL_DONE,
    };
    expect(reducer(defaultState, action)).toEqual([
      defaultState[1],
      defaultState[2],
    ]);
  });

  // TOGGLE_TODO_DONE
  it('should handle TOGGLE_TODO_DONE', () => {
    // toggle the second todo
    const { id, text, done } = defaultState[1];
    const action = {
      type: types.TOGGLE_TODO_DONE,
      payload: { id },
    };
    expect(reducer(defaultState, action)).toEqual([
      defaultState[0],
      { id, text, done: !done },
      defaultState[2],
    ]);
  });

  // TOGGLE_ALL_DONE
  it('should handle TOGGLE_ALL_DONE', () => {
    const done = true;
    const action = {
      type: types.TOGGLE_ALL_DONE,
    };
    expect(reducer(defaultState, action)).toEqual([
      defaultState[0],
      Object.assign({}, defaultState[1], { done }),
      Object.assign({}, defaultState[2], { done }),
    ]);
  });
});
