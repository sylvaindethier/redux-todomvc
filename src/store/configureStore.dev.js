import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import logger from './middlewares/logger';


function devToolsExtension(enable) {
  const w = window;
  const name = 'devToolsExtension';
  return enable && typeof w === 'object' && typeof w[name] === 'function' ?
    w[name]() : f => f;
}

const middlewares = [
  logger,
];
const creators = [
  // Middleware you want to use in development:
  applyMiddleware(...middlewares),

  // Add browser DevTools extension if any
  devToolsExtension(true),
];

// const finalCreateStore = applyMiddleware(...middlewares)(createStore);
const finalCreateStore = compose(...creators)(createStore);
export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
