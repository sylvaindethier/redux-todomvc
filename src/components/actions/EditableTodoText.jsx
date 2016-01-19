import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesTodo } from '../../props/types';
import defaultProps, { defaultPropsEditableTodoText } from '../../props/defaults';


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
  const { todo: { text }, labelProps } = props;
  return (
    <label
      onDoubleClick={editTodoTextHandler(props)}
      {...defaultProps(labelProps, props)}
    >
      {text}
    </label>
  );
}

EditableTodoText.propTypes = {
  actions: PropTypesActions,
  todo: PropTypesTodo,

  labelProps: PropTypes.object,
};

EditableTodoText.defaultProps = defaultProps;
