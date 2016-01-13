import React, { PropTypes, Component } from 'react';
import { CreateText as defaultProps, defaultProps as defaults } from '../.defaultProps';
import TodoTextInput from '../TodoTextInput';


export default class CreateText extends Component {
  constructor(props, context) {
    super(props, context);
    this.createText = this.createText.bind(this);
  }

  createText(text) {
    const { createTextAction } = this.props;
    if (text && text.length !== 0) {
      createTextAction(text);
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
  createTextAction: PropTypes.func.isRequired,

  TodoTextInput: PropTypes.object,
};

CreateText.defaultProps = defaultProps;
