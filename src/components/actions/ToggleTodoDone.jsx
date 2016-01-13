import React, { PropTypes } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { ToggleTodoDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


function toggleAllDoneHandler(props) {
  return function handleToggleTodoDone(/* e */) {
    const { actions, todo } = props;
    actions.toggleTodoDone(todo.id);
  };
}

export default function ToggleTodoDone(props) {
  const { todo, input } = props;
  return (
    <input
      onChange={toggleAllDoneHandler(props)}
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
