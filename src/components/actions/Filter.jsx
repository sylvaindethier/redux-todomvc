import React, { PropTypes } from 'react';
import { actions as actionsPropTypes, filter as filterPropTypes } from '../.propTypes';
import { Filter as defaultProps, defaultProps as defaults } from '../.defaultProps';


function filterHandler(props) {
  return function handleFilter(/* e */) {
    const { actions, filter } = props;
    actions.filter(filter);
  };
}

export default function Filter(props) {
  const { isCurrent, el } = props;
  if (isCurrent) {
    return (
      <span {...defaults(el, props)} />
    );
  }
  return (
    <a
      onClick={filterHandler(props)}
      style={{ cursor: 'pointer' }}
      {...defaults(el, props)}
    />
  );
}

Filter.propTypes = {
  actions: actionsPropTypes,
  filter: filterPropTypes,

  isCurrent: PropTypes.bool,
  el: PropTypes.object,
};

Filter.defaultProps = defaultProps;
