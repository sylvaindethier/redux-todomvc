import expect from 'expect';
import * as types from '../../constants/actions';
import reducer from '../../reducers/editing';
import { uuid } from '../../utils';


const initialState = { id: '', text: '' };
const defaultState = { id: uuid(), text: 'editing reducer test' };

describe('editing reducer', () => {
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

  // EDIT_TODO_TEXT
  it('should handle EDIT_TODO_TEXT', () => {
    const action = {
      type: types.EDIT_TODO_TEXT,
      payload: defaultState,
    };
    expect(reducer(initialState, action)).toEqual(defaultState);
  });

  // CANCEL_EDIT_TODO_TEXT
  it('should handle CANCEL_EDIT_TODO_TEXT', () => {
    const action = {
      type: types.CANCEL_EDIT_TODO_TEXT,
    };
    expect(reducer(defaultState, action)).toEqual(initialState);
  });
});
