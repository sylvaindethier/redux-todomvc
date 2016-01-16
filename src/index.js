import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// containers and store
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { store as db } from './utils';
import { initialState as initialDemo } from './fixtures';


const initialState = db() || initialDemo;
const store = configureStore(initialState);
db(initialState); // persist initialState first
render(
  <Root store={store} />,
  document.getElementById('root')
);
