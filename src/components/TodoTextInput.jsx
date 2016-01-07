import React, { Component, PropTypes } from 'react';

const ENTER_KEYCODE = 13;

export default class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: this.props.value || '',
    };

    // bind event handlers to this (no auto binding in Component)
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleKeyDown(e) {
    const text = e.target.value.trim();
    if (e.which === ENTER_KEYCODE) {
      // save on ENTER
      this.props.save(text);
      if (this.props.isNew) {
        // and reset for newTodo
        this.setState({ value: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.isNew) {
      // save only for non newTodo
      this.props.save(e.target.value);
    }
  }

  render() {
    return (
      <input
        type="text"
        className={this.props.isNew ? 'new-todo' : 'edit'}
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.value}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

TodoTextInput.propTypes = {
  save: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isNew: PropTypes.bool,
};
