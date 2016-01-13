import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes } from '../.propTypes';
import { CreateText as defaultProps, defaultProps as defaults } from '../.defaultProps';
import TodoTextInput from '../TodoTextInput';


export default class CreateText extends Component {
  constructor(props, context) {
    super(props, context);
    this.createText = this.createText.bind(this);
  }

  createText(text) {
    const { actions } = this.props;
    if (text && text.length) {
      actions.createText(text);
    }
  }

  render() {
    const { TodoTextInput: todoTextInput } = this.props;
    return (
      <TodoTextInput
        saveText={this.createText}
        {...defaults(todoTextInput)}
      />
    );
  }
}

CreateText.propTypes = {
  actions: actionsPropTypes,

  TodoTextInput: PropTypes.object,
};

CreateText.defaultProps = defaultProps;
