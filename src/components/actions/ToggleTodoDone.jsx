import React, { PropTypes } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { ToggleTodoDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


// function toggleTodoDoneAction(props) {
//   const { actions, todo } = props;
//   actions.toggleTodoDone(todo.id);
// }
function toggleTodoDoneHandler(props) {
  return function handleChange(/* e */) {
    // toggleTodoDoneAction(props);
    const { actions, todo } = props;
    actions.toggleTodoDone(todo.id);
  };
}

export default function ToggleTodoDone(props) {
  const { todo, input } = props;
  return (
    <input
      onChange={toggleTodoDoneHandler(props)}
      type="checkbox"
      checked={todo.done}
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
