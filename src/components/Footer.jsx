import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes, filter as filterPropTypes } from './.propTypes';
import { Footer as defaultProps, defaultProps as defaults } from './.defaultProps';
import FilterList from './FilterList';
import DeleteAllDone from './actions/DeleteAllDone';

export default class Footer extends Component {
  render() {
    const { actions, filter, totalCount, doneCount, filteredCount } = this.props;
    const leftCount = totalCount - doneCount;

    const { footer } = this.props;
    const {
      span,
      FilterList: filterList,
      DeleteAllDone: deleteAllDone,
    } = footer.children;
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
          deleteAllDoneAction={actions.deleteAllDone}
          {...defaults(deleteAllDone)}
        />
      )}
      </footer>
    );
  }
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
