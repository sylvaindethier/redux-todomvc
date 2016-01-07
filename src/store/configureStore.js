import { createStore } from 'redux';
import rootReducer from '../reducers';

export function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}

export function configureStoreHMR(initialState) {
  const store = createStore(rootReducer, initialState);
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers');
    store.replaceReducer(nextReducer);
  });

  return store;
}

export default module.hot ? configureStoreHMR : configureStore;
