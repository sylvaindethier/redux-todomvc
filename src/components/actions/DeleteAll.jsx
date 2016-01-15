import React from 'react';
import { actions as actionsPropTypes } from '../../props/types';
import { DeleteAll as defaultProps } from '../../props/defaults';


export default function DeleteAll() {
  return (
    <div>DeleteAll component is empty.</div>
  );
}

DeleteAll.propTypes = {
  actions: actionsPropTypes,
};

DeleteAll.defaultProps = defaultProps;
