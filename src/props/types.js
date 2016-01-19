import { PropTypes } from 'react';
import { filters } from '../constants/filters';


export const PropTypesActions = PropTypes.objectOf(
  PropTypes.func.isRequired
).isRequired;

export const PropTypesTodo = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
}).isRequired;

export const PropTypesTodos = PropTypes.arrayOf(
  PropTypesTodo
).isRequired;

export const PropTypesFilter = PropTypes.oneOf(
  filters
).isRequired;

export const PropTypesEditing = PropTypes.shape({
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}).isRequired;

export const PropTypesApp = {
  PropTypesActions,
  PropTypesTodos,
  PropTypesFilter,
  PropTypesEditing,
};
