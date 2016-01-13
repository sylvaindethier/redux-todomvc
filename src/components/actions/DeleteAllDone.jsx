import React, { PropTypes, Component } from 'react';
import { DeleteAllDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


export default class DeleteAllDone extends Component {
  // we don't need to define an 'handleDeleteAllDone' as event is not used
  render() {
    const { deleteAllDoneAction, button } = this.props;
    return (
      <button
        onClick={deleteAllDoneAction}
        {...defaults(button)}
      />
    );
  }
}

DeleteAllDone.propTypes = {
  deleteAllDoneAction: PropTypes.func.isRequired,

  button: PropTypes.object,
};

DeleteAllDone.defaultProps = defaultProps;
