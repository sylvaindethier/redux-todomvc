import React, { PropTypes, Component } from 'react';
import TodoTextInputComponent from './TodoTextInput';
import { Header as defaultProps } from './defaultProps';

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
    const { header, h1, TodoTextInput } = this.props;
    return (
      <header {...header}>
        <h1 {...h1} />
        <TodoTextInputComponent save={this.createTodo} {...TodoTextInput} />
      </header>
    );
  }
}

Header.propTypes = {
  createTodoAction: PropTypes.func.isRequired,
  header: PropTypes.object,
  h1: PropTypes.object,
  TodoTextInput: PropTypes.object,
};

Header.defaultProps = defaultProps;
