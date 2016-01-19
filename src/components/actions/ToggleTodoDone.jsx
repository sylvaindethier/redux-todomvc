import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  todo as todoPropTypes,
} from '../../props/types';
import defaults, { ToggleTodoDone as defaultProps } from '../../props/defaults';


// function toggleTodoDoneAction(props) {
//   const { actions, todo } = props;
//   actions.toggleTodoDone(todo.id);
// }
function toggleTodoDoneHandler(props) {
  return function handleChange(/* e */) {
    // toggleTodoDoneAction(props);
    const { actions, todo } = props;
    actions.toggleTodoDone(todo);
  };
}


/**
 * ToggleTodoDone component
 */
export default function ToggleTodoDone(props) {
  const { todo: { done }, input } = props;
  return (
    <input
      onChange={toggleTodoDoneHandler(props)}
      type="checkbox"
      checked={done}
      {...defaults(input)}
    />
  );
}

ToggleTodoDone.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  input: PropTypes.object,
};

ToggleTodoDone.defaultProps = defaultProps;
