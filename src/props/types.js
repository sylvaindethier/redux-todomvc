import { PropTypes } from 'react';
import { filters } from '../constants/filters';


export const actions = PropTypes.objectOf(
  PropTypes.func.isRequired
).isRequired;

export const todo = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
}).isRequired;

export const todos = PropTypes.arrayOf(
  todo
).isRequired;

export const filter = PropTypes.oneOf(
  filters
).isRequired;

export const editing = PropTypes.shape({
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}).isRequired;

export const App = {
  actions,
  todos,
  filter,
  editing,
};
