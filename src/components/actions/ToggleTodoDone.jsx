import React, { Component, PropTypes } from 'react';
import { ToggleTodoDone as defaultProps, defaultProps as defaults } from '../defaultProps';


export default class ToggleTodoDone extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(/* e */) {
    const { todo, toggleTodoDoneAction } = this.props;
    toggleTodoDoneAction(todo.id);
  }

  render() {
    const { todo, input } = this.props;
    return (
      <input
        type="checkbox"
        checked={todo.done}
        onChange={this.handleToggle}
        {...defaults(input)}
      />
    );
  }
}

ToggleTodoDone.propTypes = {
  toggleTodoDoneAction: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,

  input: PropTypes.object,
};

ToggleTodoDone.defaultProps = defaultProps;
