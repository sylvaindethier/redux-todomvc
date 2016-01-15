import React, { PropTypes } from 'react';
import { actions as actionsPropTypes } from '../../props/types';
import defaults, { DeleteAllDone as defaultProps } from '../../props/defaults';


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
