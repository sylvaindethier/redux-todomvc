import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  filter as filterPropTypes,
} from '../props/types';
import defaults, { Footer as defaultProps } from '../props/defaults';
import FilterList from './FilterList';
import DeleteAllDone from './actions/DeleteAllDone';


/**
 * Footer component
 */
export default function Footer(props) {
  const { actions, filter, totalCount, doneCount, filteredCount } = props;
  const leftCount = totalCount - doneCount;

  const {
    footer,
    footer: { children: {
      span,
      FilterList: filterList,
      DeleteAllDone: deleteAllDone,
    } },
  } = props;
  return (
    <footer {...defaults(footer)}>
      <span {...defaults(span, leftCount, totalCount, filteredCount)} />
      <FilterList
        actions={actions}
        filter={filter}
        {...defaults(filterList)}
      />
    {doneCount < 1 ? null : (
      <DeleteAllDone
        actions={actions}
        {...defaults(deleteAllDone)}
      />
    )}
    </footer>
  );
}

Footer.propTypes = {
  actions: actionsPropTypes,
  filter: filterPropTypes,

  totalCount: PropTypes.number,
  doneCount: PropTypes.number,
  filteredCount: PropTypes.number,
  footer: PropTypes.shape({ children: PropTypes.shape({
    span: PropTypes.object,
    FilterList: PropTypes.object,
    DeleteAllDone: PropTypes.object,
  }) }),
};

Footer.defaultProps = defaultProps;
