import React, { PropTypes } from 'react';
import { actions as actionsPropTypes } from '../.propTypes';
import { CreateText as defaultProps, defaultProps as defaults } from '../.defaultProps';
import TodoTextInput from '../TodoTextInput';


function createTextHandler(props) {
  const { actions } = props;
  return function createText(text) {
    if (text && text.length) {
      actions.createText(text);
    }
  };
}

export default function CreateText(props) {
  const { TodoTextInput: todoTextInput } = props;
  return (
    <TodoTextInput
      saveText={createTextHandler(props)}
      {...defaults(todoTextInput)}
    />
  );
}

CreateText.propTypes = {
  actions: actionsPropTypes,

  TodoTextInput: PropTypes.object,
};

CreateText.defaultProps = defaultProps;
