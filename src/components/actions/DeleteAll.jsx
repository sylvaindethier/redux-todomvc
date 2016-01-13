import React, { PropTypes, Component } from 'react';
import { DeleteAll as defaultProps } from '../.defaultProps';


export default class DeleteAll extends Component {
  render() {
    return (
      <div>DeleteAll component is empty.</div>
    );
  }
}

DeleteAll.propTypes = {
  deleteAllAction: PropTypes.func.isRequired,
};

DeleteAll.defaultProps = defaultProps;
