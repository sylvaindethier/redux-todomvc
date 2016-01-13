import React, { Component, PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  todo as todoPropTypes,
  editing as editingPropTypes,
} from './.propTypes';
import { Todo as defaultProps, defaultProps as defaults } from './.defaultProps';
import UpdateTodoText from './actions/UpdateTodoText';
import ToggleTodoDone from './actions/ToggleTodoDone';
import DeleteTodo from './actions/DeleteTodo';


export default class Todo extends Component {
  constructor(props, context) {
    super(props, context);

    // bind handlers as there's no auto binding in Component class
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditEnd = this.handleEditEnd.bind(this);
  }

  handleEdit(/* e */) {
    const { actions, todo } = this.props;
    actions.editTodo(todo.id);
  }

  handleEditEnd() {
    const { actions } = this.props;
    actions.editTodo(false);
  }

  render() {
    const { actions, todo, editing } = this.props;

    const {
      UpdateTodoText: updateTodoText,
    } = this.props;
    if (editing) {
      return (
        <UpdateTodoText
          todo={todo}
          updateTodoTextAction={actions.updateTodoText}
          deleteTodoAction={actions.deleteTodo}
          handleUpdateEnd={this.handleEditEnd}
          {...defaults(updateTodoText)}
        />
      );
    }

    const { div } = this.props;
    const {
      ToggleTodoDone: toggleTodoDone,
      label,
      DeleteTodo: deleteTodo,
    } = div.children;
    return (
      <div {...defaults(div)}>
        <ToggleTodoDone
          todo={todo}
          toggleTodoDoneAction={actions.toggleTodoDone}
          {...defaults(toggleTodoDone)}
        />
        <label onDoubleClick={this.handleEdit} {...defaults(label)}>
          {todo.text}
        </label>
        <DeleteTodo
          todo={todo}
          deleteTodoAction={actions.deleteTodo}
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
