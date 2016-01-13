import React, { PropTypes } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { EditTodo as defaultProps, defaultProps as defaults } from '../.defaultProps';


function editTodoHandler(props) {
  return function handleEditTodo(/* e */) {
    const { actions, todo } = props;
    actions.editTodo(todo.id);
  };
}

export default function EditTodo(props) {
  const { label } = props;
  return (
    <label
      onDoubleClick={editTodoHandler(props)}
      {...defaults(label, props)}
    />
  );
}

EditTodo.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  label: PropTypes.object,
};

EditTodo.defaultProps = defaultProps;
