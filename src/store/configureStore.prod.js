import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function initialize(initialState) {
  return createStore(rootReducer, initialState);
}
