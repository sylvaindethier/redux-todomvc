import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  filter as filterPropTypes,
} from '../../props/types';
import defaults, { Filter as defaultProps } from '../../props/defaults';


// function filterAction(props) {
//   const { actions, filter: filtr } = props;
//   actions.filter(filtr);
// }
function filterHandler(props) {
  return function hanldeClick(/* e */) {
    // filterAction(props);
    const { actions, filter } = props;
    actions.filter(filter);
  };
}


/**
 * Filter component
 */
export default function Filter(props) {
  const { a } = props;
  return (
    <a
      onClick={filterHandler(props)}
      {...defaults(a, props)}
    />
  );
}

Filter.propTypes = {
  actions: actionsPropTypes,
  filter: filterPropTypes,

  isCurrent: PropTypes.bool,
  a: PropTypes.object,
};

Filter.defaultProps = defaultProps;
