import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import saver from '../middleware/saver';


const middleware = [
  saver,
];
const creators = [
  applyMiddleware(...middleware),
];

const finalCreateStore = compose(...creators)(createStore);
export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
