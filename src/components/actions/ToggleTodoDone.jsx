import React, { Component, PropTypes } from 'react';
import { todo as todoPropTypes } from '../.propTypes';
import { ToggleTodoDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


export default class ToggleTodoDone extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleToggleTodoDone = this.handleToggleTodoDone.bind(this);
  }

  handleToggleTodoDone(/* e */) {
    const { todo, toggleTodoDoneAction } = this.props;
    toggleTodoDoneAction(todo.id);
  }

  render() {
    const { todo, input } = this.props;
    return (
      <input
        type="checkbox"
        checked={todo.done}
        onChange={this.handleToggleTodoDone}
        {...defaults(input)}
      />
    );
  }
}

ToggleTodoDone.propTypes = {
  toggleTodoDoneAction: PropTypes.func.isRequired,
  todo: todoPropTypes,

  input: PropTypes.object,
};

ToggleTodoDone.defaultProps = defaultProps;
