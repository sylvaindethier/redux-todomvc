import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesTodo } from '../../props/types';
import defaultProps, { defaultPropsDeleteTodo } from '../../props/defaults';


// function deleteTodoAction(props) {
//   const { actions, todo } = props;
//   actions.deleteTodo(todo);
// }
function deleteTodoHandler(props) {
  return function handleClick(/* e */) {
    // deleteTodoAction(props);
    const { actions, todo } = props;
    actions.deleteTodo(todo);
  };
}


/**
 * DeleteTodo component
 */
export default function DeleteTodo(props) {
  const { buttonProps } = props;
  return (
    <button
      onClick={deleteTodoHandler(props)}
      {...defaultProps(buttonProps)}
    />
  );
}

DeleteTodo.propTypes = {
  actions: PropTypesActions,
  todo: PropTypesTodo,

  buttonProps: PropTypes.object,
};

DeleteTodo.defaultProps = defaultPropsDeleteTodo;
