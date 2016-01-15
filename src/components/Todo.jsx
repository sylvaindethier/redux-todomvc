import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  todo as todoPropTypes,
  editing as editingPropTypes,
} from '../props/types';
import defaults, { Todo as defaultProps } from '../props/defaults';
import UpdateTodoText from './actions/UpdateTodoText';
import EditableTodoText from './actions/EditableTodoText';
import ToggleTodoDone from './actions/ToggleTodoDone';
import DeleteTodo from './actions/DeleteTodo';


export default function Todo(props) {
  const { actions, todo, editing } = props;

  const {
    UpdateTodoText: updateTodoText,
  } = props;
  if (editing.id === todo.id) {
    return (
      <UpdateTodoText
        actions={actions}
        editing={editing}
        todo={todo}
        {...defaults(updateTodoText)}
      />
    );
  }

  const { div } = props;
  const {
    ToggleTodoDone: toggleTodoDone,
    DeleteTodo: deleteTodo,
    EditableTodoText: editableTodoText,
  } = div.children;
  return (
    <div {...defaults(div)}>
      <ToggleTodoDone
        actions={actions}
        todo={todo}
        {...defaults(toggleTodoDone)}
      />
      <EditableTodoText
        actions={actions}
        todo={todo}
        {...defaults(editableTodoText)}
      />
      <DeleteTodo
        actions={actions}
        todo={todo}
        {...defaults(deleteTodo)}
      />
    </div>
  );
}

Todo.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,
  editing: editingPropTypes,

  UpdateTodoText: PropTypes.object,
  div: PropTypes.shape({ children: PropTypes.shape({
    ToggleTodoDone: PropTypes.object,
    EditableTodoText: PropTypes.object,
    DeleteTodo: PropTypes.object,
  }) }),
};

Todo.defaultProps = defaultProps;
