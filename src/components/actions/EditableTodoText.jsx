import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  todo as todoPropTypes,
} from '../../props/types';
import defaults, { EditableTodoText as defaultProps } from '../../props/defaults';


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


/**
 * EditableTodoText component
 */
export default function EditableTodoText(props) {
  const { todo: { text }, label } = props;
  return (
    <label
      onDoubleClick={editTodoTextHandler(props)}
      {...defaults(label, props)}
    >
      {text}
    </label>
  );
}

EditableTodoText.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  label: PropTypes.object,
};

EditableTodoText.defaultProps = defaultProps;
