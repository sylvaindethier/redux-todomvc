import React, { Component, PropTypes } from 'react';

const conf = {
  className(isNew) { return isNew ? 'new-todo' : 'edit'; },
};

const ENTER_KEYCODE = 13;

export default class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.buildState(this.props.value || '');

    // bind event handlers to this (no auto binding in Component)
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  buildState(value) {
    return { value };
  }

  handleSave(e) {
    const text = e.target.value.trim();
    this.props.save(text);
  }

  handleKeyDown(e) {
    if (e.which === ENTER_KEYCODE) {
      // save on ENTER
      this.handleSave(e);
      if (this.props.isNew) {
        // and reset for newTodo
        this.setState(this.buildState(''));
      }
    }
  }

  handleChange(e) {
    this.setState(this.buildState(e.target.value));
  }

  handleBlur(e) {
    if (!this.props.isNew) {
      // save only for non newTodo
      this.handleSave(e);
    }
  }

  render() {
    return (
      <input
        type="text"
        className={conf.className(this.props.isNew)}
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
