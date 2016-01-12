import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import editing from './editing';


const rootReducer = combineReducers({
  todos,
  filter,
  editing,
});

export default rootReducer;
