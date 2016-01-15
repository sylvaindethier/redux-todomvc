import React, { PropTypes } from 'react';
import { actions as actionsPropTypes } from '../.propTypes';
import { DeleteAllDone as defaultProps, defaultProps as defaults } from '../.defaultProps';


// no need for a deleteAllDone handler, event & props are useless
export default function DeleteAllDone(props) {
  const { actions, button } = props;
  return (
    <button
      onClick={actions.deleteAllDone}
      {...defaults(button)}
    />
  );
}

DeleteAllDone.propTypes = {
  actions: actionsPropTypes,

  button: PropTypes.object,
};

DeleteAllDone.defaultProps = defaultProps;
