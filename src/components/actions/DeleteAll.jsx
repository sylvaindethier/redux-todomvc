import React, { Component } from 'react';
import { actions as actionsPropTypes } from '../.propTypes';
import { DeleteAll as defaultProps } from '../.defaultProps';


export default class DeleteAll extends Component {
  render() {
    return (
      <div>DeleteAll component is empty.</div>
    );
  }
}

DeleteAll.propTypes = {
  actions: actionsPropTypes,
};

DeleteAll.defaultProps = defaultProps;
