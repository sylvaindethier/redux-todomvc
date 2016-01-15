import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  editing as editingPropTypes,
} from '../../props/types';
import defaults, { EditTodoText as defaultProps } from '../../props/defaults';

const KEYCODE_ESC = 27;
const KEYCODE_ENTER = 13;


// function editTodoTextAction(props, { id, text }) {
//   const { actions } = props;
//   actions.editTodoText({ id, text });
// }

// function cancelEditTodoTextAction(props) {
//   // call cancelEditTodoText action
//   const { actions } = props;
//   actions.cancelEditTodoText();
// }

function saveTextProps(props, { e }) {
  const { actions } = props;
  const text = e.target.value.trim();
  props.saveText({ text });
  // cancelEditTodoTextAction(props);
  actions.cancelEditTodoText();
}

function blurHandler(props) {
  return function handleBlur(e) {
    // save on blur for non new Todo (already created)
    if (!props.isNew) saveTextProps(props, { e });
  };
}

function keydownHandler(props) {
  return function handleKeyDown(e) {
    const { actions } = props;
    const { which } = e;

    // save on ENTER
    if (which === KEYCODE_ENTER) saveTextProps(props, { e });
    // cancel on ESC
    if (which === KEYCODE_ESC) actions.cancelEditTodoText();
  };
}

function changeHandler(props) {
  return function handleChange(e) {
    const { actions } = props;
    const { id } = props.editing;
    const text = e.target.value;
    // editTodoTextAction(props, { id, text });
    actions.editTodoText({ id, text });
  };
}


export default function EditTodoText(props) {
  const { editing, input } = props;
  return (
    <input
      type="text"
      autoFocus="true"
      value={editing.text}
      onBlur={blurHandler(props)}
      onChange={changeHandler(props)}
      onKeyDown={keydownHandler(props)}
      {...defaults(input)}
    />
  );
}

EditTodoText.propTypes = {
  actions: actionsPropTypes,
  editing: editingPropTypes,
  saveText: PropTypes.func.isRequired,

  isNew: PropTypes.bool,
  input: PropTypes.object,
};

EditTodoText.defaultProps = defaultProps;
