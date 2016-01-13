import React, { PropTypes } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { DeleteTodo as defaultProps, defaultProps as defaults } from '../.defaultProps';


function deleteTodoHandler(props) {
  return function handleDeleteTodo(/* e */) {
    const { actions, todo } = props;
    actions.deleteTodo(todo.id);
  };
}

export default function DeleteTodo(props) {
  const { button } = props;
  return (
    <button
      onClick={deleteTodoHandler(props)}
      {...defaults(button)}
    />
  );
}

DeleteTodo.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  button: PropTypes.object,
};

DeleteTodo.defaultProps = defaultProps;
