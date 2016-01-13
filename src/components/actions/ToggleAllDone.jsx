import React, { PropTypes, Component } from 'react';
import { ToggleAllDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


export default class ToggleAllDone extends Component {
  // we don't need to define an 'handleToggleAllDone' as event is useless
  render() {
    const { toggleAllDoneAction, areAllDone, input } = this.props;
    return (
      <input
        type="checkbox"
        checked={areAllDone}
        onChange={toggleAllDoneAction}
        {...defaults(input)}
      />
    );
  }
}

ToggleAllDone.propTypes = {
  toggleAllDoneAction: PropTypes.func.isRequired,

  areAllDone: PropTypes.bool,
  input: PropTypes.object,
};

ToggleAllDone.defaultProps = defaultProps;
