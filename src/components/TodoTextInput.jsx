import React, { Component, PropTypes } from 'react';
import { TodoTextInput as defaultProps, defaultProps as defaults } from './.defaultProps';
const KEYCODE_ENTER = 13;
const KEYCODE_ESC = 27;

// TODO: remove state from this component
// TODO: but for now it's fine as it doesn't interact w/ other component

function buildState(value) { return { value }; }


export default class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = buildState(this.props.value);

    // bind event handlers to this (no auto binding in Component)
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  _resetState() {
    // set state w/ initial value
    this.setState(buildState(this.props.value));
  }

  handleSaveText(e) {
    if (this.props.isNew) {
      // reset for new todo
      this._resetState();
    }
    // save w/ input's value
    const text = e.target.value.trim();
    this.props.saveText(text);
  }

  handleCancel(/* e */) {
    this._resetState();
    // cancel if any
    if (this.props.cancel) this.props.cancel();
  }

  handleKeyDown(e) {
    switch (e.which) {
      case KEYCODE_ENTER:
        this.handleSaveText(e);
        break;

      case KEYCODE_ESC:
        this.handleCancel(e);
        break;

      default:
        break;
    }
  }

  handleChange(e) {
    this.setState(buildState(e.target.value));
  }

  handleBlur(e) {
    if (!this.props.isNew) {
      // save only for non newTodo
      this.handleSaveText(e);
    }
  }

  render() {
    const { input } = this.props;
    return (
      <input
        type="text"
        autoFocus="true"
        value={this.state.value}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        {...defaults(input)}
      />
    );
  }
}

TodoTextInput.propTypes = {
  saveText: PropTypes.func.isRequired,

  cancel: PropTypes.func,
  value: PropTypes.string,
  isNew: PropTypes.bool,
  input: PropTypes.object,
};

TodoTextInput.defaultProps = defaultProps;
