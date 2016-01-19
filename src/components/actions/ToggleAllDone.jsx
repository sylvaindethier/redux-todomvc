import React, { PropTypes } from 'react';
import { PropTypesActions } from '../../props/types';
import defaultProps, { defaultPropsToggleAllDone } from '../../props/defaults';


// no need for a toggleAllDone handler, event & props are useless
/**
 * ToggleAllDone component
 */
export default function ToggleAllDone(props) {
  const { actions, areAllDone, inputProps } = props;
  return (
    <input
      onChange={actions.toggleAllDone}
      type="checkbox"
      checked={areAllDone}
      {...defaultProps(inputProps)}
    />
  );
}

ToggleAllDone.propTypes = {
  actions: PropTypesActions,

  areAllDone: PropTypes.bool,
  inputProps: PropTypes.object,
};

ToggleAllDone.defaultProps = defaultPropsToggleAllDone;
ToggleAllDone.displayName = 'ToggleAllDone';
