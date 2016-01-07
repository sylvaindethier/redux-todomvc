import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// containers and store
import App from './containers/App';
import configureStore from './store/configureStore';

// initial todos
const todos = [
  {
    text: 'initial: Use Redux',
    completed: true,
    id: 0,
  },
  {
    text: 'initial: Learn to connect it to React',
    completed: false,
    id: 1,
  },
];


const initialState = { todos };
const store = configureStore(initialState);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
