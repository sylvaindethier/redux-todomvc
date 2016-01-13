import React, { Component, PropTypes } from 'react';
import { DeleteTodo as defaultProps, defaultProps as defaults } from '../.defaultProps';
import { todo as todoPropTypes } from '../.propTypes';


export default class DeleteTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleDeleteTodo(/* e */) {
    const { deleteTodoAction, todo } = this.props;
    deleteTodoAction(todo.id);
  }

  render() {
    const { button } = this.props;
    return (
      <button
        onClick={this.handleDeleteTodo}
        {...defaults(button)}
      />
    );
  }
}

DeleteTodo.propTypes = {
  deleteTodoAction: PropTypes.func.isRequired,
  todo: todoPropTypes,

  button: PropTypes.object,
};

DeleteTodo.defaultProps = defaultProps;
