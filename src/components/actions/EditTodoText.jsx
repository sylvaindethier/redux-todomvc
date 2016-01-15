import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes, editing as editingPropTypes } from '../.propTypes';
import { EditTodoText as defaultProps, defaultProps as defaults } from '../.defaultProps';

const KEYCODE_ESC = 27;
const KEYCODE_ENTER = 13;


export default class EditTodoText extends Component {
  constructor(props, context) {
    super(props, context);

    // bind event handlers to this (no auto binding in Component)
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  _saveText({ text }) {
    const { isNew, saveText } = this.props;
    if (isNew) {
      // reset for new todo
      // this._resetState();
    }
    saveText({ text });
    this.cancelEditTodoText();
  }

  editTodoText({ id, text }) {
    const { actions } = this.props;
    actions.editTodoText({ id, text });
  }

  cancelEditTodoText() {
    // this._resetState();
    // call cancelEditTodoText action
    const { actions } = this.props;
    actions.cancelEditTodoText();
  }

  handleKeyDown(e) {
    const { which } = e;

    // save on ENTER
    if (which === KEYCODE_ENTER) this.handleSave(e);
    // cancel on ESC
    if (which === KEYCODE_ESC) this.cancelEditTodoText();
  }

  handleChange(e) {
    const { id } = this.props.editing;
    const text = e.target.value;
    this.editTodoText({ id, text });
  }

  handleBlur(e) {
    // save on blur for non new Todo (already created)
    if (!this.props.isNew) this.handleSave(e);
  }

  handleSave(e) {
    const text = e.target.value.trim();
    this._saveText({ text });
  }

  render() {
    const { editing, input } = this.props;
    return (
      <input
        type="text"
        autoFocus="true"
        value={editing.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        {...defaults(input)}
      />
    );
  }
}

EditTodoText.propTypes = {
  actions: actionsPropTypes,
  editing: editingPropTypes,
  saveText: PropTypes.func.isRequired,

  isNew: PropTypes.bool,
  input: PropTypes.object,
};

EditTodoText.defaultProps = defaultProps;
