import React, { PropTypes } from 'react';
import { PropTypesAction, PropTypesEditing, PropTypesTodo } from '../../props/types';
import defaultProps, { defaultPropsUpdateTodoText } from '../../props/defaults';
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
    const { actions, editing: { id }, todo } = props;

    if (!text.length) {
      // delete if text has been erased
      actions.deleteTodo({ id });
    } else if (text !== todo.text) {
      // update only if text has changed
      actions.updateTodoText({ id, text });
    }
  };
}


/**
 * UpdateTodoText component
 */
export default function UpdateTodoText(props) {
  const {
    actions,
    editing,
    EditTodoTextProps,
  } = props;
  return (
    <EditTodoText
      actions={actions}
      editing={editing}
      saveText={saveTextHandler(props)}
      {...defaultProps(EditTodoTextProps)}
    />
  );
}

UpdateTodoText.propTypes = {
  actions: PropTypesAction,
  editing: PropTypesEditing,
  todo: PropTypesTodo,

  EditTodoTextProps: PropTypes.object,
};

UpdateTodoText.defaultProps = defaultPropsUpdateTodoText;
