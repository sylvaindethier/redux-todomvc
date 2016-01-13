import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes } from '../.propTypes';
import { DeleteAllDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


export default class DeleteAllDone extends Component {
  // we don't need to define an 'handleDeleteAllDone' as event is useless
  render() {
    const { actions, button } = this.props;
    return (
      <button
        onClick={actions.deleteAllDone}
        {...defaults(button)}
      />
    );
  }
}

DeleteAllDone.propTypes = {
  actions: actionsPropTypes,

  button: PropTypes.object,
};

DeleteAllDone.defaultProps = defaultProps;
