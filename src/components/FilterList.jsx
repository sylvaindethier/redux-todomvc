import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesFilter } from '../props/types';
import defaultProps, { defaultPropsFilterList } from '../props/defaults';
import Filter from './actions/Filter';
import { filters } from '../constants/filters';


/**
 * FilterList component
 */
export default function FilterList(props) {
  const { actions, filter: current } = props;

  const {
    ulProps,
    ulProps: { children: {
      liProps,
    } },
    ulProps: { children: { liProps: { children: {
      FilterProps,
    } } } },
  } = props;
  return (
    <ul {...defaultProps(ulProps)}>
      {filters.map(filter =>
        <li key={filter} {...defaultProps(liProps)}>
          <Filter
            actions={actions}
            filter={filter}
            isCurrent={filter === current}
            {...defaultProps(FilterProps)}
          />
        </li>
      )}
    </ul>
  );
}

FilterList.propTypes = {
  actions: PropTypesActions,
  filter: PropTypesFilter,

  ulProps: PropTypes.shape({ children: PropTypes.shape({
    liProps: PropTypes.shape({ children: PropTypes.shape({
      FilterProps: PropTypes.object,
    }) }),
  }) }),
};

FilterList.defaultProps = defaultPropsFilterList;
FilterList.displayName = 'FilterList';
