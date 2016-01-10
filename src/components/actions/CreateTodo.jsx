import React, { PropTypes, Component } from 'react';
import TodoTextInputComponent from '../TodoTextInput';
import { CreateTodo as defaultProps } from '../defaultProps';

export default class CreateTodo extends Component {
  constructor(props, context) {
    super(props, context);

    // bind methods as there's no auto binding in Component class
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(text) {
    if (text && text.length !== 0) {
      this.props.createTodoAction(text);
    }
  }

  render() {
    const { TodoTextInput } = this.props;
    return (
      <TodoTextInputComponent save={this.createTodo} {...TodoTextInput} />
    );
  }
}

CreateTodo.propTypes = {
  createTodoAction: PropTypes.func.isRequired,
  TodoTextInput: PropTypes.object,
};

CreateTodo.defaultProps = defaultProps;
