import React, { PropTypes, Component } from 'react';
import { DeleteAllDone as defaultProps, defaultProps as defaults } from '../defaultProps';


export default class DeleteAllDone extends Component {
  render() {
    const { deleteAllDoneAction, button } = this.props;
    return (
      <button onClick={deleteAllDoneAction} {...defaults(button)} />
    );
  }
}

DeleteAllDone.propTypes = {
  deleteAllDoneAction: PropTypes.func.isRequired,

  button: PropTypes.object,
};

DeleteAllDone.defaultProps = defaultProps;
