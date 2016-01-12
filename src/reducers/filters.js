// initialize w/ NONE filters
import { NONE } from '../constants/filters';
const initialState = [NONE];

function createReducer(handlers) {
  return function filters(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    // do nothing by default
    return state;
  };
}

export default createReducer({
  FILTER(state, action) {
    const filter = action.payload;
    return filter;
  },
});
