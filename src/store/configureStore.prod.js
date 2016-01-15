import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import saver from '../middlewares/saver';


const middlewares = [
  saver,
];
const creators = [
  // Middleware you want to use in development:
  applyMiddleware(...middlewares),
];

const finalCreateStore = compose(...creators)(createStore);
export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
