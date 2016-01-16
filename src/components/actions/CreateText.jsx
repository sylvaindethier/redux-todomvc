import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  editing as editingPropTypes,
} from '../../props/types';
import defaults, { CreateText as defaultProps } from '../../props/defaults';
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
    editing,
    EditTodoText: editTodoText,
  } = props;
  const editingCreateText = {
    id: '', // editing.id is always empty for new todo
    text: editing.id ? '' : editing.text, // do not pass text if not editing
  };
  return (
    <EditTodoText
      actions={actions}
      editing={editingCreateText}
      saveText={createTextHandler(props)}
      isNew
      {...defaults(editTodoText)}
    />
  );
}

CreateText.propTypes = {
  actions: actionsPropTypes,
  editing: editingPropTypes,

  EditTodoText: PropTypes.object,
};

CreateText.defaultProps = defaultProps;
