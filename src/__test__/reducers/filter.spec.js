import expect from 'expect';
import * as types from '../../constants/actions';
import { NONE, DONE } from '../../constants/filters';
import reducer from '../../reducers/filter';


const initialState = NONE;
const defaultState = DONE;

describe('filter reducer', () => {
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

  // FILTER
  it('should handle FILTER', () => {
    const action = {
      type: types.FILTER,
      payload: defaultState,
    };
    expect(reducer(initialState, action)).toEqual(defaultState);
  });
});
