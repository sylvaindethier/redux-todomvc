import React, { Component, PropTypes } from 'react';
import { TodoTextInput as defaultProps, defaultProps as defaults } from './defaultProps';


const ENTER_KEYCODE = 13;
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

  handleSave(e) {
    const text = e.target.value.trim();
    this.props.saveText(text);
  }

  handleKeyDown(e) {
    if (e.which === ENTER_KEYCODE) {
      // save on ENTER
      this.handleSave(e);
      if (this.props.isNew) {
        // and reset for new todo
        this.setState(buildState(this.props.value));
      }
    }
  }

  handleChange(e) {
    this.setState(buildState(e.target.value));
  }

  handleBlur(e) {
    if (!this.props.isNew) {
      // save only for non newTodo
      this.handleSave(e);
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

  value: PropTypes.string,
  isNew: PropTypes.bool,
  input: PropTypes.object,
};

TodoTextInput.defaultProps = defaultProps;
