import React, { PropTypes } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { UpdateTodoText as defaultProps, defaultProps as defaults } from '../.defaultProps';
import TodoTextInput from '../TodoTextInput';


function saveTextHandler(props) {
  return function saveText(text) {
    const { actions, todo } = props;
    const id = todo.id;

    if (!text.length) {
      // delete if text has been erased
      actions.deleteTodo(id);
    } else if (text !== todo.text) {
      // update only if text has changed
      actions.updateTodoText(id, text);
    }
    actions.editTodo(false);
  };
}

function cancelHandler(props) {
  return function cancel() {
    const { actions } = props;
    actions.editTodo(false);
  };
}

export default function UpdateTodoText(props) {
  const { todo, TodoTextInput: todoTextInput } = props;
  return (
    <TodoTextInput
      saveText={saveTextHandler(props)}
      cancel={cancelHandler(props)}
      value={todo.text}
      {...defaults(todoTextInput)}
    />
  );
}

UpdateTodoText.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  TodoTextInput: PropTypes.object,
};

UpdateTodoText.defaultProps = defaultProps;
