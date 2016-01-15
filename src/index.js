import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// containers and store
import Root from './containers/Root';
import configureStore from './store/configureStore';


// initial todos
const todos = [
  {
    text: 'Use Redux',
    done: true,
    id: '0',
  },
  {
    text: 'Learn to connect it to React',
    done: true,
    id: '1',
  },
  {
    text: 'Make that Todo app a real-world example',
    done: false,
    id: '2',
  },
  {
    text: 'Implement drag n\' drop on Todo items',
    done: false,
    id: '3',
  },
];
const filter = 'NONE';
const editing = { id: '', text: '' };

const initialState = { todos, filter, editing };
const store = configureStore(initialState);
render(
  <Root store={store} />,
  document.getElementById('root')
);
