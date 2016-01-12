import React, { PropTypes, Component } from 'react';
import { Filter as defaultProps, defaultProps as defaults } from '../defaultProps';


export default class Filter extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(/* e */) {
    const { filterAction, filter } = this.props;
    filterAction(filter);
  }

  render() {
    const { isCurrent, el } = this.props;
    if (isCurrent) {
      return (
        <span {...defaults(el, this.props)} />
      );
    }
    return (
      <a
        style={{ cursor: 'pointer' }}
        onClick={this.handleFilter}
        {...defaults(el, this.props)}
      />
    );
  }
}

Filter.propTypes = {
  filterAction: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,

  isCurrent: PropTypes.bool,
  el: PropTypes.object,
};

Filter.defaultProps = defaultProps;
