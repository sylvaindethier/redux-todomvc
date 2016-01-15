import * as todos from './todos';
import * as filter from './filter';
import * as editing from './editing';

export default Object.assign(...[{},
  todos,
  filter,
  editing,
]);
