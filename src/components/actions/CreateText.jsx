import React, { PropTypes } from 'react';
import { actions as actionsPropTypes, editing as editingPropTypes } from '../.propTypes';
import { CreateText as defaultProps, defaultProps as defaults } from '../.defaultProps';
import EditTodoText from './EditTodoText';


// function createTextAction({ props, text }) {
//   const { actions } = props;
//   if (text && text.length) {
//     actions.createText({ text });
//   }
// }
function createTextHandler(props) {
  return function createText({ text }) {
    // createTextAction({ props, text });
    const { actions } = props;
    if (text && text.length) {
      actions.createText({ text });
    }
  };
}

export default function CreateText(props) {
  const {
    actions,
    editing,
    EditTodoText: editTodoText,
  } = props;
  return (
    <EditTodoText
      actions={actions}
      editing={editing}
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
