import React, { Component, PropTypes } from 'react';
import { Todo as defaultProps, defaultProps as defaults } from './defaultProps';
import UpdateTodoText from './actions/UpdateTodoText';
import ToggleTodoDone from './actions/ToggleTodoDone';
import DeleteTodo from './actions/DeleteTodo';


// TODO: remove state from this component
function buildState(editing) { return { editing }; }


export default class Todo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = buildState(false);

    // bind handlers as there's no auto binding in Component class
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditEnd = this.handleEditEnd.bind(this);
  }

  handleEdit(/* e */) {
    const { setTodoEdit, todo } = this.props;
    if (setTodoEdit) setTodoEdit(todo.id);
    this.setState(buildState(true));
  }

  handleEditEnd() {
    const { unsetTodoEdit } = this.props;
    if (unsetTodoEdit) unsetTodoEdit();
    this.setState(buildState(false));
  }

  render() {
    const { actions, todo } = this.props;

    const {
      UpdateTodoText: updateTodoText,
    } = this.props;
    if (this.state.editing) {
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
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,

  setTodoEdit: PropTypes.func,
  unsetTodoEdit: PropTypes.func,
  UpdateTodoText: PropTypes.object,
  div: PropTypes.shape({ children: PropTypes.shape({
    ToggleTodoDone: PropTypes.object,
    label: PropTypes.object,
    DeleteTodo: PropTypes.object,
  }) }),
};

Todo.defaultProps = defaultProps;
