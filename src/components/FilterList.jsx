import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes, filter as filterPropTypes } from './.propTypes';
import { FilterList as defaultProps, defaultProps as defaults } from './.defaultProps';
import Filter from './actions/Filter';
import { filters } from '../constants/filters';

export default class FilterList extends Component {
  render() {
    const { actions, filter: current } = this.props;

    const { ul } = this.props;
    const { li } = ul.children;
    const { Filter: filter } = li.children;
    return (
      <ul {...ul}>
        {filters.map(filtr =>
          <li key={filtr} {...defaults(li)}>
            <Filter
              filterAction={actions.filter}
              filter={filtr}
              isCurrent={filtr === current}
              {...defaults(filter)}
            />
          </li>
        )}
      </ul>
    );
  }
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
