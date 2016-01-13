import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { UpdateTodoText as defaultProps, defaultProps as defaults } from '../.defaultProps';
import TodoTextInput from '../TodoTextInput';


export default class UpdateTodoText extends Component {
  constructor(props, context) {
    super(props, context);
    this.saveText = this.saveText.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  saveText(text) {
    const { actions, todo } = this.props;
    const id = todo.id;

    if (!text.length) {
      // delete if text has been erased
      actions.deleteTodo(id);
    } else if (text !== todo.text) {
      // update only if text has changed
      actions.updateTodoText(id, text);
    }
    actions.editTodo(false);
  }

  cancel() {
    const { actions } = this.props;
    actions.editTodo(false);
  }

  render() {
    const { todo, TodoTextInput: todoTextInput } = this.props;
    return (
      <TodoTextInput
        saveText={this.saveText}
        cancel={this.cancel}
        value={todo.text}
        {...defaults(todoTextInput)}
      />
    );
  }
}

UpdateTodoText.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  TodoTextInput: PropTypes.object,
};

UpdateTodoText.defaultProps = defaultProps;
