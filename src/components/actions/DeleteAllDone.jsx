import React, { PropTypes } from 'react';
import { PropTypesActions } from '../../props/types';
import defaultProps, { defaultPropsDeleteAllDone } from '../../props/defaults';


// no need for a deleteAllDone handler, event & props are useless
/**
 * DeleteAllDone component
 */
export default function DeleteAllDone(props) {
  const { actions, buttonProps } = props;
  return (
    <button
      onClick={actions.deleteAllDone}
      {...defaultProps(buttonProps)}
    />
  );
}

DeleteAllDone.propTypes = {
  actions: PropTypesActions,

  buttonProps: PropTypes.object,
};

DeleteAllDone.defaultProps = defaultPropsDeleteAllDone;
DeleteAllDone.displayName = 'DeleteAllDone';
