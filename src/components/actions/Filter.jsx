import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes, filter as filterPropTypes } from '../.propTypes';
import { Filter as defaultProps, defaultProps as defaults } from '../.defaultProps';

export default class Filter extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(/* e */) {
    const { actions, filter } = this.props;
    actions.filter(filter);
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
        onClick={this.handleFilter}
        style={{ cursor: 'pointer' }}
        {...defaults(el, this.props)}
      />
    );
  }
}

Filter.propTypes = {
  actions: actionsPropTypes,
  filter: filterPropTypes,

  isCurrent: PropTypes.bool,
  el: PropTypes.object,
};

Filter.defaultProps = defaultProps;
