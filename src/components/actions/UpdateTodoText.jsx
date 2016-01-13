import React, { PropTypes, Component } from 'react';
import { todo as todoPropTypes } from '../.propTypes';
import { UpdateTodoText as defaultProps, defaultProps as defaults } from '../.defaultProps';
import TodoTextInput from '../TodoTextInput';


export default class UpdateTodoText extends Component {
  constructor(props, context) {
    super(props, context);
    this.saveText = this.saveText.bind(this);
  }

  saveText(text) {
    const { todo,
      updateTodoTextAction,
      handleUpdateEnd,
      deleteTodoAction,
    } = this.props;
    const id = todo.id;

    if (text && text.length) {
      // update only if text has changed
      if (text !== todo.text) updateTodoTextAction(id, text);
      if (handleUpdateEnd) handleUpdateEnd();
    } else if (!text.length && deleteTodoAction) {
      deleteTodoAction(id);
      if (handleUpdateEnd) handleUpdateEnd();
    }
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
  todo: todoPropTypes,
  updateTodoTextAction: PropTypes.func.isRequired,

  handleUpdateEnd: PropTypes.func,
  deleteTodoAction: PropTypes.func,
  TodoTextInput: PropTypes.object,
};

UpdateTodoText.defaultProps = defaultProps;
