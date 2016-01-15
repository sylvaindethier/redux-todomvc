import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  editing as editingPropTypes,
  todo as todoPropTypes,
} from '../.propTypes';
import { UpdateTodoText as defaultProps, defaultProps as defaults } from '../.defaultProps';
import EditTodoText from './EditTodoText';


// function saveTextAction(props, { text }) {
//   const { actions, editing, todo } = props;
//   const { id } = editing;
//
//   if (!text.length) {
//     // delete if text has been erased
//     actions.deleteTodo({ id });
//   } else if (text !== todo.text) {
//     // update only if text has changed
//     actions.updateTodoText({ id, text });
//   }
// }
function saveTextHandler(props) {
  return function saveText({ text }) {
    // saveTextAction(props, { text });
    const { actions, editing, todo } = props;
    const { id } = editing;

    if (!text.length) {
      // delete if text has been erased
      actions.deleteTodo({ id });
    } else if (text !== todo.text) {
      // update only if text has changed
      actions.updateTodoText({ id, text });
    }
  };
}


export default function UpdateTodoText(props) {
  const {
    actions,
    editing,
    EditTodoText: editTodoText,
  } = props;
  return (
    <EditTodoText
      actions={actions}
      editing={editing}
      saveText={saveTextHandler(props)}
      {...defaults(editTodoText)}
    />
  );
}

UpdateTodoText.propTypes = {
  actions: actionsPropTypes,
  editing: editingPropTypes,
  todo: todoPropTypes,

  EditTodoText: PropTypes.object,
};

UpdateTodoText.defaultProps = defaultProps;
