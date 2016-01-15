import React, { PropTypes } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { EditableTodoText as defaultProps, defaultProps as defaults } from '../.defaultProps';


// function editTodoTextAction(props) {
//   const { actions, todo } = props;
//   actions.editTodoText(todo);
// }
function editTodoTextHandler(props) {
  return function handleDoubleClick(/* e */) {
    // editTodoTextAction(props);
    const { actions, todo } = props;
    actions.editTodoText(todo);
  };
}

export default function EditableTodoText(props) {
  const { todo, label } = props;
  return (
    <label
      onDoubleClick={editTodoTextHandler(props)}
      {...defaults(label, props)}
    >
      {todo.text}
    </label>
  );
}

EditableTodoText.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  label: PropTypes.object,
};

EditableTodoText.defaultProps = defaultProps;
