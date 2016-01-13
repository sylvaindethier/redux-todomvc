import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { EditTodo as defaultProps, defaultProps as defaults } from '../.defaultProps';


export default class EditTodo extends Component {
  constructor(props, context) {
    super(props, context);

    // bind handlers as there's no auto binding in Component class
    this.handleEditTodo = this.handleEditTodo.bind(this);
  }

  handleEditTodo(/* e */) {
    const { actions, todo } = this.props;
    actions.editTodo(todo.id);
  }

  render() {
    const { todo, label } = this.props;
    return (
      <label onDoubleClick={this.handleEditTodo} {...defaults(label)}>
        {todo.text}
      </label>
    );
  }
}

EditTodo.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  label: PropTypes.object,
};

EditTodo.defaultProps = defaultProps;
