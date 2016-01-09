import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

const conf = {
  header: { className: 'header' },
  h1_text: 'todos',
  TodoTextInput: { placeholder: 'What needs to be done' },
};

export default class Header extends Component {
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
    return (
      <header {...conf.header}>
          <h1 {...conf.h1}>{conf.h1_text}</h1>
          <TodoTextInput
            isNew
            save={this.createTodo}
            {...conf.TodoTextInput}
          />
      </header>
    );
  }
}

Header.propTypes = {
  createTodoAction: PropTypes.func.isRequired,
};
