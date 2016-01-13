import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { UpdateTodoText as defaultProps, defaultProps as defaults } from '../.defaultProps';
import TodoTextInput from '../TodoTextInput';


export default class UpdateTodoText extends Component {
  constructor(props, context) {
    super(props, context);
    this.saveText = this.saveText.bind(this);
  }

  saveText(text) {
    const { actions, todo } = this.props;
    const id = todo.id;

    if (text.length) {
      // update only if text has changed
      if (text !== todo.text) actions.updateTodoText(id, text);
    } else {
      // delete if text has been erased
      actions.deleteTodo(id);
    }
    actions.editTodo(false);
  }

  render() {
    const { todo, TodoTextInput: todoTextInput } = this.props;
    return (
      <TodoTextInput
        saveText={this.saveText}
        value={todo.text}
        {...defaults(todoTextInput)}
      />
    );
  }
}

UpdateTodoText.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  handleUpdateEnd: PropTypes.func,
  TodoTextInput: PropTypes.object,
};

UpdateTodoText.defaultProps = defaultProps;
