import React, { PropTypes, Component } from 'react';
import { actions as actionsPropTypes } from './.propTypes';
import { Header as defaultProps, defaultProps as defaults } from './.defaultProps';
import CreateText from './actions/CreateText';


export default class Header extends Component {
  render() {
    const { actions, header } = this.props;
    const { h1, CreateText: createText } = header.children;
    return (
      <header {...defaults(header)}>
        <h1 {...defaults(h1)} />
        <CreateText
          actions={actions}
          {...defaults(createText)}
        />
      </header>
    );
  }
}

Header.propTypes = {
  actions: actionsPropTypes,

  header: PropTypes.shape({ children: PropTypes.shape({
    h1: PropTypes.object,
    CreateText: PropTypes.object,
  }) }),
};

Header.defaultProps = defaultProps;
