import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesFilter } from '../../props/types';
import defaultProps, { defaultPropsFilter } from '../../props/defaults';


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
  const { aProps } = props;
  return (
    <a
      onClick={filterHandler(props)}
      {...defaultProps(aProps, props)}
    />
  );
}

Filter.propTypes = {
  actions: PropTypesActions,
  filter: PropTypesFilter,

  isCurrent: PropTypes.bool,
  aProps: PropTypes.object,
};

Filter.defaultProps = defaultPropsFilter;
