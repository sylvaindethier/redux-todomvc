import React, { Component, PropTypes } from 'react';
import { DeleteTodo as defaultProps, defaultProps as defaults } from '../defaultProps';


export default class DeleteTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(/* e */) {
    const { deleteTodoAction, todo } = this.props;
    deleteTodoAction(todo.id);
  }

  render() {
    const { button } = this.props;
    return (
      <button
        onClick={this.handleDelete}
        {...defaults(button)}
      />
    );
  }
}

DeleteTodo.propTypes = {
  deleteTodoAction: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,

  button: PropTypes.object,
};

DeleteTodo.defaultProps = defaultProps;
