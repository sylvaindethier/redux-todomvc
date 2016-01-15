import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// containers and store
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { store as db } from './utils';


const initialState = db() || {};
const store = configureStore(initialState);
render(
  <Root store={store} />,
  document.getElementById('root')
);
