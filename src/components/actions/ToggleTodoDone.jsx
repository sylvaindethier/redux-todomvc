import React, { Component, PropTypes } from 'react';
import { actions as actionsPropTypes, todo as todoPropTypes } from '../.propTypes';
import { ToggleTodoDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


export default class ToggleTodoDone extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleToggleTodoDone = this.handleToggleTodoDone.bind(this);
  }

  handleToggleTodoDone(/* e */) {
    const { actions, todo } = this.props;
    actions.toggleTodoDone(todo.id);
  }

  render() {
    const { todo, input } = this.props;
    return (
      <input
        onChange={this.handleToggleTodoDone}
        type="checkbox"
        checked={todo.done}
        {...defaults(input)}
      />
    );
  }
}

ToggleTodoDone.propTypes = {
  actions: actionsPropTypes,
  todo: todoPropTypes,

  input: PropTypes.object,
};

ToggleTodoDone.defaultProps = defaultProps;
