import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesTodo } from '../../props/types';
import defaultProps, { defaultPropsToggleTodoDone } from '../../props/defaults';


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
  const { todo: { done }, inputProps } = props;
  return (
    <input
      onChange={toggleTodoDoneHandler(props)}
      type="checkbox"
      checked={done}
      {...defaultProps(inputProps)}
    />
  );
}

ToggleTodoDone.propTypes = {
  actions: PropTypesActions,
  todo: PropTypesTodo,

  inputProps: PropTypes.object,
};

ToggleTodoDone.defaultProps = defaultPropsToggleTodoDone;
