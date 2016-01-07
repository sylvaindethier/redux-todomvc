import initialize from './initialize';

export default function initializeHot(initialState) {
  const store = initialize(initialState);
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers');
    store.replaceReducer(nextReducer);
  });

  return store;
}
