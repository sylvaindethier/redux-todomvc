import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesTodo, PropTypesEditing } from '../props/types';
import defaultProps, { defaultPropsTodo } from '../props/defaults';
import UpdateTodoText from './actions/UpdateTodoText';
import EditableTodoText from './actions/EditableTodoText';
import ToggleTodoDone from './actions/ToggleTodoDone';
import DeleteTodo from './actions/DeleteTodo';


export default function Todo(props) {
  const { actions, todo, editing } = props;

  const { UpdateTodoTextProps } = props;
  if (editing.id === todo.id) {
    return (
      <UpdateTodoText
        actions={actions}
        editing={editing}
        todo={todo}
        {...defaultProps(UpdateTodoTextProps)}
      />
    );
  }

  const {
    divProps,
    divProps: { children: {
      ToggleTodoDoneProps,
      DeleteTodoProps,
      EditableTodoTextProps,
    } },
  } = props;
  return (
    <div {...defaultProps(divProps)}>
      <ToggleTodoDone
        actions={actions}
        todo={todo}
        {...defaultProps(ToggleTodoDoneProps)}
      />
      <EditableTodoText
        actions={actions}
        todo={todo}
        {...defaultProps(EditableTodoTextProps)}
      />
      <DeleteTodo
        actions={actions}
        todo={todo}
        {...defaultProps(DeleteTodoProps)}
      />
    </div>
  );
}

Todo.propTypes = {
  actions: PropTypesActions,
  todo: PropTypesTodo,
  editing: PropTypesEditing,

  UpdateTodoTextProps: PropTypes.object,
  divProps: PropTypes.shape({ children: PropTypes.shape({
    ToggleTodoDoneProps: PropTypes.object,
    EditableTodoTextProps: PropTypes.object,
    DeleteTodoProps: PropTypes.object,
  }) }),
};

Todo.defaultProps = defaultPropsTodo;
Todo.displayName = 'Todo';
