import React, { PropTypes, Component } from 'react';
import { FilterList as defaultProps, defaultProps as defaults } from './defaultProps';
import Filter from './actions/Filter';
import { NONE, DONE, TODO } from '../constants/filters';


export default class FilterList extends Component {
  render() {
    const { actions, filter: current } = this.props;
    const filters = [NONE, DONE, TODO];

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
  actions: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,

  ul: PropTypes.shape({ children: PropTypes.shape({
    li: PropTypes.shape({ children: PropTypes.shape({
      Filter: PropTypes.object,
    }) }),
  }) }),
};

FilterList.defaultProps = defaultProps;
