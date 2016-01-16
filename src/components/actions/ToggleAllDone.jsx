import React, { PropTypes } from 'react';
import { actions as actionsPropTypes } from '../../props/types';
import defaults, { ToggleAllDone as defaultProps } from '../../props/defaults';


// no need for a toggleAllDone handler, event & props are useless
/**
 * ToggleAllDone component
 */
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
