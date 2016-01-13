import React, { Component, PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  todo as todoPropTypes,
  editing as editingPropTypes,
} from './.propTypes';
import { Todo as defaultProps, defaultProps as defaults } from './.defaultProps';
import UpdateTodoText from './actions/UpdateTodoText';
import EditTodo from './actions/EditTodo';
import ToggleTodoDone from './actions/ToggleTodoDone';
import DeleteTodo from './actions/DeleteTodo';


export default class Todo extends Component {
  render() {
    const { actions, todo, editing } = this.props;

    const {
      UpdateTodoText: updateTodoText,
    } = this.props;
    if (editing) {
      return (
        <UpdateTodoText
          actions={actions}
          todo={todo}
          {...defaults(updateTodoText)}
        />
      );
    }

    const { div } = this.props;
    const {
      ToggleTodoDone: toggleTodoDone,
      DeleteTodo: deleteTodo,
      EditTodo: editTodo,
    } = div.children;
    return (
      <div {...defaults(div)}>
        <ToggleTodoDone
          actions={actions}
          todo={todo}
          {...defaults(toggleTodoDone)}
        />
        <EditTodo
          actions={actions}
          todo={todo}
          {...defaults(editTodo)}
        />
        <DeleteTodo
          actions={actions}
          todo={todo}
          {...defaults(deleteTodo)}
        />
      </div>
    );
  }
}

Todo.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,
  editing: editingPropTypes,

  UpdateTodoText: PropTypes.object,
  div: PropTypes.shape({ children: PropTypes.shape({
    ToggleTodoDone: PropTypes.object,
    label: PropTypes.object,
    DeleteTodo: PropTypes.object,
  }) }),
};

Todo.defaultProps = defaultProps;
