import expect from 'expect';
import * as types from '../../constants/actions';
import * as filters from '../../constants/filters';
import * as actions from '../../actions/filter';


describe('filter actions', () => {
  // FILTER
  it('filter should create FILTER action', () => {
    const payload = filters.NONE;
    expect(actions.filter(payload)).toEqual({
      type: types.FILTER,
      payload,
    });
  });
});
