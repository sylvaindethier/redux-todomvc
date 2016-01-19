import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesEditing } from '../../props/types';
import defaultProps, { defaultPropsCreateText } from '../../props/defaults';
import EditTodoText from './EditTodoText';


// function createTextAction(props, { text }) {
//   const { actions } = props;
//   if (text && text.length) {
//     actions.createText({ text });
//   }
// }
function createTextHandler(props) {
  return function createText({ text }) {
    // createTextAction(props, { text });
    const { actions } = props;
    if (text && text.length) {
      actions.createText({ text });
    }
  };
}


/**
 * createText component
 */
export default function CreateText(props) {
  const {
    actions,
    editing: { id, text },
    EditTodoTextProps,
  } = props;
  const editingCreateText = {
    id: '', // editing.id is always empty for new todo
    text: id ? '' : text, // do not pass text if not editing
  };
  return (
    <EditTodoText
      actions={actions}
      editing={editingCreateText}
      saveText={createTextHandler(props)}
      isNew
      {...defaultProps(EditTodoTextProps)}
    />
  );
}

CreateText.propTypes = {
  actions: PropTypesActions,
  editing: PropTypesEditing,

  EditTodoTextProps: PropTypes.object,
};

CreateText.defaultProps = defaultPropsCreateText;
CreateText.displayName = 'CreateText';
