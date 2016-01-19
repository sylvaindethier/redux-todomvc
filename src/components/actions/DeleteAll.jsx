import React from 'react';
import { PropTypesActions } from '../../props/types';
import { defaultPropsDeleteAll } from '../../props/defaults';

/**
 * DeleteAll component
 */
export default function DeleteAll() {
  return (
    <div>DeleteAll component is empty.</div>
  );
}

DeleteAll.propTypes = {
  actions: PropTypesActions,
};

DeleteAll.defaultProps = defaultPropsDeleteAll;
DeleteAll.displayName = 'DeleteAll';
