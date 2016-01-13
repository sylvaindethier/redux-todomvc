import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes } from '../.propTypes';
import { ToggleAllDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


export default class ToggleAllDone extends Component {
  // we don't need to define an 'handleToggleAllDone' as event is useless
  render() {
    const { actions, areAllDone, input } = this.props;
    return (
      <input
        onChange={actions.toggleAllDone}
        type="checkbox"
        checked={areAllDone}
        {...defaults(input)}
      />
    );
  }
}

ToggleAllDone.propTypes = {
  actions: actionsPropTypes,

  areAllDone: PropTypes.bool,
  input: PropTypes.object,
};

ToggleAllDone.defaultProps = defaultProps;
