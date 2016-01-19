import React, { PropTypes } from 'react';
import {
  actions as actionsPropTypes,
  filter as filterPropTypes,
} from '../props/types';
import defaults, { FilterList as defaultProps } from '../props/defaults';
import Filter from './actions/Filter';
import { filters } from '../constants/filters';


/**
 * FilterList component
 */
export default function FilterList(props) {
  const { actions, filter: current } = props;

  const {
    ul,
    ul: { children: {
      li,
    } },
    ul: { children: { li: { children: {
      Filter: filter,
    } } } },
  } = props;
  return (
    <ul {...ul}>
      {filters.map(filtr =>
        <li key={filtr} {...defaults(li)}>
          <Filter
            actions={actions}
            filter={filtr}
            isCurrent={filtr === current}
            {...defaults(filter)}
          />
        </li>
      )}
    </ul>
  );
}

FilterList.propTypes = {
  actions: actionsPropTypes,
  filter: filterPropTypes,

  ul: PropTypes.shape({ children: PropTypes.shape({
    li: PropTypes.shape({ children: PropTypes.shape({
      Filter: PropTypes.object,
    }) }),
  }) }),
};

FilterList.defaultProps = defaultProps;
