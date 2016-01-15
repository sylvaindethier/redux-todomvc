import React, { PropTypes } from 'react';
import { actions as actionsPropTypes } from '../.propTypes';
import { ToggleAllDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


// no need for a toggleAllDone handler, event & props are useless
export default function ToggleAllDone(props) {
  const { actions, areAllDone, input } = props;
  return (
    <input
      onChange={actions.toggleAllDone}
      type="checkbox"
      checked={areAllDone}
      {...defaults(input)}
    />
  );
}

ToggleAllDone.propTypes = {
  actions: actionsPropTypes,

  areAllDone: PropTypes.bool,
  input: PropTypes.object,
};

ToggleAllDone.defaultProps = defaultProps;
