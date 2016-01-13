import React, { Component, PropTypes } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { DeleteTodo as defaultProps, defaultProps as defaults } from '../.defaultProps';


export default class DeleteTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleDeleteTodo(/* e */) {
    const { actions, todo } = this.props;
    actions.deleteTodo(todo.id);
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
  actions: actionsPropTypes,
  todo: todoPropTypes,

  button: PropTypes.object,
};

DeleteTodo.defaultProps = defaultProps;
