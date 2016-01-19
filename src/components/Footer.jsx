import React, { PropTypes } from 'react';
import { PropTypesActions, PropTypesFilter } from '../props/types';
import defaultProps, { defaultPropsFooter } from '../props/defaults';
import FilterList from './FilterList';
import DeleteAllDone from './actions/DeleteAllDone';


/**
 * Footer component
 */
export default function Footer(props) {
  const { actions, filter, totalCount, doneCount, filteredCount } = props;
  const leftCount = totalCount - doneCount;

  const {
    footerProps,
    footerProps: { children: {
      spanProps,
      FilterListProps,
      DeleteAllDoneProps,
    } },
  } = props;
  return (
    <footer {...defaultProps(footerProps)}>
      <span {...defaultProps(spanProps, leftCount, totalCount, filteredCount)} />
      <FilterList
        actions={actions}
        filter={filter}
        {...defaultProps(FilterListProps)}
      />
    {doneCount < 1 ? null : (
      <DeleteAllDone
        actions={actions}
        {...defaultProps(DeleteAllDoneProps)}
      />
    )}
    </footer>
  );
}

Footer.propTypes = {
  actions: PropTypesActions,
  filter: PropTypesFilter,

  totalCount: PropTypes.number,
  doneCount: PropTypes.number,
  filteredCount: PropTypes.number,
  footerProps: PropTypes.shape({ children: PropTypes.shape({
    spanProps: PropTypes.object,
    FilterListProps: PropTypes.object,
    DeleteAllDoneProps: PropTypes.object,
  }) }),
};

Footer.defaultProps = defaultPropsFooter;
